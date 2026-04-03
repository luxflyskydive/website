#!/usr/bin/env python3
"""
translate_site.py
Generates pre-translated HTML pages in /fr/, /de/, /lb/, /nl/ subdirectories.
Uses deep-translator (Google backend) for 100% coverage of all text.
"""

import os
import re
import time
import json
from bs4 import BeautifulSoup, NavigableString, Comment, Doctype, Doctype
from deep_translator import GoogleTranslator

ROOT = os.path.dirname(os.path.abspath(__file__))
LANGS = ['fr', 'de', 'nl', 'lb']
CACHE_FILE = os.path.join(ROOT, 'translation_cache.json')

# Tags whose text we never translate
SKIP_TAGS = {'script', 'style', 'meta', 'link', 'noscript', 'code', 'pre', 'textarea'}

# Attributes to translate
TRANSLATE_ATTRS = ['placeholder', 'alt', 'title', 'aria-label', 'data-tooltip']

# Strings that should never be translated
NEVER_TRANSLATE = {
    'Luxfly', 'LuxFly', 'LUXFLY', 'indoorskydive.lu', 'luxfly.eu',
    'shop.indoorskydive.lu', 'IBA', 'EN', 'FR', 'DE', 'LB', 'NL',
    'IKEA', 'Decathlon', 'Arlon', 'Kleinbettingen', 'Sterpenich',
    'Luxembourg', 'E411', 'TEC', 'AV', 'CRM',
}

# Asset tag/attr combos — need ../ prefix in translated subdir pages
ASSET_ATTRS = {
    'link':   ['href'],
    'script': ['src'],
    'img':    ['src', 'data-src', 'data-lazy'],
    'video':  ['src', 'poster'],
    'source': ['src', 'srcset'],
    'audio':  ['src'],
    'use':    ['href', 'xlink:href'],
}
# HTML file extensions — navigation links, NOT assets (don't add ../)
HTML_EXTS = {'.html', '.htm'}

def load_cache():
    if os.path.exists(CACHE_FILE):
        with open(CACHE_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}

def save_cache(cache):
    with open(CACHE_FILE, 'w', encoding='utf-8') as f:
        json.dump(cache, f, ensure_ascii=False, indent=2)

def should_translate(text):
    text = text.strip()
    if not text or len(text) < 2:
        return False
    if not re.search(r'[a-zA-Z]', text):
        return False
    if re.match(r'^[\w\.\-]+@[\w\.\-]+\.\w+$', text):
        return False
    if text.startswith('http') or text.startswith('www.'):
        return False
    if re.match(r'^[\+\d\s\(\)\-\.]{7,}$', text):
        return False
    if text in NEVER_TRANSLATE:
        return False
    if len(text) <= 2:
        return False
    return True

def collect_strings(html_files):
    strings = set()
    for html_file in html_files:
        with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        soup = BeautifulSoup(content, 'html.parser')
        for element in soup.find_all(string=True):
            if isinstance(element, Comment):
                continue
            if element.parent and element.parent.name in SKIP_TAGS:
                continue
            text = element.strip()
            if should_translate(text):
                strings.add(text)
        for tag in soup.find_all(True):
            for attr in TRANSLATE_ATTRS:
                if tag.has_attr(attr):
                    val = tag[attr].strip()
                    if should_translate(val):
                        strings.add(val)
    return list(strings)

