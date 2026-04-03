#!/usr/bin/env python3
"""Fourth comprehensive translation injection — promotions, photos, use-voucher, references, contact, quote, blog."""
import re

TRANSLATIONS = {
  # ── PROMOTIONS PAGE ──
  "Current offers. Good deals for good flyers.": {
    "fr": "Offres actuelles. Bonnes affaires pour de bons pilotes.",
    "de": "Aktuelle Angebote. Gute Deals für gute Flieger.",
    "lb": "Aktuell Offeren. Gutt Deals fir gutt Fléier.",
    "nl": "Huidige aanbiedingen. Goede deals voor goede vliegers."
  },
  "Updated regularly.": {
    "fr": "Mis à jour régulièrement.",
    "de": "Regelmäßig aktualisiert.",
    "lb": "Regelméisseg aktualiséiert.",
    "nl": "Regelmatig bijgewerkt."
  },
  "Active promotions": {
    "fr": "Promotions actives",
    "de": "Aktive Aktionen",
    "lb": "Aktiv Promotiounen",
    "nl": "Actieve promoties"
  },
  "Bring a Friend": {
    "fr": "Amenez un ami",
    "de": "Bringen Sie einen Freund mit",
    "lb": "Bréngt e Frënd mat",
    "nl": "Breng een vriend mee"
  },
  "Book two Discovery flights in the same session and pay for one and a half. Both of you fly.": {
    "fr": "Réservez deux vols Découverte dans la même session et payez un et demi. Vous volez tous les deux.",
    "de": "Buchen Sie zwei Discovery-Flüge in derselben Session und zahlen Sie eineinhalb. Beide von Ihnen fliegen.",
    "lb": "Bucht zwee Discovery-Flëg an derselwechter Session a bezilt een an en halleft. Dir béid fléit.",
    "nl": "Boek twee Discovery-vluchten in dezelfde sessie en betaal anderhalf. Jullie vliegen allebei."
  },
  "Birthday Month": {
    "fr": "Mois d'anniversaire",
    "de": "Geburtstagsmonat",
    "lb": "Gebuertsdag-Mount",
    "nl": "Verjaardagsmaand"
  },
  "Fly within 30 days of your birthday and get 10% off your package.": {
    "fr": "Volez dans les 30 jours de votre anniversaire et obtenez 10% de réduction sur votre forfait.",
    "de": "Fliegen Sie innerhalb von 30 Tagen nach Ihrem Geburtstag und erhalten Sie 10% Rabatt auf Ihr Paket.",
    "lb": "Fléit bannent 30 Deeg vun Ärem Geburtsdag a kritt 10% Rabatt op Äre Pak.",
    "nl": "Vlieg binnen 30 dagen van uw verjaardag en krijg 10% korting op uw pakket."
  },
  "Student Discount": {
    "fr": "Réduction étudiante",
    "de": "Studentenrabatt",
    "lb": "Studenteermässegung",
    "nl": "Studentenkorting"
  },
  "Valid student ID = 10% off all packages, year-round.": {
    "fr": "Carte d'étudiant valide = 10% de réduction sur tous les forfaits, toute l'année.",
    "de": "Gültiger Studentenausweis = 10% Rabatt auf alle Pakete, ganzjährig.",
    "lb": "Gültege Studentenausweis = 10% Rabatt op all Pakete, joer-ronderëm.",
    "nl": "Geldig studentenkaart = 10% korting op alle pakketten, het hele jaar door."
  },
  "Never miss a deal.": {
    "fr": "Ne manquez jamais une offre.",
    "de": "Verpassen Sie kein Angebot.",
    "lb": "Versäumt ni en Deal.",
    "nl": "Mis nooit een aanbieding."
  },
  "Our promotions go out to subscribers first.": {
    "fr": "Nos promotions sont envoyées en priorité aux abonnés.",
    "de": "Unsere Aktionen gehen zuerst an Abonnenten.",
    "lb": "Eis Promotiounen ginn éischt un Abonnenten.",
    "nl": "Onze promoties gaan eerst naar abonnees."
  },
  "Subscribe": {
    "fr": "S'abonner",
    "de": "Abonnieren",
    "lb": "Abonnéieren",
    "nl": "Abonneren"
  },
  "We respect your privacy. Unsubscribe at any time.": {
    "fr": "Nous respectons votre vie privée. Désabonnez-vous à tout moment.",
    "de": "Wir respektieren Ihre Privatsphäre. Jederzeit abmeldbar.",
    "lb": "Mir respektéieren Är Privatsphär. Jidderzeits ofmeldbar.",
    "nl": "Wij respecteren uw privacy. U kunt zich op elk moment uitschrijven."
  },

  # ── PHOTOS PAGE ──
  "Gallery": {
    "fr": "Galerie",
    "de": "Galerie",
    "lb": "Galerie",
    "nl": "Galerij"
  },
  "In the air. Every flight looks different.": {
    "fr": "Dans les airs. Chaque vol est différent.",
    "de": "In der Luft. Jeder Flug sieht anders aus.",
    "lb": "An der Loft. All Fluch gesäit anescht aus.",
    "nl": "In de lucht. Elke vlucht ziet er anders uit."
  },
  "Every Luxfly session can include professional in-tunnel photography.": {
    "fr": "Chaque session Luxfly peut inclure de la photographie professionnelle dans le tunnel.",
    "de": "Jede Luxfly-Session kann professionelle Tunnel-Fotografie beinhalten.",
    "lb": "All Luxfly-Session kann professionell Tunnel-Fotografie enthalen.",
    "nl": "Elke Luxfly-sessie kan professionele in-tunnel fotografie bevatten."
  },
  "Our photographer captures your flight from the viewing window — helmet camera footage and full hi-res still photos available.": {
    "fr": "Notre photographe capture votre vol depuis la fenêtre de visualisation — vidéo de caméra de casque et photos statiques haute résolution disponibles.",
    "de": "Unser Fotograf nimmt Ihren Flug vom Schaufenster auf — Helmkamera-Footage und vollständige Hi-Res-Fotos verfügbar.",
    "lb": "Eise Fotograf hält Äre Fluch vun der Kuckfënster fest — Helmkamerafilmmaterial an vollständeg Hi-Res-Fotoen verfügbar.",
    "nl": "Onze fotograaf legt uw vlucht vast vanuit het kijkraam — helmcamerabeelden en full hi-res foto's beschikbaar."
  },
  "Tag us.": {
    "fr": "Taguez-nous.",
    "de": "Taggen Sie uns.",
    "lb": "Taggt eis.",
    "nl": "Tag ons."
  },
  "Share your flight on Instagram and tag @luxflylu for a chance to be featured on our page.": {
    "fr": "Partagez votre vol sur Instagram et taguez @luxflylu pour avoir une chance d'être présenté sur notre page.",
    "de": "Teilen Sie Ihren Flug auf Instagram und taggen Sie @luxflylu für eine Chance, auf unserer Seite vorgestellt zu werden.",
    "lb": "Deelt Äre Fluch op Instagram a taggt @luxflylu fir eng Chance op eisem Profil ze erscheinen.",
    "nl": "Deel uw vlucht op Instagram en tag @luxflylu voor een kans om op onze pagina te verschijnen."
  },

  # ── USE VOUCHER PAGE ──
  "Redeeming your voucher.": {
    "fr": "Échange de votre bon.",
    "de": "Einlösen Ihres Gutscheins.",
    "lb": "Aléisen vun Ärem Schäin.",
    "nl": "Uw bon inwisselen."
  },
  "Three steps from code to flight.": {
    "fr": "Trois étapes du code au vol.",
    "de": "Drei Schritte vom Code zum Flug.",
    "lb": "Dräi Schrëtt vum Code zum Fluch.",
    "nl": "Drie stappen van code naar vlucht."
  },
  "How to use your voucher": {
    "fr": "Comment utiliser votre bon",
    "de": "Wie man seinen Gutschein verwendet",
    "lb": "Wéi ee säi Schäin benotzt",
    "nl": "Hoe u uw bon gebruikt"
  },
  "Can I split a voucher across multiple sessions?": {
    "fr": "Puis-je diviser un bon sur plusieurs sessions ?",
    "de": "Kann ich einen Gutschein auf mehrere Sessions aufteilen?",
    "lb": "Kann ech e Schäin op verschidde Sessionen opdeelen?",
    "nl": "Kan ik een bon over meerdere sessies verdelen?"
  },
  "What if my voucher doesn't cover the full cost?": {
    "fr": "Et si mon bon ne couvre pas le coût total ?",
    "de": "Was, wenn mein Gutschein die vollen Kosten nicht deckt?",
    "lb": "A wann mäi Schäin déi vollständeg Käschte net deckt?",
    "nl": "Wat als mijn bon de volledige kosten niet dekt?"
  },
  "Does my voucher expire?": {
    "fr": "Mon bon expire-t-il ?",
    "de": "Läuft mein Gutschein ab?",
    "lb": "Verfall mäi Schäin?",
    "nl": "Verloopt mijn bon?"
  },
  "Can I transfer my voucher to someone else?": {
    "fr": "Puis-je transférer mon bon à quelqu'un d'autre ?",
    "de": "Kann ich meinen Gutschein an jemand anderen übertragen?",
    "lb": "Kann ech mäi Schäin un jemanden andescht transferéieren?",
    "nl": "Kan ik mijn bon overdragen aan iemand anders?"
  },
  "What if I lose my voucher code?": {
    "fr": "Et si je perds mon code de bon ?",
    "de": "Was, wenn ich meinen Gutscheincode verliere?",
    "lb": "A wann ech mäi Schäinkod verléieren?",
    "nl": "Wat als ik mijn boncode verlies?"
  },
  "Can I get a cash refund on my voucher?": {
    "fr": "Puis-je obtenir un remboursement en espèces sur mon bon ?",
    "de": "Kann ich eine Barerstattung für meinen Gutschein erhalten?",
    "lb": "Kann ech eng Barrückerstattung fir mäi Schäin kréien?",
    "nl": "Kan ik een contante terugbetaling krijgen voor mijn bon?"
  },
  "Ready to fly? Your voucher is waiting to be used.": {
    "fr": "Prêt à voler ? Votre bon attend d'être utilisé.",
    "de": "Bereit zu fliegen? Ihr Gutschein wartet darauf, eingelöst zu werden.",
    "lb": "Prett fir ze fléien? Äre Schäin waart drop benotzt ze ginn.",
    "nl": "Klaar om te vliegen? Uw bon wacht om gebruikt te worden."
  },

  # ── REFERENCES PAGE ──
  "They came. They flew. They came back.": {
    "fr": "Ils sont venus. Ils ont volé. Ils sont revenus.",
    "de": "Sie kamen. Sie flogen. Sie kamen wieder.",
    "lb": "Si sinn komm. Si sinn geflu. Si sinn zréckkomm.",
    "nl": "Ze kwamen. Ze vlogen. Ze kwamen terug."
  },
  "Luxfly has hosted events for leading companies and organisations across Luxembourg and the Greater Region.": {
    "fr": "Luxfly a organisé des événements pour les principales entreprises et organisations à travers le Luxembourg et la Grande Région.",
    "de": "Luxfly hat Veranstaltungen für führende Unternehmen und Organisationen in ganz Luxemburg und der Großregion ausgerichtet.",
    "lb": "Luxfly huet Eventer fir féierende Firmen an Organisatiounen a ganz Lëtzebuerg an der Groussregioun organiséiert.",
    "nl": "Luxfly heeft evenementen georganiseerd voor toonaangevende bedrijven en organisaties in heel Luxemburg en de Grootregio."
  },
  "Why they return": {
    "fr": "Pourquoi ils reviennent",
    "de": "Warum sie zurückkehren",
    "lb": "Firwat si zréckkomm",
    "nl": "Waarom ze terugkomen"
  },
  "Because it works.": {
    "fr": "Parce que ça marche.",
    "de": "Weil es funktioniert.",
    "lb": "Well et funktionéiert.",
    "nl": "Omdat het werkt."
  },
  "Most corporate clients return once a year. Some come twice or more.": {
    "fr": "La plupart des clients d'entreprise reviennent une fois par an. Certains viennent deux fois ou plus.",
    "de": "Die meisten Unternehmenskunden kommen einmal im Jahr zurück. Manche kommen zweimal oder häufiger.",
    "lb": "Déi meescht Firmeklienten kommen eng Kéier d'Joer zréck. E puer kommen zwee Kéier oder méi.",
    "nl": "De meeste zakelijke klanten keren eens per jaar terug. Sommigen komen twee keer of vaker."
  },
  "Add your company to the list.": {
    "fr": "Ajoutez votre entreprise à la liste.",
    "de": "Fügen Sie Ihr Unternehmen zur Liste hinzu.",
    "lb": "Setzt Är Firma op d'Lëscht.",
    "nl": "Voeg uw bedrijf toe aan de lijst."
  },
  "Plan your event": {
    "fr": "Planifier votre événement",
    "de": "Ihre Veranstaltung planen",
    "lb": "Äert Evenement plannen",
    "nl": "Uw evenement plannen"
  },

  # ── CONTACT PAGE ──
  "Let's talk.": {
    "fr": "Parlons.",
    "de": "Sprechen wir.",
    "lb": "Loosst eis schwätzen.",
    "nl": "Laten we praten."
  },
  "General enquiries, group bookings, press, partnerships.": {
    "fr": "Demandes générales, réservations de groupe, presse, partenariats.",
    "de": "Allgemeine Anfragen, Gruppenbuchungen, Presse, Partnerschaften.",
    "lb": "Allgemeng Ufroe, Gruppebuchungen, Press, Partnerschafte.",
    "nl": "Algemene vragen, groepsboekingen, pers, partnerschappen."
  },
  "We're here.": {
    "fr": "Nous sommes là.",
    "de": "Wir sind hier.",
    "lb": "Mir sinn hei.",
    "nl": "We zijn er."
  },
  "Right person, right query.": {
    "fr": "La bonne personne, la bonne question.",
    "de": "Die richtige Person, die richtige Anfrage.",
    "lb": "Déi richteg Persoun, déi richteg Ufro.",
    "nl": "De juiste persoon, de juiste vraag."
  },
  "Send us a message.": {
    "fr": "Envoyez-nous un message.",
    "de": "Schicken Sie uns eine Nachricht.",
    "lb": "Schéckt eis eng Noriicht.",
    "nl": "Stuur ons een bericht."
  },
  "Find us": {
    "fr": "Nous trouver",
    "de": "Uns finden",
    "lb": "Eis fannen",
    "nl": "Ons vinden"
  },
  "By public transport:": {
    "fr": "En transport en commun :",
    "de": "Mit öffentlichen Verkehrsmitteln:",
    "lb": "Mat ëffentleche Verkéiersmëttelen:",
    "nl": "Met het openbaar vervoer:"
  },
  "By bike:": {
    "fr": "À vélo :",
    "de": "Mit dem Fahrrad:",
    "lb": "Mat dem Vëlo:",
    "nl": "Met de fiets:"
  },
  "Opening hours.": {
    "fr": "Heures d'ouverture.",
    "de": "Öffnungszeiten.",
    "lb": "Öffnungszäiten.",
    "nl": "Openingstijden."
  },
  "Booking strongly recommended.": {
    "fr": "Réservation fortement recommandée.",
    "de": "Buchung wird dringend empfohlen.",
    "lb": "Buchung gëtt dringend empfohlen.",
    "nl": "Reservering sterk aanbevolen."
  },

  # ── QUOTE PAGE ──
  "Tell us about your event.": {
    "fr": "Parlez-nous de votre événement.",
    "de": "Erzählen Sie uns von Ihrer Veranstaltung.",
    "lb": "Erzielt eis vun Ärem Evenement.",
    "nl": "Vertel ons over uw evenement."
  },
  "We'll come back to you within 24 hours with availability and a personalised proposal.": {
    "fr": "Nous vous répondrons dans les 24 heures avec les disponibilités et une proposition personnalisée.",
    "de": "Wir melden uns innerhalb von 24 Stunden mit Verfügbarkeiten und einem personalisierten Vorschlag bei Ihnen.",
    "lb": "Mir melde eis bannent 24 Stonnen mat Verfügbarkeetsinformatiounen an engem personaliséierten Virschlag bei Iech.",
    "nl": "We komen binnen 24 uur bij u terug met beschikbaarheid en een persoonlijk voorstel."
  },
  "What happens next": {
    "fr": "Que se passe-t-il ensuite",
    "de": "Was passiert als nächstes",
    "lb": "Wat geschitt als nächst",
    "nl": "Wat er daarna gebeurt"
  },
  "We review your request": {
    "fr": "Nous examinons votre demande",
    "de": "Wir prüfen Ihre Anfrage",
    "lb": "Mir iwwerpréiwen Är Ufro",
    "nl": "We bekijken uw aanvraag"
  },
  "Personalised proposal": {
    "fr": "Proposition personnalisée",
    "de": "Personalisiertes Angebot",
    "lb": "Personaliséierten Virschlag",
    "nl": "Persoonlijk voorstel"
  },
  "Secure your date": {
    "fr": "Sécurisez votre date",
    "de": "Sichern Sie sich Ihr Datum",
    "lb": "Séchert Äert Datum",
    "nl": "Beveilig uw datum"
  },
  "Or just call us.": {
    "fr": "Ou appelez-nous simplement.",
    "de": "Oder rufen Sie uns einfach an.",
    "lb": "Oder rufft eis einfach un.",
    "nl": "Of bel ons gewoon."
  },
  "Send your request": {
    "fr": "Envoyer votre demande",
    "de": "Anfrage senden",
    "lb": "Ufro schécken",
    "nl": "Verzoek verzenden"
  },

  # ── BLOG PAGE ──
  "Stories from the tunnel.": {
    "fr": "Histoires du tunnel.",
    "de": "Geschichten aus dem Tunnel.",
    "lb": "Geschichten aus dem Tunnel.",
    "nl": "Verhalen uit de tunnel."
  },
  "Tips, news, and the occasional moment that made us smile.": {
    "fr": "Conseils, actualités et quelques moments qui nous ont fait sourire.",
    "de": "Tipps, Neuigkeiten und gelegentliche Momente, die uns zum Lächeln gebracht haben.",
    "lb": "Tipps, Noriichten an heiansdo Momenter déi eis zum Laache bruecht hunn.",
    "nl": "Tips, nieuws en af en toe een moment dat ons deed glimlachen."
  },
  "Get the good stuff.": {
    "fr": "Obtenez les bonnes choses.",
    "de": "Holen Sie sich die guten Sachen.",
    "lb": "Kritt déi gutt Saachen.",
    "nl": "Haal het goede."
  },
  "New posts, promotions, and events in your inbox.": {
    "fr": "Nouvelles publications, promotions et événements dans votre boîte de réception.",
    "de": "Neue Beiträge, Aktionen und Events in Ihrem Posteingang.",
    "lb": "Nei Posts, Promotiounen a Eventer a Ärer Inbox.",
    "nl": "Nieuwe berichten, promoties en evenementen in uw inbox."
  },
  "Read more →": {
    "fr": "Lire la suite →",
    "de": "Mehr lesen →",
    "lb": "Méi liesen →",
    "nl": "Meer lezen →"
  },

  # ── OPENING HOURS EXTRA STRINGS ──
  "While you're here": {
    "fr": "Pendant que vous êtes là",
    "de": "Während Sie hier sind",
    "lb": "Während Dir hei sidd",
    "nl": "Terwijl u hier bent"
  },
  "The Art of Skydiving Museum included with all flight packages. €15 standalone entry.": {
    "fr": "Le musée L'Art du Saut en Chute Libre est inclus dans tous les forfaits de vol. Entrée autonome 15 €.",
    "de": "Das Museum Die Kunst des Skydivings ist in allen Flugpaketen enthalten. Einzeleintritt 15 €.",
    "lb": "De Museum D'Konscht vum Skydiving ass a all Fluchpaketen enthalen. Eenzel-Entrée 15 €.",
    "nl": "Het museum De Kunst van het Skydiven is inbegrepen in alle vliegpakketten. Losstaand toegang €15."
  },
  "Perfect for spectators and post-flight refreshments.": {
    "fr": "Parfait pour les spectateurs et les rafraîchissements après le vol.",
    "de": "Perfekt für Zuschauer und Erfrischungen nach dem Flug.",
    "lb": "Perfekt fir Spectateuren a Rafraîchissementer no dem Fluch.",
    "nl": "Perfect voor toeschouwers en verfrissingen na de vlucht."
  },
  "Observation area": {
    "fr": "Zone d'observation",
    "de": "Beobachtungsbereich",
    "lb": "Observatiounsberäich",
    "nl": "Observatiegebied"
  },
  "Watch other flyers from the viewing area. Free for all visitors.": {
    "fr": "Regardez les autres pilotes depuis la zone de visualisation. Gratuit pour tous les visiteurs.",
    "de": "Beobachten Sie andere Flieger aus dem Zuschaubereich. Kostenlos für alle Besucher.",
    "lb": "Kuckt aner Fléier aus dem Kuckberäich. Gratis fir all Besucher.",
    "nl": "Kijk naar andere vliegers vanuit de kijkruimte. Gratis voor alle bezoekers."
  },
  "After-hours private hire": {
    "fr": "Location privée en dehors des heures",
    "de": "Privatmiete außerhalb der Öffnungszeiten",
    "lb": "Privat Buchung ausserhalb der Ouessungszäiten",
    "nl": "Privéhuur buiten openingstijden"
  },
  "When to book": {
    "fr": "Quand réserver",
    "de": "Wann buchen",
    "lb": "Wéini buchen",
    "nl": "Wanneer boeken"
  },
  "If you're bringing a group of 5 or more, we recommend booking at least 48 hours in advance to guarantee your preferred time slot.": {
    "fr": "Si vous amenez un groupe de 5 personnes ou plus, nous recommandons de réserver au moins 48 heures à l'avance pour garantir votre créneau horaire préféré.",
    "de": "Wenn Sie eine Gruppe von 5 oder mehr Personen mitbringen, empfehlen wir, mindestens 48 Stunden im Voraus zu buchen, um Ihren bevorzugten Zeitslot zu garantieren.",
    "lb": "Wann Dir eng Grupp vun 5 oder méi matbréngt, empfeelen mir mindestens 48 Stonnen am Viraus ze buchen fir Äre bevorzugten Zäitslot ze garantéieren.",
    "nl": "Als u een groep van 5 of meer meebrengt, raden we aan minimaal 48 uur van tevoren te boeken om uw gewenste tijdslot te garanderen."
  },

  # ── GLOBAL SHARED STRINGS ──
  "Organizing an Event": {
    "fr": "Organiser un événement",
    "de": "Eine Veranstaltung organisieren",
    "lb": "En Evenement organiséieren",
    "nl": "Een evenement organiseren"
  },
  "Organize an Event": {
    "fr": "Organiser un événement",
    "de": "Veranstaltung organisieren",
    "lb": "Evenement organiséieren",
    "nl": "Evenement organiseren"
  },
  "Becoming Proflyer": {
    "fr": "Devenir Proflyer",
    "de": "Proflyer werden",
    "lb": "Proflyer ginn",
    "nl": "Proflyer worden"
  },
  "Events and Camps": {
    "fr": "Événements et camps",
    "de": "Veranstaltungen und Camps",
    "lb": "Eventer a Camps",
    "nl": "Evenementen en kampen"
  },
  "Indoor Activities": {
    "fr": "Activités intérieures",
    "de": "Indoor-Aktivitäten",
    "lb": "Indoor-Aktivitéiten",
    "nl": "Indoor activiteiten"
  },
  "Your Photos and Videos": {
    "fr": "Vos Photos et Vidéos",
    "de": "Ihre Fotos und Videos",
    "lb": "Är Fotoen a Videoen",
    "nl": "Uw foto's en video's"
  },
  "Opening Hours": {
    "fr": "Heures d'ouverture",
    "de": "Öffnungszeiten",
    "lb": "Öffnungszäiten",
    "nl": "Openingstijden"
  },
  "Who We Are": {
    "fr": "Qui nous sommes",
    "de": "Wer wir sind",
    "lb": "Wien mir sinn",
    "nl": "Wie we zijn"
  },
  "Job Vacancies": {
    "fr": "Offres d'emploi",
    "de": "Stellenangebote",
    "lb": "Aarbechtsangeboten",
    "nl": "Vacatures"
  },
  "Our Partners": {
    "fr": "Nos partenaires",
    "de": "Unsere Partner",
    "lb": "Eis Partner",
    "nl": "Onze partners"
  },
  "The Region": {
    "fr": "La Région",
    "de": "Die Region",
    "lb": "D'Regioun",
    "nl": "De Regio"
  },
  "Shared Session": {
    "fr": "Session partagée",
    "de": "Gemeinsame Session",
    "lb": "Gedeelt Session",
    "nl": "Gedeelde sessie"
  },
  "Infrastructure": {
    "fr": "Infrastructure",
    "de": "Infrastruktur",
    "lb": "Infrastruktur",
    "nl": "Infrastructuur"
  },
  "Coaches": {
    "fr": "Coaches",
    "de": "Coaches",
    "lb": "Coaches",
    "nl": "Coaches"
  },
  "FLYOLOGY": {
    "fr": "FLYOLOGIE",
    "de": "FLYOLOGIE",
    "lb": "FLYOLOGIE",
    "nl": "FLYOLOGIE"
  },
  "F.A.Q.": {
    "fr": "F.A.Q.",
    "de": "F.A.Q.",
    "lb": "F.A.Q.",
    "nl": "F.A.Q."
  },
  "Hot Air Balloon": {
    "fr": "Montgolfière",
    "de": "Heißluftballon",
    "lb": "Loftballon",
    "nl": "Luchtballon"
  },
  "Pricing": {
    "fr": "Tarification",
    "de": "Preisgestaltung",
    "lb": "Präisgestaltung",
    "nl": "Prijsstelling"
  },
  "Request for Quote": {
    "fr": "Demande de devis",
    "de": "Angebotsanfrage",
    "lb": "Offertufro",
    "nl": "Offerte aanvragen"
  },
  "References": {
    "fr": "Références",
    "de": "Referenzen",
    "lb": "Referenzen",
    "nl": "Referenties"
  },
  "Buy a Gift Voucher": {
    "fr": "Acheter un bon cadeau",
    "de": "Geschenkgutschein kaufen",
    "lb": "Kadosschäin kafen",
    "nl": "Cadeaubon kopen"
  },
  "Use a Gift Voucher": {
    "fr": "Utiliser un bon cadeau",
    "de": "Geschenkgutschein einlösen",
    "lb": "Kadosschäin benotzen",
    "nl": "Cadeaubon gebruiken"
  },
  "The Activity": {
    "fr": "L'Activité",
    "de": "Die Aktivität",
    "lb": "D'Aktivitéit",
    "nl": "De Activiteit"
  },
  "Loyalty Program": {
    "fr": "Programme de fidélité",
    "de": "Treueprogramm",
    "lb": "Loyalitéitsprogramm",
    "nl": "Loyaliteitsprogramma"
  },
  "Activity Flow": {
    "fr": "Déroulement de l'activité",
    "de": "Aktivitätsablauf",
    "lb": "Aktivitéitsofloop",
    "nl": "Activiteitenverloop"
  },
  "Events & Promotions": {
    "fr": "Événements & Promotions",
    "de": "Veranstaltungen & Aktionen",
    "lb": "Eventer & Promotiounen",
    "nl": "Evenementen & Promoties"
  },
  "Bachelor & Bachelorette": {
    "fr": "EVJF & EVG",
    "de": "Junggesellenabschied",
    "lb": "Jonggesellen & Brautparty",
    "nl": "Vrijgezellenfeest"
  },
  "Photos & Vidéos": {
    "fr": "Photos & Vidéos",
    "de": "Fotos & Videos",
    "lb": "Fotoen & Videoen",
    "nl": "Foto's & Video's"
  },
  "Contact": {
    "fr": "Contact",
    "de": "Kontakt",
    "lb": "Kontakt",
    "nl": "Contact"
  },
  "Home": {
    "fr": "Accueil",
    "de": "Startseite",
    "lb": "Heem",
    "nl": "Home"
  },
  "Indoor Skydiving": {
    "fr": "Saut en chute libre indoor",
    "de": "Indoor-Skydiving",
    "lb": "Indoor-Skydiving",
    "nl": "Indoor skydiven"
  },
  "Corporate": {
    "fr": "Entreprises",
    "de": "Unternehmen",
    "lb": "Firmeklienten",
    "nl": "Zakelijk"
  },
  "About": {
    "fr": "À propos",
    "de": "Über",
    "lb": "Iwwer",
    "nl": "Over"
  },
  "Blog": {
    "fr": "Blog",
    "de": "Blog",
    "lb": "Blog",
    "nl": "Blog"
  },
  "Museum": {
    "fr": "Musée",
    "de": "Museum",
    "lb": "Museum",
    "nl": "Museum"
  },
  "Prices": {
    "fr": "Prix",
    "de": "Preise",
    "lb": "Präisser",
    "nl": "Prijzen"
  },
  "Conditions": {
    "fr": "Conditions",
    "de": "Bedingungen",
    "lb": "Bedingungen",
    "nl": "Voorwaarden"
  },
  "Pilates": {
    "fr": "Pilates",
    "de": "Pilates",
    "lb": "Pilates",
    "nl": "Pilates"
  },
  "Bar": {
    "fr": "Bar",
    "de": "Bar",
    "lb": "Bar",
    "nl": "Bar"
  },
  "Promotions": {
    "fr": "Promotions",
    "de": "Aktionen",
    "lb": "Promotiounen",
    "nl": "Promoties"
  },
}


