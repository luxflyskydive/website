(function () {
  'use strict';

  // ─── Knowledge Base ────────────────────────────────────────────────────────
  const KB = {
    prices: {
      keywords: [
        'price', 'prices', 'cost', 'costs', 'how much', 'package', 'packages',
        'kostet', 'kosten', 'tarif', 'tarifs', 'prix', 'rate', 'rates', 'fee',
        'fees', 'charge', 'pay', 'ticket', 'tickets', 'option', 'options',
        'affordable', 'cheap', 'expensive', 'budget', 'adult price', 'adult package'
      ],
      response: () => `Here are our flight packages:\n\n**🧒 KIDS (under 18)**\n✈️ **JUNIOR DISCOVERY** — 2 flights (2 min): **€45.90**\n✈️ **JUNIOR EXPLORER** — 4 flights (4 min): **€79.90**\n✈️ **JUNIOR ADVENTURE** — 6 flights (6 min): **€109.90**\n\n**👤 ADULTS**\n✈️ **LUXCOVERY** — 2 flights (2 min): **€65.90**\n✈️ **LUXPLORER** — 4 flights (4 min): **€114.90**\n✈️ **LUXPERIENCE** — 6 flights (6 min): **€159.90**\n✈️ **LUXMASTER** — 8 flights (8 min): **€199.90**\n\nAll packages include gear, safety briefing, and **Aviation Museum** access. 🎫\n\nNeed group rates, shared sessions, or pro training? Just ask!`
    },

    kids: {
      keywords: [
        'kid', 'kids', 'child', 'children', 'baby', 'junior', 'young',
        'minimum age', 'how old', 'can my kid', 'can children', 'for children',
        'for kids', 'how much for kid', 'price for child', 'price for kids',
        'family', 'how young', 'kind', 'enfant', 'enfants', 'age limit',
        'age restriction', 'my son', 'my daughter', 'my child', 'old enough'
      ],
      response: () => `**Kids are absolutely welcome at Luxfly!** 🧒✈️\n\nThe **minimum age is 4 years old**.\n\n**Kids Packages:**\n✈️ **JUNIOR DISCOVERY** — 2 flights: **€45.90**\n✈️ **JUNIOR EXPLORER** — 4 flights: **€79.90**\n✈️ **JUNIOR ADVENTURE** — 6 flights: **€109.90**\n\n⚖️ Weight: minimum **30 kg**, maximum **120 kg** for all flyers.\n\nKids must be accompanied by a parent or guardian. Our certified instructors are specially trained to work with children — safe, fun, and unforgettable!\n\nAll packages include equipment, briefing, and **Aviation Museum** access. 🎫`
    },

    hours: {
      keywords: [
        'hour', 'hours', 'open', 'opening', 'close', 'closing', 'closed',
        'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
        'weekend', 'weekday', 'time', 'times', 'when', 'geöffnet', 'öffnungszeiten',
        'ouvert', 'horaire', 'horaires', 'what time', 'today', 'tomorrow', 'available'
      ],
      response: () => `**Luxfly Opening Hours:**\n\n📅 **Monday:** 12:00 – 20:00\n📅 **Tuesday:** 12:00 – 20:00\n📅 **Wednesday:** 12:00 – 20:00\n📅 **Thursday:** 12:00 – 20:00\n📅 **Friday:** 12:00 – 22:00\n📅 **Saturday:** 10:00 – 22:00\n📅 **Sunday:** 10:00 – 20:00\n\nWe recommend booking in advance — especially for weekends. Walk-ins are welcome subject to availability! 🎟️`
    },

    location: {
      keywords: [
        'where', 'address', 'location', 'find you', 'get there', 'directions',
        'navigate', 'sterpenich', 'arlon', 'ikea', 'decathlon', 'parking', 'park',
        'bus', 'tec', 'transport', 'e411', 'motorway', 'highway', 'exit',
        'luxembourg', 'belgium', 'belgique', 'où', 'adresse', 'comment venir',
        'wie komme ich', 'map', 'situated', 'near', 'close to', 'next to',
        'by car', 'by bus', 'public transport', 'route de l\'europe'
      ],
      response: () => `**Luxfly is in Sterpenich, Belgium** 📍\n\n🏠 **Address:** Route de l'Europe 1, 6700 Sterpenich, Belgium\n\n🚗 **By Car:** E411 motorway, exit 33 (Sterpenich/Arlon). We're right next to **IKEA** and **Decathlon** — very easy to find! **80+ free parking spaces** on site.\n\n🚌 **By Bus:** TEC bus line 222 stops right outside.\n\n📍 Just minutes from the Luxembourg border — easily accessible from Luxembourg City, Arlon, and the wider Greater Region.`
    },

    booking: {
      keywords: [
        'book', 'booking', 'reserve', 'reservation', 'cancel', 'cancellation',
        'refund', 'walk-in', 'walk-ins', 'without booking', 'online', 'appointment',
        'slot', 'availability', 'rebook', 'reschedule', 'postpone', 'deposit',
        'payment', 'pay online', 'buchen', 'réserver', 'annuler', 'rembours',
        'prepay', 'last minute', 'same day', 'policy', 'terms', 'conditions'
      ],
      response: () => `**Booking at Luxfly:**\n\n🎟️ Book online at [luxfly.lu](https://luxfly.lu) or call **+32 63 39 11 63**.\n\n🚶 **Walk-ins welcome** — but we strongly recommend booking in advance for weekends and peak periods.\n\n**Cancellation Policy:**\n❌ **Less than 24 hours before:** No refund\n⚠️ **24–48 hours before:** 50% refund\n✅ **More than 48 hours before:** Full refund or free rescheduling\n\nGift vouchers can be used online or in-person for any package.`
    },

    birthday: {
      keywords: [
        'birthday', 'anniversaire', 'geburtstag', 'birthday party', 'celebrate',
        'celebration', 'special occasion', 'surprise', 'birthday month', 'bday',
        'happy birthday', 'birthday idea', 'birthday gift', 'party idea',
        'special day', 'birthday discount', 'birthday deal', 'birthday offer'
      ],
      response: () => `**🎂 Celebrate your birthday at Luxfly!**\n\n🎉 **Birthday Month Discount:** Fly during your birthday month and get **10% off** your package! Just mention it when booking.\n\n🎁 **Birthday Add-ons:**\n- Private viewing gallery for friends & family\n- Photography & video package\n- Balloon & decoration package\n- Dedicated flight instructor for your group\n\n🎊 **Group birthday packages** available — contact us for a custom quote!\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    groups: {
      keywords: [
        'group', 'groups', 'team', 'team building', 'corporate', 'company',
        'colleagues', 'bachelor', 'bachelor party', 'hen party', 'bachelorette',
        'stag', 'stag do', 'office', 'friends', 'people', 'large group',
        'big group', 'association', 'school', 'class trip', 'incentive',
        'groupe', 'entreprise', 'evjf', 'enterrement de vie', 'mannschaft',
        'firmen', 'per person', 'group rate', 'group price', 'group discount'
      ],
      response: () => `**Group & Event Packages at Luxfly** 👥\n\n**Group Flight Rates (per minute of flight time):**\n👥 2–9 people: **€35/min**\n👥 10–19 people: **€31.50/min**\n👥 20–49 people: **€29.75/min**\n👥 50–99 people: **€28/min**\n\n**🎊 Bachelor / Hen Party Packages:**\n🥂 Classic: **€28/person**\n🎉 Party Plus: **€52/person** (includes extras)\n👑 VIP Experience: from **€550** (full private experience)\n\n**🏢 Team Building:** Custom corporate events with dedicated staff, private sessions & catering.\n\nFor groups of 10+, contact us for a personalised quote:\n📧 info@luxfly.lu | 📞 +32 63 39 11 63`
    },

    experience: {
      keywords: [
        'experience', 'need experience', 'first time', 'beginner', 'never done',
        'indoor skydiving', 'wind tunnel', 'what is it like', 'what is indoor skydiving',
        'how does it work', 'feel like', 'scary', 'difficult', 'hard', 'easy',
        'skydiving', 'skydive', 'erfahrung', 'première fois', 'débutant', 'novice',
        'nervous', 'afraid', 'intimidating', 'never flown', 'bodyflight', 'freefall',
        'floating', 'i want to fly', 'want to fly', 'flying', 'try it'
      ],
      response: () => `**Indoor skydiving — no experience needed!** 🌬️✈️\n\nIndoor skydiving (bodyflight) recreates the feeling of skydiving freefall inside a vertical wind tunnel. You float on a powerful air column at up to **160 km/h** — fully controlled and totally safe!\n\n🎓 **Full safety briefing included** with every package — our certified instructors guide you from step one.\n\n🌟 **No experience required** — the vast majority of our guests are first-timers! Your instructor is in the tunnel with you the whole time.\n\n🧒 Suitable for ages **4 and up** (min 30 kg, max 120 kg).`
    },

    gear: {
      keywords: [
        'wear', 'bring', 'equipment', 'gear', 'included', 'helmet', 'jumpsuit',
        'suit', 'shoes', 'clothing', 'clothes', 'what do i wear', 'what should i wear',
        'outfit', 'dress', 'jewellery', 'jewelry', 'glasses', 'contacts',
        'contact lenses', 'accessories', 'provided', 'ausrüstung', 'vêtements',
        'tenue', 'équipement', 'goggles', 'earplugs', 'flying suit', 'what to wear'
      ],
      response: () => `**Everything is provided — just show up!** 🎽\n\n**Included in your package:**\n✅ Flying suit (jumpsuit)\n✅ Helmet\n✅ Goggles\n✅ Earplugs\n\n**Wear underneath:**\n👟 Comfortable, sporty clothing (no skirts/dresses)\n👟 Lace-up trainers or sports shoes (no sandals, heels, or slip-ons)\n\n**Please remove/leave behind:**\n❌ Jewellery, watches, rings, earrings\n❌ Scarves, belts, or loose accessories\n❌ Glasses (contact lenses are fine)\n\nLockers are available for your belongings. See you in the tunnel! 🌬️`
    },

    spectators: {
      keywords: [
        'watch', 'watching', 'spectator', 'spectators', 'viewing', 'viewing area',
        'can my friend', 'can my family', 'film', 'film my friend', 'photograph',
        'photo', 'video', 'camera', 'photos', 'footage', 'observe', 'cheer',
        'audience', 'support', 'famille', 'amis', 'regarder', 'zuschauer',
        'friends come', 'come along', 'come watch', 'bring friends', 'non-flyer',
        'not flying', 'just watching', 'gallery', 'photography package'
      ],
      response: () => `**Friends & family are welcome to watch and cheer!** 📸👀\n\n🏟️ **Dedicated viewing gallery** with clear glass panels — spectators get a perfect view of everything inside the tunnel.\n\n📷 **Photography & Video:**\n- Spectators can take photos & videos freely from the gallery\n- Professional **photography/video packages** also available — ask at reception!\n- In-tunnel cameras capture incredible footage from inside\n\n🎟️ **Entry for spectators is FREE** — no ticket needed to come along.\n\n🏛️ All packages include **Aviation Museum** access, so non-flyers have plenty to enjoy! ✈️`
    },

    duration: {
      keywords: [
        'how long', 'duration', 'arrive', 'arrival', 'check in', 'check-in',
        'total time', 'visit', 'long is the visit', 'how much time', 'minutes',
        'seconds', 'flight time', 'when to arrive', 'how early', 'long does it take',
        'flight duration', 'wie lange', 'combien de temps', 'durée', 'long is a flight',
        'each flight', 'per flight', 'how many minutes', 'plan my visit'
      ],
      response: () => `**Planning your Luxfly visit:**\n\n⏰ **Arrive 60 minutes before** your flight time — for check-in, kit-up, and safety briefing.\n\n✈️ **Each flight = 60 seconds** of pure tunnel exhilaration.\n\n⏱️ **Total visit:** approximately **2 hours** (briefing, flights + museum).\n\n**Typical breakdown:**\n📋 Arrival & registration: 10–15 min\n🎓 Safety briefing: 15–20 min\n🎽 Getting kitted up: 10 min\n🌬️ Your flights: 60 sec each (with breaks)\n🏛️ Museum: as long as you like!`
    },

    health: {
      keywords: [
        'pregnant', 'pregnancy', 'heart condition', 'epilepsy', 'medical',
        'health', 'disability', 'back problem', 'neck', 'injury', 'injured',
        'operation', 'surgery', 'asthma', 'pacemaker', 'weight limit',
        'maximum weight', 'minimum weight', 'kg', 'kilos', 'restrictions',
        'safe', 'is it safe', 'can i fly', 'health condition', 'santé',
        'gesundheit', 'enceinte', 'schwanger', 'high blood pressure',
        'hypertension', 'medication', 'disabled', 'wheelchair', 'contraindication'
      ],
      response: () => `**Health & Safety at Luxfly** 🏥\n\n**Weight restrictions:**\n⚖️ Minimum: **30 kg** | Maximum: **120 kg**\n\n**Do NOT fly if you:**\n❌ Are pregnant\n❌ Have a serious heart condition or pacemaker\n❌ Have epilepsy\n❌ Have a recent injury, surgery, or serious back/neck problem\n❌ Have uncontrolled high blood pressure\n❌ Are under the influence of alcohol or drugs\n\n**If in doubt**, consult your doctor and let us know at booking — our team will do their best to accommodate you. 💙`
    },

    contact: {
      keywords: [
        'contact', 'email', 'phone', 'call', 'speak to', 'get in touch', 'reach',
        'whatsapp', 'message', 'chat', 'talk to', 'customer service', 'support',
        'help', 'enquiry', 'inquiry', 'kontakt', 'telefon', 'contactez', 'téléphone',
        'joindre', 'reach out', 'press', 'media', 'instagram', 'facebook',
        'number', 'telephone', 'social media', 'how to contact', 'speak with someone'
      ],
      response: () => `**Get in touch with Luxfly:** 📞\n\n📞 **Phone:** +32 63 39 11 63\n💬 **WhatsApp:** +32 477 528 566\n📧 **General:** info@luxfly.lu\n📧 **Press/Media:** press@luxfly.lu\n📧 **Partnerships:** partners@luxfly.lu\n\n🌐 **Website:** luxfly.lu\n📱 **Instagram:** @luxflyskydive\n\n🏠 **Address:** Route de l'Europe 1, 6700 Sterpenich, Belgium\n\nOur team is happy to help with bookings, group events, or anything else! ✈️`
    },

    promo: {
      keywords: [
        'promo', 'promotion', 'discount', 'coupon', 'code', 'voucher code',
        'offer', 'deal', 'special offer', 'student', 'military', 'reduce',
        'reduction', 'save', 'cheaper', 'saving', 'spring', 'spring26',
        'group15', 'bring a friend', 'birthday month', 'rabatt', 'réduction',
        'offre', 'bon de réduction', 'current offers', 'any deals', 'sale',
        'promotional code', 'promo code', 'discount code', 'student discount'
      ],
      response: () => `**Current Promotions at Luxfly** 🎉\n\n🌸 **SPRING26** — **15% off** all packages! Valid until **30 April 2026**. Code: **SPRING26**\n\n👥 **GROUP15** — Extra **5% off** on top of group rates for 10+ people. Code: **GROUP15**\n\n🎂 **Birthday Month** — Fly in your birthday month for **10% off**. Just mention it when booking!\n\n🎓 **Student Discount** — Show a valid student ID for **10% off**.\n\n👫 **Bring a Friend** — Refer a first-time visitor and both get a reward! Ask our team for details.\n\n⚠️ Discounts cannot be combined. Terms apply.`
    },

    voucher: {
      keywords: [
        'voucher', 'gift card', 'gift voucher', 'buy for someone', 'gift',
        'present', 'cadeau', 'bon cadeau', 'geschenk', 'gutschein',
        'give as a gift', 'someone else', 'surprise', 'purchase voucher',
        'buy a voucher', 'voucher valid', 'validity', 'expire', 'renew',
        'renewal', 'transfer', 'transferable', 'nominative', 'refund voucher',
        'can i buy', 'for a friend', 'christmas gift', 'birthday gift'
      ],
      response: () => `**Luxfly Gift Vouchers — the perfect gift!** 🎁\n\n🛒 Buy online at luxfly.lu or in-person at reception.\n\n**Voucher Details:**\n📅 Valid for **12 months** from purchase date\n🔄 Renewable for an additional **3 months** (one renewal per voucher)\n👤 **Not nominative** — usable by anyone, not just the recipient\n💸 Non-refundable once purchased\n✅ Redeemable for any flight package or add-on\n\nThe perfect birthday, Christmas, or anniversary gift! 💝\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    pro: {
      keywords: [
        'pro', 'professional', 'pro flying', 'competition', 'coaching',
        'advanced', 'training', 'athlete', 'tunnel time', 'block time',
        'dedicated session', 'freestyle', 'formation', 'freefly', 'dynamic',
        'competitive', 'tunnel rat', 'entraînement', 'professionnel',
        'compétition', 'coached session', 'skills', 'progression', 'coach time',
        'shared session', 'shared pro', 'pro session', 'block hours'
      ],
      response: () => `**Pro & Advanced Flying at Luxfly** 🏆\n\n**Block Time Packages (dedicated tunnel):**\n⏱️ **Starter** — 1 hr: **€180**\n⏱️ **Regular** — 5 hrs: **€840** (€168/hr)\n⏱️ **Dedicated** — 10 hrs: **€1,560** (€156/hr)\n⏱️ **Elite** — 20 hrs: **€2,880** (€144/hr)\n\n**Shared Pro Sessions:**\n📅 Mon, Wed, Fri, Sat (×2), Sun\n💶 Single: **€55** | 5 sessions: **€240** | 10 sessions: **€420**\n\nOur coaches have **12,000+ combined tunnel hours** and train belly, sit, head-down, freestyle & formation.\n\n📧 info@luxfly.lu for coaching enquiries`
    },

    museum: {
      keywords: [
        'museum', 'aviation museum', 'exhibit', 'exhibition', 'aviation',
        'history', 'planes', 'aircraft', 'displays', 'musée', 'musée aviation',
        'luftfahrt', 'museum entry', 'museum ticket', 'museum included',
        'museum price', 'standalone museum', 'just the museum', 'visit museum',
        'museum only', 'museum without flying', 'museum cost'
      ],
      response: () => `**The Luxfly Aviation Museum** ✈️🏛️\n\nEvery Luxfly visit includes our **Aviation Museum** — a stunning collection celebrating the history of flight!\n\n🎫 **Included FREE** with all flight packages.\n🎟️ **Standalone entry (no flight):** **€15** per person\n\nFeatures historic aircraft, interactive displays, and an aviation history timeline. Great for all ages — especially families! Perfect for before or after your flight, or for non-flying visitors. 🛩️`
    },

    bar: {
      keywords: [
        'bar', 'food', 'eat', 'drink', 'drinks', 'menu', 'restaurant', 'café',
        'coffee', 'beer', 'burger', 'snack', 'hungry', 'thirsty', 'lunch',
        'dinner', 'meal', 'sandwich', 'bar menu', 'what can i eat', 'canteen',
        'essen', 'trinken', 'boire', 'manger', 'nourriture', 'boisson',
        'cocktail', 'juice', 'soft drink', 'food menu', 'what food', 'nachos',
        'fries', 'lager', 'draft beer', 'can i eat', 'is there food'
      ],
      response: () => `**The Luxfly Bar & Restaurant** 🍔🍺\n\nRefuel after your flight at our on-site bar!\n\n**🍔 Food:**\n- Cheeseburger: **€14**\n- Vegetarian burger: **€12**\n- Club sandwich: **€11**\n- Fries: **€4**\n- Nachos: **€8**\n\n**🍺 Drinks:**\n- Draft lager (33cl): **€3.50**\n- Draft lager (50cl): **€5.50**\n- Soft drinks: **€3**\n- Coffee/espresso: **€2.50**\n- Fresh juice: **€4**\n\nOpen during all operating hours with great views of the tunnel! 🌬️`
    },

    pilates: {
      keywords: [
        'pilates', 'sky pilates', 'pilates class', 'fitness', 'yoga', 'workout',
        'exercise', 'wellness', 'core', 'flexibility', 'wind tunnel pilates',
        'pilates schedule', 'pilates price', 'drop in', 'class pass',
        'pilates session', 'body workout', 'fitness class', 'tunnel fitness'
      ],
      response: () => `**Sky Pilates at Luxfly** 🧘✈️\n\nUnique **Sky Pilates** sessions — pilates in the wind tunnel for an extraordinary core workout!\n\n**📅 Schedule:**\n🗓️ Tuesday & Thursday: **7:30 AM**\n🗓️ Saturday: **9:00 AM**\n\n**💶 Pricing:**\n- Drop-in (single class): **€45**\n- 4-class pass: **€160** (€40/class)\n- 8-class pass: **€280** (€35/class)\n\nNo flying experience required! Classes led by certified instructors.\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    loyalty: {
      keywords: [
        'loyalty', 'loyalty programme', 'fidelity', 'fidelitybox', 'points',
        'rewards', 'loyalty card', 'member', 'membership', 'frequent flyer',
        'reward points', 'earn points', 'redeem', 'loyalty program',
        'fidélité', 'treueprogramm', 'bonus', 'perks', 'benefits',
        'stamp card', 'repeat customer', 'regular customer', 'loyalty scheme'
      ],
      response: () => `**Luxfly FidelityBox — Our Loyalty Programme** 🌟\n\nFly more, earn more with **FidelityBox**!\n\n📱 Your **phone number is your loyalty card** — no physical card needed!\n⭐ Earn points every time you fly or purchase at Luxfly\n🎁 Redeem points for free flights, discounts & exclusive rewards\n\n**Member perks:** priority booking, exclusive promotions, birthday surprises, and early access to new packages.\n\nJust give your phone number at check-in — you're automatically enrolled!\n\n📞 +32 63 39 11 63 for details.`
    },

    coaches: {
      keywords: [
        'coach', 'coaches', 'instructor', 'instructors', 'staff', 'trainer',
        'trainers', 'certified', 'qualified', 'who teaches', 'your team',
        'flight instructor', 'tunnel instructor', 'languages', 'speak french',
        'speak german', 'speak english', 'multilingual', 'how experienced',
        'team of coaches', 'professional coaches', 'who will teach me'
      ],
      response: () => `**Our World-Class Coaching Team** 🏆\n\n✅ **8 certified coaches** on our team\n✅ **12,000+ combined tunnel hours** of experience\n✅ All hold internationally recognised tunnel instructor certifications\n\n**Languages spoken:**\n🇬🇧 English | 🇫🇷 French | 🇩🇪 German | 🇱🇺 Luxembourgish | 🇮🇹 Italian\n\nFrom nervous first-timers to competitive athletes — our coaches adapt to every level. For beginner packages, your instructor is **inside the tunnel with you** the whole time. 💪`
    },

    tunnel: {
      keywords: [
        'tunnel', 'wind tunnel', 'wind speed', 'speed', 'how fast', 'km/h',
        'belly fly', 'belly flying', 'sit fly', 'sit flying', 'head down',
        'head-down', 'airflow', 'wind', 'power', 'tunnel size', 'technical',
        'specifications', 'specs', 'how big', 'how powerful', 'how strong',
        'state of the art', 'vertical wind tunnel'
      ],
      response: () => `**Luxfly Wind Tunnel — Technical Specs** ⚡\n\nOur state-of-the-art vertical wind tunnel is built for everyone from beginners to world champions!\n\n**Wind Speed by Discipline:**\n🤸 **Belly Flying** (beginner/recreational): **130–160 km/h**\n💺 **Sit Flying** (intermediate): **180–220 km/h**\n🔻 **Head-Down** (advanced/pro): **250–320 km/h**\n\nWind speed is precisely controlled per flyer's size, weight, and skill level.\n\n🛡️ All safety systems certified to the highest European standards. ✈️`
    },

    partners: {
      keywords: [
        'partner', 'partners', 'partnership', 'business', 'affiliate',
        'commission', 'resell', 'collaborate', 'b2b', 'travel agent',
        'tour operator', 'hotel', 'work together', 'collaboration', 'commercial',
        'partenaire', 'partenariat', 'partner programme', 'referral', 'agent',
        'become a partner', 'trade', 'wholesale', 'reseller'
      ],
      response: () => `**Become a Luxfly Partner** 🤝\n\nWe work with travel agencies, hotels, tour operators, and businesses across Luxembourg and the Greater Region.\n\n💰 Earn **10–15% commission** on all referrals\n🎟️ Special rates for your clients\n📦 Co-branded promotional materials\n🌐 Listed on our website as a preferred partner\n\n📧 partners@luxfly.lu\n📞 +32 63 39 11 63\n\nOur partnerships team responds within 48 hours! ✈️`
    },

    jobs: {
      keywords: [
        'job', 'jobs', 'career', 'careers', 'work', 'working', 'employment',
        'vacancy', 'vacancies', 'hiring', 'apply', 'application', 'position',
        'role', 'join the team', 'join us', 'recruitment', 'tunnel instructor job',
        'safety officer', 'events coordinator', 'customer experience', 'internship',
        'emploi', 'nous rejoindre', 'arbeit', 'stelle', 'are you hiring'
      ],
      response: () => `**Careers at Luxfly** 💼✈️\n\n**Open Positions:**\n🌬️ **Tunnel Instructor** — Lead beginner and advanced sessions\n🛡️ **Safety Officer** — Maintain the highest safety standards\n🎉 **Events Coordinator** — Plan group, corporate & special events\n😊 **Customer Experience** — Front-of-house & guest services\n\nNot seeing your role? Get in touch — we're growing!\n\n📧 jobs@luxfly.lu\n📞 +32 63 39 11 63`
    },

    balloon: {
      keywords: [
        'balloon', 'hot air balloon', 'ballon', 'hot air', 'montgolfière',
        'balloon ride', 'balloon experience', 'balloon flight', 'balloon partner',
        'other activities', 'what else', 'anything else to do', 'other experiences'
      ],
      response: () => `**Hot Air Balloon Experiences** 🎈\n\nLuxfly has partnered with a premier hot air balloon operator!\n\n💶 **€180–€250 per person**\n📅 Season: **April – October**\n📍 Departing from the Luxembourg/Belgium region\n\nThe perfect complement to indoor skydiving — or a standalone special gift!\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    }
  };

  // ─── Word-boundary regex ────────────────────────────────────────────────────
  function kwRegex(kw) {
    const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp('(?:^|[\\s,.!?\'"-])' + escaped + '(?:[\\s,.!?\'"-]|$)', 'i');
  }

  // ─── Classifier ─────────────────────────────────────────────────────────────
  function classify(text) {
    const lower = text.toLowerCase();
    let bestCategory = null, bestScore = 0;
    for (const [cat, data] of Object.entries(KB)) {
      let score = 0;
      for (const kw of data.keywords) {
        if (kwRegex(kw).test(lower)) {
          const wc = kw.split(' ').length;
          score += wc * wc;
        }
      }
      if (score > bestScore) { bestScore = score; bestCategory = cat; }
    }
    return bestScore > 0 ? bestCategory : null;
  }

  // ─── Greeting / thanks detection ────────────────────────────────────────────
  function isGreeting(text) {
    return /^(hi|hello|hey|bonjour|hallo|salut|guten tag|good morning|good afternoon|good evening|howdy|yo|sup|hiya|greetings?|coucou|hoi|dag|moien|allo|moin)[\s!.?,]*$/i.test(text.trim());
  }

  function isThanks(text) {
    return /\b(thanks?|thank you|merci|danke|dank je|cheers|perfect|great|awesome|brilliant|amazing|wonderful|super|parfait|genial|génial)\b/i.test(text) &&
      text.trim().split(/\s+/).length < 10;
  }

  // ─── Markdown formatter ──────────────────────────────────────────────────────
  function formatResponse(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#f02cb8">$1</a>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');
  }

  // ─── Get response ────────────────────────────────────────────────────────────
  function getResponse(userText) {
    const text = userText.trim();
    if (!text) return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    if (isGreeting(text)) return greetings[Math.floor(Math.random() * greetings.length)];
    if (isThanks(text)) return replies[Math.floor(Math.random() * replies.length)];
    const category = classify(text);
    if (category && KB[category]) return KB[category].response();
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }

  const greetings = [
    "Hey! 👋 I'm Zoom, the Luxfly assistant. Ask me anything — prices, hours, booking, kids, location, and more!",
    "Hi! 😊 Welcome to Luxfly. What can I help you with today?",
    "Hello! Ready to talk indoor skydiving? 🌬️ What would you like to know?"
  ];
  const replies = [
    "You're welcome! 😊 Anything else I can help with?",
    "Happy to help! 🙌 Feel free to ask anything else.",
    "Of course! Let me know if you have more questions. 😄"
  ];
  const fallbacks = [
    "Good question! For that one I'd suggest reaching out to our team directly:\n\n📧 **info@luxfly.lu**\n📞 **+32 63 39 11 63**\n💬 **WhatsApp:** +32 477 528 566\n\nOr try asking me about prices, hours, booking, kids, or our packages! 😊",
    "I'm not sure about that one! Your best bet is to contact us at **info@luxfly.lu** or **+32 63 39 11 63** — the team will get back to you quickly. 🙌",
    "That's a great question for our team! Drop them a line at **info@luxfly.lu** and they'll sort you out. I can help with prices, hours, booking, kids packages, and more! 😊"
  ];

  // ─── Styles (original dark theme) ───────────────────────────────────────────
  const css = `
    #lf-chat-btn {
      position: fixed; bottom: 28px; right: 28px; z-index: 9999;
      width: 60px; height: 60px; border-radius: 50%;
      background: #f02cb8; border: none; cursor: pointer;
      box-shadow: 0 4px 24px rgba(240,44,184,0.45);
      display: flex; align-items: center; justify-content: center;
      transition: transform 0.2s, box-shadow 0.2s; outline: none;
    }
    #lf-chat-btn:hover { transform: scale(1.08); box-shadow: 0 6px 32px rgba(240,44,184,0.6); }
    #lf-chat-btn svg { pointer-events: none; }
    #lf-chat-badge {
      position: absolute; top: -4px; right: -4px;
      width: 18px; height: 18px; background: #fff; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 11px; font-weight: 700; color: #f02cb8;
    }
    #lf-chat-window {
      position: fixed; bottom: 100px; right: 28px; z-index: 9998;
      width: 360px; max-width: calc(100vw - 40px);
      height: 520px; max-height: calc(100vh - 130px);
      background: #0a0a0a; border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px; display: flex; flex-direction: column;
      box-shadow: 0 16px 48px rgba(0,0,0,0.6); overflow: hidden;
      transform: scale(0.95) translateY(10px); opacity: 0; pointer-events: none;
      transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), opacity 0.2s ease;
    }
    #lf-chat-window.open { transform: scale(1) translateY(0); opacity: 1; pointer-events: all; }
    #lf-chat-header {
      background: #111; border-bottom: 1px solid rgba(255,255,255,0.08);
      padding: 14px 16px; display: flex; align-items: center; gap: 10px; flex-shrink: 0;
    }
    #lf-chat-header-avatar {
      width: 36px; height: 36px; border-radius: 50%; background: #f02cb8;
      display: flex; align-items: center; justify-content: center;
      font-size: 18px; flex-shrink: 0;
    }
    #lf-chat-header-info { flex: 1; }
    #lf-chat-header-name {
      font-family: 'Montserrat','Inter',sans-serif; font-size: 13px;
      font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #fff;
    }
    #lf-chat-header-status { font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 1px; }
    #lf-chat-close {
      background: none; border: none; cursor: pointer; color: rgba(255,255,255,0.5);
      padding: 4px; border-radius: 6px; display: flex; align-items: center;
      justify-content: center; transition: color 0.2s;
    }
    #lf-chat-close:hover { color: #fff; }
    #lf-chat-messages {
      flex: 1; overflow-y: auto; padding: 16px 14px;
      display: flex; flex-direction: column; gap: 10px; scroll-behavior: smooth;
    }
    #lf-chat-messages::-webkit-scrollbar { width: 4px; }
    #lf-chat-messages::-webkit-scrollbar-track { background: transparent; }
    #lf-chat-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }
    .lf-msg {
      max-width: 85%; padding: 10px 13px; border-radius: 12px;
      font-size: 13.5px; line-height: 1.55; font-family: 'Inter',sans-serif; word-break: break-word;
    }
    .lf-msg-bot {
      background: #1a1a1a; color: rgba(255,255,255,0.88);
      border-bottom-left-radius: 3px; align-self: flex-start; border: 1px solid rgba(255,255,255,0.07);
    }
    .lf-msg-bot p { margin: 0 0 6px; }
    .lf-msg-bot p:last-child { margin-bottom: 0; }
    .lf-msg-user { background: #f02cb8; color: #fff; border-bottom-right-radius: 3px; align-self: flex-end; }
    .lf-msg-typing { display: flex; align-items: center; gap: 4px; padding: 12px 14px; }
    .lf-dot { width: 7px; height: 7px; background: rgba(255,255,255,0.4); border-radius: 50%; animation: lf-bounce 1.2s infinite; }
    .lf-dot:nth-child(2) { animation-delay: 0.2s; }
    .lf-dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes lf-bounce { 0%,60%,100% { transform: translateY(0); opacity: 0.4; } 30% { transform: translateY(-5px); opacity: 1; } }
    #lf-chat-quick {
      padding: 8px 14px 4px; display: flex; flex-wrap: wrap; gap: 6px; flex-shrink: 0;
    }
    .lf-quick-btn {
      background: rgba(240,44,184,0.1); border: 1px solid rgba(240,44,184,0.3);
      border-radius: 20px; color: #f02cb8; font-size: 12px; font-family: 'Inter',sans-serif;
      padding: 5px 11px; cursor: pointer; transition: background 0.2s; white-space: nowrap;
    }
    .lf-quick-btn:hover { background: rgba(240,44,184,0.2); }
    #lf-chat-form {
      padding: 10px 12px 12px; display: flex; gap: 8px;
      border-top: 1px solid rgba(255,255,255,0.07); flex-shrink: 0;
    }
    #lf-chat-input {
      flex: 1; background: #1a1a1a; border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px; color: #fff; font-size: 13px; font-family: 'Inter',sans-serif;
      padding: 9px 13px; outline: none; resize: none; line-height: 1.4;
      max-height: 80px; transition: border-color 0.2s;
    }
    #lf-chat-input::placeholder { color: rgba(255,255,255,0.3); }
    #lf-chat-input:focus { border-color: rgba(240,44,184,0.5); }
    #lf-chat-send {
      width: 38px; height: 38px; border-radius: 10px; background: #f02cb8; border: none;
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; align-self: flex-end; transition: opacity 0.2s, transform 0.15s;
    }
    #lf-chat-send:hover { opacity: 0.85; transform: scale(1.05); }
    @media (max-width: 480px) {
      #lf-chat-window { right: 12px; bottom: 90px; width: calc(100vw - 24px); }
      #lf-chat-btn { bottom: 20px; right: 16px; }
    }
  `;
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ─── Build DOM ───────────────────────────────────────────────────────────────
  document.body.insertAdjacentHTML('beforeend', `
    <button id="lf-chat-btn" aria-label="Chat with Luxfly">
      <span id="lf-chat-badge" style="display:none">1</span>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.06 2 11c0 2.64 1.18 5.02 3.07 6.72L4 22l4.54-2.04A10.7 10.7 0 0012 20c5.52 0 10-4.06 10-9S17.52 2 12 2z" fill="white"/>
      </svg>
    </button>
    <div id="lf-chat-window" role="dialog" aria-label="Luxfly Chat">
      <div id="lf-chat-header">
        <div id="lf-chat-header-avatar">✈</div>
        <div id="lf-chat-header-info">
          <div id="lf-chat-header-name">Zoom</div>
          <div id="lf-chat-header-status">Online · Always here to help</div>
        </div>
        <button id="lf-chat-close" aria-label="Close chat">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <div id="lf-chat-messages"></div>
      <div id="lf-chat-quick">
        <button class="lf-quick-btn" data-q="What are your prices?">💰 Prices</button>
        <button class="lf-quick-btn" data-q="What are your opening hours?">🕐 Hours</button>
        <button class="lf-quick-btn" data-q="Is it safe for kids?">👦 Kids</button>
        <button class="lf-quick-btn" data-q="How do I book?">🎟️ Book</button>
        <button class="lf-quick-btn" data-q="Where are you located?">📍 Location</button>
      </div>
      <form id="lf-chat-form" autocomplete="off">
        <textarea id="lf-chat-input" placeholder="Ask me anything…" rows="1"></textarea>
        <button type="submit" id="lf-chat-send" aria-label="Send">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </form>
    </div>
  `);

  // ─── Elements ────────────────────────────────────────────────────────────────
  const btn       = document.getElementById('lf-chat-btn');
  const win       = document.getElementById('lf-chat-window');
  const closeBtn  = document.getElementById('lf-chat-close');
  const messages  = document.getElementById('lf-chat-messages');
  const form      = document.getElementById('lf-chat-form');
  const input     = document.getElementById('lf-chat-input');
  const quickBtns = document.querySelectorAll('.lf-quick-btn');

  let isOpen = false, greeted = false;

  // ─── Helpers ─────────────────────────────────────────────────────────────────
  function addMsg(html, role) {
    const el = document.createElement('div');
    el.className = 'lf-msg ' + (role === 'user' ? 'lf-msg-user' : 'lf-msg-bot');
    if (role === 'user') {
      el.textContent = html;
    } else {
      el.innerHTML = '<p>' + formatResponse(html) + '</p>';
    }
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    return el;
  }

  function showTyping() {
    const el = document.createElement('div');
    el.className = 'lf-msg lf-msg-bot lf-msg-typing';
    el.id = 'lf-typing';
    el.innerHTML = '<div class="lf-dot"></div><div class="lf-dot"></div><div class="lf-dot"></div>';
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }

  function removeTyping() {
    const el = document.getElementById('lf-typing');
    if (el) el.remove();
  }

  function toggleQuickBtns(show) {
    document.getElementById('lf-chat-quick').style.display = show ? 'flex' : 'none';
  }

  // ─── Send ────────────────────────────────────────────────────────────────────
  function sendMessage(text) {
    text = text.trim();
    if (!text) return;
    toggleQuickBtns(false);
    addMsg(text, 'user');
    input.value = '';
    input.style.height = 'auto';
    showTyping();
    setTimeout(() => {
      removeTyping();
      addMsg(getResponse(text), 'bot');
      input.focus();
    }, 400 + Math.random() * 500);
  }

  // ─── Open / Close ────────────────────────────────────────────────────────────
  function openChat() {
    isOpen = true;
    win.classList.add('open');
    const badge = document.getElementById('lf-chat-badge');
    if (badge) badge.style.display = 'none';
    btn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6l12 12" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`;
    if (!greeted) {
      greeted = true;
      setTimeout(() => {
        addMsg("Hey! 👋 I'm Zoom, the Luxfly assistant. Ask me anything about our indoor skydiving experience — prices, hours, booking, kids, location, and more!", 'bot');
      }, 300);
    }
    input.focus();
  }

  function closeChat() {
    isOpen = false;
    win.classList.remove('open');
    btn.innerHTML = `<span id="lf-chat-badge" style="display:none">1</span>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.06 2 11c0 2.64 1.18 5.02 3.07 6.72L4 22l4.54-2.04A10.7 10.7 0 0012 20c5.52 0 10-4.06 10-9S17.52 2 12 2z" fill="white"/>
      </svg>`;
  }

  // ─── Events ──────────────────────────────────────────────────────────────────
  btn.addEventListener('click', () => isOpen ? closeChat() : openChat());
  closeBtn.addEventListener('click', closeChat);

  form.addEventListener('submit', (e) => { e.preventDefault(); sendMessage(input.value); });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input.value); }
  });

  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 80) + 'px';
  });

  quickBtns.forEach(b => { b.addEventListener('click', () => sendMessage(b.dataset.q)); });

  // Show badge after 8s if not opened
  setTimeout(() => {
    if (!isOpen && !greeted) {
      const b = document.getElementById('lf-chat-badge');
      if (b) b.style.display = 'flex';
    }
  }, 8000);

})();
