(function () {
  'use strict';

  /* ── CONFIG ── */
  const GEMINI_KEY = 'AIzaSyA3YtBApuqogAFp6wPpQqmPV4hBeRkm9aY';
  const GEMINI_URL =
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' +
    GEMINI_KEY;

  const SYSTEM_PROMPT = `You are the friendly virtual assistant for Luxfly Indoor Skydiving — Europe's tallest indoor skydiving wind tunnel, located at the Luxembourg/Belgium border.

ABOUT LUXFLY:
- Europe's tallest indoor skydiving wind tunnel: 35 metres tall, wind speeds up to 350 km/h
- Address: Rue De Grass 103, 6700 Sterpenich (Luxembourg/Belgium border)
- Safe for ages 4 to 95. No experience needed whatsoever.
- All packages include: full gear rental, safety briefing, and a qualified instructor throughout the entire session.

OPENING HOURS:
- Monday & Tuesday: CLOSED
- Wednesday – Friday: 12:00 – 20:00
- Saturday & Sunday: 10:00 – 19:00
- Also open on the first Monday of each month
- Last sessions admitted 90 minutes before closing time
- Walk-ins are welcome when slots are available, but booking in advance is strongly recommended

ADULT PACKAGES (individual, per person):
- LUXCOVERY: 2 minutes total, 2 flights — €104.70
- LUXENSATION: 4 minutes total, 2 flights — €174.70
- LUXEMOTION: 6 minutes total, 3 flights — €236.70
All packages include full gear, safety briefing, and instructor supervision.

KIDS PACKAGES (ages 4–12, with instructor):
- Kids — 2 flights: €89.70
- Kids — 4 flights: €139.80
Children must be accompanied by a parent or legal guardian. Parental consent required for under 18s.

BIRTHDAY PARTIES:
- Birthday packages available for kids and adults
- Kids birthday from €192 for 6 kids
- Perfect for ages 4 and up

GROUPS & CORPORATE:
- Groups of 10 or more receive preferential rates and dedicated attention
- Team building and corporate events for groups of 2 to 250 people
- Custom quotes available — contact events@luxfly.lu
- After-hours private hire available Monday–Thursday from 07:00 — contact us to arrange
- Groups of 5+ should book at least 48 hours in advance

BOOKING & PAYMENT:
- Book online at shop.indoorskydive.lu
- Full payment required at time of booking
- Free cancellation if cancelled more than 48 hours before your session
- Cancellations within 48 hours: see full conditions on the website

GIFT VOUCHERS:
- Gift vouchers available for any package — perfect gift idea
- Can be purchased and used online

PROMO CODE:
- Use code ZOOM at checkout for a special discount on your booking

CONTACT:
- General enquiries: hello@luxfly.eu
- Bookings: booking@luxfly.lu
- Corporate/events: events@luxfly.lu
- Pro flyers: pro@luxfly.lu

RESPONSE GUIDELINES:
- Be warm, enthusiastic, and concise — this is an exciting experience!
- Respond in the same language the visitor uses (English, French, German, or Luxembourgish)
- Keep responses short and to the point — 2 to 4 sentences max unless more detail is needed
- If asked something you don't know, direct them to hello@luxfly.eu or booking@luxfly.lu
- Encourage booking when it feels natural — the experience is amazing and worth it
- Never make up prices, hours, or facts not listed above`;

  /* ── CONVERSATION HISTORY ── */
  let history = [];

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
      display: none;
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
    #lf-chat-send:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }

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
      <span id="lf-chat-badge"></span>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.06 2 11c0 2.64 1.18 5.02 3.07 6.72L4 22l4.54-2.04A10.7 10.7 0 0012 20c5.52 0 10-4.06 10-9S17.52 2 12 2z" fill="white"/>
      </svg>
    </button>

    <div id="lf-chat-window" role="dialog" aria-label="Luxfly Chat">
      <div id="lf-chat-header">
        <div id="lf-chat-header-avatar">✈</div>
        <div id="lf-chat-header-info">
          <div id="lf-chat-header-name">Luxfly Assistant</div>
          <div id="lf-chat-header-status">Online · Powered by AI</div>
        </div>
        <button id="lf-chat-close" aria-label="Close chat">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <div id="lf-chat-messages"></div>

      <div id="lf-chat-quick">
        <button class="lf-quick-btn" data-q="What are your prices?">Prices</button>
        <button class="lf-quick-btn" data-q="What are your opening hours?">Hours</button>
        <button class="lf-quick-btn" data-q="Is it safe for kids?">Kids</button>
        <button class="lf-quick-btn" data-q="How do I book?">Booking</button>
        <button class="lf-quick-btn" data-q="Where are you located?">Location</button>
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
  function addMsg(text, role) {
    const el = document.createElement('div');
    el.className = 'lf-msg ' + (role === 'user' ? 'lf-msg-user' : 'lf-msg-bot');
    el.textContent = text;
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

  /* ── GEMINI API ── */
  async function askGemini(userText) {
    history.push({ role: 'user', parts: [{ text: userText }] });

    const body = {
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: history
    };

    try {
      const res = await fetch(GEMINI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await res.json();

      if (data.candidates && data.candidates[0]) {
        const reply = data.candidates[0].content.parts[0].text.trim();
        history.push({ role: 'model', parts: [{ text: reply }] });
        return reply;
      } else {
        return "I'm having a moment — please try again or email us at hello@luxfly.eu 🙂";
      }
    } catch (e) {
      return "Something went wrong on my end. You can reach us at hello@luxfly.eu for help!";
    }
  }

  /* ── SEND MESSAGE ── */
  async function sendMessage(text) {
    text = text.trim();
    if (!text) return;

    toggleQuickBtns(false);
    addMsg(text, 'user');
    input.value = '';
    input.style.height = 'auto';
    sendBtn.disabled = true;
    showTyping();

    const reply = await askGemini(text);
    removeTyping();
    addMsg(reply, 'bot');
    sendBtn.disabled = false;
    input.focus();
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
        addMsg("Hey! 👋 I'm the Luxfly assistant. Ask me anything about our indoor skydiving experience — prices, hours, booking, or anything else!", 'bot');
      }, 300);
    }
    input.focus();
  }

  function closeChat() {
    isOpen = false;
    win.classList.remove('open');
    btn.innerHTML = `<span id="lf-chat-badge" style="display:none"></span>
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
      if (b) { b.style.display = 'flex'; b.textContent = '1'; }
    }
  }, 8000);

})();
