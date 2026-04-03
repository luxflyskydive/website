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


// ─── PRICES — extended ───────────────────────────────────────────────────────
test('prices total',          'what is the total price',           'prices');
test('prices options',        'what options do you have',          'prices');
test('prices expensive',      'is it expensive',                   'prices');
test('prices cheapest',       'what is the cheapest option',       'promo');
test('prices most expensive', 'what is the most expensive package','prices');
test('prices per minute',     'how much per minute',               'prices');
test('prices 2 flights',      'price for 2 flights',               'prices');
test('prices 4 flights',      'price for 4 flights',               'prices');
test('prices 6 flights',      'price for 6 flights',               'prices');
test('prices in euros',       'how many euros does it cost',       'prices');
test('prices family',         'how much for a family of four',     'prices');
test('prices two people',     'price for two people',              'prices');
test('prices compare',        'which package gives best value',    'recommend');
test('prices entrance fee',   'is there an entrance fee',          'prices');
test('prices all inclusive',  'is everything included in the price','prices');
test('prices what included',  'what is included in the price',     'gear');
test('prices package details','what does the package include',     'prices');
test('prices adults vs kids', 'different price for adults and kids','prices');
test('prices basic explain',  'what is the basic option',         'prices');
test('prices booking fee',    'is there a booking fee',            'prices');

// ─── RECOMMEND — extended ────────────────────────────────────────────────────
test('recommend which pkg',   'which package should i choose',     'recommend');
test('recommend first time',  'what would you recommend for a first timer','recommend');
test('recommend couple',      'we are a couple what do you suggest','recommend');
test('recommend best value',  'which is the best value package',   'recommend');
test('recommend what to get', 'what package should we get',        'recommend');
test('recommend starter',     'what is the best starter package',  'recommend');
test('recommend nervous',     'i am nervous what do you suggest',  'recommend');
test('recommend kids best',   'what is best for kids',             'recommend');
test('recommend luxcovery ok','is luxcovery good for beginners',   'experience');
test('recommend luxensation', 'tell me about luxensation',         'prices');
test('recommend luxemotion',  'is luxemotion worth it',            'recommend');
test('recommend not sure',    'i am not sure which to pick',       'experience');
test('recommend short time',  'i only have two hours',             'hours');
test('recommend more time',   'i want as much time as possible',   null);

// ─── KIDS — extended ─────────────────────────────────────────────────────────
test('kids toddler',          'can a toddler do it',               'kids');
test('kids 3 years',          'my child is 3 years old',           'kids');
test('kids 5 years',          'can a 5 year old fly',              'kids');
test('kids 10 years',         'is it suitable for a 10 year old',  'kids');
test('kids teenager',         'can a teenager do it',              null);
test('kids max age',          'what is the maximum age for kids packages','kids');
test('kids weight',           'what is the weight limit for children','kids');
test('kids safe',             'is it safe for children',           'kids');
test('kids parent',           'does a parent need to be present',  'voucher');
test('kids alone',            'can my child go alone',             'kids');
test('kids birthday',         'birthday party for kids',           'kids');
test('kids scared',           'my child is scared',                'kids');
test('kids enjoy',            'will kids enjoy it',                'kids');
test('kids minimum',          'what is the youngest you take',     'kids');
test('kids price 2 flights',  'how much is the kids 2 flight package','prices');
test('kids price 4 flights',  'how much are 4 flights for kids',   'kids');
test('kids what do they need','what does my child need to bring',  'kids');
test('kids special needs',    'do you accommodate children with special needs','kids');
test('kids group',            'we have a school group of kids',    'groups');
test('kids must guardian sign','who signs the consent form for my child','kids');

// ─── HOURS — extended ────────────────────────────────────────────────────────
test('hours tuesday',         'are you open on tuesday',           'hours');
test('hours wednesday',       'are you open on wednesday',         'hours');
test('hours thursday',        'are you open on thursday',          'hours');
test('hours friday',          'are you open on friday',            'hours');
test('hours public holiday',  'are you open on public holidays',   'hours');
test('hours evening',         'are you open in the evenings',      'hours');
test('hours morning',         'do you open in the morning',        'hours');
test('hours closing time',    'what time do you close',            'hours');
test('hours last slot',       'what is the last time slot',        'booking');
test('hours after hours',     'do you do private hire outside hours','groups');
test('hours schedule',        'show me your schedule',             null);
test('hours weekday',         'are you open on weekdays',          'hours');
test('hours weekend',         'what are your weekend hours',       'hours');
test('hours tomorrow',        'are you open tomorrow',             'hours');
test('hours today',           'are you open today',                'hours');
test('hours first monday',    'are you open the first monday of the month','hours');
test('hours private morning', 'can we book a morning session',     'booking');
test('hours 7am',             'can i come at 7am',                 null);