def inject(content, lang, entries):
    new_lines = [f"      // ── BIG BATCH4 {lang.upper()} ──"]
    for en, t in entries.items():
        if lang not in t:
            continue
        val = t[lang]
        ek = en.replace('\\', '\\\\').replace("'", "\\'")
        vk = val.replace('\\', '\\\\').replace("'", "\\'")
        new_lines.append(f"      '{ek}': '{vk}',")
    block = '\n' + '\n'.join(new_lines) + '\n'
    pats = {
        'fr': r"(    fr:\s*\{)(.*?)(    \},\s*\n\s*de:)",
        'de': r"(    de:\s*\{)(.*?)(    \},\s*\n\s*lb:)",
        'lb': r"(    lb:\s*\{)(.*?)(    \},\s*\n\s*nl:)",
        'nl': r"(    nl:\s*\{)(.*?)(    \}[^,])",
    }
    pat = pats[lang]
    m = re.search(pat, content, re.DOTALL)
    if not m:
        print(f"  ERROR: could not find {lang} block")
        return content
    return content[:m.start()] + m.group(1) + m.group(2) + block + '    ' + m.group(3).lstrip() + content[m.end():]


with open('/Users/zoomzoom/workspace/Luxfly Website/js/i18n.js') as f:
    content = f.read()

for lang in ['fr', 'de', 'lb', 'nl']:
    content = inject(content, lang, TRANSLATIONS)
    print(f"  {lang} done")

with open('/Users/zoomzoom/workspace/Luxfly Website/js/i18n.js', 'w') as f:
    f.write(content)

print("Done. Lines:", content.count('\n'))
