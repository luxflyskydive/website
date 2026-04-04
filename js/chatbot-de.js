(function () {
  'use strict';

  // ─── Knowledge Base ────────────────────────────────────────────────────────
  const KB = {

    // ── PRICES ──────────────────────────────────────────────────────────────
    prices: {
      keywords: [
        'preis', 'preise', 'kosten', 'was kostet', 'wie teuer', 'wie viel kostet',
        'wie viel', 'tarif', 'tarife', 'paket', 'pakete', 'preistafel',
        'gebühren', 'gebühr', 'rate', 'raten', 'ticketpreis', 'erwachsene',
        'erwachsenen preis', 'kinderpreis', 'familienpreis', 'luxcovery', 'luxensation',
        'luxemotion', 'wie viel kosten', 'was kostet es', 'preisliste',
        'paketpreis', 'paketpreise', 'kostet', 'teuer', 'billig', 'günstig',
        'bezahlen', 'preis pro', 'kosten pro', 'kostenfrei', 'umsonst',
        'günstiger', 'preiswert', 'leistung', 'wert', 'kaufen'
      ],
      response: () => `Hier sind unsere Flugpakete:\n\n**👤 ERWACHSENE**\n✈️ **LUXCOVERY** — 2 Flüge (2 Min): **€104,70**\n✈️ **LUXENSATION** — 2 Flüge (4 Min): **€174,70**\n✈️ **LUXEMOTION** — 3 Flüge (6 Min): **€236,70**\n💡 Basis-Option (ohne Extras) ab **€65,90**\n\n**🧒 KINDER (4–12 Jahre)**\n✈️ **Kinder 2 Flüge:** **€89,70**\n✈️ **Kinder 4 Flüge:** **€139,80**\n💡 Basis-Option ab **€45,90**\n\nAlle Hauptpakete enthalten: komplette Ausrüstung, Sicherheitseinweisung, qualifizierter Instructor, HighFly-Erlebnis, professionelle Erinnerungsfotos und Zugang zum **Art of Skydiving Museum**. 🎫\n\nNicht sicher, welches Paket? Fragen Sie mich nach einer Empfehlung! 😊`
    },

    // ── RECOMMENDATION ───────────────────────────────────────────────────────
    recommend: {
      keywords: [
        'empfehlung', 'empfehlen', 'suggestion', 'welches paket', 'welches paket ist best',
        'das beste paket', 'anfängerpaket', 'anfänger paket', 'welches sollte ich buchen',
        'was sollte ich buchen', 'was ist das beste', 'am populärsten', 'beliebteste',
        'bestes für mich', 'ideal', 'perfekt', 'geeignet', 'nicht sicher',
        'weiß nicht', 'unentschlossen', 'welche', 'was ist empfohlen',
        'was empfehlen sie', 'erste erfahrung', 'anfänger', 'erstes mal',
        'start', 'beginnen', 'anfang', 'wert', 'gutes angebot', 'gut wert',
        'lohnenswert', 'ist es lohnenswert', 'was sollte ich anfangen',
        'geeignetes paket', 'passendes paket', 'ideales paket'
      ],
      response: () => `**Hier ist unsere Empfehlung für Anfänger:** ✈️\n\n🌟 **LUXCOVERY (2 Flüge, €104,70)** ist der perfekte Start — dein erster Flug ist dazu da, das Gefühl zu bekommen, und der zweite ist, wo du wirklich anfängst zu fliegen. Beinhaltet HighFly-Erlebnis und professionelle Fotos!\n\n💪 Möchtest du mehr Zeit im Tunnel? **LUXENSATION (4 Min, €174,70)** gibt dir deutlich mehr Fortschritt und ist fantastisch im Preis-Leistungs-Verhältnis.\n\n🏆 **LUXEMOTION (6 Min, €236,70)** — das ultimative Paket für alle, die das volle Erlebnis wollen.\n\n🧒 **Für Kinder (4–12):** Das **2-Flüge Kinderpaket (€89,70)** ist die perfekte Einführung!\n\nAlle Hauptpakete enthalten Ausrüstung, Einweisung, Instructor, HighFly, professionelle Fotos und **Museum**-Zugang. 😊`
    },

    // ── KIDS ─────────────────────────────────────────────────────────────────
    kids: {
      keywords: [
        'kind', 'kinder', 'kleinkind', 'säugling', 'baby', 'junior', 'junge',
        'mädchen', 'mindestalter', 'wie alt', 'kann mein kind', 'können kinder',
        'für kinder', 'altersbeschränkung', 'wie jung', 'kindergerecht',
        'mein sohn', 'meine tochter', 'mein kind', 'alt genug', 'zu jung',
        'sicherheit für kinder', 'sicher für kinder', 'kinderfreundlich',
        'sind kinder erlaubt', 'dürfen kinder', 'kinderpaket', 'kinderpakete',
        'wie viel für kind', 'preis für kind', 'preis für kinder',
        'wie viel für mein sohn', 'wie viel für meine tochter', 'wie viel für ein kind',
        'preis für einen sohn', 'preis für eine tochter', 'preis für ein kind',
        '4 jahre', '5 jahre', '6 jahre', '7 jahre', '8 jahre', '9 jahre',
        '10 jahre', '11 jahre', '12 jahre', 'alter von kindern',
        'kindersicherheit', 'eltern dabei', 'beaufsichtigung', 'erlaubnis',
        'schriftliche zustimmung'
      ],
      response: () => `Kinder sind sehr willkommen bei Luxfly! 🧒✈️\n\nMindestalter: **4 Jahre**. Gewichtsbereich: 30–120 kg. Kein Höchstalter.\n\nEin Eltern- oder Erziehungsberechtigter muss während des Besuchs ständig anwesend sein, und eine schriftliche Genehmigung ist erforderlich.\n\nFragen Sie mich nach **Kinderpreisen** oder **Gesundheitsanforderungen**, wenn Sie mehr Details benötigen!`
    },

    // ── OPENING HOURS ────────────────────────────────────────────────────────
    hours: {
      keywords: [
        'öffnungszeiten', 'geöffnet', 'wann öffnet', 'wann schließt', 'geschlossen',
        'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag', 'sonntag',
        'wochenende', 'wochentag', 'öffnen', 'schließen', 'Zeit', 'stunde', 'stunden',
        'wann seid ihr offen', 'wann habt ihr geöffnet', 'bis wann offen',
        'am samstag offen', 'am sonntag offen', 'wann sind sie offen', 'tage',
        'welche tage', 'wann sind sie geöffnet', 'bankfeiertag', 'feiertag',
        'weihnachten', 'neujahr', 'letzte einlass', 'letzter eintritt', 'letzte session',
        'uhrzeit', 'zeit', 'wann', 'wie lange'
      ],
      response: () => `**Öffnungszeiten von Luxfly:**\n\n📅 **Montag:** Geschlossen *(geöffnet am 1. Montag im Monat)*\n📅 **Dienstag:** Geschlossen\n📅 **Mittwoch – Freitag:** 12:00 – 20:00 Uhr\n📅 **Samstag & Sonntag:** 10:00 – 19:00 Uhr\n\n⏰ Letzte Einträge werden **90 Minuten vor Schließzeit** angenommen.\n\nPrivate Events außerhalb dieser Zeiten sind Montag–Donnerstag ab 07:00 Uhr verfügbar — kontaktieren Sie uns für Details.\n\nWir empfehlen Vorabbuchung, besonders am Wochenende. Spontanbesuche sind willkommen, solange Plätze verfügbar sind! 🎟️`
    },

    // ── LOCATION ─────────────────────────────────────────────────────────────
    location: {
      keywords: [
        'lage', 'standort', 'ort', 'adresse', 'straße', 'wo befindet sich',
        'wie komme ich', 'anfahrt', 'richtung', 'sterpenich', 'arlon', 'ikea',
        'decathlon', 'parkplatz', 'parking', 'bus', 'tec', 'verkehr',
        'e411', 'autobahn', 'ausfahrt', 'luxemburg', 'belgien', 'route',
        'karte', 'gelegen', 'neben', 'in der nähe', 'auto', 'bahn',
        'wie erreiche ich', 'wie komme ich zu', 'wo ist luxfly',
        'wo seid ihr', 'wo sind sie', 'grenznähe', 'von luxemburg aus',
        'von brüssel aus', 'von lüttich aus', 'von arlon aus', 'kostenlos parkieren',
        'ist parkplatz', 'parken möglich', 'kostenlos parken', 'adresse luxfly',
        'vollständige adresse'
      ],
      response: () => `**Route de l'Europe 1, 6700 Sterpenich, Belgien** 📍\n\nMit dem Auto: Autobahn E411, Ausfahrt 33 (Sterpenich/Arlon). Neben IKEA und Decathlon — leicht zu finden. 80+ kostenlose Parkplätze vor Ort.\n\nNur wenige Minuten von der Luxemburger Grenze entfernt.`
    },

    // ── BOOKING / CANCELLATION ───────────────────────────────────────────────
    booking: {
      keywords: [
        'buchen', 'buchung', 'reservieren', 'reservierung', 'stornieren', 'stornierung',
        'rückerstattung', 'ohne voranmeldung', 'online buchen', 'termin', 'zeitslot',
        'slot', 'verfügbarkeit', 'umbuchen', 'verschieben', 'anzahlung', 'betrag',
        'zahlung', 'online zahlen', 'kaution', 'geld zurück', 'rückgeld',
        'in letzter minute', 'gleich morgen', 'richtlinie', 'regeln', 'bedingungen',
        'muss ich buchen', 'brauche ich buchung', 'kann ich spontan kommen',
        'kann ich hingehen ohne buchung', 'brauche ich reservierung', 'zahlen im voraus',
        'zahlen am tag', 'zahlungsart', 'zahlungsoptionen', 'zahle mit', 'bar bezahlen',
        'kartenzahlung', 'debitkarte', 'kreditkarte', 'wie kann ich zahlen',
        'wie buche ich', 'kann ich online buchen', 'telefonisch buchen',
        'gibt es plätze', 'wann kann ich kommen', 'erst kommt, erst malt',
        'zahle bar', 'bargeld', 'kartenzahlung', 'nehmen sie karten', 'cashless'
      ],
      response: () => `Buchen Sie online unter **shop.indoorskydive.lu** oder rufen Sie **+32 63 39 11 63** an.\n\nSpontanbesuche sind willkommen, aber Vorabbuchung wird dringend empfohlen, besonders am Wochenende. Gruppen ab 5 Personen sollten mindestens 48 Stunden im Voraus buchen.\n\nVolle Zahlung erforderlich bei Buchung. Stornierungen mit **48+ Stunden Vorankündigung** erhalten volle Rückerstattung oder kostenlose Umbuchung. Geschenkgutscheine werden akzeptiert.`
    },

    // ── BIRTHDAY ─────────────────────────────────────────────────────────────
    birthday: {
      keywords: [
        'geburtstag', 'geburtstagfeier', 'geburtstagparty', 'feiern', 'feier',
        'besonderer anlass', 'überraschung', 'geburtstagsmonat', 'birthday',
        'geburtstagsidee', 'geburtstagsgeschenk', 'festidee', 'party',
        'special day', 'geburtstagsvorteil', 'geburtstagsdeal', 'geburtstagspause',
        'zu meinem geburtstag', 'mein geburtstag', 'geburtstagsüberraschung',
        'besonderheit', 'geburtstagserlebnis', 'einzigartiges geschenk', 'geschenkidee',
        'geschenkidee', 'etwas besonderes', 'geburtstagspaket', 'geburtstagsoptionen',
        'haben sie geburtstagspakete', 'geburtstagsangebote', 'add-ons'
      ],
      response: () => `🎂 Fliegen Sie im Geburtstagmonat und erhalten Sie **10% Rabatt** auf Ihr Paket — erwähnen Sie es einfach bei der Buchung!\n\nGruppengeburtstagspakete sind mit verschiedenen Add-ons verfügbar (Galerie, Fotos, Dekoration). Für ein individuelles Angebot:\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── GROUPS / BACHELOR / CORPORATE ────────────────────────────────────────
    groups: {
      keywords: [
        'gruppe', 'gruppen', 'team', 'teambuilding', 'firmen', 'unternehmen',
        'kollegen', 'junggesellenabschied', 'junggesellinnenabschied', 'polterabend',
        'stag do', 'büro', 'freunde', 'große gruppe', 'verein', 'schulklasse',
        'klassenfahrt', 'anreiz', 'event', 'private veranstaltung',
        'private miete', 'exklusive miete', 'private sitzung', 'tunnel mieten',
        'tunnel buchen', 'für gruppe buchen', 'team buchen', 'firmenevent',
        'betriebsausflug', 'how many people', 'wie viele personen', 'rabatt',
        'wir sind eine gruppe von', 'wir sind', 'personen kommen', 'wie viel für gruppe',
        'freundesgruppe', 'kollegengruppe', 'gruppenangebot', 'evg', 'evjf',
        'jga', 'enterrement de vie', 'hen do', 'hen night', 'junggesellenparty',
        'hochzeitsparty', 'wie viel für 20 personen', 'wie viel für 10 personen',
        'wie viel für 15 personen', 'wie viel für 30 personen', 'wie viel für 50 personen',
        'wie viel für eine gruppe', 'preis für gruppe', 'kosten gruppe',
        'für unser unternehmen buchen', 'für die firma buchen', 'firmenbuchung',
        'ganzes unternehmen', 'alle meine kollegen', 'teamführung', 'gruppenpreis',
        'gruppenpakete', 'personen', 'wir sind', 'discount', 'vergünstigung'
      ],
      response: () => `**Gruppenpreise (pro Flugminute):**\n👥 2–9 Personen: **€35/min**\n👥 10–19 Personen: **€31,50/min** (10% Rabatt)\n👥 20–49 Personen: **€29,75/min** (15% Rabatt)\n👥 50–99 Personen: **€28/min** (20% Rabatt)\n👥 100+: Individuelles Angebot\n\nGruppenrabatte ab 10 Personen. Eine 30%-Anzahlung sichert Ihren Termin. Buchung erforderlich mindestens 7 Tage im Voraus.\n\nFür Junggesellenabschiede, Junggesellinnenabschiede oder Teambuilding-Events kontaktieren Sie uns für ein maßgeschneidertes Paket:\n📧 events@luxfly.lu | 📞 +32 63 39 11 63`
    },

    // ── EXPERIENCE / WHAT IS IT ──────────────────────────────────────────────
    experience: {
      keywords: [
        'erlebnis', 'erfahrung', 'keine erfahrung', 'anfänger', 'nie gemacht',
        'indoor skydiving', 'windkanal', 'wie fühlt es sich an', 'wie ist es',
        'wie ist indoor skydiving', 'wie funktioniert es', 'fühlt sich an wie',
        'nervös', 'angst', 'beängstigend', 'schwierig', 'einfach',
        'fallschirmspringen', 'fallschirm', 'fliegen', 'schweben', 'ich will fliegen',
        'fliegen möchte', 'fliegen wollen', 'spannung', 'adrenalin', 'aufregend',
        'aufregung', 'aufgeregend', 'schwindelerregend', 'spaß', 'spaßig',
        'werde ich angst haben', 'ist es furchtbar', 'werde ich angst bekommen',
        'schwindelig', 'übelkeit', 'seekrank', 'werde ich krank',
        'bewegungskrankheit', 'ist es wie echtes fallschirmspringen',
        'ähnlich wie fallschirmspringen', 'unterschied zu fallschirmspringen',
        'ist es drinnen', 'drinnen', 'drinnen', 'innen', 'geschlossen',
        'was passiert', 'wie fühlt sich fliegen an', 'beschreiben sie das gefühl',
        'erzählen sie vom erlebnis', 'was ist bodyflight', 'was ist ein windkanal',
        'brauche ich fitness', 'körperliche anforderung', 'brauche ich stärke',
        'können unfit fliegen', 'ist es anstrengend', 'fitnesslevel',
        'sicherheit', 'risiko', 'gefahr', 'accident', 'verletzung', 'schutz',
        'ist es sicher', 'ist es völlig sicher', 'wie sicher ist es',
        'ist luxfly sicher', 'sichere aktivität', 'welche risiken', 'anfänger',
        'geeignet für anfänger', 'gut für anfänger', 'anfängerfreundlich',
        'wie funktioniert windkanal', 'wie funktioniert es'
      ],
      response: () => `Indoor Skydiving simuliert das Gefühl des freien Falls in einem senkrechten Windkanal — Sie schweben auf einer Luftsäule mit bis zu **160 km/h**, vollständig drinnen, unabhängig vom Wetter.\n\nKeine Erfahrung oder Fitness nötig. Ihr Instructor ist die ganze Zeit im Tunnel bei Ihnen. Geeignet für Alter 4+ (30–120 kg).\n\nVollständige Ausrüstung und Sicherheitseinweisung in jedem Paket enthalten.`
    },

    // ── GEAR / WHAT TO WEAR ──────────────────────────────────────────────────
    gear: {
      keywords: [
        'anziehen', 'tragen', 'mitbringen', 'ausrüstung', 'helm', 'anzug',
        'jumpsuit', 'schuhe', 'kleidung', 'was soll ich anziehen', 'was anziehen',
        'outfit', 'kleid', 'schmuck', 'brille', 'kontaktlinsen', 'zubehör',
        'bereitgestellt', 'schutzbrille', 'ohrstöpsel', 'fluganzug',
        'was muss ich mitbringen', 'was soll ich mitbringen', 'brauche ich was',
        'ist ausrüstung enthalten', 'ist ausrüstung inklusive', 'was ist enthalten',
        'was gehört dazu', 'was brauche ich', 'wie vorbereiten', 'vorbereitung',
        'wie sollte ich mich vorbereiten', 'darunter anziehen', 'kann ich brille tragen',
        'kann ich schmuck tragen', 'kann ich ring tragen', 'lange haare',
        'haare', 'haarband', 'piercings', 'piercing', 'kontaktlinsen tragen',
        'barfuß', 'schnürschuhe', 'turnschuhe', 'sportschuhe', 'flip flops',
        'sandalen', 'hacken', 'stiefel', 'spinde', 'spind'
      ],
      response: () => `**Alles ist bereitgestellt — kommen Sie einfach vorbei!** 🎽\n\n**In Ihrem Paket enthalten:**\n✅ Fluganzug (Jumpsuit)\n✅ Helm\n✅ Schutzbrille\n✅ Ohrstöpsel\n\n**Tragen Sie darunter:**\n👟 Bequeme, sportliche Kleidung (keine Röcke/Kleider)\n👟 Schnürschuhe oder Sportschuhe — keine Sandalen, Hacken oder Slipper!\n\n**Bitte entfernen/daheim lassen:**\n❌ Schmuck, Uhren, Ringe, Ohrringe, Piercings falls möglich\n❌ Schals, Gürtel oder lose Accessoires\n👓 **Brille:** Sie können sie behalten — wir haben übergroße Schutzbrillen, die über Brillen passen!\n\n💇 Lange Haare? Binden Sie sie zurück — wir helfen Ihnen unter dem Helm.\n\n🗝️ Spinde sind vor Ort für Ihre Sachen verfügbar. Wir sehen uns im Tunnel! 🌬️`
    },

    // ── SPECTATORS ───────────────────────────────────────────────────────────
    spectators: {
      keywords: [
        'zusehen', 'zuschauer', 'zuschauer', 'betrachtung', 'betrachtungsbereich',
        'kann mein freund', 'kann meine familie', 'film', 'filmen freund',
        'fotograf', 'foto', 'video', 'kamera', 'fotos', 'aufnahmen',
        'beobachten', 'anfeuern', 'publikum', 'unterstützung', 'familie',
        'freunde', 'freund kommt mit', 'kommt mit', 'zuschauen', 'freunde mitbringen',
        'nicht fliegend', 'nicht fliegen', 'nur zusehen', 'galerie', 'fotografie',
        'kann jemand mitkommen', 'kann mein partner zusehen', 'können meine eltern zusehen',
        'kann mein mann zusehen', 'kann meine frau zusehen', 'partner kommt mit',
        'kostenlos für zuschauer', 'eintritt zuschauer', 'ist es kostenlos zuzusehen',
        'können nicht-flieger kommen', 'nicht fliegend', 'nur zuschauen', 'betrachtungsbereich',
        'glas', 'wie bekomme ich fotos', 'kann ich filmen', 'kann ich fotos machen',
        'kann ich aufnehmen', 'professionelle fotos', 'fotos meines flug',
        'video meines flug', 'film meines flug', 'wie bekomme ich aufnahmen'
      ],
      response: () => `**Freunde und Familie sind sehr willkommen!** 📸👀\n\n🏟️ **Spezielle Beobachtungsgalerie** mit klaren Glaspanelen — Zuschauer haben perfekte Sicht auf alles im Tunnel.\n\n📷 **Fotos & Video:**\n- Zuschauer können frei fotografieren und filmen aus der Galerie\n- Professionelle **Fotografie-/Videopakete** verfügbar — fragen Sie an der Rezeption!\n- In-Tunnel-Kameras erfassen unglaubliche Aufnahmen\n\n🎟️ **Eintritt für Zuschauer ist KOSTENLOS** — kein Ticket erforderlich.\n\n🏛️ Alle Pakete beinhalten **Art of Skydiving Museum**-Zugang, so dass Nicht-Flugbegeisterte viel zu genießen haben während Sie warten! ✈️`
    },

    // ── DURATION / TIMING ────────────────────────────────────────────────────
    duration: {
      keywords: [
        'wie lange', 'dauer', 'ankommen', 'ankunft', 'einchecken', 'einchecken',
        'gesamtzeit', 'besuch', 'wie lange ist der besuch', 'wie viel zeit',
        'minuten', 'sekunden', 'flugdauer', 'wann ankommen', 'wie früh',
        'lange dauert', 'flugdauer', 'wie lange flug', 'wie viel zeit',
        'flugminuten', 'pro flug', 'wie viel minuten', 'plane meinen besuch',
        'wie lange bin ich dort', 'wie lange dauert ein besuch',
        'wie lange dauert es', 'wann sollte ich ankommen', 'wann soll ich kommen',
        'wie früh sollte ich ankommen', 'muss ich früh ankommen', 'zu verspätet',
        'was wenn ich spät bin', 'wenn ich spät bin', 'verlaufe mich',
        'lange ist jeder flug', 'wie lange ist ein flug', 'wie lange ist flug',
        'wie lange insgesamt', 'wie lange sitzung', 'wie lange ist eine sitzung',
        '60 sekunden', '1 minute', 'flugdauer'
      ],
      response: () => `Kommen Sie **60 Minuten vor** Ihrem Flugzeitpunkt zum Einchecken, Ausrüstung anziehen und Sicherheitseinweisung.\n\nJeder Flug dauert **60 Sekunden** Tunnelzeit. Der Gesamtbesuch beträgt etwa **2 Stunden** einschließlich Einweisung und Museum.\n\nZu spät dran? Rufen Sie an: **+32 63 39 11 63**`
    },

    // ── HEALTH / AGE / RESTRICTIONS ──────────────────────────────────────────
    health: {
      keywords: [
        'schwanger', 'schwangerschaft', 'herzerkrankung', 'herzproblem', 'epilepsie',
        'medizinisch', 'gesundheit', 'behinderung', 'behindert', 'rückenproblem',
        'rückenschmerz', 'nackenproblem', 'nackenschmerz', 'verletzung', 'verletzt',
        'operation', 'chirurgie', 'asthma', 'herzschrittmacher', 'gewichtslimit',
        'maximalgewicht', 'minimalgewicht', 'kg', 'kilo', 'einschränkungen',
        'sicherheit', 'kann ich fliegen', 'gesundheitszustand', 'ältest',
        'älteste person', 'maximalalter', 'oberes alterlimit', 'altersgrenze',
        'alterbeschränkung', 'altersgrenze für erwachsene', 'wie alt kann man sein',
        'zu alt', 'bin ich zu alt', 'senior', 'seniors', 'älter', 'pensioniert',
        'großmutter', 'großmutter', 'großvater', 'ältere person', 'ältere leute',
        'kann ein älterer fliegen', 'können ältere fliegen', 'können senioren fliegen',
        'ältere menschen', 'können ältere fliegen', 'ältere person', 'ist es altersgrenze',
        'oberes alter', 'was ist die altersgrenze', 'wie alt ist zu alt',
        '60 jahr alt', '70 jahr alt', '80 jahr alt', '90 jahr alt',
        'über 60', 'über 70', 'über 80', 'über 50', 'übergewicht', 'zu schwer',
        'zu leicht', 'gewichtsbeschränkung', 'wie schwer', 'wie viel wiege ich',
        'gewichtsanforderung', 'bmi', 'fettleibig', 'fettleibigkeit',
        'herzfrequenz', 'blutdruck', 'kann ich fliegen wenn ich habe',
        'erlaubt zu fliegen', 'unfit zu fliegen', 'fit zu fliegen',
        'war trinken', 'habe getrunken', 'betrunken', 'alkohol', 'kater',
        'schlecht rücken', 'habe schlechten rücken', 'schlecht rückenproblem',
        'schlechter nacken', 'rückenverletzung', 'nackenverletzung',
        'bandscheibenvorfall', 'wirbelsäulenproblem'
      ],
      response: () => `**Alter:** Minimum **4 Jahre** — kein Oberlimit (wir fliegen Gäste bis 95!).\n**Gewicht:** 30–120 kg.\n\nBitte fliegen Sie nicht, wenn Sie schwanger sind, eine ernsthafte Herzerkrankung oder einen Herzschrittmacher haben, Epilepsie haben, eine kürzliche Operation oder Verletzung hatten, unkontrollierter Bluthochdruck oder wenn Sie getrunken haben.\n\nUnsicher? Konsultieren Sie zunächst Ihren Arzt und lassen Sie es uns bei der Buchung wissen — wir werden immer eine Lösung finden. 💙\n📞 +32 63 39 11 63`
    },

    // ── CONTACT ──────────────────────────────────────────────────────────────
    contact: {
      keywords: [
        'kontakt', 'email', 'telefon', 'anrufen', 'sprechen mit', 'kontaktieren',
        'erreichen', 'whatsapp', 'nachricht', 'chat', 'rede mit', 'kundenservice',
        'unterstützung', 'hilfe', 'anfrage', 'kontakt', 'telefon', 'kontaktiert',
        'telefonnummer', 'soziale medien', 'wie kontaktieren', 'sprechen mit',
        'kann ich anrufen', 'haben sie telefonnummer', 'was ist ihre email',
        'emailadresse', 'was ist deine email', 'kontaktieren sie per email',
        'was ist ihre telefonnummer', 'wie erreiche ich', 'gibt es telefon',
        'kundenbetreuung', 'beschwerden', 'rückmeldung', 'zurückrufen',
        'antworte mir', 'wann antwortet ihr', 'antwortzeit', 'sprechen person',
        'sprechen mensch', 'leben chat', 'was ist whatsapp', 'haben sie whatsapp'
      ],
      response: () => `📞 **Telefon:** +32 63 39 11 63\n💬 **WhatsApp:** +32 477 528 566\n📧 **Email:** info@luxfly.lu\n🌐 **Website:** luxfly.lu\n\n🏠 Route de l'Europe 1, 6700 Sterpenich, Belgien`
    },

    // ── PROMOTIONS / DISCOUNTS ───────────────────────────────────────────────
    promo: {
      keywords: [
        'promo', 'promotion', 'promotionen', 'rabatt', 'gutschein', 'code',
        'angebot', 'spezialangebot', 'student', 'militär', 'reduzieren',
        'ermäßigung', 'sparen', 'günstiger', 'ersparnis', 'frühling', 'spring26',
        'group15', 'bring a friend', 'geburtstagmonat', 'rabattpapier',
        'aktuelle angebote', 'irgendein deal', 'verkauf', 'promotionscode',
        'promotionscode', 'rabattcode', 'studentenrabatt', 'haben sie rabatt',
        'gibt es rabatt', 'irgendein rabatt', 'irgendein angebot',
        'irgendein promotion', 'studentenausweis', 'schülerkarte', 'militärrabatt',
        'wie kann ich sparen', 'gibt es günstigere weise', 'loyalitätsrabatt',
        'irgendein code', 'haben sie promotionen', 'irgendein deal',
        'haben irgendein angebot', 'haben irgendein deal', 'deal',
        'aktuelle deals', 'irgendein aktuelle deal', 'einsparen', 'irgendein sparen',
        'gibt es ersparnis', 'günstigere rate', 'günstigere option', 'günstigerer preis',
        'spezialangebot', 'irgendein spezialangebot', 'aktuelle spezialangebot'
      ],
      response: () => `**Aktuelle Promotionen bei Luxfly** 🎉\n\n🌸 **SPRING26** — **15% Rabatt** auf Ihr erstes LUXCOVERY- oder LUXENSATION-Paket! Gültig bis **30. April 2026**. Code verwenden: **SPRING26** beim Checkout.\n\n👥 **GROUP15** — Zusätzliche **5% Rabatt** on top of Gruppenrabatten für 10+ Personen. Code: **GROUP15**.\n\n🎂 **Geburtstagmonat** — Fliegen Sie im Geburtstagmonat und erhalten Sie **10% Rabatt**. Erwähnen Sie es einfach bei der Buchung!\n\n🎓 **Studentenrabatt** — Zeigen Sie einen gültigen Studentenausweis für **10% Rabatt**.\n\n👫 **Bring einen Freund mit** — Verweisen Sie einen Erstflugbesucher und bekommen beide Belohnungen! Fragen Sie unser Team nach Details.\n\n⚠️ Rabatte können nicht kombiniert werden. Bedingungen gelten.`
    },

    // ── GIFT VOUCHERS ────────────────────────────────────────────────────────
    voucher: {
      keywords: [
        'gutschein', 'geschenkkarte', 'geschenkgutschein', 'kaufen für jemanden',
        'geschenk', 'präsent', 'geschenk', 'bon cadeau', 'regalo',
        'geben als geschenk', 'jemand anderes', 'überraschung', 'gutschein kaufen',
        'einen gutschein kaufen', 'gutschein gültig', 'gültigkeit', 'verfallen',
        'erneuerung', 'übertragung', 'übertragbar', 'nominativ', 'rückerstattung',
        'für freund', 'weihnachtsgeschenk', 'geburtstagsgeschenk', 'jahrestaggeschenk',
        'kann ich kaufen geschenk', 'kaufen als geschenk', 'verschenken',
        'jemanden beschenken', 'beschenke freund', 'beschenke mein partner',
        'kaufe für meinen partner', 'kaufe für meinen freund', 'kaufe für meine familie',
        'wie lange ist gutschein gültig', 'verfällt gutschein', 'wie lange habe ich',
        'nutze meinen gutschein', 'wie nutze ich', 'einlösen gutschein',
        'gutscheincode', 'nutzen gutschein', 'mein gutschein online',
        'gutschein bei checkout', 'verwende gutschein', 'geben sie gutschein',
        'nutzen sie gutschein', 'lösen sie gutschein ein', 'einlösen geschenkgutschein',
        'wie lange ist gutschein', 'wie lange ist geschenkgutschein',
        'wie lange dauert gutschein'
      ],
      response: () => `**Luxfly Geschenkgutscheine — das perfekte Geschenk!** 🎁\n\n🛒 Kaufen Sie online unter **luxfly.lu** oder persönlich an der Rezeption.\n\n**Gutschein-Details:**\n📅 Gültig für **12 Monate** ab Kaufdatum\n🔄 Erneuerbar um weitere **3 Monate** (eine Erneuerung pro Gutschein)\n👤 **Nicht nominativ** — kann von jedem verwendet werden, nicht nur dem benannten Empfänger\n💸 Nicht rückgängig zu machen, sobald gekauft\n✅ Einlösbar gegen jedes Flugpaket oder Add-on\n\nDas perfekte Geburtstags-, Weihnachts- oder Jahrestaggeschenk — wer möchte nicht fliegen? 💝\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── PRO FLYING / COACHING ────────────────────────────────────────────────
    pro: {
      keywords: [
        'pro', 'professionell', 'pro fliegen', 'wettkampf', 'coaching',
        'fortgeschrittene', 'training', 'athlet', 'tunnel zeit', 'blockzeit',
        'spezielle sitzung', 'freestyle', 'formation', 'freefly', 'dynamik',
        'wettbewerbsfähig', 'tunnel ratte', 'trainiert von', 'professionelle',
        'wettbewerb', 'gecoachte sitzung', 'fähigkeiten', 'fortschritt',
        'trainerkarte', 'geteilte sitzung', 'geteilte profi', 'pro sitzung',
        'blockstunden', 'ich kann schon fliegen', 'ich bin erfahren flyer',
        'erfahrene flyer', 'ich fliege schon', 'kann ich tunnelzeit buchen',
        'tunnelzeit buchen', 'tunnelzeit kaufen', 'tunnelzeit mieten',
        'solo sitzung', 'trainersitzung', 'windkanal trainertag', 'verbesser mein fliegen',
        'fortgeschrittene trainers', 'kopf runter', 'sit fly', 'belly fly',
        'vfs', 'dynamic fliegen', 'angebot trainers', 'haben sie trainers',
        'haben sie trainers', 'trainersitzungen', 'trainers verfügbar',
        'bekomme trainers', 'buche trainers', 'persönliche trainers',
        'eins zu eins trainers', 'eins-zu-eins trainers', 'bekomme trainer',
        'anstellen trainer', 'windkanal trainers sitzung', 'wie viel für blockzeit',
        'blockzeit preis', 'blockzeit kosten', 'kopf-runter fliegen',
        'headdown fliegen', 'kopf runter fliegen', 'trainier im tunnel',
        'trainier im tunnel', 'training im tunnel', 'fortgeschrittene fliegen',
        'fortgeschrittene sitzung', 'fortgeschrittene fliegen sitzung',
        'formation fliegen', 'fliegen trainieren', 'formation fliegen trainieren'
      ],
      response: () => `**Blockzeit (dedizierter Tunnel):** 1 Std. €180 · 5 Std. €840 · 10 Std. €1.560 · 20 Std. €2.880\n\n**Geteilte Pro-Sitzungen:** €55/Sitzung · 5 für €240 · 10 für €420\nZeitplan: Mo, Mi, Fr, Sa & So.\n\nDisziplinen: Bauch · Sitz Flug · Kopf Runter · Freestyle · Formation.\n📧 info@luxfly.lu für Trainingsanfragen`
    },

    // ── MUSEUM ───────────────────────────────────────────────────────────────
    museum: {
      keywords: [
        'museum', 'luftfahrtmuseum', 'ausstellung', 'ausstellungen', 'luftfahrt',
        'geschichte', 'flugzeuge', 'flugzeuge', 'anzeigen', 'museum entry',
        'museum ticket', 'museum inklusive', 'museum preis', 'nur museum',
        'besuch museum', 'museum nur', 'museum ohne fliegen', 'museum kosten',
        'museum kostenlos', 'ist museum inklusive', 'bekomme ich museum zugang',
        'was ist im museum', 'was hat museum', 'kann ich nur museum besuchen',
        'museum eintrittspreis', 'museum eintritt', 'gibt es museum',
        'luftfahrt geschichte', 'besuchen sie museum', 'kann ich museum besuchen',
        'museum allein', 'museum eigenständig', 'museum von selbst',
        'museum ohne flug'
      ],
      response: () => `**Das Art of Skydiving Museum** ✈️🏛️\n\nJeder Luxfly-Besuch beinhaltet unser **Art of Skydiving Museum** — eine fantastische Sammlung, die die Geschichte des Flugs zelebriert!\n\n🎫 **Im Paket KOSTENLOS enthalten** in allen Flugpaketen — keine zusätzlichen Kosten!\n🎟️ **Eigenständiger Museumseintritt (ohne Flug):** **€15** pro Person\n\nInnen finden Sie:\n- Historische Flugzeuge und interaktive Ausstellungen\n- Luftfahrtgeschichte Timeline\n- Perfekt für alle Altersgruppen — besonders für Familien!\n\nIdeal vor oder nach Ihrem Flug oder für Nicht-Flugbesucher, die die Gruppe begleiten. 🛩️`
    },

    // ── BAR & FOOD ───────────────────────────────────────────────────────────
    bar: {
      keywords: [
        'bar', 'essen', 'essen', 'trinken', 'getränke', 'menü', 'restaurant',
        'café', 'kaffee', 'bier', 'burger', 'snack', 'burgerpreis',
        'wie viel kostet burger', 'essenspreise', 'hungrig', 'durstig',
        'mittagessen', 'abendessen', 'mahlzeit', 'sandwich', 'bar menü',
        'was kann ich essen', 'kantine', 'essen', 'trinken', 'getränk',
        'nahrung', 'getränk', 'cocktail', 'saft', 'soft drink', 'essensmenü',
        'was essen', 'nachos', 'pommes', 'lager', 'fassbier', 'kann ich essen',
        'gibt es essen', 'haben sie essen', 'servieren sie essen',
        'haben sie bar', 'alkohol', 'serviert alkohol', 'alkoholische getränke',
        'alkoholische getränke', 'gibt es restaurant', 'gibt es café',
        'kann ich ein getränk bekommen', 'kann ich essen bekommen',
        'haben sie café', 'catering', 'erfrischung', 'etwas essen später',
        'ein snack bekommen'
      ],
      response: () => `**Die Luxfly Bar & Restaurant** 🍔🍺\n\nTanken Sie nach Ihrem Flug in unserer hauseigenen Bar auf — während aller Betriebsstunden geöffnet!\n\n**🍔 Essen:**\n- Cheeseburger: **€14**\n- Vegetarischer Burger: **€12**\n- Club Sandwich: **€11**\n- Pommes: **€4**\n- Nachos: **€8**\n\n**🍺 Getränke:**\n- Fassbier (33cl): **€3,50** | (50cl): **€5,50**\n- Softdrinks: **€3**\n- Kaffee/Espresso: **€2,50**\n- Frischer Saft: **€4**\n\nTolle Aussicht auf den Tunnel aus der Bar! 🌬️`
    },

    // ── SKY PILATES ──────────────────────────────────────────────────────────
    pilates: {
      keywords: [
        'pilates', 'sky pilates', 'pilates kurs', 'pilates kurse', 'fitness',
        'yoga', 'training', 'übung', 'wohlbefinden', 'kern', 'flexibilität',
        'windkanal pilates', 'pilates zeitplan', 'pilates preis', 'drop in',
        'klassenkarte', 'pilates sitzung', 'körper trainieren', 'fitness kurs',
        'tunnel fitness', 'fitness bei luxfly', 'aerobik', 'pilates buchung',
        'tritt klasse bei', 'angebot pilates', 'haben sie pilates',
        'wann sind pilates', 'pilates zeiten', 'pilates zeitplan', 'pilates kosten',
        'pilates verfügbar', 'pilates angebot', 'sky pilates kurs', 'pilates sitzungen'
      ],
      response: () => `**Sky Pilates bei Luxfly** 🧘✈️\n\nEinzigartiges **Sky Pilates** — Pilates im Windkanal für ein außergewöhnliches Kern- und Körpertraining!\n\n**📅 Zeitplan:**\n🗓️ Dienstag & Donnerstag: **07:30 Uhr**\n🗓️ Samstag: **09:00 Uhr**\n\n**💶 Preisgestaltung:**\n- Drop-in (einzelne Klasse): **€45**\n- 4er-Karte: **€160** (€40/Klasse)\n- 8er-Karte: **€280** (€35/Klasse)\n\nKeine Fliegerfahrung erforderlich — nur Liebe zu Bewegung! Klassen von zertifizierten Instruktoren geleitet.\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── LOYALTY PROGRAMME ────────────────────────────────────────────────────
    loyalty: {
      keywords: [
        'treue', 'treueprogramm', 'treue', 'treueprogramm', 'punkte', 'belohnungen',
        'treuekarte', 'mitglied', 'mitgliedschaft', 'vielfliegerin',
        'belohnungspunkte', 'verdienen punkte', 'einlösen', 'treueprogramm',
        'treue', 'treueprogramm', 'bonus', 'perks', 'vorteile', 'stempelkarte',
        'wiederholter kunde', 'regelmäßiger kunde', 'treueschema',
        'ich fliege regelmäßig', 'ich komme oft', 'ich besuche oft',
        'ich komme oft zurück', 'belohnung für wiederholung', 'wiederholung besuche',
        'häufige besuche', 'treuekarte', 'treuepunkte', 'verdienen belohnungen',
        'haben sie treue', 'gibt es treueprogramm', 'mitgliedskarte',
        'belohnungskarte', 'belohnungsschema', 'belohnungsschema',
        'gibt es belohnungsschema', 'punkteschema', 'punktesystem',
        'verdienen punkte schema', 'bekomme punkte', 'punkte für jeden besuch',
        'verdienen punkte bei jedem besuch', 'punkte jedes mal',
        'punkte wenn ich fliege'
      ],
      response: () => `**Luxfly FidelityBox — Unser Treueprogramm** 🌟\n\nJe mehr Sie fliegen, desto mehr verdienen Sie!\n\n📱 **Ihre Telefonnummer ist Ihre Treuekarte** — keine physische Karte erforderlich!\n⭐ Verdienen Sie Punkte jedes Mal, wenn Sie fliegen oder bei Luxfly einkaufen\n🎁 Erlösen Sie Punkte für kostenlose Flüge, Rabatte und exklusive Belohnungen\n\n**Mitglieder-Vorteile:**\n- Bevorzugter Buchungszugang\n- Exklusive Mitgliederpromotionen\n- Geburtstagsüberraschungen\n- Frühzugang zu neuen Paketen\n\nGeben Sie einfach Ihre Telefonnummer beim Einchecken an — Sie sind automatisch registriert!\n\n📞 +32 63 39 11 63 für weitere Details.`
    },

    // ── COACHES / TEAM ───────────────────────────────────────────────────────
    coaches: {
      keywords: [
        'trainer', 'trainer', 'instructor', 'instructoren', 'personal', 'trainer',
        'trainer', 'zertifiziert', 'qualifiziert', 'wer unterrichtet',
        'dein team', 'fluginstuktor', 'tunnel instructor', 'sprachen',
        'sprechen französisch', 'sprechen deutsch', 'sprechen englisch',
        'mehrsprachig', 'wie erfahren', 'trainer team', 'professionelle trainer',
        'wer wird mich unterrichten', 'wird mir jemand helfen',
        'wird mir ein instructor helfen', 'gibt es einen instructor',
        'wird es einen instructor geben', 'werde ich einen trainer haben',
        'wer wird bei mir sein', 'bekomme ich einen trainer', 'gibts jemand bei mir',
        'bin ich allein', 'allein im tunnel', 'beaufsichtigt', 'bin ich beaufsichtigt',
        'sprechen sie englisch', 'sprechen sie französisch', 'sprechen sie deutsch',
        'sprechen sie luxemburgisch', 'welche sprachen', 'englischsprechend',
        'französischsprachig', 'deutschsprachig', 'unterricht auf deutsch',
        'unterricht auf französisch', 'unterricht auf englisch',
        'auf deutsch', 'auf französisch', 'auf englisch', 'auf luxemburgisch'
      ],
      response: () => `8 zertifizierte Trainer mit **12.000+ Stunden kombinierter Tunnelerfahrung**.\n\nFür Anfänger ist Ihr Trainer von der allerersten Sekunde an im Tunnel bei Ihnen. Unser Team spricht Englisch, Französisch, Deutsch, Luxemburgisch und Italienisch.`
    },

    // ── TUNNEL SPECS ─────────────────────────────────────────────────────────
    tunnel: {
      keywords: [
        'tunnel', 'windkanal', 'windgeschwindigkeit', 'geschwindigkeit', 'wie schnell',
        'km/h', 'bauch fliegen', 'bauchfliegen', 'sitz fliegen', 'sitzfliegen',
        'kopf runter', 'kopf-runter', 'luftstrom', 'wind', 'kraft', 'tunnelgröße',
        'technisch', 'spezifikationen', 'spezifikationen', 'wie groß',
        'wie mächtig', 'wie stark', 'state of the art', 'senkrechter windkanal',
        'wie viele km/h', 'welche geschwindigkeit', 'windstärke',
        'wie viel wind', 'wie stürmisch', 'ist es sehr windig',
        'wie stark ist der wind', 'welche windgeschwindigkeit'
      ],
      response: () => `**Luxfly Windkanal — Technische Spezifikationen** ⚡\n\nUnser hochmoderner, senkrechter Windkanal ist für alle — von Anfängern bis zu Weltmeitern gebaut!\n\n**Windgeschwindigkeit nach Disziplin:**\n🤸 **Bauchfliegen** (Anfänger/Freizeit): **130–160 km/h**\n💺 **Sitzfliegen** (Fortgeschrittene): **180–220 km/h**\n🔻 **Kopf Runter** (Fortgeschrittene/Pro): **250–320 km/h**\n\nDie Windgeschwindigkeit wird von unseren Instruktoren präzise kontrolliert und an Ihre Größe, Gewicht und Fertigkeitsstufe angepasst.\n\n🛡️ Alle Sicherheitssysteme entsprechen den höchsten europäischen Standards. ✈️`
    },

    // ── PARTNERS ─────────────────────────────────────────────────────────────
    partners: {
      keywords: [
        'partner', 'partner', 'partnerschaft', 'geschäft', 'assoziation',
        'kommission', 'weiterverkaufen', 'zusammenarbeiten', 'b2b',
        'reiseveranstalter', 'reiseveranstalter', 'hotel', 'zusammen arbeiten',
        'zusammenarbeit', 'kommerziell', 'partenaire', 'partnerschaften',
        'partner programm', 'verweisung', 'agent', 'werde partner',
        'handel', 'großhandel', 'wiederverkäufer', 'partner@',
        'geschäftsanfrage', 'geschäftsanfrage', 'kommerzielle anfrage',
        'wir wollen partner', 'interessiert an partnerschaft',
        'kunden verweisen', 'schicken kunden', 'bringe kunden',
        'bekomme provision'
      ],
      response: () => `**Werden Sie ein Luxfly Partner** 🤝\n\nWir arbeiten mit Reisebüros, Hotels, Reiseveranstaltern und Unternehmen in Luxemburg und der Greater Region zusammen.\n\n**Partnervorteile:**\n💰 Verdienen Sie **10–15% Provision** auf alle Überweisungen\n🎟️ Spezialpreise für Ihre Kunden\n📦 Co-branded Werbelernmaterialien\n🌐 Aufgelistet auf unserer Website als bevorzugter Partner\n\n📧 **Anwendung:** partners@luxfly.lu\n📞 +32 63 39 11 63\n\nUnser Partnerschaften-Team antwortet innerhalb von 48 Stunden! ✈️`
    },

    // ── JOBS ─────────────────────────────────────────────────────────────────
    jobs: {
      keywords: [
        'job', 'jobs', 'karriere', 'karrieren', 'arbeit', 'arbeiten',
        'beschäftigung', 'vakanz', 'vakanzen', 'einstellung', 'anwenden',
        'anwendung', 'position', 'rolle', 'treten sie dem team bei',
        'treten sie uns bei', 'recruitment', 'tunnel instructor job',
        'sicherheitsbeauftragter', 'events koordinator', 'kundenerlebnis',
        'praktikum', 'emploi', 'nous rejoindre', 'arbeit', 'stelle',
        'stellen sie ein', 'haben sie arbeitsplätze', 'brauchen sie personal',
        'arbeit für luxfly', 'arbeit bei luxfly', 'ich will für dich arbeiten',
        'ich will mit dir arbeiten', 'gibt es einen job', 'offene rolle',
        'job öffnung', 'cv', 'schicke meinen cv', 'schicke meinen lebenslauf',
        'bewerben auf job', 'jobs@', 'brauchen sie tunnel instructoren',
        'tunnel instructor vakanz', 'tunnel instructor position',
        'suche nach instructoren'
      ],
      response: () => `**Karrieren bei Luxfly** 💼✈️\n\nWir suchen immer nach leidenschaftlichen Menschen, um das Team zu verstärken!\n\n**Offene Positionen:**\n🌬️ **Tunnel Instructor** — Leiten Sie Anfänger- und fortgeschrittene Sitzungen\n🛡️ **Sicherheitsbeauftragter** — Halten Sie die höchsten Sicherheitsstandards\n🎉 **Events Koordinator** — Planen Sie Gruppen-, Unternehmens- und Spezialevents\n😊 **Kundenerlebnis** — Front-of-House & Gastservices\n\nIhre Rolle nicht gesehen? Kontaktieren Sie uns trotzdem — wir sind ein wachsendes Unternehmen!\n\n📧 **Senden Sie Ihren CV an:** jobs@luxfly.lu\n📞 +32 63 39 11 63\n\nHilfen Sie anderen, die Freude am Fliegen zu entdecken! 🚀`
    },

    // ── HOT AIR BALLOON ──────────────────────────────────────────────────────
    balloon: {
      keywords: [
        'ballon', 'heißluftballon', 'heißluftballonfahrt', 'heißluft',
        'ballonfahrt', 'ballonfahrt', 'ballonerlebnis', 'ballonflug',
        'ballonpartner', 'andere aktivitäten', 'was sonst noch', 'sonst noch',
        'was sonst noch tun', 'andere erlebnisse', 'andere dinge tun',
        'was sonst noch anbieten', 'andere abenteuer', 'außenerlebnis',
        'scenic flug', 'ballooning', 'ballooning erlebnis',
        'ballonfahrt erlebnis'
      ],
      response: () => `**Heißluftballonfahrten** 🎈\n\nLuxfly hat sich mit einem Premier-Heißluftballonbetreiber zusammengetan!\n\n💶 **€180–€250 pro Person**\n📅 Saison: **April – Oktober**\n📍 Abfahrt aus der Luxemburg-/Belgienregion\n\nEin magisches Ergänzung zum Indoorskydiving oder ein wunderschönes Einzelgeschenk für jemanden Besonderen! 🌄\n\nFür Details und Buchungen:\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
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
    return /^(hallo|guten tag|guten morgen|guten abend|hey|hi|servus|moin|grüß gott|hej|grüßen|coucou|hoi|dag|moien|allo|salut|hy|hiya)[\s!.?,]*$/i.test(text.trim());
  }

  function isThanks(text) {
    return /\b(danke|vielen dank|super|toll|prima|klasse|wunderbar|perfekt|ausgezeichnet|top|genial|danke dir|danke ihnen|vielen dank dir)\b/i.test(text) &&
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
    "Hallo! 👋 Ich bin Zoom, der Luxfly-Assistent. Stellen Sie mir alle Fragen — Preise, Öffnungszeiten, Buchung, Kinder, Standort und mehr!",
    "Hallo! 😊 Willkommen bei Luxfly. Wie kann ich dir heute helfen?",
    "Hallo! Bereit, über Indoor-Skydiving zu sprechen? 🌬️ Was möchtest du gerne wissen?",
    "Hallo da! Ich bin Zoom ✈️ — dein Luxfly-Führer. Preise, Pakete, Gesundheitsfragen, Richtungen — schieß los!"
  ];
  const replies = [
    "Bitteschön! 😊 Kann ich dir bei etwas anderem helfen?",
    "Gerne geholfen! 🙌 Fühlen Sie sich frei, mich etwas anderes zu fragen.",
    "Natürlich! Lassen Sie mich wissen, wenn Sie weitere Fragen haben. 😄",
    "Gerne! Gibt es noch etwas anderes, das Sie wissen möchten? ✈️"
  ];
  const fallbacks = [
    "Ich bin der Chatbot von Luxfly, also kann ich nur bei Fragen zu Indoor-Skydiving helfen! 🪂\n\nVersuchen Sie zu fragen über:\n💰 **Preise** · ⏰ **Öffnungszeiten** · 📍 **Standort** · 📅 **Buchung** · 🎂 **Geburtstagsfeiern**\n👨‍👩‍👧 **Gruppen** · 🏅 **Erlebnis** · 👕 **Was anziehen** · 🎟️ **Gutscheine** · 💼 **Jobs**\n\nOder erreichen Sie unser Team: 📞 **+32 63 39 11 63** | 💬 **WhatsApp: +32 477 528 566** 😊",
    "Das liegt außerhalb meines Bereichs! Ich bin nur für Luxfly-Fragen eingestellt. 🪂\n\nFür alles andere kann unser Team helfen:\n📞 **+32 63 39 11 63** | 📧 **info@luxfly.lu**\n\nOder fragen Sie mich nach Preisen, Buchung, Öffnungszeiten, Geburtstagsfeiern oder Ausrüstung!",
    "Ich möchte sicherstellen, dass Sie die richtige Antwort bekommen — bitte kontaktieren Sie unser Team direkt:\n📞 **+32 63 39 11 63** | 💬 **WhatsApp: +32 477 528 566**\n\nIch kann Fragen zu Preisen, Paketen, Buchung, Gesundheit, Öffnungszeiten, Standort und mehr beantworten! 😊"
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
      animation: lf-bubble-out 0.26s cubic-bezier(0.34,1.56,0.64,1) forwards;
    }
    @keyframes lf-bubble-out {
      from { opacity: 1; transform: translateY(0) scale(1); }
      to   { opacity: 0; transform: translateY(14px) scale(0.9); }
    }
  `;

  // ─── DOM Setup ──────────────────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const body = document.body;
  const btn = document.createElement('button');
  btn.id = 'lf-chat-btn';
  btn.innerHTML = `<span id="lf-chat-badge" style="display:none">1</span>
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.06 2 11c0 2.64 1.18 5.02 3.07 6.72L4 22l4.54-2.04A10.7 10.7 0 0012 20c5.52 0 10-4.06 10-9S17.52 2 12 2z" fill="white"/>
    </svg>`;
  body.appendChild(btn);

  const win = document.createElement('div');
  win.id = 'lf-chat-window';
  body.appendChild(win);

  const header = document.createElement('div');
  header.id = 'lf-chat-header';
  header.innerHTML = `
    <div id="lf-chat-header-avatar">💬</div>
    <div id="lf-chat-header-info">
      <div id="lf-chat-header-name">Zoom</div>
      <div id="lf-chat-header-status">Online · Immer für Sie da</div>
    </div>
    <button id="lf-chat-close" aria-label="Schließen">✕</button>
  `;
  win.appendChild(header);

  const messages = document.createElement('div');
  messages.id = 'lf-chat-messages';
  win.appendChild(messages);

  const quickBtns = [];
  const quickDiv = document.createElement('div');
  quickDiv.id = 'lf-chat-quick';
  [
    { emoji: '💰', label: 'Preise', q: 'Was sind Ihre Preise?' },
    { emoji: '🕐', label: 'Öffnungszeiten', q: 'Was sind Ihre Öffnungszeiten?' },
    { emoji: '👦', label: 'Kinder', q: 'Ist es sicher für Kinder?' },
    { emoji: '🎟️', label: 'Buchen', q: 'Wie kann ich buchen?' },
    { emoji: '📍', label: 'Standort', q: 'Wo befinden Sie sich?' },
    { emoji: '⭐', label: 'Empfehlung', q: 'Welches Paket empfehlen Sie?' }
  ].forEach(({emoji, label, q}) => {
    const btn = document.createElement('button');
    btn.className = 'lf-quick-btn';
    btn.dataset.q = q;
    btn.textContent = `${emoji} ${label}`;
    quickDiv.appendChild(btn);
    quickBtns.push(btn);
  });
  win.appendChild(quickDiv);

  const form = document.createElement('form');
  form.id = 'lf-chat-form';
  form.innerHTML = `
    <input type="text" id="lf-chat-input" placeholder="Stellen Sie mir eine Frage…" autocomplete="off">
    <button type="submit" id="lf-chat-send" aria-label="Senden">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.9702544,11.6889879 22.9702544,11.6889879 22.9702544,11.6889879 L4.13399899,2.89157414 C3.34915502,2.60314961 2.40734225,2.71455708 1.77946707,3.18681023 C0.994623095,3.81814768 0.837654326,4.90753821 1.15159189,5.69302407 L3.03521743,12.1340171 C3.03521743,12.2911145 3.19218622,12.4482119 3.50612381,12.4482119 L16.6915026,13.2336988 C16.6915026,13.2336988 17.1624089,13.2336988 17.1624089,12.8624067 L17.1624089,12.0768198 C17.1624089,11.6889879 16.6915026,11.4744748 16.6915026,12.4744748 Z" fill="white"/>
      </svg>
    </button>
  `;
  win.appendChild(form);

  const input = form.querySelector('#lf-chat-input');
  const closeBtn = header.querySelector('#lf-chat-close');

  let isOpen = false, greeted = false;

  // ─── Message helpers ────────────────────────────────────────────────────────
  function addMsg(text, type) {
    const msg = document.createElement('div');
    msg.className = `lf-msg lf-msg-${type}`;
    msg.innerHTML = formatResponse(text);
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    const typing = document.createElement('div');
    typing.className = 'lf-msg lf-msg-typing';
    typing.innerHTML = '<div class="lf-dot"></div><div class="lf-dot"></div><div class="lf-dot"></div>';
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;
  }

  function removeTyping() {
    const typing = messages.querySelector('.lf-msg-typing');
    if (typing) typing.remove();
  }

  function toggleQuickBtns(visible) {
    quickDiv.style.display = visible ? 'flex' : 'none';
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
        addMsg("Hallo! 👋 Ich bin Zoom, der Luxfly-Assistent. Stellen Sie mir alle Fragen rund um unser Indoor-Skydiving-Erlebnis — Preise, Buchung, Gesundheit, Kinder, Standort und mehr!", 'bot');
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
  bubble.textContent = 'Haben Sie eine Frage? Fragen Sie hier!';
  bubble.setAttribute('role', 'button');
  bubble.setAttribute('aria-label', 'Chat-Assistent öffnen');
  document.body.appendChild(bubble);
  bubble.addEventListener('click', () => { dismissBubble(); openChat(); });

  // Auto-dismiss after 9 seconds
  const bubbleTimeout = setTimeout(() => dismissBubble(), 9000);
  bubble.addEventListener('click', () => clearTimeout(bubbleTimeout));

})();
