#!/usr/bin/env python3
"""Third comprehensive translation injection — prices, kids, vouchers, birthdays, bachelor, flyology, region, partners, hot-air-balloon, indoor-activities, shared-sessions, pro-prices, pro-events, events-pricing."""
import re

TRANSLATIONS = {
  # ── PRICES PAGE ──
  "Fly": {
    "fr": "Voler",
    "de": "Fliegen",
    "lb": "Fléien",
    "nl": "Vliegen"
  },
  "Packages for every kind of flyer. From first-timers to frequent flyers.": {
    "fr": "Forfaits pour tous les types de pilotes. Des débutants aux habitués.",
    "de": "Pakete für jeden Fliegertyp. Von Erstfliegern bis Vielfliegern.",
    "lb": "Pakete fir all Aart vu Fléier. Vun Éiertfliger bis Vielfliger.",
    "nl": "Pakketten voor elk type vlieger. Van eerstefliegers tot veelfliegers."
  },
  "All packages include full gear, safety briefing, and a qualified instructor.": {
    "fr": "Tous les forfaits comprennent l'équipement complet, le briefing de sécurité et un instructeur qualifié.",
    "de": "Alle Pakete beinhalten vollständige Ausrüstung, Sicherheitsbriefing und einen qualifizierten Instruktor.",
    "lb": "All Pakete enthalen vollständeg Ausrüstung, Sécherheetsbriefing an en qualifizéierten Instrukter.",
    "nl": "Alle pakketten bevatten volledige uitrusting, veiligheidsbriefing en een gekwalificeerde instructeur."
  },
  "Choose your flight time": {
    "fr": "Choisissez votre durée de vol",
    "de": "Wählen Sie Ihre Flugzeit",
    "lb": "Wielt Är Fluchzäit",
    "nl": "Kies uw vluchtijd"
  },
  "All prices include equipment rental, safety briefing, and instructor supervision inside the tunnel.": {
    "fr": "Tous les prix incluent la location d'équipement, le briefing de sécurité et la supervision d'un instructeur dans le tunnel.",
    "de": "Alle Preise beinhalten Ausrüstungsverleih, Sicherheitsbriefing und Instruktorenaufsicht im Tunnel.",
    "lb": "All Präisser enthalen Ausrüstungsverleih, Sécherheetsbriefing an Instrukteursaufsicht am Tunnel.",
    "nl": "Alle prijzen omvatten uitrusting huren, veiligheidsbriefing en instructeurstoezicht in de tunnel."
  },
  "Flying with a group?": {
    "fr": "Vous volez en groupe ?",
    "de": "Sie fliegen mit einer Gruppe?",
    "lb": "Dir fléit mat enger Grupp?",
    "nl": "Vliegt u met een groep?"
  },
  "Groups of 10 or more receive preferential rates and dedicated attention.": {
    "fr": "Les groupes de 10 personnes ou plus bénéficient de tarifs préférentiels et d'une attention dédiée.",
    "de": "Gruppen ab 10 Personen erhalten Vorzugspreise und dedizierte Betreuung.",
    "lb": "Gruppe vun 10 oder méi kréien Vorzugspräisser an dediziéiert Opriff.",
    "nl": "Groepen van 10 of meer ontvangen voorkeurstarieven en toegewijde aandacht."
  },
  "Get a group quote →": {
    "fr": "Obtenir un devis de groupe →",
    "de": "Gruppenangebot anfragen →",
    "lb": "Gruppenoffert ufroën →",
    "nl": "Groepsofferte aanvragen →"
  },
  "How to book": {
    "fr": "Comment réserver",
    "de": "Wie man bucht",
    "lb": "Wéi man bucht",
    "nl": "Hoe boeken"
  },
  "Full payment is required at time of booking.": {
    "fr": "Le paiement intégral est requis au moment de la réservation.",
    "de": "Die vollständige Zahlung ist zum Zeitpunkt der Buchung erforderlich.",
    "lb": "D'vollständeg Bezuelung ass bei der Buchung erfuerderlech.",
    "nl": "Volledige betaling is vereist bij het boeken."
  },
  "See conditions": {
    "fr": "Voir les conditions",
    "de": "Bedingungen ansehen",
    "lb": "Bedingungen kucken",
    "nl": "Voorwaarden bekijken"
  },
  "Book online": {
    "fr": "Réserver en ligne",
    "de": "Online buchen",
    "lb": "Online buchen",
    "nl": "Online boeken"
  },
  "Loyalty points on every euro spent": {
    "fr": "Points de fidélité sur chaque euro dépensé",
    "de": "Treuepunkte für jeden ausgegebenen Euro",
    "lb": "Loyalitéitspunkten op all ausgegebene Euro",
    "nl": "Loyaliteitspunten op elke bestede euro"
  },
  "Gift vouchers for any package": {
    "fr": "Bons cadeaux pour tout forfait",
    "de": "Geschenkgutscheine für jedes Paket",
    "lb": "Kadosschäiner fir all Pak",
    "nl": "Cadeaubonnen voor elk pakket"
  },

  # ── KIDS PAGE ──
  "Kids & Families": {
    "fr": "Enfants & Familles",
    "de": "Kinder & Familien",
    "lb": "Kanner & Familljen",
    "nl": "Kinderen & Gezinnen"
  },
  "For the brave ones. From age four.": {
    "fr": "Pour les courageux. Dès quatre ans.",
    "de": "Für die Mutigen. Ab vier Jahren.",
    "lb": "Fir déi Muetege. Ab véier Joer.",
    "nl": "Voor de dapperen. Vanaf vier jaar."
  },
  "The world's most fun activity for kids. Genuinely safe. Genuinely incredible.": {
    "fr": "L'activité la plus amusante au monde pour les enfants. Vraiment sûre. Vraiment incroyable.",
    "de": "Die aufregendste Aktivität der Welt für Kinder. Wirklich sicher. Wirklich unglaublich.",
    "lb": "Déi spannendst Aktivitéit op der Welt fir Kanner. Wierklech sécher. Wierklech ongleeflech.",
    "nl": "De leukste activiteit ter wereld voor kinderen. Echt veilig. Echt ongelooflijk."
  },
  "Every instructor is certified in child-specific flight instruction.": {
    "fr": "Chaque instructeur est certifié pour l'instruction de vol spécifique aux enfants.",
    "de": "Jeder Instruktor ist für kinderspezifische Flugausbildung zertifiziert.",
    "lb": "All Instrukter ass fir kannerspezifescht Fluchënnerrecht zertifizéiert.",
    "lb": "All Instrukter ass fir kannerspecifesch Fluchinstuktioun zertifizéiert.",
    "nl": "Elke instructeur is gecertificeerd voor kindspecifieke vlieginstructie."
  },
  "Kids actually adapt to the air faster than adults.": {
    "fr": "Les enfants s'adaptent en fait à l'air plus vite que les adultes.",
    "de": "Kinder passen sich an die Luft tatsächlich schneller an als Erwachsene.",
    "lb": "Kanner passen sech un d'Loft tatsächlech méi schnell un wéi Erwuessener.",
    "nl": "Kinderen passen zich eigenlijk sneller aan de lucht aan dan volwassenen."
  },
  "A parent or legal guardian must be present at all times.": {
    "fr": "Un parent ou tuteur légal doit être présent en tout temps.",
    "de": "Ein Elternteil oder gesetzlicher Vormund muss jederzeit anwesend sein.",
    "lb": "En Elterendeel oder gesetzleche Virmund muss zu all Zäiten präsent sinn.",
    "nl": "Een ouder of wettelijke voogd moet te allen tijde aanwezig zijn."
  },
  "Kids under 18 require signed parental consent.": {
    "fr": "Les enfants de moins de 18 ans nécessitent un consentement parental signé.",
    "de": "Kinder unter 18 Jahren benötigen eine unterschriebene elterliche Einwilligung.",
    "lb": "Kanner ënner 18 Joer brauchen eng ënnerschriwwene Elterenzoustimmung.",
    "nl": "Kinderen onder 18 jaar hebben ondertekende ouderlijke toestemming nodig."
  },
  "Parents What parents need to know.": {
    "fr": "Parents Ce que les parents doivent savoir.",
    "de": "Eltern Was Eltern wissen müssen.",
    "lb": "Elteren Wat Elteren wëssen mussen.",
    "nl": "Ouders Wat ouders moeten weten."
  },
  "Birthday Parties": {
    "fr": "Fêtes d'anniversaire",
    "de": "Geburtstagspartys",
    "lb": "Gebuertsdagsfeiern",
    "nl": "Verjaardagsfeestjes"
  },
  "School Groups": {
    "fr": "Groupes scolaires",
    "de": "Schulgruppen",
    "lb": "Schoulgruppen",
    "nl": "Schoolgroepen"
  },
  "Gift Vouchers": {
    "fr": "Bons cadeaux",
    "de": "Geschenkgutscheine",
    "lb": "Kadosschäiner",
    "nl": "Cadeaubonnen"
  },
  "Book their adventure today.": {
    "fr": "Réservez leur aventure aujourd'hui.",
    "de": "Buchen Sie ihr Abenteuer heute.",
    "lb": "Bucht hiert Abenteuer haut.",
    "nl": "Boek hun avontuur vandaag."
  },

  # ── GIFT VOUCHER PAGE ──
  "Give them something they'll never forget.": {
    "fr": "Offrez-leur quelque chose qu'ils n'oublieront jamais.",
    "de": "Geben Sie ihnen etwas, das sie nie vergessen werden.",
    "lb": "Gitt hinnen eppes dat si ni vergiessen.",
    "nl": "Geef ze iets dat ze nooit vergeten."
  },
  "The most unusual, most talked-about gift you can give.": {
    "fr": "Le cadeau le plus insolite et le plus commenté que vous puissiez offrir.",
    "de": "Das ungewöhnlichste, meistbesprochene Geschenk, das Sie machen können.",
    "lb": "Dat ongewéinlechst, meescht diskutéiertst Kaddo dat Dir ginn kënnt.",
    "nl": "Het meest ongewone, meest besproken cadeau dat u kunt geven."
  },
  "Not another thing. An experience.": {
    "fr": "Pas encore une chose. Une expérience.",
    "de": "Nicht noch eine Sache. Ein Erlebnis.",
    "lb": "Net nach eng Saach. Eng Erfarung.",
    "nl": "Niet nog een ding. Een ervaring."
  },
  "Most gifts get forgotten. But no one forgets their first time in the air.": {
    "fr": "La plupart des cadeaux sont oubliés. Mais personne n'oublie sa première fois dans les airs.",
    "de": "Die meisten Geschenke werden vergessen. Aber niemand vergisst seine erste Zeit in der Luft.",
    "lb": "Déi meescht Kaddeaue gi vergiess. Mee keen vergësst seng éischte Kéier an der Loft.",
    "nl": "De meeste cadeaus worden vergeten. Maar niemand vergeet zijn eerste keer in de lucht."
  },
  "Every person who flies at Luxfly says the same thing when they land: \"I want to do that again.\"": {
    "fr": "Chaque personne qui vole chez Luxfly dit la même chose en atterrissant : \"Je veux recommencer.\"",
    "de": "Jede Person, die bei Luxfly fliegt, sagt dasselbe bei der Landung: \"Ich will das noch einmal machen.\"",
    "lb": "All Persoun déi bei Luxfly fléit seet datselwecht bei der Landung: \"Ech wëll dat nach eng Kéier maachen.\"",
    "nl": "Iedereen die bij Luxfly vliegt zegt hetzelfde als ze landen: \"Ik wil dat nog een keer doen.\""
  },
  "Valid for 12 months": {
    "fr": "Valable 12 mois",
    "de": "12 Monate gültig",
    "lb": "12 Méint gülteg",
    "nl": "12 maanden geldig"
  },
  "Any package": {
    "fr": "N'importe quel forfait",
    "de": "Jedes Paket",
    "lb": "All Pak",
    "nl": "Elk pakket"
  },
  "Instant or printed": {
    "fr": "Instantané ou imprimé",
    "de": "Sofort oder gedruckt",
    "lb": "Direkt oder gedréckt",
    "nl": "Direct of gedrukt"
  },
  "Digital delivery by email for last-minute gifts or a beautiful printed card for something more personal.": {
    "fr": "Livraison numérique par e-mail pour les cadeaux de dernière minute ou une belle carte imprimée pour quelque chose de plus personnel.",
    "de": "Digitale Lieferung per E-Mail für Last-Minute-Geschenke oder eine schöne gedruckte Karte für etwas Persönlicheres.",
    "lb": "Digitale Liwwerung per E-Mail fir Last-Minute-Kaddeaue oder eng schéin gedréckte Kaart fir eppes Méi Perséinleches.",
    "nl": "Digitale levering per e-mail voor cadeaus op het laatste moment of een mooie gedrukte kaart voor iets persoonlijkers."
  },
  "Order a voucher": {
    "fr": "Commander un bon",
    "de": "Gutschein bestellen",
    "lb": "Schäin bestellen",
    "nl": "Bon bestellen"
  },
  "Order voucher": {
    "fr": "Commander un bon",
    "de": "Gutschein bestellen",
    "lb": "Schäin bestellen",
    "nl": "Bon bestellen"
  },
  "See all packages": {
    "fr": "Voir tous les forfaits",
    "de": "Alle Pakete ansehen",
    "lb": "All Pakete kucken",
    "nl": "Alle pakketten bekijken"
  },

  # ── BIRTHDAYS PAGE ──
  "The birthday they won't stop talking about.": {
    "fr": "L'anniversaire dont ils ne cesseront de parler.",
    "de": "Der Geburtstag, über den sie nicht aufhören werden zu reden.",
    "lb": "Den Anniversaire iwwer deen si net ophalen ze schwätzen.",
    "nl": "De verjaardag waar ze niet over ophouden."
  },
  "We handle the excitement. You handle the cake.": {
    "fr": "Nous gérons l'excitation. Vous gérez le gâteau.",
    "de": "Wir übernehmen die Aufregung. Sie kümmern sich um den Kuchen.",
    "lb": "Mir kümmere eis ëm d'Opregung. Dir kümmert Iech ëm de Kuch.",
    "nl": "Wij regelen de opwinding. U regelt de taart."
  },
  "Ditch the party room.": {
    "fr": "Oubliez la salle de fête.",
    "de": "Vergessen Sie den Partyraum.",
    "lb": "Vergiess de Partyraum.",
    "nl": "Vergeet de partyruimte."
  },
  "Luxfly hosts private birthday sessions for kids and adults.": {
    "fr": "Luxfly organise des sessions d'anniversaire privées pour enfants et adultes.",
    "de": "Luxfly veranstaltet private Geburtstagssessions für Kinder und Erwachsene.",
    "lb": "Luxfly organiséiert privat Gebuertsdagssessionen fir Kanner an Erwuessener.",
    "nl": "Luxfly organiseert privé verjaardagssessies voor kinderen en volwassenen."
  },
  "Non-flying guests are welcome to watch from our viewing area.": {
    "fr": "Les invités qui ne volent pas peuvent regarder depuis notre zone de visualisation.",
    "de": "Nicht-fliegende Gäste können von unserer Zuschauergalerie aus zuschauen.",
    "lb": "Net-fléiend Gäscht kënnen aus eisem Kuckberäich zouschauen.",
    "nl": "Niet-vliegende gasten zijn welkom om te kijken vanuit onze kijkruimte."
  },
  "Minimum group: 5 people.": {
    "fr": "Groupe minimum : 5 personnes.",
    "de": "Mindestgruppe: 5 Personen.",
    "lb": "Mindestgrupp: 5 Persounen.",
    "nl": "Minimale groep: 5 personen."
  },
  "Available Wednesday through Sunday, subject to availability.": {
    "fr": "Disponible du mercredi au dimanche, selon disponibilité.",
    "de": "Verfügbar Mittwoch bis Sonntag, nach Verfügbarkeit.",
    "lb": "Verfügbar Mëttwoch bis Sonndeg, no Verfügbarkeet.",
    "nl": "Beschikbaar woensdag tot en met zondag, afhankelijk van beschikbaarheid."
  },
  "How to book a birthday": {
    "fr": "Comment réserver un anniversaire",
    "de": "Wie man einen Geburtstag bucht",
    "lb": "Wéi een e Gebuertsdag bucht",
    "nl": "Een verjaardag boeken"
  },
  "Reserve the date.": {
    "fr": "Réservez la date.",
    "de": "Reservieren Sie das Datum.",
    "lb": "Reservéiert d'Datum.",
    "nl": "Reserveer de datum."
  },

  # ── BACHELOR PAGE ──
  "Bachelor & Hen": {
    "fr": "Enterrement de vie de garçon & de jeune fille",
    "de": "Junggesellenabschied & Junggesellinnenabschied",
    "lb": "Jonggesellen & Brautparty",
    "nl": "Vrijgezellenfeest"
  },
  "The best stag party in Luxembourg.": {
    "fr": "Le meilleur enterrement de vie de garçon au Luxembourg.",
    "de": "Der beste Junggesellenabschied in Luxemburg.",
    "lb": "Déi bescht Jonggeselleparty a Lëtzebuerg.",
    "nl": "Het beste vrijgezellenfeest in Luxemburg."
  },
  "No golf. No paint guns. Just 350 km/h of genuine madness.": {
    "fr": "Pas de golf. Pas de pistolets à peinture. Juste 350 km/h de vraie folie.",
    "de": "Kein Golf. Keine Farbpistolen. Nur 350 km/h echten Wahnsinns.",
    "lb": "Kee Golf. Keng Faarfpistoulen. Just 350 km/h vu wierklecht Wahnsinn.",
    "nl": "Geen golf. Geen verfpistolen. Gewoon 350 km/u pure waanzin."
  },
  "Because they deserve a real send-off.": {
    "fr": "Parce qu'ils méritent un vrai envoi.",
    "de": "Weil sie einen richtigen Abschied verdienen.",
    "lb": "Well si en richtegen Ofscheed verdéngen.",
    "nl": "Want ze verdienen een echte uitzwaai."
  },
  "This is the ultimate pre-wedding activity — something everyone will actually remember.": {
    "fr": "C'est l'activité ultime avant le mariage — quelque chose dont tout le monde se souviendra vraiment.",
    "de": "Das ist die ultimative Vorhochzeitsaktivität — etwas, an das sich wirklich alle erinnern werden.",
    "lb": "Dat ass déi ultimativ Pre-Hochzeitsaktivitéit — eppes un dat sech jiddereen wierklech erënnert.",
    "nl": "Dit is de ultieme activiteit voor het huwelijk — iets waar iedereen echt aan zal denken."
  },
  "Flying is genuinely memorable.": {
    "fr": "Voler est vraiment mémorable.",
    "de": "Fliegen ist wirklich unvergesslich.",
    "lb": "Fléien ass wierklech unvergiesslech.",
    "nl": "Vliegen is echt onvergetelijk."
  },
  "No cheesy games. No borrowed tuxedo.": {
    "fr": "Pas de jeux ringards. Pas de smoking emprunté.",
    "de": "Keine kitschigen Spiele. Kein geliehener Smoking.",
    "lb": "Keng kitscheg Spiller. Keen geléinte Smoking.",
    "nl": "Geen kitscherige spelletjes. Geen geleend kostuum."
  },

  # ── FLYOLOGY PAGE ──
  "Flyology": {
    "fr": "Flyologie",
    "de": "Flyologie",
    "lb": "Flyologie",
    "nl": "Flyologie"
  },
  "Why you float instead of fall.": {
    "fr": "Pourquoi vous flottez au lieu de tomber.",
    "de": "Warum Sie schweben statt fallen.",
    "lb": "Firwat Dir schwiewt amplaz ze falen.",
    "nl": "Waarom u zweeft in plaats van valt."
  },
  "The physics behind indoor skydiving — explained without a physics degree.": {
    "fr": "La physique derrière le saut en chute libre indoor — expliquée sans diplôme en physique.",
    "de": "Die Physik hinter Indoor-Skydiving — ohne Physikstudium erklärt.",
    "lb": "D'Physik hannert Indoor-Skydiving — ouni Physikstudium erkläert.",
    "nl": "De fysica achter indoor skydiven — uitgelegd zonder fysicadiploma."
  },
  "Lift vs gravity.": {
    "fr": "Portance vs gravité.",
    "de": "Auftrieb gegen Schwerkraft.",
    "lb": "Auftrieb géint Schwéierkraaft.",
    "nl": "Lift vs zwaartekracht."
  },
  "You don't float because the wind pushes you up — you float because your body shape creates lift from the airflow.": {
    "fr": "Vous ne flottez pas parce que le vent vous pousse vers le haut — vous flottez parce que la forme de votre corps crée une portance à partir du flux d'air.",
    "de": "Sie schweben nicht, weil der Wind Sie nach oben drückt — Sie schweben, weil Ihre Körperform Auftrieb aus dem Luftstrom erzeugt.",
    "lb": "Dir schwiewt net well de Wand Iech no uewen dréit — Dir schwiewt well d'Form vun Ärem Kierper Auftrieb aus dem Loftstrom erstellt.",
    "nl": "U zweeft niet omdat de wind u omhoog duwt — u zweeft omdat uw lichaamsvorm lift genereert uit de luchtstroom."
  },
  "The four fundamental positions": {
    "fr": "Les quatre positions fondamentales",
    "de": "Die vier Grundpositionen",
    "lb": "Déi véier Grondpositiounen",
    "nl": "De vier fundamentele posities"
  },
  "Why it gets easier.": {
    "fr": "Pourquoi c'est plus facile avec le temps.",
    "de": "Warum es einfacher wird.",
    "lb": "Firwat et méi einfach gëtt.",
    "nl": "Waarom het makkelijker wordt."
  },
  "The brain and body have to learn an entirely new relationship with gravity.": {
    "fr": "Le cerveau et le corps doivent apprendre une toute nouvelle relation avec la gravité.",
    "de": "Gehirn und Körper müssen eine völlig neue Beziehung zur Schwerkraft erlernen.",
    "lb": "Gehir a Kierper mussen eng ganz nei Bezéiung mat der Schwéierkraaft léieren.",
    "nl": "Hersenen en lichaam moeten een geheel nieuwe relatie met de zwaartekracht leren."
  },
  "Ready to try it for yourself?": {
    "fr": "Prêt à l'essayer vous-même ?",
    "de": "Bereit, es selbst auszuprobieren?",
    "lb": "Prett fir et selwer auszeprobéieren?",
    "nl": "Klaar om het zelf te proberen?"
  },

  # ── REGION PAGE ──
  "Small country. Big air.": {
    "fr": "Petit pays. Grand air.",
    "de": "Kleines Land. Große Luft.",
    "lb": "Klengt Land. Grouss Loft.",
    "nl": "Klein land. Grote lucht."
  },
  "Luxfly is located in the heart of Europe.": {
    "fr": "Luxfly est situé au cœur de l'Europe.",
    "de": "Luxfly befindet sich im Herzen Europas.",
    "lb": "Luxfly läit am Häerz vun Europa.",
    "nl": "Luxfly is gelegen in het hart van Europa."
  },
  "Where we are": {
    "fr": "Où nous sommes",
    "de": "Wo wir sind",
    "lb": "Wou mir sinn",
    "nl": "Waar we zijn"
  },
  "Luxfly is located in Sterpenich, Belgium — just 300 metres from the Luxembourg border and 7 km from Arlon.": {
    "fr": "Luxfly est situé à Sterpenich, en Belgique — à seulement 300 mètres de la frontière luxembourgeoise et à 7 km d'Arlon.",
    "de": "Luxfly befindet sich in Sterpenich, Belgien — nur 300 Meter von der luxemburgischen Grenze und 7 km von Arlon entfernt.",
    "lb": "Luxfly läit a Sterpenich, Belgien — just 300 Meter vun der Lëtzebuerger Grenz an 7 km vun Arlon.",
    "nl": "Luxfly is gelegen in Sterpenich, België — slechts 300 meter van de Luxemburgse grens en 7 km van Arlon."
  },
  "By car: take the E411 (Autoroute du Soleil), exit 33 Sterpenich.": {
    "fr": "En voiture : prenez l'E411 (Autoroute du Soleil), sortie 33 Sterpenich.",
    "de": "Mit dem Auto: nehmen Sie die E411 (Autoroute du Soleil), Ausfahrt 33 Sterpenich.",
    "lb": "Mat dem Auto: huelt d'E411 (Autoroute du Soleil), Sortie 33 Sterpenich.",
    "nl": "Met de auto: neem de E411 (Autoroute du Soleil), afrit 33 Sterpenich."
  },
  "Free parking on site. 80+ spaces available.": {
    "fr": "Parking gratuit sur place. Plus de 80 places disponibles.",
    "de": "Kostenloser Parkplatz vor Ort. Über 80 Stellplätze verfügbar.",
    "lb": "Gratis Parking op der Plaz. Iwwer 80 Plaze verfügbar.",
    "nl": "Gratis parkeren op locatie. Meer dan 80 plaatsen beschikbaar."
  },
  "Luxembourg as a destination": {
    "fr": "Luxembourg comme destination",
    "de": "Luxemburg als Reiseziel",
    "lb": "Lëtzebuerg als Destinatioun",
    "nl": "Luxemburg als bestemming"
  },
  "Where to stay": {
    "fr": "Où séjourner",
    "de": "Wo übernachten",
    "lb": "Wou iwwernachten",
    "nl": "Waar te verblijven"
  },

  # ── HOT AIR BALLOON PAGE ──
  "Hot Air Balloon": {
    "fr": "Montgolfière",
    "de": "Heißluftballon",
    "lb": "Loftballon",
    "nl": "Luchtballon"
  },
  "Gentle, serene, and completely different from freefall.": {
    "fr": "Doux, serein et complètement différent de la chute libre.",
    "de": "Sanft, ruhig und völlig anders als Freifall.",
    "lb": "Sanft, roueg a komplett aners wéi Fräifall.",
    "nl": "Zacht, sereen en totaal anders dan vrije val."
  },
  "A gentle ascent into the sky, floating peacefully above the landscape.": {
    "fr": "Une douce montée dans le ciel, flottant paisiblement au-dessus du paysage.",
    "de": "Ein sanfter Aufstieg in den Himmel, friedlich über die Landschaft schwebend.",
    "lb": "En sanften Opstieg an de Himmel, roueg iwwer d'Landschaft schwiewend.",
    "nl": "Een zachte opstijging naar de lucht, vredig zwevend boven het landschap."
  },
  "Seasonal availability: April–October.": {
    "fr": "Disponibilité saisonnière : avril–octobre.",
    "de": "Saisonale Verfügbarkeit: April–Oktober.",
    "lb": "Saisonaalt Verfügbarkeet: Abrëll–Oktober.",
    "nl": "Seizoensgebonden beschikbaarheid: april–oktober."
  },
  "The ultimate sky day": {
    "fr": "La journée ultime dans le ciel",
    "de": "Der ultimative Himmelstag",
    "lb": "Den ultimativen Himmelsdaag",
    "nl": "De ultieme luchtdag"
  },
  "Combine a hot air balloon ride with an indoor skydiving flight at Luxfly for the complete sky experience.": {
    "fr": "Combinez un vol en montgolfière avec un vol en saut en chute libre indoor chez Luxfly pour l'expérience aérienne complète.",
    "de": "Kombinieren Sie eine Heißluftballonfahrt mit einem Indoor-Skydiving-Flug bei Luxfly für das vollständige Himmelserlebnis.",
    "lb": "Kombinéiert eng Loftballonfaart mat engem Indoor-Skydiving-Fluch bei Luxfly fir dat komplett Himmelserliebnis.",
    "nl": "Combineer een luchtballonvaart met een indoor skydiving vlucht bij Luxfly voor de complete luchtervaring."
  },
  "Ready to float?": {
    "fr": "Prêt à flotter ?",
    "de": "Bereit zu schweben?",
    "lb": "Prett fir ze schwiewen?",
    "nl": "Klaar om te zweven?"
  },
  "Book a balloon flight": {
    "fr": "Réserver un vol en montgolfière",
    "de": "Ballonfahrt buchen",
    "lb": "Ballounfluch buchen",
    "nl": "Ballonvaart boeken"
  },

  # ── INDOOR ACTIVITIES PAGE ──
  "Everything under one roof.": {
    "fr": "Tout sous un même toit.",
    "de": "Alles unter einem Dach.",
    "lb": "Alles ënner engem Daach.",
    "nl": "Alles onder één dak."
  },
  "Wind tunnel, bar, events space, and community.": {
    "fr": "Soufflerie, bar, espace événements et communauté.",
    "de": "Windkanal, Bar, Eventfläche und Community.",
    "lb": "Wandkanal, Bar, Eventraum a Gemeinschaft.",
    "nl": "Windtunnel, bar, evenementenruimte en gemeenschap."
  },
  "Fly + Dine": {
    "fr": "Vol + Dîner",
    "de": "Fliegen + Essen",
    "lb": "Fléien + Dinen",
    "nl": "Vliegen + Diner"
  },
  "Fly + Photo": {
    "fr": "Vol + Photo",
    "de": "Fliegen + Foto",
    "lb": "Fléien + Foto",
    "nl": "Vliegen + Foto"
  },
  "Group Event Package": {
    "fr": "Forfait événement de groupe",
    "de": "Gruppenveranstaltungspaket",
    "lb": "Gruppenëneementspak",
    "nl": "Groepsevenementenpakket"
  },
  "You can fly, eat, celebrate, and hang out all without getting back in the car.": {
    "fr": "Vous pouvez voler, manger, célébrer et traîner sans avoir à reprendre la voiture.",
    "de": "Sie können fliegen, essen, feiern und abhängen, ohne wieder ins Auto steigen zu müssen.",
    "lb": "Dir kënnt fléien, iessen, feieren a chillen ouni erëm an d'Auto ze mussen.",
    "nl": "U kunt vliegen, eten, vieren en rondhangen zonder terug in de auto te hoeven."
  },
  "Plan your visit.": {
    "fr": "Planifiez votre visite.",
    "de": "Planen Sie Ihren Besuch.",
    "lb": "Plangt Äre Besuch.",
    "nl": "Plan uw bezoek."
  },

  # ── SHARED SESSIONS PAGE ──
  "Shared Sessions": {
    "fr": "Sessions partagées",
    "de": "Gemeinsame Sessions",
    "lb": "Gedeelt Sessionen",
    "nl": "Gedeelde sessies"
  },
  "More flying time. Better price.": {
    "fr": "Plus de temps de vol. Meilleur prix.",
    "de": "Mehr Flugzeit. Besserer Preis.",
    "lb": "Méi Fluchzäit. Bessere Präis.",
    "nl": "Meer vluchtijd. Betere prijs."
  },
  "Structured group sessions for flyers who are past the beginner stage and want regular, affordable tunnel time.": {
    "fr": "Sessions de groupe structurées pour les pilotes dépassant le niveau débutant qui souhaitent un temps de tunnel régulier et abordable.",
    "de": "Strukturierte Gruppensessions für Flieger, die über das Anfängerniveau hinaus sind und regelmäßige, erschwingliche Tunnelzeit wollen.",
    "lb": "Strukturéiert Gruppesessionen fir Fléier déi den Ufängerniveau iwwerschratt hunn a regelméisseg, erschwëngleche Tunnelzäit wëllen.",
    "nl": "Gestructureerde groepssessies voor vliegers die het beginnersniveau voorbij zijn en regelmatige, betaalbare tunneltijd willen."
  },
  "You fly with other flyers in the same tunnel slot.": {
    "fr": "Vous volez avec d'autres pilotes dans le même créneau du tunnel.",
    "de": "Sie fliegen mit anderen Fliegern im gleichen Tunnelslot.",
    "lb": "Dir fléit mat anere Fléier am selwechte Tunnelslot.",
    "nl": "U vliegt met andere vliegers in hetzelfde tunnelslot."
  },
  "Reserve your spot.": {
    "fr": "Réservez votre place.",
    "de": "Reservieren Sie Ihren Platz.",
    "lb": "Reservéiert Äre Plaz.",
    "nl": "Reserveer uw plek."
  },
  "Shared sessions book out fast, especially Fridays and Saturdays.": {
    "fr": "Les sessions partagées se remplissent rapidement, surtout les vendredis et samedis.",
    "de": "Gemeinsame Sessions sind schnell ausgebucht, besonders freitags und samstags.",
    "lb": "Gedeelt Sessionen sinn séier ausgebucht, besonnesch Freides a Samschdes.",
    "nl": "Gedeelde sessies zijn snel volgeboekt, vooral op vrijdagen en zaterdagen."
  },
  "Book a shared session": {
    "fr": "Réserver une session partagée",
    "de": "Gemeinsame Session buchen",
    "lb": "Gedeelt Session buchen",
    "nl": "Gedeelde sessie boeken"
  },

  # ── PRO PRICES PAGE ──
  "Pro Pricing": {
    "fr": "Tarifs Pro",
    "de": "Pro-Preise",
    "lb": "Pro-Präisser",
    "nl": "Pro-prijzen"
  },
  "Transparent rates. Serious tunnel time.": {
    "fr": "Tarifs transparents. Temps de tunnel sérieux.",
    "de": "Transparente Tarife. Ernsthafter Tunnelzeit.",
    "lb": "Transparent Taux. Ernscht Tunnelzäit.",
    "nl": "Transparente tarieven. Serieuze tunneltijd."
  },
  "Block time packages for regular flyers.": {
    "fr": "Forfaits de temps bloc pour les pilotes réguliers.",
    "de": "Block-Zeitpakete für regelmäßige Flieger.",
    "lb": "Block-Zäitpakete fir regelméisseg Fléier.",
    "nl": "Bloktijdpakketten voor reguliere vliegers."
  },
  "The more you commit, the better the rate.": {
    "fr": "Plus vous vous engagez, plus le tarif est bon.",
    "de": "Je mehr Sie sich verpflichten, desto besser der Tarif.",
    "lb": "Je méi Dir Iech engagéiert, dest besser den Taux.",
    "nl": "Hoe meer u vastlegt, hoe beter het tarief."
  },
  "Time never expires — use it on your schedule": {
    "fr": "Le temps n'expire jamais — utilisez-le selon votre calendrier",
    "de": "Zeit läuft nie ab — nutzen Sie sie nach Ihrem Zeitplan",
    "lb": "Zäit verfält ni — benotzt se no Ärem Zäitplang",
    "nl": "Tijd vervalt nooit — gebruik het op uw eigen schema"
  },
  "Start training seriously.": {
    "fr": "Commencez à vous entraîner sérieusement.",
    "de": "Fangen Sie ernsthaft an zu trainieren.",
    "lb": "Fänkt un ernscht ze trainéieren.",
    "nl": "Begin serieus te trainen."
  },
  "Book a pro session": {
    "fr": "Réserver une session pro",
    "de": "Pro-Session buchen",
    "lb": "Pro-Session buchen",
    "nl": "Pro-sessie boeken"
  },

  # ── PRO EVENTS PAGE ──
  "Compete. Train. Repeat.": {
    "fr": "Concourez. Entraînez-vous. Répétez.",
    "de": "Wettkämpfen. Trainieren. Wiederholen.",
    "lb": "Concurrenzéieren. Trainéieren. Widderhuelen.",
    "nl": "Deelnemen. Trainen. Herhalen."
  },
  "Luxfly hosts competitions, training camps, and tunnel time for national and international pro flyers.": {
    "fr": "Luxfly organise des compétitions, des camps d'entraînement et des sessions de tunnel pour les pilotes professionnels nationaux et internationaux.",
    "de": "Luxfly veranstaltet Wettkämpfe, Trainingscamps und Tunnelzeiten für nationale und internationale Profiflieger.",
    "lb": "Luxfly organiséiert Concurrencen, Trainingscamps an Tunnelzäiten fir national an international Pro-Fléier.",
    "nl": "Luxfly organiseert wedstrijden, trainingskampen en tunneltijd voor nationale en internationale pro-vliegers."
  },
  "Register for an event.": {
    "fr": "S'inscrire à un événement.",
    "de": "Für eine Veranstaltung anmelden.",
    "lb": "Fir en Event umellen.",
    "nl": "Inschrijven voor een evenement."
  },
  "Contact the pro desk": {
    "fr": "Contacter le bureau pro",
    "de": "Pro-Desk kontaktieren",
    "lb": "Pro-Desk kontaktéieren",
    "nl": "Contact pro-desk"
  },

  # ── EVENTS PRICING PAGE ──
  "Group Rates": {
    "fr": "Tarifs de groupe",
    "de": "Gruppenpreise",
    "lb": "Gruppenpreiser",
    "nl": "Groepstarieven"
  },
  "Transparent pricing. No surprises.": {
    "fr": "Prix transparents. Pas de surprises.",
    "de": "Transparente Preise. Keine Überraschungen.",
    "lb": "Transparent Präisser. Keng Iwwerraschungen.",
    "nl": "Transparante prijzen. Geen verrassingen."
  },
  "Group rates for 10 or more people.": {
    "fr": "Tarifs de groupe pour 10 personnes ou plus.",
    "de": "Gruppenpreise für 10 oder mehr Personen.",
    "lb": "Gruppenpreiser fir 10 oder méi Persounen.",
    "nl": "Groepstarieven voor 10 of meer personen."
  },
  "Advance booking 7 days minimum.": {
    "fr": "Réservation à l'avance minimum 7 jours.",
    "de": "Vorabumbuchung mindestens 7 Tage.",
    "lb": "Virausbuchung mindestens 7 Deeg.",
    "nl": "Minimaal 7 dagen van tevoren boeken."
  },
  "Deposit 30% due at time of booking to secure your date and time slot.": {
    "fr": "Acompte de 30% dû au moment de la réservation pour sécuriser votre date et créneau horaire.",
    "de": "Anzahlung 30% bei Buchung zur Sicherung Ihres Datums und Zeitslots fällig.",
    "lb": "30% Depôt beim Buchen fir Äert Datum an Zäitslot ze sécheren.",
    "nl": "30% aanbetaling bij boeking om uw datum en tijdslot te beveiligen."
  },
  "For large events of 75+ people, it's possible to book the tunnel exclusively for your group.": {
    "fr": "Pour les grands événements de 75 personnes ou plus, il est possible de réserver le tunnel exclusivement pour votre groupe.",
    "de": "Für große Veranstaltungen mit 75+ Personen ist es möglich, den Tunnel exklusiv für Ihre Gruppe zu buchen.",
    "lb": "Fir grouss Evenementer vun 75+ Persounen ass et méiglech den Tunnel exklusiv fir Är Grupp ze buchen.",
    "nl": "Voor grote evenementen van 75+ mensen is het mogelijk de tunnel exclusief voor uw groep te boeken."
  },
  "All prices exclude VAT.": {
    "fr": "Tous les prix hors TVA.",
    "de": "Alle Preise verstehen sich zuzüglich MwSt.",
    "lb": "All Präisser exklusive MwSt.",
    "nl": "Alle prijzen zijn exclusief btw."
  },
  "Request a full proposal": {
    "fr": "Demander une proposition complète",
    "de": "Vollständiges Angebot anfragen",
    "lb": "Vollständeg Proposal ufroën",
    "nl": "Volledig voorstel aanvragen"
  },

  # ── PARTNERS PAGE ──
  "Let's build something together.": {
    "fr": "Construisons quelque chose ensemble.",
    "de": "Lassen Sie uns gemeinsam etwas aufbauen.",
    "lb": "Loosst eis zesummen eppes opbauen.",
    "nl": "Laten we samen iets bouwen."
  },
  "Travel & Tourism": {
    "fr": "Voyage & Tourisme",
    "de": "Reise & Tourismus",
    "lb": "Rees & Tourismus",
    "nl": "Reizen & Toerisme"
  },
  "Corporate Wellness": {
    "fr": "Bien-être en entreprise",
    "de": "Betriebliches Wohlbefinden",
    "lb": "Betriebswohlbefannen",
    "nl": "Zakelijke wellness"
  },
  "Schools & Education": {
    "fr": "Écoles & Éducation",
    "de": "Schulen & Bildung",
    "lb": "Schoulen & Bildung",
    "nl": "Scholen & Onderwijs"
  },
  "Hotels & Leisure": {
    "fr": "Hôtels & Loisirs",
    "de": "Hotels & Freizeit",
    "lb": "Hotellen & Freizeit",
    "nl": "Hotels & Vrije tijd"
  },
  "Become a partner.": {
    "fr": "Devenez partenaire.",
    "de": "Werden Sie Partner.",
    "lb": "Gitt Partner.",
    "nl": "Word partner."
  },

  # ── SHARED FOOTER / NAV STRINGS ──
  "Europe's tallest indoor skydiving wind tunnel. Safe from age 4 to 95.": {
    "fr": "Le plus haut tunnel de saut en chute libre indoor d'Europe. Sûr de 4 à 95 ans.",
    "de": "Europas höchster Indoor-Skydiving-Windkanal. Sicher von 4 bis 95 Jahren.",
    "lb": "Europas héchste Indoor-Skydiving-Wandkanal. Sécher vun 4 bis 95 Joer.",
    "nl": "Europas hoogste indoor skydiving windtunnel. Veilig van 4 tot 95 jaar."
  },
  "About us": {
    "fr": "À propos de nous",
    "de": "Über uns",
    "lb": "Iwwer eis",
    "nl": "Over ons"
  },
  "Terms": {
    "fr": "Conditions",
    "de": "Bedingungen",
    "lb": "Bedingungen",
    "nl": "Voorwaarden"
  },
  "Privacy": {
    "fr": "Confidentialité",
    "de": "Datenschutz",
    "lb": "Dateschutz",
    "nl": "Privacy"
  },
  "Adults": {
    "fr": "Adultes",
    "de": "Erwachsene",
    "lb": "Erwuessener",
    "nl": "Volwassenen"
  },
  "Kids & Families": {
    "fr": "Enfants & Familles",
    "de": "Kinder & Familien",
    "lb": "Kanner & Familljen",
    "nl": "Kinderen & Gezinnen"
  },
  "Pro Flyers": {
    "fr": "Pilotes Pro",
    "de": "Profiflieger",
    "lb": "Pro-Fléier",
    "nl": "Pro-vliegers"
  },
  "Birthdays": {
    "fr": "Anniversaires",
    "de": "Geburtstage",
    "lb": "Gebuertsdagsfeieren",
    "nl": "Verjaardagen"
  },
  "My Account": {
    "fr": "Mon compte",
    "de": "Mein Konto",
    "lb": "Mäi Kont",
    "nl": "Mijn account"
  },
  "Book now": {
    "fr": "Réserver maintenant",
    "de": "Jetzt buchen",
    "lb": "Elo buchen",
    "nl": "Nu boeken"
  },
}


def inject(content, lang, entries):
    new_lines = [f"      // ── BIG BATCH3 {lang.upper()} ──"]
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