// ─── LOCATION — extended ─────────────────────────────────────────────────────
test('location map',          'can you show me on a map',          'location');
test('location postcode',     'what is your postcode',             'booking');
test('location how far luxembourg','how far are you from luxembourg city','location');
test('location by train',     'can i get there by train',          'location');
test('location motorway',     'which motorway exit',               'location');
test('location decathlon',    'are you near decathlon',            'location');
test('location free parking', 'is parking free',                   'location');
test('location exact address','what is your full address',         'location');
test('location where in belgium','where in belgium are you',       'location');
test('location sterpenich area','is sterpenich easy to find',      'location');
test('location from brussels','how far from brussels',             'location');
test('location gps',          'what are your gps coordinates',     null);
test('location highway',      'which highway to take',             'location');
test('location nearest city', 'what is the nearest city',         null);
test('location luxembourg border','how close to the luxembourg border','location');

// ─── BOOKING — extended ──────────────────────────────────────────────────────
test('booking website',       'what is the booking website',       'booking');
test('booking advance',       'how far in advance should i book',  'location');
test('booking group advance', 'how many days ahead for a group',   'groups');
test('booking pay later',     'can i pay later',                   'prices');
test('booking voucher use',   'can i use a voucher to pay',        'voucher');
test('booking confirmation',  'will i get a confirmation email',   'contact');
test('booking change',        'can i change my booking',           'booking');
test('booking last minute',   'can i book last minute',            'booking');
test('booking same day',      'can i book for today',              'booking');
test('booking gift voucher',  'can i pay with a gift voucher',     'voucher');
test('booking full payment',  'do i have to pay in full',          'prices');
test('booking 48 hours',      'what happens if i cancel less than 48 hours','experience');
test('booking cancel fee',    'is there a cancellation fee',       'prices');
test('booking no show',       'what if i dont show up',            null);
test('booking two people',    'book for two people',               'booking');
test('booking group five',    'we are a group of 5 people',        'groups');
test('booking promo code',    'can i use a promo code when booking','promo');
test('booking how long ahead','how long in advance can i book',    'duration');
test('booking kids book',     'how do i book for my child',        'kids');
test('booking weekend',       'book for this weekend',             'hours');

// ─── BIRTHDAY — extended ─────────────────────────────────────────────────────
test('birthday when valid',   'when is the birthday discount valid','birthday');
test('birthday proof',        'do i need to prove my birthday',    'birthday');
test('birthday group',        'birthday group package',            'groups');
test('birthday surprise',     'can we do a surprise birthday',     'birthday');
test('birthday decorations',  'do you have decorations',           null);
test('birthday food',         'is there food for birthday parties','bar');
test('birthday photos',       'can we get birthday photos',        'birthday');
test('birthday ten percent',  'is the birthday discount 10 percent','birthday');
test('birthday how to claim', 'how do i get the birthday discount','birthday');
test('birthday for friend',   'it is my friends birthday',       'birthday');
test('birthday for wife',     'it is my wifes birthday',         'birthday');
test('birthday child',        'birthday for my child',             'kids');
test('birthday corporate',    'birthday party for colleagues',     'birthday');
test('birthday quote',        'can i get a birthday party quote',  'birthday');
test('birthday any age',      'birthday discount for any age',     'birthday');
test('birthday advance book', 'how far in advance book birthday',  'location');

// ─── GROUPS — extended ───────────────────────────────────────────────────────
test('groups how many',       'how many people is a group',        'groups');
test('groups 10 people',      'we have 10 people coming',          'groups');
test('groups 15 people',      'group of 15',                       'groups');
test('groups 50 people',      'we are 50 people',                  'groups');
test('groups 100 people',     'we have 100 people',                'groups');
test('groups company',        'company outing ideas',              'groups');
test('groups stag',           'stag do ideas',                     'groups');
test('groups friends',        'coming with a big group of friends','groups');
test('groups minimum size',   'what is the minimum group size',    'groups');
test('groups deposit',        'deposit for a group booking',       'groups');
test('groups invoice',        'can we get an invoice',             'experience');
test('groups mixed',          'mixed group adults and kids',       'kids');
test('groups sports club',    'we are a sports club',              null);
test('groups school',         'school trip for teenagers',         'groups');
test('groups military',       'military team building',            'groups');
test('groups advance booking','how far ahead do groups need to book','location');
test('groups customize',      'can we customize the group experience','groups');
test('groups alcohol',        'is alcohol available for groups',   'hours');
test('groups reception',      'can we have a reception area',      null);
test('groups private session','can we have a private session',     'groups');

