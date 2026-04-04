(function () {
  'use strict';

  // ─── Knowledge Base ────────────────────────────────────────────────────────
  const KB = {

    // ── PRIJZEN ──────────────────────────────────────────────────────────────
    prices: {
      keywords: [
        'prijs', 'prijzen', 'kosten', 'hoeveel kost', 'hoeveel kosten',
        'wat kost', 'pakket', 'pakketten', 'tarief', 'tarieven', 'kosten',
        'tarief', 'tarieven', 'prijs', 'hoeveel', 'tarief', 'tarieven', 'kosten', 'kosten',
        'betalen', 'geld', 'kaartje', 'kaartjes', 'optie', 'opties', 'betaalbaar',
        'goedkoop', 'duur', 'budget', 'volwassenprijs', 'volwassenenpakket',
        'wat kost het', 'wat is de prijs', 'hoeveel betaal ik',
        'prijsstelling', 'kosten per', 'hoeveel per', 'wat zijn de prijzen',
        'vertel me de prijzen', 'laat me prijzen zien', 'lijst van pakketten', 'luxcovery', 'luxensation', 'luxemotion'
      ],
      response: () => `Dit zijn onze vluchtpakketten:\n\n**👤 VOLWASSENEN**\n✈️ **LUXCOVERY** — 2 vluchten (2 min): **€104.70**\n✈️ **LUXENSATION** — 2 vluchten (4 min): **€174.70**\n✈️ **LUXEMOTION** — 3 vluchten (6 min): **€236.70**\n💡 Basisch pakket (geen extras) vanaf **€65.90**\n\n**🧒 KINDEREN (4–12 jaar)**\n✈️ **Kinderen 2 vluchten:** **€89.70**\n✈️ **Kinderen 4 vluchten:** **€139.80**\n💡 Basisch pakket vanaf **€45.90**\n\nAlle grote pakketten bevatten: compleet uitrusting, veiligheidsuitleg, gekwalificeerde instructeur, HighFly-ervaring, professionele souvenirfoto's en toegang tot het **Art of Skydiving Museum**. 🎫\n\nWeet niet zeker welke je moet kiezen? Vraag me om een aanbeveling! 😊`
    },

    // ── AANBEVELING ──────────────────────────────────────────────────────────
    recommend: {
      keywords: [
        'aanbeveling', 'suggestie', 'voorstel', 'beste pakket',
        'welk pakket', 'welk pakket', 'wat moet ik boeken', 'wat moet ik nemen',
        'welke zou ik', 'wat raad je me aan', 'wat is het beste', 'meest populair',
        'best voor mij', 'best voor beginners', 'best voor de eerste keer', 'starterpakket',
        'beginnerspakket', 'niet zeker wat ik moet boeken', 'wat moet ik nemen', 'wat moet ik kiezen',
        'welke moet ik kiezen', 'welke moet ik boeken', 'help me kiezen', 'wat raad je aan',
        'advies', 'adviseer', 'wat nemen de meeste mensen', 'beste waarde', 'goede waarde',
        'het waard', 'is het het waard', 'wat moet ik mee beginnen', 'ideaal pakket',
        'perfect pakket', 'geschikt pakket', 'ik weet niet wat ik moet boeken'
      ],
      response: () => `**Dit is onze aanbeveling voor eerste keer vliegers:** ✈️\n\n🌟 **LUXCOVERY (2 vluchten, €104.70)** is het perfecte begin — je eerste vlucht gaat over het gevoel ervaren, en de tweede vlucht is waar je echt gaat vliegen. Inclusief HighFly-ervaring en professionele foto's!\n\n💪 Wil je meer tunneltijd? **LUXENSATION (4 min, €174.70)** geeft je veel meer vooruitgang en is geweldig voor de waarde.\n\n🏆 **LUXEMOTION (6 min, €236.70)** — het ultieme pakket voor wie de volledige ervaring wil.\n\n🧒 **Voor kinderen (4–12 jaar):** het **2-vlucht kinderpakket (€89.70)** is de perfecte introductie!\n\nAlle grote pakketten bevatten uitrusting, uitleg, instructeur, HighFly, professionele foto's en **Museumtoegang**. 😊`
    },

    // ── KINDEREN ─────────────────────────────────────────────────────────────
    kids: {
      keywords: [
        'kind', 'kinderen', 'kind', 'kinderen', 'baby', 'junior', 'jong',
        'minimumleeftijd', 'hoe oud', 'kan mijn kind', 'kunnen kinderen', 'voor kinderen',
        'voor kinderen', 'hoeveel voor een kind', 'prijs voor kind', 'prijs voor kinderen',
        'familie', 'hoe jong', 'kind', 'enfant', 'enfants', 'leeftijdslimiet',
        'leeftijdsbeperking', 'mijn zoon', 'mijn dochter', 'mijn kind', 'oud genoeg',
        'peuter', 'vier jaar', '4 jaar', '5 jaar', '6 jaar', 'kan een kind',
        'is het geschikt voor kinderen', 'kunnen baby\'s', 'jongste', 'jongste leeftijd',
        'te jong', 'veilig voor kinderen', 'veilig voor kinderen', 'kinderen veilig',
        'is het veilig voor mijn kind', 'kinderen toegestaan', 'kinderen toegestaan',
        'minimumleeftijd voor kinderen', 'welke leeftijd kunnen kinderen',
        'kinderpakket', 'kinderpakketten', 'kinderpakket', 'kinderpakketten',
        'hoeveel voor mijn dochter', 'hoeveel voor mijn zoon', 'hoeveel voor mijn kind',
        'hoeveel voor een kind', 'hoeveel voor kinderen', 'hoeveel voor een kind',
        'prijs voor mijn dochter', 'prijs voor mijn zoon', 'prijs voor mijn kind',
        '7 jaar oud', '8 jaar oud', '9 jaar oud', '10 jaar oud', '11 jaar oud', '12 jaar oud',
        '7 jaar', '8 jaar', '9 jaar', '10 jaar', '11 jaar', '12 jaar',
        'jaar oud kind', 'jaar oud kind', 'is er een kinderpakket', 'hebben jullie kinderpakketten',
        'mijn kind wil vliegen', 'kind wil vliegen', 'mijn kind wil', 'kind wil',
        'leeftijdslimiet voor kinderen', 'leeftijdslimiet kinderen', 'is er een leeftijdslimiet',
        'kindprijs', 'kindprijzen', 'prijs voor kinderen',
        'familiepakket', 'familiepakketten',
        'peuters', 'kunnen peuters vliegen', 'toestemmingsformulier', 'een formulier ondertekenen', 'oudertoestemming', 'moet ik tekenen'
      ],
      response: () => `Kinderen zijn zeer welkom bij Luxfly! 🧒✈️\n\nMinimumleeftijd: **4 jaar oud**. Gewichtsbereik: 30–120 kg. Geen maximumleeftijd.\n\nEen ouder of wettelijk verzorger moet te allen tijde aanwezig zijn voor onder de 18, en een ondertekend toestemmingsformulier is vereist.\n\nVraag me naar **kinderenprijzen** of **gezondheidsvoorwaarden** als je meer details nodig hebt!`
    },

    // ── OPENINGSTIJDEN ────────────────────────────────────────────────────────
    hours: {
      keywords: [
        'uur', 'uren', 'open', 'opening', 'sluit', 'sluiting', 'gesloten',
        'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag', 'zondag',
        'weekend', 'weekdag', 'geopend', 'openingstijden',
        'open', 'openingstijden', 'openingstijden', 'beschikbaar',
        'openingstijd', 'sluitingstijd', 'ben je open', 'wanneer open je',
        'wanneer sluit je', 'hoe laat open je', 'hoe laat sluit je',
        'open in het weekend', 'open op zondag', 'vandaag open', 'welke dagen',
        'welke dagen', 'wanneer ben je open', 'open op', 'feestdag',
        'officiële feestdag', 'kerstmis', 'nieuwjaar', 'laatste ingang', 'laatste opname', 'laatste sessie'
      ],
      response: () => `**Luxfly Openingstijden:**\n\n📅 **Maandag:** Gesloten *(open op de 1e maandag van elke maand)*\n📅 **Dinsdag:** Gesloten\n📅 **Woensdag – Vrijdag:** 12:00 – 20:00\n📅 **Zaterdag & Zondag:** 10:00 – 19:00\n\n⏰ Laatste sessies toegelaten **90 minuten voor sluiting**.\n\nPrivé-verhuur buiten kantooruren is beschikbaar ma–do vanaf 07:00 — neem contact op voor details.\n\nWij raden aan vooruit te boeken, vooral in het weekend. Klanten zonder afspraak zijn welkom op basis van beschikbaarheid! 🎟️`
    },

    // ── LOCATIE ──────────────────────────────────────────────────────────────
    location: {
      keywords: [
        'locatie', 'vind je', 'hoe kom ik', 'aanwijzingen',
        'navigatie', 'sterpenich', 'arlon', 'ikea', 'decathlon', 'parkeren', 'park',
        'bus', 'tec', 'vervoer', 'e411', 'snelweg', 'snelweg', 'afslag',
        'luxembourg', 'belgië', 'belgique', 'waar', 'adres', 'hoe kom ik',
        'hoe kom ik', 'kaart', 'gelegen', 'dicht bij', 'naast',
        'met auto', 'met bus', 'openbaar vervoer', 'route de l\'europe',
        'hoe vind ik je', 'hoe kom ik daar', 'waar ben je',
        'waar ben je gevestigd', 'waar is luxfly', 'vind luxfly',
        'ben je makkelijk te vinden', 'hoe ver', 'hoe ver van luxemburg',
        'dicht bij luxemburg', 'dicht bij de grens', 'vanaf luxemburgstad', 'vanaf brussel',
        'vanaf arlon', 'vanaf luik', 'dicht bij', 'hoe ver', 'gratis parkeren', 'is er parkeerplaats',
        'kan ik parkeren', 'parkeerplaats beschikbaar', 'is parkeren gratis', 'waar is je adres', 'je adres', 'volledig adres'
      ],
      response: () => `**Route de l'Europe 1, 6700 Sterpenich, België** 📍\n\nMet auto: E411 snelweg, afslag 33 (Sterpenich/Arlon). Naast IKEA en Decathlon — gemakkelijk te vinden. 80+ gratis parkeerplaatsen ter plaatse.\n\nSlechts enkele minuten van de Luxemburgse grens.`
    },

    // ── BOEKEN / ANNULEREN ───────────────────────────────────────────────────
    booking: {
      keywords: [
        'boeken', 'boeking', 'reserveren', 'reservering', 'annuleren', 'annulering',
        'terugbetaling', 'zonder boeking', 'zonder afspraak', 'online', 'slot',
        'beschikbaarheid', 'opnieuw boeken', 'verplaatsen', 'uitstellen', 'aanbetaling',
        'betaling', 'online betalen', 'boeken', 'boeken',
        'vooruitbetalen', 'last minute', 'zelfde dag', 'beleid', 'voorwaarden', 'voorwaarden',
        'moet ik boeken', 'moet ik boeken', 'kan ik zomaar langskomen', 'kan ik zonder afspraak',
        'kan ik zomaar komen', 'zomaar langs', 'kan ik zonder boeking',
        'heb ik een reservering nodig', 'betaal vooruit', 'betaal op de dag',
        'betalingsmethode', 'betaal met kaart', 'betaal contant', 'creditcard',
        'betaalkaart', 'contant', 'hoe betaal ik', 'hoe betaal ik', 'hoe boek ik',
        'kan ik online boeken', 'boeken per telefoon', 'boeken per telefoon',
        'is er beschikbaarheid', 'hoe annuleer ik', 'wat gebeurt er als ik annuleer',
        'geld terug', 'kan ik geld terug krijgen', 'mijn boeking wijzigen',
        'datum wijzigen', 'tijd wijzigen', 'mijn boeking verplaatsen',
        'ik moet annuleren', 'annuleringsbeleid', 'terugbetalingsbeleid',
        'volledig geboekt', 'wanneer kan ik komen', 'wie het eerst komt',
        'betaal contant', 'betaal contant', 'creditcards', 'betaalkaarten',
        'accepteer je contant', 'accepteer je kaarten', 'betalingsmogelijkheden'
      ],
      response: () => `Boek online op **shop.indoorskydive.lu** of bel **+32 63 39 11 63**.\n\nZonder afspraak is welkom, maar vooruitboeking wordt ten zeerste aanbevolen, vooral in het weekend. Groepen van 5+ moeten minstens 48 uur van tevoren boeken.\n\nVolledige betaling bij boeking vereist. Annuleringen met **48+ uur voorbericht** krijgen volledige terugbetaling of gratis omschakeling. Cadeaubon wordt geaccepteerd.`
    },

    // ── VERJAARDAG ───────────────────────────────────────────────────────────
    birthday: {
      keywords: [
        'verjaardag', 'geburtstag', 'verjaardagsfeest', 'vieren',
        'viering', 'speciaal moment', 'verrassing', 'verjaardagsmaand', 'verjaardag',
        'gelukkige verjaardag', 'verjaardagsidee', 'verjaardagscadeau', 'feestidee',
        'speciale dag', 'verjaardagskorting', 'verjaardagsaanbod', 'verjaardagsaanbod',
        'voor mijn verjaardag', 'het is mijn verjaardag', 'verjaardagscadeau', 'mezelf verwennen',
        'verjaardagservaring', 'uniek cadeau', 'cadeauidee', 'cadeauidee',
        'iets speciaals', 'verjaardag vieren',
        'verjaardag pakket', 'verjaardagspakketten', 'hebben jullie verjaardagspakketten',
        'verjaardag extra\'s', 'verjaardag opties'
      ],
      response: () => `🎂 Vlieg in je verjaardagsmaand en krijg **10% korting** op je pakket — vertel het gewoon bij het boeken!\n\nGroepsverpakkingen voor verjaardagen zijn beschikbaar met verschillende extra's (galerij, foto's, versieringen). Voor een persoonlijke offerte:\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── GROEPEN / VRIJGEZELLENFEEST / BEDRIJF ────────────────────────────────
    groups: {
      keywords: [
        'groep', 'groepen', 'team', 'teambuilding', 'bedrijf', 'bedrijf',
        'collega\'s', 'vrijgezellenfeest', 'vrijgezellenfeest', 'vrijgezellinnenfeest',
        'junggesellenabschied', 'junggesellinnenabschied', 'kantoor', 'vrienden', 'grote groep', 'grote groep',
        'vereniging', 'school', 'schoolreisje', 'incentive', 'groep', 'bedrijf',
        'vrijgezellenfeest', 'vrijgezellenfeest', 'team', 'bedrijven', 'per persoon',
        'groepstarief', 'groepsprijs', 'groepskorting', 'groepsboeking',
        'privégebeurtenis', 'privéverhuur', 'exclusieve verhuur', 'private sessie',
        'huur de tunnel', 'huur de tunnel', 'boeken voor een groep',
        'boeken voor mijn team', 'werkgebeurtenis', 'werkuitje', 'kantoorsuitje',
        'bedrijfsgebeurtenis', 'hoeveel personen', 'grote groepkorting',
        'we zijn een groep van', 'er zijn', 'mensen komen', 'hoeveel voor een groep',
        'groep vrienden', 'groep collega\'s', 'groepsdeal',
        'vrijgezellenfeest', 'vrijgezellinnenfeest', 'junggesellenabschied', 'vrijgezellenfeest',
        'vrijgezellinnenfeest', 'vrijgezellinnenfeest', 'vrijgezellenfeest', 'vrijgezellenavond',
        'groepstarieven', 'groepstarief prijs', 'hoeveel zijn de groepstarieven',
        'hoeveel voor een vrijgezellinnenfeest', 'vrijgezellinnenfeest prijs', 'prijs voor vrijgezellinnenfeest',
        'hoeveel voor vrijgezellenfeest', 'hoeveel voor 20 personen', 'hoeveel voor 10 personen',
        'hoeveel voor 15 personen', 'hoeveel voor 30 personen', 'hoeveel voor 50 personen',
        'hoeveel voor een groep', 'prijs voor een groep', 'kosten voor een groep',
        'boeken voor ons bedrijf', 'boeken voor het bedrijf', 'boeken voor mijn bedrijf',
        'bedrijfsuitje', 'hele bedrijf', 'hele bedrijf', 'al mijn collega\'s',
        'boeken voor ons team', 'boeken voor het hele team', 'groepsboeking prijs', 'groepspakket', 'groepspakketten',
        'personen', 'een groep van', 'we zijn een groep van',
        'korting voor groepen', 'is er korting voor groepen', 'groepskorting'
      ],
      response: () => `**Groepstarieven (per vluchtminuut):**\n👥 2–9 personen: **€35/min**\n👥 10–19 personen: **€31.50/min** (10% korting)\n👥 20–49 personen: **€29.75/min** (15% korting)\n👥 50–99 personen: **€28/min** (20% korting)\n👥 100+: Persoonlijke offerte\n\nGroepskorting begint al vanaf 10 personen. Een aanbetaling van 30% reserveert je datum. Boeking minstens 7 dagen van tevoren vereist.\n\nVoor vrijgezellenfeesten of teambuilding-evenementen, neem contact met ons op voor een aangepast pakket:\n📧 events@luxfly.lu | 📞 +32 63 39 11 63`
    },

    // ── ERVARING / WAT IS HET ────────────────────────────────────────────────
    experience: {
      keywords: [
        'ervaring', 'geen ervaring nodig', 'eerste keer', 'beginner', 'nooit gedaan',
        'indoor skydiving', 'windtunnel', 'hoe voelt het', 'wat is indoor skydiving',
        'hoe werkt het', 'voelt het als', 'voelt het', 'hoe voelt het',
        'hoe voelt het als', 'eng', 'moeilijk', 'lastig', 'makkelijk',
        'parachutespringen', 'parachutespringen', 'erfahrung', 'eerste keer', 'beginner', 'beginner',
        'nerveus', 'bang', 'intimiderend', 'nooit gevlogen', 'vluchtlichaam', 'vrije val',
        'zweven', 'ik wil vliegen', 'wil vliegen', 'vliegen', 'probeer het',
        'sensatie', 'adrenaline', 'opwindend', 'spannend', 'leuk',
        'zal ik bang zijn', 'is het eng', 'zal ik bang zijn',
        'wat als ik bang ben', 'zal ik duizelig zijn', 'duizelig', 'misselijk', 'misselijk',
        'zal ik misselijk zijn', 'reisziekte', 'is het als echt parachutespringen',
        'vergeleken met echt parachutespringen', 'vergelijkbaar met parachutespringen', 'verschil met parachutespringen',
        'is het binnen', 'is het buiten', 'binnen', 'buiten', 'buiten', 'binnen',
        'wat gebeurt er', 'hoe voelt het om te vliegen', 'beschrijf het gevoel',
        'vertel me over de ervaring', 'wat is vluchtlichaam', 'wat is een windtunnel',
        'moet ik fit zijn', 'hoe fit', 'fitnesseis vereist', 'fysiek veeleisend',
        'heb ik kracht nodig', 'kunnen onfitten mensen vliegen', 'is het vermoeiend',
        'hoe veilig is het', 'is het gevaarlijk', 'gevaar', 'risico', 'veilige activiteit',
        'wat zijn de risico\'s', 'ongeluk', 'letselrisico', 'bescherming',
        'is het veilig', 'is het volledig veilig', 'hoe veilig is het', 'is luxfly veilig',
        'is het een veilige activiteit', 'veilig om te doen',
        'beginners', 'geschikt voor beginners', 'goed voor beginners',
        'hoe werkt de windtunnel', 'hoe werkt indoor skydiving'
      ],
      response: () => `Indoor skydiving simuleert het gevoel van vrije val in een verticale windtunnel — je zweeft op een luchtkolom van maximaal **160 km/h**, volledig binnen ongeacht het weer.\n\nGeen ervaring of fitheid nodig. Je instructeur is de hele tijd bij je in de tunnel. Geschikt voor leeftijden 4 en ouder (30–120 kg).\n\nCompleet uitrusting en veiligheidsuitleg inbegrepen bij elk pakket.`
    },

    // ── UITRUSTING / WAT AANTREKKEN ──────────────────────────────────────────
    gear: {
      keywords: [
        'aantrekken', 'meenemen', 'uitrusting', 'uitrusting', 'inbegrepen', 'helm', 'jumpsuit',
        'pak', 'schoenen', 'kleding', 'kleren', 'wat aantrekken', 'wat moet ik aantrekken',
        'outfit', 'aankleden', 'sieraden', 'juwelen', 'bril', 'contactlenzen',
        'contactlenzen', 'accessoires', 'verstrekt', 'ausrüstung', 'vêtements',
        'outfit', 'uitrusting', 'bril', 'oordopjes', 'vliegpak', 'wat aantrekken',
        'wat moet ik meenemen', 'wat moet ik meebrengen', 'moet ik iets meenemen',
        'wordt uitrusting verstrekt', 'wordt uitrusting inbegrepen', 'wat wordt verstrekt',
        'wat is inbegrepen', 'wat heb ik nodig', 'moet ik iets meebrengen', 'hoe voorbereiding',
        'voorbereiding op mijn bezoek', 'hoe voorbereiding', 'wat eronder aantrekken',
        'kan ik een bril dragen', 'kan ik sieraden dragen', 'kan ik juwelen dragen',
        'kan ik een ring dragen', 'lang haar', 'haar', 'haarband', 'piercings', 'piercing',
        'kan ik contactlenzen dragen', 'op blote voeten', 'strikken', 'sneakers', 'trainers',
        'wat voor schoenen', 'slippers', 'sandalen', 'hakken', 'laarzen', 'lockers', 'locker'
      ],
      response: () => `**Alles wordt verstrekt — kom gewoon langs!** 🎽\n\n**Inbegrepen in je pakket:**\n✅ Vliegpak (jumpsuit)\n✅ Helm\n✅ Bril\n✅ Oordopjes\n\n**Eronder aantrekken:**\n👟 Comfortabele, sportieve kleding (geen rokken/jurken)\n👟 Veters sluitende trainers of sportschoenen — geen slippers, hakken of loafers!\n\n**Verwijder/laat achter:**\n❌ Sieraden, horloges, ringen, oorbellen, piercings indien mogelijk\n❌ Sjaals, riemen of losse accessoires\n👓 **Bril:** je kunt hem aanhouden — we hebben overgrote brillen die over je bril passen!\n\n💇 Lang haar? Bind het in een staart — we helpen je onder je helm.\n\n🗝️ Lockers zijn beschikbaar ter plaatse voor je spullen. Tot ziens in de tunnel! 🌬️`
    },

    // ── TOESCHOUWERS ─────────────────────────────────────────────────────────
    spectators: {
      keywords: [
        'kijken', 'kijken', 'toeschouwer', 'toeschouwers', 'bekijken', 'kijkgebied',
        'kan mijn vriend', 'kan mijn familie', 'filmen', 'film mijn vriend', 'fotograferen',
        'foto', 'video', 'camera', 'foto\'s', 'opnames', 'observeren', 'aanmoedigen',
        'publiek', 'ondersteuning', 'famille', 'vrienden', 'kijken', 'zuschauer',
        'vrienden komen', 'meekomen', 'meekijken', 'vrienden meenemen', 'niet-vliegers',
        'niet vliegen', 'alleen kijken', 'galerij', 'fotograafpakket',
        'kan iemand meekomen', 'kan mijn partner kijken', 'kunnen mijn ouders kijken',
        'kan mijn man kijken', 'kan mijn vrouw kijken', 'kan mijn partner', 'komt meekijken',
        'gratis voor toeschouwers', 'ingang voor toeschouwers', 'is het gratis om te kijken',
        'kunnen niet-vliegers binnenkomen', 'kunnen niet-vliegers', 'zomaar meekoeken',
        'is er een kijkgebied', 'kan ik door glas zien', 'glas',
        'hoe krijg ik foto\'s', 'kan ik filmen', 'kan ik foto\'s maken', 'kan ik opnemen',
        'professionele foto\'s', 'foto\'s van mijn vlucht', 'video van mijn vlucht',
        'opnemen van mijn vlucht', 'film mijn vlucht', 'hoe krijg ik opnames'
      ],
      response: () => `**Vrienden & familie zijn zeer welkom!** 📸👀\n\n🏟️ **Speciaal kijkgebied** met duidelijk glazen paneel — toeschouwers hebben uitzicht op alles in de tunnel.\n\n📷 **Foto\'s & Video:**\n- Toeschouwers kunnen vrij fotograferen en filmen vanuit de galerij\n- Professionele **fotografie/videopakketten** beschikbaar — vraag aan de receptie!\n- Camera\'s in de tunnel maken ongelooflijke opnames\n\n🎟️ **Ingang voor toeschouwers is GRATIS** — geen kaartje nodig.\n\n🏛️ Alle pakketten bevatten **Art of Skydiving Museum** toegang, dus niet-vliegers hebben veel te doen! ✈️`
    },

    // ── DUUR / TIMING ────────────────────────────────────────────────────────
    duration: {
      keywords: [
        'hoe lang', 'duur', 'aankomen', 'aankomst', 'inchecken', 'incheck',
        'totale tijd', 'bezoek', 'lang duurt het bezoek', 'hoeveel tijd', 'minuten',
        'seconden', 'vluchtduur', 'wanneer aankomen', 'hoe vroeg', 'lang duurt',
        'vluchtduur', 'wie lange', 'combien de temps', 'duur', 'lang vlucht',
        'per vlucht', 'per vlucht', 'hoeveel minuten', 'plan mijn bezoek',
        'hoe lang ben ik daar', 'hoe lang duurt een bezoek', 'hoe lang is het',
        'hoe laat moet ik aankomen', 'hoe laat moet ik daar zijn',
        'hoe vroeg moet ik aankomen', 'moet ik vroeg aankomen',
        'hoeveel tijd moet ik inplannen', 'hoe lang in totaal',
        'ben ik te laat', 'wat als ik te laat ben', 'als ik te laat ben', 'ben te laat',
        'lang per vlucht', 'hoe lang is 1 vlucht', 'hoe lang is één vlucht',
        'hoe lang in totaal', 'hoe lang is de sessie', 'hoe lang is een sessie',
        '60 seconden', '1 minuut', 'vluchtlengte'
      ],
      response: () => `Kom **60 minuten voor** je vlucht voor incheck, uitrusting en veiligheidsuitleg.\n\nElke vlucht is **60 seconden** tunneltijd. Het totale bezoek duurt ongeveer **2 uur** inclusief de uitleg en museum.\n\nTe laat? Bel ons: **+32 63 39 11 63**`
    },

    // ── GEZONDHEID / LEEFTIJD / BEPERKINGEN ──────────────────────────────────
    health: {
      keywords: [
        'zwanger', 'zwangerschap', 'hartaandoening', 'hartprobleem', 'epilepsie',
        'medisch', 'gezondheid', 'beperking', 'beperkt', 'rugprobleem', 'rugpijn',
        'neckprobleem', 'nekpijn', 'blessure', 'geblesseerd', 'operatie', 'chirurgie',
        'astma', 'pacemaker', 'gewichtslimiet', 'maximaal gewicht', 'minimaal gewicht',
        'kg', 'kilo\'s', 'beperkingen', 'veilig', 'kan ik vliegen', 'gezondheidstoestand',
        'gezondheid', 'gezondheid', 'zwanger', 'zwanger', 'hoge bloeddruk',
        'hypertensie', 'medicatie', 'rolstoel', 'contra-indicatie',
        // Age questions
        'oudste', 'oudste persoon', 'maximale leeftijd', 'geen maximumleeftijd', 'leeftijdsbeperking',
        'leeftijdslimiet voor volwassenen', 'hoe oud kan je zijn', 'te oud', 'ben ik te oud',
        'senior', 'senioren', 'bejaarde', 'gepensioneerde', 'gepensioneerden', 'met pensioen',
        'grootouder', 'grootouders', 'oma', 'oma', 'opa',
        'opa', 'ouder persoon', 'oudere mensen',
        'kan een oude persoon vliegen', 'kunnen oude mensen vliegen', 'kunnen senioren vliegen',
        'bejaarde mensen', 'kunnen bejaarden vliegen', 'bejaarde persoon',
        'is er een leeftijdslimiet', 'maximale leeftijd', 'wat is de leeftijdslimiet',
        'hoe oud is te oud', '60 jaar oud', '70 jaar oud', '80 jaar oud',
        '90 jaar oud', 'ouder dan 60', 'ouder dan 70', 'ouder dan 80', 'ouder dan 50',
        // Weight questions
        'overgewicht', 'te zwaar', 'te licht', 'gewichtslimiet',
        'hoe zwaar', 'hoeveel kan ik wegen', 'gewichtsvereiste',
        'bmi', 'obees', 'obesitas', 'te dik', 'te mager',
        // Fitness / physical
        'hartslag', 'bloeddruk',
        'kan ik vliegen als ik', 'mag ik vliegen', 'niet fit om te vliegen', 'fit om te vliegen',
        // Alcohol / drugs
        'heb gedronken', 'heb een drankje gehad', 'dronken', 'alcohol', 'kater', 'kater',
        // Back/neck problems explicitly
        'slechte rug', 'ik heb een slechte rug', 'slechte rugprobleem', 'slechte nek', 'rugletsel',
        'nekletsel', 'uitgeglipte schijf', 'hernia', 'spinaalprobleem', 'ruggengraatprobleem'
      ],
      response: () => `**Leeftijd:** Minimum **4 jaar oud** — geen maximumleeftijd (we vlegen gasten tot 95!).\n**Gewicht:** 30–120 kg.\n\nVlieg niet als je zwanger bent, een ernstige hartaandoening of pacemaker hebt, epilepsie hebt, recent een operatie of blessure hebt gehad, ongecontroleerde hoge bloeddruk hebt of gedronken hebt.\n\nOnzeker? Raadpleeg eerst je arts en meld het ons bij het boeken — we vinden altijd een oplossing. 💙\n📞 +32 63 39 11 63`
    },

    // ── CONTACT ──────────────────────────────────────────────────────────────
    contact: {
      keywords: [
        'contact', 'email', 'telefoon', 'bel', 'spreek met', 'neem contact op', 'bereik',
        'whatsapp', 'bericht', 'chat', 'praat met', 'klantenservice', 'ondersteuning',
        'help', 'vraag', 'vraag', 'kontakt', 'telefon', 'contactez', 'téléphone',
        'bereik', 'hoe kom ik in contact', 'pers', 'media', 'instagram', 'facebook',
        'nummer', 'telefoon', 'sociale media', 'hoe contact', 'spreek met iemand',
        'kan ik je bellen', 'hebben jullie een telefoonnummer', 'wat is je email', 'emailadres', 'wat is je emailadres', 'contact per email',
        'wat is je telefoonnummer', 'hoe bereik ik je', 'is er een nummer',
        'klantenservice', 'klachten', 'feedback', 'terugbellen',
        'reageer op mij', 'wanneer reageer je', 'reactietijd',
        'spreek met een persoon', 'spreek met een mens', 'spreek met iemand',
        'spreek met een mens', 'spreek met iemand echt', 'livechat',
        'wat is je whatsapp', 'hebben jullie whatsapp'
      ],
      response: () => `📞 **Telefoon:** +32 63 39 11 63\n💬 **WhatsApp:** +32 477 528 566\n📧 **Email:** info@luxfly.lu\n🌐 **Website:** luxfly.lu\n\n🏠 Route de l'Europe 1, 6700 Sterpenich, België`
    },

    // ── PROMOTIES / KORTINGEN ────────────────────────────────────────────────
    promo: {
      keywords: [
        'actie', 'actie', 'promoties', 'korting', 'coupon', 'code',
        'deal', 'speciaal aanbod', 'student', 'militair', 'verlaging',
        'verlaging', 'besparen', 'goedkoper', 'besparing', 'lente', 'spring26',
        'group15', 'nodig een vriend mee', 'verjaardagsmaand', 'rabatt', 'réduction',
        'offre', 'bon de réduction', 'huidige aanbiedingen', 'deals', 'opruiming',
        'promotiecode', 'promotiecode', 'kortingscode', 'studentenkorting',
        'heb je korting', 'is er korting', 'kortingen',
        'aanbiedingen', 'welke promoties', 'huidige promoties',
        'studentenpas', 'studentenkaart', 'militaire korting', 'hoe kan ik besparen',
        'is er goedkoper', 'loyaliteitskorting', 'codes',
        'hebben jullie promoties', 'zijn er deals', 'hebben jullie deals',
        'deals', 'huidige deals', 'huidige deals',
        'besparingen', 'besparingen', 'zijn er besparingen',
        'goedkopere tarief', 'goedkopere optie', 'goedkopere prijs',
        'speciale aanbiedingen', 'speciale aanbiedingen', 'huidige speciale aanbiedingen'
      ],
      response: () => `**Huidige Promoties bij Luxfly** 🎉\n\n🌸 **SPRING26** — **15% korting** op je eerste LUXCOVERY of LUXENSATION pakket! Geldig tot **30 april 2026**. Gebruik code **SPRING26** bij afrekenen.\n\n👥 **GROUP15** — Extra **5% korting** bovenop groepstarieven voor 10+ personen. Code: **GROUP15**.\n\n🎂 **Verjaardagsmaand** — Vlieg in je verjaardagsmaand voor **10% korting**. Zeg het gewoon bij het boeken!\n\n🎓 **Studentenkorting** — Toon een geldige studentenpas voor **10% korting**.\n\n👫 **Nodig een Vriend Mee** — Verwijs een bezoeker voor het eerst en krijg beide een beloning! Vraag ons team om details.\n\n⚠️ Kortingen kunnen niet worden gecombineerd. Voorwaarden van toepassing.`
    },

    // ── CADEAUBONNEN ────────────────────────────────────────────────────────
    voucher: {
      keywords: [
        'cadeaubon', 'cadeaukaart', 'cadeaubon', 'koop voor iemand', 'cadeau',
        'geschenk', 'cadeau', 'bon cadeau', 'geschenk', 'gutschein',
        'geef als cadeau', 'iemand anders', 'verrassing', 'koop een cadeaubon',
        'koop een cadeaubon', 'cadeaubon geldig', 'geldigheid', 'verlopen', 'vernieuwen',
        'vernieuwing', 'overdracht', 'overdraagbaar', 'persoonlijk', 'terugbetaling cadeaubon',
        'voor een vriend', 'kerstcadeau', 'verjaardagscadeau', 'verjaardagscadeau',
        'kan ik cadeau kopen', 'koop als cadeau', 'cadeau geven', 'verwennen iemand',
        'verwennen een vriend', 'verwennen mijn partner', 'koop voor mijn partner',
        'koop voor mijn vriend', 'koop voor mijn familie', 'hoe lang is cadeaubon geldig',
        'verliest de cadeaubon van waarde', 'hoe lang heb ik', 'gebruik mijn cadeaubon',
        'hoe gebruik ik mijn cadeaubon', 'verzilver cadeaubon', 'cadeauboncode',
        'gebruik een cadeaubon', 'gebruik mijn cadeaubon', 'online cadeaubon', 'cadeaubon bij afrekenen',
        'pas cadeaubon toe', 'voer cadeaubon in', 'voer mijn cadeaubon in', 'gebruik de cadeaubon',
        'kan ik een cadeaubon gebruiken', 'gebruik een cadeaubon', 'verzilver cadeaubon', 'verzilver cadeaubon',
        'hoe lang gaat een cadeaubon mee', 'hoe lang is een cadeaubon', 'cadeaubon duurt',
        'hoe lang gaat een cadeaubon mee'
      ],
      response: () => `**Luxfly Cadeaubonnen — het perfecte cadeau!** 🎁\n\n🛒 Koop online op **luxfly.lu** of ter plaatse aan de receptie.\n\n**Cadeaubon Details:**\n📅 Geldig voor **12 maanden** vanaf aankoopdatum\n🔄 Vernieuwbaar voor nog eens **3 maanden** (één vernieuwing per cadeaubon)\n👤 **Niet persoonlijk** — bruikbaar door iedereen, niet alleen de genoemde ontvanger\n💸 Niet terugbetaalbaar eenmaal gekocht\n✅ Inzetbaar voor elke vluchtpakket of extra\n\nHet perfecte cadeau voor verjaardag, kerstmis of jubileum — wie wil niet vliegen? 💝\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── PROFESSIONEEL VLIEGEN / COACHING ────────────────────────────────────
    pro: {
      keywords: [
        'pro', 'professioneel', 'professioneel vliegen', 'competitie', 'coaching',
        'gevorderd', 'training', 'atleet', 'tunneltijd', 'bloktijd',
        'speciale sessie', 'freestyle', 'formatie', 'freefly', 'dynamisch',
        'competitief', 'tunnelrat', 'entraînement', 'professionnel',
        'compétition', 'coached sessie', 'vaardigheden', 'vooruitgang', 'coachtijd',
        'gedeelde sessie', 'gedeelde pro', 'prosessie', 'blokuren',
        'ik kan al vliegen', 'ik ben een ervaren vliegers', 'ervaren vliegers',
        'ik vlieg al', 'kan ik tunneltijd boeken', 'boeken tunneltijd',
        'koop tunneltijd', 'huur tunneltijd', 'solo sessie', 'coaching sessie',
        'windtunnel coaching', 'verbeter mijn vaardigheden', 'verbeter mijn vliegen',
        'neem mijn vliegen naar voren', 'gevorderde training', 'competitieve training',
        'hoofd naar beneden', 'zit vliegen', 'buik vliegen', 'vfs', 'dynamisch vliegen',
        'bieden coaching', 'bieden jullie coaching', 'hebben jullie coaching',
        'coaching sessies', 'coaching beschikbaar', 'krijg coaching', 'boeken coaching',
        'persoonlijke coaching', 'één-op-één coaching', 'één-op-één coaching',
        'krijg een coach', 'huur een coach', 'windtunnel coaching sessies',
        'hoeveel voor bloktijd', 'bloktijd prijs', 'bloktijd kosten',
        'hoofd naar beneden vliegen', 'hoofd naar beneden vliegen', 'hoofd naar beneden vliegen',
        'train in de tunnel', 'train in tunnel', 'training in de tunnel',
        'gevorderd vliegen', 'geavanceerde sessies', 'geavanceerde vlucht sessies',
        'formatievliegen', 'vluchttraining', 'formatie vluchttraining'
      ],
      response: () => `**Bloktijd (speciale tunnel):** 1 uur €180 · 5 uur €840 · 10 uur €1.560 · 20 uur €2.880\n\n**Gedeelde prosessies:** €55/sessie · 5 voor €240 · 10 voor €420\nSchema: ma, wo, vr, za & zo.\n\nDisciplines: Buik · Zit Vliegen · Hoofd-naar-beneden · Freestyle · Formatie.\n📧 info@luxfly.lu voor coachingvragen`
    },

    // ── MUSEUM ───────────────────────────────────────────────────────────────
    museum: {
      keywords: [
        'museum', 'vliegtuigmuseum', 'tentoonstelling', 'tentoonstelling', 'luchtvaart',
        'geschiedenis', 'vliegtuigen', 'vliegtuigen', 'displays', 'musée', 'musée aviation',
        'luftfahrt', 'museumentree', 'museumkaartje', 'museum inbegrepen',
        'museumprijs', 'zelfstandig museum', 'alleen het museum', 'bezoek museum',
        'museum alleen', 'museum zonder vliegen', 'museumkosten', 'museum gratis',
        'is het museum inbegrepen', 'krijg ik museumtoegang', 'wat zit in het museum',
        'wat heeft het museum', 'kan ik alleen het museum bezoeken',
        'museumentreefee', 'museumentree', 'is er een museum', 'vliegtuiggeschiedenis',
        'bezoek het museum', 'kan ik het museum bezoeken', 'museum op zichzelf',
        'museum zelfstandig', 'museum alleen', 'museum zonder vlucht'
      ],
      response: () => `**Het Art of Skydiving Museum** ✈️🏛️\n\nElk Luxfly bezoek includes ons **Art of Skydiving Museum** — een geweldige collectie die de geschiedenis van de luchtvaart viert!\n\n🎫 **GRATIS INBEGREPEN** in alle vluchtpakketten — geen extra kosten!\n🎟️ **Zelfstandige museumentree (geen vlucht):** **€15** per persoon\n\nBinnen vind je:\n- Historische vliegtuigen en interactieve displays\n- Luchtvaart geschiedenis tijdlijn\n- Geweldig voor alle leeftijden — vooral voor families!\n\nPerfect voor voor of na je vlucht, of voor niet-vliegende begeleiders van de groep. 🛩️`
    },

    // ── BAR & ETEN ────────────────────────────────────────────────────────────
    bar: {
      keywords: [
        'bar', 'eten', 'eten', 'drinken', 'dranken', 'menu', 'restaurant', 'café',
        'koffie', 'bier', 'burger', 'snack', 'burgerprijs', 'hoeveel kost de burger', 'eetprijzen', 'honger', 'dorst', 'lunch',
        'diner', 'maaltijd', 'sandwich', 'barmenu', 'wat kan ik eten', 'kantine',
        'essen', 'trinken', 'boire', 'manger', 'nourriture', 'boisson',
        'cocktail', 'sap', 'frisdrank', 'eetmenu', 'wat eten', 'nachos',
        'patat', 'lager', 'getapt bier', 'kan ik eten', 'is er eten',
        'hebben jullie eten', 'serveren jullie eten', 'hebben jullie een bar',
        'alcohol', 'serveer alcohol', 'alcoholische dranken', 'alcoholische dranken',
        'is er een restaurant', 'is er een café', 'is er een café',
        'kan ik iets drinken', 'kan ik iets eten', 'hebben jullie een café',
        'catering', 'verversingen', 'iets eten na', 'een hap eten'
      ],
      response: () => `**De Luxfly Bar & Restaurant** 🍔🍺\n\nTank op na je vlucht aan onze bar — open tijdens alle kantooruren!\n\n**🍔 Eten:**\n- Cheeseburger: **€14**\n- Vegetarische burger: **€12**\n- Clubsandwich: **€11**\n- Patat: **€4**\n- Nachos: **€8**\n\n**🍺 Dranken:**\n- Getapt lager (33cl): **€3.50** | (50cl): **€5.50**\n- Frisdrank: **€3**\n- Koffie/espresso: **€2.50**\n- Vers sap: **€4**\n\nPrachtig uitzicht op de tunnel vanuit de bar! 🌬️`
    },

    // ── HEMEL PILATES ────────────────────────────────────────────────────────
    pilates: {
      keywords: [
        'pilates', 'hemel pilates', 'pilatesklas', 'pilatesklassen', 'fitness', 'yoga', 'training',
        'oefening', 'wellness', 'kern', 'flexibiliteit', 'windtunnel pilates',
        'pilates schema', 'pilates prijs', 'drop in', 'klaspas',
        'pilates sessie', 'lichaamstraining', 'fitnesesklas', 'tunnel fitness',
        'fitness bij luxfly', 'aerobics', 'pilates boeking', 'deelnemen aan les',
        'bieden pilates', 'bieden jullie pilates', 'hebben jullie pilates',
        'wanneer pilates', 'pilatestijden', 'pilates rooster', 'pilates kosten',
        'pilates beschikbaar', 'pilates aangeboden', 'hemel pilates les', 'pilates sessies'
      ],
      response: () => `**Sky Pilates bij Luxfly** 🧘✈️\n\nUnieke **Sky Pilates** — pilates in de windtunnel voor een buitengewone kern- en lichaamstraining!\n\n**📅 Schema:**\n🗓️ Dinsdag & Donderdag: **07:30 uur**\n🗓️ Zaterdag: **09:00 uur**\n\n**💶 Prijzen:**\n- Drop-in (enkele les): **€45**\n- 4-lespas: **€160** (€40/les)\n- 8-lespas: **€280** (€35/les)\n\nGeen vliegtafel nodig — gewoon van beweging houden! Lessen geleid door gecertificeerde instructeurs.\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── LOYALITEITSPROGRAMMA ──────────────────────────────────────────────────
    loyalty: {
      keywords: [
        'loyaliteit', 'loyaliteitsprogramma', 'getrouwheid', 'fidelitybox', 'punten',
        'beloningen', 'loyaliteitskaart', 'lid', 'lidmaatschap', 'vaste klant',
        'beloningspunten', 'verdien punten', 'verzilver', 'loyaliteitsprogramma',
        'fidélité', 'treueprogramm', 'bonus', 'extra\'s', 'voordelen',
        'stempelkaart', 'terugkerende klant', 'vaste klant', 'loyaliteitsprogramma',
        'ik vlieg regelmatig', 'ik kom vaak', 'ik bezoek vaak', 'ik kom often terug',
        'beloning voor terugkeer', 'herhaalde bezoeken', 'regelmatige bezoeken',
        'fidelitykaart', 'loyaliteitspunten', 'verdien beloningen', 'hebben jullie loyaliteit',
        'is er loyaliteitsprogramma', 'lidmaatschapskaart', 'beloningskaart',
        'beloningsprogramma', 'beloningsprogramma', 'is er beloningsprogramma',
        'puntenprogramma', 'puntensysteem', 'verdien punten',
        'krijg punten', 'punten voor elk bezoek', 'verdien punten bij elk bezoek',
        'punten elke keer', 'punten als ik vlieg'
      ],
      response: () => `**Luxfly FidelityBox — Ons Loyaliteitsprogramma** 🌟\n\nVlieg meer, verdien meer!\n\n📱 Je **telefoonnummer is je loyaliteitskaart** — geen fysieke kaart nodig!\n⭐ Verdien punten elke keer dat je vliegt of geld uitgeeft bij Luxfly\n🎁 Verzilver punten voor gratis vluchten, kortingen & exclusieve beloningen\n\n**Voordelen voor leden:**\n- Prioriteitsboekingstoegang\n- Exclusieve ledenpromaties\n- Verjaardagsverrassingen\n- Vroege toegang tot nieuwe pakketten\n\nGewoon je telefoonnummer opgeven bij check-in — je bent automatisch ingeschreven!\n\n📞 +32 63 39 11 63 voor meer details.`
    },

    // ── COACHES / TEAM ────────────────────────────────────────────────────────
    coaches: {
      keywords: [
        'coach', 'coaches', 'instructeur', 'instructeurs', 'staff', 'trainer',
        'trainers', 'gecertificeerd', 'gekwalificeerd', 'wie onderwijst', 'je team',
        'vliegtuiginstructeur', 'tunnelinstructeur', 'talen', 'spreek nederlands',
        'spreek duits', 'spreek engels', 'meertalig', 'hoe ervaren',
        'team coaches', 'professionele coaches', 'wie zal mij onderwijzen',
        'zal iemand me helpen', 'zal een instructeur helpen', 'zal er een instructeur zijn', 'is er een instructeur',
        'zal ik een coach hebben', 'wie zal bij mij zijn', 'krijg ik een coach',
        'is er iemand bij me', 'ben ik alleen', 'alleen in de tunnel',
        'onder toezicht', 'ben ik onder toezicht', 'spreek je nederlands',
        'spreek je deutsch', 'spreek je deutsch', 'spreek je luxemburgs',
        'welke talen', 'engelssprekend', 'nederlandstalig', 'duitstalig',
        'onderwijzen in duits', 'onderwijzen in nederlands', 'onderwijzen in engels',
        'in duits', 'in nederlands', 'in engels', 'in luxemburgs'
      ],
      response: () => `8 gecertificeerde coaches met **12.000+ gecombineerde tunneluren** ervaring.\n\nVoor beginners is je instructeur van het allereerste moment bij je in de tunnel. Ons team spreekt Nederlands, Engels, Duits, Luxemburgs en Italiaans.`
    },

    // ── TUNNEL SPECS ─────────────────────────────────────────────────────────
    tunnel: {
      keywords: [
        'tunnel', 'windtunnel', 'windsnelheid', 'snelheid', 'hoe snel', 'km/h',
        'buik vliegen', 'buiksvliegen', 'zit vliegen', 'zit vliegen', 'hoofd naar beneden',
        'hoofd-naar-beneden', 'luchtstroming', 'wind', 'power', 'tunnelgrootte', 'technisch',
        'specificaties', 'specs', 'hoe groot', 'hoe krachtig', 'hoe sterk',
        'state of the art', 'verticale windtunnel', 'hoeveel km/h',
        'wat snelheid', 'windkracht', 'hoeveel wind', 'hoeveel wind',
        'is het erg winderig', 'hoe sterk is de wind', 'wat windsnelheid'
      ],
      response: () => `**Luxfly Windtunnel — Technische Specs** ⚡\n\nOnze geavanceerde verticale windtunnel is gebouwd voor iedereen van eerste-timers tot wereldkampioenen!\n\n**Windsnelheid per Discipline:**\n🤸 **Buik Vliegen** (beginner/recreatie): **130–160 km/h**\n💺 **Zit Vliegen** (middelmatig): **180–220 km/h**\n🔻 **Hoofd-naar-beneden** (gevorderd/pro): **250–320 km/h**\n\nWindsnelheid wordt nauwkeurig beheerd door onze instructeurs en aangepast aan je grootte, gewicht en vaardigheidsniveau.\n\n🛡️ Alle veiligheidssystemen zijn gecertificeerd volgens de hoogste Europese normen. ✈️`
    },

    // ── PARTNERS ─────────────────────────────────────────────────────────────
    partners: {
      keywords: [
        'partner', 'partners', 'partnerschap', 'bedrijf', 'affiliate',
        'commissie', 'doorverkoop', 'samenwerken', 'b2b', 'reisagent',
        'touroperator', 'hotel', 'samenwerken', 'samenwerking', 'commercieel',
        'partenaire', 'partenariat', 'partnerprogramma', 'referral', 'agent',
        'word partner', 'handel', 'groothandel', 'doorverkoper', 'partners@',
        'zakelijke vraag', 'zakelijke vraag', 'commerciële vraag',
        'we willen partner zijn', 'geïnteresseerd in partnering', 'verwijs klanten',
        'stuur klanten', 'breng klanten', 'krijg commissie'
      ],
      response: () => `**Word een Luxfly Partner** 🤝\n\nWe werken samen met reisbureau's, hotels, touroperators en bedrijven in Luxemburg en de Grote Regio.\n\n**Partnervoordelen:**\n💰 Verdien **10–15% commissie** op alle verwijzingen\n🎟️ Speciale tarieven voor je klanten\n📦 Co-branded promotiematerialen\n🌐 Vermeld op onze website als voorkeurpartner\n\n📧 **Aanvragen:** partners@luxfly.lu\n📞 +32 63 39 11 63\n\nOns partnersship team reageert binnen 48 uur! ✈️`
    },

    // ── BANEN ─────────────────────────────────────────────────────────────────
    jobs: {
      keywords: [
        'baan', 'banen', 'carrière', 'carrières', 'werk', 'werken', 'werkgelegenheid',
        'vacature', 'vacatures', 'wervend', 'sollicitatie', 'sollicitatie', 'positie',
        'rol', 'sluit je bij ons aan', 'sluit ons aan', 'werving', 'tunelinstructeur baan',
        'veiligheidsmedewerker', 'evenementencoördinator', 'klantenervaring', 'stage',
        'emploi', 'nous rejoindre', 'arbeit', 'stelle', 'ben je aan het rekruteren',
        'hebben jullie banen', 'hebben jullie personeel nodig', 'werk voor luxfly',
        'werk met luxfly', 'ik wil voor je werken', 'ik wil met je werken',
        'is er een baan', 'open rol', 'baanopening', 'cv', 'stuur mijn cv',
        'stuur mijn cv', 'solliciteer op baan', 'banen@',
        'hebben jullie tunelinstructeurs nodig', 'tunelinstructeur vacature',
        'tunelinstructeur positie', 'zoeken naar instructeurs'
      ],
      response: () => `**Carrières bij Luxfly** 💼✈️\n\nWe zoeken altijd naar gepassioneerde mensen die zich bij het team aansluit!\n\n**Open Posities:**\n🌬️ **Tunelinstructeur** — Leid beginner- en geavanceerde sessies\n🛡️ **Veiligheidsmedewerker** — Handhaaf de hoogste veiligheidsnormen\n🎉 **Evenementencoördinator** — Plan groeps-, bedrijfs- en speciale evenementen\n😊 **Klantenervaring** — Front-of-house & gastendiensten\n\nZie je rol niet? Neem toch contact op — we groeien!\n\n📧 **Stuur je CV naar:** jobs@luxfly.lu\n📞 +32 63 39 11 63\n\nHulp anderen het plezier van vliegen ontdekken! 🚀`
    },

    // ── HETE LUCHTBALLON ──────────────────────────────────────────────────────
    balloon: {
      keywords: [
        'ballon', 'hete luchtballon', 'ballon', 'hete lucht', 'montgolfière',
        'ballonrit', 'ballonervaring', 'ballonvlucht', 'ballonpartner',
        'andere activiteiten', 'wat anders', 'nog iets anders', 'andere ervaringen',
        'ander dingen', 'wat bieden jullie nog', 'ander avonturen',
        'buitenervaringen', 'scenic vlucht', 'ballonvaart',
        'ballonvaarervaring', 'ballonritervaring'
      ],
      response: () => `**Hete Luchtballon Ervaringen** 🎈\n\nLuxfly heeft samengewerkt met een topoperator voor hete luchtballonnen!\n\n💶 **€180–€250 per persoon**\n📅 Seizoen: **April – Oktober**\n📍 Vertrekpunt vanuit de Luxemburg/België regio\n\nEen magisch aanvulling op indoor skydiving, of een mooie zelfstandige gift voor iemand bijzonders! 🌄\n\nVoor details en boekingen:\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
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
    return /^(hallo|hoi|dag|goedemorgen|goedemiddag|goedenavond|hey|hi|goeiendag|hé|goedendag|morgen|middag|avond|welkom|hé|allo|moin)[\s!.?,]*$/i.test(text.trim());
  }

  function isThanks(text) {
    return /\b(dank je|dankjewel|bedankt|dank u|super|geweldig|fantastisch|perfect|top|prima|uitstekend|mooi|goed|hartelijk dank)\b/i.test(text) &&
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
    "Hey! 👋 Ik ben Zoom, de Luxfly-assistent. Stel me gerust vragen — prijzen, uren, boeken, kinderen, locatie en meer!",
    "Hoi! 😊 Welkom bij Luxfly. Wat kan ik je vandaag helpen?",
    "Hallo! Klaar om over indoor skydiving te praten? 🌬️ Wat wil je weten?",
    "Hoi daar! Ik ben Zoom ✈️ — je Luxfly gids. Prijzen, pakketten, gezondheidsvragen, routeaanwijzingen — vuur los!"
  ];
  const replies = [
    "Graag gedaan! 😊 Kan ik je nog ergens anders mee helpen?",
    "Blij om te helpen! 🙌 Voel je vrij om meer vragen te stellen.",
    "Uiteraard! Zeg het me als je nog meer vragen hebt. 😄",
    "Geen probleem! Is er nog iets anders wat je wil weten? ✈️"
  ];
  const fallbacks = [
    "Ik ben Luxfly's chatbot, dus ik kan alleen helpen met vragen over indoor skydiving! 🪂\n\nProbeer te vragen over:\n💰 **Prijzen** · ⏰ **Uren** · 📍 **Locatie** · 📅 **Boeken** · 🎂 **Verjaardagen**\n👨‍👩‍👧 **Groepen** · 🏅 **Ervaring** · 👕 **Wat aantrekken** · 🎟️ **Cadeaubonnen** · 💼 **Banen**\n\nOf bereik ons team: 📞 **+32 63 39 11 63** | 💬 **WhatsApp: +32 477 528 566** 😊",
    "Dat valt buiten mijn bereik! Ik ben alleen ingesteld om Luxfly-vragen te beantwoorden. 🪂\n\nVoor verder vragen kan ons team je helpen:\n📞 **+32 63 39 11 63** | 📧 **info@luxfly.lu**\n\nOf vraag me naar prijzen, boeken, uren, verjaardagen of uitrusting!",
    "Ik wil zeker dat je het juiste antwoord krijgt — neem rechtstreeks contact op met ons team:\n📞 **+32 63 39 11 63** | 💬 **WhatsApp: +32 477 528 566**\n\nIk kan je helpen met vragen over prijzen, pakketten, boeken, gezondheid, uren, locatie en meer! 😊"
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
      border-radius: 10px; color: #fff; font-size: 16px; font-family: 'Inter',sans-serif; touch-action: manipulation;
      padding: 9px 13px; outline: none; resize: none; line-height: 1.4;
      max-height: 80px; transition: border-color 0.2s;
    }
    #lf-chat-input::placeholder { color: rgba(255,255,255,0.3); font-size: 14px; }
    #lf-chat-input:focus { border-color: rgba(240,44,184,0.5); }
    #lf-chat-send {
      width: 38px; height: 38px; border-radius: 10px; background: #f02cb8; border: none;
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; align-self: flex-end; transition: opacity 0.2s, transform 0.15s;
    }
    #lf-chat-send:hover { opacity: 0.85; transform: scale(1.05); }
    /* Touch devices: no-scale animation prevents Safari zoom */
    @media (hover: none) and (pointer: coarse) {
      #lf-chat-window {
        transform: translateY(24px);
        transition: transform 0.28s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.22s;
      }
      #lf-chat-window.open { transform: translateY(0); }
      #lf-chat-window, #lf-chat-btn { touch-action: pan-x pan-y; }
    }
    @media (max-width: 480px) {
      #lf-chat-window { right: 12px; bottom: 90px; width: calc(100vw - 24px); }
      #lf-chat-btn { bottom: 20px; right: 16px; }
    }

    /* ── Attention bubble ──────────────────────────────────────────── */
    #lf-chat-bubble {
      position: fixed; bottom: 96px; right: 16px; z-index: 9998;
      background: #f02cb8; color: #fff;
      padding: 9px 15px; border-radius: 18px 18px 4px 18px;
      font-size: 13px; font-weight: 600; line-height: 1.3;
      font-family: 'Montserrat','Inter',sans-serif;
      box-shadow: 0 4px 20px rgba(240,44,184,0.45);
      white-space: nowrap; cursor: pointer;
      animation: lf-bubble-in 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    }
    #lf-chat-bubble::after {
      content: ''; position: absolute; bottom: -7px; right: 20px;
      width: 0; height: 0;
      border-left: 7px solid transparent;
      border-right: 4px solid transparent;
      border-top: 8px solid #f02cb8;
    }
    @keyframes lf-bubble-in {
      from { opacity: 0; transform: translateY(14px) scale(0.9); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    .lf-bubble-out {
      animation: lf-bubble-out 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards !important;
    }
    @keyframes lf-bubble-out {
      from { opacity: 1; transform: translateY(0) scale(1); }
      to   { opacity: 0; transform: translateY(14px) scale(0.9); }
    }
  `;

  // ─── DOM Setup & Initialization ────────────────────────────────────────────
  if (document.readyState !== 'loading') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

  function init() {
    // Insert CSS
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // Create HTML
    const wrapper = document.createElement('div');
    wrapper.id = 'lf-chat-wrapper';

    // Chat button
    const btn = document.createElement('button');
    btn.id = 'lf-chat-btn';
    btn.innerHTML = '<svg viewBox="0 0 24 24" style="width:28px;height:28px;fill:white"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2.6 20.4c-.33.8.2 1.69 1 1.69.2 0 .39-.04.59-.12l4.11-1.37C9 21.64 10.5 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.41 0-2.73-.36-3.88-1L5 20l1-3.12C4.36 14.73 4 13.41 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/></svg>';
    btn.title = 'Luxfly Chat';
    btn.setAttribute('aria-label', 'Open Luxfly chatbot');

    const badge = document.createElement('div');
    badge.id = 'lf-chat-badge';
    badge.textContent = '1';
    btn.appendChild(badge);

    btn.addEventListener('click', () => {
      const window = document.getElementById('lf-chat-window');
      const bubble = document.getElementById('lf-chat-bubble');
      if (window) {
        window.classList.toggle('open');
        if (window.classList.contains('open')) {
          if (bubble) bubble.style.display = 'none';
          document.getElementById('lf-chat-input').focus();
        } else {
          if (bubble) bubble.style.display = 'block';
        }
      }
    });

    wrapper.appendChild(btn);

    // Chat window
    const chatWindow = document.createElement('div');
    chatWindow.id = 'lf-chat-window';

    const header = document.createElement('div');
    header.id = 'lf-chat-header';
    header.innerHTML = `
      <div id="lf-chat-header-avatar">💬</div>
      <div id="lf-chat-header-info">
        <div id="lf-chat-header-name">Zoom</div>
        <div id="lf-chat-header-status">Online · Altijd hier om u te helpen</div>
      </div>
      <button id="lf-chat-close" aria-label="Close chat">
        <svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
      </button>
    `;

    document.getElementById('lf-chat-close')?.addEventListener('click', () => {
      chatWindow.classList.remove('open');
      const bubble = document.getElementById('lf-chat-bubble');
      if (bubble) bubble.style.display = 'block';
    });

    const messages = document.createElement('div');
    messages.id = 'lf-chat-messages';

    const quick = document.createElement('div');
    quick.id = 'lf-chat-quick';
    const quickBtns = [
      { text: '💰 Prijzen', q: 'Wat zijn uw prijzen?' },
      { text: '🕐 Openingstijden', q: 'Wat zijn uw openingstijden?' },
      { text: '👦 Kinderen', q: 'Is het veilig voor kinderen?' },
      { text: '🎟️ Boeken', q: 'Hoe kan ik boeken?' },
      { text: '📍 Locatie', q: 'Waar bent u gevestigd?' },
      { text: '⭐ Aanbeveling', q: 'Welk pakket beveelt u aan?' }
    ];
    quickBtns.forEach(btn => {
      const btnEl = document.createElement('button');
      btnEl.className = 'lf-quick-btn';
      btnEl.textContent = btn.text;
      btnEl.setAttribute('data-q', btn.q);
      btnEl.addEventListener('click', () => {
        const input = document.getElementById('lf-chat-input');
        input.value = btn.q;
        input.focus();
      });
      quick.appendChild(btnEl);
    });

    const form = document.createElement('form');
    form.id = 'lf-chat-form';
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = document.getElementById('lf-chat-input');
      const msg = input.value.trim();
      if (!msg) return;

      // User message
      const userMsg = document.createElement('div');
      userMsg.className = 'lf-msg lf-msg-user';
      userMsg.textContent = msg;
      messages.appendChild(userMsg);

      input.value = '';
      messages.scrollTop = messages.scrollHeight;

      // Bot typing
      const typingMsg = document.createElement('div');
      typingMsg.className = 'lf-msg lf-msg-typing';
      typingMsg.innerHTML = '<div class="lf-dot"></div><div class="lf-dot"></div><div class="lf-dot"></div>';
      messages.appendChild(typingMsg);
      messages.scrollTop = messages.scrollHeight;

      setTimeout(() => {
        typingMsg.remove();
        const reply = getResponse(msg);
        const botMsg = document.createElement('div');
        botMsg.className = 'lf-msg lf-msg-bot';
        botMsg.innerHTML = formatResponse(reply);
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
      }, 400);
    });

    const input = document.createElement('input');
    input.id = 'lf-chat-input';
    input.type = 'text';
    input.placeholder = 'Stel me een vraag…';
    input.setAttribute('aria-label', 'Chat input');

    const send = document.createElement('button');
    send.id = 'lf-chat-send';
    send.type = 'submit';
    send.setAttribute('aria-label', 'Send message');
    send.innerHTML = '<svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:white"><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16clean47281 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.837654326,3.0486314 1.15159189,3.99021575 L3.03521743,10.4312088 C3.03521743,10.5883061 3.19218622,10.7454035 3.50612381,10.7454035 L16.6915026,11.5308905 C16.6915026,11.5308905 17.1624089,11.5308905 17.1624089,12.0021827 C17.1624089,12.4734748 16.6915026,12.4744748 16.6915026,12.4744748 Z"/></svg>';

    form.appendChild(input);
    form.appendChild(send);

    chatWindow.appendChild(header);
    chatWindow.appendChild(messages);
    chatWindow.appendChild(quick);
    chatWindow.appendChild(form);

    wrapper.appendChild(chatWindow);

    // Bubble
    const bubble = document.createElement('div');
    bubble.id = 'lf-chat-bubble';
    bubble.textContent = 'Heeft u een vraag? Stel hem hier!';
    bubble.addEventListener('click', () => {
      chatWindow.classList.add('open');
      bubble.style.display = 'none';
      document.getElementById('lf-chat-input').focus();
    });
    wrapper.appendChild(bubble);

    document.body.appendChild(wrapper);

    // Initial greeting
    setTimeout(() => {
      const greeting = greetings[0];
      const msg = document.createElement('div');
      msg.className = 'lf-msg lf-msg-bot';
      msg.innerHTML = formatResponse(greeting);
      messages.appendChild(msg);
    }, 500);
  }
})();
