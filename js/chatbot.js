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
      response: () => `**Kids are absolutely welcome at Luxfly!** 🧒✈️\n\nThe **minimum age is 4 years old**.\n\n**Kids Packages:**\n✈️ **JUNIOR DISCOVERY** — 2 flights: **€45.90**\n✈️ **JUNIOR EXPLORER** — 4 flights: **€79.90**\n✈️ **JUNIOR ADVENTURE** — 6 flights: **€109.90**\n\n⚖️ Weight: minimum **30 kg**, maximum **120 kg** for all flyers.\n\nKids must be accompanied by a parent or guardian. Our certified instructors are specially trained to work with children and make it an unforgettable experience!\n\nAll packages include equipment, briefing, and **Aviation Museum** access. 🎫`
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
        'route de l\'europe', 'by car', 'by bus', 'public transport'
      ],
      response: () => `**Luxfly is in Sterpenich, Belgium** 📍\n\n🏠 **Address:** Route de l'Europe 1, 6700 Sterpenich, Belgium\n\n🚗 **By Car:** E411 motorway, exit 33 (Sterpenich/Arlon). We're right next to **IKEA** and **Decathlon** — very easy to find! **80+ free parking spaces** on site.\n\n🚌 **By Bus:** TEC bus line 222 stops right outside.\n\n📍 Just minutes from the Luxembourg border — easily accessible from Luxembourg City, Arlon, and the wider Greater Region.\n\n[Get directions on Google Maps](https://maps.google.com/?q=Route+de+l%27Europe+1,+6700+Sterpenich,+Belgium)`
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
      response: () => `**🎂 Celebrate your birthday at Luxfly!**\n\nWe make birthdays unforgettable!\n\n🎉 **Birthday Month Discount:** Fly during your birthday month and get **10% off** your package! Just mention it when booking.\n\n🎁 **Birthday Add-ons:**\n- Private viewing gallery for friends & family\n- Photography & video package\n- Balloon & decoration package\n- Dedicated flight instructor for your group\n\n🎊 **Group birthday packages** available — contact us for a custom quote!\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
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
      response: () => `**Indoor skydiving — no experience needed!** 🌬️✈️\n\nIndoor skydiving (bodyflight) recreates the feeling of skydiving freefall inside a vertical wind tunnel. You float on a powerful air column at up to **160 km/h** — fully controlled and totally safe!\n\n🎓 **Full safety briefing included** with every package — our certified instructors guide you from step one.\n\n🌟 **No experience required** — the vast majority of our guests are first-timers! Your instructor is in the tunnel with you the whole time.\n\n🧒 Suitable for ages **4 and up** (min 30 kg, max 120 kg).\n\nThousands of happy first-timers fly with us every year. It's safe, exhilarating, and absolutely unforgettable. 🚀`
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
      response: () => `**Planning your Luxfly visit:**\n\n⏰ **Arrive 60 minutes before** your flight time — for check-in, kit-up, and safety briefing.\n\n✈️ **Each flight = 60 seconds** of pure tunnel exhilaration.\n\n⏱️ **Total visit:** approximately **2 hours** (briefing, flights + museum).\n\n**Typical breakdown:**\n📋 Arrival & registration: 10–15 min\n🎓 Safety briefing: 15–20 min\n🎽 Getting kitted up: 10 min\n🌬️ Your flights: 60 sec each (with breaks in between)\n🏛️ Museum: as long as you like!\n\nPlan to enjoy the full experience — there's a lot to see! 🚀`
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
      response: () => `**Health & Safety at Luxfly** 🏥\n\n**Weight restrictions:**\n⚖️ Minimum: **30 kg** | Maximum: **120 kg**\n\n**Do NOT fly if you:**\n❌ Are pregnant\n❌ Have a serious heart condition or pacemaker\n❌ Have epilepsy\n❌ Have a recent injury, surgery, or serious back/neck problem\n❌ Have uncontrolled high blood pressure\n❌ Are under the influence of alcohol or drugs\n\n**If in doubt**, consult your doctor and let us know at booking — our team will do their best to accommodate you.\n\nFor most people with mild conditions, flying is perfectly fine. Just give us a heads-up so we can ensure your safest, best experience! 💙`
    },

    contact: {
      keywords: [
        'contact', 'email', 'phone', 'call', 'speak to', 'get in touch', 'reach',
        'whatsapp', 'message', 'chat', 'talk to', 'customer service', 'support',
        'help', 'enquiry', 'inquiry', 'kontakt', 'telefon', 'contactez', 'téléphone',
        'joindre', 'reach out', 'press', 'media', 'instagram', 'facebook',
        'number', 'telephone', 'social media', 'how to contact', 'speak with someone'
      ],
      response: () => `**Get in touch with Luxfly:** 📞\n\n📞 **Phone:** +32 63 39 11 63\n💬 **WhatsApp:** +32 477 528 566\n📧 **General:** info@luxfly.lu\n📧 **Press/Media:** press@luxfly.lu\n📧 **Partnerships:** partners@luxfly.lu\n\n🌐 **Website:** [luxfly.lu](https://luxfly.lu)\n📱 **Instagram:** @luxflyskydive\n📘 **Facebook:** Luxfly\n\n🏠 **Address:** Route de l'Europe 1, 6700 Sterpenich, Belgium\n\nOur team is happy to help with bookings, group events, or anything else! ✈️`
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
      response: () => `**Current Promotions at Luxfly** 🎉\n\n🌸 **SPRING26** — **15% off** all packages! Valid until **30 April 2026**. Code: **SPRING26**\n\n👥 **GROUP15** — Extra **5% off** on top of group rates for 10+ people. Code: **GROUP15**\n\n🎂 **Birthday Month** — Fly in your birthday month for **10% off**. Mention at booking!\n\n🎓 **Student Discount** — Show a valid student ID for **10% off**.\n\n👫 **Bring a Friend** — Refer a first-time visitor and both of you get a reward! Ask our team for details.\n\n⚠️ Discounts cannot be combined. Terms apply. 📋`
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
      response: () => `**Luxfly Gift Vouchers — the perfect gift!** 🎁\n\n🛒 Buy online at [luxfly.lu](https://luxfly.lu) or in-person at reception.\n\n**Voucher Details:**\n📅 Valid for **12 months** from purchase date\n🔄 Renewable for an additional **3 months** (one renewal per voucher)\n👤 **Not nominative** — usable by anyone, not just the recipient\n💸 Non-refundable once purchased\n✅ Redeemable for any flight package or add-on\n\nThe perfect birthday, Christmas, or anniversary gift! 💝\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
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
      response: () => `**Pro & Advanced Flying at Luxfly** 🏆\n\n**Block Time Packages (dedicated tunnel):**\n⏱️ **Starter** — 1 hr: **€180**\n⏱️ **Regular** — 5 hrs: **€840** (€168/hr)\n⏱️ **Dedicated** — 10 hrs: **€1,560** (€156/hr)\n⏱️ **Elite** — 20 hrs: **€2,880** (€144/hr)\n\n**Shared Pro Sessions:**\n📅 Mon, Wed, Fri, Sat (×2 slots), Sun\n💶 Single session: **€55** | 5 sessions: **€240** | 10 sessions: **€420**\n\n**Disciplines our coaches train:**\n🤸 Belly flying (130–160 km/h) | 💺 Sit flying (180–220 km/h) | 🔻 Head-down (250–320 km/h)\nFreestyle, formation & dynamic flying\n\nOur coaches have **12,000+ combined tunnel hours**. 📧 info@luxfly.lu`
    },

    museum: {
      keywords: [
        'museum', 'aviation museum', 'exhibit', 'exhibition', 'aviation',
        'history', 'planes', 'aircraft', 'displays', 'musée', 'musée aviation',
        'luftfahrt', 'museum entry', 'museum ticket', 'museum included',
        'museum price', 'standalone museum', 'just the museum', 'visit museum',
        'museum only', 'museum without flying', 'museum cost'
      ],
      response: () => `**The Luxfly Aviation Museum** ✈️🏛️\n\nEvery Luxfly visit includes our **Aviation Museum** — a stunning collection celebrating the history of flight!\n\n🎫 **Included FREE** with all flight packages.\n\n🎟️ **Standalone entry (no flight):** **€15** per person\n\nThe museum features:\n- Historic aircraft exhibits & interactive displays\n- Aviation history timeline\n- Great for all ages — especially families!\n\nPerfect for before or after your flight, or for non-flying visitors accompanying their group. 🛩️`
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
      response: () => `**The Luxfly Bar & Restaurant** 🍔🍺\n\nRefuel after your flight at our on-site bar and restaurant!\n\n**🍔 Food:**\n- Cheeseburger: **€14**\n- Vegetarian burger: **€12**\n- Club sandwich: **€11**\n- Fries: **€4**\n- Nachos: **€8**\n\n**🍺 Drinks:**\n- Draft lager (33cl): **€3.50**\n- Draft lager (50cl): **€5.50**\n- Soft drinks: **€3**\n- Coffee/espresso: **€2.50**\n- Fresh juice: **€4**\n\nThe bar is open during all operating hours with great views of the tunnel! 🌬️`
    },

    pilates: {
      keywords: [
        'pilates', 'sky pilates', 'pilates class', 'fitness', 'yoga', 'workout',
        'exercise', 'wellness', 'core', 'flexibility', 'wind tunnel pilates',
        'aerial', 'pilates schedule', 'pilates price', 'drop in', 'class pass',
        'pilates session', 'body workout', 'fitness class', 'tunnel fitness'
      ],
      response: () => `**Sky Pilates at Luxfly** 🧘✈️\n\nUnique **Sky Pilates** sessions — pilates in the wind tunnel for an extraordinary core and body workout!\n\n**📅 Schedule:**\n🗓️ Tuesday & Thursday: **7:30 AM**\n🗓️ Saturday: **9:00 AM**\n\n**💶 Pricing:**\n- Drop-in (single class): **€45**\n- 4-class pass: **€160** (€40/class)\n- 8-class pass: **€280** (€35/class)\n\nNo flying experience required — just a love of movement! Classes led by certified instructors.\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    loyalty: {
      keywords: [
        'loyalty', 'loyalty programme', 'fidelity', 'fidelitybox', 'points',
        'rewards', 'loyalty card', 'member', 'membership', 'frequent flyer',
        'reward points', 'earn points', 'redeem', 'loyalty program',
        'fidélité', 'treueprogramm', 'points fidélité', 'bonus', 'perks',
        'benefits', 'stamp card', 'repeat customer', 'regular customer',
        'fly again', 'coming back', 'return customer', 'loyalty scheme'
      ],
      response: () => `**Luxfly FidelityBox — Our Loyalty Programme** 🌟\n\nFly more, earn more with **FidelityBox**!\n\n**How it works:**\n📱 Your **phone number is your loyalty card** — no physical card needed!\n⭐ Earn points every time you fly or buy at Luxfly\n🎁 Redeem points for free flights, discounts & exclusive rewards\n\n**Member perks:**\n- Priority booking access\n- Exclusive member promotions\n- Birthday surprises\n- Early access to new packages\n\nJust give your phone number at check-in — you're automatically enrolled!\n\n📞 +32 63 39 11 63 for details on current rewards.`
    },

    coaches: {
      keywords: [
        'coach', 'coaches', 'instructor', 'instructors', 'staff', 'trainer',
        'trainers', 'certified', 'qualified', 'who teaches', 'teach', 'teaching',
        'who are the', 'your team', 'flight instructor', 'tunnel instructor',
        'languages', 'speak french', 'speak german', 'speak english',
        'multilingual', 'how experienced', 'team of coaches', 'your coaches',
        'training staff', 'who will teach me', 'professional coaches'
      ],
      response: () => `**Meet our World-Class Coaching Team** 🏆\n\n✅ **8 certified coaches** on our team\n✅ **12,000+ combined tunnel hours** of experience\n✅ All hold internationally recognised tunnel instructor certifications\n\n**Languages spoken:**\n🇬🇧 English | 🇫🇷 French | 🇩🇪 German | 🇱🇺 Luxembourgish | 🇮🇹 Italian\n\nFrom nervous first-timers to competitive athletes — our coaches adapt to every level. For beginner packages, your instructor is **inside the tunnel with you** the whole time. You're never alone! 💪`
    },

    tunnel: {
      keywords: [
        'tunnel', 'wind tunnel', 'wind speed', 'speed', 'how fast', 'km/h',
        'mph', 'belly fly', 'belly flying', 'sit fly', 'sit flying', 'head down',
        'head-down', 'airflow', 'wind', 'power', 'diameter', 'size', 'tunnel size',
        'technical', 'specifications', 'specs', 'how big', 'how powerful',
        'how strong', 'state of the art', 'vertical wind tunnel'
      ],
      response: () => `**Luxfly Wind Tunnel — Technical Specs** ⚡\n\nOur state-of-the-art vertical wind tunnel is built for everyone from beginners to world champions!\n\n**Wind Speed by Discipline:**\n🤸 **Belly Flying** (beginner/recreational): **130–160 km/h**\n💺 **Sit Flying** (intermediate): **180–220 km/h**\n🔻 **Head-Down** (advanced/pro): **250–320 km/h**\n\nWind speed is precisely controlled and adjusted per flyer's size, weight, and skill level by our instructors.\n\n🛡️ All safety systems are certified to the highest European standards. Built for maximum safety and enjoyment! ✈️`
    },

    partners: {
      keywords: [
        'partner', 'partners', 'partnership', 'business', 'affiliate',
        'commission', 'resell', 'collaborate', 'b2b', 'travel agent',
        'tour operator', 'hotel', 'work together', 'collaboration', 'commercial',
        'partenaire', 'partenariat', 'partner programme', 'referral', 'agent',
        'become a partner', 'trade', 'wholesale', 'distribution', 'reseller'
      ],
      response: () => `**Become a Luxfly Partner** 🤝\n\nWe work with travel agencies, hotels, tour operators, and businesses across Luxembourg and the Greater Region.\n\n**Partner Benefits:**\n💰 Earn **10–15% commission** on all referrals\n🎟️ Special rates for your clients\n📦 Co-branded promotional materials\n🌐 Listed on our website as a preferred partner\n\n**Apply:**\n📧 partners@luxfly.lu\n📞 +32 63 39 11 63\n\nOur partnerships team responds within 48 hours! ✈️`
    },

    jobs: {
      keywords: [
        'job', 'jobs', 'career', 'careers', 'work', 'working', 'employment',
        'vacancy', 'vacancies', 'hiring', 'apply', 'application', 'position',
        'role', 'join the team', 'join us', 'recruitment', 'tunnel instructor job',
        'safety officer', 'events coordinator', 'customer experience', 'internship',
        'apprenticeship', 'emploi', 'nous rejoindre', 'arbeit', 'stelle',
        'work for you', 'work with you', 'open positions', 'are you hiring'
      ],
      response: () => `**Careers at Luxfly** 💼✈️\n\nWe're always looking for passionate people to join our team!\n\n**Open Positions:**\n🌬️ **Tunnel Instructor** — Lead beginner and advanced sessions\n🛡️ **Safety Officer** — Maintain the highest safety standards\n🎉 **Events Coordinator** — Plan group, corporate & special events\n😊 **Customer Experience** — Front-of-house & guest services\n\nNot seeing your role? Get in touch — we're a growing company!\n\n**To apply:**\n📧 jobs@luxfly.lu\n📞 +32 63 39 11 63\n\nCome help others discover the joy of flight! 🚀`
    },

    balloon: {
      keywords: [
        'balloon', 'hot air balloon', 'ballon', 'hot air', 'montgolfière',
        'ballon à air chaud', 'balloon ride', 'balloon experience', 'balloon flight',
        'balloon partner', 'outdoor activity', 'other activities', 'what else',
        'anything else to do', 'other experiences'
      ],
      response: () => `**Hot Air Balloon Experiences** 🎈\n\nLooking for another way to experience the skies? Luxfly has partnered with a premier hot air balloon operator!\n\n🎈 **Hot Air Balloon Flights:**\n💶 **€180–€250 per person**\n📅 Season: **April – October**\n📍 Departing from the Luxembourg/Belgium region\n\nThe perfect complement to indoor skydiving — or a standalone special gift!\n\nFor availability and bookings:\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
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
    return /^(hi|hello|hey|hiya|howdy|bonjour|salut|hallo|guten tag|moin|coucou|yo|sup|what's up|whats up|greetings|good morning|good afternoon|good evening)[\s!.?,]*$/i.test(text.trim());
  }

  function isThanks(text) {
    return /\b(thanks?|thank you|merci|danke|cheers|gracias|grazie|appreciated|perfect|great|awesome|brilliant|wonderful)\b/i.test(text) &&
      text.trim().split(/\s+/).length < 10;
  }

  // ─── Response arrays ────────────────────────────────────────────────────────
  const greetings = [
    "Hey there! 👋 Welcome to Luxfly — I'm Zoom, your flight guide. Ask me anything about indoor skydiving, prices, booking, or anything else!",
    "Hello! I'm Zoom, Luxfly's virtual assistant. 🌬️ Ready to help you take flight! What would you like to know?",
    "Hey! Welcome to Luxfly! ✈️ I'm Zoom — what would you like to know about our indoor skydiving experience?",
    "Hi there! Great to see you! I'm Zoom, here to answer all your Luxfly questions. Prices, booking, health — just ask! 🚀"
  ];

  const replies = [
    "You're welcome! Let me know if there's anything else I can help with! ✈️",
    "My pleasure! If you think of any more questions, just ask! 😊",
    "Happy to help! Don't hesitate to reach out if you need anything else. 🌬️",
    "Anytime! Is there anything else you'd like to know about Luxfly? 🚀"
  ];

  const fallbacks = [
    "I'm not sure I have the answer to that one! 🤔 For the most accurate info, contact our team:\n📞 +32 63 39 11 63\n💬 WhatsApp: +32 477 528 566\n📧 info@luxfly.lu",
    "Hmm, that one's a bit outside my knowledge! 😅 Our team would be happy to help:\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu",
    "Great question — I want to make sure you get the right answer! Please reach out to our team:\n📞 +32 63 39 11 63\n💬 WhatsApp: +32 477 528 566",
    "I don't have that info to hand, sorry! 🙏 Reach us at 📞 +32 63 39 11 63 or 📧 info@luxfly.lu — we're very friendly! 😊"
  ];

  // ─── Markdown renderer ───────────────────────────────────────────────────────
  function renderMarkdown(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/\n/g, '<br>');
  }

  function getResponse(userText) {
    const text = userText.trim();
    if (!text) return fallbacks[0];
    if (isGreeting(text)) return greetings[Math.floor(Math.random() * greetings.length)];
    if (isThanks(text)) return replies[Math.floor(Math.random() * replies.length)];
    const category = classify(text);
    if (category && KB[category]) return KB[category].response();
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }

  // ─── UI Styles ───────────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    #zoom-chat-toggle {
      position: fixed; bottom: 24px; right: 24px; z-index: 9999;
      width: 60px; height: 60px; border-radius: 50%;
      background: linear-gradient(135deg, #1a6fc4, #0d4a8a);
      color: #fff; border: none; cursor: pointer;
      font-size: 28px; display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 20px rgba(26,111,196,0.5);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    #zoom-chat-toggle:hover { transform: scale(1.1); box-shadow: 0 6px 28px rgba(26,111,196,0.7); }

    #zoom-chat-window {
      position: fixed; bottom: 96px; right: 24px; z-index: 9998;
      width: 370px; max-height: 580px;
      background: #fff; border-radius: 16px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.18);
      display: flex; flex-direction: column;
      font-family: 'Segoe UI', Arial, sans-serif; font-size: 14px;
      overflow: hidden;
      transition: opacity 0.25s, transform 0.25s;
    }
    #zoom-chat-window.hidden { opacity: 0; transform: translateY(16px) scale(0.97); pointer-events: none; }

    #zoom-chat-header {
      background: linear-gradient(135deg, #1a6fc4, #0d4a8a);
      color: #fff; padding: 14px 16px;
      display: flex; align-items: center; gap: 10px;
      border-radius: 16px 16px 0 0; flex-shrink: 0;
    }
    #zoom-chat-header .avatar {
      width: 36px; height: 36px; border-radius: 50%;
      background: rgba(255,255,255,0.2);
      display: flex; align-items: center; justify-content: center;
      font-size: 20px; flex-shrink: 0;
    }
    #zoom-chat-header .info .name { font-weight: 700; font-size: 15px; }
    #zoom-chat-header .info .status { font-size: 11px; opacity: 0.85; }
    #zoom-chat-close {
      margin-left: auto; background: none; border: none;
      color: #fff; font-size: 20px; cursor: pointer; opacity: 0.8;
      padding: 4px 6px; border-radius: 6px; flex-shrink: 0;
    }
    #zoom-chat-close:hover { opacity: 1; background: rgba(255,255,255,0.15); }

    #zoom-chat-messages {
      flex: 1; overflow-y: auto; padding: 16px;
      display: flex; flex-direction: column; gap: 12px;
      background: #f7f9fc;
    }
    .zoom-msg { display: flex; flex-direction: column; max-width: 85%; }
    .zoom-msg.bot { align-self: flex-start; }
    .zoom-msg.user { align-self: flex-end; align-items: flex-end; }
    .zoom-bubble {
      padding: 10px 14px; border-radius: 14px;
      line-height: 1.55; word-wrap: break-word;
    }
    .zoom-msg.bot .zoom-bubble {
      background: #fff; color: #1a1a2e;
      border: 1px solid #e2e8f0;
      border-bottom-left-radius: 4px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.07);
    }
    .zoom-msg.user .zoom-bubble {
      background: linear-gradient(135deg, #1a6fc4, #0d4a8a);
      color: #fff; border-bottom-right-radius: 4px;
    }
    .zoom-msg .zoom-time { font-size: 10px; color: #aaa; margin-top: 3px; padding: 0 4px; }
    #zoom-chat-suggestions {
      padding: 0 12px 8px; display: flex; flex-wrap: wrap; gap: 6px;
      background: #f7f9fc; flex-shrink: 0;
    }
    .zoom-suggestion {
      background: #fff; border: 1px solid #1a6fc4; color: #1a6fc4;
      border-radius: 20px; padding: 5px 12px; font-size: 12px;
      cursor: pointer; transition: all 0.2s; white-space: nowrap;
    }
    .zoom-suggestion:hover { background: #1a6fc4; color: #fff; }

    #zoom-chat-input-row {
      display: flex; gap: 8px; padding: 12px;
      border-top: 1px solid #e2e8f0; background: #fff; flex-shrink: 0;
    }
    #zoom-chat-input {
      flex: 1; border: 1px solid #d1d5db; border-radius: 24px;
      padding: 10px 16px; font-size: 14px; outline: none;
      transition: border-color 0.2s; font-family: inherit;
    }
    #zoom-chat-input:focus { border-color: #1a6fc4; }
    #zoom-chat-send {
      background: linear-gradient(135deg, #1a6fc4, #0d4a8a);
      color: #fff; border: none; border-radius: 50%;
      width: 40px; height: 40px; min-width: 40px; cursor: pointer;
      font-size: 18px; display: flex; align-items: center; justify-content: center;
      transition: transform 0.2s;
    }
    #zoom-chat-send:hover { transform: scale(1.1); }

    .zoom-typing { display: flex; align-items: center; gap: 5px; padding: 4px 0; }
    .zoom-typing span {
      width: 7px; height: 7px; background: #1a6fc4; border-radius: 50%;
      animation: zoom-bounce 1.2s infinite;
    }
    .zoom-typing span:nth-child(2) { animation-delay: 0.2s; }
    .zoom-typing span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes zoom-bounce {
      0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
      40% { transform: translateY(-6px); opacity: 1; }
    }
    .zoom-bubble a { color: #1a6fc4; }
    .zoom-msg.user .zoom-bubble a { color: #cce; }
    @media (max-width: 420px) {
      #zoom-chat-window { width: calc(100vw - 24px); right: 12px; bottom: 88px; }
    }
  `;
  document.head.appendChild(style);

  // ─── HTML ────────────────────────────────────────────────────────────────────
  const container = document.createElement('div');
  container.innerHTML = `
    <button id="zoom-chat-toggle" aria-label="Chat with Zoom">✈️</button>
    <div id="zoom-chat-window" class="hidden" role="dialog" aria-label="Chat with Zoom">
      <div id="zoom-chat-header">
        <div class="avatar">✈️</div>
        <div class="info">
          <div class="name">Zoom</div>
          <div class="status">Luxfly Virtual Assistant · Always here to help</div>
        </div>
        <button id="zoom-chat-close" aria-label="Close chat">✕</button>
      </div>
      <div id="zoom-chat-messages"></div>
      <div id="zoom-chat-suggestions">
        <button class="zoom-suggestion">💶 Prices</button>
        <button class="zoom-suggestion">📅 Opening hours</button>
        <button class="zoom-suggestion">📍 Where are you?</button>
        <button class="zoom-suggestion">🎁 Gift voucher</button>
        <button class="zoom-suggestion">👥 Group booking</button>
        <button class="zoom-suggestion">🧒 Kids flying</button>
      </div>
      <div id="zoom-chat-input-row">
        <input id="zoom-chat-input" type="text" placeholder="Ask me anything…" autocomplete="off" />
        <button id="zoom-chat-send" aria-label="Send">➤</button>
      </div>
    </div>
  `;
  document.body.appendChild(container);

  // ─── DOM refs ────────────────────────────────────────────────────────────────
  const toggle      = document.getElementById('zoom-chat-toggle');
  const win         = document.getElementById('zoom-chat-window');
  const closeBtn    = document.getElementById('zoom-chat-close');
  const messages    = document.getElementById('zoom-chat-messages');
  const input       = document.getElementById('zoom-chat-input');
  const sendBtn     = document.getElementById('zoom-chat-send');
  const suggestions = document.querySelectorAll('.zoom-suggestion');

  // ─── Helpers ─────────────────────────────────────────────────────────────────
  let isOpen = false;

  function getTime() {
    const d = new Date();
    return d.getHours().toString().padStart(2, '0') + ':' + d.getMinutes().toString().padStart(2, '0');
  }

  function addMessage(text, sender) {
    const msg = document.createElement('div');
    msg.className = 'zoom-msg ' + sender;
    const bubble = document.createElement('div');
    bubble.className = 'zoom-bubble';
    bubble.innerHTML = renderMarkdown(text);
    const time = document.createElement('div');
    time.className = 'zoom-time';
    time.textContent = getTime();
    msg.appendChild(bubble);
    msg.appendChild(time);
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    const el = document.createElement('div');
    el.className = 'zoom-msg bot';
    el.id = 'zoom-typing';
    el.innerHTML = '<div class="zoom-bubble zoom-typing"><span></span><span></span><span></span></div>';
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }

  function hideTyping() {
    const el = document.getElementById('zoom-typing');
    if (el) el.remove();
  }

  function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    addMessage(trimmed, 'user');
    input.value = '';
    showTyping();
    setTimeout(() => {
      hideTyping();
      addMessage(getResponse(trimmed), 'bot');
    }, 600 + Math.random() * 400);
  }

  // ─── Events ──────────────────────────────────────────────────────────────────
  toggle.addEventListener('click', () => {
    isOpen = !isOpen;
    win.classList.toggle('hidden', !isOpen);
    if (isOpen && messages.children.length === 0) {
      setTimeout(() => {
        addMessage(greetings[Math.floor(Math.random() * greetings.length)], 'bot');
      }, 300);
    }
    if (isOpen) input.focus();
  });

  closeBtn.addEventListener('click', () => {
    isOpen = false;
    win.classList.add('hidden');
  });

  sendBtn.addEventListener('click', () => sendMessage(input.value));

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage(input.value);
  });

  suggestions.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!isOpen) {
        isOpen = true;
        win.classList.remove('hidden');
        if (messages.children.length === 0) {
          addMessage(greetings[Math.floor(Math.random() * greetings.length)], 'bot');
        }
      }
      sendMessage(btn.textContent);
    });
  });

})();
