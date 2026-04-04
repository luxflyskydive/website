(function () {
  'use strict';

  // ─── Knowledge Base ────────────────────────────────────────────────────────
  const KB = {

    // ── PRICES ──────────────────────────────────────────────────────────────
    prices: {
      keywords: [
        'präis', 'präisser', 'kascht', 'kaschtë', 'wéi vill', 'wéi vill kascht et',
        'wéi vill kascht et', 'paket', 'pakete', 'kostet', 'kosten',
        'tarif', 'tarife', 'taux', 'debai', 'zuel', 'zeilen', 'charge', 'bezuelen',
        'billet', 'billete', 'optioun', 'optioune', 'billeg',
        'deier', 'budget', 'grouss präis', 'grouss paket',
        'wéi vill kascht et', 'wéi eng präisser', 'wéi vill verlaange mir',
        'pricing', 'kascht pro', 'wéi vill pro', 'wéi eng präisser sidd et',
        'sot mir d\'präisser', 'weist mir präisser', 'lëschte vu paketen', 'luxcovery', 'luxensation', 'luxemotion'
      ],
      response: () => `Hei si eis Flugpakete:\n\n**👤 GROUSSEREN**\n✈️ **LUXCOVERY** — 2 Flüch (2 min): **€104,70**\n✈️ **LUXENSATION** — 2 Flüch (4 min): **€174,70**\n✈️ **LUXEMOTION** — 3 Flüch (6 min): **€236,70**\n💡 Basis-Optioun (ohne extras) ab **€65,90**\n\n**🧒 KANNER (Alter 4–12)**\n✈️ **Kanner 2 Flüch:** **€89,70**\n✈️ **Kanner 4 Flüch:** **€139,80**\n💡 Basis-Optioun ab **€45,90**\n\nAll Hauptpakete enthalen: komplett Ausrüstung, Sécherbréifing, qualifizéiert Instruktor, HighFly-Erfahrung, professionell Foto-Souvenir an **Art of Skydiving Museum**-Zougang. 🎫\n\nNet sécher wéi auswielen? Frog mech fir eng Empfehlung! 😊`
    },

    // ── RECOMMENDATION ───────────────────────────────────────────────────────
    recommend: {
      keywords: [
        'empfehlung', 'proposéieren', 'propositioun', 'beschten paket',
        'wéi paket', 'wéi paket', 'wéi sollte ech buchen', 'wéi sollte ech kréien',
        'wéi eent sollte ech', 'wéi proposéierst du', 'wéi ass beschte', 'populäirst',
        'beschte fir mech', 'beschte fir ufänger', 'beschte beim éischten Mol', 'ufänger-paket',
        'ufänger-paket', 'net sécher wéi ech buchen', 'wéi kréien', 'wéi auswielen',
        'wéi auswielen', 'wéi buchen', 'hëllf mech auswielen', 'wéi proposéierst du',
        'advice', 'rat', 'wéi machen déi meeschten Leit', 'bescht Wäert', 'gudde Wäert',
        'et lount sech', 'lount et sech', 'wéi sollte ech ufänken', 'ideal paket',
        'perfekt paket', 'passend paket', 'ech weess net wéi ech buchen'
      ],
      response: () => `**Hei ass eis Empfehlung fir éischt-Mol-Flüer:** ✈️\n\n🌟 **LUXCOVERY (2 Flüch, €104,70)** ass de perfekt Ufank — däin éischt Fluch ass fir d\'Gefill ze kréien, an de Zweeten ass wou du richteg ufänks ze fléien. Enthalt HighFly-Erfahrung an professionell Fotoen!\n\n💪 Wëlls du méi Tunnel-Zäit? **LUXENSATION (4 min, €174,70)** gëtt der bemerkbar méi Progression an ass fantastescht Wäert.\n\n🏆 **LUXEMOTION (6 min, €236,70)** — dat ultimativ Paket fir déi, déi d\'komplett Erfahrung wëllen.\n\n🧒 **Fir Kanner (4–12):** dat **2-Fluch Kanner-Paket (€89,70)** ass de perfekt Ufank!\n\nAll Hauptpakete enthalen Ausrüstung, Bréifing, Instruktor, HighFly, professionell Fotoen, an **Museum**-Zougang. 😊`
    },

    // ── KIDS ─────────────────────────────────────────────────────────────────
    kids: {
      keywords: [
        'kannerchen', 'kanner', 'kind', 'kanner', 'bréck', 'junior', 'jonk',
        'minimum Alter', 'wéi al', 'kann mäin kannerchen', 'kënne Kanner', 'fir Kanner',
        'fir Kanner', 'wéi vill fir kannerchen', 'präis fir kind', 'präis fir Kanner',
        'Famill', 'wéi jonk', 'kind', 'enfant', 'enfants', 'Alter Limitatioun',
        'Alter Restriktioun', 'mäin Säin', 'mäin Dochter', 'mäin Kind', 'al genuch',
        'Peequée', 'véier Joer', '4 Joer', '5 Joer', '6 Joer', 'kann e Kind',
        'ass et passend fir Kanner', 'kënne Bréck', 'jonkst', 'jonkst Alter',
        'ze jonk', 'sécher fir Kanner', 'sécher fir Kanner', 'Kanner sécher',
        'ass et sécher fir mäin Kind', 'Kanner erlaabst', 'Kanner erlaabst',
        'minimum Alter fir Kanner', 'wéi al kënne Kanner',
        'Kanner-Paket', 'Kanner-Pakete', 'Kind-Paket', 'Kind-Pakete',
        'wéi vill fir mäin Dochter', 'wéi vill fir mäin Säin', 'wéi vill fir mäin Kind',
        'wéi vill fir e Kind', 'wéi vill fir Kanner', 'wéi vill fir e Kannerchen',
        'präis fir mäin Dochter', 'präis fir mäin Säin', 'präis fir mäin Kind',
        '7 Joer al', '8 Joer al', '9 Joer al', '10 Joer al', '11 Joer al', '12 Joer al',
        '7 Joer', '8 Joer', '9 Joer', '10 Joer', '11 Joer', '12 Joer',
        'Joer al Kind', 'Joer al Kannerchen', 'gëtt et e Kanner-Paket', 'hutt dir Kanner-Pakete',
        'mäin Kannerchen wëll fléien', 'Kannerchen wëll fléien', 'mäin Kannerchen wëll', 'Kannerchen wëll',
        'Alter Limitatioun fir Kanner', 'Kanner Alter Limitatioun', 'gëtt et eng Alter Limitatioun fir Kanner',
        'Kind Präis', 'Kanner Präis', 'Präis fir Kanner',
        'Famill-Paket', 'Famill-Pakete',
        'Peequées', 'kënne Peequées fléien', 'Consentement Formulär', 'signéieren e Formulär', 'Consentement vun de Eltere', 'muss ech signéieren'
      ],
      response: () => `Kanner sidd super begrëss bei Luxfly! 🧒✈️\n\nMinimum Alter: **4 Joer al**. Gewicht-Range: 30–120 kg. Keng Ober-Altersgrenz.\n\nE Mamm oder legal Mamm/Papp muss ëmmer present sinn fir ënner-18 Joer Aler, an e signéiert Consentement-Formulär ass erfuerderlich.\n\nFrog mech iwwer **Kanner-Präisser** oder **Gesondheet-Ufuerderungen** wa du méi Infoen brauchst!`
    },

    // ── OPENING HOURS ────────────────────────────────────────────────────────
    hours: {
      keywords: [
        'stonn', 'stonnen', 'oppen', 'Ëffnung', 'zou', 'Fermeture', 'zou',
        'Méindeg', 'Dëschdag', 'Mëttwoch', 'Donnerschdag', 'Freideg', 'Samschdig', 'Sonndeg',
        'Weekend', 'Wochentag', 'geöffnet', 'öffnungszeiten',
        'oppen', 'Horaire', 'Horaires', 'verfügbar',
        'Ëffnungs-Zäit', 'Fermeture-Zäit', 'sidd dir oppen', 'wéni maacht dir op',
        'wéni schlèsscht du', 'wéi Zäit maacht dir op', 'wéi Zäit schlèsscht du',
        'oppen um Weekend', 'oppen um Sonndeg', 'oppen Haut', 'wéi Deeg',
        'wéi Deeg', 'wéni sidd dir oppen', 'maacht dir op', 'Féierdag',
        'Féierdag', 'Weihnachtsdag', 'Neizahrsdag', 'leschte Entrée', 'leschte Zougang', 'leschte Sessioun'
      ],
      response: () => `**Luxfly Ëffnungs-Stonnen:**\n\n📅 **Méindeg:** Zou *(oppen am 1. Méindeg vu jiddem Mound)*\n📅 **Dëschdag:** Zou\n📅 **Mëttwoch – Freideg:** 12:00 – 20:00\n📅 **Samschdig & Sonndeg:** 10:00 – 19:00\n\n⏰ Lescht Sessiounen zougelatt **90 Minuten virun Fermeture**.\n\nNouschbarung private hire ass verfügbar Mon–Thu ab 07:00 — kontaktéier eis fir Detailer.\n\nMir recommandéieren virdru ze buchen, besonnesch um Weekend. Walk-ins sidd willkomm ginn, je nach Verfügbarkeet! 🎟️`
    },

    // ── LOCATION ─────────────────────────────────────────────────────────────
    location: {
      keywords: [
        'Plazéierung', 'finn dech', 'kommen do hin', 'Direktiounen',
        'Navigéieren', 'Sterpenich', 'Arlon', 'IKEA', 'Decathlon', 'Parkplaz', 'parken',
        'Bus', 'TEC', 'Transport', 'E411', 'Autobunn', 'Schnellstrécke', 'Ausfahrt',
        'Lëtzebuerg', 'Belgien', 'Belgique', 'wou', 'Adress', 'wéi kommen ech',
        'Kaart', 'geleeën', 'nee bei', 'nächst bei',
        'mat Auto', 'mat Bus', 'Ëffentlech Transport', 'Rout de l\'Europe',
        'wéi kommen ech zu dir', 'wéi kommen ech duer', 'wou sidd dir',
        'wou sidd dir geleeën', 'wou ass Luxfly', 'finn Luxfly',
        'sidd dir einfach ze fannen', 'wéi wäit', 'wéi wäit vu Lëtzebuerg',
        'nee bei Lëtzebuerg', 'nee bei der Grenz', 'vu Lëtzebuerg Stad', 'vu Bréissel',
        'vu Arlon', 'vu Liège', 'nee bei', 'wéi nee', 'gratis Parkplaz', 'gëtt et e Parkplaz',
        'kann ech parken', 'Parkplaz verfügbar', 'ass Parkplaz gratis', 'wou ass d\'Adress', 'd\'Adress', 'komplett Adress'
      ],
      response: () => `**Rout de l\'Europe 1, 6700 Sterpenich, Belgien** 📍\n\nMat Auto: E411 Autobunn, Ausfahrt 33 (Sterpenich/Arlon). Nee bei IKEA an Decathlon — einfach ze fannen. 80+ gratis Parkplaz op Plaz.\n\nNur e puer Minutten vu der Lëtzebuerg Grenz.`
    },

    // ── BOOKING / CANCELLATION ───────────────────────────────────────────────
    booking: {
      keywords: [
        'buchen', 'Buchung', 'reservéieren', 'Reservatioun', 'annulléieren', 'Annulatioun',
        'Rëckëmboursement', 'Walk-in', 'Walk-ins', 'ouni Buchung', 'Online', 'Rendez-vous',
        'Slot', 'Verfügbarkeet', 'ëmbuchen', 'ëmplanen', 'opschuben', 'Deponirun',
        'Bezuelung', 'Online Bezuelung', 'buchen', 'réserver', 'annuler', 'rembourser',
        'Vorbezuelung', 'Leschtstënn', 'Sëlwechdag', 'Polisa', 'Bedengen', 'Bedengen',
        'muss ech buchen', 'muss ech buchen', 'kann ech just komm', 'kann ech komm',
        'kann ech just erscheinen', 'just erscheinen', 'kann ech komm ouni Buchung',
        'brauch ech eng Reservatioun', 'bezuel viraus', 'bezuel um Dag',
        'Bezuelung Methode', 'bezuel mat Kaart', 'bezuel mat Kash', 'Kredditkart',
        'Debétkaart', 'Kash', 'wéi bezuelen ech', 'wéi bezuelen', 'wéi buchen',
        'kann ech Online buchen', 'buchen iwwer d\'Telefon', 'buchen iwwer Telefon',
        'gëtt et Verfügbarkeet', 'wéi kann ech komm', 'éischt komm éischt servéiert',
        'bezuel Kash', 'bezuel mat Kash', 'Kredditkarten', 'Debétkarten',
        'akzeptéierst du Kash', 'akzeptéierst du Kaarten', 'Bezuelung Methoden'
      ],
      response: () => `Buchen Online op **shop.indoorskydive.lu** oder Telefonéier **+32 63 39 11 63**.\n\nWalk-ins sidd willkomm awer Vorbuchung ass strang recommandéiert, besonnesch um Weekend. Gruppen vun 5+ sollten op d\'mannst 48 Stonne viraus buchen.\n\nVolständeg Bezuelung erfuerderlich bei Buchung. Annullatiounen mat **48+ Stonne Notioun** kréien volle Rëckëmboursung oder gratis Ëmplanung. Caddo-Bongë akzeptéiert.`
    },

    // ── BIRTHDAY ─────────────────────────────────────────────────────────────
    birthday: {
      keywords: [
        'Gebuersdag', 'Anniversaire', 'Geburtstag', 'Gebuersdag Party', 'feieren',
        'Celebratioun', 'speziell Okkasioun', 'Iwwerraschung', 'Gebuersdag Mound', 'B-Day',
        'Happy Gebuersdag', 'Gebuersdag Idée', 'Gebuersdag Kaddo', 'Party Idée',
        'Spéziell Dag', 'Gebuersdag Remise', 'Gebuersdag Deal', 'Gebuersdag Offer',
        'fir mäin Gebuersdag', 'et ass mäin Gebuersdag', 'Gebuersdag Treat', 'Treat mech selwer',
        'Gebuersdag Erfahrung', 'uniqu Kaddo', 'Kaddo Idée', 'Präischt Idée',
        'eppes Spezialë', 'feieren Gebuersdag',
        'Gebuersdag Paket', 'Gebuersdag Pakete', 'hutt dir Gebuersdag Pakete',
        'Gebuersdag Add-ons', 'Gebuersdag Optioune'
      ],
      response: () => `🎂 Fléi während däin Gebuersdag Mound an kréi **10% Remise** op däin Paket — just mënsch et beim Buchen!\n\nGrupp Gebuersdag Pakete sinn verfügbar mat verschiddene Add-ons (Galérie, Fotoen, Décoratioun). Fir eng Custom Quote:\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── GROUPS / BACHELOR / CORPORATE ────────────────────────────────────────
    groups: {
      keywords: [
        'Grupp', 'Gruppen', 'Ekipp', 'Ekipp Building', 'Betrib', 'Kompanie',
        'Kollegen', 'Bachelor', 'Bachelor Party', 'Hen Party', 'Bachelorette',
        'Stag', 'Stag Do', 'Büro', 'Frënn', 'grouss Grupp', 'grouss Grupp',
        'Associatioun', 'Schoul', 'Klasstrëpp', 'Incentive', 'groupe', 'entreprise',
        'evjf', 'enterrement de vie', 'mannschaft', 'firmen', 'pro Persoun',
        'Grupp Rate', 'Grupp Präis', 'Grupp Remise', 'Grupp Buchung',
        'privat Event', 'privat Hire', 'exclusiv Hire', 'privat Sessioun',
        'Miete de Tunnel', 'Hire de Tunnel', 'Buchen fir eng Grupp',
        'Buchen fir mäin Ekipp', 'Aarbechts Event', 'Aarbechts Outing', 'Büro Outing',
        'Betrib Event', 'wéi vill Leit', 'grouss Grupp Remise',
        'mir sidd eng Grupp vu', 'et ginn', 'Leit kommen', 'wéi vill fir eng Grupp',
        'Grupp vu Frënn', 'Grupp vu Kollegen', 'Grupp Deal',
        'evg', 'evjf', 'junggesellenabschied', 'enterrement de vie de garcon',
        'hen do', 'hen dos', 'hen night', 'bachelor night', 'going to be', 'party of',
        'Grupp Rates', 'Grupp Rate Präis', 'wéi vill sidd Grupp Rates',
        'wéi vill fir eng Hen Party', 'hen party Präis', 'Präis fir hen party',
        'wéi vill fir hen', 'wéi vill fir 20 Leit', 'wéi vill fir 10 Leit',
        'wéi vill fir 15 Leit', 'wéi vill fir 30 Leit', 'wéi vill fir 50 Leit',
        'wéi vill fir eng Grupp', 'Präis fir eng Grupp', 'Kascht fir eng Grupp',
        'Buchen fir eis Kompanie', 'Buchen fir d\'Kompanie', 'Buchen fir mäin Kompanie',
        'Kompanie Outing', 'komplett Kompanie', 'ganz Kompanie', 'all mäin Kollegen',
        'Buchen fir eis Ekipp', 'Buchen fir d\'ganz Ekipp', 'Grupp Buchung Präis', 'Grupp Paket', 'Grupp Pakete',
        'Leit', 'eng Party vu', 'mir sidd eng Party vu',
        'Remise fir Gruppen', 'gëtt et eng Remise fir Gruppen', 'Grupp Remise'
      ],
      response: () => `**Grupp Rates (pro Minutt Flugzäit):**\n👥 2–9 Leit: **€35/min**\n👥 10–19 Leit: **€31,50/min** (10% off)\n👥 20–49 Leit: **€29,75/min** (15% off)\n👥 50–99 Leit: **€28/min** (20% off)\n👥 100+: Custom Quote\n\nGrupp Remises fangen un ab 10 Leit. Eng 30% Deponirun séchert däin Datum. Buchung erfuerderlich op d\'mannst 7 Deeg viraus.\n\nFir Bachelor/Hen Parties oder Ekipp Building Events, kontaktéier eis fir e tailored Paket:\n📧 events@luxfly.lu | 📞 +32 63 39 11 63`
    },

    // ── EXPERIENCE / WHAT IS IT ──────────────────────────────────────────────
    experience: {
      keywords: [
        'Erfahrung', 'brauch Erfahrung', 'éischten Mol', 'Ufänger', 'ni gemaach',
        'Indoor Skydiving', 'Wind Tunnel', 'wéi ass et', 'wéi ass Indoor Skydiving',
        'wéi funktionéiert et', 'Gefill', 'ass et Gefill', 'wéi ass et Gefill',
        'wéi ass et Gefill', 'Skédnëck', 'schwierig', 'schéier', 'einfach',
        'Skydiving', 'Skydive', 'Erfahrung', 'Éischt Mol', 'Ufänger', 'Novice',
        'nervéis', 'Angscht', 'Intimidéierend', 'ni gefloen', 'Bodyflight', 'Freefall',
        'Schwewen', 'ech wëll fléien', 'wëll fléien', 'Fléien', 'probéieren',
        'Sensatioun', 'Adrenalin', 'spannend', 'thrilling', 'Spaass',
        'wäert ech Angscht kréien', 'ass et terrifying', 'wäert ech Angscht kréien',
        'wéi wa ech Angscht kréien', 'wäert ech Schwindel kréien', 'Schwindel', 'Übelkeet', 'Krankheet',
        'wäert ech sech seck fillen', 'Motion Sickness', 'ass et wéi real Skydiving',
        'vergläich mat real Skydiving', 'ähnlech wéi Skydiving', 'Ënnerscheed vu Skydiving',
        'ass et denwert', 'ass et outdoers', 'Indoor', 'Outdoor', 'Bausscht', 'Denwert',
        'wéi geschitt', 'wéi füelt et sech Fléien', 'beschreif dat Gefill',
        'sot mir üwer d\'Erfahrung', 'wéi ass Bodyflight', 'wéi ass e Wind Tunnel',
        'muss ech fit sinn', 'wéi fit', 'Fitness erfuerderlich', 'Physesch Demand',
        'brauch ech Stäerkt', 'kënne Neit-Fit Leit fléien', 'ass et ermidend',
        'wéi sécher ass et', 'ass et geféierlich', 'Geféier', 'Risiko', 'sécher Aktivitéit',
        'wéi eng Risiken', 'Accident', 'Injury Risiko', 'Protektioun',
        'ass et sécher', 'ass et komplett sécher', 'wéi sécher ass et', 'ass Luxfly sécher',
        'ass et eng sécher Aktivitéit', 'sécher ze maachen',
        'Ufängers', 'passend fir Ufängers', 'gud fir Ufängers',
        'wéi funktionéiert de Wind Tunnel', 'wéi funktionéiert Indoor Skydiving'
      ],
      response: () => `Indoor Skydiving rekreaéiert d\'Gefill vu Freefall an e vertikal Wind Tunnel — du schwebst op eng Spallt vu Loft op bis zu **160 km/h**, komplett denwert onofhängeg vu Wieder.\n\nKeng Erfahrung oder Fitness erfuerderlich. Däin Instruktor ass am ganze Tunnel mat dir. Passend fir Alter 4 an ëp (30–120 kg).\n\nKomplett Ausrüstung an Sécherbréifing enthalt mat jidder Paket.`
    },

    // ── GEAR / WHAT TO WEAR ──────────────────────────────────────────────────
    gear: {
      keywords: [
        'Dréi', 'Bréng', 'Ausrüstung', 'Gear', 'Enthalt', 'Helmet', 'Jumpsuit',
        'Suit', 'Schong', 'Kleedung', 'Kleedung', 'wéi dréi ech', 'wéi soll ech dréien',
        'Outfit', 'Dréi', 'Schmuck', 'Schmuck', 'Brélle', 'Kontakt',
        'Kontakt Linse', 'Accessoïr', 'Provision', 'Ausrüstung', 'Kleedung',
        'Tenues', 'Équipement', 'Brille', 'Earplugs', 'Flugsuit', 'wéi dréi',
        'wéi brauch ech', 'wéi soll ech Bréng', 'brauch ech eppes Bréng',
        'ass Ausrüstung Provision', 'ass Gear Enthalt', 'wéi ass Provision',
        'wéi ass Enthalt', 'wéi brauch ech', 'brauch ech Bréng', 'wéi ze Préparéieren',
        'Préparéieren fir mäin Visit', 'wéi soll ech Préparéieren', 'wéi dréi Ënnert',
        'kann ech Brélle dréien', 'kann ech Schmuck dréien', 'kann ech Schmuck dréien',
        'kann ech e Ring dréien', 'Laang Hoer', 'Hoer', 'Hoer-Bande', 'Piercings', 'Piercing',
        'kann ech Kontakt dréien', 'Barefuss', 'Schnüür', 'Sneaker', 'Trainer',
        'wéi Schong', 'Flip Flops', 'Sandal', 'Heels', 'Stiefel', 'Lockers', 'Locker'
      ],
      response: () => `**Alles ass provision — just komm op!** 🎽\n\n**Enthalt an däin Paket:**\n✅ Flugsuit (Jumpsuit)\n✅ Helmet\n✅ Brille\n✅ Earplugs\n\n**Dréi ënner:**\n👟 Komfortable, sportlech Kleedung (keng Röck/Kleedung)\n👟 Schnüür-Trainer oder Sportschong — keng Sandal, Heels, oder Slip-ons!\n\n**Bëtt Läischt/Laascht Bak:**\n❌ Schmuck, Wäre, Ringe, Ouer-Ringe, Piercings wa méiglech\n❌ Scarven, Geldes, oder lous Accessoïr\n👓 **Brélle:** du kanns se behalen — mir hunn Iwwer-Brille, déi iwwer Bréll passen!\n\n💇 Laang Hoer? Bind et zréck — mir arrangéieren et ënner däin Helmet.\n\n🗝️ Lockers sinn verfügbar op Plaz fir däin Possession. Bis baud am Tunnel! 🌬️`
    },

    // ── SPECTATORS ───────────────────────────────────────────────────────────
    spectators: {
      keywords: [
        'Kierch', 'Kierchung', 'Spectator', 'Spectators', 'Kierchung', 'Kierchung Zougang',
        'kann mäin Frënd', 'kann mäin Famill', 'Film', 'Film mäin Frënd', 'Fotograf',
        'Foto', 'Video', 'Kamera', 'Fotoen', 'Footage', 'Kierchen', 'Cheers',
        'Publique', 'Support', 'Famill', 'Frënn', 'Kierchen', 'Zuschauer',
        'Frënn kommen', 'kommen Kierchen', 'kommen Kierchen', 'Bréng Frënn', 'Neit-Flüer',
        'neit fléien', 'just Kierchen', 'Galerie', 'Fotograf Paket',
        'kann eppes komm mat mech', 'kann mäin Partner Kierchen', 'kann mäin Eltere Kierchen',
        'kann mäin Husbandchen Kierchen', 'kann mäin Fra Kierchen', 'kann mäin Partner komm',
        'gratis fir Spectators', 'Entrée fir Spectators', 'ass et gratis Kierchen',
        'kënne Neit-Flüers komm', 'kënne neit flüers', 'just komm an Kierchen',
        'gëtt et eng Kierchung Zougang', 'gesee duerch', 'Glas',
        'wéi kréi ech Fotoen', 'kann ech Film', 'kann ech Fotoen', 'kann ech Record',
        'professionell Fotoen', 'Fotoen vu mäin Fluch', 'Video vu mäin Fluch',
        'Rekord mäin Fluch', 'Film mäin Fluch', 'wéi kréi Footage'
      ],
      response: () => `**Frënn & Famill sidd super willkomm komm vir!** 📸👀\n\n🏟️ **Dedicéiert Kierchung Galérie** mat klor Glas Paneele — Spectators kréien e perfekt Kierchung vu alles am Tunnel.\n\n📷 **Fotoen & Video:**\n- Spectators kënne frei fotograféieren an Filmen vu der Galérie\n- Professionell **Fotograf/Video Pakete** verfügbar — Spréi bei Réception!\n- Am-Tunnel Kameren Capture onkredibel Footage\n\n🎟️ **Entrée fir Spectators ass GRATIS** — keng Billet erfuerderlich.\n\n🏛️ All Pakete enthalen **Art of Skydiving Museum** Zougang, sou datt Neit-Flüers vill ze geniessen hunn während Warten! ✈️`
    },

    // ── DURATION / TIMING ────────────────────────────────────────────────────
    duration: {
      keywords: [
        'wéi Laang', 'Dauer', 'Ankommen', 'Ankommen', 'Check In', 'Check-In',
        'Total Zäit', 'Visit', 'Laang ass d\'Visit', 'wéi vill Zäit', 'Minutten',
        'Sekonnen', 'Flugzäit', 'wéni komm', 'wéi Früh', 'Laang dauert et',
        'Flug Dauer', 'wéi Laang', 'combien de temps', 'Durée', 'Laang ass e Fluch',
        'jidder Fluch', 'pro Fluch', 'wéi vill Minutten', 'Planen mäin Visit',
        'wéi Laang wäert ech Dort sinn', 'wéi Laang dauert eng Visit', 'wéi Laang ass et',
        'wéi Zäit soll ech komm', 'wéi Zäit soll ech Dort komm',
        'wéi Früh soll ech komm', 'brauch ech Früh komm',
        'wéi vill Zäit soll ech Reserve', 'wéi Laang fir dat Ganz',
        'si ech Spéit', 'wéi wa ech Spéit', 'wa ech Spéit', 'Laanchéck Laang',
        'Laang ass jidder Fluch', 'wéi Laang ass 1 Fluch', 'wéi Laang ass een Fluch',
        'wéi Laang am Ganz', 'wéi Laang ass d\'Sessioun', 'wéi Laang ass eng Sessioun',
        '60 Sekonnen', '1 Minutt', 'Fluch Laang'
      ],
      response: () => `Komm **60 Minutten virun** däin Fluchzäit fir Check-In, Kit-up, an Sécherbréifing.\n\nJidder Fluch ass **60 Sekonnen** vu Tunnel Zäit. Total Visit ass bal **2 Stonnen** an Béi briffing an Museum.\n\nLaanchéck Laang? Ruff eis: **+32 63 39 11 63**`
    },

    // ── HEALTH / AGE / RESTRICTIONS ──────────────────────────────────────────
    health: {
      keywords: [
        'Schwanger', 'Schwangerschaft', 'Häerz Konditioun', 'Häerz Probleem', 'Epilepsie',
        'Medizynesch', 'Gesondheet', 'Behënnerung', 'Behënnert', 'Réck Probleem', 'Réck Pein',
        'Häls Probleem', 'Häls Pein', 'Injury', 'Injuréiert', 'Operatioun', 'Chirurgie',
        'Asthma', 'Pacemaker', 'Gewicht Limitatioun', 'Maximum Gewicht', 'Minimum Gewicht',
        'kg', 'Kilos', 'Restrictioune', 'Sécher', 'kann ech fléien', 'Gesondheet Konditioun',
        'Santé', 'Gesundheit', 'Enceinte', 'Schwanger', 'Héich Bluttdrock',
        'Hypertensoun', 'Medicament', 'Rollstull', 'Kontraindikatioun',
        'Oldest', 'Oldest Persoun', 'Maximum Alter', 'Uewe Alters Limitatioun', 'Alter Restrictioune',
        'Alter Limitatioun fir Grousseren', 'wéi al kanns du sinn', 'ze al', 'si ech ze al',
        'Senior', 'Seniore', 'Ältere', 'Pensiounär', 'Pensiounäre', 'Pensiounéiert',
        'Grosseltere', 'Grosseltere', 'Granny', 'Grossmamm', 'Grosspapp',
        'Grosspapp', 'Grossmamm', 'Ältere Persoun', 'Ältere Leit',
        'kann eng al Persoun fléien', 'kënne al Leit fléien', 'kënne Seniore fléien',
        'Ältere Leit', 'kënne Ältere Leit fléien', 'Ältere Persoun',
        'gëtt et eng Alter Limitatioun', 'uewe Alter', 'wéi ass d\'Alter Limitatioun',
        'wéi al ass ze al', '60 Joer al', '70 Joer al', '80 Joer al',
        '90 Joer al', 'iwwer 60', 'iwwer 70', 'iwwer 80', 'iwwer 50',
        'Iwwwergewicht', 'ze schwéier', 'ze Liicht', 'Gewicht Restrictioune',
        'wéi schwéier', 'wéi vill kann ech Gewicht', 'Gewicht Erfuerderung',
        'bmi', 'Fett', 'Fetthäit', 'ze fett', 'ze dënn',
        'Häerz Rate', 'Bluttdrock',
        'kann ech fléien wa ech', 'Erlaabst ze fléien', 'Unfit ze fléien', 'Fit ze fléien',
        'eng Drank gedronk', 'eng Drank gedronk', 'Beronken', 'Alkohol', 'Hangover', 'Hangover',
        'Schlecht Réck', 'hunn eng schlecht Réck', 'Schlecht Réck Probleem', 'Schlecht Häls', 'Réck Injury',
        'Häls Injury', 'Verschubener Schutt', 'Herniated Schutt', 'Spinal Probleem', 'Spine Probléem'
      ],
      response: () => `**Alter:** Minimum **4 Joer al** — keng Ober Alter Limitatioun (mir fléien Gäscht bis 95!).\n**Gewicht:** 30–120 kg.\n\nPlease fléi net wa du Schwanger, eng ernst Häerz Konditioun oder Pacemaker, Epilepsie, eng rezent Chirurgie oder Injury, Unkontrolléiert Héich Bluttdrock, oder du Alkohol gedronk hunn.\n\nUnsicher? Konsultéier däin Doktor éischt, an lass eis am Buchen Wëssen — mir fannen ëmmer d\'beschte Léisung. 💙\n📞 +32 63 39 11 63`
    },

    // ── CONTACT ──────────────────────────────────────────────────────────────
    contact: {
      keywords: [
        'Kontakt', 'E-Mail', 'Telefon', 'Ruffen', 'Spriechen mat', 'Kontakt kréien', 'Erreech',
        'WhatsApp', 'Message', 'Chat', 'Spriechen mat', 'Kundenservice', 'Support',
        'Hëllef', 'Enquête', 'Enquiry', 'Kontakt', 'Telefon', 'Contactez', 'Téléphone',
        'Joindre', 'Kontakt Aaner', 'Wéi kréi ech Kontakt', 'Presse', 'Medien', 'Instagram', 'Facebook',
        'Nummer', 'Telefon', 'Sozial Medien', 'Wéi Kontakt', 'Spriechen mat eppes',
        'kann ech dir Ruffen', 'hutt dir eng Telefon Nummer', 'wéi ass d\'E-Mail', 'E-Mail Adress', 'wéi ass d\'E-Mail Adress', 'Kontakt iwwer E-Mail',
        'wéi ass däin Telefon Nummer', 'wéi kann ech dir Erreech', 'gëtt et eng Nummer',
        'Kundenservice', 'Plainte', 'Feedback', 'Gitt mir Äntwert',
        'Äntwert mir', 'wéni wäers du äntwert', 'Äntwert Zäit',
        'Spriechen mat eppes', 'Spriechen mat eppes', 'Spriechen mat eppes',
        'Spriechen mat eppes', 'Spriechen mat eppes richteg', 'Live Chat',
        'wéi ass däin whatsapp', 'hutt dir WhatsApp'
      ],
      response: () => `📞 **Telefon:** +32 63 39 11 63\n💬 **WhatsApp:** +32 477 528 566\n📧 **E-Mail:** info@luxfly.lu\n🌐 **Website:** luxfly.lu\n\n🏠 Rout de l\'Europe 1, 6700 Sterpenich, Belgien`
    },

    // ── PROMOTIONS / DISCOUNTS ───────────────────────────────────────────────
    promo: {
      keywords: [
        'Promo', 'Promotioun', 'Promotioune', 'Remise', 'Bong', 'Kod',
        'Deal', 'Speziell Offer', 'Schüler', 'Militär', 'Reduzéieren',
        'Reduktioun', 'Spueren', 'Billeier', 'Spuering', 'Fréijoer', 'spring26',
        'group15', 'Bréng e Frënd', 'Gebuersdag Mound', 'rabatt', 'Réductioun',
        'Offre', 'Bon De Réductioun', 'Aktuell Offers', 'Epkes Deals', 'Verkaaf',
        'Promotioun Kod', 'Promo Kod', 'Remise Kod', 'Schüler Remise',
        'hutt dir eng Remise', 'gëtt et eng Remise', 'Epkes Remisen',
        'Epkes Offers', 'Wéi Promotioune', 'Aktuell Promotioune',
        'Schüler Kaart', 'Schüler ID', 'Militär Remise', 'Wéi kann ech Spueren',
        'gëtt et eng billeier Wee', 'Loyalitäts Remise', 'Epkes Koden',
        'hutt dir Promotioune', 'gëtt et Deals', 'hutt dir Deals',
        'Deals', 'Aktuell Deals', 'Epkes Aktuell Deals',
        'Spueringen', 'Epkes Spueringen', 'gëtt et Spueringen',
        'Billeier Rate', 'Billeier Optioun', 'Billeier Präis',
        'Speziell Offers', 'Epkes Speziell Offers', 'Aktuell Speziell Offers'
      ],
      response: () => `**Aktuell Promotioune bei Luxfly** 🎉\n\n🌸 **SPRING26** — **15% Remise op Är éischt LUXCOVERY oder LUXENSATION Buchung**! Valid bis **30. April 2026**. Benotzung Kod **SPRING26** bei Checkout.\n\n👥 **GROUP15** — Zousätzlech **5% off** op Grupp Rates fir 10+ Leit. Kod: **GROUP15**.\n\n🎂 **Gebuersdag Mound** — Fléi an däin Gebuersdag Mound fir **10% off**. Just mënsch et beim Buchen!\n\n🎓 **Schüler Remise** — Weiss eng valid Schüler ID fir **10% off**.\n\n👫 **Bréng e Frënd** — Referer eng Éischt-Mol Visiteur an béid vun iech kréien eng Belohnung! Frog eis Ekipp fir Detailer.\n\n⚠️ Remisen kënne net kombinéiert ginn. Bedengen gëllt.`
    },

    // ── GIFT VOUCHERS ────────────────────────────────────────────────────────
    voucher: {
      keywords: [
        'Bong', 'Kaddo Kaart', 'Kaddo Bong', 'Kaufen fir epkes', 'Kaddo',
        'Präischt', 'Cadeau', 'Bon Cadeau', 'Geschenk', 'Gutschein',
        'Gëb als Kaddo', 'Epkes Aaner', 'Iwwerraschung', 'Kaufen Bong',
        'Kaufen eng Bong', 'Bong Valid', 'Validitéit', 'Expire', 'Renew',
        'Renewal', 'Transfer', 'Transferabel', 'Nominativ', 'Refund Bong',
        'Fir e Frënd', 'Weihnachts Kaddo', 'Gebuersdag Kaddo', 'Anniversaire Kaddo',
        'kann ech eng Kaddo Kaufen', 'Kaufen als Kaddo', 'Kaddo Gëbung', 'Treat Epkes',
        'Treat e Frënd', 'Treat mäin Partner', 'Kaufen fir mäin Partner',
        'Kaufen fir mäin Frënd', 'Kaufen fir mäin Famill', 'Wéi Laang ass eng Bong Valid',
        'Deet d\'Bong Expire', 'Wéi Laang hunn ech', 'Benotzung mäin Bong',
        'Wéi Benotz ech mäin Bong', 'Redeem Bong', 'Bong Kod',
        'Benotz eng Bong', 'Benotz mäin Bong Online', 'Bong Online', 'Bong bei Checkout',
        'Apply Bong', 'Aart mäin Bong', 'Aart Mäin Bong', 'Benotz d\'Bong',
        'kann ech eng Bong Benotz', 'Benotz eng Kaddo Bong', 'Redeem eng Bong', 'Redeem Kaddo Bong',
        'Wéi Laang dauert eng Bong', 'Wéi Laang ass eng Bong', 'Bong Lascht',
        'Wéi Laang dauert eng Kaddo Bong'
      ],
      response: () => `**Luxfly Kaddo Bongë — d\'perfekt Kaddo!** 🎁\n\n🛒 Kaufen Online op **luxfly.lu** oder am Réception.\n\n**Bong Detailer:**\n📅 Valid fir **12 Mound** vu Kaaf Datum\n🔄 Renewable fir eng zousätzlech **3 Mound** (eent Renewal pro Bong)\n👤 **Net nominativ** — benutzbar vu Jeekengem, net nëmme de Benennung Empfänger\n💸 Neit-Refundabel eemol Kaf\n✅ Redeemabel géint jidder Fluch Paket oder Add-on\n\nD\'perfekt Gebuersdag, Weihnachts, oder Anniversaire Kaddo — wer wëll neit fléien? 💝\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── PRO FLYING / COACHING ────────────────────────────────────────────────
    pro: {
      keywords: [
        'Pro', 'Professionell', 'Pro Fléien', 'Konkurrenz', 'Coaching',
        'Advanced', 'Training', 'Athlet', 'Tunnel Zäit', 'Block Zäit',
        'Dedicéiert Sessioun', 'Freestyle', 'Formatioun', 'Freefly', 'Dynamic',
        'Konkurrenz', 'Tunnel Rat', 'Entraînement', 'Professionnel',
        'Compétition', 'Coached Sessioun', 'Skillse', 'Progressioun', 'Coach Zäit',
        'Shared Sessioun', 'Shared Pro', 'Pro Sessioun', 'Block Stonnen',
        'ech weess schonn wéi ze fléien', 'ech si e experienced Flüer', 'Experienced Flüer',
        'ech fléi schonn', 'kann ech Tunnel Zäit buchen', 'Buchen Tunnel Zäit',
        'Kaufen Tunnel Zäit', 'Rent Tunnel Zäit', 'Solo Sessioun', 'Coaching Sessioun',
        'Wind Tunnel Coaching', 'Verbesseren mäi Skillse', 'Verbesseren mäi Fléien',
        'Nimm mäi Fléien Wäiter', 'Advanced Training', 'Konkurrenz Training',
        'Head Down', 'Sit Fléien', 'Belly Fléien', 'VFS', 'Dynamic Fléien',
        'Offer Coaching', 'Hutt dir Coaching', 'Hutt dir Coaching',
        'Coaching Sessiounen', 'Coaching Verfügbar', 'Kréi Coaching', 'Buchen Coaching',
        'Personal Coaching', 'Eent ze Eent Coaching', 'Eent-zu-Eent Coaching',
        'Kréi e Coach', 'Hire e Coach', 'Wind Tunnel Coaching Sessiounen',
        'Wéi vill fir Block Zäit', 'Block Zäit Präis', 'Block Zäit Kascht',
        'Head-Down Fléien', 'Headdown Fléien', 'Head Down Fléien',
        'Train am Tunnel', 'Train am Tunnel', 'Training am Tunnel',
        'Advanced Fléien', 'Advanced Sessiounen', 'Advanced Fléien Sessiounen',
        'Formatioun Fléien', 'Fléien Practice', 'Formatioun Fléien Practice'
      ],
      response: () => `**Block Zäit (Dedicéiert Tunnel):** 1 Hr €180 · 5 Hrs €840 · 10 Hrs €1.560 · 20 Hrs €2.880\n\n**Shared Pro Sessiounen:** €55/Sessioun · 5 fir €240 · 10 fir €420\nSchedul: Mon, Wed, Fri, Sat & Sun.\n\nDiscipline: Belly · Sit Fléi · Head-Down · Freestyle · Formatioun.\n📧 info@luxfly.lu fir Coaching Enquêtes`
    },

    // ── MUSEUM ───────────────────────────────────────────────────────────────
    museum: {
      keywords: [
        'Museum', 'Aviatioun Museum', 'Exhibit', 'Exhibitioun', 'Aviatioun',
        'Geschicht', 'Flugzëin', 'Flugzëin', 'Display', 'Musée', 'Musée Aviatioun',
        'Luftfahrt', 'Museum Entrée', 'Museum Billet', 'Museum Enthalt',
        'Museum Präis', 'Standalone Museum', 'Just d\'Museum', 'Visit Museum',
        'Museum Nëmmen', 'Museum ouni Fléien', 'Museum Kascht', 'Museum Gratis',
        'ass d\'Museum Enthalt', 'Kréi ech Museum Zougang', 'Wéi ass am Museum',
        'Wéi huet d\'Museum', 'kann ech just d\'Museum Viséitioun',
        'Museum Entrée Gebir', 'Museum Zugang', 'gëtt et e Museum', 'Aviatioun Geschicht',
        'Visit d\'Museum', 'kann ech d\'Museum Viséitioun', 'Museum op Hir Eegent',
        'Museum Standalone', 'Museum vu sech selwer', 'Museum ouni e Fluch'
      ],
      response: () => `**D\'Art of Skydiving Museum** ✈️🏛️\n\nJidder Luxfly Visit enthalt eis **Art of Skydiving Museum** — eng fantastescht Sammllung celebrating d\'Geschicht vu Fluch!\n\n🎫 **Enthalt GRATIS** an all Fluch Pakete — keng zousätzlech Kascht!\n🎟️ **Standalone Museum Entrée (Keng Fluch):** **€15** pro Persoun\n\nDerem wäerts du fannen:\n- Historisc Flugzëin an Interactive Display\n- Aviatioun Geschicht Timeline\n- Flott fir all Alter — besonnesch Famillien!\n\nPerfekt virun oder nom Fluch, oder fir Neit-Flüer Visiteur d\'Grupp. 🛩️`
    },

    // ── BAR & FOOD ───────────────────────────────────────────────────────────
    bar: {
      keywords: [
        'Bar', 'Iessen', 'Iessen', 'Drenk', 'Drenk', 'Menu', 'Restaurant', 'Café',
        'Kaffee', 'Béier', 'Burger', 'Snack', 'Burger Präis', 'Wéi vill ass de Burger', 'Iessen Präisser', 'Hungerlech', 'Thirstesch', 'Mëtteg',
        'Owend', 'Mahl', 'Sandwich', 'Bar Menu', 'Wéi kann ech Iessen', 'Canteen',
        'Essen', 'Trinken', 'Boire', 'Manger', 'Nourriture', 'Boisson',
        'Cocktail', 'Jus', 'Soft Drenk', 'Iessen Menu', 'Wéi Iessen', 'Nachos',
        'Pommes', 'Lager', 'Draft Béier', 'kann ech Iessen', 'gëtt et Iessen',
        'hutt dir Iessen', 'servéiert dir Iessen', 'hutt dir eng Bar',
        'Alkohol', 'Servéieren Alkohol', 'Alkoholescht Drenk', 'Alkoholescht Getränk',
        'gëtt et e Restaurant', 'gëtt et e Café', 'gëtt et e Kaffee',
        'kann ech e Drenk kréien', 'kann ech epkes Iessen kréien', 'hutt dir e Café',
        'Catering', 'Refreshments', 'Epkes ze Iessen nom', 'Grab e Bit'
      ],
      response: () => `**D\'Luxfly Bar & Restaurant** 🍔🍺\n\nRefuel nom Fluch bei eis am Sëtt Bar — oppen während all Operatioun Stonnen!\n\n**🍔 Iessen:**\n- Cheeseburger: **€14**\n- Vegetarian Burger: **€12**\n- Club Sandwich: **€11**\n- Pommes: **€4**\n- Nachos: **€8**\n\n**🍺 Drenk:**\n- Draft Lager (33cl): **€3,50** | (50cl): **€5,50**\n- Soft Drenk: **€3**\n- Kaffee/Espresso: **€2,50**\n- Frësch Jus: **€4**\n\nGreat Vëu vu de Tunnel vu de Bar Gebitt! 🌬️`
    },

    // ── SKY PILATES ──────────────────────────────────────────────────────────
    pilates: {
      keywords: [
        'Pilate', 'Sky Pilate', 'Pilate Class', 'Pilate Klasse', 'Fitness', 'Yoga', 'Workout',
        'Exercice', 'Wellness', 'Core', 'Flexibility', 'Wind Tunnel Pilate',
        'Pilate Schedule', 'Pilate Präis', 'Drop In', 'Class Pass',
        'Pilate Sessioun', 'Body Workout', 'Fitness Class', 'Tunnel Fitness',
        'Fitness bei Luxfly', 'Aerobik', 'Pilate Buchung', 'Verbënd eng Class',
        'Offer Pilate', 'Hutt dir Pilate', 'Hutt dir Pilate',
        'Wéini sidd Pilate', 'Pilate Zäite', 'Pilate Timetabell', 'Pilate Kascht',
        'Pilate Verfügbar', 'Pilate um Offer', 'Sky Pilate Class', 'Pilate Sessiounen'
      ],
      response: () => `**Sky Pilate bei Luxfly** 🧘✈️\n\nUnique **Sky Pilate** — Pilate am Wind Tunnel fir eng extraordinaire Core an Body Workout!\n\n**📅 Schedule:**\n🗓️ Dëschdag & Donnerschdag: **7:30 AM**\n🗓️ Samschdig: **9:00 AM**\n\n**💶 Präisser:**\n- Drop-In (Single Class): **€45**\n- 4-Class Pass: **€160** (€40/Class)\n- 8-Class Pass: **€280** (€35/Class)\n\nKeng Fléi Erfahrung erfuerderlich — just Amours vun Bewegung! Klasse geleet vu Zertifiziéiert Instructoren.\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── LOYALTY PROGRAMME ────────────────────────────────────────────────────
    loyalty: {
      keywords: [
        'Loyalitéit', 'Loyalitéits Programme', 'Fidelitéit', 'FidelityBox', 'Punkter',
        'Rewarder', 'Loyalitéits Kaart', 'Member', 'Memberschaft', 'Frequent Flüer',
        'Reward Punkter', 'Earn Punkter', 'Redeem', 'Loyalitéits Program',
        'Fidélité', 'Treueprogramm', 'Bonus', 'Perks', 'Benefits',
        'Stamp Kaart', 'Repeat Custem', 'Regular Custem', 'Loyalitéits Scheme',
        'ech fléi Regelmésseg', 'ech komm oft', 'ech viséit oft', 'ech komm oft zréck',
        'Reward fir zréck Komm', 'Repeat Visit', 'Frequent Visit',
        'Fidelitéit Kaart', 'Loyalitéits Punkter', 'Earn Rewards', 'Hutt dir Loyalitéit',
        'gëtt et e Loyalitéits Programme', 'Memberschaft Kaart', 'Reward Kaart',
        'Reward Scheme', 'Rewards Scheme', 'gëtt et e Reward Scheme',
        'Punkter Scheme', 'Punkter System', 'Earn Punkter Scheme',
        'Kréi Punkter', 'Punkter fir jidder Visit', 'Earn Punkter op jidder Visit',
        'Punkter jidder Zäit', 'Punkter wa ech fléien'
      ],
      response: () => `**Luxfly FidelityBox — Eis Loyalitéits Programme** 🌟\n\nFléi méi, Earn Méi!\n\n📱 D\'**Telefon Nummer ass d\'Loyalitéits Kaart** — Keng Physesch Kaart erfuerderlich!\n⭐ Earn Punkter jidder Zäit du fléis oder Ausgab bei Luxfly\n🎁 Redeem Punkter fir gratis Flüch, Remisen & Exclusive Rewards\n\n**Member Perks:**\n- Prioritéit Buchung Zougang\n- Exclusive Member Promotioune\n- Gebuersdag Iwwerraschunge\n- Früh Zougang ze neie Pakete\n\nGëb just d\'Telefon Nummer bei Check-In — du sidd automatesch erfoll!\n\n📞 +32 63 39 11 63 fir méi Detailer.`
    },

    // ── COACHES / TEAM ───────────────────────────────────────────────────────
    coaches: {
      keywords: [
        'Coach', 'Coaches', 'Instruktor', 'Instructoren', 'Staf', 'Trainer',
        'Trainer', 'Zertifiziéiert', 'Qualifizéiert', 'Wéi Léiert', 'D\'Ekipp',
        'Fluch Instruktor', 'Tunnel Instruktor', 'Sproochen', 'Spriechen Franséisch',
        'Spriechen Déitsch', 'Spriechen Englësch', 'Multilingual', 'Wéi Erfahren',
        'Ekipp Coaches', 'Professionell Coaches', 'Wéi Léiert mech',
        'Wäert epkes mir hëllef', 'Wäert e Instruktor mir hëllef', 'Wäert et e Instruktor sinn', 'Gëtt et e Instruktor',
        'Wäert ech e Coach', 'Wéi Wäert bei mech sinn', 'Kréi ech e Coach',
        'Gëtt et epkes mat mech', 'Wäert ech alleng sinn', 'Alleng am Tunnel',
        'Beaufsichtegt', 'Si ech Beaufsichtegt', 'Spriechen dir Englësch',
        'Spriechen dir Franséisch', 'Spriechen dir Déitsch', 'Spriechen dir Lëtzebuergesch',
        'Wéi Sproochen', 'Englësch Spriechen', 'Franséisch Spriechen', 'Déitsch Spriechen',
        'Léiert am Déitsch', 'Léiert am Franséisch', 'Léiert am Englësch',
        'am Déitsch', 'am Franséisch', 'am Englësch', 'am Lëtzebuergesch'
      ],
      response: () => `8 Zertifiziéiert Coaches mat **12.000+ kombinéiert Tunnel Stonnen** Erfahrung.\n\nFir Ufängers, däin Instruktor ass am Tunnel mat dir vu de völ éischt Sekonn. Eis Ekipp Spriechen Englësch, Franséisch, Déitsch, Lëtzebuergesch, an Italienësch.`
    },

    // ── TUNNEL SPECS ─────────────────────────────────────────────────────────
    tunnel: {
      keywords: [
        'Tunnel', 'Wind Tunnel', 'Wind Geschwindegkeet', 'Geschwindegkeet', 'Wéi schnell', 'km/h',
        'Belly Fléi', 'Belly Fléien', 'Sit Fléi', 'Sit Fléien', 'Head Down',
        'Head-Down', 'Airflow', 'Wind', 'Puissance', 'Tunnel Gréisst', 'Technesch',
        'Spezifizioun', 'Specs', 'Wéi Grouss', 'Wéi Puissant', 'Wéi Stäerkt',
        'State vu de Art', 'Vertikal Wind Tunnel', 'Wéi vill km/h',
        'Wéi Geschwindegkeet', 'Wind Puissance', 'Wéi vill Wind', 'Wéi windig',
        'Ass et ganz Windig', 'Wéi Stäerkt ass de Wind', 'Wéi Wind Geschwindegkeet'
      ],
      response: () => `**Luxfly Wind Tunnel — Technësch Specs** ⚡\n\nEis State-of-de-Art Vertikal Wind Tunnel ass gebaut fir Jeekenem vu Éischt-Moler bis Welt Champione!\n\n**Wind Geschwindegkeet vu Disciplin:**\n🤸 **Belly Fléien** (Ufänger/Rekreatioun): **130–160 km/h**\n💺 **Sit Fléien** (Intermediate): **180–220 km/h**\n🔻 **Head-Down** (Advanced/Pro): **250–320 km/h**\n\nWind Geschwindegkeet ass präzis Kontrolléiert vu eis Instructoren an Anpasst ze Passen däin Gréisst, Gewicht, an Skillse Niveau.\n\n🛡️ All Séchert Systemer sidd Zertifiziéiert ze de Héchsten Europäesch Normen. ✈️`
    },

    // ── PARTNERS ─────────────────────────────────────────────────────────────
    partners: {
      keywords: [
        'Partner', 'Partner', 'Partenariat', 'Geschäft', 'Affiliate',
        'Komméission', 'Erneut Verkaaf', 'Kollaboriéieren', 'B2B', 'Travel Agent',
        'Tour Operatör', 'Hotel', 'Aarbecht Zesumme', 'Kollaratioun', 'Komerziell',
        'Partenaire', 'Partenariat', 'Partner Programme', 'Referral', 'Agent',
        'Ginn e Partner', 'Handel', 'Wholesale', 'Reseller', 'Partners@',
        'Geschäft Enquête', 'Geschäft Enquiry', 'Komerziell Enquête',
        'Mir Wëllen Partner', 'Interesséiert a Partenariat', 'Refer Custem',
        'Sinn Custem', 'Bréng Custem', 'Kréi Komméission'
      ],
      response: () => `**Ginn e Luxfly Partner** 🤝\n\nMir Aarbecht mat Travel Agencies, Hotels, Tour Operatören, an Geschäfter déck Lëtzebuerg an de Grousser Region.\n\n**Partner Benefits:**\n💰 Earn **10–15% Komméission** op all Referrals\n🎟️ Speziell Rates fir däin Custem\n📦 Co-Branded Promotioun Materialer\n🌐 Geléischt op eis Website als e Préférencéiert Partner\n\n📧 **Apply:** partners@luxfly.lu\n📞 +32 63 39 11 63\n\nEis Partner Team Äntwert am Laaf 48 Stonnen! ✈️`
    },

    // ── JOBS ─────────────────────────────────────────────────────────────────
    jobs: {
      keywords: [
        'Job', 'Jobs', 'Career', 'Careers', 'Aarbecht', 'Aarbeit', 'Employment',
        'Vacancy', 'Vacancies', 'Hiring', 'Apply', 'Applicatioun', 'Positioun',
        'Role', 'Verbind d\'Ekipp', 'Verbind Eis', 'Recruitment', 'Tunnel Instruktor Job',
        'Séchert Offizier', 'Events Koordinator', 'Custem Erfahrung', 'Internship',
        'Emploi', 'Nous Rejoindre', 'Arbeit', 'Stelle', 'Hutt dir Jobs',
        'Hutt dir epkes Jobs', 'Brauchst du Staf', 'Aarbecht fir Luxfly',
        'Aarbecht mat Luxfly', 'Ech Wëll Aarbecht fir dir', 'Ech Wëll Aarbecht mat dir',
        'Gëtt et e Job', 'Open Role', 'Job Opening', 'CV', 'Sinn mäin CV',
        'Sinn mäin Resume', 'Apply fir e Job', 'Jobs@',
        'Brauchst du Tunnel Instructoren', 'Tunnel Instruktor Vacancy',
        'Tunnel Instruktor Positioun', 'Sicht Instructoren'
      ],
      response: () => `**Careers bei Luxfly** 💼✈️\n\nMir Sichen ëmmer fir Passionate Leit ze Verbind d\'Ekipp!\n\n**Open Positioune:**\n🌬️ **Tunnel Instruktor** — Léir Ufänger an Advanced Sessiounen\n🛡️ **Séchert Offizier** — Behald d\'Höchst Séchert Normen\n🎉 **Events Koordinator** — Planéieren Grupp, Komerziell & Speziell Events\n😊 **Custem Erfahrung** — Front-of-House & Guest Services\n\nNiet Siecht däin Role? Kontaktéier eis Wéiert — mir sidd e Wuessends Kompanie!\n\n📧 **Sinn däin CV zu:** jobs@luxfly.lu\n📞 +32 63 39 11 63\n\nKomm Hëllef Aaner d\'Joy vu Fluch Entdecken! 🚀`
    },

    // ── HOT AIR BALLOON ──────────────────────────────────────────────────────
    balloon: {
      keywords: [
        'Ballon', 'Hot Air Ballon', 'Ballon', 'Hot Air', 'Montgolfière',
        'Ballon Ride', 'Ballon Erfahrung', 'Ballon Fluch', 'Ballon Partner',
        'Aner Aktivitéite', 'Wéi Aaner', 'Epkes Aaner ze Maachen', 'Aner Erfahrunge',
        'Aner Dénger ze Maachen', 'Wéi Aaner hutt dir Angebuet', 'Aner Adventures',
        'Outdoor Erfahrung', 'Scenic Fluch', 'Ballooning',
        'Ballooning Erfahrung', 'Ballon Ride Erfahrung'
      ],
      response: () => `**Hot Air Ballon Erfahrunge** 🎈\n\nLuxfly huet Partner mat e Premier Hot Air Ballon Operatör!\n\n💶 **€180–€250 pro Persoun**\n📅 Season: **April – Oktober**\n📍 Depart vu de Lëtzebuerg/Belgien Region\n\nA Magical Komplement ze Indoor Skydiving, oder e Schéin Standalone Kaddo fir Jeekengem Speziell! 🌄\n\nFir Detailer an Buchungen:\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    }
  };

  // ─── Word-boundary regex ────────────────────────────────────────────────────
  function kwRegex(kw) {
    const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp('(?:^|[\\s,.!?\'"-])' + escaped + '(?:[\\s,.!?\'"-]|$)', 'i');
  }

  // ─── Damerau-Levenshtein distance ───
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
        if (i > 1 && j > 1 && a[i-1] === b[j-2] && a[i-2] === b[j-1])
          dp[i][j] = Math.min(dp[i][j], dp[i-2][j-2] + cost);
      }
    }
    return dp[m][n];
  }

  const kbVocab = (() => {
    const seen = new Set();
    for (const d of Object.values(KB))
      for (const kw of d.keywords)
        kw.split(/\s+/).forEach(w => { if (w.length >= 3) seen.add(w.toLowerCase()); });
    return [...seen];
  })();

  function fuzzyCorrect(text) {
    return text.replace(/[a-zA-ZäöüßÄÖÜé]{4,}/g, word => {
      const w = word.toLowerCase();
      if (kbVocab.includes(w)) return word;
      const maxDist = w.length <= 5 ? 1 : 2;
      let best = null, bestDist = maxDist + 1;
      for (const v of kbVocab) {
        if (Math.abs(v.length - w.length) > maxDist) continue;
        const d = lev(w, v);
        if (d < bestDist || (d === bestDist && best !== null && v.length > best.length)) {
          bestDist = d; best = v;
        }
      }
      return best !== null ? best : word;
    });
  }

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

  function isGreeting(text) {
    return /^(moien|hallo|salut|hey|hi|bonjour|gudde moien|gudd owend|hej|allo|moin)[\s!.?,]*$/i.test(text.trim());
  }

  function isThanks(text) {
    return /\b(merci|super|flott|wonnerschéin|perfekt|excellent|toll|klasse|top|genial)\b/i.test(text) &&
      text.trim().split(/\s+/).length < 10;
  }

  function formatResponse(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:#f02cb8">$1</a>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br>');
  }

  const greetings = [
    "Hey! 👋 Ech si Zoom, de Luxfly-Assistent. Froen ech alles iwwer eis Indoor-Skydiving-Erfahrung — Präisser, Buchung, Gesondheet, Kanner, Adress a méi!",
    "Hallo! 😊 Willkomm bei Luxfly. Wéi kann ech der hëllef Haut?",
    "Moien! Pret ze Schwätzen iwwer Indoor Skydiving? 🌬️ Wéi wëllst du wëssen?",
    "Hey do! Ech si Zoom ✈️ — d\'Luxfly Guide. Präisser, Pakete, Gesondheet Froen, Direktiounen — Feuer ewech!"
  ];
  const replies = [
    "Gär Geschach! 😊 Epkes Aaner ech kann hëllef mat?",
    "Gär ze Hëllef! 🙌 Fräi ze Frog epkes Aaner.",
    "Naturellement! Lass mech Wëssen wa du méi Froen huus. 😄",
    "Keng Problem op alle! Gëtt et epkes Aaner du gären ze Wëssen? ✈️"
  ];
  const fallbacks = [
    "Ech si Luxfly Chatbot, sou ech kann nëmmen mat Froen iwwer Indoor Skydiving Hëllef! 🪂\n\nProbéier Frog iwwer:\n💰 **Präisser** · ⏰ **Stonnen** · 📍 **Adress** · 📅 **Buchung** · 🎂 **Gebuersdag Partie**\n👨‍👩‍👧 **Gruppen** · 🏅 **Erfahrung** · 👕 **Wéi Dréien** · 🎟️ **Bongë** · 💼 **Jobs**\n\nOder Kontaktéier eis Ekipp: 📞 **+32 63 39 11 63** | 💬 **WhatsApp: +32 477 528 566** 😊",
    "Dat ass ausserhalb mäi Gebitt! Ech si nëmmen Setup ze Äntwert Luxfly Froen. 🪂\n\nFir epkes Aaner, eis Ekipp kann Hëllef:\n📞 **+32 63 39 11 63** | 📧 **info@luxfly.lu**\n\nOder Frog mech iwwer Präisser, Buchung, Stonnen, Gebuersdag Partie, oder Gear!",
    "Ech Wëll Méi Sécher Dir Kréit d\'Richteg Äntwert — kontaktéier Dir eis Ekipp Direkt:\n📞 **+32 63 39 11 63** | 💬 **WhatsApp: +32 477 528 566**\n\nEch kann Äntwert Froen iwwer Präisser, Pakete, Buchung, Gesondheet, Stonnen, Adress, an méi! 😊"
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
      animation: lf-bubble-out 0.25s ease forwards !important;
    }
    @keyframes lf-bubble-out {
      to { opacity: 0; transform: translateY(8px) scale(0.92); }
    }
  `;
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ─── Build DOM ───────────────────────────────────────────────────────────────
  document.body.insertAdjacentHTML('beforeend', `
    <button id="lf-chat-btn" aria-label="Chat mat Luxfly">
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
          <div id="lf-chat-header-status">Online · Ëmmer hei fir Iech</div>
        </div>
        <button id="lf-chat-close" aria-label="Ferm Chat">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <div id="lf-chat-messages"></div>
      <div id="lf-chat-quick">
        <button class="lf-quick-btn" data-q="Wéi vill kascht et?">💰 Präisser</button>
        <button class="lf-quick-btn" data-q="Wéni sidd Dir op?">🕐 Stonnen</button>
        <button class="lf-quick-btn" data-q="Ass et sécher fir Kanner?">👦 Kanner</button>
        <button class="lf-quick-btn" data-q="Wéi ka ech buchen?">🎟️ Buchen</button>
        <button class="lf-quick-btn" data-q="Wou sidd Dir?">📍 Adress</button>
        <button class="lf-quick-btn" data-q="Wéi eng Paket empfeelt Dir?">⭐ Empfehlung</button>
      </div>
      <form id="lf-chat-form" autocomplete="off">
        <textarea id="lf-chat-input" placeholder="Stellt mir eng Fro…" rows="1"></textarea>
        <button type="submit" id="lf-chat-send" aria-label="Sinn">
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
  // Touch detection + scroll lock helpers
  const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  let _lockedScrollY = 0;
  function lockBodyScroll() {
    _lockedScrollY = window.scrollY;
    document.body.style.cssText += ';position:fixed;top:-' + _lockedScrollY + 'px;width:100%;overflow-y:scroll';
  }
  function unlockBodyScroll() {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflowY = '';
    window.scrollTo(0, _lockedScrollY);
  }

  function openChat() {
    isOpen = true;
    dismissBubble();
    win.classList.add('open');
    const badge = document.getElementById('lf-chat-badge');
    if (badge) badge.style.display = 'none';
    btn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6l12 12" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`;
    if (!greeted) {
      greeted = true;
      setTimeout(() => {
        addMsg("Hey! 👋 Ech si Zoom, de Luxfly-Assistent. Froen ech alles iwwer eis Indoor-Skydiving-Erfahrung — Präisser, Buchung, Gesondheet, Kanner, Adress a méi!", 'bot');
      }, 300);
    }
    if (isTouch) {
      lockBodyScroll(); // no input.focus() — prevents Safari zoom
    } else {
      input.focus();
    }
  }

  function closeChat() {
    isOpen = false;
    win.classList.remove('open');
    btn.innerHTML = `<span id="lf-chat-badge" style="display:none">1</span>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.06 2 11c0 2.64 1.18 5.02 3.07 6.72L4 22l4.54-2.04A10.7 10.7 0 0012 20c5.52 0 10-4.06 10-9S17.52 2 12 2z" fill="white"/>
      </svg>`;
    if (isTouch) unlockBodyScroll();
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

  // ── Attention bubble ───────────────────────────────────────────────────────
  function dismissBubble() {
    const b = document.getElementById('lf-chat-bubble');
    if (!b) return;
    b.classList.add('lf-bubble-out');
    setTimeout(() => b && b.parentNode && b.parentNode.removeChild(b), 260);
  }

  const bubble = document.createElement('div');
  bubble.id = 'lf-chat-bubble';
  bubble.textContent = 'Eng Fro? Froen ech hei!';
  bubble.setAttribute('role', 'button');
  bubble.setAttribute('aria-label', 'Open chat assistant');
  document.body.appendChild(bubble);
  bubble.addEventListener('click', () => { dismissBubble(); openChat(); });

  // Auto-dismiss after 9 seconds
  const bubbleTimeout = setTimeout(() => dismissBubble(), 9000);
  bubble.addEventListener('click', () => clearTimeout(bubbleTimeout));

})();