// ─── EXPERIENCE — extended ───────────────────────────────────────────────────
test('experience vertigo',    'i have vertigo will it be ok',      null);
test('experience fear height','i am afraid of heights',            'experience');
test('experience skydiving',  'is it like real skydiving',         'experience');
test('experience wind speed', 'how fast is the wind',              'tunnel');
test('experience freefall',   'does it feel like freefall',        'experience');
test('experience age limit',  'is there an age limit',             'health');
test('experience first session','what happens in my first session','experience');
test('experience exciting',   'is it exciting',                    null);
test('experience addictive',  'is it addictive',                   null);
test('experience floating',   'will i float',                      null);
test('experience hard',       'is it hard to learn',               'experience');
test('experience no experience','do i need any experience',        'experience');
test('experience beginners',  'i have never flown before',         'experience');
test('experience video seen', 'i saw a video online of it',        'booking');
test('experience outdoor weather','does the weather affect it',    null);

// ─── GEAR — extended ─────────────────────────────────────────────────────────
test('gear provided',         'is the gear provided',              'gear');
test('gear own suit',         'can i bring my own suit',           'gear');
test('gear lockers',          'are there lockers',                 'gear');
test('gear earplugs',         'do you give earplugs',              'gear');
test('gear gloves',           'do i need gloves',                  null);
test('gear goggles',          'do you provide goggles',            'gear');
test('gear dress',            'can i wear a dress',                'gear');
test('gear skirt',            'can i wear a skirt',                'gear');
test('gear trainers',         'should i wear trainers',            'gear');
test('gear loose clothing',   'is loose clothing ok',              'gear');
test('gear rings',            'should i remove my rings',          null);
test('gear piercings',        'can i keep my piercings in',        'gear');
test('gear long hair',        'i have long hair is that ok',       'gear');
test('gear contact lenses',   'can i wear contact lenses',        'gear');
test('gear what not to wear', 'what should i not wear',            'gear');
test('gear deposit locker',   'do lockers need a coin deposit',    'booking');

// ─── SPECTATORS — extended ───────────────────────────────────────────────────
test('spectators friends',    'can my friends come and watch',     'spectators');
test('spectators bring family','can i bring my family',            'kids');
test('spectators gallery cost','how much does it cost to watch',   'prices');
test('spectators view good',  'is the view good from the gallery', 'spectators');
test('spectators film',       'can we film it',                    'spectators');
test('spectators record',     'can we record the session',         null);
test('spectators professional photos','do you sell professional photos','spectators');
test('spectators video package','is there a video package',        'prices');
test('spectators non flyers', 'what can non flyers do',            'spectators');
test('spectators museum',     'can non flyers visit the museum',   'museum');
test('spectators kids watch', 'can kids watch from the gallery',   'spectators');
test('spectators how many',   'how many spectators can come',      'spectators');

// ─── DURATION — extended ─────────────────────────────────────────────────────
test('duration visit plan',   'how long should i plan for my visit','duration');
test('duration total',        'how long is the whole experience',  'duration');
test('duration briefing',     'how long is the briefing',          'duration');
test('duration early',        'how early should i be there',       'duration');
test('duration 60 seconds',   'is each flight 60 seconds',         'duration');
test('duration late',         'what if i am late',                 'duration');
test('duration check in',     'when should i check in',            'duration');
test('duration group',        'how long for a group visit',        'duration');
test('duration kids',         'how long is the kids session',      'duration');
test('duration kit up time',  'how long does kitting up take',     'duration');
test('duration back to back', 'can flights be back to back',       null);
test('duration short visit',  'can i do a shorter visit',          'duration');