def translate_strings(strings, lang, cache):
    lang_cache = cache.get(lang, {})
    to_translate = [s for s in strings if s not in lang_cache]

    if not to_translate:
        print(f'  {lang}: all {len(strings)} strings from cache')
        cache[lang] = lang_cache
        return lang_cache

    print(f'  {lang}: translating {len(to_translate)} new strings ({len(strings)-len(to_translate)} cached)...')

    translator = GoogleTranslator(source='en', target=lang)
    BATCH_SIZE = 40
    MAX_CHARS = 4500

    i = 0
    translated = 0
    while i < len(to_translate):
        batch = []
        total_chars = 0
        while i < len(to_translate) and len(batch) < BATCH_SIZE:
            s = to_translate[i]
            if total_chars + len(s) > MAX_CHARS and batch:
                break
            batch.append(s)
            total_chars += len(s) + 15
            i += 1

        if not batch:
            i += 1
            continue

        try:
            if len(batch) == 1:
                result = translator.translate(batch[0])
                lang_cache[batch[0]] = result
                translated += 1
            else:
                SEPARATOR = ' ||| '
                combined = SEPARATOR.join(batch)
                result = translator.translate(combined)
                parts = result.split('|||')
                parts = [p.strip().strip('|').strip() for p in parts]

                if len(parts) == len(batch):
                    for orig, trans in zip(batch, parts):
                        lang_cache[orig] = trans
                    translated += len(batch)
                else:
                    for s in batch:
                        try:
                            lang_cache[s] = translator.translate(s)
                            translated += 1
                            time.sleep(0.05)
                        except Exception as e:
                            print(f'    skip ({e}): {s[:40]}')
                            lang_cache[s] = s
            time.sleep(0.15)
        except Exception as e:
            print(f'    batch error ({e}), retrying one by one...')
            for s in batch:
                try:
                    lang_cache[s] = translator.translate(s)
                    translated += 1
                    time.sleep(0.1)
                except Exception as e2:
                    lang_cache[s] = s
            time.sleep(0.3)

        if translated % 100 == 0 and translated > 0:
            print(f'    {translated}/{len(to_translate)} done...')
            save_cache({**cache, lang: lang_cache})

    print(f'  {lang}: done ({translated} translated)')
    cache[lang] = lang_cache
    return lang_cache

def fix_asset_paths(soup):
    """
    Prepend ../ to all relative asset paths so that CSS, JS, and images
    load correctly from a /lang/ subdirectory.
    Navigation <a href="page.html"> links are left alone.
    """
    def needs_prefix(path):
        if not path:
            return False
        if path.startswith('http') or path.startswith('//') or \
           path.startswith('#') or path.startswith('data:') or \
           path.startswith('../') or path.startswith('/') or \
           path.startswith('mailto:') or path.startswith('tel:') or \
           path.startswith('javascript'):
            return False
        return True

    # Fix dedicated asset tags
    for tag_name, attrs in ASSET_ATTRS.items():
        for tag in soup.find_all(tag_name):
            for attr in attrs:
                val = tag.get(attr, '')
                if needs_prefix(val):
                    tag[attr] = '../' + val

    # Fix <a href> that point to non-HTML files (PDFs, images, etc.)
    for a in soup.find_all('a', href=True):
        href = a['href']
        if not needs_prefix(href):
            continue
        # Check if it's a navigation link to an HTML page
        path_only = href.split('?')[0].split('#')[0]
        _, ext = os.path.splitext(path_only)
        if ext.lower() in HTML_EXTS or ext == '':
            # HTML or directory — navigation link, keep as-is
            continue
        # Non-HTML asset (pdf, jpg, etc.) — add ../
        a['href'] = '../' + href

    # Fix inline style src references (background-image: url(...))
    for tag in soup.find_all(style=True):
        style = tag['style']
        def replace_url(m):
            url = m.group(1).strip('"\'')
            if needs_prefix(url):
                url = '../' + url
            return f"url('{url}')"
        tag['style'] = re.sub(r"url\(['\"]?([^)'\"\s]+)['\"]?\)", replace_url, style)

def update_switcher(soup, filename, lang):
    nav_lang = soup.find(class_='nav-lang')
    if not nav_lang:
        return

    lang_btn = nav_lang.find(class_='lang-btn')
    if lang_btn:
        svg = lang_btn.find('svg')
        lang_btn.clear()
        lang_btn.append(NavigableString(lang.upper() + ' '))
        if svg:
            lang_btn.append(svg)

    dropdown = nav_lang.find(class_='nav-dropdown')
    if not dropdown:
        return

    lang_map = [
        ('en', f'../{filename}'),
        ('fr', filename if lang == 'fr' else f'../fr/{filename}'),
        ('de', filename if lang == 'de' else f'../de/{filename}'),
        ('lb', filename if lang == 'lb' else f'../lb/{filename}'),
        ('nl', filename if lang == 'nl' else f'../nl/{filename}'),
    ]

    dropdown.clear()
    for l, href in lang_map:
        if l == lang:
            continue
        a = soup.new_tag('a', href=href)
        a.string = l.upper()
        dropdown.append(a)

def update_root_switcher(soup, filename):
    nav_lang = soup.find(class_='nav-lang')
    if not nav_lang:
        return

    dropdown = nav_lang.find(class_='nav-dropdown')
    if not dropdown:
        return

    lang_map = [
        ('fr', f'fr/{filename}'),
        ('de', f'de/{filename}'),
        ('lb', f'lb/{filename}'),
        ('nl', f'nl/{filename}'),
    ]

    dropdown.clear()
    for l, href in lang_map:
        a = soup.new_tag('a', href=href)
        a.string = l.upper()
        dropdown.append(a)

