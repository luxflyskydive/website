#!/usr/bin/env python3
"""Second comprehensive translation injection — about, activity, team-building, events, how-it-works, opening-hours, infrastructure, coaches, become-proflyer, jobs."""
import re

TRANSLATIONS = {
  # ── ABOUT PAGE ──
  "Where it started.": {
    "fr": "Là où tout a commencé.",
    "de": "Wo alles begann.",
    "lb": "Wou alles ugefaangen huet.",
    "nl": "Waar het begon."
  },
  "Luxfly opened in Sterpenich, Belgium — right on the Luxembourg border — with a simple belief: that the sensation of freefall should be available to anyone, not just skydivers willing to jump out of planes.": {
    "fr": "Luxfly a ouvert à Sterpenich, en Belgique — juste à la frontière du Luxembourg — avec une conviction simple : que la sensation de chute libre devrait être accessible à tous, pas seulement aux parachutistes prêts à sauter d'un avion.",
    "de": "Luxfly eröffnete in Sterpenich, Belgien — direkt an der luxemburgischen Grenze — mit einer einfachen Überzeugung: dass das Gefühl des freien Falls für jeden zugänglich sein sollte, nicht nur für Fallschirmspringer.",
    "lb": "Luxfly huet a Sterpenich, Belgien opgemaach — direkt un der Lëtzebuerger Grenz — mat enger einfacher Iwwerzeegung: datt d'Gefill vum Fräifall fir jiddereen zugänglech soll sinn.",
    "nl": "Luxfly opende in Sterpenich, België — vlak aan de Luxemburgse grens — met een eenvoudige overtuiging: dat de sensatie van vrije val beschikbaar moet zijn voor iedereen."
  },
  "We built Europe's tallest indoor skydiving tunnel: 35 metres of vertical airflow, engineered to deliver the real freefall experience without altitude, without aircraft, and without the mandatory leap of faith.": {
    "fr": "Nous avons construit le plus haut tunnel de saut en chute libre indoor d'Europe : 35 mètres de flux d'air vertical, conçu pour offrir la vraie expérience de chute libre sans altitude, sans avion, et sans le saut de la foi obligatoire.",
    "de": "Wir bauten Europas höchsten Indoor-Skydiving-Tunnel: 35 Meter vertikaler Luftstrom, entwickelt für das echte Freifallerlebnis ohne Höhe, ohne Flugzeug und ohne den obligatorischen Vertrauenssprung.",
    "lb": "Mir hu Europas héchste Indoor-Skydiving-Tunnel gebaut: 35 Meter vertikale Loftströmung, entwéckelt fir d'echt Fräifallerfaarung ouni Héicht, ouni Fliger.",
    "nl": "We bouwden de hoogste indoor skydiving tunnel van Europa: 35 meter verticale luchtstroom, ontworpen voor de echte vrije val ervaring zonder hoogte, vliegtuig of sprong."
  },
  "Since opening, we've welcomed over 80,000 visitors.": {
    "fr": "Depuis l'ouverture, nous avons accueilli plus de 80 000 visiteurs.",
    "de": "Seit der Eröffnung haben wir über 80.000 Besucher begrüßt.",
    "lb": "Zënter der Eröffnung haten mir iwwer 80.000 Besucher.",
    "nl": "Sinds de opening hebben we meer dan 80.000 bezoekers verwelkomd."
  },
  "The tunnel doesn't care about your age, your fitness level, or your fear of heights. It just wants to make you fly.": {
    "fr": "Le tunnel ne se soucie pas de votre âge, de votre condition physique ou de votre peur des hauteurs. Il veut juste vous faire voler.",
    "de": "Der Tunnel interessiert sich nicht für Ihr Alter, Ihren Fitnesszustand oder Ihre Höhenangst. Er will Sie einfach fliegen lassen.",
    "lb": "Den Tunnel käert sech net ëm Äert Alter, Är Fitness oder Är Héichtenangst. Hien wëll Iech einfach fléien loossen.",
    "nl": "De tunnel maakt zich niet druk om uw leeftijd, uw fitheid of uw hoogtevrees. Hij wil u gewoon laten vliegen."
  },
  "Safety first. Always.": {
    "fr": "La sécurité avant tout. Toujours.",
    "de": "Sicherheit zuerst. Immer.",
    "lb": "Sécherheet éischt. Ëmmer.",
    "nl": "Veiligheid eerst. Altijd."
  },
  "Accessible to everyone.": {
    "fr": "Accessible à tous.",
    "de": "Für alle zugänglich.",
    "lb": "Zugänglech fir jiddereen.",
    "nl": "Toegankelijk voor iedereen."
  },
  "Honest about what it is.": {
    "fr": "Honnête sur ce que c'est.",
    "de": "Ehrlich darüber, was es ist.",
    "lb": "Éierlech iwwer dat wat et ass.",
    "nl": "Eerlijk over wat het is."
  },
  "Built to last.": {
    "fr": "Construit pour durer.",
    "de": "Gebaut um zu bleiben.",
    "lb": "Gebaut fir ze daueren.",
    "nl": "Gebouwd om te blijven."
  },
  "The people behind the air.": {
    "fr": "Les personnes derrière l'air.",
    "de": "Die Menschen hinter der Luft.",
    "lb": "D'Leit hannert der Loft.",
    "nl": "De mensen achter de lucht."
  },
  "Luxfly's team includes certified flight instructors, event coordinators, safety officers, and front-of-house staff who collectively have logged thousands of hours in tunnels around the world.": {
    "fr": "L'équipe de Luxfly comprend des instructeurs de vol certifiés, des coordinateurs d'événements, des responsables de sécurité et du personnel d'accueil qui ont collectivement enregistré des milliers d'heures dans des tunnels à travers le monde.",
    "de": "Das Luxfly-Team umfasst zertifizierte Fluginstruktoren, Event-Koordinatoren, Sicherheitsbeauftragte und Empfangspersonal, die zusammen Tausende von Stunden in Tunneln weltweit geloggt haben.",
    "lb": "D'Luxfly-Team ëmfaasst zertifizéiert Fluchinstrukteuren, Event-Koordinateuren, Sécherheetsofficiere a Empfangspersonal déi zesummen Dausende vu Stonnen a Tunnelen weltwäit geloggt hunn.",
    "nl": "Het Luxfly-team bestaat uit gecertificeerde vlieginstructeurs, eventcoördinatoren, veiligheidsfunctionarissen en ontvangstpersoneel die samen duizenden uren in tunnels wereldwijd hebben gelogd."
  },
  "Come see it for yourself.": {
    "fr": "Venez le voir par vous-même.",
    "de": "Kommen Sie und überzeugen Sie sich selbst.",
    "lb": "Kommt a gesitt et selwer.",
    "nl": "Kom het zelf zien."
  },

  # ── ACTIVITY PAGE ──
  "What is indoor skydiving?": {
    "fr": "Qu'est-ce que le saut en chute libre indoor ?",
    "de": "Was ist Indoor-Skydiving?",
    "lb": "Wat ass Indoor-Skydiving?",
    "nl": "Wat is indoor skydiven?"
  },
  "A wind tunnel 35 metres tall.": {
    "fr": "Une soufflerie de 35 mètres de haut.",
    "de": "Ein 35 Meter hoher Windkanal.",
    "lb": "E Wandkanal 35 Meter héich.",
    "nl": "Een windtunnel van 35 meter hoog."
  },
  "Indoor skydiving is freefall. Pure and simple.": {
    "fr": "Le saut en chute libre indoor est de la chute libre. Pur et simple.",
    "de": "Indoor-Skydiving ist Freifall. Pur und einfach.",
    "lb": "Indoor-Skydiving ass Fräifall. Reng a einfach.",
    "nl": "Indoor skydiven is vrije val. Puur en simpel."
  },
  "The sensation hits you immediately. The rush of wind across your face. Your body becoming weightless. The moment you stop fighting the air and start flying.": {
    "fr": "La sensation vous frappe immédiatement. Le souffle du vent sur votre visage. Votre corps qui devient apesanteur. Le moment où vous arrêtez de vous battre contre l'air et commencez à voler.",
    "de": "Die Sensation trifft Sie sofort. Der Windstoß über Ihr Gesicht. Ihr Körper wird schwerelos. Der Moment, in dem Sie aufhören, gegen die Luft zu kämpfen, und anfangen zu fliegen.",
    "lb": "D'Sensatioun trëfft Iech direkt. Den Drang vum Wand iwwert Äert Gesiicht. Äere Kierper gëtt schwerelos. Den Moment wou Dir ophalt géint d'Loft ze kämpfen.",
    "nl": "De sensatie treft u direct. De windstoot op uw gezicht. Uw lichaam wordt gewichtloos. Het moment waarop u stopt met vechten tegen de lucht en begint te vliegen."
  },
  "It's the real physics of freefall, just in a controlled environment.": {
    "fr": "C'est la vraie physique de la chute libre, simplement dans un environnement contrôlé.",
    "de": "Es ist die echte Physik des freien Falls, nur in einer kontrollierten Umgebung.",
    "lb": "Et ass déi echt Physik vum Fräifall, just an enger kontrolléierter Ëmgebung.",
    "nl": "Het is de echte fysica van vrije val, alleen in een gecontroleerde omgeving."
  },
  "This is addictive in the best way possible.": {
    "fr": "C'est addictif de la meilleure façon possible.",
    "de": "Das ist auf die bestmögliche Art und Weise süchtig machend.",
    "lb": "Dat ass addiktiv op déi beschtméiglech Aart a Weis.",
    "nl": "Dit is verslavend op de best mogelijke manier."
  },
  "Anyone can do it": {
    "fr": "Tout le monde peut le faire",
    "de": "Jeder kann es tun",
    "lb": "Jiddereen kann et maachen",
    "nl": "Iedereen kan het"
  },
  "Many professional skydivers train in wind tunnels like ours before attempting outdoor freefall.": {
    "fr": "De nombreux parachutistes professionnels s'entraînent dans des souffleries comme la nôtre avant de tenter la chute libre en extérieur.",
    "de": "Viele professionelle Skydiver trainieren in Windkanälen wie unserem, bevor sie den Outdoor-Freifall versuchen.",
    "lb": "Vill professionell Skydiver trainéieren a Wandkanäle wéi eisem ier se den Outdoor-Fräifall versichen.",
    "nl": "Veel professionele skydivers trainen in windtunnels zoals de onze voordat ze buiten vrije val proberen."
  },

  # ── TEAM BUILDING PAGE ──
  "Strengthen your team. Together in freefall.": {
    "fr": "Renforcez votre équipe. Ensemble en chute libre.",
    "de": "Stärken Sie Ihr Team. Gemeinsam im freien Fall.",
    "lb": "Stäerkt Äert Team. Zesummen am Fräifall.",
    "nl": "Versterk uw team. Samen in vrije val."
  },
  "There's nothing like an experience that gets everyone out of their comfort zone at the same time.": {
    "fr": "Il n'y a rien de tel qu'une expérience qui sort tout le monde de sa zone de confort en même temps.",
    "de": "Es gibt nichts Besseres als eine Erfahrung, die alle gleichzeitig aus ihrer Komfortzone herausbringt.",
    "lb": "Et gëtt näischt Besseres wéi eng Erfarung déi jiddereen gläichzäiteg aus senger Komfortzone erausbringt.",
    "nl": "Er gaat niets boven een ervaring die iedereen tegelijk uit zijn comfortzone haalt."
  },
  "Levels the playing field": {
    "fr": "Nivelle le terrain",
    "de": "Gleicht das Spielfeld aus",
    "lb": "Gläicht d'Spillfeld aus",
    "nl": "Niveleert het speelveld"
  },
  "The CEO and the intern are both beginners in the tunnel.": {
    "fr": "Le PDG et le stagiaire sont tous deux débutants dans le tunnel.",
    "de": "Der CEO und der Praktikant sind beide Anfänger im Tunnel.",
    "lb": "Den CEO an den Intern si béid Ufänger am Tunnel.",
    "nl": "De CEO en de stagiair zijn allebei beginners in de tunnel."
  },
  "No hierarchy, no politics — just people figuring it out together.": {
    "fr": "Pas de hiérarchie, pas de politique — juste des gens qui s'en sortent ensemble.",
    "de": "Keine Hierarchie, keine Politik — nur Menschen, die es gemeinsam herausfinden.",
    "lb": "Keng Hierarchie, keng Politik — just Leit déi et zesummen erausfannen.",
    "nl": "Geen hiërarchie, geen politiek — gewoon mensen die het samen uitzoeken."
  },
  "Everyone actually participates": {
    "fr": "Tout le monde participe réellement",
    "de": "Jeder nimmt wirklich teil",
    "lb": "Jiddereen hëllt wierklech deel",
    "nl": "Iedereen neemt echt deel"
  },
  "Scales from 8 to 200+": {
    "fr": "De 8 à 200+ personnes",
    "de": "Skaliert von 8 bis 200+",
    "lb": "Skaliéiert vun 8 bis 200+",
    "nl": "Schaalbaar van 8 tot 200+"
  },
  "The shared adrenaline and the photos from the tunnel stay with people long after the day is done.": {
    "fr": "L'adrénaline partagée et les photos du tunnel restent avec les gens longtemps après la fin de la journée.",
    "de": "Die gemeinsame Adrenalin und die Fotos aus dem Tunnel bleiben den Menschen lange nach dem Tag in Erinnerung.",
    "lb": "Den gemeinsamen Adrenalin an d'Fotoen aus dem Tunnel bleiwen bei de Leit laang no dem Dag.",
    "nl": "Het gedeelde adrenaline en de foto's uit de tunnel blijven mensen lang na de dag bij."
  },
  "Request a team building quote": {
    "fr": "Demander un devis team building",
    "de": "Teambuilding-Angebot anfragen",
    "lb": "Teambuilding-Offert ufroën",
    "nl": "Teambuilding offerte aanvragen"
  },

  # ── EVENTS PAGE ──
  "Your next extraordinary event.": {
    "fr": "Votre prochain événement extraordinaire.",
    "de": "Ihr nächstes außergewöhnliches Event.",
    "lb": "Äert nächst aussergewéinlecht Event.",
    "nl": "Uw volgende buitengewone evenement."
  },
  "We can host groups from 2 to 250.": {
    "fr": "Nous pouvons accueillir des groupes de 2 à 250 personnes.",
    "de": "Wir können Gruppen von 2 bis 250 Personen aufnehmen.",
    "lb": "Mir kënnen Gruppe vun 2 bis 250 Persounen ophuelen.",
    "nl": "Wij kunnen groepen van 2 tot 250 verwelkomen."
  },
  "Team Building Days": {
    "fr": "Journées Team Building",
    "de": "Teambuilding-Tage",
    "lb": "Teambuilding-Deeg",
    "nl": "Teambuildingdagen"
  },
  "Leadership Offsites": {
    "fr": "Séminaires de direction",
    "de": "Leadership-Offsites",
    "lb": "Leadership-Offsites",
    "nl": "Leiderschapsoffsites"
  },
  "New Joiner Activities": {
    "fr": "Activités pour les nouveaux employés",
    "de": "Aktivitäten für neue Mitarbeiter",
    "lb": "Aktivitéiten fir nei Mataarbechter",
    "nl": "Activiteiten voor nieuwe medewerkers"
  },
  "Client Entertainment": {
    "fr": "Divertissement client",
    "de": "Kundenunterhaltung",
    "lb": "Clientenënnerhaltung",
    "lb": "Clientenentertainment",
    "nl": "Klantenentertainment"
  },
  "Company Milestones": {
    "fr": "Jalons d'entreprise",
    "de": "Unternehmens-Meilensteine",
    "lb": "Firmen-Meilesteng",
    "nl": "Bedrijfsmijlpalen"
  },
  "Annual Retreats": {
    "fr": "Retraites annuelles",
    "de": "Jährliche Retreats",
    "lb": "Jährleche Retreats",
    "nl": "Jaarlijkse retraites"
  },
  "Every group gets a dedicated event coordinator from first contact to the day after.": {
    "fr": "Chaque groupe dispose d'un coordinateur d'événements dédié du premier contact au lendemain.",
    "de": "Jede Gruppe erhält einen dedizierten Eventkoordinator vom ersten Kontakt bis zum Tag danach.",
    "lb": "All Grupp kritt en dediziéierten Event-Koordinator vum éischte Kontakt bis den Dag duerno.",
    "nl": "Elke groep krijgt een toegewijde eventcoördinator van het eerste contact tot de dag erna."
  },
  "Request a quote": {
    "fr": "Demander un devis",
    "de": "Angebot anfragen",
    "lb": "Offert ufroën",
    "nl": "Offerte aanvragen"
  },
  "Get in touch and one of our event coordinators will come back to you within 24 hours with availability and a personalised proposal.": {
    "fr": "Contactez-nous et l'un de nos coordinateurs d'événements vous reviendra dans les 24 heures avec les disponibilités et une proposition personnalisée.",
    "de": "Nehmen Sie Kontakt auf und einer unserer Event-Koordinatoren wird sich innerhalb von 24 Stunden mit Verfügbarkeiten und einem personalisierten Vorschlag bei Ihnen melden.",
    "lb": "Kontaktéiert eis an een vu eiseren Event-Koordinateuren kënnt bannent 24 Stonnen mat Verfügbarkeetsinformatiounen op Iech zréck.",
    "nl": "Neem contact op en een van onze eventcoördinatoren komt binnen 24 uur bij u terug met beschikbaarheid en een persoonlijk voorstel."
  },

  # ── HOW IT WORKS PAGE ──
  "From the door to the sky.": {
    "fr": "De la porte au ciel.",
    "de": "Von der Tür in den Himmel.",
    "lb": "Vun der Dir an de Himmel.",
    "nl": "Van de deur naar de lucht."
  },
  "Here's what to expect from the moment you arrive to the moment you land.": {
    "fr": "Voici ce à quoi vous pouvez vous attendre du moment où vous arrivez au moment où vous atterrissez.",
    "de": "Das können Sie vom Moment Ihrer Ankunft bis zur Landung erwarten.",
    "lb": "Hei ass wat Dir vum Moment Ärer Arrivée bis zur Landung erwaarde kënnt.",
    "nl": "Dit is wat u kunt verwachten van het moment dat u aankomt tot het moment dat u landt."
  },
  "Arrive & Check In": {
    "fr": "Arriver & S'enregistrer",
    "de": "Ankommen & Einchecken",
    "lb": "Ukommen & Aschreiwung",
    "nl": "Aankomen & Inchecken"
  },
  "Gear Up": {
    "fr": "S'équiper",
    "de": "Ausrüstung anlegen",
    "lb": "Ausrüstung unleeën",
    "nl": "Uitrusting aandoen"
  },
  "Safety Briefing": {
    "fr": "Briefing de sécurité",
    "de": "Sicherheitsbriefing",
    "lb": "Sécherheetsbriefing",
    "nl": "Veiligheidsbriefing"
  },
  "You Fly": {
    "fr": "Vous volez",
    "de": "Sie fliegen",
    "lb": "Dir fléit",
    "nl": "U vliegt"
  },
  "The second you're in the air, fear becomes laughter.": {
    "fr": "La seconde où vous êtes dans les airs, la peur se transforme en rires.",
    "de": "In dem Moment, in dem Sie in der Luft sind, wird Angst zu Lachen.",
    "lb": "D'Sekonn wou Dir an der Loft sidd, gëtt Angscht zu Laachen.",
    "nl": "Het moment dat u in de lucht bent, wordt angst lachen."
  },
  "You'll feel nervous. That's normal.": {
    "fr": "Vous vous sentirez nerveux. C'est normal.",
    "de": "Sie werden nervös sein. Das ist normal.",
    "lb": "Dir wäert nervös sinn. Dat ass normal.",
    "nl": "U zult nerveus zijn. Dat is normaal."
  },
  "By the time you land, you're already planning when you'll come back.": {
    "fr": "Au moment où vous atterrissez, vous planifiez déjà votre prochain retour.",
    "de": "Als Sie landen, planen Sie bereits Ihre nächste Rückkehr.",
    "lb": "Wann Dir landet, plangt Dir schonn Är nächst Rückkéier.",
    "nl": "Tegen de tijd dat u landt, plant u al wanneer u terugkomt."
  },
  "Everyone flies eventually.": {
    "fr": "Tout le monde vole finalement.",
    "de": "Alle fliegen irgendwann.",
    "lb": "Jiddereen fléit schlussendlech.",
    "nl": "Iedereen vliegt uiteindelijk."
  },
  "Is it loud?": {
    "fr": "Est-ce bruyant ?",
    "de": "Ist es laut?",
    "lb": "Ass et laut?",
    "nl": "Is het luid?"
  },
  "Yes — the motors are powerful. Earplugs are included and mandatory.": {
    "fr": "Oui — les moteurs sont puissants. Les bouchons d'oreilles sont inclus et obligatoires.",
    "de": "Ja — die Motoren sind leistungsstark. Ohrstöpsel sind inklusive und Pflicht.",
    "lb": "Jo — d'Moteure si mächteg. Ourepropfen si abegraff an obligatoresch.",
    "nl": "Ja — de motoren zijn krachtig. Oordopjes zijn inbegrepen en verplicht."
  },
  "Enough reading. Time to fly.": {
    "fr": "Assez de lecture. Il est temps de voler.",
    "de": "Genug gelesen. Zeit zu fliegen.",
    "lb": "Genuch gelies. Zäit fir ze fléien.",
    "nl": "Genoeg gelezen. Tijd om te vliegen."
  },

  # ── OPENING HOURS PAGE ──
  "Wed – Sun": {
    "fr": "Mer – Dim",
    "de": "Mi – So",
    "lb": "Mëtt – So",
    "nl": "Wo – Zo"
  },
  "Closed Monday & Tuesday.": {
    "fr": "Fermé le lundi et mardi.",
    "de": "Montag und Dienstag geschlossen.",
    "lb": "Méindeg a Dënschdeg zougemacht.",
    "nl": "Maandag & dinsdag gesloten."
  },
  "Open Wednesday through Sunday — book in advance to guarantee your slot.": {
    "fr": "Ouvert du mercredi au dimanche — réservez à l'avance pour garantir votre créneau.",
    "de": "Von Mittwoch bis Sonntag geöffnet — im Voraus buchen, um Ihren Platz zu sichern.",
    "lb": "Vum Mëttwoch bis Sonndeg op — am Viraus buchen fir Äre Plaz ze garantéieren.",
    "nl": "Open van woensdag t/m zondag — boek van tevoren om uw slot te garanderen."
  },
  "Also open on the first Monday of each month.": {
    "fr": "Également ouvert le premier lundi de chaque mois.",
    "de": "Auch am ersten Montag jedes Monats geöffnet.",
    "lb": "Och op dem éischte Méindeg vun all Mount op.",
    "nl": "Ook open op de eerste maandag van elke maand."
  },
  "Booking is strongly recommended": {
    "fr": "La réservation est fortement recommandée",
    "de": "Buchung wird dringend empfohlen",
    "lb": "Buchung gëtt dringend empfohlen",
    "nl": "Boeking wordt sterk aanbevolen"
  },
  "Walk-ins are welcome when slots are available.": {
    "fr": "Les visites spontanées sont les bienvenues selon les disponibilités.",
    "de": "Walk-ins sind willkommen, wenn Slots verfügbar sind.",
    "lb": "Walk-ins si wëllkommen wa Plaze verfügbar sinn.",
    "nl": "Walk-ins zijn welkom wanneer er slots beschikbaar zijn."
  },
  "After-hours private hire available Mon–Thu from 07:00.": {
    "fr": "Location privée en dehors des heures disponible du lundi au jeudi à partir de 07h00.",
    "de": "Privatmiete außerhalb der Öffnungszeiten Mo–Do ab 07:00 Uhr verfügbar.",
    "lb": "Privat Buchung ausserhalb der Ouessungszäiten Mo–Do ab 07:00 Auer verfügbar.",
    "nl": "Privéhuur buiten openingstijden beschikbaar ma–do vanaf 07:00."
  },
  "Last sessions are admitted 90 minutes before closing time.": {
    "fr": "Les dernières sessions sont admises 90 minutes avant la fermeture.",
    "de": "Letzte Sessions werden 90 Minuten vor Schließzeit zugelassen.",
    "lb": "Lescht Sessions ginn 90 Minutten virum Schléissen zougelooss.",
    "nl": "Laatste sessies worden 90 minuten voor sluitingstijd toegelaten."
  },

  # ── INFRASTRUCTURE PAGE ──
  "The Tunnel": {
    "fr": "Le Tunnel",
    "de": "Der Tunnel",
    "lb": "Den Tunnel",
    "nl": "De Tunnel"
  },
  "35 metres of purpose-built, smooth vertical airflow. Designed for serious flying.": {
    "fr": "35 mètres de flux d'air vertical fluide, construit spécifiquement. Conçu pour voler sérieusement.",
    "de": "35 Meter zweckgebundener, gleichmäßiger vertikaler Luftstrom. Für ernsthaftes Fliegen entwickelt.",
    "lb": "35 Meter zweckgebonnen, fléissend vertikale Loftströmung. Fir ernscht Fléien entwéckelt.",
    "nl": "35 meter doelgebouwde, vloeiende verticale luchtstroom. Ontworpen voor serieus vliegen."
  },
  "Why height matters.": {
    "fr": "Pourquoi la hauteur est importante.",
    "de": "Warum die Höhe wichtig ist.",
    "lb": "Firwat d'Héicht wichteg ass.",
    "nl": "Waarom hoogte belangrijk is."
  },
  "Most tunnels in Europe are 12–17m. Ours is 35m.": {
    "fr": "La plupart des tunnels en Europe font 12–17 m. Le nôtre fait 35 m.",
    "de": "Die meisten Tunnel in Europa sind 12–17 m hoch. Unserer ist 35 m.",
    "lb": "Déi meescht Tunnelen a Europa sinn 12–17 m. Eisen ass 35 m.",
    "nl": "De meeste tunnels in Europa zijn 12–17 m. De onze is 35 m."
  },
  "Four motors. Seamless airflow.": {
    "fr": "Quatre moteurs. Flux d'air sans couture.",
    "de": "Vier Motoren. Nahtloser Luftstrom.",
    "lb": "Véier Motoren. Nahtlose Loftströmung.",
    "nl": "Vier motoren. Naadloze luchtstroom."
  },
  "The Luxfly tunnel uses four synchronised electric motors mounted above the recirculation columns.": {
    "fr": "Le tunnel Luxfly utilise quatre moteurs électriques synchronisés montés au-dessus des colonnes de recirculation.",
    "de": "Der Luxfly-Tunnel verwendet vier synchronisierte Elektromotoren, die über den Rezirkulationssäulen montiert sind.",
    "lb": "Den Luxfly-Tunnel benotzt véier synchroniséiert Elektromotoren déi iwwer den Rezirkulatiounssäulen montéiert sinn.",
    "nl": "De Luxfly tunnel gebruikt vier gesynchroniseerde elektromotoren gemonteerd boven de recirculatiekolommen."
  },
  "Built safe. Run safely.": {
    "fr": "Construit en toute sécurité. Exploité en toute sécurité.",
    "de": "Sicher gebaut. Sicher betrieben.",
    "lb": "Sécher gebaut. Sécher gedriwwen.",
    "nl": "Veilig gebouwd. Veilig geëxploiteerd."
  },
  "Come fly in it.": {
    "fr": "Venez y voler.",
    "de": "Kommen Sie und fliegen Sie darin.",
    "lb": "Kommt a fléit dran.",
    "nl": "Kom erin vliegen."
  },

  # ── COACHES PAGE ──
  "Learn from people who live it.": {
    "fr": "Apprenez de personnes qui le vivent.",
    "de": "Lernen Sie von Menschen, die es leben.",
    "lb": "Léiert vu Leit déi et liewen.",
    "nl": "Leer van mensen die het beleven."
  },
  "Luxfly's coaches are IBA-certified and active competitors.": {
    "fr": "Les coaches de Luxfly sont certifiés IBA et compétiteurs actifs.",
    "de": "Luxflys Coaches sind IBA-zertifiziert und aktive Wettkämpfer.",
    "lb": "Luxfly's Coaches sinn IBA-zertifizéiert an aktiv Concurrenten.",
    "nl": "Luxfly's coaches zijn IBA-gecertificeerd en actieve deelnemers."
  },
  "There's a difference between an instructor and a coach.": {
    "fr": "Il y a une différence entre un instructeur et un coach.",
    "de": "Es gibt einen Unterschied zwischen einem Instruktor und einem Coach.",
    "lb": "Et gëtt e Ënnerscheed tëschent engem Instrukter an engem Coach.",
    "nl": "Er is een verschil tussen een instructeur en een coach."
  },
  "An instructor gets you safe. A coach gets you better.": {
    "fr": "Un instructeur vous met en sécurité. Un coach vous améliore.",
    "de": "Ein Instruktor macht Sie sicher. Ein Coach macht Sie besser.",
    "lb": "En Instrukter mécht Iech sécher. E Coach mécht Iech besser.",
    "nl": "Een instructeur zorgt voor uw veiligheid. Een coach maakt u beter."
  },
  "IBA Certified": {
    "fr": "Certifié IBA",
    "de": "IBA-zertifiziert",
    "lb": "IBA-zertifizéiert",
    "nl": "IBA-gecertificeerd"
  },
  "How to book a coaching session": {
    "fr": "Comment réserver une session de coaching",
    "de": "Wie man eine Coaching-Session bucht",
    "lb": "Wéi een eng Coaching-Session bucht",
    "nl": "Een coachingsessie boeken"
  },
  "Book a coaching session": {
    "fr": "Réserver une session de coaching",
    "de": "Coaching-Session buchen",
    "lb": "Coaching-Session buchen",
    "nl": "Coachingsessie boeken"
  },

  # ── BECOME PROFLYER PAGE ──
  "Start here. Fly forever.": {
    "fr": "Commencez ici. Volez pour toujours.",
    "de": "Fang hier an. Fliege für immer.",
    "lb": "Fänkt hei un. Fléit fir ëmmer.",
    "nl": "Begin hier. Vlieg voor altijd."
  },
  "From your first flight to competition level.": {
    "fr": "De votre premier vol au niveau compétition.",
    "de": "Von Ihrem ersten Flug bis zum Wettkampfniveau.",
    "lb": "Vun Ärem éischte Fluch bis zum Wettkampfniveau.",
    "nl": "Van uw eerste vlucht tot competitieniveau."
  },
  "Everyone starts somewhere.": {
    "fr": "Tout le monde commence quelque part.",
    "de": "Jeder fängt irgendwo an.",
    "lb": "Jiddereen fänkt iergendwou un.",
    "nl": "Iedereen begint ergens."
  },
  "The difference is they came back.": {
    "fr": "La différence c'est qu'ils sont revenus.",
    "de": "Der Unterschied ist, dass sie zurückgekommen sind.",
    "lb": "Den Ënnerscheed ass datt si zréckkomm sinn.",
    "nl": "Het verschil is dat ze terugkwamen."
  },
  "IBA certifications are internationally recognised and open doors to flying at other tunnels worldwide with coaching credit.": {
    "fr": "Les certifications IBA sont reconnues internationalement et ouvrent des portes pour voler dans d'autres tunnels dans le monde entier avec crédit de coaching.",
    "de": "IBA-Zertifizierungen sind international anerkannt und öffnen Türen zum Fliegen in anderen Tunneln weltweit mit Coaching-Credit.",
    "lb": "IBA-Zertifizéierungen ginn international unerkannt a maachen Dieren op fir a anere Tunnelen weltwäit ze fléien.",
    "nl": "IBA-certificeringen zijn internationaal erkend en openen deuren voor vliegen in andere tunnels wereldwijd met coachingkrediet."
  },
  "Ask your coach about starting your IBA record at your next session.": {
    "fr": "Demandez à votre coach de commencer votre dossier IBA lors de votre prochaine session.",
    "de": "Fragen Sie Ihren Coach, wie Sie Ihren IBA-Rekord bei Ihrer nächsten Session starten.",
    "lb": "Frot Äre Coach iwwer den Ufank vun Ärem IBA-Record bei Ärer nächster Session.",
    "nl": "Vraag uw coach over het starten van uw IBA-record bij uw volgende sessie."
  },

  # ── JOBS PAGE ──
  "Come fly with us.": {
    "fr": "Venez voler avec nous.",
    "de": "Kommen Sie mit uns fliegen.",
    "lb": "Kommt mat eis fléien.",
    "nl": "Kom met ons vliegen."
  },
  "We're looking for people who love what they do.": {
    "fr": "Nous recherchons des personnes qui aiment ce qu'elles font.",
    "de": "Wir suchen Menschen, die lieben, was sie tun.",
    "lb": "Mir sichen Leit déi lieben wat si maachen.",
    "nl": "We zoeken mensen die houden van wat ze doen."
  },
  "Luxfly is a small team. Everyone knows everyone.": {
    "fr": "Luxfly est une petite équipe. Tout le monde se connaît.",
    "de": "Luxfly ist ein kleines Team. Jeder kennt jeden.",
    "lb": "Luxfly ass en klengt Team. Jiddereen kennt jiddereen.",
    "nl": "Luxfly is een klein team. Iedereen kent iedereen."
  },
  "The facility is new, the equipment is excellent, and the people who walk through the door every day are genuinely excited to be here.": {
    "fr": "Les installations sont nouvelles, l'équipement est excellent et les personnes qui franchissent la porte chaque jour sont vraiment ravies d'être là.",
    "de": "Die Anlage ist neu, die Ausrüstung ausgezeichnet, und die Menschen, die täglich durch die Tür kommen, freuen sich wirklich, hier zu sein.",
    "lb": "D'Anlage ass nei, d'Ausrüstung ass exzellent, an d'Leit déi all Dag duerch d'Dier kommen si wierklech frou hei ze sinn.",
    "nl": "De faciliteit is nieuw, de uitrusting is uitstekend, en de mensen die elke dag door de deur lopen zijn oprecht enthousiast om hier te zijn."
  },
  "How to apply.": {
    "fr": "Comment postuler.",
    "de": "So bewerben Sie sich.",
    "lb": "Wéi een sech bewierbt.",
    "nl": "Hoe solliciteren."
  },
  "No agencies. No generic CVs. Tell us why Luxfly.": {
    "fr": "Pas d'agences. Pas de CV génériques. Dites-nous pourquoi Luxfly.",
    "de": "Keine Agenturen. Keine generischen Lebensläufe. Sagen Sie uns, warum Luxfly.",
    "lb": "Keng Agenturen. Keng generesch CVs. Sot eis firwat Luxfly.",
    "nl": "Geen bureaus. Geen generieke CV's. Vertel ons waarom Luxfly."
  },
  "Current openings": {
    "fr": "Postes actuellement ouverts",
    "de": "Aktuelle Stellenangebote",
    "lb": "Aktuell offen Stellen",
    "nl": "Huidige vacatures"
  },
  "Tunnel Instructor": {
    "fr": "Instructeur Tunnel",
    "de": "Tunnel-Instruktor",
    "lb": "Tunnel-Instrukter",
    "nl": "Tunnelinstructeur"
  },
  "Events Coordinator": {
    "fr": "Coordinateur Événements",
    "de": "Veranstaltungskoordinator",
    "lb": "Evenement-Koordinator",
    "nl": "Evenementencoördinator"
  },
  "Customer Experience": {
    "fr": "Expérience client",
    "de": "Kundenerfahrung",
    "lb": "Clientenerfarung",
    "nl": "Klantervaring"
  },

  # ── SHARED / NAVIGATION STRINGS ──
  "Step by Step": {
    "fr": "Étape par étape",
    "de": "Schritt für Schritt",
    "lb": "Schrétt fir Schrétt",
    "nl": "Stap voor stap"
  },
  "Your first flight in four steps": {
    "fr": "Votre premier vol en quatre étapes",
    "de": "Ihr erster Flug in vier Schritten",
    "lb": "Äre Fluch an véier Schrétt",
    "nl": "Uw eerste vlucht in vier stappen"
  },
  "Why it works for business": {
    "fr": "Pourquoi ça marche pour les entreprises",
    "de": "Warum es für Unternehmen funktioniert",
    "lb": "Firwat et fir Betriber funktionéiert",
    "nl": "Waarom het werkt voor bedrijven"
  },
  "What we host": {
    "fr": "Ce que nous organisons",
    "de": "Was wir veranstalten",
    "lb": "Wat mir organiséieren",
    "nl": "Wat we organiseren"
  },
  "The Space": {
    "fr": "L'Espace",
    "de": "Der Raum",
    "lb": "De Raum",
    "nl": "De Ruimte"
  },
  "Who flies with us?": {
    "fr": "Qui vole avec nous ?",
    "de": "Wer fliegt mit uns?",
    "lb": "Wien fléit mat eis?",
    "nl": "Wie vliegt met ons?"
  },
  "Ready to plan?": {
    "fr": "Prêt à planifier ?",
    "de": "Bereit zu planen?",
    "lb": "Prett fir ze plangen?",
    "nl": "Klaar om te plannen?"
  },
  "Our values": {
    "fr": "Nos valeurs",
    "de": "Unsere Werte",
    "lb": "Eis Wäerter",
    "nl": "Onze waarden"
  },
  "The Team": {
    "fr": "L'Équipe",
    "de": "Das Team",
    "lb": "D'Team",
    "nl": "Het Team"
  },
  "Location": {
    "fr": "Emplacement",
    "de": "Lage",
    "lb": "Standuert",
    "nl": "Locatie"
  },
  "Free parking on site": {
    "fr": "Parking gratuit sur place",
    "de": "Kostenlose Parkplätze vor Ort",
    "lb": "Gratis Parking op der Plaz",
    "nl": "Gratis parkeren op locatie"
  },
  "Get directions": {
    "fr": "Obtenir l'itinéraire",
    "de": "Wegbeschreibung",
    "lb": "Weeweiser kréien",
    "nl": "Routebeschrijving"
  },
  "Open in Google Maps →": {
    "fr": "Ouvrir dans Google Maps →",
    "de": "In Google Maps öffnen →",
    "lb": "A Google Maps opmaachen →",
    "nl": "Openen in Google Maps →"
  },
  "Book a flight": {
    "fr": "Réserver un vol",
    "de": "Flug buchen",
    "lb": "Fluch buchen",
    "nl": "Vlucht boeken"
  },
  "Book your flight": {
    "fr": "Réservez votre vol",
    "de": "Buchen Sie Ihren Flug",
    "lb": "Bucht Äre Fluch",
    "nl": "Boek uw vlucht"
  },
  "Book a coaching consultation": {
    "fr": "Réserver une consultation de coaching",
    "de": "Coaching-Beratung buchen",
    "lb": "Coaching-Consultatioun buchen",
    "nl": "Coachingconsultatie boeken"
  },
  "Progression roadmap": {
    "fr": "Feuille de route de progression",
    "de": "Fortschritts-Roadmap",
    "lb": "Fortschrëtts-Roadmap",
    "nl": "Progressie routekaart"
  },
  "Weekly schedule": {
    "fr": "Horaire hebdomadaire",
    "de": "Wochenplan",
    "lb": "Wéichentleche Zäitplang",
    "nl": "Wekelijks schema"
  },
  "More than instruction.": {
    "fr": "Plus que de l'instruction.",
    "de": "Mehr als Unterricht.",
    "lb": "Méi wéi Instruktioun.",
    "nl": "Meer dan instructie."
  },
  "Disciplines of competitive flying": {
    "fr": "Disciplines de vol compétitif",
    "de": "Disziplinen des Wettkampffliegens",
    "lb": "Disziplinnen vum Wettkampffléien",
    "nl": "Disciplines van competitief vliegen"
  },
  "Why train at Luxfly": {
    "fr": "Pourquoi s'entraîner chez Luxfly",
    "de": "Warum bei Luxfly trainieren",
    "lb": "Firwat bei Luxfly trainéieren",
    "nl": "Waarom trainen bij Luxfly"
  },
  "Where Luxfly flyers compete": {
    "fr": "Où les pilotes Luxfly concourent",
    "de": "Wo Luxfly-Flieger teilnehmen",
    "lb": "Wou Luxfly Fléier concurrenzéieren",
    "nl": "Waar Luxfly vliegers deelnemen"
  },
  "Catering on site": {
    "fr": "Restauration sur place",
    "de": "Catering vor Ort",
    "lb": "Catering op der Plaz",
    "nl": "Catering op locatie"
  },
  "Dedicated event coordinator": {
    "fr": "Coordinateur d'événements dédié",
    "de": "Dedizierter Veranstaltungskoordinator",
    "lb": "Dediziéierten Event-Koordinator",
    "nl": "Toegewijde eventcoördinator"
  },
  "Flexible scheduling": {
    "fr": "Planification flexible",
    "de": "Flexible Terminplanung",
    "lb": "Flexibel Zäitplanung",
    "nl": "Flexibele planning"
  },
  "Bar & terrace access": {
    "fr": "Accès bar & terrasse",
    "de": "Bar- & Terrassenzugang",
    "lb": "Bar & Terrasse Zougang",
    "nl": "Bar & terrastoegang"
  },
  "Full AV in meeting rooms": {
    "fr": "AV complet dans les salles de réunion",
    "de": "Vollständige AV-Ausstattung in Besprechungsräumen",
    "lb": "Vollständeg AV a Versammlungsraimlechkeeten",
    "nl": "Volledige AV in vergaderzalen"
  },
}


def inject(content, lang, entries):
    new_lines = [f"      // ── BIG BATCH2 {lang.upper()} ──"]
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