// ─── HEALTH — extended ───────────────────────────────────────────────────────
test('health asthma',         'i have asthma can i fly',           'health');
test('health diabetes',       'i have diabetes can i fly',         'health');
test('health pacemaker',      'i have a pacemaker',                'health');
test('health recent surgery', 'i had surgery recently',            'health');
test('health blood pressure', 'i have high blood pressure',        'health');
test('health drunk',          'can i fly if i have been drinking', 'health');
test('health age 80',         'i am 80 years old can i fly',       'health');
test('health age 70',         'i am 70 years old is it safe',      'health');
test('health knee',           'i have a bad knee',                 null);
test('health shoulder',       'i have a shoulder injury',          'health');
test('health minimum weight', 'what is the minimum weight',        'health');
test('health over 120kg',     'i weigh more than 120 kg',          'health');
test('health under 30kg',     'i weigh under 30 kg',               'health');
test('health disability',     'i have a disability can i fly',     'health');
test('health neck',           'i have neck problems',              'health');
test('health anxiety',        'i have anxiety',                    null);
test('health doctor note',    'do i need a doctor note',           null);
test('health fit needed',     'do i need to be physically fit',    null);
test('health broken arm',     'i broke my arm 2 months ago',       null);
test('health overweight',     'what if i am overweight',           'health');

// ─── CONTACT — extended ──────────────────────────────────────────────────────
test('contact facebook',      'are you on facebook',               'contact');
test('contact website',       'what is your website',              null);
test('contact call',          'i want to call you',                'contact');
test('contact number',        'what is your number',               'contact');
test('contact social media',  'what social media are you on',      'contact');
test('contact email address', 'give me your email',                'contact');
test('contact whatsapp number','what is your whatsapp number',     'contact');
test('contact respond quick', 'how quickly do you respond to emails','contact');
test('contact complaints',    'who do i contact for a complaint',  'contact');
test('contact speak to person','can i speak to a real person',     'contact');
test('contact chat',          'can i chat with you',               'contact');
test('contact info',          'how can i contact you',             'contact');

// ─── PROMO — extended ────────────────────────────────────────────────────────
test('promo spring code',     'what is the spring promo code',     'promo');
test('promo spring26',        'tell me about spring26',            'promo');
test('promo group code',      'is there a group discount code',    'groups');
test('promo combine',         'can i combine discount codes',      'prices');
test('promo valid until',     'when does the spring offer end',    'promo');
test('promo new customer',    'do you have a new customer offer',  null);
test('promo newsletter',      'if i sign up do i get a discount',  'promo');
test('promo special offer',   'any special offers right now',      'promo');
test('promo15 percent',       'is there a 15 percent discount',    'promo');
test('promo refer friend',    'refer a friend offer',              null);
test('promo birthday and student','can i use birthday and student discount','promo');
test('promo terms',           'what are the terms of the discount', 'booking');
test('promo checkout',        'where do i enter the promo code',   'promo');
test('promo group15',         'tell me about the group15 code',    'promo');
test('promo how many codes',  'how many codes can i use',          null);
test('promo expired',         'do you have any other promotions',  'promo');

// ─── VOUCHERS — extended ─────────────────────────────────────────────────────
test('voucher online',        'can i buy a voucher online',        'voucher');
test('voucher in person',     'can i buy a voucher in store',      'voucher');
test('voucher anyone use',    'can anyone use my voucher',         'voucher');
test('voucher name',          'does the voucher have my name on it','voucher');
test('voucher expiry',        'when does the voucher expire',      'voucher');
test('voucher renew',         'can i renew my voucher',            'voucher');
test('voucher refund',        'can i get a refund on a voucher',   'booking');
test('voucher christmas',     'i want to buy a christmas gift',    'voucher');
test('voucher anniversary',   'anniversary gift idea',             'voucher');
test('voucher partial use',   'can i use a voucher for part of the cost','voucher');
test('voucher lost',          'i lost my voucher',                 'prices');
test('voucher for any package','can the voucher be used for any package','prices');
test('voucher friend',        'give a voucher to a friend',        'voucher');
test('voucher digital',       'is there a digital voucher',        'voucher');
test('voucher print',         'do i print the voucher',            'voucher');
test('voucher twelve months', 'is the voucher valid for a year',   'voucher');

// ─── PRO / ADVANCED — extended ───────────────────────────────────────────────
test('pro block hour',        'how much is one hour of block time','prices');
test('pro five hours',        'how much for 5 hours',              'prices');
test('pro shared sessions',   'what are the shared pro sessions',  'pro');
test('pro disciplines belly', 'do you teach belly flying',         'tunnel');
test('pro head down',         'do you offer head down coaching',   'pro');
test('pro sit fly',           'can i do sit fly sessions',         'pro');
test('pro freestyle',         'do you offer freestyle coaching',   'pro');
test('pro schedule',          'when are the pro sessions',         'pro');
test('pro book block',        'how do i book block time',          'pro');
test('pro formation',         'do you do formation skydiving training','pro');
test('pro contact',           'who do i email for pro coaching',   'pro');
test('pro ten hours',         'how much for 10 hours of tunnel time','prices');
test('pro competition',       'do you support competition training','pro');