def translate_html_file(html_file, lang, lang_cache, out_dir):
    filename = os.path.basename(html_file)

    with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    soup = BeautifulSoup(content, 'html.parser')

    # Set html lang attribute
    html_tag = soup.find('html')
    if html_tag:
        html_tag['lang'] = lang

    # ── 1. Translate text nodes ──────────────────────────────────────────
    for element in soup.find_all(string=True):
        if isinstance(element, Comment):
            continue
        if element.parent and element.parent.name in SKIP_TAGS:
            continue
        text = element.strip()
        if text and text in lang_cache:
            translated = lang_cache[text]
            raw = str(element)
            prefix = raw[:len(raw) - len(raw.lstrip())]
            suffix = raw[len(raw.rstrip()):]
            element.replace_with(prefix + translated + suffix)

    # ── 2. Translate attributes ──────────────────────────────────────────
    for tag in soup.find_all(True):
        for attr in TRANSLATE_ATTRS:
            if tag.has_attr(attr):
                val = tag[attr].strip()
                if val in lang_cache:
                    tag[attr] = lang_cache[val]

    # ── 3. Fix asset paths (add ../ so CSS/JS/images load from /lang/) ───
    fix_asset_paths(soup)

    # ── 4. Update language switcher ──────────────────────────────────────
    update_switcher(soup, filename, lang)

    # ── 5. Clean up old ?lang= params from links ─────────────────────────
    for a in soup.find_all('a', href=True):
        href = a['href']
        if '?lang=' in href or '&lang=' in href:
            href = re.sub(r'[?&]lang=[a-z]+', '', href)
            a['href'] = href

    # ── 6. Remove i18n.js (not needed — page is already translated) ──────
    for script in soup.find_all('script', src=True):
        if 'i18n' in script.get('src', ''):
            script.decompose()

    # Save
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, filename)
    # BS4 serializes DOCTYPE as bare 'html' text — strip it and prepend proper one
    html_out = str(soup)
    html_out = re.sub(r'^\s*html\s*\n', '', html_out)
    html_out = '<!DOCTYPE html>\n' + html_out
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html_out)

    return out_path

def update_root_pages(html_files):
    """
    Update root English pages:
    - Language switcher links to lang subdirs
    - Remove i18n.js (its localStorage behaviour keeps showing partial translations)
    """
    for html_file in html_files:
        filename = os.path.basename(html_file)
        with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        soup = BeautifulSoup(content, 'html.parser')

        # Update switcher to point to /fr/, /de/, /lb/, /nl/
        update_root_switcher(soup, filename)

        # Remove i18n.js — it reads localStorage and applies partial translations
        # which makes the English page appear "stuck" in another language
        for script in soup.find_all('script', src=True):
            if 'i18n' in script.get('src', ''):
                script.decompose()

        html_out = str(soup)
        html_out = re.sub(r'^\s*html\s*\n', '', html_out)
        html_out = '<!DOCTYPE html>\n' + html_out
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(html_out)

def main():
    print('=== Luxfly Site Translator ===')

    html_files = [
        os.path.join(ROOT, f) for f in os.listdir(ROOT)
        if f.endswith('.html') and os.path.isfile(os.path.join(ROOT, f))
    ]
    html_files.sort()
    print(f'Found {len(html_files)} HTML files')

    cache = load_cache()

    print('\nCollecting translatable strings...')
    all_strings = collect_strings(html_files)
    print(f'Found {len(all_strings)} unique translatable strings')

    print('\nTranslating...')
    for lang in LANGS:
        lang_cache = translate_strings(all_strings, lang, cache)
        save_cache(cache)

    print('\nGenerating translated pages...')
    for lang in LANGS:
        lang_cache = cache.get(lang, {})
        out_dir = os.path.join(ROOT, lang)
        count = 0
        for html_file in html_files:
            translate_html_file(html_file, lang, lang_cache, out_dir)
            count += 1
        print(f'  {lang}: {count} pages written to /{lang}/')

    print('\nUpdating root English pages...')
    update_root_pages(html_files)
    print(f'  Done — switcher updated, i18n.js removed from {len(html_files)} pages')

    save_cache(cache)
    print('\nAll done!')
    for lang in LANGS:
        print(f'  {lang}: {len(cache.get(lang, {}))} translations')

if __name__ == '__main__':
    main()
