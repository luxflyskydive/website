(function () {
  'use strict';

  /* ── KNOWLEDGE BASE ── */
  const KB = {
    prices: {
      keywords: [
        // English
        'price', 'prices', 'cost', 'costs', 'how much', 'package', 'packages',
        'rate', 'rates', 'fee', 'fees', 'tariff', 'cheap', 'expensive', 'afford',
        'luxcovery', 'luxensation', 'luxemotion', 'adult package',
        // French
        'tarif', 'tarifs', 'prix', 'combien', 'coûte', 'coute',
        // German
        'preis', 'preise', 'kosten', 'kostet', 'wie viel', 'wie viele',
        // Dutch/Luxembourgish
        'prijs', 'prijzen', 'kost'
      ],
      response: () => `Here are our packages:\n\n✈️ **LUXCOVERY** — 2 flights (2 min total): **€104.70**\n✈️ **LUXENSATION** — 2 flights (4 min total): **€174.70**\n✈️ **LUXEMOTION** — 3 flights (6 min total): **€236.70**\n\nAll packages include full gear, safety briefing & instructor. 🎟️ Book at **shop.indoorskydive.lu** — use code **ZOOM** for a discount!\n\nFor kids packages (ages 4–12), just ask! 👦`
    },

    kids: {
      keywords: [
        // English
        'kid', 'kids', 'child', 'children', 'toddler', 'junior', 'teen', 'teenager',
        'son', 'daughter', 'boy', 'girl', 'young', 'babies', 'baby',
        'minimum age', 'age limit', 'how old', 'age restriction',
        'for kids', 'for children', 'for a child', 'for my son', 'for my daughter',
        'for my kid', 'kids price', 'children price', 'child price',
        'kids package', 'children package', 'child package',
        'how much for kid', 'how much for child', 'cost for kid', 'cost for child',
        'price for kid', 'price for child',
        // French
        'enfant', 'enfants', 'famille', 'fils', 'fille', 'junior',
        // German
        'kind', 'kinder', 'familie',
        // Dutch
        'kind', 'kinderen', 'gezin'
      ],
      response: () => `Absolutely — kids love it! 👦\n\nKids packages (ages **4–12**):\n• 2 flights: **€89.70**\n• 4 flights: **€139.80**\n\nA qualified instructor flies with them throughout the whole experience. Parents or guardians must be present and sign a consent form. Minimum age is **4 years old**. Safe, fun, and absolutely unforgettable! 😊`
    },

    hours: {
      keywords: [
        // English
        'hour', 'hours', 'opening hours', 'open', 'opening', 'close', 'closed', 'closing',
        'when', 'schedule', 'timetable', 'today', 'what time', 'time',
        'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
        'weekday', 'weekend', 'daily',
        // French
        'horaire', 'horaires', 'ouvert', 'fermé', 'ferme', 'quand', 'heure',
        // German
        'öffnungszeit', 'öffnungszeiten', 'geöffnet', 'geschlossen', 'wann', 'uhrzeit',
        // Dutch
        'openingstijd', 'openingstijden', 'open', 'gesloten', 'wanneer', 'tijd'
      ],
      response: () => `Our opening hours:\n\n📅 **Mon & Tue:** Closed *(except the 1st Monday of each month!)*\n📅 **Wed – Fri:** 12:00 – 20:00\n📅 **Sat & Sun:** 10:00 – 19:00\n\nLast sessions are admitted **90 minutes before closing**. Walk-ins are welcome when slots are available, but booking ahead is strongly recommended!`
    },

    location: {
      keywords: [
        // English
        'where', 'location', 'address', 'find', 'find you', 'find us', 'directions',
        'map', 'parking', 'how to get', 'get there', 'getting there', 'reach you',
        'navigate', 'navigation', 'sterpenich', 'luxembourg', 'belgium', 'border',
        'situated', 'located', 'nearest', 'near', 'close to', 'from luxembourg',
        'from brussels', 'from arlon', 'rue de grass',
        // French
        'adresse', 'où', 'trouver', 'comment aller', 'se situe', 'situé',
        // German
        'adresse', 'wo', 'befinden', 'gelegen', 'anfahrt',
        // Dutch
        'adres', 'waar', 'rijden', 'weg'
      ],
      response: () => `We're right on the Luxembourg–Belgium border! 📍\n\n**Rue De Grass 103, 6700 Sterpenich**\n\nEasy to reach from Luxembourg City, Arlon, and the wider region. Free parking is available on site. Just pop the address into Google Maps and we'll see you there! 🗺️`
    },

    booking: {
      keywords: [
        // English
        'book', 'booking', 'reserve', 'reservation', 'buy', 'purchase', 'ticket', 'tickets',
        'sign up', 'sign-up', 'online', 'shop', 'payment', 'pay', 'order',
        'cancel', 'cancellation', 'refund', 'reschedule', 'change booking',
        'walk-in', 'walk-ins', 'walk in', 'walkin', 'drop in', 'drop-in', 'without booking',
        'do i need to book', 'must i book', 'advance', 'in advance',
        // French
        'réserver', 'réservation', 'acheter', 'payer', 'annuler', 'annulation',
        // German
        'buchen', 'buchung', 'bezahlen', 'zahlen', 'stornieren', 'stornierung',
        // Dutch
        'boeken', 'boeking', 'betalen', 'annuleren'
      ],
      response: () => `Booking is quick and easy! 🎟️\n\n👉 **shop.indoorskydive.lu**\n\nFull payment is required at the time of booking. **Free cancellation** if you cancel more than **48 hours** before your session. Use promo code **ZOOM** for a discount!\n\nWalk-ins are welcome when slots are available, but we strongly recommend booking in advance to guarantee your spot. Groups of 5+ should book at least 48 hours ahead.`
    },

    birthday: {
      keywords: [
        // English
        'birthday', 'birth day', 'bday', 'party', 'celebrate', 'celebration',
        'special occasion', 'anniversary',
        // French
        'anniversaire', 'fête', 'fete',
        // German
        'geburtstag', 'feier', 'party',
        // Dutch
        'verjaardag', 'feestje'
      ],
      response: () => `Birthday parties at Luxfly are unforgettable! 🎂🎉\n\nKids birthday packages start from **€192 for 6 kids** — perfect for ages 4 and up. We do adult birthdays too!\n\nFor a tailored birthday experience, reach out at **hello@luxfly.eu** and we'll make it special. Gift vouchers are also available at **shop.indoorskydive.lu** 🎁`
    },

    groups: {
      keywords: [
        // English
        'group', 'groups', 'corporate', 'team', 'team building', 'team-building',
        'company', 'business', 'event', 'events', 'incentive', 'seminar',
        'conference', 'colleague', 'colleagues', 'employees', 'staff', 'work',
        'bachelor party', 'bachelor', 'bachelorette', 'hen party', 'hen night', 'stag do', 'stag',
        'people', 'persons', 'guests', 'attendees',
        'organisation', 'organization', 'large group', 'private hire', 'private event',
        'exclusive', 'exclusive hire',
        // French
        'groupe', 'groupes', 'entreprise', 'équipe', 'séminaire', 'collègues', 'evg', 'evjf',
        // German
        'gruppe', 'gruppen', 'firma', 'unternehmen', 'kollegen', 'junggesellenabschied',
        // Dutch
        'groep', 'groepen', 'bedrijf', 'team', 'collega'
      ],
      response: () => `We love hosting groups! 👥\n\nWe cater for **2 to 250 people** — from team building days to corporate events, bachelor/hen parties, and more. Groups of **10+** get preferential rates.\n\nFor a custom quote contact **events@luxfly.lu** — we also offer **private after-hours hire** (Mon–Thu from 07:00). Groups of 5+ should book at least 48 hours in advance.`
    },

    experience: {
      keywords: [
        // English
        'what is indoor skydiving', 'what is it like', 'how does it feel', 'what does it feel',
        'what does it look like', 'sensation', 'wind tunnel', 'tunnel', 'indoor skydiving',
        'i want to fly', 'want to fly', 'going to fly', 'flying', 'float', 'floating',
        'freefall', 'free fall',
        'safe', 'safety', 'scary', 'afraid', 'fear', 'nervous', 'frightening',
        'first time', 'beginner', 'never done', 'experience needed', 'no experience',
        'need experience', 'experience required', 'experience', 'do i need experience',
        'how does it work', 'what happens', 'instructions', 'briefing',
        'how tall', 'how high', 'wind speed', 'how fast', '35 metre', '350 km',
        // French
        'sûr', 'sur', 'peur', 'première fois', 'première', 'comment ça marche',
        // German
        'sicher', 'angst', 'zum ersten mal', 'wie funktioniert',
        // Dutch
        'veilig', 'bang', 'eerste keer', 'hoe werkt'
      ],
      response: () => `Indoor skydiving is pure magic — imagine floating on a column of air! 🌬️✨\n\nOur tunnel is **35 metres tall** (Europe's tallest!) with wind speeds up to **350 km/h**. It's safe for ages **4 to 95**, and absolutely **no experience is needed**. Your qualified instructor is with you every second.\n\nYou'll get a full safety briefing and all the gear before you fly. Just show up and enjoy the ride! 😄`
    },

    gear: {
      keywords: [
        // English
        'gear', 'equipment', 'suit', 'flight suit', 'helmet', 'goggles',
        'wear', 'what to wear', 'bring', 'what to bring', 'what do i need',
        'prepare', 'preparation', 'dress', 'clothes', 'outfit', 'shoes', 'footwear',
        'included', 'include', 'provided',
        // French
        'tenue', 'vêtements', 'apporter', 'amener', 'équipement',
        // German
        'ausrüstung', 'anzug', 'kleidung', 'mitbringen', 'tragen',
        // Dutch
        'uitrusting', 'kleding', 'meenemen', 'dragen'
      ],
      response: () => `You don't need to bring anything special! 😊\n\nAll **gear is included**: flight suit, helmet, goggles, and earplugs. Just wear comfortable clothes and lace-up shoes (no sandals or flip-flops). We'll take care of everything else!`
    },

    spectators: {
      keywords: [
        'spectator', 'spectators', 'watch', 'watching', 'viewer', 'viewers',
        'observe', 'observer', 'see', 'seeing', 'look', 'looking',
        'accompany', 'come along', 'bring someone', 'bring a friend',
        'waiting', 'wait', 'friend wait', 'family watch', 'can my',
        'can my friend', 'can my family', 'not flying', 'not participate', 'just watch', 'viewing area',
        'photo', 'photos', 'photograph', 'camera', 'video', 'film', 'record',
        'filming'
      ],
      response: () => `Spectators are very welcome! 👀\n\nFamily and friends who aren't flying can come along and watch from the viewing area — it's exciting even from the sidelines! 🎉\n\nFor photos and filming, you're welcome to capture the moment from the spectator area. It makes for incredible memories!`
    },

    duration: {
      keywords: [
        'how long', 'duration', 'long does it take', 'time does it take', 'visit',
        'whole visit', 'total time', 'long is the session', 'long is a session',
        'arrive early', 'arrive', 'arrival', 'early', 'check in', 'check-in',
        'late', 'if i am late', 'if i\'m late'
      ],
      response: () => `Great question! Here's what to expect time-wise:\n\n⏱️ Your **flight time** depends on the package (2 to 6 minutes of actual flying).\n⏱️ **Total visit** is usually **60–90 minutes** including the briefing, gearing up, flying, and celebrating afterwards!\n\nWe recommend arriving **15 minutes early** for your safety briefing. If you're running late, please contact us at **booking@luxfly.lu** as soon as possible.`
    },

    health: {
      keywords: [
        'pregnant', 'pregnancy', 'disability', 'disabled', 'wheelchair',
        'heart condition', 'heart problem', 'back pain', 'back problem',
        'neck problem', 'neck pain', 'epilepsy', 'asthma', 'medical condition',
        'health condition', 'weight limit', 'height limit', 'weight restriction',
        'height restriction', 'medical', 'health', 'fit to fly', 'unfit',
        'not allowed', 'restriction', 'contraindication',
        'can i fly', 'am i allowed to fly', 'allowed to fly', 'fly if i'
      ],
      response: () => `Most people can fly with us! ✅\n\nFor specific medical conditions or health concerns, please contact us at **hello@luxfly.eu** before booking so we can advise you properly. Our team is happy to find the best option for you.`
    },

    contact: {
      keywords: [
        'contact', 'email', 'phone', 'call', 'reach', 'speak to', 'talk to',
        'message', 'support', 'enquiry', 'inquiry', 'get in touch',
        'customer service', 'customer support', 'team', 'staff',
        'who do i', 'who should i',
        // French
        'contacter', 'joindre', 'appeler',
        // German
        'kontakt', 'anrufen', 'erreich',
        // Dutch
        'contact', 'bellen', 'bereiken'
      ],
      response: () => `Here's how to reach our team:\n\n📧 **General:** hello@luxfly.eu\n📧 **Bookings:** booking@luxfly.lu\n📧 **Events/Groups:** events@luxfly.lu\n📧 **Pro flyers:** pro@luxfly.lu\n📧 **Press:** press@luxfly.lu\n\nOr just ask me anything here — I'm happy to help! 😊`
    },

    promo: {
      keywords: [
        'promo', 'promo code', 'promotion', 'promotional', 'discount', 'discounts',
        'coupon', 'offer', 'special offer', 'deal', 'deals',
        'reduction', 'cheaper', 'save money', 'saving', 'savings',
        'loyalty', 'member', 'membership', 'student', 'military',
        // Note: 'zoom' intentionally not here — covered by specific intent check
        // French
        'réduction', 'promotion', 'offre',
        // German
        'rabatt', 'angebot', 'gutschein'
      ],
      response: () => `Yes! Use promo code **ZOOM** at checkout for a special discount 🎉\n\n👉 **shop.indoorskydive.lu** — enter the code before you pay. Keep an eye on the **Promotions** page on our website for any seasonal offers too!`
    },

    voucher: {
      keywords: [
        'voucher', 'gift voucher', 'gift card', 'buy for someone', 'surprise someone',
        'give as a gift', 'present for', 'surprise for',
        // French
        'bon cadeau', 'bon d\'achat', 'cadeau',
        // German
        'gutschein', 'geschenk', 'schenken',
        // Dutch
        'cadeaubon', 'cadeau', 'geschenk'
      ],
      response: () => `Gift vouchers are the perfect present! 🎁\n\nYou can buy a voucher for any package at **shop.indoorskydive.lu** — ideal for birthdays, anniversaries, Christmas, or any occasion. Who wouldn't want to fly? 😄`
    },

    pro: {
      keywords: [
        'pro', 'professional', 'pro flyer', 'pro flying', 'advanced', 'competition', 'competitive',
        'become a flyer', 'become a coach', 'coach', 'training', 'train',
        'tunnel time', 'freestyle', 'formation', 'wind sports', 'iflyworld',
        'proflyer', 'fly competitively', 'improve my flying'
      ],
      response: () => `We have a dedicated area for pro flyers and competitive training! 🏆\n\nWhether you're looking to improve your skills, book tunnel time, or explore competitive flying, our pro team can help.\n\n📧 Contact: **pro@luxfly.lu**\n\nYou can also check out the **Pro** section of our website for more details.`
    }
  };

  /* ── CLASSIFY INPUT ── */
  // Build a word-boundary regex for a keyword
  function kwRegex(kw) {
    const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp('(?:^|[\\s,.!?\'"-])' + escaped + '(?:[\\s,.!?\'"-]|$)', 'i');
  }

  function classify(text) {
    const lower = text.toLowerCase();
    let bestCategory = null;
    let bestScore = 0;

    for (const [cat, data] of Object.entries(KB)) {
      let score = 0;
      for (const kw of data.keywords) {
        if (kwRegex(kw).test(lower)) {
          // Multi-word keywords score quadratically (more specific = higher score)
          score += kw.split(' ').length * kw.split(' ').length;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestCategory = cat;
      }
    }

    return bestScore > 0 ? bestCategory : null;
  }

  /* ── GREETING DETECTION ── */
  function isGreeting(text) {
    return /^(hi|hello|hey|bonjour|hallo|salut|guten tag|good morning|good afternoon|good evening|howdy|yo|sup|hiya|greetings?|coucou|hoi|dag|moien|allo|moin)[\s!.?,]*$/i.test(text.trim());
  }

  /* ── THANKS DETECTION ── */
  function isThanks(text) {
    return /\b(thanks?|thank you|merci|danke|dank je|cheers|perfect|great|awesome|brilliant|amazing|wonderful|super|parfait|genial|génial)\b/i.test(text) && text.split(' ').length < 8;
  }

  /* ── ZOOM CODE MENTION ── */
  function mentionsZoom(text) {
    return /\bzoom\b/i.test(text) && !/promo|code|discount/i.test(text);
  }

  /* ── FORMAT RESPONSE (markdown-lite) ── */
  function formatResponse(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');
  }

  /* ── GENERATE RESPONSE ── */
  function getResponse(userText) {
    const text = userText.trim();
    const lower = text.toLowerCase();

    // Greeting
    if (isGreeting(text)) {
      const greetings = [
        "Hey there! 👋 I'm the Luxfly assistant. Ask me anything — prices, hours, booking, kids, location, and more!",
        "Hi! 😊 Welcome to Luxfly. What can I help you with today?",
        "Hello! Ready to talk indoor skydiving? 🌬️ What would you like to know?"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // Thanks
    if (isThanks(text)) {
      const replies = [
        "You're welcome! 😊 Anything else I can help with?",
        "Happy to help! 🙌 Feel free to ask anything else.",
        "Of course! Let me know if you have more questions. 😄"
      ];
      return replies[Math.floor(Math.random() * replies.length)];
    }

    // "ZOOM" mentioned casually (e.g. "what is ZOOM?")
    if (mentionsZoom(text)) {
      return `**ZOOM** is our promo code! 🎉 Enter it at checkout on **shop.indoorskydive.lu** to get a special discount on any booking.`;
    }

    // Classify
    const category = classify(text);
    if (category && KB[category]) {
      return KB[category].response();
    }

    // Fallback
    const fallbacks = [
      `Good question! For that one I'd suggest reaching out to our team directly — they'll have the perfect answer.\n\n📧 **hello@luxfly.eu** | **booking@luxfly.lu**\n\nOr try asking me about prices, hours, booking, kids, location, or our packages! 😊`,
      `I'm not sure about that one! Your best bet is to email **hello@luxfly.eu** — the team will get back to you quickly. In the meantime, feel free to ask me about prices, hours, or booking! 🙌`,
      `That's a great question for our team! Drop them a line at **hello@luxfly.eu** and they'll sort you out. I can help with prices, hours, booking, kids packages, and more! 😊`
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }

  /* ── STYLES ── */
  const css = `
    #lf-chat-btn {
      position: fixed;
      bottom: 28px;
      right: 28px;
      z-index: 9999;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #f02cb8;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 24px rgba(240,44,184,0.45);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s, box-shadow 0.2s;
      outline: none;
    }
    #lf-chat-btn:hover {
      transform: scale(1.08);
      box-shadow: 0 6px 32px rgba(240,44,184,0.6);
    }
    #lf-chat-btn svg { pointer-events: none; }

    #lf-chat-badge {
      position: absolute;
      top: -4px;
      right: -4px;
      width: 18px;
      height: 18px;
      background: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 700;
      color: #f02cb8;
    }

    #lf-chat-window {
      position: fixed;
      bottom: 100px;
      right: 28px;
      z-index: 9998;
      width: 360px;
      max-width: calc(100vw - 40px);
      height: 520px;
      max-height: calc(100vh - 130px);
      background: #0a0a0a;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 16px 48px rgba(0,0,0,0.6);
      overflow: hidden;
      transform: scale(0.95) translateY(10px);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), opacity 0.2s ease;
    }
    #lf-chat-window.open {
      transform: scale(1) translateY(0);
      opacity: 1;
      pointer-events: all;
    }

    #lf-chat-header {
      background: #111;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      padding: 14px 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
    }
    #lf-chat-header-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #f02cb8;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      flex-shrink: 0;
    }
    #lf-chat-header-info { flex: 1; }
    #lf-chat-header-name {
      font-family: 'Montserrat', 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #fff;
    }
    #lf-chat-header-status {
      font-size: 11px;
      color: rgba(255,255,255,0.5);
      margin-top: 1px;
    }
    #lf-chat-close {
      background: none;
      border: none;
      cursor: pointer;
      color: rgba(255,255,255,0.5);
      padding: 4px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.2s;
    }
    #lf-chat-close:hover { color: #fff; }

    #lf-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px 14px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      scroll-behavior: smooth;
    }
    #lf-chat-messages::-webkit-scrollbar { width: 4px; }
    #lf-chat-messages::-webkit-scrollbar-track { background: transparent; }
    #lf-chat-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }

    .lf-msg {
      max-width: 85%;
      padding: 10px 13px;
      border-radius: 12px;
      font-size: 13.5px;
      line-height: 1.55;
      font-family: 'Inter', sans-serif;
      word-break: break-word;
    }
    .lf-msg-bot {
      background: #1a1a1a;
      color: rgba(255,255,255,0.88);
      border-bottom-left-radius: 3px;
      align-self: flex-start;
      border: 1px solid rgba(255,255,255,0.07);
    }
    .lf-msg-bot p { margin: 0 0 6px; }
    .lf-msg-bot p:last-child { margin-bottom: 0; }
    .lf-msg-user {
      background: #f02cb8;
      color: #fff;
      border-bottom-right-radius: 3px;
      align-self: flex-end;
    }
    .lf-msg-typing {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 12px 14px;
    }
    .lf-dot {
      width: 7px;
      height: 7px;
      background: rgba(255,255,255,0.4);
      border-radius: 50%;
      animation: lf-bounce 1.2s infinite;
    }
    .lf-dot:nth-child(2) { animation-delay: 0.2s; }
    .lf-dot:nth-child(3) { animation-delay: 0.4s; }
    @keyframes lf-bounce {
      0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
      30% { transform: translateY(-5px); opacity: 1; }
    }

    #lf-chat-quick {
      padding: 8px 14px 4px;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      flex-shrink: 0;
    }
    .lf-quick-btn {
      background: rgba(240,44,184,0.1);
      border: 1px solid rgba(240,44,184,0.3);
      border-radius: 20px;
      color: #f02cb8;
      font-size: 12px;
      font-family: 'Inter', sans-serif;
      padding: 5px 11px;
      cursor: pointer;
      transition: background 0.2s;
      white-space: nowrap;
    }
    .lf-quick-btn:hover { background: rgba(240,44,184,0.2); }

    #lf-chat-form {
      padding: 10px 12px 12px;
      display: flex;
      gap: 8px;
      border-top: 1px solid rgba(255,255,255,0.07);
      flex-shrink: 0;
    }
    #lf-chat-input {
      flex: 1;
      background: #1a1a1a;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px;
      color: #fff;
      font-size: 13px;
      font-family: 'Inter', sans-serif;
      padding: 9px 13px;
      outline: none;
      resize: none;
      line-height: 1.4;
      max-height: 80px;
      transition: border-color 0.2s;
    }
    #lf-chat-input::placeholder { color: rgba(255,255,255,0.3); }
    #lf-chat-input:focus { border-color: rgba(240,44,184,0.5); }
    #lf-chat-send {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      background: #f02cb8;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      align-self: flex-end;
      transition: opacity 0.2s, transform 0.15s;
    }
    #lf-chat-send:hover { opacity: 0.85; transform: scale(1.05); }

    @media (max-width: 480px) {
      #lf-chat-window { right: 12px; bottom: 90px; width: calc(100vw - 24px); }
      #lf-chat-btn { bottom: 20px; right: 16px; }
    }
  `;

  /* ── INJECT STYLES ── */
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ── BUILD DOM ── */
  document.body.insertAdjacentHTML('beforeend', `
    <button id="lf-chat-btn" aria-label="Chat with Luxfly">
      <span id="lf-chat-badge" style="display:none">1</span>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.06 2 11c0 2.64 1.18 5.02 3.07 6.72L4 22l4.54-2.04A10.7 10.7 0 0012 20c5.52 0 10-4.06 10-9S17.52 2 12 2z" fill="white"/>
      </svg>
    </button>

    <div id="lf-chat-window" role="dialog" aria-label="Luxfly Chat">
      <div id="lf-chat-header">
        <div id="lf-chat-header-avatar">✈</div>
        <div id="lf-chat-header-info">
          <div id="lf-chat-header-name">Luxfly Assistant</div>
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

  /* ── ELEMENTS ── */
  const btn       = document.getElementById('lf-chat-btn');
  const win       = document.getElementById('lf-chat-window');
  const closeBtn  = document.getElementById('lf-chat-close');
  const messages  = document.getElementById('lf-chat-messages');
  const form      = document.getElementById('lf-chat-form');
  const input     = document.getElementById('lf-chat-input');
  const sendBtn   = document.getElementById('lf-chat-send');
  const quickBtns = document.querySelectorAll('.lf-quick-btn');
  const badge     = document.getElementById('lf-chat-badge');

  let isOpen = false;
  let greeted = false;

  /* ── HELPERS ── */
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

  /* ── SEND MESSAGE ── */
  function sendMessage(text) {
    text = text.trim();
    if (!text) return;

    toggleQuickBtns(false);
    addMsg(text, 'user');
    input.value = '';
    input.style.height = 'auto';
    sendBtn.disabled = true;
    showTyping();

    // Simulate realistic typing delay (400–900ms)
    const delay = 400 + Math.random() * 500;
    setTimeout(() => {
      removeTyping();
      const reply = getResponse(text);
      addMsg(reply, 'bot');
      sendBtn.disabled = false;
      input.focus();
    }, delay);
  }

  /* ── OPEN / CLOSE ── */
  function openChat() {
    isOpen = true;
    win.classList.add('open');
    badge.style.display = 'none';
    btn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6l12 12" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`;

    if (!greeted) {
      greeted = true;
      setTimeout(() => {
        addMsg("Hey! 👋 I'm the Luxfly assistant. Ask me anything about our indoor skydiving experience — prices, hours, booking, kids, location, and more!", 'bot');
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

  /* ── EVENTS ── */
  btn.addEventListener('click', () => isOpen ? closeChat() : openChat());
  closeBtn.addEventListener('click', closeChat);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage(input.value);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input.value);
    }
  });

  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 80) + 'px';
  });

  quickBtns.forEach(b => {
    b.addEventListener('click', () => sendMessage(b.dataset.q));
  });

  /* ── SHOW BADGE after 8s if not opened ── */
  setTimeout(() => {
    if (!isOpen && !greeted) {
      const b = document.getElementById('lf-chat-badge');
      if (b) b.style.display = 'flex';
    }
  }, 8000);

})();