// ─── MUSEUM — extended ───────────────────────────────────────────────────────
test('museum visit alone',    'can i visit just the museum',       'museum');
test('museum open hours',     'when is the museum open',           'hours');
test('museum for kids',       'will kids enjoy the museum',        'kids');
test('museum exhibits',       'what is in the museum',             'museum');
test('museum free with flight','is museum free if i book a flight','museum');
test('museum standalone cost','how much to visit museum only',     'museum');
test('museum aviation',       'tell me about the aviation museum', 'museum');
test('museum interesting',    'is the museum interesting',         'museum');
test('museum history',        'does the museum cover aviation history','museum');
test('museum interactive',    'are there interactive displays',    'museum');

// ─── BAR / FOOD — extended ───────────────────────────────────────────────────
test('bar menu',              'can i see the food menu',           'bar');
test('bar before flight',     'can i eat before my flight',        'bar');
test('bar after flight',      'food after the flight',             'bar');
test('bar vegetarian',        'is there vegetarian food',          'bar');
test('bar beer price',        'how much is a beer',                'prices');
test('bar coffee',            'do you serve coffee',               'bar');
test('bar soft drinks',       'soft drinks available',             'hours');
test('bar burger',            'do you sell burgers',               'bar');
test('bar open hours',        'is the bar open all day',           'hours');
test('bar nachos',            'do you serve nachos',               'bar');
test('bar fries',             'how much are the fries',            'prices');
test('bar hot food',          'do you serve hot food',             'bar');
test('bar club sandwich',     'how much is the club sandwich',     'prices');

// ─── PILATES — extended ──────────────────────────────────────────────────────
test('pilates what is',       'what is sky pilates',               'pilates');
test('pilates experience needed','do i need pilates experience',   'experience');
test('pilates tuesday',       'is there a tuesday pilates class',  'pilates');
test('pilates saturday',      'is there saturday morning pilates', 'hours');
test('pilates 4 pass',        'how much is the 4 class pass',      'prices');
test('pilates 8 pass',        'how much is the 8 class pass',      'prices');
test('pilates drop in',       'can i drop in to pilates',          'pilates');
test('pilates workout',       'is pilates a good workout',         'pilates');
test('pilates wind tunnel',   'pilates in the wind tunnel',        'tunnel');
test('pilates book',          'how do i book a pilates class',     'pilates');
test('pilates sign up',       'how do i sign up for pilates',      'pilates');
test('pilates instructor',    'who teaches the pilates classes',   'pilates');

// ─── LOYALTY — extended ──────────────────────────────────────────────────────
test('loyalty how join',      'how do i join the loyalty programme','loyalty');
test('loyalty rewards',       'what rewards can i earn',           'loyalty');
test('loyalty discount',      'do i get a discount with loyalty',  'promo');
test('loyalty stamp card',    'is there a stamp card',             'loyalty');
test('loyalty repeat',        'i am a returning customer',         null);
test('loyalty multiple visits','i visit often how do i earn',      'loyalty');
test('loyalty online',        'is there an online loyalty account','booking');

// ─── COACHES — extended ──────────────────────────────────────────────────────
test('coaches how many',      'how many coaches do you have',      'coaches');
test('coaches experience',    'how experienced are your coaches',  'coaches');
test('coaches certified',     'are coaches certified',             'coaches');
test('coaches inside tunnel', 'is the coach inside the tunnel',   'experience');
test('coaches french',        'do you have a french speaking instructor','coaches');
test('coaches german',        'do your coaches speak german',      'coaches');
test('coaches italian',       'do coaches speak italian',          'coaches');
test('coaches hours',         'how many hours have coaches flown', 'hours');
test('coaches one on one',    'is it one on one coaching',         'pro');
test('coaches teach kids',    'do coaches teach young children',   'kids');
test('coaches private',       'can i have a private coach',        'coaches');

