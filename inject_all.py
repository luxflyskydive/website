#!/usr/bin/env python3
"""Single comprehensive translation injection — all remaining pages."""
import re

TRANSLATIONS = {
  # ── FAQ PAGE ──
  "Questions, answered.": {
    "fr": "Questions, réponses.",
    "de": "Fragen, beantwortet.",
    "lb": "Froen, beäntwert.",
    "nl": "Vragen, beantwoord."
  },
  "Everything you need to know before you book. If your question isn't here, contact us.": {
    "fr": "Tout ce que vous devez savoir avant de réserver. Si votre question n'est pas ici, contactez-nous.",
    "de": "Alles, was Sie vor der Buchung wissen müssen. Falls Ihre Frage nicht dabei ist, kontaktieren Sie uns.",
    "lb": "Alles wat Dir wësse musst ier Dir bucht. Wann Är Fro net hei ass, kontaktéiert eis.",
    "nl": "Alles wat u moet weten voor uw boeking. Staat uw vraag er niet bij, neem dan contact met ons op."
  },
  "What is indoor skydiving?": {
    "fr": "Qu'est-ce que le saut en chute libre indoor ?",
    "de": "Was ist Indoor-Skydiving?",
    "lb": "Wat ass Indoor-Skydiving?",
    "nl": "Wat is indoor skydiven?"
  },
  "It's the experience of freefall in a vertical wind tunnel. The air column moves at up to 350 km/h and supports your body weight. No parachute, no aircraft — just you and the air.": {
    "fr": "C'est l'expérience de la chute libre dans une soufflerie verticale. Le flux d'air monte jusqu'à 350 km/h et soutient votre poids. Pas de parachute, pas d'avion — juste vous et l'air.",
    "de": "Das Erlebnis des freien Falls in einem vertikalen Windkanal. Die Luftsäule bewegt sich mit bis zu 350 km/h und trägt Ihr Körpergewicht. Kein Fallschirm, kein Flugzeug — nur Sie und die Luft.",
    "lb": "Et ass d'Erfarung vum fräie Fall an engem vertikale Wandkanal. D'Loftsäil bewegt sech mat bis zu 350 km/h a setzt Äert Kierpergewiicht. Kee Fallschirm, kee Fliger — just Dir an d'Loft.",
    "nl": "De ervaring van vrije val in een verticale windtunnel. De luchtstroom beweegt tot 350 km/u en ondersteunt uw lichaamsgewicht. Geen parachute, geen vliegtuig — alleen u en de lucht."
  },
  "How is it different from real skydiving?": {
    "fr": "En quoi est-ce différent du vrai parachutisme ?",
    "de": "Wie unterscheidet es sich vom echten Fallschirmspringen?",
    "lb": "Wéi ënnerscheet et sech vum echte Fallschirmspringen?",
    "nl": "Hoe verschilt het van echt skydiven?"
  },
  "Outdoor skydiving is a one-time 60-second freefall from altitude. Indoor flying is repeatable, controlled, and teachable. Most outdoor skydivers use tunnel time to practice because the feedback is immediate and you get more air time per session.": {
    "fr": "Le parachutisme extérieur est une chute libre unique de 60 secondes depuis l'altitude. Le vol indoor est répétable, contrôlé et enseignable. La plupart des parachutistes utilisent le temps en tunnel pour s'entraîner car le retour est immédiat et vous obtenez plus de temps de vol par session.",
    "de": "Outdoor-Skydiving ist ein einmaliger 60-Sekunden-Freifall aus großer Höhe. Indoor-Fliegen ist wiederholbar, kontrollierbar und lehrbar. Die meisten Outdoor-Skydiver nutzen die Tunnelzeit zum Üben, weil das Feedback sofort kommt und man pro Session mehr Flugzeit bekommt.",
    "lb": "Outdoor-Skydiving ass e eemolege 60-Sekonnen-Fräifall aus der Héicht. Indoor-Fléie ass widderhuelbar, kontrolléiert a léierbar. Déi meescht Outdoor-Skydiver notzen d'Tunnelzäit fir z'üben well d'Feedback direkt kënnt.",
    "nl": "Outdoor skydiven is een eenmalige vrije val van 60 seconden vanuit hoogte. Indoor vliegen is herhaalbaar, gecontroleerd en te leren. De meeste outdoor skydivers gebruiken tunneltijd om te oefenen omdat de feedback direct is."
  },
  "Is it actually fun?": {
    "fr": "Est-ce vraiment amusant ?",
    "de": "Macht es wirklich Spaß?",
    "lb": "Mécht et wierklech Spaass?",
    "nl": "Is het echt leuk?"
  },
  "Yes. Most people laugh for the entire first session. Some cry. All of them come back.": {
    "fr": "Oui. La plupart des gens rient pendant toute la première session. Certains pleurent. Tous reviennent.",
    "de": "Ja. Die meisten Leute lachen während der gesamten ersten Session. Manche weinen. Alle kommen wieder.",
    "lb": "Jo. Déi meescht Leit laachen déi ganzen éischt Session. E puer wäinen. All kommen erëm.",
    "nl": "Ja. De meeste mensen lachen de hele eerste sessie. Sommigen huilen. Ze komen allemaal terug."
  },
  "Can I watch someone else fly?": {
    "fr": "Puis-je regarder quelqu'un d'autre voler ?",
    "de": "Kann ich jemand anderem beim Fliegen zusehen?",
    "lb": "Kann ech engem anere beim Fléie kucken?",
    "nl": "Kan ik iemand anders zien vliegen?"
  },
  "Yes. There's a viewing gallery with floor-to-ceiling windows right next to the tunnel. Best seat in the house.": {
    "fr": "Oui. Il y a une galerie de visualisation avec des fenêtres du sol au plafond juste à côté du tunnel. La meilleure place.",
    "de": "Ja. Es gibt eine Zuschauergalerie mit raumhohen Fenstern direkt neben dem Tunnel. Bester Platz im Haus.",
    "lb": "Jo. Et gëtt eng Kuckkammerléi mat Fënstere vum Buedem bis zur Decke direkt nieft dem Tunnel. Déi bescht Plaz.",
    "nl": "Ja. Er is een kijkgalerij met vloer-tot-plafond ramen pal naast de tunnel. De beste zitplaats."
  },
  "Is it safe?": {
    "fr": "Est-ce sûr ?",
    "de": "Ist es sicher?",
    "lb": "Ass et sécher?",
    "nl": "Is het veilig?"
  },
  "Indoor skydiving is one of the safest adventure activities available. Our instructors are certified and accompany you throughout your flight. The tunnel is inspected and maintained to European safety standards.": {
    "fr": "Le saut en chute libre indoor est l'une des activités d'aventure les plus sûres. Nos instructeurs sont certifiés et vous accompagnent tout au long de votre vol. Le tunnel est inspecté et entretenu selon les normes de sécurité européennes.",
    "de": "Indoor-Skydiving ist eine der sichersten Abenteueraktivitäten. Unsere Instruktoren sind zertifiziert und begleiten Sie während des gesamten Fluges. Der Tunnel wird nach europäischen Sicherheitsstandards geprüft und gewartet.",
    "lb": "Indoor-Skydiving ass eng vun de séchersten Abenteueraktivitéiten. Eis Instrukteuren si zertifizéiert a begleeden Iech wärend dem ganzen Fluch. Den Tunnel gëtt no europäesche Sécherheetsnormen iwwerpréift.",
    "nl": "Indoor skydiven is een van de veiligste avonturenactiviteiten. Onze instructeurs zijn gecertificeerd en begeleiden u tijdens uw vlucht. De tunnel wordt geïnspecteerd en onderhouden volgens Europese veiligheidsnormen."
  },
  "What health conditions prevent me from flying?": {
    "fr": "Quels problèmes de santé m'empêchent de voler ?",
    "de": "Welche Gesundheitszustände hindern mich am Fliegen?",
    "lb": "Wéi Gesondheetsproblemer verhënneren datt ech fléien?",
    "nl": "Welke gezondheidsproblemen verhinderen dat ik vlieg?"
  },
  "Pregnancy, severe heart conditions, recent surgery (within 3 months), uncontrolled epilepsy, and severe spinal conditions are the main contraindications. If unsure, consult your GP and let us know at booking.": {
    "fr": "La grossesse, les maladies cardiaques graves, les opérations récentes (dans les 3 mois), l'épilepsie non contrôlée et les affections vertébrales sévères sont les principales contre-indications. En cas de doute, consultez votre médecin et informez-nous lors de la réservation.",
    "de": "Schwangerschaft, schwere Herzerkrankungen, kürzliche Operationen (innerhalb von 3 Monaten), unkontrollierte Epilepsie und schwere Wirbelsäulenerkrankungen sind die Hauptkontraindikationen. Im Zweifel Ihren Arzt konsultieren und uns bei der Buchung informieren.",
    "lb": "Schwangerschaft, schwéier Hierzkrankheeten, rezent Operatiounen (bannent 3 Méint), onkontrolléiert Epilepsie a schwéier Wirbelsäulekrankheeten si déi Haaptkontraindikatiounen. Am Zweiwel Äre Dokter consultéieren.",
    "nl": "Zwangerschap, ernstige hartkwalen, recente operaties (binnen 3 maanden), ongecontroleerde epilepsie en ernstige wervelkolomproblemen zijn de voornaamste contra-indicaties. Raadpleeg bij twijfel uw arts."
  },
  "What's the minimum age?": {
    "fr": "Quel est l'âge minimum ?",
    "de": "Was ist das Mindestalter?",
    "lb": "Wat ass d'Mindestalter?",
    "nl": "Wat is de minimumleeftijd?"
  },
  "4 years old. There is no upper age limit — we fly guests all the way up to 95.": {
    "fr": "4 ans. Il n'y a pas de limite d'âge supérieure — nous faisons voler des invités jusqu'à 95 ans.",
    "de": "4 Jahre. Es gibt keine Altersobergrenze — wir fliegen Gäste bis zu 95 Jahren.",
    "lb": "4 Joer. Et gëtt keng iewescht Altersgrenz — mir fléien Gäscht bis zu 95 Joer.",
    "nl": "4 jaar. Er is geen bovenste leeftijdsgrens — we laten gasten vliegen tot wel 95 jaar."
  },
  "Do I need to know how to swim?": {
    "fr": "Dois-je savoir nager ?",
    "de": "Muss ich schwimmen können?",
    "lb": "Muss ech schwammen?",
    "nl": "Moet ik kunnen zwemmen?"
  },
  "No. This has been asked. The answer is no.": {
    "fr": "Non. On nous l'a demandé. La réponse est non.",
    "de": "Nein. Diese Frage wurde gestellt. Die Antwort ist nein.",
    "lb": "Nee. Dës Fro gouf gestallt. D'Äntwert ass nee.",
    "nl": "Nee. Dit is gevraagd. Het antwoord is nee."
  },
  "How do I book?": {
    "fr": "Comment réserver ?",
    "de": "Wie buche ich?",
    "lb": "Wéi buchen ech?",
    "nl": "Hoe boek ik?"
  },
  "Online at shop.indoorskydive.lu or by phone. Walk-in bookings are accepted subject to availability.": {
    "fr": "En ligne sur shop.indoorskydive.lu ou par téléphone. Les réservations sans rendez-vous sont acceptées selon disponibilité.",
    "de": "Online unter shop.indoorskydive.lu oder telefonisch. Walk-in-Buchungen werden nach Verfügbarkeit akzeptiert.",
    "lb": "Online op shop.indoorskydive.lu oder per Telefon. Walk-in Buchungen ginn no Verfügbarkeet ugeholl.",
    "nl": "Online via shop.indoorskydive.lu of telefonisch. Walk-in boekingen worden geaccepteerd op beschikbaarheid."
  },
  "Can I cancel or reschedule?": {
    "fr": "Puis-je annuler ou reporter ?",
    "de": "Kann ich stornieren oder umbuchen?",
    "lb": "Kann ech annuléieren oder ëmbuchen?",
    "nl": "Kan ik annuleren of omboeken?"
  },
  "How early should I arrive?": {
    "fr": "Combien de temps à l'avance dois-je arriver ?",
    "de": "Wie früh sollte ich ankommen?",
    "lb": "Wéi fréi soll ech ukommen?",
    "nl": "Hoe vroeg moet ik aankomen?"
  },
  "60 minutes before your scheduled flight time. Check-in, training, gear fitting and briefing all happen in this window. If your flight is at 14:00, you should arrive and sign in at 13:00.": {
    "fr": "60 minutes avant l'heure de vol prévue. L'enregistrement, la formation, l'équipement et le briefing se déroulent dans cette fenêtre. Si votre vol est à 14h00, vous devez arriver et vous inscrire à 13h00.",
    "de": "60 Minuten vor Ihrer geplanten Flugzeit. Check-in, Training, Ausrüstung und Briefing finden in diesem Zeitfenster statt. Bei Flug um 14:00 Uhr sollten Sie um 13:00 Uhr ankommen.",
    "lb": "60 Minutten virun Ärer geplancter Fluchzäit. Check-in, Training, Ausrüstung a Briefing fanne fir dës Zäit statt. Wann Äre Fluch ëm 14:00 Auer ass, sidd Dir ëm 13:00 Auer do.",
    "nl": "60 minuten voor uw geplande vluchtijd. Inchecken, training, uitrusting en briefing vinden allemaal in dit tijdvenster plaats. Als uw vlucht om 14:00 is, komt u aan om 13:00."
  },
  "Can I book for a group?": {
    "fr": "Puis-je réserver pour un groupe ?",
    "de": "Kann ich für eine Gruppe buchen?",
    "lb": "Kann ech fir eng Grupp buchen?",
    "nl": "Kan ik voor een groep boeken?"
  },
  "Yes. Groups of 10+ receive discounted rates. Contact events@luxfly.lu for group bookings.": {
    "fr": "Oui. Les groupes de 10 personnes ou plus bénéficient de tarifs réduits. Contactez events@luxfly.lu pour les réservations de groupe.",
    "de": "Ja. Gruppen ab 10 Personen erhalten Sonderkonditionen. Kontaktieren Sie events@luxfly.lu für Gruppenbuchungen.",
    "lb": "Jo. Gruppen ab 10 Persounen kréien erméissigte Präisser. Kontaktéiert events@luxfly.lu fir Gruppebuchungen.",
    "nl": "Ja. Groepen van 10 of meer ontvangen gereduceerde tarieven. Neem contact op via events@luxfly.lu voor groepsboekingen."
  },
  "Do I need to book in advance?": {
    "fr": "Dois-je réserver à l'avance ?",
    "de": "Muss ich im Voraus buchen?",
    "lb": "Muss ech am Viraus buchen?",
    "nl": "Moet ik van tevoren boeken?"
  },
  "We recommend it, especially for weekends. Walk-ins are welcome but we can't always guarantee a slot on the day.": {
    "fr": "Nous le recommandons, surtout pour les week-ends. Les visites spontanées sont les bienvenues mais nous ne pouvons pas toujours garantir une place le jour même.",
    "de": "Wir empfehlen es, besonders für Wochenenden. Walk-ins sind willkommen, aber wir können keinen Platz am selben Tag garantieren.",
    "lb": "Mir empféielen et, besonnesch fir Weekender. Walk-ins si wëllkommen mee mir kënnen net ëmmer e Slot um selwechten Dag garantéieren.",
    "nl": "We raden het aan, vooral voor weekenden. Walk-ins zijn welkom maar we kunnen niet altijd een slot op de dag garanderen."
  },
  "What do I wear?": {
    "fr": "Que dois-je porter ?",
    "de": "Was soll ich tragen?",
    "lb": "Wat soll ech undoen?",
    "nl": "Wat moet ik dragen?"
  },
  "Comfortable, close-fitting clothes. Trainers or lace-up shoes. No scarves, loose jewellery, or items that can catch wind.": {
    "fr": "Des vêtements confortables et ajustés. Des baskets ou des chaussures à lacets. Pas d'écharpes, de bijoux amples ou d'objets pouvant attraper le vent.",
    "de": "Bequeme, eng anliegende Kleidung. Sportschuhe oder Schnürschuhe. Keine Schals, losen Schmuck oder Gegenstände, die Wind fangen können.",
    "lb": "Komfortabel, noleeend Kleeder. Sportschoung oder Schnoerschoung. Keng Schals, lose Bijouterien oder Saachen déi de Wand fangen.",
    "nl": "Comfortabele, strakke kleding. Sportschoenen of vetersschoenen. Geen sjaals, los sieraad of items die wind kunnen vangen."
  },
  "Can I bring my phone in?": {
    "fr": "Puis-je apporter mon téléphone ?",
    "de": "Kann ich mein Handy mitnehmen?",
    "lb": "Kann ech mäi Telefon matbréngen?",
    "nl": "Kan ik mijn telefoon meenemen?"
  },
  "No. Lockers are provided. There's a viewing area and we offer professional photography.": {
    "fr": "Non. Des casiers sont fournis. Il y a une zone de visualisation et nous proposons de la photographie professionnelle.",
    "de": "Nein. Schließfächer werden bereitgestellt. Es gibt einen Zuschaubereich und wir bieten professionelle Fotografie an.",
    "lb": "Nee. Schafcher sinn zur Verfügung gestallt. Et gëtt e Kuckberäich a mir bidden professionell Fotografie un.",
    "nl": "Nee. Er zijn kluisjes beschikbaar. Er is een kijkruimte en we bieden professionele fotografie aan."
  },
  "How long is a session?": {
    "fr": "Quelle est la durée d'une session ?",
    "de": "Wie lange dauert eine Session?",
    "lb": "Wéi laang dauert eng Session?",
    "nl": "Hoe lang duurt een sessie?"
  },
  "Your total visit is approximately 2 hours — this covers check-in (60 minutes before your flight), briefing, gear-up, your flight time in the tunnel, and time afterwards to look at photos. Each individual flight is 60 seconds; the number of flights depends on your package.": {
    "fr": "Votre visite totale dure environ 2 heures — cela comprend l'enregistrement (60 minutes avant votre vol), le briefing, l'équipement, votre temps de vol dans le tunnel et le temps après pour regarder les photos. Chaque vol individuel dure 60 secondes ; le nombre de vols dépend de votre forfait.",
    "de": "Ihr Gesamtbesuch dauert etwa 2 Stunden — das umfasst Check-in (60 Minuten vor Ihrem Flug), Briefing, Ausrüstung, Ihre Flugzeit im Tunnel und Zeit danach für Fotos. Jeder einzelne Flug dauert 60 Sekunden; die Anzahl der Flüge hängt von Ihrem Paket ab.",
    "lb": "Äre Gesamtbesuch dauert ongeféier 2 Stonnen — dat ëmfaasst Check-in (60 Minutten virum Fluch), Briefing, Ausrüstung, Är Fluchzäit am Tunnel a Zäit duerno fir Fotoen. All eenzele Fluch dauert 60 Sekonnen.",
    "nl": "Uw totale bezoek duurt ongeveer 2 uur — dit omvat inchecken (60 minuten voor uw vlucht), briefing, uitrusting, uw vluchtijd in de tunnel en tijd daarna voor foto's. Elke individuele vlucht is 60 seconden."
  },
  "What if I'm scared?": {
    "fr": "Et si j'ai peur ?",
    "de": "Was, wenn ich Angst habe?",
    "lb": "A wann ech Angscht hunn?",
    "nl": "Wat als ik bang ben?"
  },
  "Tell your instructor. They're trained to get nervous first-timers flying every single day. Going slowly is completely normal and respected.": {
    "fr": "Dites-le à votre instructeur. Ils sont formés pour faire voler des débutants nerveux chaque jour. Aller lentement est tout à fait normal et respecté.",
    "de": "Sagen Sie es Ihrem Instruktor. Sie sind darin geschult, nervöse Erstflügler jeden Tag zum Fliegen zu bringen. Langsam vorzugehen ist völlig normal und wird respektiert.",
    "lb": "Soot et Ärem Instrukter. Si si geschult fir nervéis Erstfliger all Dag ze fléien. Lues virgoen ass ganz normal a gëtt respektéiert.",
    "nl": "Vertel het uw instructeur. Ze zijn getraind om nerveuze beginners elke dag te laten vliegen. Langzaam gaan is volkomen normaal en wordt gerespecteerd."
  },
  "How much does it cost?": {
    "fr": "Combien ça coûte ?",
    "de": "Was kostet es?",
    "lb": "Wéivill kascht et?",
    "nl": "Hoeveel kost het?"
  },
  "Packages start from €45.90 for children (ages 4–12) and €65.90 for adults. See prices.html for full details including all packages.": {
    "fr": "Les forfaits commencent à 45,90 € pour les enfants (4 à 12 ans) et à 65,90 € pour les adultes. Voir les détails complets sur la page des prix.",
    "de": "Pakete beginnen ab 45,90 € für Kinder (4–12 Jahre) und 65,90 € für Erwachsene. Vollständige Details auf der Preisseite.",
    "lb": "Pakete fangen un ab 45,90 € fir Kanner (4–12 Joer) a 65,90 € fir Erwuessener. Kuckt d'Präisser fir all Detailer.",
    "nl": "Pakketten vanaf €45,90 voor kinderen (4–12 jaar) en €65,90 voor volwassenen. Zie de prijzenpagina voor alle details."
  },
  "Do gift vouchers expire?": {
    "fr": "Les bons cadeaux expirent-ils ?",
    "de": "Laufen Geschenkgutscheine ab?",
    "lb": "Verfalen Kadosschäiner?",
    "nl": "Verlopen cadeaubonnen?"
  },
  "Gift vouchers are valid for 12 months from the date of purchase. They cannot be extended beyond this period. The voucher is not nominative — it can be used by anyone.": {
    "fr": "Les bons cadeaux sont valables 12 mois à compter de la date d'achat. Ils ne peuvent pas être prolongés au-delà de cette période. Le bon n'est pas nominatif — il peut être utilisé par n'importe qui.",
    "de": "Geschenkgutscheine sind 12 Monate ab Kaufdatum gültig. Sie können nicht über diesen Zeitraum verlängert werden. Der Gutschein ist nicht nominell — er kann von jedem genutzt werden.",
    "lb": "Kadosschäiner si 12 Méint ab Kaafdatum gülteg. Si kënnen net iwwer dëse Zäitraum verlängert ginn. De Schäin ass net nominativ — hien kann vu jidderengem benotzt ginn.",
    "nl": "Cadeaubonnen zijn 12 maanden geldig vanaf de aankoopdatum. Ze kunnen niet worden verlengd. De bon is niet op naam — hij kan door iedereen worden gebruikt."
  },
  "Can I get a refund on a voucher?": {
    "fr": "Puis-je obtenir un remboursement sur un bon ?",
    "de": "Kann ich eine Rückerstattung für einen Gutschein erhalten?",
    "lb": "Kann ech eng Erstattung fir e Schäin kréien?",
    "nl": "Kan ik terugbetaling krijgen voor een bon?"
  },
  "Vouchers are non-refundable and cannot be exchanged for cash. They are valid for 12 months from purchase. If you cannot use yours before expiry, it can be renewed for a further 3 months — enter your code and follow the steps on the website.": {
    "fr": "Les bons ne sont pas remboursables et ne peuvent pas être échangés contre de l'argent. Ils sont valables 12 mois à partir de l'achat. Si vous ne pouvez pas utiliser le vôtre avant l'expiration, il peut être renouvelé pour 3 mois supplémentaires — entrez votre code et suivez les étapes sur le site.",
    "de": "Gutscheine sind nicht erstattungsfähig und können nicht gegen Bargeld eingetauscht werden. Sie sind 12 Monate ab Kauf gültig. Falls Sie Ihren vor Ablauf nicht nutzen können, kann er um weitere 3 Monate verlängert werden.",
    "lb": "Schäiner sinn net erstattungsfäheg a kënnen net géint Suen getosch ginn. Si si 12 Méint ab Kaf gülteg. Wann Dir Ären net virum Verfallsdatum notze kënnt, kann hien ëm weider 3 Méint verlängert ginn.",
    "nl": "Bonnen zijn niet restitueerbaar en kunnen niet worden ingewisseld voor contant geld. Ze zijn 12 maanden geldig. Als u de uwe niet voor het verlopen kunt gebruiken, kan hij met 3 maanden worden verlengd."
  },
  "Are there student or group discounts?": {
    "fr": "Y a-t-il des réductions étudiants ou de groupe ?",
    "de": "Gibt es Studenten- oder Gruppenrabatte?",
    "lb": "Gëtt et Studenten- oder Gruppenrabatter?",
    "nl": "Zijn er student- of groepskortingen?"
  },
  "Group discounts from 10 people. Ask about student rates at reception.": {
    "fr": "Réductions de groupe à partir de 10 personnes. Renseignez-vous sur les tarifs étudiants à la réception.",
    "de": "Gruppenrabatte ab 10 Personen. Fragen Sie an der Rezeption nach Studentenpreisen.",
    "lb": "Gruppenrabatter ab 10 Persounen. Freet un der Rezeptioun no Studentepräisser.",
    "nl": "Groepskortingen vanaf 10 personen. Vraag naar studentenprijzen bij de receptie."
  },

  # ── CONDITIONS PAGE ──
  "Conditions of participation.": {
    "fr": "Conditions de participation.",
    "de": "Teilnahmebedingungen.",
    "lb": "Participatiounsbedingungen.",
    "nl": "Deelnamevoorwaarden."
  },
  "Please read before booking.": {
    "fr": "À lire avant de réserver.",
    "de": "Bitte vor der Buchung lesen.",
    "lb": "Wann ech géif froen, bitte virum Buchen liesen.",
    "nl": "Lees dit voor het boeken."
  },
  "These conditions ensure a safe and enjoyable experience for everyone.": {
    "fr": "Ces conditions garantissent une expérience sûre et agréable pour tous.",
    "de": "Diese Bedingungen gewährleisten ein sicheres und angenehmes Erlebnis für alle.",
    "lb": "Dës Bedingunge garantéieren eng sécher a schéin Erfarung fir jiddereen.",
    "nl": "Deze voorwaarden zorgen voor een veilige en prettige ervaring voor iedereen."
  },
  "Age & height requirements": {
    "fr": "Exigences d'âge et de taille",
    "de": "Alters- und Größenanforderungen",
    "lb": "Alters- a Gréissufuerderungen",
    "nl": "Leeftijds- en lengtevereisten"
  },
  "Minimum age: 4 years old.": {
    "fr": "Âge minimum : 4 ans.",
    "de": "Mindestalter: 4 Jahre.",
    "lb": "Mindestalter: 4 Joer.",
    "nl": "Minimumleeftijd: 4 jaar."
  },
  "Weight limit: Flying is not recommended for individuals over 120 kg or those with a history of shoulder dislocation.": {
    "fr": "Limite de poids : Le vol n'est pas recommandé pour les personnes de plus de 120 kg ou celles ayant des antécédents de luxation de l'épaule.",
    "de": "Gewichtslimit: Fliegen wird nicht empfohlen für Personen über 120 kg oder mit Vorgeschichte von Schulterverrenkung.",
    "lb": "Gewiichtslimit: Fléien gëtt net empfohlen fir Persounen iwwer 120 kg oder mat Virgeschicht vu Schultervrenken.",
    "nl": "Gewichtslimiet: Vliegen wordt niet aanbevolen voor personen boven 120 kg of met een voorgeschiedenis van schouderluxatie."
  },
  "Under 18 requirements: Children and teenagers must be accompanied by a parent or legal guardian.": {
    "fr": "Conditions pour les moins de 18 ans : Les enfants et adolescents doivent être accompagnés d'un parent ou tuteur légal.",
    "de": "Anforderungen unter 18: Kinder und Jugendliche müssen von einem Elternteil oder gesetzlichen Vormund begleitet werden.",
    "lb": "Ufuerderunge fir ënner 18: Kanner a Jugendlecher mussen vun engem Elterendeel oder gesetzleche Virmund begleet ginn.",
    "nl": "Vereisten onder 18: Kinderen en tieners moeten vergezeld worden door een ouder of wettelijke voogd."
  },
  "A signed waiver is required from a guardian before participation.": {
    "fr": "Une renonciation signée par un tuteur est requise avant la participation.",
    "de": "Eine unterschriebene Haftungsfreistellung eines Erziehungsberechtigten ist vor der Teilnahme erforderlich.",
    "lb": "Eng ënnerschriwwe Verzichtserklärung vun engem Virmund ass virun der Participatioun erfuerderlech.",
    "nl": "Een getekende vrijwaring van een voogd is vereist voor deelname."
  },
  "Waiver required: All participants regardless of age must sign a liability waiver before flying.": {
    "fr": "Renonciation requise : Tous les participants, quel que soit leur âge, doivent signer une renonciation de responsabilité avant de voler.",
    "de": "Haftungsfreistellung erforderlich: Alle Teilnehmer müssen unabhängig vom Alter vor dem Fliegen eine Haftungsfreistellung unterzeichnen.",
    "lb": "Verzichtserklärung erfuerderlech: All Participanten onofhängeg vum Alter mussen virum Fléien eng Haftungsfreistellung ënnerschreiwen.",
    "nl": "Vrijwaring vereist: Alle deelnemers moeten ongeacht leeftijd voor het vliegen een aansprakelijkheidsvrijwaring ondertekenen."
  },
  "Cancellations & changes": {
    "fr": "Annulations et modifications",
    "de": "Stornierungen & Änderungen",
    "lb": "Annulatiounen & Ännerungen",
    "nl": "Annuleringen & wijzigingen"
  },
  "Full refund: More than 48 hours before your session.": {
    "fr": "Remboursement complet : Plus de 48 heures avant votre session.",
    "de": "Vollständige Rückerstattung: Mehr als 48 Stunden vor Ihrer Session.",
    "lb": "Vollständeg Erstattung: Méi wéi 48 Stonnen virun Ärer Session.",
    "nl": "Volledige terugbetaling: meer dan 48 uur voor uw sessie."
  },
  "No questions asked.": {
    "fr": "Sans questions posées.",
    "de": "Keine Fragen gestellt.",
    "lb": "Ouni Froe gestallt.",
    "nl": "Geen vragen gesteld."
  },
  "No refund: Less than 24 hours before your session.": {
    "fr": "Aucun remboursement : Moins de 24 heures avant votre session.",
    "de": "Keine Rückerstattung: Weniger als 24 Stunden vor Ihrer Session.",
    "lb": "Keng Erstattung: Manner wéi 24 Stonnen virun Ärer Session.",
    "nl": "Geen terugbetaling: minder dan 24 uur voor uw sessie."
  },
  "If you need to cancel with short notice, you forfeit the full amount.": {
    "fr": "Si vous devez annuler à court délai, vous perdez la totalité du montant.",
    "de": "Bei kurzfristiger Stornierung verlieren Sie den vollen Betrag.",
    "lb": "Wann Dir kuerzfristeg annuléiere musst, verléiert Dir de vollen Betrag.",
    "nl": "Als u op korte termijn annuleert, verliest u het volledige bedrag."
  },
  "Move your booking to any available date at no cost.": {
    "fr": "Déplacez votre réservation vers n'importe quelle date disponible sans frais.",
    "de": "Verschieben Sie Ihre Buchung auf ein beliebiges verfügbares Datum ohne Kosten.",
    "lb": "Beweegt Är Buchung op all disponibel Datum ouni Käschten.",
    "nl": "Verplaats uw boeking naar elke beschikbare datum zonder kosten."
  },
  "Force majeure: Illness, injury, or documented emergency with medical evidence may be handled case-by-case.": {
    "fr": "Force majeure : Maladie, blessure ou urgence documentée avec preuve médicale peut être traitée au cas par cas.",
    "de": "Höhere Gewalt: Krankheit, Verletzung oder dokumentierter Notfall mit ärztlichem Nachweis kann fallweise behandelt werden.",
    "lb": "Héijer Gewalt: Krankheet, Blessur oder dokumentéiert Noutfall mat medizineschen Nohweiser kann fall-weis behandelt ginn.",
    "nl": "Overmacht: Ziekte, letsel of gedocumenteerde nood met medisch bewijs kan geval per geval worden behandeld."
  },
  "Contact us immediately if circumstances prevent attendance.": {
    "fr": "Contactez-nous immédiatement si les circonstances empêchent la participation.",
    "de": "Kontaktieren Sie uns sofort, wenn Umstände die Teilnahme verhindern.",
    "lb": "Kontaktéiert eis direkt wann Ëmstänn d'Participatioun verhënneren.",
    "nl": "Neem onmiddellijk contact met ons op als omstandigheden deelname verhinderen."
  },
  "While our facility operates to the highest safety standards and all instructors are fully certified, accidents can occur.": {
    "fr": "Bien que notre établissement fonctionne selon les normes de sécurité les plus élevées et que tous les instructeurs soient pleinement certifiés, des accidents peuvent survenir.",
    "de": "Obwohl unsere Einrichtung nach höchsten Sicherheitsstandards betrieben wird und alle Instruktoren voll zertifiziert sind, können Unfälle passieren.",
    "lb": "Och wann eis Anlage no de héchsten Sécherheetsnormen bedriwwen gëtt a all Instrukteuren voll zertifizéiert sinn, kënne Unfäll geschéien.",
    "nl": "Hoewel onze faciliteit op de hoogste veiligheidsnormen werkt en alle instructeurs volledig gecertificeerd zijn, kunnen er ongelukken plaatsvinden."
  },
  "All participants must sign a comprehensive liability waiver accepting these risks.": {
    "fr": "Tous les participants doivent signer une renonciation de responsabilité complète acceptant ces risques.",
    "de": "Alle Teilnehmer müssen eine umfassende Haftungsfreistellung unterzeichnen, die diese Risiken akzeptiert.",
    "lb": "All Participanten mussen eng ëmfaassend Haftungsfreistellung ënnerschreiwen, déi dës Risiken akzeptéiert.",
    "nl": "Alle deelnemers moeten een uitgebreide aansprakelijkheidsvrijwaring ondertekenen die deze risico's aanvaardt."
  },
  "Luxfly is insured for recreational flight activities.": {
    "fr": "Luxfly est assuré pour les activités de vol récréatif.",
    "de": "Luxfly ist für Freizeitflugaktivitäten versichert.",
    "lb": "Luxfly ass fir Freizäitfluchaktivitéiten versichert.",
    "nl": "Luxfly is verzekerd voor recreatieve vluchten."
  },
  "Participants are encouraged to check their own travel or sports insurance coverage before booking.": {
    "fr": "Les participants sont encouragés à vérifier leur propre couverture d'assurance voyage ou sportive avant de réserver.",
    "de": "Teilnehmern wird empfohlen, ihre eigene Reise- oder Sportversicherungsdeckung vor der Buchung zu überprüfen.",
    "lb": "Participante ginn encouragéiert, hir eegen Rees- oder Sportversécherungsdeckung virum Buchen ze iwwerpréiwen.",
    "nl": "Deelnemers worden aangemoedigd om vóór de boeking hun eigen reis- of sportverzekeringsdekking te controleren."
  },

  # ── PILATES PAGE ──
  "What is Sky Pilates?": {
    "fr": "Qu'est-ce que le Sky Pilates ?",
    "de": "Was ist Sky Pilates?",
    "lb": "Wat ass Sky Pilates?",
    "nl": "Wat is Sky Pilates?"
  },
  "Sky Pilates is a structured aerial fitness programme that applies Pilates principles — controlled movement, core strength, breath — to indoor skydiving.": {
    "fr": "Le Sky Pilates est un programme de fitness aérien structuré qui applique les principes du Pilates — mouvement contrôlé, force du core, respiration — au saut en chute libre indoor.",
    "de": "Sky Pilates ist ein strukturiertes Luft-Fitnessprogramm, das Pilates-Prinzipien — kontrollierte Bewegung, Rumpfkraft, Atmung — auf Indoor-Skydiving anwendet.",
    "lb": "Sky Pilates ass e strukturéierten Loft-Fitnessprogramm dat Pilates-Prinzipien — kontrolléiert Beweegung, Kernkraaft, Ootmung — op Indoor-Skydiving applizéiert.",
    "nl": "Sky Pilates is een gestructureerd luchtfitnessprogramma dat Pilates-principes — gecontroleerde beweging, kernkracht, ademhaling — toepast op indoor skydiven."
  },
  "A certified instructor guides you through movements in the tunnel, focusing on alignment, balance, and strength.": {
    "fr": "Un instructeur certifié vous guide à travers des mouvements dans le tunnel, en mettant l'accent sur l'alignement, l'équilibre et la force.",
    "de": "Ein zertifizierter Instruktor führt Sie durch Bewegungen im Tunnel mit Fokus auf Ausrichtung, Balance und Kraft.",
    "lb": "En zertifizéierten Instrukter guide Iech duerch Bewegungen am Tunnel, fokusséiert op Ausrichtung, Gleichgewiicht a Kraaft.",
    "nl": "Een gecertificeerde instructeur begeleidt u door bewegingen in de tunnel, gericht op uitlijning, balans en kracht."
  },
  "The instructor stands outside the tunnel, cueing movements that engage your core, improve stability, and build strength in ways ground-based exercise cannot replicate.": {
    "fr": "L'instructeur se tient à l'extérieur du tunnel, guidant des mouvements qui engagent votre core, améliorent la stabilité et renforcent la force d'une manière que les exercices au sol ne peuvent pas reproduire.",
    "de": "Der Instruktor steht außerhalb des Tunnels und gibt Hinweise für Bewegungen, die Ihren Rumpf aktivieren, die Stabilität verbessern und Kraft aufbauen, wie es bodengestützte Übungen nicht können.",
    "lb": "Den Instrukter steet baussent dem Tunnel a gëtt Hiweiser fir Bewegungen déi Äre Kern aktivéieren, Stabilitéit verbesseren a Kraaft opbauen.",
    "nl": "De instructeur staat buiten de tunnel en geeft aanwijzingen voor bewegingen die uw kern activeren, stabiliteit verbeteren en kracht opbouwen op manieren die grondoefeningen niet kunnen repliceren."
  },
  "Core strength": {
    "fr": "Force du core",
    "de": "Rumpfkraft",
    "lb": "Kernkraaft",
    "nl": "Kernkracht"
  },
  "Your deep stabiliser muscles work continuously, building core strength more effectively than traditional Pilates.": {
    "fr": "Vos muscles stabilisateurs profonds travaillent en continu, renforçant la force du core plus efficacement que le Pilates traditionnel.",
    "de": "Ihre tiefen Stabilisierungsmuskeln arbeiten kontinuierlich und bauen die Rumpfkraft effektiver auf als traditionelles Pilates.",
    "lb": "Är déif Stabiliséierungsmuskelen schaffen kontinuéierlech, bauen Kernkraaft méi effektiv wéi traditionellt Pilates.",
    "nl": "Uw diepe stabilisatiespieren werken continu, waardoor kernkracht effectiever wordt opgebouwd dan bij traditionele Pilates."
  },
  "Sky Pilates sharpens your sense of where your body is and how to control it in three dimensions.": {
    "fr": "Le Sky Pilates affûte votre sens de l'endroit où se trouve votre corps et comment le contrôler en trois dimensions.",
    "de": "Sky Pilates schärft Ihr Gespür dafür, wo sich Ihr Körper befindet und wie Sie ihn in drei Dimensionen kontrollieren.",
    "lb": "Sky Pilates schärft Äre Sënn dofir, wou Äre Kierper ass a wéi Dir hien an dräi Dimensiounen kontrolléiere.",
    "nl": "Sky Pilates scherpt uw gevoel voor waar uw lichaam is en hoe u het in drie dimensies kunt beheersen."
  },
  "Zero impact": {
    "fr": "Zéro impact",
    "de": "Kein Aufprall",
    "lb": "Kee Schlag",
    "nl": "Nul impact"
  },
  "No pounding joints, no compression.": {
    "fr": "Pas d'articulations qui frappent, pas de compression.",
    "de": "Keine belasteten Gelenke, keine Kompression.",
    "lb": "Keng belaascht Gelenker, keng Kompressioun.",
    "nl": "Geen belaste gewrichten, geen compressie."
  },
  "Ideal for people with arthritis or joint concerns who still want challenging exercise.": {
    "fr": "Idéal pour les personnes souffrant d'arthrite ou de problèmes articulaires qui souhaitent tout de même une activité physique stimulante.",
    "de": "Ideal für Menschen mit Arthritis oder Gelenkproblemen, die trotzdem eine herausfordernde körperliche Betätigung suchen.",
    "lb": "Ideal fir Leit mat Arthritis oder Gelenkerproblemer déi nach ëmmer eng erausfuerdernde Übung wëllen.",
    "nl": "Ideaal voor mensen met artritis of gewrichtsproblemen die toch uitdagende lichaamsbeweging willen."
  },
  "Flexibility gains": {
    "fr": "Gains de flexibilité",
    "de": "Flexibilitätsgewinne",
    "lb": "Flexibilitéitsgewënner",
    "nl": "Flexibiliteitswinsten"
  },
  "Controlled stretching in weightlessness safely improves range of motion without the risk of traditional stretching.": {
    "fr": "Les étirements contrôlés en apesanteur améliorent en toute sécurité l'amplitude des mouvements sans le risque des étirements traditionnels.",
    "de": "Kontrolliertes Dehnen in Schwerelosigkeit verbessert sicher die Bewegungsfreiheit ohne das Risiko traditioneller Dehnübungen.",
    "lb": "Kontrolléiert Sträcken an der Schwerlosegkeet verbessert sécher den Bewegungsraum ouni d'Risike vun traditionellem Sträcken.",
    "nl": "Gecontroleerd rekken in gewichtloosheid verbetert op veilige wijze de bewegingsvrijheid zonder het risico van traditioneel rekken."
  },
  "Mind-body connection": {
    "fr": "Connexion corps-esprit",
    "de": "Körper-Geist-Verbindung",
    "lb": "Kierper-Geescht-Verbindung",
    "nl": "Lichaam-geestverbinding"
  },
  "The meditative quality of Pilates meets the full-body engagement of flying for deep mind-body awareness.": {
    "fr": "La qualité méditative du Pilates rencontre l'engagement total du corps dans le vol pour une conscience profonde corps-esprit.",
    "de": "Die meditative Qualität von Pilates trifft auf das ganzkörperliche Engagement des Fliegens für tiefes Körper-Geist-Bewusstsein.",
    "lb": "D'meditativ Qualitéit vu Pilates treffe mat dem Vollkierperengagement vum Fléien fir déif Kierper-Geescht-Bewosstsinn.",
    "nl": "De meditatieve kwaliteit van Pilates ontmoet de volledige lichaamsactivatie van het vliegen voor diep lichaam-geestbewustzijn."
  },
  "Posture improvement": {
    "fr": "Amélioration de la posture",
    "de": "Haltungsverbesserung",
    "lb": "Haltungsverbesserung",
    "nl": "Houdingsverbetering"
  },
  "Sky Pilates locks in these improvements through dynamic control in the air.": {
    "fr": "Le Sky Pilates ancre ces améliorations grâce à un contrôle dynamique dans l'air.",
    "de": "Sky Pilates festigt diese Verbesserungen durch dynamische Kontrolle in der Luft.",
    "lb": "Sky Pilates fixéiert dës Verbesserungen duerch dynamesch Kontroll an der Loft.",
    "nl": "Sky Pilates verankert deze verbeteringen door dynamische controle in de lucht."
  },
  "Ready to try Sky Pilates?": {
    "fr": "Prêt à essayer le Sky Pilates ?",
    "de": "Bereit, Sky Pilates auszuprobieren?",
    "lb": "Prett fir Sky Pilates auszeprobéieren?",
    "nl": "Klaar om Sky Pilates te proberen?"
  },

  # ── MUSEUM PAGE ──
  "Explore the history, art, and legends of skydiving — at the heart of Luxfly.": {
    "fr": "Explorez l'histoire, l'art et les légendes du parachutisme — au cœur de Luxfly.",
    "de": "Erkunden Sie die Geschichte, Kunst und Legenden des Skydivings — im Herzen von Luxfly.",
    "lb": "Entdeckt d'Geschicht, d'Konscht an d'Legenden vum Skydiving — am Häerz vu Luxfly.",
    "nl": "Verken de geschiedenis, kunst en legendes van skydiven — in het hart van Luxfly."
  },
  "The Art of Skydiving": {
    "fr": "L'Art du Saut en Chute Libre",
    "de": "Die Kunst des Skydivings",
    "lb": "D'Konscht vum Skydiving",
    "nl": "De Kunst van het Skydiven"
  },
  "This interactive museum invites you to explore the history, achievements, and evolution of skydiving, while showcasing the art and passion of flight.": {
    "fr": "Ce musée interactif vous invite à explorer l'histoire, les réalisations et l'évolution du parachutisme, tout en mettant en valeur l'art et la passion du vol.",
    "de": "Dieses interaktive Museum lädt Sie ein, die Geschichte, Errungenschaften und Entwicklung des Skydivings zu erkunden, während es die Kunst und Leidenschaft des Fliegens zeigt.",
    "lb": "Dëst interaktivt Museum invitéiert Iech, d'Geschicht, d'Erreeche a d'Evolutioun vum Skydiving z'entdecken, wärend et d'Konscht a Passioun vum Fléien presentéiert.",
    "nl": "Dit interactieve museum nodigt u uit de geschiedenis, prestaties en evolutie van skydiven te verkennen, terwijl het de kunst en passie van vliegen toont."
  },
  "Included with every flight package": {
    "fr": "Inclus dans chaque forfait de vol",
    "de": "In jedem Flugpaket enthalten",
    "lb": "Abegraff bei all Fluchpak",
    "nl": "Inbegrepen bij elk vliegpakket"
  },
  "A visit to The Art of Skydiving is included in all our flight packages.": {
    "fr": "Une visite à L'Art du Saut en Chute Libre est incluse dans tous nos forfaits de vol.",
    "de": "Ein Besuch in Die Kunst des Skydivings ist in allen unseren Flugpaketen enthalten.",
    "lb": "En Besuch an D'Konscht vum Skydiving ass a all eise Fluchpaketen abegraff.",
    "nl": "Een bezoek aan De Kunst van het Skydiven is inbegrepen in al onze vliegpakketten."
  },
  "Explore the museum before or after your session — no extra charge.": {
    "fr": "Visitez le musée avant ou après votre session — sans frais supplémentaires.",
    "de": "Erkunden Sie das Museum vor oder nach Ihrer Session — ohne Aufpreis.",
    "lb": "Entdeckt de Museum virun oder no Ärer Session — ouni extra Käschten.",
    "nl": "Verken het museum voor of na uw sessie — geen extra kosten."
  },
  "Museum-only entry is available for €15.": {
    "fr": "L'entrée musée uniquement est disponible pour 15 €.",
    "de": "Nur-Museum-Eintritt ist für 15 € verfügbar.",
    "lb": "Nëmme Museum-Entrée ass fir 15 € verfügbar.",
    "nl": "Museum-only toegang is beschikbaar voor €15."
  },
  "Come for the exhibition — stay for the bar and the view of the tunnel.": {
    "fr": "Venez pour l'exposition — restez pour le bar et la vue sur le tunnel.",
    "de": "Kommen Sie für die Ausstellung — bleiben Sie für die Bar und den Blick auf den Tunnel.",
    "lb": "Kommt fir d'Ausstellung — bleift fir d'Bar an d'Aussiicht op den Tunnel.",
    "nl": "Kom voor de tentoonstelling — blijf voor de bar en het uitzicht op de tunnel."
  },
  "Historical freefall exhibitions": {
    "fr": "Expositions historiques de chute libre",
    "de": "Historische Freifall-Ausstellungen",
    "lb": "Historesch Fräifall-Ausstellungen",
    "nl": "Historische vrije val tentoonstellingen"
  },
  "Relive key moments in the history of skydiving — from the very first jumps to recent innovations in wind tunnel flying.": {
    "fr": "Revivez les moments clés de l'histoire du parachutisme — des tout premiers sauts aux innovations récentes du vol en soufflerie.",
    "de": "Erleben Sie wichtige Momente in der Geschichte des Skydivings noch einmal — von den allerersten Sprüngen bis zu jüngsten Innovationen im Windkanalflug.",
    "lb": "Erlieft wichteg Momenter an der Geschicht vum Skydiving nach eng Kéier — vun den allereschte Sprénger bis zu rezenten Innovatiounen.",
    "nl": "Beleef belangrijke momenten in de geschiedenis van het skydiven opnieuw — van de allereerste sprongen tot recente innovaties."
  },
  "Artefacts, documents, and immersive installations.": {
    "fr": "Artefacts, documents et installations immersives.",
    "de": "Artefakte, Dokumente und immersive Installationen.",
    "lb": "Artefakte, Dokumenter an immersiv Installatiounen.",
    "nl": "Artefacten, documenten en meeslepende installaties."
  },
  "Artworks, sculptures, and photography inspired by the freedom of flight — where visual art meets the sport of skydiving.": {
    "fr": "Œuvres d'art, sculptures et photographies inspirées par la liberté du vol — où l'art visuel rencontre le sport du parachutisme.",
    "de": "Kunstwerke, Skulpturen und Fotografie inspiriert von der Freiheit des Fliegens — wo bildende Kunst auf den Skydiving-Sport trifft.",
    "lb": "Konschtwierk, Skulpturen a Fotografie inspiréiert vun der Fräiheet vum Fléien — wou bildend Konscht op de Skydiving-Sport treffe.",
    "nl": "Kunstwerken, sculpturen en fotografie geïnspireerd op de vrijheid van vliegen — waar beeldende kunst de skydivingsport ontmoet."
  },
  "Portraits of legends": {
    "fr": "Portraits de légendes",
    "de": "Porträts von Legenden",
    "lb": "Porträite vu Legenden",
    "nl": "Portretten van legendes"
  },
  "Discover the stories and achievements of the world's greatest skydivers and flyers — including tributes to icons like Patrick de Gayardon.": {
    "fr": "Découvrez les histoires et les réalisations des plus grands parachutistes et pilotes du monde — y compris les hommages à des icônes comme Patrick de Gayardon.",
    "de": "Entdecken Sie die Geschichten und Errungenschaften der weltbesten Skydiver und Flieger — einschließlich Ehrungen für Ikonen wie Patrick de Gayardon.",
    "lb": "Entdeckt d'Geschichten an d'Erreeche vun de weltbeschte Skydiveren a Fléier — dorënner Tributes un Ikonnen wéi Patrick de Gayardon.",
    "nl": "Ontdek de verhalen en prestaties van de grootste skydivers en vliegers ter wereld — inclusief eerbetoon aan iconen zoals Patrick de Gayardon."
  },
  "The museum is open during all Luxfly opening hours — no separate booking needed.": {
    "fr": "Le musée est ouvert pendant toutes les heures d'ouverture de Luxfly — aucune réservation séparée nécessaire.",
    "de": "Das Museum ist während aller Luxfly-Öffnungszeiten geöffnet — keine separate Buchung erforderlich.",
    "lb": "De Museum ass wärend allen Luxfly Ouessungszäiten op — keng separat Buchung néideg.",
    "lb": "De Museum ass wärend allen Luxfly Öffnungszäite op — keng separat Buchung néideg.",
    "nl": "Het museum is open tijdens alle openingstijden van Luxfly — geen aparte reservering nodig."
  },

  # ── BAR PAGE ──
  "The Luxfly terrace bar.": {
    "fr": "Le bar terrasse Luxfly.",
    "de": "Die Luxfly Terrassenbar.",
    "lb": "D'Luxfly Terrasse Bar.",
    "nl": "De Luxfly terrasbar."
  },
  "Views straight into the tunnel.": {
    "fr": "Vue directe sur le tunnel.",
    "de": "Blick direkt in den Tunnel.",
    "lb": "Aussiicht direkt an den Tunnel.",
    "nl": "Zicht recht in de tunnel."
  },
  "The terrace is built around the viewing window into the tunnel.": {
    "fr": "La terrasse est construite autour de la fenêtre de visualisation du tunnel.",
    "de": "Die Terrasse ist rund um das Schaufenster in den Tunnel gebaut.",
    "lb": "D'Terrasse ass ronderëm d'Kuckfënster an den Tunnel gebaut.",
    "nl": "Het terras is gebouwd rondom het kijkraam naar de tunnel."
  },
  "You sit with a drink and watch people fly.": {
    "fr": "Vous vous asseyez avec une boisson et regardez les gens voler.",
    "de": "Sie sitzen mit einem Getränk und schauen den Leuten beim Fliegen zu.",
    "lb": "Dir setzt mat engem Gedrénks a kuckt Leit fléien.",
    "nl": "U zit met een drankje en kijkt naar mensen die vliegen."
  },
  "Simple food, honest drinks.": {
    "fr": "Nourriture simple, boissons honnêtes.",
    "de": "Einfaches Essen, ehrliche Getränke.",
    "lb": "Einfach Iessen, éierlech Gedrénks.",
    "nl": "Eenvoudig eten, eerlijke drankjes."
  },
  "Watch the flyers from the terrace while you wait for your round.": {
    "fr": "Regardez les pilotes depuis la terrasse en attendant votre tour.",
    "de": "Beobachten Sie die Flieger von der Terrasse, während Sie auf Ihren Flug warten.",
    "lb": "Kuckt d'Fléier vun der Terrasse wärend Dir op Ären Tour waart.",
    "nl": "Kijk naar de vliegers vanaf het terras terwijl u op uw beurt wacht."
  },
  "Open during centre hours, Wed–Sun.": {
    "fr": "Ouvert pendant les heures du centre, mer–dim.",
    "de": "Geöffnet während der Zentrumszeiten, Mi–So.",
    "lb": "Op wärend den Zentrumsöffnungszäiten, Mi–So.",
    "nl": "Open tijdens centrumsuren, wo–zo."
  },
  "Bar open during all centre hours.": {
    "fr": "Bar ouvert pendant toutes les heures du centre.",
    "de": "Bar während aller Zentrumszeiten geöffnet.",
    "lb": "Bar während allen Zentrumszäiten op.",
    "nl": "Bar open tijdens alle centrumsuren."
  },
  "Also open on the first Monday of each month.": {
    "fr": "Également ouvert le premier lundi de chaque mois.",
    "de": "Auch am ersten Montag jedes Monats geöffnet.",
    "lb": "Och op dem éischte Méindeg vun all Mount op.",
    "nl": "Ook open op de eerste maandag van elke maand."
  },
  "For groups of 10 or more, we offer a catering package service — pre-set menus including drinks and food, billed per person.": {
    "fr": "Pour les groupes de 10 personnes ou plus, nous proposons un service de restauration — des menus prédéfinis comprenant boissons et nourriture, facturés par personne.",
    "de": "Für Gruppen ab 10 Personen bieten wir einen Cateringdienst an — voreingestellte Menüs mit Getränken und Speisen, pro Person abgerechnet.",
    "lb": "Fir Gruppe vun 10 oder méi bidden mir e Cateringservice — virdefinéiert Menüen mat Gedrénks a Iessen, pro Persoun fakturéiert.",
    "nl": "Voor groepen van 10 of meer bieden we een cateringpakket — vaste menu's inclusief dranken en eten, gefactureerd per persoon."
  },
  "Great for corporate days or birthday parties that want to stay on site after flying.": {
    "fr": "Idéal pour les journées d'entreprise ou les fêtes d'anniversaire qui souhaitent rester sur place après le vol.",
    "de": "Ideal für Firmenverstaltungen oder Geburtstagsfeiern, die nach dem Fliegen vor Ort bleiben möchten.",
    "lb": "Super fir Firmentage oder Gebuertsdagsfeiern déi no dem Fléien op der Plaz bleiwen wëllen.",
    "nl": "Geweldig voor bedrijfsdagen of verjaardagsfeesten die na het vliegen ter plaatse willen blijven."
  },

  # ── PRO PAGE ──
  "Indoor skydiving is a recognised competitive sport with national and international championships.": {
    "fr": "Le saut en chute libre indoor est un sport compétitif reconnu avec des championnats nationaux et internationaux.",
    "de": "Indoor-Skydiving ist ein anerkannter Wettkampfsport mit nationalen und internationalen Meisterschaften.",
    "lb": "Indoor-Skydiving ass e unerkannte Wettkampfsport mat nationalen a internationale Meeschterschafte.",
    "nl": "Indoor skydiven is een erkende competitieve sport met nationale en internationale kampioenschappen."
  },
  "Beyond the first flight.": {
    "fr": "Au-delà du premier vol.",
    "de": "Über den ersten Flug hinaus.",
    "lb": "Iwwer den éischte Fluch eraus.",
    "nl": "Voorbij de eerste vlucht."
  },
  "Indoor skydiving at a recreational level is one thing.": {
    "fr": "Le saut en chute libre indoor à un niveau récréatif est une chose.",
    "de": "Indoor-Skydiving auf Freizeitstufe ist eine Sache.",
    "lb": "Indoor-Skydiving op engem Freizäitniveau ass eng Saach.",
    "nl": "Indoor skydiven op recreatief niveau is één ding."
  },
  "But competitive wind sport is a different world entirely.": {
    "fr": "Mais le sport de vent compétitif est un monde entièrement différent.",
    "de": "Aber der kompetitive Windsport ist eine ganz andere Welt.",
    "lb": "Mee de kompetitiven Wantsport ass eng ganz aner Welt.",
    "nl": "Maar competitieve windsport is een totaal andere wereld."
  },
  "Body flying disciplines — formation skydiving, freestyle, speed, vertical — each require hundreds of hours of deliberate practice.": {
    "fr": "Les disciplines de vol corporel — formation, freestyle, vitesse, vertical — nécessitent chacune des centaines d'heures de pratique délibérée.",
    "de": "Bodyflying-Disziplinen — Formation, Freestyle, Speed, Vertikal — erfordern jeweils Hunderte von Stunden gezielter Übung.",
    "lb": "Bodyflying-Disziplinnen — Formatioun, Freestyle, Speed, Vertikal — erfuerderen all Honnerte vu Stonnen gezilter Übung.",
    "nl": "Bodyflyingdisciplines — formatie, freestyle, snelheid, verticaal — vereisen elk honderden uren bewuste oefening."
  },
  "Every manoeuvre has a precise technique.": {
    "fr": "Chaque manœuvre a une technique précise.",
    "de": "Jedes Manöver hat eine präzise Technik.",
    "lb": "All Manöver huet eng präzis Technik.",
    "nl": "Elk manoeuvre heeft een precieze techniek."
  },
  "Every transition must be smooth, controlled, repeatable.": {
    "fr": "Chaque transition doit être fluide, contrôlée, répétable.",
    "de": "Jeder Übergang muss fließend, kontrolliert und wiederholbar sein.",
    "lb": "All Transitioun muss fléissend, kontrolléiert, widderhuelbar sinn.",
    "nl": "Elke overgang moet vloeiend, gecontroleerd en herhaalbaar zijn."
  },
  "No weather delays.": {
    "fr": "Pas de retards météo.",
    "de": "Keine Wetterverzögerungen.",
    "lb": "Keng Wiederverzögerungen.",
    "nl": "Geen weersvertraging."
  },
  "No altitude constraints.": {
    "fr": "Pas de contraintes d'altitude.",
    "de": "Keine Höhenbeschränkungen.",
    "lb": "Keng Héichtbeschränkungen.",
    "nl": "Geen hoogtelimieten."
  },
  "No waiting between jumps.": {
    "fr": "Pas d'attente entre les sauts.",
    "de": "Kein Warten zwischen Sprüngen.",
    "lb": "Kee Waarden tëschent de Sprénger.",
    "nl": "Geen wachten tussen sprongen."
  },
  "You can log 100 hours in a season instead of 100 jumps.": {
    "fr": "Vous pouvez enregistrer 100 heures en une saison au lieu de 100 sauts.",
    "de": "Sie können 100 Stunden in einer Saison statt 100 Sprüngen loggen.",
    "lb": "Dir kënnt 100 Stonnen an enger Saison amplaz 100 Sprénger loggen.",
    "nl": "U kunt 100 uur per seizoen loggen in plaats van 100 sprongen."
  },
  "Formation (FS)": {
    "fr": "Formation (FS)",
    "de": "Formation (FS)",
    "lb": "Formatioun (FS)",
    "nl": "Formatie (FS)"
  },
  "2 or 4-way synchronised formations built in the sky.": {
    "fr": "Formations synchronisées à 2 ou 4 voies construites dans le ciel.",
    "de": "2- oder 4-Mann synchronisierte Formationen im Himmel.",
    "lb": "2 oder 4-Wee synchroniséiert Formatiounen am Himmel.",
    "nl": "2 of 4-weg gesynchroniseerde formaties gebouwd in de lucht."
  },
  "Artistic solo flying judged on creativity and body control.": {
    "fr": "Vol solo artistique jugé sur la créativité et le contrôle du corps.",
    "de": "Künstlicher Soloflug, bewertet nach Kreativität und Körperkontrolle.",
    "lb": "Kënschtleresche Solofluch, bewäert no Kreativitéit a Kierperkontrole.",
    "nl": "Artistiek solovliegen beoordeeld op creativiteit en lichaamsbeheersing."
  },
  "Fastest tunnel spin time.": {
    "fr": "Temps de rotation le plus rapide dans le tunnel.",
    "de": "Schnellste Tunneldrehzeit.",
    "lb": "Schnellst Tunneldrehzäit.",
    "nl": "Snelste tunneldraaitijd."
  },
  "Pure acceleration and control.": {
    "fr": "Accélération et contrôle purs.",
    "de": "Reine Beschleunigung und Kontrolle.",
    "lb": "Reng Beschleunigung a Kontroll.",
    "nl": "Pure acceleratie en controle."
  },
  "Consistency is everything.": {
    "fr": "La régularité est tout.",
    "de": "Beständigkeit ist alles.",
    "lb": "Konsistenz ass alles.",
    "nl": "Consistentie is alles."
  },
  "Pro flyers typically train 2–4 hours per week in the tunnel.": {
    "fr": "Les pilotes professionnels s'entraînent généralement 2 à 4 heures par semaine dans le tunnel.",
    "de": "Profiflieger trainieren typischerweise 2–4 Stunden pro Woche im Tunnel.",
    "lb": "Pro-Fléier trainéieren typescherweise 2–4 Stonnen pro Woch am Tunnel.",
    "nl": "Pro-vliegers trainen doorgaans 2–4 uur per week in de tunnel."
  },
  "At Luxfly, pro booking packages mean you can plan your training calendar months in advance.": {
    "fr": "Chez Luxfly, les forfaits de réservation pro signifient que vous pouvez planifier votre calendrier d'entraînement des mois à l'avance.",
    "de": "Bei Luxfly bedeuten Pro-Buchungspakete, dass Sie Ihren Trainingskalender Monate im Voraus planen können.",
    "lb": "Bei Luxfly bedeit Pro-Buchungspaketen, datt Dir Äre Trainingskalalender Méint am Viraus plange kënnt.",
    "nl": "Bij Luxfly betekenen pro-boekingspakketten dat u uw trainingskalender maanden van tevoren kunt plannen."
  },
  "The tunnel is yours — no interruptions, no tourists, no crowding.": {
    "fr": "Le tunnel est à vous — pas d'interruptions, pas de touristes, pas de foule.",
    "de": "Der Tunnel gehört Ihnen — keine Unterbrechungen, keine Touristen, kein Gedränge.",
    "lb": "Den Tunnel gehéiert Iech — keng Ënnerbriechungen, keng Touristen, keen Gedrängs.",
    "nl": "De tunnel is van u — geen onderbrekingen, geen toeristen, geen drukte."
  },
  "Serious flyers come to Luxfly because the tunnel is the best in Europe.": {
    "fr": "Les pilotes sérieux viennent chez Luxfly parce que le tunnel est le meilleur d'Europe.",
    "de": "Ernsthafte Flieger kommen zu Luxfly, weil der Tunnel der beste in Europa ist.",
    "lb": "Seriéis Fléier komme bei Luxfly well den Tunnel deen Beschten a Europa ass.",
    "nl": "Serieuze vliegers komen naar Luxfly omdat de tunnel de beste van Europa is."
  },
  "That changes everything.": {
    "fr": "Ça change tout.",
    "de": "Das ändert alles.",
    "lb": "Dat ännert alles.",
    "nl": "Dat verandert alles."
  },
  "Members of the Luxfly pro programme have competed at the Belgian Open, German Nationals, and the FAI Skydiving World Cup.": {
    "fr": "Les membres du programme pro Luxfly ont concouru au Belgian Open, aux championnats nationaux allemands et à la Coupe du Monde de Parachutisme FAI.",
    "de": "Mitglieder des Luxfly-Profiprogramms haben beim Belgian Open, den deutschen Nationalmeisterschaften und dem FAI Skydiving World Cup teilgenommen.",
    "lb": "Membere vum Luxfly Pro-Programm hu beim Belgian Open, den däitsche Nationalmeeschterschafte a beim FAI Skydiving World Cup konkurrenzéiert.",
    "nl": "Leden van het Luxfly pro-programma hebben deelgenomen aan de Belgian Open, de Duitse Nationals en de FAI Skydiving World Cup."
  },
  "Whether you're a recreational flyer wanting to progress, or an experienced outdoor skydiver adding tunnel time, we can build a training plan for you.": {
    "fr": "Que vous soyez un pilote récréatif souhaitant progresser ou un parachutiste outdoor expérimenté ajoutant du temps en tunnel, nous pouvons élaborer un plan d'entraînement pour vous.",
    "de": "Ob Sie ein Freizeitflieger sind, der Fortschritte machen möchte, oder ein erfahrener Outdoor-Skydiver, der Tunnelzeit hinzufügt — wir können einen Trainingsplan für Sie erstellen.",
    "lb": "Ob Dir e Freizäitfléier sidd deen Fortschrëtt méche wëllt, oder e erfahrenen Outdoor-Skydiver deen Tunnelzäit hëlt — mir kënnen e Trainingsplang fir Iech erstellen.",
    "nl": "Of u nu een recreatieve vlieger bent die wil vorderen, of een ervaren outdoor skydiver die tunneltijd toevoegt — we kunnen een trainingsplan voor u opstellen."
  },

  # ── LOYALTY PAGE ──
  "Fly more. Pay less.": {
    "fr": "Volez plus. Payez moins.",
    "de": "Mehr fliegen. Weniger zahlen.",
    "lb": "Méi fléien. Manner bezuelen.",
    "nl": "Meer vliegen. Minder betalen."
  },
  "The more you fly, the less you pay per minute.": {
    "fr": "Plus vous volez, moins vous payez par minute.",
    "de": "Je mehr Sie fliegen, desto weniger zahlen Sie pro Minute.",
    "lb": "Je méi Dir fléit, dest manner bezilt Dir pro Minutt.",
    "nl": "Hoe meer u vliegt, hoe minder u per minuut betaalt."
  },
  "Loyalty Programme": {
    "fr": "Programme de fidélité",
    "de": "Treueprogramm",
    "lb": "Loyalitéitsprogramm",
    "nl": "Loyaliteitsprogramma"
  },
  "Buy in bulk. Fly on your schedule.": {
    "fr": "Achetez en gros. Volez selon votre emploi du temps.",
    "de": "Kaufen Sie im Paket. Fliegen Sie nach Ihrem Zeitplan.",
    "lb": "Kaaft am Pak. Fléit no Ärem Zäitplang.",
    "nl": "Koop in bulk. Vlieg op uw eigen schema."
  },
  "No expiry on loyalty minutes.": {
    "fr": "Pas d'expiration sur les minutes de fidélité.",
    "de": "Kein Ablauf bei Treueminuten.",
    "lb": "Kee Verfallsdatum op Loyalitéitsminutten.",
    "nl": "Geen vervaldatum op loyaliteitsminuten."
  },
  "Share minutes with your family or team.": {
    "fr": "Partagez les minutes avec votre famille ou votre équipe.",
    "de": "Teilen Sie Minuten mit Ihrer Familie oder Ihrem Team.",
    "lb": "Deelt Minutten mat Ärer Famill oder Ärem Team.",
    "nl": "Deel minuten met uw gezin of team."
  },
  "Priority booking for peak times.": {
    "fr": "Réservation prioritaire pour les heures de pointe.",
    "de": "Vorrangige Buchung für Stoßzeiten.",
    "lb": "Prioritéitsbuchung fir Spëtzenzäiten.",
    "nl": "Prioriteitsboeking voor piekperioden."
  },
  "Personal flight log and progression tracking.": {
    "fr": "Journal de vol personnel et suivi de la progression.",
    "de": "Persönliches Flugbuch und Fortschrittsüberwachung.",
    "lb": "Persénleche Fluchlog a Fortschrittsverfolgung.",
    "nl": "Persoonlijk vluchtlogboek en voortgangsregistratie."
  },

  # ── HOW IT WORKS / ACTIVITY PAGE ──
  "Here's what happens when you book.": {
    "fr": "Voici ce qui se passe quand vous réservez.",
    "de": "So läuft es ab, wenn Sie buchen.",
    "lb": "Hei ass wat geschitt wann Dir bucht.",
    "nl": "Zo gaat het als u boekt."
  },
  "Arrive 60 minutes early.": {
    "fr": "Arrivez 60 minutes à l'avance.",
    "de": "Kommen Sie 60 Minuten früher an.",
    "lb": "Kommt 60 Minutten fréier un.",
    "nl": "Kom 60 minuten vroeger aan."
  },
  "Check in at reception. Sign your waiver. We'll take it from there.": {
    "fr": "Enregistrez-vous à la réception. Signez votre formulaire. On s'occupe du reste.",
    "de": "Melden Sie sich an der Rezeption an. Unterschreiben Sie Ihre Einverständniserklärung. Wir kümmern uns um den Rest.",
    "lb": "Mellt Iech un der Rezeptioun un. Ënnerschreift Är Erklärung. Mir këmmere eis ëm den Rescht.",
    "nl": "Check in bij de receptie. Onderteken uw formulier. Wij regelen de rest."
  },
  "Training": {
    "fr": "Formation",
    "de": "Training",
    "lb": "Training",
    "nl": "Training"
  },
  "A 10-minute briefing with your instructor covers the basic positions and hand signals. No experience needed.": {
    "fr": "Un briefing de 10 minutes avec votre instructeur couvre les positions de base et les signaux manuels. Aucune expérience requise.",
    "de": "Ein 10-minütiges Briefing mit Ihrem Instruktor deckt die Grundpositionen und Handzeichen ab. Keine Erfahrung nötig.",
    "lb": "E 10-Minutte-Briefing mat Ärem Instrukter deckt d'Grondpositiounen a Handzeichen of. Keng Erfarung néideg.",
    "nl": "Een briefing van 10 minuten met uw instructeur behandelt de basisposities en handsignalen. Geen ervaring nodig."
  },
  "Gear up": {
    "fr": "Équipement",
    "de": "Ausrüstung anlegen",
    "lb": "Ausrüstung unleeën",
    "nl": "Uitrusting aandoen"
  },
  "Helmet, goggles, jumpsuit, earplugs. All provided and fitted before you enter the tunnel.": {
    "fr": "Casque, lunettes, combinaison, bouchons d'oreilles. Tout est fourni et ajusté avant que vous n'entriez dans le tunnel.",
    "de": "Helm, Schutzbrille, Jumpsuit, Ohrstöpsel. Alles wird bereitgestellt und angepasst, bevor Sie den Tunnel betreten.",
    "lb": "Helm, Schutzbréll, Jumpsuit, Ourepropfen. Alles gëtt zur Verfügung gestallt a ugepasst ier Dir den Tunnel betridd.",
    "nl": "Helm, bril, jumpsuit, oordopjes. Alles wordt verstrekt en aangemeten voor u de tunnel ingaat."
  },
  "Fly": {
    "fr": "Voler",
    "de": "Fliegen",
    "lb": "Fléien",
    "nl": "Vliegen"
  },
  "Your instructor goes in first, then guides you in. You'll feel the lift in seconds.": {
    "fr": "Votre instructeur entre en premier, puis vous guide. Vous sentirez la portance en quelques secondes.",
    "de": "Ihr Instruktor geht zuerst rein und führt Sie dann. Sie spüren den Auftrieb in Sekunden.",
    "lb": "Äre Instrukter geet als éischten eran a guide Iech dann. Dir spiert den Auftrieb a Sekonnen.",
    "nl": "Uw instructeur gaat eerst naar binnen en begeleidt u dan. U voelt de lift in seconden."
  },
  "After your flight": {
    "fr": "Après votre vol",
    "de": "Nach Ihrem Flug",
    "lb": "No Ärem Fluch",
    "nl": "Na uw vlucht"
  },
  "Review your photos and videos. Visit the museum. Grab a drink at the bar.": {
    "fr": "Regardez vos photos et vidéos. Visitez le musée. Prenez un verre au bar.",
    "de": "Schauen Sie sich Ihre Fotos und Videos an. Besuchen Sie das Museum. Trinken Sie etwas an der Bar.",
    "lb": "Kuckt Är Fotoen a Videoen. Besicht de Museum. Huelt e Gedrénks un der Bar.",
    "nl": "Bekijk uw foto's en video's. Bezoek het museum. Neem een drankje aan de bar."
  },

  # ── GENERAL / SHARED STRINGS ──
  "Questions, answered": {
    "fr": "Questions, réponses",
    "de": "Fragen, beantwortet",
    "lb": "Froen, beäntwert",
    "nl": "Vragen, beantwoord"
  },
  "Pricing & vouchers": {
    "fr": "Tarifs & bons cadeaux",
    "de": "Preise & Gutscheine",
    "lb": "Präisser & Kadosschäiner",
    "nl": "Prijzen & cadeaubonnen"
  },
  "What to expect": {
    "fr": "À quoi s'attendre",
    "de": "Was erwartet mich",
    "lb": "Wat erwaart mech",
    "nl": "Wat u kunt verwachten"
  },
  "See full opening hours": {
    "fr": "Voir les heures d'ouverture complètes",
    "de": "Alle Öffnungszeiten anzeigen",
    "lb": "All Öffnungszäiten kucken",
    "nl": "Alle openingstijden bekijken"
  },
  "Book a class": {
    "fr": "Réserver un cours",
    "de": "Kurs buchen",
    "lb": "Cours buchen",
    "nl": "Een les boeken"
  },
  "Book a flight + museum": {
    "fr": "Réserver un vol + musée",
    "de": "Flug + Museum buchen",
    "lb": "Fluch + Museum buchen",
    "nl": "Vlucht + museum boeken"
  },
  "When to visit": {
    "fr": "Quand visiter",
    "de": "Wann besuchen",
    "lb": "Wéini besichen",
    "nl": "Wanneer bezoeken"
  },
  "Bar menu": {
    "fr": "Menu bar",
    "de": "Barkarte",
    "lb": "Bar Menü",
    "nl": "Barmenu"
  },
  "Catering for events.": {
    "fr": "Restauration pour événements.",
    "de": "Catering für Veranstaltungen.",
    "lb": "Catering fir Eventer.",
    "nl": "Catering voor evenementen."
  },
  "Monday & Tuesday": {
    "fr": "Lundi & Mardi",
    "de": "Montag & Dienstag",
    "lb": "Méindeg & Dënschdeg",
    "nl": "Maandag & dinsdag"
  },
  "Wednesday – Friday": {
    "fr": "Mercredi – Vendredi",
    "de": "Mittwoch – Freitag",
    "lb": "Mëttwoch – Freideg",
    "nl": "Woensdag – vrijdag"
  },
  "Saturday & Sunday": {
    "fr": "Samedi & Dimanche",
    "de": "Samstag & Sonntag",
    "lb": "Samschdeg & Sonndeg",
    "nl": "Zaterdag & zondag"
  },
  "Access": {
    "fr": "Accès",
    "de": "Zugang",
    "lb": "Zougang",
    "nl": "Toegang"
  },
  "What's inside": {
    "fr": "Ce qu'il y a dedans",
    "de": "Was drin ist",
    "lb": "Wat dran ass",
    "nl": "Wat er binnen is"
  },
  "Benefits": {
    "fr": "Avantages",
    "de": "Vorteile",
    "lb": "Virdeeler",
    "nl": "Voordelen"
  },
  "Balance & proprioception": {
    "fr": "Équilibre & proprioception",
    "de": "Balance & Propriozeption",
    "lb": "Balance & Propriozeptioun",
    "nl": "Balans & proprioceptie"
  },
  "Flying requires constant spatial awareness.": {
    "fr": "Voler nécessite une conscience spatiale constante.",
    "de": "Fliegen erfordert ständiges räumliches Bewusstsein.",
    "lb": "Fléien erfuerdert konstant räumlech Bewosstsinn.",
    "nl": "Vliegen vereist constante ruimtelijk bewustzijn."
  },
  "Floating demands presence.": {
    "fr": "Flotter exige de la présence.",
    "de": "Schweben fordert Präsenz.",
    "lb": "Schwiewen erfuerdert Präsenz.",
    "nl": "Zweven vereist aanwezigheid."
  },
  "Pilates trains alignment and postural awareness.": {
    "fr": "Le Pilates entraîne l'alignement et la conscience posturale.",
    "de": "Pilates trainiert Ausrichtung und Körperhaltungsbewusstsein.",
    "lb": "Pilates trainéiert Ausrichtung a Haltungsbewosstsinn.",
    "nl": "Pilates traint uitlijning en houdingsbewustzijn."
  },
}


def inject(content, lang, entries):
    new_lines = [f"      // ── BIG BATCH {lang.upper()} ──"]
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
