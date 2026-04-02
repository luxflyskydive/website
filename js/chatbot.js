(function () {
  'use strict';

  // ─── Knowledge Base ────────────────────────────────────────────────────────
  const KB = {

    // ── PRICES ──────────────────────────────────────────────────────────────
    prices: {
      keywords: [
        'price', 'prices', 'cost', 'costs', 'how much', 'how much is it',
        'how much does it cost', 'package', 'packages', 'kostet', 'kosten',
        'tarif', 'tarifs', 'prix', 'combien', 'rate', 'rates', 'fee', 'fees',
        'charge', 'pay', 'ticket', 'tickets', 'option', 'options', 'affordable',
        'cheap', 'expensive', 'budget', 'adult price', 'adult package',
        'what does it cost', 'what is the price', 'how much do you charge',
        'pricing', 'cost per', 'how much per', 'what are the prices',
        'tell me the prices', 'show me prices', 'list of packages'
      ],
      response: () => `Here are our flight packages:\n\n**👤 ADULTS**\n✈️ **LUXCOVERY** — 2 flights (2 min): **€104.70**\n✈️ **LUXENSATION** — 2 flights (4 min): **€174.70**\n✈️ **LUXEMOTION** — 3 flights (6 min): **€236.70**\n💡 Basic option (no extras) from **€65.90**\n\n**🧒 KIDS (ages 4–12)**\n✈️ **Kids 2 flights:** **€89.70**\n✈️ **Kids 4 flights:** **€139.80**\n💡 Basic option from **€45.90**\n\nAll main packages include: full gear, safety briefing, qualified instructor, HighFly experience, professional souvenir photos, and **Art of Skydiving Museum** access. 🎫\n\nNot sure which to pick? Ask me for a recommendation! 😊`
    },

    // ── RECOMMENDATION ───────────────────────────────────────────────────────
    recommend: {
      keywords: [
        'recommendation', 'suggest', 'suggestion', 'best package',
        'which package', 'what package', 'what should i book', 'what should i get',
        'which one should i', 'what do you suggest', 'what is best', 'most popular',
        'best for me', 'best for a beginner', 'best for first time', 'starter package',
        'beginner package', 'not sure what to book', 'what to get', 'what to choose',
        'which to choose', 'which to book', 'help me choose', 'what would you recommend',
        'advice', 'advise', 'what do most people get', 'best value', 'good value',
        'worth it', 'is it worth', 'what should i start with', 'ideal package',
        'perfect package', 'suitable package', 'i don\'t know what to book'
      ],
      response: () => `**Here's what we recommend for first-timers:** ✈️\n\n🌟 **LUXCOVERY (2 flights, €104.70)** is the perfect start — your first flight is about getting the feel of it, and the second is where you really begin to fly. Includes HighFly experience and professional photos!\n\n💪 Want more tunnel time? **LUXENSATION (4 min, €174.70)** gives you noticeably more progression and is fantastic value.\n\n🏆 **LUXEMOTION (6 min, €236.70)** — the ultimate package for those who want the full experience.\n\n🧒 **For kids (4–12):** the **2-flight kids package (€89.70)** is the perfect introduction!\n\nAll main packages include gear, briefing, instructor, HighFly, professional photos, and **Museum** access. 😊`
    },

    // ── KIDS ─────────────────────────────────────────────────────────────────
    kids: {
      keywords: [
        'kid', 'kids', 'child', 'children', 'baby', 'junior', 'young',
        'minimum age', 'how old', 'can my kid', 'can children', 'for children',
        'for kids', 'how much for kid', 'price for child', 'price for kids',
        'family', 'how young', 'kind', 'enfant', 'enfants', 'age limit',
        'age restriction', 'my son', 'my daughter', 'my child', 'old enough',
        'toddler', 'four year', '4 year', '5 year', '6 year', 'can a child',
        'is it suitable for children', 'can babies', 'youngest', 'youngest age',
        'too young', 'safe for kids', 'safe for children', 'kids safe',
        'is it safe for my child', 'children allowed', 'kids allowed',
        'minimum age for kids', 'what age can children',
        'kids package', 'kids packages', 'children package', 'children packages',
        'how much for my daughter', 'how much for my son', 'how much for my child',
        'how much for a child', 'how much for kids', 'how much for a kid',
        'price for my daughter', 'price for my son', 'price for my child',
        '7 year old', '8 year old', '9 year old', '10 year old', '11 year old', '12 year old',
        '7 year', '8 year', '9 year', '10 year', '11 year', '12 year',
        'year old child', 'year old kid', 'is there a kids package', 'do you have kids packages',
        'my kid wants to fly', 'kid wants to fly', 'my kid wants', 'kid wants',
        'age limit for kids', 'kids age limit', 'is there an age limit for kids',
        'child price', 'children price', 'price for children',
        'family package', 'family packages',
        'toddlers', 'can toddlers fly'
      ],
      response: () => `**Kids are absolutely welcome at Luxfly!** 🧒✈️\n\n**Minimum age: 4 years old.** Maximum weight: 120 kg.\n\n**Kids Packages (ages 4–12):**\n✈️ **2 flights:** **€89.70** (includes HighFly, souvenir photos & museum)\n✈️ **4 flights:** **€139.80**\n💡 Basic option available from **€45.90** (limited slots, no extras)\n\nKids actually adapt to the air faster than adults! A parent or legal guardian must be present at all times, and a signed consent form is required for under-18s.\n\nAll instructors hold child-flight certification and adjust wind speeds for smaller flyers. 💙`
    },

    // ── OPENING HOURS ────────────────────────────────────────────────────────
    hours: {
      keywords: [
        'hour', 'hours', 'open', 'opening', 'close', 'closing', 'closed',
        'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
        'weekend', 'weekday', 'geöffnet', 'öffnungszeiten',
        'ouvert', 'horaire', 'horaires', 'available',
        'opening time', 'closing time', 'are you open', 'when do you open',
        'when do you close', 'what time do you open', 'what time do you close',
        'open on weekends', 'open on sundays', 'open today', 'what days',
        'which days', 'when are you open', 'do you open on', 'bank holiday',
        'public holiday', 'christmas', 'new year'
      ],
      response: () => `**Luxfly Opening Hours:**\n\n📅 **Monday:** Closed *(open on the 1st Monday of each month)*\n📅 **Tuesday:** Closed\n📅 **Wednesday – Friday:** 12:00 – 20:00\n📅 **Saturday & Sunday:** 10:00 – 19:00\n\n⏰ Last sessions admitted **90 minutes before closing**.\n\nAfter-hours private hire is available Mon–Thu from 07:00 — contact us for details.\n\nWe recommend booking ahead, especially for weekends. Walk-ins welcome subject to availability! 🎟️`
    },

    // ── LOCATION ─────────────────────────────────────────────────────────────
    location: {
      keywords: [
        'address', 'location', 'find you', 'get there', 'directions',
        'navigate', 'sterpenich', 'arlon', 'ikea', 'decathlon', 'parking', 'park',
        'bus', 'tec', 'transport', 'e411', 'motorway', 'highway', 'exit',
        'luxembourg', 'belgium', 'belgique', 'où', 'adresse', 'comment venir',
        'wie komme ich', 'map', 'situated', 'near', 'close to', 'next to',
        'by car', 'by bus', 'public transport', 'route de l\'europe',
        'how do i get to you', 'how do i get there', 'where are you',
        'where are you located', 'where is luxfly', 'find luxfly',
        'are you easy to find', 'how far', 'how far from luxembourg',
        'near luxembourg', 'border', 'from luxembourg city', 'from brussels',
        'from arlon', 'from liege', 'close to', 'how close', 'free parking', 'is there parking',
        'can i park', 'parking available', 'is parking free'
      ],
      response: () => `**Luxfly is in Sterpenich, Belgium** 📍\n\n🏠 **Address:** Route de l'Europe 1, 6700 Sterpenich, Belgium\n\n🚗 **By Car:** E411 motorway, exit 33 (Sterpenich/Arlon). We're right next to **IKEA** and **Decathlon** — very easy to find! **80+ free parking spaces** on site.\n\n🚌 **By Bus:** TEC bus line 222 stops right outside.\n\n📍 Just minutes from the Luxembourg border — easily accessible from Luxembourg City, Arlon, and the wider Greater Region.`
    },

    // ── BOOKING / CANCELLATION ───────────────────────────────────────────────
    booking: {
      keywords: [
        'book', 'booking', 'reserve', 'reservation', 'cancel', 'cancellation',
        'refund', 'walk-in', 'walk-ins', 'without booking', 'online', 'appointment',
        'slot', 'availability', 'rebook', 'reschedule', 'postpone', 'deposit',
        'payment', 'pay online', 'buchen', 'réserver', 'annuler', 'rembours',
        'prepay', 'last minute', 'same day', 'policy', 'terms', 'conditions',
        'do i need to book', 'must i book', 'can i just turn up', 'can i walk in',
        'can i just show up', 'just show up', 'can i come without booking',
        'do i need a reservation', 'pay in advance', 'pay on the day',
        'payment method', 'pay by card', 'pay by cash', 'credit card',
        'debit card', 'cash', 'how do i pay', 'how to pay', 'how to book',
        'can i book online', 'book over the phone', 'book by phone',
        'is there availability', 'how do i cancel', 'what if i cancel',
        'money back', 'can i get a refund', 'change my booking',
        'change the date', 'change the time', 'move my booking',
        'i need to cancel', 'cancellation policy', 'refund policy',
        'is it fully booked', 'when can i come', 'first come first served',
        'pay cash', 'pay in cash', 'credit cards', 'debit cards',
        'do you accept cash', 'do you accept cards', 'payment methods'
      ],
      response: () => `**Booking at Luxfly:**\n\n🎟️ Book online at **shop.indoorskydive.lu** or call **+32 63 39 11 63**.\n\n💳 Full payment required at time of booking. All major payment methods accepted.\n\n🚶 **Walk-ins welcome** subject to availability — but booking ahead is strongly recommended, especially for weekends. Groups of 5+ should book at least **48 hours in advance**.\n\n**Cancellation Policy:**\n✅ **More than 48 hours before:** Full refund or free rescheduling\n⚠️ **24–48 hours before:** 50% refund\n❌ **Less than 24 hours before:** No refund\n🚫 **No-show:** Full amount charged\n\nGift vouchers accepted online and in-person.`
    },

    // ── BIRTHDAY ─────────────────────────────────────────────────────────────
    birthday: {
      keywords: [
        'birthday', 'anniversaire', 'geburtstag', 'birthday party', 'celebrate',
        'celebration', 'special occasion', 'surprise', 'birthday month', 'bday',
        'happy birthday', 'birthday idea', 'birthday gift', 'party idea',
        'special day', 'birthday discount', 'birthday deal', 'birthday offer',
        'for my birthday', 'it\'s my birthday', 'birthday treat', 'treat myself',
        'birthday experience', 'unique gift', 'gift idea', 'present idea',
        'something special', 'celebrate birthday',
        'birthday package', 'birthday packages', 'do you have birthday packages',
        'birthday add-ons', 'birthday options'
      ],
      response: () => `**🎂 Celebrate your birthday at Luxfly!**\n\n🎉 **Birthday Month Discount:** Fly during your birthday month and get **10% off** your package — just mention it when booking!\n\n🎁 **Birthday Add-ons:**\n- Private viewing gallery for friends & family\n- Photography & video package\n- Balloon & decoration package\n- Dedicated flight instructor for your group\n\n🎊 **Group birthday packages** available with custom quotes.\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── GROUPS / BACHELOR / CORPORATE ────────────────────────────────────────
    groups: {
      keywords: [
        'group', 'groups', 'team', 'team building', 'corporate', 'company',
        'colleagues', 'bachelor', 'bachelor party', 'hen party', 'bachelorette',
        'stag', 'stag do', 'office', 'friends', 'large group', 'big group',
        'association', 'school', 'class trip', 'incentive', 'groupe', 'entreprise',
        'evjf', 'enterrement de vie', 'mannschaft', 'firmen', 'per person',
        'group rate', 'group price', 'group discount', 'group booking',
        'private event', 'private hire', 'exclusive hire', 'private session',
        'rent the tunnel', 'hire the tunnel', 'book for a group',
        'book for my team', 'work event', 'work outing', 'office outing',
        'corporate event', 'how many people', 'big group discount',
        'we are a group of', 'there are', 'people coming', 'how much for a group',
        'group of friends', 'group of colleagues', 'group deal',
        'evg', 'evjf', 'junggesellenabschied', 'enterrement de vie de garcon',
        'hen do', 'hen dos', 'hen night', 'bachelor night', 'going to be', 'party of',
        'group rates', 'group rate price', 'how much are group rates',
        'how much for a hen party', 'hen party price', 'price for hen party',
        'how much for hen', 'how much for 20 people', 'how much for 10 people',
        'how much for 15 people', 'how much for 30 people', 'how much for 50 people',
        'how much for a group', 'price for a group', 'cost for a group',
        'book for our company', 'book for the company', 'book for my company',
        'company outing', 'whole company', 'entire company', 'all my colleagues',
        'book for our team', 'book for the whole team', 'group booking price', 'group package', 'group packages',
        'people', 'a party of', 'we are a party of',
        'discount for groups', 'is there a discount for groups', 'group discount'
      ],
      response: () => `**Group & Event Packages at Luxfly** 👥\n\n**Group Flight Rates (per minute of flight time):**\n👥 2–9 guests: **€35/min** (base rate)\n👥 10–19 guests: **€31.50/min** (10% off)\n👥 20–49 guests: **€29.75/min** (15% off)\n👥 50–99 guests: **€28/min** (20% off)\n👥 100+ guests: **Custom quote**\n\n📌 Group discounts apply from **10 people**. Booking required **7 days in advance** minimum. A **30% deposit** secures your date.\n\n**🎊 Bachelor / Hen Party Packages** (min. 6 guests):\n🥂 **Classic:** €28/person (1 min tunnel time each)\n🎉 **Party Plus:** €52/person (2 min + group photo)\n👑 **VIP Send-Off:** from **€550 for 10 people** (private hire, photos, video & catering)\n\n**🏢 Team Building:** Scales from 8 to 250+ people. Meeting rooms, catering & AV available.\n\n📧 info@luxfly.lu | 📞 +32 63 39 11 63`
    },

    // ── EXPERIENCE / WHAT IS IT ──────────────────────────────────────────────
    experience: {
      keywords: [
        'experience', 'need experience', 'first time', 'beginner', 'never done',
        'indoor skydiving', 'wind tunnel', 'what is it like', 'what is indoor skydiving',
        'how does it work', 'feel like', 'does it feel', 'what does it feel',
        'what does it feel like', 'scary', 'difficult', 'hard', 'easy',
        'skydiving', 'skydive', 'erfahrung', 'première fois', 'débutant', 'novice',
        'nervous', 'afraid', 'intimidating', 'never flown', 'bodyflight', 'freefall',
        'floating', 'i want to fly', 'want to fly', 'flying', 'try it',
        'sensation', 'adrenaline', 'exhilarating', 'thrilling', 'fun',
        'will i be scared', 'is it terrifying', 'am i going to be scared',
        'what if i am scared', 'will i get dizzy', 'dizzy', 'nauseous', 'sick',
        'will i feel sick', 'motion sickness', 'is it like real skydiving',
        'compared to real skydiving', 'similar to skydiving', 'difference from skydiving',
        'is it indoors', 'is it outdoors', 'indoor', 'outdoor', 'outside', 'inside',
        'what happens', 'how does it feel to fly', 'describe the feeling',
        'tell me about the experience', 'what is bodyflight', 'what is a wind tunnel',
        'do i need to be fit', 'how fit', 'fitness required', 'physically demanding',
        'do i need strength', 'can unfit people fly', 'is it tiring',
        'how safe is it', 'is it dangerous', 'danger', 'risk', 'safe activity',
        'what are the risks', 'accident', 'injury risk', 'protection',
        'is it safe', 'is it completely safe', 'how safe is it', 'is luxfly safe',
        'is it a safe activity', 'safe to do',
        'beginners', 'suitable for beginners', 'good for beginners',
        'how does the wind tunnel work', 'how does indoor skydiving work'
      ],
      response: () => `**Indoor skydiving — no experience needed!** 🌬️✈️\n\nIndoor skydiving (bodyflight) recreates the feeling of skydiving freefall inside a vertical wind tunnel. You float on a powerful column of air at up to **160 km/h** — safe, controlled, and completely addictive!\n\n🏠 **It's fully indoors** — weather never affects your flight.\n\n😰 **Scared? Don't worry!** Almost all our guests are first-timers. Your instructor is inside the tunnel with you the whole time and won't let go until you're ready.\n\n💪 **No fitness required** — it's floating, not fighting! All ages and fitness levels are welcome.\n\n🎓 **Full safety briefing** included with every package. All gear provided.\n\n🧒 Suitable for ages **4 and up** (min 30 kg, max 120 kg). It's one of the safest adventure activities available! ✅`
    },

    // ── GEAR / WHAT TO WEAR ──────────────────────────────────────────────────
    gear: {
      keywords: [
        'wear', 'bring', 'equipment', 'gear', 'included', 'helmet', 'jumpsuit',
        'suit', 'shoes', 'clothing', 'clothes', 'what do i wear', 'what should i wear',
        'outfit', 'dress', 'jewellery', 'jewelry', 'glasses', 'contacts',
        'contact lenses', 'accessories', 'provided', 'ausrüstung', 'vêtements',
        'tenue', 'équipement', 'goggles', 'earplugs', 'flying suit', 'what to wear',
        'what do i need to bring', 'what should i bring', 'do i need to bring anything',
        'is equipment provided', 'is gear included', 'what is provided',
        'what is included', 'what do i need', 'do i need to bring', 'what to prepare',
        'prepare for my visit', 'how should i prepare', 'what to wear underneath',
        'can i wear glasses', 'can i wear jewellery', 'can i wear jewelry',
        'can i wear a ring', 'long hair', 'hair', 'hairband', 'piercings', 'piercing',
        'can i wear contacts', 'barefoot', 'lace up', 'sneakers', 'trainers',
        'what shoes', 'flip flops', 'sandals', 'heels', 'boots', 'lockers', 'locker'
      ],
      response: () => `**Everything is provided — just show up!** 🎽\n\n**Included in your package:**\n✅ Flying suit (jumpsuit)\n✅ Helmet\n✅ Goggles\n✅ Earplugs\n\n**Wear underneath:**\n👟 Comfortable, sporty clothing (no skirts/dresses)\n👟 Lace-up trainers or sports shoes — no sandals, heels, or slip-ons!\n\n**Please remove/leave behind:**\n❌ Jewellery, watches, rings, earrings, piercings if possible\n❌ Scarves, belts, or loose accessories\n👓 **Glasses:** you can keep them on — we have oversized goggles that fit over glasses!\n\n💇 Long hair? Tie it back — we'll sort it under your helmet.\n\n🗝️ Lockers are available on-site for your belongings. See you in the tunnel! 🌬️`
    },

    // ── SPECTATORS ───────────────────────────────────────────────────────────
    spectators: {
      keywords: [
        'watch', 'watching', 'spectator', 'spectators', 'viewing', 'viewing area',
        'can my friend', 'can my family', 'film', 'film my friend', 'photograph',
        'photo', 'video', 'camera', 'photos', 'footage', 'observe', 'cheer',
        'audience', 'support', 'famille', 'amis', 'regarder', 'zuschauer',
        'friends come', 'come along', 'come watch', 'bring friends', 'non-flyer',
        'not flying', 'just watching', 'gallery', 'photography package',
        'can someone come with me', 'can my partner watch', 'can my parents watch',
        'can my husband watch', 'can my wife watch', 'can my partner come',
        'free for spectators', 'entry for spectators', 'is it free to watch',
        'can non-flyers come in', 'can non flyers', 'just come and watch',
        'is there a viewing area', 'see through', 'glass',
        'how do i get photos', 'can i film', 'can i take photos', 'can i record',
        'professional photos', 'photos of my flight', 'video of my flight',
        'record my flight', 'film my flight', 'how to get footage'
      ],
      response: () => `**Friends & family are very welcome to come along!** 📸👀\n\n🏟️ **Dedicated viewing gallery** with clear glass panels — spectators get a perfect view of everything inside the tunnel.\n\n📷 **Photos & Video:**\n- Spectators can photograph and film freely from the gallery\n- Professional **photography/video packages** available — ask at reception!\n- In-tunnel cameras capture incredible footage\n\n🎟️ **Entry for spectators is FREE** — no ticket needed.\n\n🏛️ All packages include **Aviation Museum** access, so non-flyers have plenty to enjoy while waiting! ✈️`
    },

    // ── DURATION / TIMING ────────────────────────────────────────────────────
    duration: {
      keywords: [
        'how long', 'duration', 'arrive', 'arrival', 'check in', 'check-in',
        'total time', 'visit', 'long is the visit', 'how much time', 'minutes',
        'seconds', 'flight time', 'when to arrive', 'how early', 'long does it take',
        'flight duration', 'wie lange', 'combien de temps', 'durée', 'long is a flight',
        'each flight', 'per flight', 'how many minutes', 'plan my visit',
        'how long will i be there', 'how long does a visit take', 'how long is it',
        'what time should i arrive', 'what time should i get there',
        'how early should i arrive', 'do i need to arrive early',
        'how much time should i set aside', 'how long for the whole thing',
        'am i late', 'what if i\'m late', 'if i am late', 'running late',
        'long is each flight', 'how long is 1 flight', 'how long is one flight',
        'how long in total', 'how long is the session', 'how long is a session',
        '60 seconds', '1 minute', 'flight length'
      ],
      response: () => `**Planning your Luxfly visit:**\n\n⏰ **Arrive 60 minutes before** your flight time — for check-in, kit-up, and safety briefing.\n\n✈️ **Each flight = 60 seconds** of pure tunnel exhilaration. (It feels MUCH longer when you're in there!)\n\n⏱️ **Total visit:** approximately **2 hours** including briefing, flights, and museum.\n\n**Typical breakdown:**\n📋 Arrival & registration: 10–15 min\n🎓 Safety briefing: 15–20 min\n🎽 Getting kitted up: 10 min\n🌬️ Your flights: 60 sec each with instructor\n🏛️ Museum: explore at your own pace!\n\nRunning late? Call us on **+32 63 39 11 63** as soon as possible.`
    },

    // ── HEALTH / AGE / RESTRICTIONS ──────────────────────────────────────────
    health: {
      keywords: [
        'pregnant', 'pregnancy', 'heart condition', 'heart problem', 'epilepsy',
        'medical', 'health', 'disability', 'disabled', 'back problem', 'back pain',
        'neck problem', 'neck pain', 'injury', 'injured', 'operation', 'surgery',
        'asthma', 'pacemaker', 'weight limit', 'maximum weight', 'minimum weight',
        'kg', 'kilos', 'restrictions', 'safe', 'can i fly', 'health condition',
        'santé', 'gesundheit', 'enceinte', 'schwanger', 'high blood pressure',
        'hypertension', 'medication', 'wheelchair', 'contraindication',
        // Age questions
        'oldest', 'oldest person', 'maximum age', 'upper age limit', 'age restriction',
        'age limit for adults', 'how old can you be', 'too old', 'am i too old',
        'senior', 'seniors', 'elderly', 'pensioner', 'pensioners', 'retired',
        'grandparent', 'grandparents', 'granny', 'grandma', 'grandpa',
        'grandfather', 'grandmother', 'older person', 'older people',
        'can an old person fly', 'can old people fly', 'can seniors fly',
        'elderly people', 'can elderly people fly', 'elderly person',
        'is there an age limit', 'upper age', 'what is the age limit',
        'how old is too old', '60 year old', '70 year old', '80 year old',
        '90 year old', 'over 60', 'over 70', 'over 80', 'over 50',
        // Weight questions
        'overweight', 'too heavy', 'too light', 'weight restriction',
        'how heavy', 'how much can i weigh', 'weight requirement',
        'bmi', 'obese', 'obesity', 'too fat', 'too thin',
        // Fitness / physical
        'heart rate', 'blood pressure',
        'can i fly if i have', 'allowed to fly', 'unfit to fly', 'fit to fly',
        // Alcohol / drugs
        'been drinking', 'had a drink', 'drunk', 'alcohol', 'hungover', 'hangover',
        // Back/neck problems explicitly
        'bad back', 'have a bad back', 'bad back problem', 'bad neck', 'back injury',
        'neck injury', 'slipped disc', 'herniated disc', 'spinal problem', 'spine issue'
      ],
      response: () => `**Health & Age at Luxfly** 🏥\n\n**Age:** Minimum **4 years old**. There is **no upper age limit** — we fly guests all the way up to **95 years old**! 🎉\n\n**Weight:** Min **30 kg** | Max **120 kg**\n\n**Do NOT fly if you:**\n❌ Are pregnant\n❌ Have a serious heart condition or pacemaker\n❌ Have epilepsy (uncontrolled)\n❌ Have a recent injury, surgery, or serious back/neck problem\n❌ Have uncontrolled high blood pressure\n❌ Have been drinking alcohol or taking drugs\n\n**Unsure?** Consult your doctor before visiting, and always let us know at booking so we can help. Our team will always find the best solution for you. 💙\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── CONTACT ──────────────────────────────────────────────────────────────
    contact: {
      keywords: [
        'contact', 'email', 'phone', 'call', 'speak to', 'get in touch', 'reach',
        'whatsapp', 'message', 'chat', 'talk to', 'customer service', 'support',
        'help', 'enquiry', 'inquiry', 'kontakt', 'telefon', 'contactez', 'téléphone',
        'joindre', 'reach out', 'how do i get in touch', 'press', 'media', 'instagram', 'facebook',
        'number', 'telephone', 'social media', 'how to contact', 'speak with someone',
        'can i call you', 'do you have a phone number', 'what is your email',
        'what is your phone number', 'how do i reach you', 'is there a number',
        'customer care', 'complaints', 'feedback', 'get back to me',
        'reply to me', 'when will you reply', 'response time',
        'talk to a person', 'talk to a human', 'speak to a person',
        'speak to a human', 'speak to someone real', 'live chat',
        'what is your whatsapp', 'do you have whatsapp'
      ],
      response: () => `**Get in touch with Luxfly:** 📞\n\n📞 **Phone:** +32 63 39 11 63\n💬 **WhatsApp:** +32 477 528 566\n📧 **General:** info@luxfly.lu\n📧 **Press/Media:** press@luxfly.lu\n📧 **Partnerships:** partners@luxfly.lu\n\n🌐 **Website:** luxfly.lu\n📱 **Instagram:** @luxflyskydive\n\n🏠 **Address:** Route de l'Europe 1, 6700 Sterpenich, Belgium\n\nOur team loves hearing from you — don't hesitate to reach out! ✈️`
    },

    // ── PROMOTIONS / DISCOUNTS ───────────────────────────────────────────────
    promo: {
      keywords: [
        'promo', 'promotion', 'promotions', 'discount', 'coupon', 'code',
        'deal', 'special offer', 'student', 'military', 'reduce',
        'reduction', 'save', 'cheaper', 'saving', 'spring', 'spring26',
        'group15', 'bring a friend', 'birthday month', 'rabatt', 'réduction',
        'offre', 'bon de réduction', 'current offers', 'any deals', 'sale',
        'promotional code', 'promo code', 'discount code', 'student discount',
        'do you have a discount', 'is there a discount', 'any discounts',
        'any offers', 'any promotions', 'what promotions', 'current promotions',
        'student card', 'student id', 'military discount', 'how can i save',
        'is there a cheaper way', 'loyalty discount', 'any codes',
        'do you have any promotions', 'are there any deals', 'do you have any deals',
        'deals', 'current deals', 'any current deals',
        'savings', 'any savings', 'are there any savings',
        'cheaper rate', 'cheaper option', 'cheaper price',
        'special offers', 'any special offers', 'current special offers'
      ],
      response: () => `**Current Promotions at Luxfly** 🎉\n\n🌸 **SPRING26** — **15% off** all packages! Valid until **30 April 2026**. Use code **SPRING26** at checkout.\n\n👥 **GROUP15** — Extra **5% off** on top of group rates for 10+ people. Code: **GROUP15**.\n\n🎂 **Birthday Month** — Fly in your birthday month for **10% off**. Just mention it when booking!\n\n🎓 **Student Discount** — Show a valid student ID for **10% off**.\n\n👫 **Bring a Friend** — Refer a first-time visitor and both of you get a reward! Ask our team for details.\n\n⚠️ Discounts cannot be combined. Terms apply.`
    },

    // ── GIFT VOUCHERS ────────────────────────────────────────────────────────
    voucher: {
      keywords: [
        'voucher', 'gift card', 'gift voucher', 'buy for someone', 'gift',
        'present', 'cadeau', 'bon cadeau', 'geschenk', 'gutschein',
        'give as a gift', 'someone else', 'surprise', 'purchase voucher',
        'buy a voucher', 'voucher valid', 'validity', 'expire', 'renew',
        'renewal', 'transfer', 'transferable', 'nominative', 'refund voucher',
        'for a friend', 'christmas gift', 'birthday gift', 'anniversary gift',
        'can i buy a gift', 'buy as a gift', 'gifting', 'treat someone',
        'treat a friend', 'treat my partner', 'buy for my partner',
        'buy for my friend', 'buy for my family', 'how long is a voucher valid',
        'does the voucher expire', 'how long do i have', 'use my voucher',
        'how do i use my voucher', 'redeem voucher', 'voucher code',
        'use a voucher', 'use my voucher online', 'voucher online', 'voucher at checkout',
        'apply voucher', 'enter voucher', 'enter my voucher', 'use the voucher',
        'can i use a voucher', 'use a gift voucher', 'redeem a voucher', 'redeem gift voucher',
        'how long does a voucher last', 'how long is a voucher', 'voucher last',
        'how long does a gift voucher last'
      ],
      response: () => `**Luxfly Gift Vouchers — the perfect gift!** 🎁\n\n🛒 Buy online at **luxfly.lu** or in-person at reception.\n\n**Voucher Details:**\n📅 Valid for **12 months** from purchase date\n🔄 Renewable for an additional **3 months** (one renewal per voucher)\n👤 **Not nominative** — usable by anyone, not just the named recipient\n💸 Non-refundable once purchased\n✅ Redeemable against any flight package or add-on\n\nThe perfect birthday, Christmas, or anniversary gift — who wouldn't want to fly? 💝\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── PRO FLYING / COACHING ────────────────────────────────────────────────
    pro: {
      keywords: [
        'pro', 'professional', 'pro flying', 'competition', 'coaching',
        'advanced', 'training', 'athlete', 'tunnel time', 'block time',
        'dedicated session', 'freestyle', 'formation', 'freefly', 'dynamic',
        'competitive', 'tunnel rat', 'entraînement', 'professionnel',
        'compétition', 'coached session', 'skills', 'progression', 'coach time',
        'shared session', 'shared pro', 'pro session', 'block hours',
        'i already know how to fly', 'i am an experienced flyer', 'experienced flyer',
        'i fly already', 'can i book tunnel time', 'book tunnel time',
        'buy tunnel time', 'rent tunnel time', 'solo session', 'coaching session',
        'wind tunnel coaching', 'improve my skills', 'improve my flying',
        'take my flying further', 'advanced training', 'competitive training',
        'head down', 'sit fly', 'belly fly', 'vfs', 'dynamic flying',
        'offer coaching', 'do you offer coaching', 'do you have coaching',
        'coaching sessions', 'coaching available', 'get coaching', 'book coaching',
        'personal coaching', 'one to one coaching', 'one-to-one coaching',
        'get a coach', 'hire a coach', 'wind tunnel coaching sessions',
        'how much for block time', 'block time price', 'block time cost',
        'head-down flying', 'headdown flying', 'head down flying',
        'train in the tunnel', 'train in tunnel', 'training in the tunnel',
        'advanced flying', 'advanced sessions', 'advanced flying sessions',
        'formation flying', 'flying practice', 'formation flying practice'
      ],
      response: () => `**Pro & Advanced Flying at Luxfly** 🏆\n\n**Block Time Packages (dedicated tunnel):**\n⏱️ **Starter** — 1 hr: **€180**\n⏱️ **Regular** — 5 hrs: **€840** (€168/hr)\n⏱️ **Dedicated** — 10 hrs: **€1,560** (€156/hr)\n⏱️ **Elite** — 20 hrs: **€2,880** (€144/hr)\n\n**Shared Pro Sessions:**\n📅 Mon, Wed, Fri, Sat (×2 daily slots), Sun\n💶 Single session: **€55** | 5 sessions: **€240** | 10 sessions: **€420**\n\n**Disciplines:** Belly (130–160 km/h) · Sit fly (180–220 km/h) · Head-down (250–320 km/h) · Freestyle · Formation\n\nOur coaches have **12,000+ combined tunnel hours**.\n📧 info@luxfly.lu for coaching enquiries`
    },

    // ── MUSEUM ───────────────────────────────────────────────────────────────
    museum: {
      keywords: [
        'museum', 'aviation museum', 'exhibit', 'exhibition', 'aviation',
        'history', 'planes', 'aircraft', 'displays', 'musée', 'musée aviation',
        'luftfahrt', 'museum entry', 'museum ticket', 'museum included',
        'museum price', 'standalone museum', 'just the museum', 'visit museum',
        'museum only', 'museum without flying', 'museum cost', 'museum free',
        'is the museum included', 'do i get museum access', 'what is in the museum',
        'what does the museum have', 'can i just visit the museum',
        'museum entry fee', 'museum admission', 'is there a museum', 'aviation history',
        'visit the museum', 'can i visit the museum', 'museum on its own',
        'museum standalone', 'museum by itself', 'museum without a flight'
      ],
      response: () => `**The Luxfly Aviation Museum** ✈️🏛️\n\nEvery Luxfly visit includes our **Aviation Museum** — a fantastic collection celebrating the history of flight!\n\n🎫 **Included FREE** in all flight packages — no extra cost!\n🎟️ **Standalone museum entry (no flight):** **€15** per person\n\nInside you'll find:\n- Historic aircraft and interactive displays\n- Aviation history timeline\n- Great for all ages — especially families!\n\nPerfect for before or after your flight, or for non-flying visitors accompanying the group. 🛩️`
    },

    // ── BAR & FOOD ───────────────────────────────────────────────────────────
    bar: {
      keywords: [
        'bar', 'food', 'eat', 'drink', 'drinks', 'menu', 'restaurant', 'café',
        'coffee', 'beer', 'burger', 'snack', 'hungry', 'thirsty', 'lunch',
        'dinner', 'meal', 'sandwich', 'bar menu', 'what can i eat', 'canteen',
        'essen', 'trinken', 'boire', 'manger', 'nourriture', 'boisson',
        'cocktail', 'juice', 'soft drink', 'food menu', 'what food', 'nachos',
        'fries', 'lager', 'draft beer', 'can i eat', 'is there food',
        'do you have food', 'do you serve food', 'do you have a bar',
        'alcohol', 'serve alcohol', 'alcoholic drinks', 'alcoholic beverages',
        'is there a restaurant', 'is there a café', 'is there a cafe',
        'can i get a drink', 'can i get something to eat', 'do you have a café',
        'catering', 'refreshments', 'something to eat after', 'grab a bite'
      ],
      response: () => `**The Luxfly Bar & Restaurant** 🍔🍺\n\nRefuel after your flight at our on-site bar — open during all operating hours!\n\n**🍔 Food:**\n- Cheeseburger: **€14**\n- Vegetarian burger: **€12**\n- Club sandwich: **€11**\n- Fries: **€4**\n- Nachos: **€8**\n\n**🍺 Drinks:**\n- Draft lager (33cl): **€3.50** | (50cl): **€5.50**\n- Soft drinks: **€3**\n- Coffee/espresso: **€2.50**\n- Fresh juice: **€4**\n\nGreat views of the tunnel from the bar area! 🌬️`
    },

    // ── SKY PILATES ──────────────────────────────────────────────────────────
    pilates: {
      keywords: [
        'pilates', 'sky pilates', 'pilates class', 'pilates classes', 'fitness', 'yoga', 'workout',
        'exercise', 'wellness', 'core', 'flexibility', 'wind tunnel pilates',
        'pilates schedule', 'pilates price', 'drop in', 'class pass',
        'pilates session', 'body workout', 'fitness class', 'tunnel fitness',
        'fitness at luxfly', 'aerobics', 'pilates booking', 'join a class',
        'offer pilates', 'do you offer pilates', 'do you have pilates',
        'when are pilates', 'pilates times', 'pilates timetable', 'pilates cost',
        'pilates available', 'pilates on offer', 'sky pilates class', 'pilates sessions'
      ],
      response: () => `**Sky Pilates at Luxfly** 🧘✈️\n\nUnique **Sky Pilates** — pilates in the wind tunnel for an extraordinary core and body workout!\n\n**📅 Schedule:**\n🗓️ Tuesday & Thursday: **7:30 AM**\n🗓️ Saturday: **9:00 AM**\n\n**💶 Pricing:**\n- Drop-in (single class): **€45**\n- 4-class pass: **€160** (€40/class)\n- 8-class pass: **€280** (€35/class)\n\nNo flying experience required — just a love of movement! Classes led by certified instructors.\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── LOYALTY PROGRAMME ────────────────────────────────────────────────────
    loyalty: {
      keywords: [
        'loyalty', 'loyalty programme', 'fidelity', 'fidelitybox', 'points',
        'rewards', 'loyalty card', 'member', 'membership', 'frequent flyer',
        'reward points', 'earn points', 'redeem', 'loyalty program',
        'fidélité', 'treueprogramm', 'bonus', 'perks', 'benefits',
        'stamp card', 'repeat customer', 'regular customer', 'loyalty scheme',
        'i fly regularly', 'i come often', 'i visit often', 'i come back often',
        'reward for coming back', 'repeat visits', 'frequent visits',
        'fidelity card', 'loyalty points', 'earn rewards', 'do you have loyalty',
        'is there a loyalty programme', 'membership card', 'reward card',
        'reward scheme', 'rewards scheme', 'is there a reward scheme',
        'points scheme', 'points system', 'earn points scheme',
        'get points', 'points for every visit', 'earn points on every visit',
        'points every time', 'points when i fly'
      ],
      response: () => `**Luxfly FidelityBox — Our Loyalty Programme** 🌟\n\nFly more, earn more!\n\n📱 Your **phone number is your loyalty card** — no physical card needed!\n⭐ Earn points every time you fly or spend at Luxfly\n🎁 Redeem points for free flights, discounts & exclusive rewards\n\n**Member perks:**\n- Priority booking access\n- Exclusive member promotions\n- Birthday surprises\n- Early access to new packages\n\nJust give your phone number at check-in — you're automatically enrolled!\n\n📞 +32 63 39 11 63 for more details.`
    },

    // ── COACHES / TEAM ───────────────────────────────────────────────────────
    coaches: {
      keywords: [
        'coach', 'coaches', 'instructor', 'instructors', 'staff', 'trainer',
        'trainers', 'certified', 'qualified', 'who teaches', 'your team',
        'flight instructor', 'tunnel instructor', 'languages', 'speak french',
        'speak german', 'speak english', 'multilingual', 'how experienced',
        'team of coaches', 'professional coaches', 'who will teach me',
        'will someone help me', 'will there be an instructor', 'is there an instructor',
        'will i have a coach', 'who will be with me', 'do i get a coach',
        'is there someone with me', 'will i be alone', 'alone in the tunnel',
        'supervised', 'am i supervised', 'do you speak english',
        'do you speak french', 'do you speak german', 'do you speak luxembourgish',
        'what languages', 'english speaking', 'french speaking', 'german speaking',
        'teach in german', 'teach in french', 'teach in english',
        'in german', 'in french', 'in english', 'in luxembourgish'
      ],
      response: () => `**Our World-Class Coaching Team** 🏆\n\n✅ **8 certified coaches** on our team\n✅ **12,000+ combined tunnel hours** of experience\n✅ All hold internationally recognised tunnel instructor certifications\n\n**Languages spoken:**\n🇬🇧 English | 🇫🇷 French | 🇩🇪 German | 🇱🇺 Luxembourgish | 🇮🇹 Italian\n\nFor beginner packages, your instructor is **inside the tunnel with you** from the first second — you're never alone! Our coaches adapt to every level, from nervous first-timers to competitive athletes. 💪`
    },

    // ── TUNNEL SPECS ─────────────────────────────────────────────────────────
    tunnel: {
      keywords: [
        'tunnel', 'wind tunnel', 'wind speed', 'speed', 'how fast', 'km/h',
        'belly fly', 'belly flying', 'sit fly', 'sit flying', 'head down',
        'head-down', 'airflow', 'wind', 'power', 'tunnel size', 'technical',
        'specifications', 'specs', 'how big', 'how powerful', 'how strong',
        'state of the art', 'vertical wind tunnel', 'how many km/h',
        'what speed', 'wind power', 'how much wind', 'how windy',
        'is it very windy', 'how strong is the wind', 'what wind speed'
      ],
      response: () => `**Luxfly Wind Tunnel — Technical Specs** ⚡\n\nOur state-of-the-art vertical wind tunnel is built for everyone from first-timers to world champions!\n\n**Wind Speed by Discipline:**\n🤸 **Belly Flying** (beginner/recreational): **130–160 km/h**\n💺 **Sit Flying** (intermediate): **180–220 km/h**\n🔻 **Head-Down** (advanced/pro): **250–320 km/h**\n\nWind speed is precisely controlled by our instructors and adjusted to suit your size, weight, and skill level.\n\n🛡️ All safety systems are certified to the highest European standards. ✈️`
    },

    // ── PARTNERS ─────────────────────────────────────────────────────────────
    partners: {
      keywords: [
        'partner', 'partners', 'partnership', 'business', 'affiliate',
        'commission', 'resell', 'collaborate', 'b2b', 'travel agent',
        'tour operator', 'hotel', 'work together', 'collaboration', 'commercial',
        'partenaire', 'partenariat', 'partner programme', 'referral', 'agent',
        'become a partner', 'trade', 'wholesale', 'reseller', 'partners@',
        'business enquiry', 'business inquiry', 'commercial enquiry',
        'we want to partner', 'interested in partnering', 'refer customers',
        'send customers', 'bring customers', 'get commission'
      ],
      response: () => `**Become a Luxfly Partner** 🤝\n\nWe work with travel agencies, hotels, tour operators, and businesses across Luxembourg and the Greater Region.\n\n**Partner Benefits:**\n💰 Earn **10–15% commission** on all referrals\n🎟️ Special rates for your clients\n📦 Co-branded promotional materials\n🌐 Listed on our website as a preferred partner\n\n📧 **Apply:** partners@luxfly.lu\n📞 +32 63 39 11 63\n\nOur partnerships team responds within 48 hours! ✈️`
    },

    // ── JOBS ─────────────────────────────────────────────────────────────────
    jobs: {
      keywords: [
        'job', 'jobs', 'career', 'careers', 'work', 'working', 'employment',
        'vacancy', 'vacancies', 'hiring', 'apply', 'application', 'position',
        'role', 'join the team', 'join us', 'recruitment', 'tunnel instructor job',
        'safety officer', 'events coordinator', 'customer experience', 'internship',
        'emploi', 'nous rejoindre', 'arbeit', 'stelle', 'are you hiring',
        'do you have any jobs', 'do you need staff', 'work for luxfly',
        'work with luxfly', 'i want to work for you', 'i want to work with you',
        'is there a job', 'open role', 'job opening', 'cv', 'send my cv',
        'send my resume', 'apply for a job', 'jobs@',
        'do you need tunnel instructors', 'tunnel instructor vacancy',
        'tunnel instructor position', 'looking for instructors'
      ],
      response: () => `**Careers at Luxfly** 💼✈️\n\nWe're always looking for passionate people to join the team!\n\n**Open Positions:**\n🌬️ **Tunnel Instructor** — Lead beginner and advanced sessions\n🛡️ **Safety Officer** — Maintain the highest safety standards\n🎉 **Events Coordinator** — Plan group, corporate & special events\n😊 **Customer Experience** — Front-of-house & guest services\n\nNot seeing your role? Get in touch anyway — we're a growing company!\n\n📧 **Send your CV to:** jobs@luxfly.lu\n📞 +32 63 39 11 63\n\nCome help others discover the joy of flight! 🚀`
    },

    // ── HOT AIR BALLOON ──────────────────────────────────────────────────────
    balloon: {
      keywords: [
        'balloon', 'hot air balloon', 'ballon', 'hot air', 'montgolfière',
        'balloon ride', 'balloon experience', 'balloon flight', 'balloon partner',
        'other activities', 'what else', 'anything else to do', 'other experiences',
        'other things to do', 'what else do you offer', 'other adventures',
        'outdoor experience', 'scenic flight', 'ballooning',
        'ballooning experience', 'balloon ride experience'
      ],
      response: () => `**Hot Air Balloon Experiences** 🎈\n\nLuxfly has partnered with a premier hot air balloon operator!\n\n💶 **€180–€250 per person**\n📅 Season: **April – October**\n📍 Departing from the Luxembourg/Belgium region\n\nA magical complement to indoor skydiving, or a beautiful standalone gift for someone special! 🌄\n\nFor details and bookings:\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    }
  };

  // ─── Word-boundary regex ────────────────────────────────────────────────────
  function kwRegex(kw) {
    const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp('(?:^|[\\s,.!?\'"-])' + escaped + '(?:[\\s,.!?\'"-]|$)', 'i');
  }

  // ─── Damerau-Levenshtein distance (handles transpositions like yaer→year) ───
  function lev(a, b) {
    const m = a.length, n = b.length;
    if (m === 0) return n;
    if (n === 0) return m;
    const dp = Array.from({length: m + 1}, (_, i) => Array.from({length: n + 1}, (_, j) => j === 0 ? i : 0));
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = a[i-1] === b[j-1] ? 0 : 1;
        dp[i][j] = Math.min(dp[i-1][j] + 1, dp[i][j-1] + 1, dp[i-1][j-1] + cost);
        // Transposition (adjacent swap counts as 1 edit, not 2)
        if (i > 1 && j > 1 && a[i-1] === b[j-2] && a[i-2] === b[j-1])
          dp[i][j] = Math.min(dp[i][j], dp[i-2][j-2] + cost);
      }
    }
    return dp[m][n];
  }

  // Build a vocabulary from all KB keyword words (3+ chars, so 'old','age' etc. are reachable targets)
  const kbVocab = (() => {
    const seen = new Set();
    for (const d of Object.values(KB))
      for (const kw of d.keywords)
        kw.split(/\s+/).forEach(w => { if (w.length >= 3) seen.add(w.toLowerCase()); });
    return [...seen];
  })();

  // Replace each 4+ char word in user input with the closest KB vocab word if within threshold.
  // Tiebreaker: prefer the longer correction (more specific keyword wins over short common words).
  function fuzzyCorrect(text) {
    return text.replace(/[a-zA-Z]{4,}/g, word => {
      const w = word.toLowerCase();
      if (kbVocab.includes(w)) return word; // exact match — no change needed
      // Tolerance: 1 edit for 4-5 char words, 2 edits for 6+ char words
      const maxDist = w.length <= 5 ? 1 : 2;
      let best = null, bestDist = maxDist + 1;
      for (const v of kbVocab) {
        if (Math.abs(v.length - w.length) > maxDist) continue;
        const d = lev(w, v);
        // Accept if better distance, or same distance but longer (more specific) match
        if (d < bestDist || (d === bestDist && best !== null && v.length > best.length)) {
          bestDist = d; best = v;
        }
      }
      return best !== null ? best : word;
    });
  }

  // ─── Classifier ─────────────────────────────────────────────────────────────
  function classify(text) {
    const lower = fuzzyCorrect(text).toLowerCase();
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

  // ─── Greeting / thanks ───────────────────────────────────────────────────────
  function isGreeting(text) {
    return /^(hi|hello|hey|bonjour|hallo|salut|guten tag|good morning|good afternoon|good evening|howdy|yo|sup|hiya|greetings?|coucou|hoi|dag|moien|allo|moin)[\s!.?,]*$/i.test(text.trim());
  }

  function isThanks(text) {
    return /\b(thanks?|thank you|merci|danke|dank je|cheers|perfect|great|awesome|brilliant|amazing|wonderful|super|parfait|genial|génial)\b/i.test(text) &&
      text.trim().split(/\s+/).length < 10;
  }

  // ─── Formatter ───────────────────────────────────────────────────────────────
  function formatResponse(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#f02cb8">$1</a>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');
  }

  const greetings = [
    "Hey! 👋 I'm Zoom, the Luxfly assistant. Ask me anything — prices, hours, booking, kids, location, and more!",
    "Hi! 😊 Welcome to Luxfly. What can I help you with today?",
    "Hello! Ready to talk indoor skydiving? 🌬️ What would you like to know?",
    "Hey there! I'm Zoom ✈️ — your Luxfly guide. Prices, packages, health questions, directions — fire away!"
  ];
  const replies = [
    "You're welcome! 😊 Anything else I can help with?",
    "Happy to help! 🙌 Feel free to ask anything else.",
    "Of course! Let me know if you have more questions. 😄",
    "No problem at all! Is there anything else you'd like to know? ✈️"
  ];
  const fallbacks = [
    "I'm Luxfly's chatbot, so I can only help with questions about indoor skydiving! 🪂\n\nTry asking about:\n💰 **Prices** · ⏰ **Hours** · 📍 **Location** · 📅 **Booking** · 🎂 **Birthday Parties**\n👨‍👩‍👧 **Groups** · 🏅 **Experience** · 👕 **What to Wear** · 🎟️ **Vouchers** · 💼 **Jobs**\n\nOr reach our team: 📞 **+32 63 39 11 63** | 💬 **WhatsApp: +32 477 528 566** 😊",
    "That's outside my area! I'm only set up to answer Luxfly questions. 🪂\n\nFor anything else, our team can help:\n📞 **+32 63 39 11 63** | 📧 **info@luxfly.lu**\n\nOr ask me about prices, booking, hours, birthday parties, or gear!",
    "I want to make sure you get the right answer for that — please reach out to our team directly:\n📞 **+32 63 39 11 63** | 💬 **WhatsApp: +32 477 528 566**\n\nI can answer questions about prices, packages, booking, health, hours, location, and more! 😊"
  ];

  function getResponse(userText) {
    const text = userText.trim();
    if (!text) return fallbacks[0];
    if (isGreeting(text)) return greetings[Math.floor(Math.random() * greetings.length)];
    if (isThanks(text)) return replies[Math.floor(Math.random() * replies.length)];
    const category = classify(text);
    if (category && KB[category]) return KB[category].response();
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }

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
      position: absolute; top: -4px; right: -4px; width: 18px; height: 18px;
      background: #fff; border-radius: 50%; display: flex; align-items: center;
      justify-content: center; font-size: 11px; font-weight: 700; color: #f02cb8;
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
      display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0;
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
    #lf-chat-quick { padding: 8px 14px 4px; display: flex; flex-wrap: wrap; gap: 6px; flex-shrink: 0; }
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
        <button class="lf-quick-btn" data-q="Which package would you recommend?">⭐ Recommend</button>
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
        addMsg("Hey! 👋 I'm Zoom, the Luxfly assistant. Ask me anything about our indoor skydiving experience — prices, booking, health, kids, location, and more!", 'bot');
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

  // Show notification badge after 8s if chat not yet opened
  setTimeout(() => {
    if (!isOpen && !greeted) {
      const b = document.getElementById('lf-chat-badge');
      if (b) b.style.display = 'flex';
    }
  }, 8000);

})();