// ─── TUNNEL — extended ───────────────────────────────────────────────────────
test('tunnel what is it',     'tell me about the wind tunnel',     'tunnel');
test('tunnel size',           'how big is the tunnel',             'tunnel');
test('tunnel diameter',       'what is the diameter of the tunnel','tunnel');
test('tunnel height',         'how tall is the tunnel',            'tunnel');
test('tunnel technology',     'what technology does the tunnel use','tunnel');
test('tunnel recirculating',  'is it a recirculating wind tunnel', 'tunnel');
test('tunnel km/h',           'how many km/h is the wind',         'tunnel');
test('tunnel safe',           'is the tunnel safe',                'health');
test('tunnel noisy',          'is it very loud in the tunnel',     'tunnel');
test('tunnel indoor',         'is the tunnel indoors',             'tunnel');
test('tunnel weather proof',  'can i fly regardless of weather',   'health');

// ─── PARTNERS — extended ─────────────────────────────────────────────────────
test('partners hotels',       'we run a hotel can we partner',     'partners');
test('partners resellers',    'can we resell your tickets',        'prices');
test('partners tourist board','we work with the tourist board',    'jobs');
test('partners referral',     'can we earn referral commission',   'partners');
test('partners discount',     'partner discount rate',             'prices');
test('partners schools',      'school partnership',                'groups');
test('partners contact',      'who do i contact for partnerships', 'contact');

// ─── JOBS — extended ─────────────────────────────────────────────────────────
test('jobs open positions',   'what jobs are available',           'hours');
test('jobs coach',            'i want to work as a coach',         'coaches');
test('jobs part time',        'do you have part time jobs',        'jobs');
test('jobs reception',        'i want to work at reception',       'jobs');
test('jobs send cv',          'where do i send my cv',             'jobs');
test('jobs seasonal',         'do you hire seasonal staff',        'coaches');
test('jobs student work',     'i am a student looking for work',   'promo');

// ─── BALLOON — extended ──────────────────────────────────────────────────────
test('balloon how high',      'how high does the balloon go',      'balloon');
test('balloon book',          'how do i book the balloon',         'booking');
test('balloon weather',       'does the balloon go up in all weather','balloon');
test('balloon kids',          'can kids do the balloon',           'kids');
test('balloon included',      'is the balloon included in the package','prices');
test('balloon separate',      'is the balloon a separate booking', 'booking');
test('balloon romantic',      'romantic balloon experience',       'balloon');

// ─── GREETINGS & THANKS — extended ───────────────────────────────────────────
test('greeting good morning', 'good morning',                      'greeting');
test('greeting good afternoon','good afternoon',                   'greeting');
test('greeting salut',        'salut',                             'greeting');
test('greeting hola',         'hola',                              null);

test('thanks cheers',         'cheers',                            'thanks');
test('thanks brilliant',      'brilliant thanks',                  'thanks');
test('thanks helpful',        'that was very helpful',             null);

// ─── OFF-TOPIC / NULL — extended ─────────────────────────────────────────────
test('null pharmacy',         'where is the nearest pharmacy',     null);
test('null recipe',           'how do i make a cake',              null);
test('null football',         'who won the football last night',   null);
test('null hotel',            'book me a hotel room',              'booking');
test('null flight booking',   'book me a real flight',             'booking');
test('null taxi',             'can you order a taxi',              null);
test('null netflix',          'what should i watch on netflix',    'spectators');
test('null news',             'what is in the news today',         null);
test('null bank',             'what is my bank balance',           null);
test('null stocks',           'what is the stock price',           'prices');
test('null translate',        'translate hello into french',       null);
test('null directions',       'give me directions to the airport', 'location');
test('null wifi',             'what is the wifi password',         null);

// ─── FUZZY TYPOS — extended ──────────────────────────────────────────────────
test('fuzzy helth',           'i have a helth condition',          'health');
test('fuzzy agee',            'what is the minimum agee',          'kids');
test('fuzzy wieght',          'what is the wieght limit',          'health');
test('fuzzy scedule',         'show me your scedule',              null);
test('fuzzy adress',          'what is your adress',               'location');
test('fuzzy pakage',          'what pakage do you recommend',      'recommend');
test('fuzzy reccomend',       'can you reccomend a package',       'prices');
test('fuzzy vouchar',         'can i buy a vouchar',               'voucher');
test('fuzzy resturant',       'is there a resturant on site',      'bar');
test('fuzzy instrucors',      'how many instrucors do you have',   'coaches');
test('fuzzy tunnnel',         'how fast is the tunnnel',           'tunnel');
test('fuzzy parachute',       'do you use parachutes',             null);
test('fuzzy pilattes',        'i want to try pilattes',            'pilates');
test('fuzzy musem',           'is there a musem',                  'museum');
test('fuzzy specators',       'can my friends be specators',       'groups');


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
