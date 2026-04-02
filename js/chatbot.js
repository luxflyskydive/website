(function () {
  'use strict';

  /* ── KNOWLEDGE BASE ── */
  const KB = {
    prices: {
      keywords: ['price', 'prices', 'cost', 'how much', 'package', 'packages', 'tarif', 'tariff', 'preis', 'kosten', 'combien', 'prix', 'luxcovery', 'luxensation', 'luxemotion', 'cheap', 'expensive', 'afford', 'rate', 'rates', 'fee', 'fees'],
      response: () => `Here are our adult packages:\n\n✈️ **LUXCOVERY** — 2 flights, 2 min total: €104.70\n✈️ **LUXENSATION** — 2 flights, 4 min total: €174.70\n✈️ **LUXEMOTION** — 3 flights, 6 min total: €236.70\n\nAll packages include full gear, safety briefing & instructor. 👉 Book at shop.indoorskydive.lu — use code **ZOOM** for a discount!`
    },
    kids: {
      keywords: ['kid', 'kids', 'child', 'children', 'baby', 'babies', 'age', 'years old', 'young', 'son', 'daughter', 'boy', 'girl', 'enfant', 'kind', 'famille', 'family', 'junior', 'teen', 'teenager', 'minimum age', 'how old', '4 year', '5 year', '6 year', '7 year', '8 year', '9 year', '10 year'],
      response: () => `Absolutely — kids love it! 🧒\n\nKids packages (ages **4–12**):\n• 2 flights: **€89.70**\n• 4 flights: **€139.80**\n\nA qualified instructor flies with them the whole time. Parents/guardians must accompany children and sign a consent form. The youngest we've had is 4 years old! 😊`
    },
    hours: {
      keywords: ['hour', 'hours', 'open', 'opening', 'close', 'closing', 'when', 'schedule', 'timetable', 'today', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'weekend', 'horaire', 'öffnungszeit', 'tijd', 'ouvert', 'closed', 'available'],
      response: () => `Our opening hours:\n\n📅 **Mon & Tue:** Closed (except the 1st Monday of each month!)\n📅 **Wed – Fri:** 12:00 – 20:00\n📅 **Sat & Sun:** 10:00 – 19:00\n\nWalk-ins are welcome when slots are free, but booking in advance is strongly recommended. Last session starts 90 min before closing.`
    },
    location: {
      keywords: ['where', 'location', 'address', 'find', 'directions', 'map', 'parking', 'how to get', 'sterpenich', 'luxembourg', 'belgium', 'border', 'adresse', 'wo', 'waar', 'situated', 'located', 'nearest', 'near', 'close to'],
      response: () => `We're right on the Luxembourg–Belgium border! 📍\n\n**Rue De Grass 103, 6700 Sterpenich**\n\nEasy to reach from Luxembourg City, Arlon, and surroundings. Parking is available on site. Pop the address into Google Maps and you'll find us! 🗺️`
    },
    booking: {
      keywords: ['book', 'booking', 'reserve', 'reservation', 'buy', 'purchase', 'ticket', 'sign up', 'réserver', 'buchen', 'online', 'website', 'shop', 'payment', 'pay', 'how to', 'order', 'cancel', 'cancellation', 'refund', 'reschedule'],
      response: () => `Booking is quick and easy! 🎟️\n\n👉 **shop.indoorskydive.lu**\n\nFull payment is required at the time of booking. Free cancellation if you cancel **more than 48 hours** before your session. Use promo code **ZOOM** for a special discount! Groups of 5+ should book at least 48 hours in advance.`
    },
    birthday: {
      keywords: ['birthday', 'anniversaire', 'geburtstag', 'party', 'celebrate', 'celebration', 'fête', 'feier', 'special occasion', 'bday', 'birth day', 'gift', 'present', 'surprise', 'voucher', 'cadeau'],
      response: () => `Birthday parties at Luxfly are unforgettable! 🎂🎉\n\nKids birthday packages start from **€192 for 6 kids** — perfect for ages 4 and up. We also do adult birthday packages!\n\nFor group birthday arrangements, reach out to us at **hello@luxfly.eu** and we'll put together something special. Gift vouchers are also available at shop.indoorskydive.lu 🎁`
    },
    groups: {
      keywords: ['group', 'groups', 'corporate', 'team', 'team building', 'company', 'business', 'event', 'events', 'bachelor', 'bachelorette', 'hen', 'stag', 'incentive', 'seminar', 'conference', 'colleague', 'colleagues', 'work', 'employees', 'organisation'],
      response: () => `We love hosting groups! 👥\n\nWe cater for groups of **2 to 250 people** — from team building days to corporate events to bachelor/hen parties. Groups of 10+ get preferential rates.\n\nFor a custom quote, contact **events@luxfly.lu** — we also offer **private after-hours hire** (Mon–Thu from 07:00). Groups of 5+ should book at least 48 hours ahead.`
    },
    experience: {
      keywords: ['experience', 'what is', 'what does', 'like', 'feel', 'feeling', 'sensation', 'wind', 'tunnel', 'indoor', 'skydiving', 'fly', 'flying', 'float', 'floating', 'safe', 'safety', 'scary', 'afraid', 'fear', 'nervous', 'first time', 'beginner', 'never', 'experience needed', 'instructions'],
      response: () => `Indoor skydiving is pure magic — imagine floating on a column of air! 🌬️✨\n\nOur tunnel is **35 metres tall** (Europe's tallest!) with wind speeds up to **350 km/h**. It's safe for ages **4 to 95**, and absolutely **no experience is needed**. Your qualified instructor will be with you every second.\n\nBefore you fly, you'll get a full safety briefing and all the gear you need. Most people are grinning from ear to ear within seconds! 😄`
    },
    gear: {
      keywords: ['gear', 'equipment', 'suit', 'helmet', 'wear', 'bring', 'what to', 'prepare', 'preparation', 'dress', 'clothes', 'outfit', 'shoes', 'included', 'include'],
      response: () => `You don't need to bring anything special! 😊\n\nAll **gear is included** in every package: flight suit, helmet, goggles, and earplugs. Just wear comfortable clothes and lace-up shoes (no sandals or flip-flops). We'll take care of the rest!`
    },
    contact: {
      keywords: ['contact', 'email', 'call', 'phone', 'reach', 'speak', 'talk', 'message', 'hello', 'support', 'help me', 'question', 'enquiry', 'inquiry', 'info', 'information'],
      response: () => `Happy to help! Here's how to reach us:\n\n📧 **General:** hello@luxfly.eu\n📧 **Bookings:** booking@luxfly.lu\n📧 **Events/Groups:** events@luxfly.lu\n📧 **Pro flyers:** pro@luxfly.lu\n\nOr just ask me anything here and I'll do my best! 😊`
    },
    promo: {
      keywords: ['promo', 'promotion', 'discount', 'code', 'coupon', 'offer', 'deal', 'reduction', 'cheaper', 'save', 'saving', 'zoom', 'special'],
      response: () => `Great news — there's a promo code! 🎉\n\nUse code **ZOOM** at checkout on **shop.indoorskydive.lu** for a special discount on your booking. Don't forget to apply it before you pay!`
    },
    voucher: {
      keywords: ['voucher', 'gift card', 'gift voucher', 'present', 'give', 'surprise someone', 'buy for', 'someone else'],
      response: () => `Gift vouchers are the perfect present! 🎁\n\nYou can buy gift vouchers for any package at **shop.indoorskydive.lu**. They're ideal for birthdays, anniversaries, or just because — who wouldn't want to fly? 😄`
    },
    health: {
      keywords: ['health', 'medical', 'pregnant', 'pregnancy', 'disability', 'disabled', 'wheelchair', 'heart', 'back', 'neck', 'condition', 'epilepsy', 'asthma', 'weight', 'height', 'restriction', 'allowed', 'can i', 'am i able'],
      response: () => `Most people can fly with us! ✅\n\nFor specific medical conditions or health concerns, we recommend contacting us directly at **hello@luxfly.eu** before booking so we can advise you properly. Our team is happy to help figure out the best option for you.`
    }
  };

  /* ── CLASSIFY INPUT ── */
  function classify(text) {
    const lower = text.toLowerCase();
    let bestCategory = null;
    let bestScore = 0;

    for (const [cat, data] of Object.entries(KB)) {
      let score = 0;
      for (const kw of data.keywords) {
        if (lower.includes(kw)) score += kw.split(' ').length; // longer phrases score higher
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
    return /^(hi|hello|hey|bonjour|hallo|salut|guten tag|good morning|good afternoon|good evening|howdy|yo|sup|hiya|greetings?|coucou|hoi|dag|moien)[\s!.?,]*$/i.test(text.trim());
  }

  /* ── THANKS DETECTION ── */
  function isThanks(text) {
    return /\b(thanks?|thank you|merci|danke|dank|cheers|perfect|great|awesome|brilliant|amazing|nice|cool|wonderful)\b/i.test(text);
  }

  /* ── FORMAT RESPONSE (markdown-lite) ── */
  function formatResponse(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');
  }

  /* ── GENERATE RESPONSE ── */
  function getResponse(userText) {
    const text = userText.trim();

    if (isGreeting(text)) {
      const greetings = [
        "Hey there! 👋 How can I help? Ask me about prices, opening hours, booking, or anything else about Luxfly!",
        "Hi! 😊 Welcome to Luxfly — what can I help you with today?",
        "Hello! Ready to talk indoor skydiving? 🌬️ Ask me anything!"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    if (isThanks(text) && text.split(' ').length < 6) {
      const replies = [
        "You're welcome! 😊 Anything else you'd like to know?",
        "Happy to help! 🙌 Let me know if you have more questions.",
        "Of course! Feel free to ask anything else. 😄"
      ];
      return replies[Math.floor(Math.random() * replies.length)];
    }

    const category = classify(text);
    if (category && KB[category]) {
      return KB[category].response();
    }

    // Default fallback
    return `Good question! For that one, the best thing is to reach out directly to our team — they'll have the answer for you.\n\n📧 **hello@luxfly.eu** or **booking@luxfly.lu**\n\nAlternatively, try asking me about prices, hours, booking, kids, location, or our packages! 😊`;
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
      height: 500px;
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
      max-width: 82%;
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
