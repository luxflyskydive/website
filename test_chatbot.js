'use strict';
// ─── Test harness for Luxfly chatbot ─────────────────────────────────────────
// Extracts only KB + pure functions (stops before DOM/CSS code)
const fs = require('fs');
const lines = fs.readFileSync(__dirname + '/js/chatbot.js', 'utf8').split('\n');

// Find the line where DOM/CSS code starts (const css = `)
let cutLine = lines.length;
for (let i = 0; i < lines.length; i++) {
  if (/^\s*const css\s*=\s*`/.test(lines[i])) { cutLine = i; break; }
}
// Skip line 0 (IIFE wrapper) — take only pure KB + function lines
const coreSrc = lines.slice(1, cutLine).join('\n');

let KB, classify, isGreeting, isThanks, fuzzyCorrect;
try {
  const exports = eval('(function(){\n' + coreSrc + '\nreturn {KB,classify,isGreeting,isThanks,fuzzyCorrect};\n})()');
  ({ KB, classify, isGreeting, isThanks, fuzzyCorrect } = exports);
} catch(e) {
  console.error('Failed to load chatbot:', e.message);
  process.exit(1);
}

// ─── Test runner ─────────────────────────────────────────────────────────────
let pass = 0, fail = 0;
const failures = [];

function test(description, input, expectedCategory) {
  const got = expectedCategory === 'greeting'
    ? (isGreeting(input) ? 'greeting' : null)
    : expectedCategory === 'thanks'
    ? (isThanks(input) ? 'thanks' : null)
    : classify(input);
  if (got === expectedCategory) {
    pass++;
  } else {
    fail++;
    failures.push(`  FAIL: "${input}"\n       expected=${expectedCategory} got=${got}`);
  }
}

// ─── PRICES ──────────────────────────────────────────────────────────────────
test('prices basic',          'how much does it cost',          'prices');
test('prices euro',           'what is the price',              'prices');
test('prices package',        'tell me about your packages',    'prices');
test('prices how much',       'how much is a flight',           'prices');
test('prices adult',          'adult package price',            'prices');
test('prices luxcovery',      'what is luxcovery',              'prices');
test('prices luxensation',    'tell me about luxensation',      'prices');
test('prices luxemotion',     'what is luxemotion',             'prices');
test('prices basic option',   'is there a basic option',        'prices');
test('prices cost',           'what does it cost',              'prices');

// ─── FIRST TIMER ─────────────────────────────────────────────────────────────
test('firsttimer never',      'i have never done this before',  'experience');
test('firsttimer beginner',   'i am a complete beginner',       'experience');
test('firsttimer nervous',    'i am nervous about flying',      'experience');
test('firsttimer recommend',  'what do you recommend for beginners', 'experience');
test('firsttimer first time', 'it is my first time',            'experience');
test('firsttimer what pkg',   'which package for first timer',  'recommend');
test('firsttimer scared',     'i am a bit scared',              null);

// ─── KIDS ─────────────────────────────────────────────────────────────────────
test('kids age',              'what is the minimum age',        'kids');
test('kids can my child',     'can my child fly',               'kids');
test('kids package',          'kids package price',             'kids');
test('kids 4 year old',       'my child is 4 years old',        'kids');
test('kids minimum age',      'what age do kids need to be',    'kids');
test('kids price',            'how much for kids',              'kids');
test('kids consent',          'do i need to sign a consent form', 'kids');

// ─── HOURS ───────────────────────────────────────────────────────────────────
test('hours open',            'what are your opening hours',    'hours');
test('hours when open',       'when are you open',              'hours');
test('hours saturday',        'are you open on saturday',       'hours');
test('hours sunday',          'open on sunday',                 'hours');
test('hours monday',          'are you open monday',            'hours');
test('hours what time',       'what time do you open',          'hours');
test('hours closed',          'when are you closed',            'hours');
test('hours last entry',      'what is the last entry time',    'hours');

// ─── LOCATION ────────────────────────────────────────────────────────────────
test('location where',        'where are you located',          'location');
test('location address',      'where is your address',          'location');
test('location directions',   'how do i get there',             'location');
test('location parking',      'is there parking',               'location');
test('location sterpenich',   'where is sterpenich',            'location');
test('location by car',       'how to get there by car',        'location');
test('location bus',          'can i get there by bus',         'location');
test('location luxembourg',   'are you near luxembourg',        'location');
test('location ikea',         'are you near ikea',              'location');

// ─── BOOKING ─────────────────────────────────────────────────────────────────
test('booking how',           'how do i book',                  'booking');
test('booking online',        'can i book online',              'booking');
test('booking cancel',        'can i cancel my booking',        'booking');
test('booking refund',        'what is the refund policy',      'booking');
test('booking walkin',        'can i walk in',                  'booking');
test('booking phone',         'can i book by phone',            'booking');
test('booking reschedule',    'can i reschedule',               'booking');
test('booking deposit',       'do you need a deposit',          'booking');

// ─── BIRTHDAY ────────────────────────────────────────────────────────────────
test('birthday party',        'i want to have a birthday party', 'birthday');
test('birthday discount',     'do you have a birthday discount', 'birthday');
test('birthday month',        'is there a birthday month deal',  'birthday');
test('birthday celebrate',    'we want to celebrate a birthday', 'birthday');

// ─── GROUPS ──────────────────────────────────────────────────────────────────
test('groups team',           'we are a group of 20 people',    'groups');
test('groups corporate',      'we want a corporate event',      'groups');
test('groups team building',  'do you do team building',        'groups');
test('groups bachelor',       'we are planning a bachelor party', 'groups');
test('groups hen',            'hen party ideas',                'groups');
test('groups discount',       'group discount',                 'groups');

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
test('experience what is',    'what is indoor skydiving',       'experience');
test('experience how',        'how does it feel',               'experience');
test('experience dangerous',  'is it dangerous',                'experience');
test('experience safe',       'is indoor skydiving safe',       'experience');
test('coaches instructor help', 'will an instructor help me',   'coaches');
test('experience fit',        'do i need to be fit',            'experience');
test('experience feel like',  'what does it feel like',         'experience');

// ─── WHAT TO WEAR ─────────────────────────────────────────────────────────────
test('wear what',             'what should i wear',             'gear');
test('wear jumpsuit',         'do you provide a jumpsuit',      'gear');
test('wear glasses',          'can i wear glasses',             'gear');
test('wear shoes',            'what shoes should i wear',       'gear');
test('wear jewellery',        'can i wear jewellery',           'gear');
test('wear helmet',           'do i get a helmet',              'gear');
test('wear what to bring',    'what do i need to bring',        'gear');

// ─── SPECTATORS ──────────────────────────────────────────────────────────────
test('spectators watch',      'can my family watch',            'spectators');
test('spectators gallery',    'is there a viewing gallery',     'spectators');
test('spectators free',       'is it free to watch',            'spectators');
test('spectators photos',     'can they take photos',           'spectators');

// ─── VISIT INFO ──────────────────────────────────────────────────────────────
test('visit arrive',          'when should i arrive',           'duration');
test('visit how long',        'how long does it take',          'duration');
test('visit duration',        'how long is the visit',          'duration');
test('visit flight length',   'how long is each flight',        'duration');

// ─── HEALTH ──────────────────────────────────────────────────────────────────
test('health pregnant',       'can i fly if i am pregnant',     'health');
test('health heart',          'i have a heart condition',       'health');
test('health weight limit',   'what is the weight limit',       'health');
test('health max age',        'is there a maximum age',         'health');
test('health back problem',   'i have a bad back',              'health');
test('health epilepsy',       'i have epilepsy',                'health');
test('health weight',         'what is the maximum weight',     'health');

// ─── CONTACT ─────────────────────────────────────────────────────────────────
test('contact phone',         'what is your phone number',      'contact');
test('contact email',         'what is the email address',      'contact');
test('contact whatsapp',      'do you have whatsapp',           'contact');
test('contact get in touch',  'how do i get in touch',          'contact');
test('contact instagram',     'are you on instagram',           'contact');

// ─── PROMOTIONS ──────────────────────────────────────────────────────────────
test('promos discount code',  'do you have a discount code',    'promo');
test('promos spring offer',   'is there a spring offer',        'promo');
test('promos current deals',  'what deals do you have',         'promo');
test('promos student',        'student discount',               'promo');

// ─── VOUCHERS ────────────────────────────────────────────────────────────────
test('vouchers gift',         'can i buy a gift voucher',       'voucher');
test('vouchers valid',        'how long is a voucher valid for', 'voucher');
test('vouchers gift idea',    'i want to give a gift',          'voucher');
test('vouchers buy',          'where can i buy a voucher',      'voucher');

// ─── PRO / ADVANCED ──────────────────────────────────────────────────────────
test('pro block time',        'i want to book block time',      'pro');
test('pro advanced',          'i am an advanced flyer',         'pro');
test('pro coaching',          'do you offer coaching',          'pro');
test('pro tunnel time',       'i want dedicated tunnel time',   'pro');
test('pro disciplines',       'do you have head down sessions', 'pro');

// ─── MUSEUM ──────────────────────────────────────────────────────────────────
test('museum included',       'is the museum included',         'museum');
test('museum what is it',     'what is the aviation museum',    'museum');
test('museum price',          'how much is museum entry',       'museum');
test('museum standalone',     'can i visit the museum without flying', 'museum');

// ─── BAR ─────────────────────────────────────────────────────────────────────
test('bar food',              'do you serve food',              'bar');
test('bar drinks',            'can i get a drink',              'bar');
test('bar restaurant',        'is there a restaurant',          'bar');
test('bar burger price',      'how much is the burger',         'bar');

// ─── SKY PILATES ─────────────────────────────────────────────────────────────
test('pilates class',         'do you offer pilates',           'pilates');
test('pilates schedule',      'when are the pilates classes',   'pilates');
test('pilates price',         'how much is a pilates class',    'pilates');

// ─── LOYALTY ─────────────────────────────────────────────────────────────────
test('loyalty programme',     'do you have a loyalty programme', 'loyalty');
test('loyalty points',        'how do i earn points',           'loyalty');
test('loyalty card',          'is there a loyalty card',        'loyalty');

// ─── COACHES ─────────────────────────────────────────────────────────────────
test('coaches instructor',    'will there be an instructor',    'coaches');
test('coaches qualified',     'are the instructors qualified',  'coaches');
test('coaches english',       'do you speak english',           'coaches');
test('coaches languages',     'what languages do you speak',    'coaches');

// ─── TUNNEL ──────────────────────────────────────────────────────────────────
test('tunnel specs',          'what are the tunnel specs',      'tunnel');
test('tunnel speed',          'how fast is the wind',           'tunnel');
test('tunnel wind speed',     'what wind speed',                'tunnel');

// ─── PARTNERS ────────────────────────────────────────────────────────────────
test('partners become',       'i want to become a partner',     'partners');
test('partners commission',   'what commission do partners earn', 'partners');
test('partners travel agent', 'we are a travel agent',          'partners');

// ─── JOBS ─────────────────────────────────────────────────────────────────────
test('jobs hiring',           'are you hiring',                 'jobs');
test('jobs apply',            'how do i apply for a job',       'jobs');
test('coaches tunnel instructor job', 'i want to be a tunnel instructor', 'coaches');

// ─── BALLOON ─────────────────────────────────────────────────────────────────
test('balloon hot air',       'do you offer hot air balloon rides', 'balloon');
test('balloon price',         'how much is the balloon experience', 'balloon');

// ─── GREETINGS ───────────────────────────────────────────────────────────────
test('greeting hello',        'hello',                          'greeting');
test('greeting hi',           'hi',                             'greeting');
test('greeting hey',          'hey!',                           'greeting');
test('greeting bonjour',      'bonjour',                        'greeting');

// ─── THANKS ──────────────────────────────────────────────────────────────────
test('thanks basic',          'thanks',                         'thanks');
test('thanks thank you',      'thank you very much',            'thanks');
test('thanks merci',          'merci',                          'thanks');
test('thanks perfect',        'perfect thank you',              'thanks');

// ─── OFF-TOPIC / FALLBACK ─────────────────────────────────────────────────────
test('offtopic cigarettes',   'where can i buy cigarettes',     null);
test('offtopic weather',      'what is the weather like today', null);
test('offtopic pizza',        'best pizza near me',             null);
test('offtopic amazon',       'how do i track my amazon order', null);

// ─── FUZZY TYPOS ─────────────────────────────────────────────────────────────
test('fuzzy prise',           'how much is the prise',          'prices');
test('fuzzy oepning',         'what are your oepning hours',    'hours');
test('fuzzy instrucor',       'will an instrucor help me',      'coaches');
test('fuzzy bookin',          'how do i bookin online',         'booking');
test('fuzzy locaion',         'what is your locaion',           'location');

// ─── RESULTS ─────────────────────────────────────────────────────────────────
console.log('\n========================================');
console.log('Luxfly Chatbot — Test Results');
console.log('========================================');
if (failures.length) {
  failures.forEach(f => console.log(f));
  console.log();
}
console.log('✅ Passed: ' + pass);
console.log('❌ Failed: ' + fail);
console.log('Total:     ' + (pass + fail));
console.log('========================================\n');
process.exit(fail > 0 ? 1 : 0);
