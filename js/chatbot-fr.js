(function () {
  'use strict';

  // ─── Knowledge Base ────────────────────────────────────────────────────────
  const KB = {

    // ── TARIFS ──────────────────────────────────────────────────────────────
    prices: {
      keywords: [
        'prix', 'tarif', 'tarifs', 'combien', 'coût', 'coûts', 'ça coûte combien',
        'combien ça coûte', 'forfait', 'forfaits', 'tarif', 'prix', 'prix',
        'tarif', 'tarifs', 'prix', 'combien', 'tarif', 'tarifs', 'frais', 'frais',
        'facture', 'payer', 'billet', 'billets', 'option', 'options', 'abordable',
        'bon marché', 'cher', 'budget', 'prix adulte', 'forfait adulte',
        'ça coûte combien', 'quel est le prix', 'combien coûte',
        'tarification', 'coût par', 'combien par', 'quels sont les tarifs',
        'dites-moi les tarifs', 'montrez-moi les tarifs', 'liste des forfaits', 'luxcovery', 'luxensation', 'luxemotion'
      ],
      response: () => `Voici nos forfaits de vol :\n\n**👤 ADULTES**\n✈️ **LUXCOVERY** — 2 vols (2 min) : **€104.70**\n✈️ **LUXENSATION** — 2 vols (4 min) : **€174.70**\n✈️ **LUXEMOTION** — 3 vols (6 min) : **€236.70**\n💡 Option basique (sans supplément) à partir de **€65.90**\n\n**🧒 ENFANTS (4–12 ans)**\n✈️ **Enfants 2 vols :** **€89.70**\n✈️ **Enfants 4 vols :** **€139.80**\n💡 Option basique à partir de **€45.90**\n\nTous les forfaits incluent : équipement complet, briefing sécurité, instructeur qualifié, expérience HighFly, photos souvenirs professionnelles et accès au **musée Art of Skydiving**. 🎫\n\nPas sûr de votre choix ? Demandez-moi une recommandation ! 😊`
    },

    // ── RECOMMANDATION ───────────────────────────────────────────────────────
    recommend: {
      keywords: [
        'recommandation', 'conseille', 'conseil', 'meilleur forfait',
        'quel forfait', 'quel forfait', 'que dois-je réserver', 'que dois-je prendre',
        'lequel devrais-je', 'que me conseilles-tu', 'quel est le meilleur', 'plus populaire',
        'meilleur pour moi', 'meilleur pour un débutant', 'meilleur pour la première fois', 'forfait débutant',
        'forfait débutant', 'pas sûr quoi réserver', 'quoi prendre', 'quoi choisir',
        'lequel choisir', 'lequel réserver', 'aide-moi à choisir', 'que me recommandes-tu',
        'conseil', 'conseille', 'que prennent la plupart des gens', 'meilleur rapport qualité-prix', 'bon rapport qualité-prix',
        'ça vaut le coup', 'est-ce que ça vaut', 'par quoi devrais-je commencer', 'forfait idéal',
        'forfait parfait', 'forfait adapté', 'je ne sais pas quoi réserver'
      ],
      response: () => `**Voici notre recommandation pour les premiers vols :** ✈️\n\n🌟 **LUXCOVERY (2 vols, €104.70)** est le départ parfait — votre premier vol concerne la sensation, et le deuxième c'est là que vous commencez vraiment à voler. Inclut l'expérience HighFly et des photos professionnelles !\n\n💪 Vous voulez plus de temps en tunnel ? **LUXENSATION (4 min, €174.70)** vous donne nettement plus de progression et c'est un super rapport qualité-prix.\n\n🏆 **LUXEMOTION (6 min, €236.70)** — le forfait ultime pour ceux qui veulent l'expérience complète.\n\n🧒 **Pour les enfants (4–12 ans) :** le **forfait enfants 2 vols (€89.70)** est une introduction parfaite !\n\nTous les forfaits incluent l'équipement, le briefing, l'instructeur, HighFly, les photos professionnelles et l'accès au **Musée**. 😊`
    },

    // ── ENFANTS ─────────────────────────────────────────────────────────────────
    kids: {
      keywords: [
        'enfant', 'enfants', 'enfant', 'enfants', 'bébé', 'junior', 'jeune',
        'âge minimum', 'quel âge', 'mon enfant peut', 'enfants peuvent', 'pour les enfants',
        'pour enfants', 'combien pour un enfant', 'prix enfant', 'prix enfants',
        'famille', 'trop jeune', 'gosse', 'enfant', 'enfants', 'limite d\'âge',
        'restriction d\'âge', 'mon fils', 'ma fille', 'mon enfant', 'assez vieux',
        'petit', 'quatre ans', '4 ans', '5 ans', '6 ans', 'un enfant peut',
        'c\'est adapté aux enfants', 'les bébés peuvent', 'plus jeune', 'plus jeune âge',
        'trop jeune', 'sans danger pour enfants', 'sans danger pour enfants', 'enfants en sécurité',
        'c\'est sans danger pour mon enfant', 'enfants acceptés', 'enfants acceptés',
        'âge minimum enfants', 'quel âge enfants',
        'forfait enfants', 'forfaits enfants', 'forfait enfants', 'forfaits enfants',
        'combien pour ma fille', 'combien pour mon fils', 'combien pour mon enfant',
        'combien pour un enfant', 'combien pour enfants', 'combien pour un enfant',
        'prix pour ma fille', 'prix pour mon fils', 'prix pour mon enfant',
        '7 ans', '8 ans', '9 ans', '10 ans', '11 ans', '12 ans',
        '7 ans', '8 ans', '9 ans', '10 ans', '11 ans', '12 ans',
        'enfant d\'un certain âge', 'enfant d\'un certain âge', 'y a-t-il un forfait enfants', 'vous avez des forfaits enfants',
        'mon enfant veut voler', 'enfant veut voler', 'mon enfant veut', 'enfant veut',
        'limite d\'âge enfants', 'limite d\'âge enfants', 'y a-t-il une limite d\'âge',
        'prix enfant', 'prix enfants', 'prix enfants',
        'forfait famille', 'forfaits famille',
        'tout-petits', 'les tout-petits peuvent', 'formulaire de consentement', 'signer un formulaire', 'consentement parental', 'dois-je signer'
      ],
      response: () => `Les enfants sont très bienvenus chez Luxfly ! 🧒✈️\n\nÂge minimum : **4 ans**. Poids : 30–120 kg. Pas de limite d'âge maximum.\n\nUn parent ou tuteur légal doit être présent à tout moment pour les moins de 18 ans, et un formulaire de consentement signé est requis.\n\nDemandez-moi les **tarifs enfants** ou les **conditions de santé** si vous avez besoin de plus de détails !`
    },

    // ── HORAIRES ────────────────────────────────────────────────────────────
    hours: {
      keywords: [
        'heure', 'heures', 'ouvert', 'ouverture', 'fermé', 'fermeture', 'fermé',
        'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche',
        'week-end', 'semaine', 'ouvert', 'horaires',
        'ouvert', 'horaires', 'horaires', 'disponible',
        'heure d\'ouverture', 'heure de fermeture', 'êtes-vous ouvert', 'quand ouvrez-vous',
        'quand fermez-vous', 'à quelle heure ouvrez-vous', 'à quelle heure fermez-vous',
        'ouvert le week-end', 'ouvert le dimanche', 'ouvert aujourd\'hui', 'quels jours',
        'quels jours', 'quand êtes-vous ouvert', 'ouvrez-vous', 'jour férial',
        'jour férié', 'noël', 'nouvel an', 'dernière entrée', 'dernière admission', 'dernière session'
      ],
      response: () => `**Horaires d'ouverture de Luxfly :**\n\n📅 **Lundi :** Fermé *(ouvert le 1er lundi de chaque mois)*\n📅 **Mardi :** Fermé\n📅 **Mercredi – Vendredi :** 12h00 – 20h00\n📅 **Samedi & Dimanche :** 10h00 – 19h00\n\n⏰ Les derniers vols sont admis **90 minutes avant la fermeture**.\n\nLa location privée en dehors des heures d'ouverture est disponible du lundi au jeudi à partir de 07h00 — contactez-nous pour plus de détails.\n\nNous recommandons de réserver à l'avance, surtout le week-end. Les clients sans rendez-vous sont bienvenus selon la disponibilité ! 🎟️`
    },

    // ── LOCALISATION ─────────────────────────────────────────────────────────
    location: {
      keywords: [
        'localisation', 'trouvez-nous', 'comment venir', 'directions',
        'naviguer', 'sterpenich', 'arlon', 'ikea', 'decathlon', 'parking', 'parc',
        'bus', 'tec', 'transport', 'e411', 'autoroute', 'autoroute', 'sortie',
        'luxembourg', 'belgique', 'belgique', 'où', 'adresse', 'comment venir',
        'comment venir', 'carte', 'situé', 'près de', 'à côté de',
        'en voiture', 'en bus', 'transports publics', 'route de l\'europe',
        'comment vous trouver', 'comment y aller', 'où êtes-vous',
        'où êtes-vous situé', 'où se trouve luxfly', 'trouvez luxfly',
        'êtes-vous facile à trouver', 'à quelle distance', 'quelle distance de luxembourg',
        'près de luxembourg', 'près de la frontière', 'de la ville de luxembourg', 'de bruxelles',
        'de arlon', 'de liège', 'près de', 'à quelle distance', 'parking gratuit', 'y a-t-il un parking',
        'puis-je me garer', 'parking disponible', 'le parking est-il gratuit', 'où est votre adresse', 'votre adresse', 'adresse complète'
      ],
      response: () => `**Route de l'Europe 1, 6700 Sterpenich, Belgique** 📍\n\nEn voiture : autoroute E411, sortie 33 (Sterpenich/Arlon). À côté de l'IKEA et de Decathlon — facile à trouver. 80+ places de parking gratuites sur place.\n\nÀ quelques minutes seulement de la frontière du Luxembourg.`
    },

    // ── RÉSERVATION / ANNULATION ───────────────────────────────────────────────
    booking: {
      keywords: [
        'réserver', 'réservation', 'réserver', 'réservation', 'annuler', 'annulation',
        'remboursement', 'sans réservation', 'sans réservation', 'en ligne', 'créneau',
        'disponibilité', 'reporter', 'reporter', 'reporter', 'acompte',
        'paiement', 'payer en ligne', 'réserver', 'réserver',
        'payer d\'avance', 'payer le jour même', 'méthode de paiement', 'payer par carte',
        'dois-je réserver', 'dois-je réserver', 'puis-je simplement venir', 'puis-je venir sans réservation',
        'puis-je simplement arriver', 'venir sans réservation', 'puis-je venir sans réservation',
        'ai-je besoin d\'une réservation', 'payer à l\'avance', 'payer le jour même',
        'paiement comment', 'payer par carte', 'payer en espèces', 'carte de crédit',
        'carte de débit', 'espèces', 'comment payer', 'comment payer', 'comment réserver',
        'puis-je réserver en ligne', 'réserver par téléphone', 'réserver par téléphone',
        'y a-t-il de la disponibilité', 'comment annuler', 'que se passe-t-il si j\'annule',
        'argent remboursé', 'puis-je être remboursé', 'changer ma réservation',
        'changer la date', 'changer l\'heure', 'déplacer ma réservation',
        'je dois annuler', 'politique d\'annulation', 'politique de remboursement',
        'complet', 'quand puis-je venir', 'au premier arrivé, premier servi',
        'payer en espèces', 'payer en espèces', 'cartes de crédit', 'cartes de débit',
        'acceptez-vous les espèces', 'acceptez-vous les cartes', 'moyens de paiement'
      ],
      response: () => `Réservez en ligne sur **shop.indoorskydive.lu** ou appelez **+32 63 39 11 63**.\n\nLes clients sans rendez-vous sont bienvenus, mais une réservation à l'avance est fortement recommandée, surtout le week-end. Les groupes de 5+ doivent réserver au moins 48 heures à l'avance.\n\nPaiement complet à la réservation. Les annulations avec **48+ heures de préavis** sont intégralement remboursées ou peuvent être reportées gratuitement. Les chèques-cadeaux sont acceptés.`
    },

    // ── ANNIVERSAIRE ─────────────────────────────────────────────────────────
    birthday: {
      keywords: [
        'anniversaire', 'anniversaire', 'geburtstag', 'fête d\'anniversaire', 'célébrer',
        'célébration', 'occasion spéciale', 'surprise', 'mois d\'anniversaire', 'anniv',
        'bon anniversaire', 'idée d\'anniversaire', 'cadeau d\'anniversaire', 'idée de fête',
        'jour spécial', 'réduction d\'anniversaire', 'offre d\'anniversaire', 'offre d\'anniversaire',
        'pour mon anniversaire', 'c\'est mon anniversaire', 'cadeau d\'anniversaire', 'me faire plaisir',
        'expérience d\'anniversaire', 'cadeau unique', 'idée de cadeau', 'idée cadeau',
        'quelque chose de spécial', 'célébrer l\'anniversaire',
        'forfait anniversaire', 'forfaits anniversaire', 'vous avez des forfaits anniversaire',
        'options anniversaire', 'options anniversaire'
      ],
      response: () => `🎂 Volez lors de votre mois d'anniversaire et obtenez **10% de réduction** sur votre forfait — mentionnez-le simplement à la réservation !\n\nLes forfaits anniversaire en groupe sont disponibles avec diverses options (galerie, photos, décorations). Pour un devis personnalisé :\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── GROUPES / BACHELOR / ENTREPRISE ────────────────────────────────────────
    groups: {
      keywords: [
        'groupe', 'groupes', 'équipe', 'team building', 'entreprise', 'entreprise',
        'collègues', 'bachelor', 'fête de célibataire', 'enterrement de vie', 'junggesellenabschied',
        'junggesellinnenabschied', 'bureau', 'amis', 'grand groupe', 'gros groupe',
        'association', 'école', 'sortie scolaire', 'incentive', 'groupe', 'entreprise',
        'evjf', 'enterrement de vie', 'equipe', 'firmen', 'par personne',
        'tarif groupe', 'prix groupe', 'réduction groupe', 'réservation groupe',
        'événement privé', 'location privée', 'location exclusive', 'session privée',
        'louer le tunnel', 'louer le tunnel', 'réserver pour un groupe',
        'réserver pour mon équipe', 'événement professionnel', 'sortie en groupe',
        'sortie en groupe', 'événement entreprise', 'combien de personnes', 'réduction grand groupe',
        'nous sommes un groupe de', 'il y a', 'personnes qui viennent', 'combien pour un groupe',
        'groupe d\'amis', 'groupe de collègues', 'offre groupe',
        'evg', 'evjf', 'junggesellenabschied', 'enterrement de vie de garçon',
        'fête de filles', 'fêtes de filles', 'fête de filles', 'fête de célibataire', 'va se marier', 'fête de',
        'tarifs groupe', 'tarif groupe', 'combien pour les tarifs groupe',
        'combien pour une fête de filles', 'prix fête de filles', 'prix pour fête de filles',
        'combien pour fête de filles', 'combien pour 20 personnes', 'combien pour 10 personnes',
        'combien pour 15 personnes', 'combien pour 30 personnes', 'combien pour 50 personnes',
        'combien pour un groupe', 'prix pour un groupe', 'coût pour un groupe',
        'réserver pour notre entreprise', 'réserver pour l\'entreprise', 'réserver pour mon entreprise',
        'sortie entreprise', 'toute l\'entreprise', 'toute l\'entreprise', 'tous mes collègues',
        'réserver pour notre équipe', 'réserver pour toute l\'équipe', 'prix réservation groupe', 'forfait groupe', 'forfaits groupe',
        'personnes', 'un groupe de', 'nous sommes un groupe de',
        'réduction pour groupes', 'y a-t-il une réduction groupes', 'réduction groupe'
      ],
      response: () => `**Tarifs groupe (par minute de vol) :**\n👥 2–9 personnes : **€35/min**\n👥 10–19 personnes : **€31.50/min** (10% de réduction)\n👥 20–49 personnes : **€29.75/min** (15% de réduction)\n👥 50–99 personnes : **€28/min** (20% de réduction)\n👥 100+ : Devis personnalisé\n\nLes réductions groupe commencent à partir de 10 personnes. Un acompte de 30% sécurise votre date. La réservation est requise au moins 7 jours à l'avance.\n\nPour les fêtes de célibataire ou les événements de team building, contactez-nous pour un forfait personnalisé :\n📧 events@luxfly.lu | 📞 +32 63 39 11 63`
    },

    // ── EXPÉRIENCE / C'EST QUOI ──────────────────────────────────────────────
    experience: {
      keywords: [
        'expérience', 'besoin d\'expérience', 'première fois', 'débutant', 'jamais fait',
        'parachutisme en intérieur', 'tunnel de vent', 'à quoi ressemble', 'qu\'est-ce que c\'est',
        'comment ça marche', 'impression', 'a-t-on l\'impression', 'à quoi ressemble',
        'à quoi ressemble', 'effrayant', 'difficile', 'dur', 'facile',
        'parachutisme', 'parachuter', 'erfahrung', 'première fois', 'débutant', 'novice',
        'nerveux', 'peur', 'impressionnant', 'jamais volé', 'bodyflight', 'chute libre',
        'flottant', 'je veux voler', 'veux voler', 'voler', 'essayer',
        'sensation', 'adrénaline', 'exaltant', 'thrillant', 'amusant',
        'vais-je avoir peur', 'c\'est terrifiant', 'vais-je avoir peur',
        'que se passe-t-il si j\'ai peur', 'vais-je avoir le vertige', 'vertige', 'nausée', 'mal',
        'vais-je me sentir mal', 'mal des transports', 'c\'est comme du vrai parachutisme',
        'comparé au vrai parachutisme', 'similaire au parachutisme', 'différent du parachutisme',
        'c\'est en intérieur', 'c\'est en extérieur', 'en intérieur', 'en extérieur', 'dehors', 'dedans',
        'que se passe-t-il', 'à quoi ressemble voler', 'décrivez la sensation',
        'parlez-moi de l\'expérience', 'qu\'est-ce que bodyflight', 'qu\'est-ce qu\'un tunnel de vent',
        'dois-je être en forme', 'quelle forme', 'forme physique requise', 'exigeant physiquement',
        'ai-je besoin de force', 'les gens pas en forme peuvent voler', 'c\'est fatigant',
        'c\'est sans danger', 'c\'est dangereux', 'danger', 'risque', 'activité sécuritaire',
        'quels sont les risques', 'accident', 'risque de blessure', 'protection',
        'c\'est sûr', 'c\'est complètement sûr', 'c\'est sans danger', 'luxfly c\'est sûr',
        'c\'est une activité sûre', 'sans danger',
        'débutants', 'adapté aux débutants', 'bon pour les débutants',
        'comment marche le tunnel', 'comment fonctionne le parachutisme en intérieur'
      ],
      response: () => `Le parachutisme en intérieur simule la sensation de chute libre dans un tunnel de vent vertical — vous flottez sur une colonne d'air à jusqu'à **160 km/h**, entièrement en intérieur quel que soit la météo.\n\nAucune expérience ou condition physique requise. Votre instructeur est dans le tunnel avec vous tout le temps. Adapté aux 4 ans et plus (30–120 kg).\n\nÉquipement complet et briefing de sécurité inclus dans chaque forfait.`
    },

    // ── ÉQUIPEMENT / QUOI PORTER ────────────────────────────────────────────
    gear: {
      keywords: [
        'porter', 'apporter', 'équipement', 'équipement', 'casque', 'combinaison',
        'combinaison', 'chaussures', 'vêtements', 'vêtements', 'quoi porter', 'qu\'est-ce que je dois porter',
        'tenue', 'vêtir', 'bijoux', 'bijoux', 'lunettes', 'lentilles',
        'lentilles de contact', 'accessoires', 'fourni', 'ausrüstung', 'vêtements',
        'tenue', 'équipement', 'lunettes', 'bouchons auriculaires', 'combinaison de vol', 'quoi porter',
        'que dois-je apporter', 'que devrais-je apporter', 'ai-je besoin d\'apporter quelque chose',
        'l\'équipement est-il fourni', 'l\'équipement est-il inclus', 'qu\'est-ce qui est fourni',
        'qu\'est-ce qui est inclus', 'de quoi ai-je besoin', 'dois-je apporter', 'comment préparer',
        'préparer ma visite', 'comment je prépare', 'quoi porter dessous',
        'puis-je porter des lunettes', 'puis-je porter des bijoux', 'puis-je porter des bijoux',
        'puis-je porter une bague', 'cheveux longs', 'cheveux', 'serre-cheveux', 'piercings', 'piercing',
        'puis-je porter des lentilles', 'pieds nus', 'lacer', 'baskets', 'chaussures',
        'quelles chaussures', 'tongs', 'sandales', 'talons', 'bottes', 'casiers', 'casier'
      ],
      response: () => `**Tout est fourni — venez comme vous êtes !** 🎽\n\n**Inclus dans votre forfait :**\n✅ Combinaison de vol\n✅ Casque\n✅ Lunettes\n✅ Bouchons auriculaires\n\n**À porter dessous :**\n👟 Vêtements confortables et sportifs (pas de jupes/robes)\n👟 Baskets lacées ou chaussures de sport — pas de tongs, talons ou chaussures sans lacets !\n\n**À retirer/laisser :**\n❌ Bijoux, montres, bagues, boucles d'oreilles, piercings si possible\n❌ Écharpes, ceintures ou accessoires lâches\n👓 **Lunettes :** vous pouvez les garder — nous avons des lunettes surdimensionnées qui s'ajustent sur les lunettes !\n\n💇 Cheveux longs ? Attachez-les — on les arrangera sous votre casque.\n\n🗝️ Des casiers sont disponibles sur place pour vos affaires. À bientôt dans le tunnel ! 🌬️`
    },

    // ── SPECTATEURS ───────────────────────────────────────────────────────────
    spectators: {
      keywords: [
        'regarder', 'regarder', 'spectateur', 'spectateurs', 'visionnage', 'zone de visionnage',
        'mon ami peut', 'ma famille peut', 'filmer', 'filmer mon ami', 'photographier',
        'photo', 'vidéo', 'caméra', 'photos', 'vidéo', 'observer', 'encourager',
        'audience', 'soutien', 'famille', 'amis', 'regarder', 'zuschauer',
        'amis viennent', 'venir regarder', 'amener des amis', 'non-volant',
        'ne vole pas', 'juste regarder', 'galerie', 'forfait photographie',
        'quelqu\'un peut venir avec moi', 'mon partenaire peut regarder', 'mes parents peuvent regarder',
        'mon mari peut regarder', 'ma femme peut regarder', 'mon partenaire peut venir',
        'gratuit pour les spectateurs', 'entrée pour spectateurs', 'c\'est gratuit de regarder',
        'les non-volants peuvent entrer', 'non-volants', 'venir et regarder',
        'y a-t-il une zone de visionnage', 'voir à travers', 'vitre',
        'comment je prends des photos', 'puis-je filmer', 'puis-je prendre des photos', 'puis-je enregistrer',
        'photos professionnelles', 'photos de mon vol', 'vidéo de mon vol',
        'enregistrer mon vol', 'filmer mon vol', 'comment avoir des vidéos'
      ],
      response: () => `**Les amis et la famille sont très bienvenus !** 📸👀\n\n🏟️ **Galerie de visionnage dédiée** avec des panneaux de verre clairs — les spectateurs ont une vue parfaite de tout ce qui se passe dans le tunnel.\n\n📷 **Photos & Vidéo :**\n- Les spectateurs peuvent photographier et filmer librement depuis la galerie\n- Les forfaits **photographie/vidéo professionnelle** sont disponibles — demandez à la réception !\n- Les caméras en tunnel capturent des vidéos incroyables\n\n🎟️ **L'entrée pour les spectateurs est GRATUITE** — pas de billet requis.\n\n🏛️ Tous les forfaits incluent l'accès au **musée Art of Skydiving**, donc les non-volants ont beaucoup à faire en attendant ! ✈️`
    },

    // ── DURÉE / TIMING ────────────────────────────────────────────────────────
    duration: {
      keywords: [
        'combien de temps', 'durée', 'arriver', 'arrivée', 'enregistrement', 'enregistrement',
        'temps total', 'visite', 'long la visite', 'combien de temps', 'minutes',
        'secondes', 'temps de vol', 'quand arriver', 'comment plus tôt', 'long prend',
        'durée du vol', 'wie lange', 'combien de temps', 'durée', 'long est un vol',
        'chaque vol', 'par vol', 'combien de minutes', 'planifier ma visite',
        'combien de temps je suis là', 'combien de temps une visite prend', 'combien de temps c\'est',
        'à quelle heure je dois arriver', 'à quelle heure je dois venir',
        'combien de temps avant je dois arriver', 'dois-je arriver plus tôt',
        'combien de temps je dois réserver', 'combien de temps au total',
        'suis en retard', 'que se passe-t-il si je suis en retard', 'si je suis en retard', 'en retard',
        'long est chaque vol', 'combien de temps 1 vol', 'combien de temps un vol',
        'combien de temps au total', 'combien de temps la session', 'combien de temps une session',
        '60 secondes', '1 minute', 'durée du vol'
      ],
      response: () => `Arrivez **60 minutes avant** l'heure de votre vol pour l'enregistrement, le kit et le briefing de sécurité.\n\nChaque vol dure **60 secondes** en tunnel. La visite totale dure environ **2 heures** incluant le briefing et le musée.\n\nEn retard ? Appelez-nous : **+32 63 39 11 63**`
    },

    // ── SANTÉ / ÂGE / RESTRICTIONS ──────────────────────────────────────────
    health: {
      keywords: [
        'enceinte', 'grossesse', 'problème cardiaque', 'problème cardiaque', 'épilepsie',
        'médical', 'santé', 'handicap', 'handicapé', 'problème de dos', 'mal de dos',
        'problème de cou', 'mal de cou', 'blessure', 'blessé', 'opération', 'chirurgie',
        'asthme', 'stimulateur cardiaque', 'limite de poids', 'poids maximal', 'poids minimal',
        'kg', 'kilos', 'restrictions', 'sans danger', 'puis-je voler', 'condition médicale',
        'santé', 'santé', 'enceinte', 'enceinte', 'tension artérielle élevée',
        'hypertension', 'médicament', 'fauteuil roulant', 'contre-indication',
        'plus âgé', 'personne plus âgée', 'âge maximum', 'limite d\'âge supérieure', 'restriction d\'âge',
        'limite d\'âge adultes', 'quel âge pouvez-vous avoir', 'trop vieux', 'suis-je trop vieux',
        'senior', 'seniors', 'âgé', 'retraité', 'retraités', 'retraité',
        'grand-parent', 'grands-parents', 'grand-mère', 'grand-mère', 'grand-père',
        'grand-père', 'grand-mère', 'personne plus âgée', 'personnes plus âgées',
        'une personne âgée peut voler', 'les gens âgés peuvent voler', 'les seniors peuvent voler',
        'personnes âgées', 'les gens âgés peuvent voler', 'personne âgée',
        'y a-t-il une limite d\'âge', 'âge supérieur', 'c\'est la limite d\'âge',
        'quel âge c\'est trop vieux', '60 ans', '70 ans', '80 ans',
        '90 ans', 'plus de 60', 'plus de 70', 'plus de 80', 'plus de 50',
        'surpoids', 'trop lourd', 'trop léger', 'restriction de poids',
        'à quel poids', 'combien puis-je peser', 'condition de poids',
        'imc', 'obèse', 'obésité', 'trop gros', 'trop maigre',
        'fréquence cardiaque', 'tension artérielle',
        'puis-je voler si j\'ai', 'autorisé à voler', 'inapte à voler', 'apte à voler',
        'j\'ai bu', 'j\'ai pris un verre', 'ivre', 'alcool', 'gueule de bois', 'gueule de bois',
        'mauvais dos', 'j\'ai un mauvais dos', 'problème de mauvais dos', 'mauvais cou', 'blessure au dos',
        'blessure au cou', 'disque glissé', 'disque hernié', 'problème spinal', 'problème spinal'
      ],
      response: () => `**Âge :** Minimum **4 ans** — pas de limite d'âge supérieure (nous volons avec des clients jusqu'à 95 ans !).\n**Poids :** 30–120 kg.\n\nN'envolez pas si vous êtes enceinte, avez un problème cardiaque grave ou un stimulateur cardiaque, l'épilepsie, une récente chirurgie ou blessure, une tension artérielle non contrôlée, ou avez consommé de l'alcool.\n\nDouteux ? Consultez votre médecin d'abord, et informez-nous à la réservation — nous trouverons toujours la meilleure solution. 💙\n📞 +32 63 39 11 63`
    },

    // ── CONTACT ──────────────────────────────────────────────────────────────
    contact: {
      keywords: [
        'contact', 'email', 'téléphone', 'appel', 'parlez avec', 'entrer en contact', 'joindre',
        'whatsapp', 'message', 'chat', 'parlez avec', 'service client', 'support',
        'aide', 'demande', 'question', 'kontakt', 'telefon', 'contactez', 'téléphone',
        'joindre', 'comment allez-vous', 'appuyez', 'médias', 'instagram', 'facebook',
        'numéro', 'téléphone', 'médias sociaux', 'comment contacter', 'parlez avec quelqu\'un',
        'puis-je vous appeler', 'avez-vous un numéro de téléphone', 'quel est votre email', 'adresse email', 'quel est votre email', 'contact par email',
        'quel est votre numéro de téléphone', 'comment vous joindre', 'y a-t-il un numéro',
        'service client', 'plaintes', 'retours', 'me revenir',
        'me répondre', 'quand allez-vous répondre', 'délai de réponse',
        'parlez avec une personne', 'parlez avec un humain', 'parlez avec quelqu\'un',
        'parlez avec un humain', 'parlez avec quelqu\'un de réel', 'chat en direct',
        'quel est votre whatsapp', 'avez-vous whatsapp'
      ],
      response: () => `📞 **Téléphone :** +32 63 39 11 63\n💬 **WhatsApp :** +32 477 528 566\n📧 **Email :** info@luxfly.lu\n🌐 **Site Web :** luxfly.lu\n\n🏠 Route de l'Europe 1, 6700 Sterpenich, Belgique`
    },

    // ── PROMOTIONS / RÉDUCTIONS ───────────────────────────────────────────────
    promo: {
      keywords: [
        'promo', 'promotion', 'promotions', 'réduction', 'coupon', 'code',
        'offre', 'offre spéciale', 'étudiant', 'militaire', 'réduire',
        'réduction', 'économiser', 'moins cher', 'économie', 'printemps', 'spring26',
        'group15', 'amener un ami', 'mois d\'anniversaire', 'rabatt', 'réduction',
        'offre', 'bon de réduction', 'offres actuelles', 'des offres', 'vente',
        'code promotionnel', 'code promo', 'code de réduction', 'réduction étudiant',
        'avez-vous une réduction', 'y a-t-il une réduction', 'des réductions',
        'des offres', 'des promotions', 'quelles promotions', 'promotions actuelles',
        'carte d\'étudiant', 'id d\'étudiant', 'réduction militaire', 'comment économiser',
        'existe-t-il un moyen moins cher', 'réduction fidélité', 'des codes',
        'avez-vous des promotions', 'y a-t-il des offres', 'avez-vous des offres',
        'offres', 'offres actuelles', 'des offres actuelles',
        'économies', 'des économies', 'y a-t-il des économies',
        'tarif moins cher', 'option moins chère', 'prix moins cher',
        'offres spéciales', 'des offres spéciales', 'offres spéciales actuelles'
      ],
      response: () => `**Promotions actuelles chez Luxfly** 🎉\n\n🌸 **SPRING26** — **15% de réduction** sur votre premier forfait LUXCOVERY ou LUXENSATION ! Valide jusqu'au **30 avril 2026**. Code : **SPRING26** au paiement.\n\n👥 **GROUP15** — **5% de réduction supplémentaire** en plus des tarifs groupe pour 10+ personnes. Code : **GROUP15**.\n\n🎂 **Mois d'anniversaire** — Volez lors de votre mois d'anniversaire pour **10% de réduction**. Mentionnez-le simplement à la réservation !\n\n🎓 **Réduction étudiant** — Montrez une carte d'étudiant valide pour **10% de réduction**.\n\n👫 **Amener un ami** — Parrinez un premier visitant et vous deux recevez une récompense ! Demandez à notre équipe les détails.\n\n⚠️ Les réductions ne peuvent pas être cumulées. Conditions applicables.`
    },

    // ── CHÈQUES-CADEAUX ────────────────────────────────────────────────────────
    voucher: {
      keywords: [
        'chèque-cadeau', 'carte-cadeau', 'bon d\'achat', 'acheter pour quelqu\'un', 'cadeau',
        'présent', 'cadeau', 'bon cadeau', 'geschenk', 'gutschein',
        'offrir en cadeau', 'quelqu\'un d\'autre', 'surprise', 'acheter un chèque',
        'acheter un chèque', 'chèque valide', 'validité', 'expirer', 'renouveler',
        'renouvellement', 'transférer', 'transférable', 'nominatif', 'remboursement chèque',
        'pour un ami', 'cadeau de noël', 'cadeau d\'anniversaire', 'cadeau d\'anniversaire',
        'puis-je acheter un cadeau', 'acheter en cadeau', 'faire cadeau', 'offrir à quelqu\'un',
        'offrir à un ami', 'offrir à mon partenaire', 'acheter pour mon partenaire',
        'acheter pour mon ami', 'acheter pour ma famille', 'combien de temps un chèque est valide',
        'le chèque expire-t-il', 'combien de temps ai-je', 'utiliser mon chèque',
        'comment utiliser mon chèque', 'utiliser un chèque', 'code du chèque',
        'utiliser un chèque', 'utiliser mon chèque en ligne', 'chèque en ligne', 'chèque au paiement',
        'appliquer le chèque', 'entrer mon chèque', 'entrer mon chèque', 'utiliser le chèque',
        'puis-je utiliser un chèque', 'utiliser un bon cadeau', 'utiliser un chèque', 'utiliser un bon cadeau',
        'combien de temps un chèque dure', 'combien de temps un chèque', 'chèque dure',
        'combien de temps un bon cadeau dure'
      ],
      response: () => `**Chèques-cadeaux Luxfly — le cadeau parfait !** 🎁\n\n🛒 Achetez en ligne sur **luxfly.lu** ou sur place à la réception.\n\n**Détails du chèque :**\n📅 Valide **12 mois** à partir de la date d'achat\n🔄 Renouvelable pour **3 mois supplémentaires** (un renouvellement par chèque)\n👤 **Non nominatif** — utilisable par n'importe qui, pas seulement le destinataire\n💸 Non remboursable une fois acheté\n✅ Utilisable pour n'importe quel forfait de vol ou option\n\nLe cadeau d'anniversaire, de noël ou d'anniversaire parfait — qui ne voudrait pas voler ? 💝\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── VOL PRO / COACHING ────────────────────────────────────────────────────
    pro: {
      keywords: [
        'pro', 'professionnel', 'vol pro', 'compétition', 'coaching',
        'avancé', 'entraînement', 'athlète', 'temps en tunnel', 'temps en bloc',
        'session dédiée', 'freestyle', 'formation', 'freefly', 'dynamique',
        'compétitif', 'tunnel rat', 'entraînement', 'professionnel',
        'compétition', 'session coached', 'compétences', 'progression', 'temps coaching',
        'session partagée', 'pro partagé', 'session pro', 'heures en bloc',
        'je sais déjà voler', 'je suis un volant expérimenté', 'volant expérimenté',
        'je vole déjà', 'puis-je réserver du temps en tunnel', 'réserver du temps en tunnel',
        'acheter du temps en tunnel', 'louer du temps en tunnel', 'session solo', 'session coaching',
        'coaching en tunnel de vent', 'améliorer mes compétences', 'améliorer mon vol',
        'pousser mon vol plus loin', 'entraînement avancé', 'entraînement compétitif',
        'tête vers le bas', 'assis', 'ventre en bas', 'vfs', 'vol dynamique',
        'offrir coaching', 'offrez-vous coaching', 'avez-vous coaching',
        'sessions coaching', 'coaching disponible', 'obtenir coaching', 'réserver coaching',
        'coaching personnel', 'coaching un-à-un', 'coaching un-à-un',
        'obtenir un coach', 'louer un coach', 'sessions coaching en tunnel de vent',
        'combien pour du temps en bloc', 'prix du temps en bloc', 'coût du temps en bloc',
        'vol tête vers le bas', 'vol tête vers le bas', 'vol tête vers le bas',
        's\'entraîner dans le tunnel', 's\'entraîner dans le tunnel', 's\'entraîner dans le tunnel',
        'vol avancé', 'sessions avancées', 'sessions vol avancé',
        'vol en formation', 'pratique du vol', 'pratique vol en formation'
      ],
      response: () => `**Temps en bloc (tunnel dédié) :** 1 h €180 · 5 h €840 · 10 h €1,560 · 20 h €2,880\n\n**Sessions pro partagées :** €55/session · 5 pour €240 · 10 pour €420\nPlanification : lundi, mercredi, vendredi, samedi & dimanche.\n\nDisciplines : Ventre · Assis · Tête vers le bas · Freestyle · Formation.\n📧 info@luxfly.lu pour demandes de coaching`
    },

    // ── MUSÉE ───────────────────────────────────────────────────────────────
    museum: {
      keywords: [
        'musée', 'musée d\'aviation', 'exposition', 'exposition', 'aviation',
        'histoire', 'avions', 'aéronefs', 'expositions', 'musée', 'musée aviation',
        'luftfahrt', 'entrée musée', 'billet musée', 'musée inclus',
        'prix musée', 'musée seul', 'juste le musée', 'visite musée',
        'musée seul', 'musée sans vol', 'coût musée', 'musée gratuit',
        'le musée est-il inclus', 'ai-je accès au musée', 'qu\'y a-t-il au musée',
        'qu\'a le musée', 'puis-je juste visiter le musée',
        'frais d\'entrée musée', 'admission musée', 'y a-t-il un musée', 'histoire de l\'aviation',
        'visiter le musée', 'puis-je visiter le musée', 'musée par lui-même',
        'musée seul', 'musée par lui-même', 'musée sans vol'
      ],
      response: () => `**Le Musée Art of Skydiving** ✈️🏛️\n\nChaque visite à Luxfly inclut notre **Musée Art of Skydiving** — une fantastique collection célébrant l'histoire du vol !\n\n🎫 **Inclus GRATUITEMENT** dans tous les forfaits de vol — pas de coût supplémentaire !\n🎟️ **Entrée musée seule (sans vol) :** **€15** par personne\n\nÀ l'intérieur vous trouverez :\n- Aéronefs historiques et expositions interactives\n- Chronologie de l'histoire de l'aviation\n- Parfait pour tous les âges — surtout les familles !\n\nParfait avant ou après votre vol, ou pour les visiteurs qui ne volent pas accompagnant le groupe. 🛩️`
    },

    // ── BAR & NOURRITURE ────────────────────────────────────────────────────
    bar: {
      keywords: [
        'bar', 'nourriture', 'manger', 'boire', 'boissons', 'menu', 'restaurant', 'café',
        'café', 'bière', 'burger', 'snack', 'prix burger', 'combien coûte le burger', 'prix nourriture', 'affamé', 'assoiffé', 'déjeuner',
        'dîner', 'repas', 'sandwich', 'menu bar', 'que pouvez-vous manger', 'cantine',
        'essen', 'trinken', 'boire', 'manger', 'nourriture', 'boisson',
        'cocktail', 'jus', 'boisson non alcoolisée', 'menu nourriture', 'quelle nourriture', 'nachos',
        'frites', 'bière blonde', 'bière à la pression', 'puis-je manger', 'y a-t-il de la nourriture',
        'avez-vous de la nourriture', 'servez-vous de la nourriture', 'avez-vous un bar',
        'alcool', 'servez-vous l\'alcool', 'boissons alcoolisées', 'boissons alcoolisées',
        'y a-t-il un restaurant', 'y a-t-il un café', 'y a-t-il un café',
        'puis-je avoir une boisson', 'puis-je manger quelque chose', 'avez-vous un café',
        'restauration', 'rafraîchissements', 'quelque chose à manger après', 'prendre un casse-croûte'
      ],
      response: () => `**Le Bar & Restaurant Luxfly** 🍔🍺\n\nReconstitutez-vous après votre vol au bar sur place — ouvert pendant tous les horaires d'exploitation !\n\n**🍔 Nourriture :**\n- Cheeseburger : **€14**\n- Burger végétarien : **€12**\n- Club sandwich : **€11**\n- Frites : **€4**\n- Nachos : **€8**\n\n**🍺 Boissons :**\n- Bière blonde à la pression (33cl) : **€3.50** | (50cl) : **€5.50**\n- Boissons gazeuses : **€3**\n- Café/espresso : **€2.50**\n- Jus frais : **€4**\n\nVue magnifique sur le tunnel depuis la zone bar ! 🌬️`
    },

    // ── PILATES AÉRIEN ──────────────────────────────────────────────────────
    pilates: {
      keywords: [
        'pilates', 'pilates aérien', 'classe pilates', 'classes pilates', 'forme', 'yoga', 'entraînement',
        'exercice', 'bien-être', 'noyau', 'flexibilité', 'pilates en tunnel de vent',
        'horaire pilates', 'prix pilates', 'accès libre', 'forfait cours',
        'session pilates', 'entraînement corporel', 'cours de fitness', 'fitness en tunnel',
        'fitness chez luxfly', 'aérobic', 'réservation pilates', 'rejoindre un cours',
        'offrir pilates', 'offrez-vous pilates', 'avez-vous pilates',
        'quand pilates', 'horaires pilates', 'horaires pilates', 'coût pilates',
        'pilates disponible', 'pilates proposé', 'classe pilates aérien', 'sessions pilates'
      ],
      response: () => `**Pilates Aérien chez Luxfly** 🧘✈️\n\nPilates aérien unique — pilates dans le tunnel de vent pour un entraînement corporel et d'équilibre extraordinaire !\n\n**📅 Horaire :**\n🗓️ Mardi & Jeudi : **7h30**\n🗓️ Samedi : **9h00**\n\n**💶 Tarification :**\n- Accès libre (un cours) : **€45**\n- Forfait 4 cours : **€160** (€40/cours)\n- Forfait 8 cours : **€280** (€35/cours)\n\nAucune expérience de vol requise — juste une passion pour le mouvement ! Cours animés par des instructeurs certifiés.\n\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    },

    // ── PROGRAMME DE FIDÉLITÉ ────────────────────────────────────────────────
    loyalty: {
      keywords: [
        'fidélité', 'programme fidélité', 'fidélité', 'fidelitybox', 'points',
        'récompenses', 'carte fidélité', 'membre', 'adhésion', 'client fréquent',
        'points récompense', 'gagner des points', 'utiliser', 'programme fidélité',
        'fidélité', 'treueprogramm', 'bonus', 'avantages', 'bénéfices',
        'carte de tampons', 'client régulier', 'client régulier', 'programme fidélité',
        'je vole régulièrement', 'je viens souvent', 'je visite souvent', 'je reviens souvent',
        'récompense pour revenir', 'visites répétées', 'visites fréquentes',
        'carte fidélité', 'points fidélité', 'gagner des récompenses', 'avez-vous fidélité',
        'y a-t-il un programme fidélité', 'carte adhésion', 'carte récompenses',
        'programme récompenses', 'programme récompenses', 'y a-t-il un programme récompenses',
        'programme points', 'système points', 'programme gagner points',
        'obtenir des points', 'points chaque visite', 'gagner des points à chaque visite',
        'points chaque fois', 'points quand je vole'
      ],
      response: () => `**Luxfly FidelityBox — Notre Programme de Fidélité** 🌟\n\nVolez plus, gagnez plus !\n\n📱 **Votre numéro de téléphone est votre carte fidélité** — pas de carte physique requise !\n⭐ Gagnez des points à chaque vol ou achat chez Luxfly\n🎁 Utilisez les points pour des vols gratuits, des réductions et des récompenses exclusives\n\n**Avantages des membres :**\n- Accès prioritaire à la réservation\n- Promotions exclusives pour les membres\n- Surprises d'anniversaire\n- Accès anticipé aux nouveaux forfaits\n\nFournissez simplement votre numéro de téléphone à l'enregistrement — vous êtes automatiquement inscrit !\n\n📞 +32 63 39 11 63 pour plus de détails.`
    },

    // ── COACHES / ÉQUIPE ───────────────────────────────────────────────────────
    coaches: {
      keywords: [
        'coach', 'coaches', 'instructeur', 'instructeurs', 'personnel', 'entraîneur',
        'entraîneurs', 'certifié', 'qualifié', 'qui enseigne', 'votre équipe',
        'instructeur de vol', 'instructeur de tunnel', 'langues', 'parlez français',
        'parlez allemand', 'parlez anglais', 'multilingue', 'quelle expérience',
        'équipe de coaches', 'coaches professionnels', 'qui m\'enseignera',
        'quelqu\'un va-t-il m\'aider', 'un instructeur va-t-il m\'aider', 'y aura-t-il un instructeur', 'y a-t-il un instructeur',
        'vais-je avoir un coach', 'qui sera avec moi', 'vais-je avoir un coach',
        'quelqu\'un sera avec moi', 'vais-je être seul', 'seul dans le tunnel',
        'supervisé', 'suis-je supervisé', 'parlez-vous anglais',
        'parlez-vous français', 'parlez-vous allemand', 'parlez-vous luxembourgeois', 'quelles langues',
        'anglophone', 'francophone', 'germanophone', 'luxembourgeois',
        'enseigner en allemand', 'enseigner en français', 'enseigner en anglais',
        'en allemand', 'en français', 'en anglais', 'en luxembourgeois'
      ],
      response: () => `8 coaches certifiés avec **12,000+ heures combinées en tunnel** d'expérience.\n\nPour les débutants, votre instructeur est dans le tunnel avec vous dès la première seconde. Notre équipe parle anglais, français, allemand, luxembourgeois et italien.`
    },

    // ── SPÉCIFICATIONS DU TUNNEL ─────────────────────────────────────────────
    tunnel: {
      keywords: [
        'tunnel', 'tunnel de vent', 'vitesse du vent', 'vitesse', 'à quelle vitesse', 'km/h',
        'vol ventre', 'vol ventre', 'vol assis', 'vol assis', 'tête vers le bas',
        'tête vers le bas', 'flux d\'air', 'vent', 'puissance', 'taille du tunnel', 'technique',
        'spécifications', 'specs', 'quelle taille', 'à quel point puissant', 'à quel point fort',
        'dernier cri', 'tunnel de vent vertical', 'combien de km/h',
        'quelle vitesse', 'puissance du vent', 'combien de vent', 'à quel point venteux',
        'c\'est très venteux', 'à quel point fort est le vent', 'quelle vitesse du vent'
      ],
      response: () => `**Tunnel de Vent Luxfly — Spécifications Techniques** ⚡\n\nNotre tunnel de vent vertical dernier cri est construit pour tous, des débutants aux champions mondiaux !\n\n**Vitesse du vent par discipline :**\n🤸 **Vol ventre** (débutant/loisir) : **130–160 km/h**\n💺 **Vol assis** (intermédiaire) : **180–220 km/h**\n🔻 **Tête vers le bas** (avancé/pro) : **250–320 km/h**\n\nLa vitesse du vent est précisément contrôlée par nos instructeurs et ajustée à votre taille, poids et niveau d'habileté.\n\n🛡️ Tous les systèmes de sécurité sont certifiés aux plus hautes normes européennes. ✈️`
    },

    // ── PARTENAIRES ─────────────────────────────────────────────────────────
    partners: {
      keywords: [
        'partenaire', 'partenaires', 'partenariat', 'business', 'affilié',
        'commission', 'revendre', 'collaborer', 'b2b', 'agence de voyage',
        'voyagiste', 'hôtel', 'travailler ensemble', 'collaboration', 'commercial',
        'partenaire', 'partenariat', 'programme partenaire', 'parrainage', 'agent',
        'devenir partenaire', 'commerce', 'grossiste', 'revendeur', 'partenaires@',
        'demande commerciale', 'demande commerciale', 'demande commerciale',
        'nous voulons être partenaires', 'intéressé par un partenariat', 'référer des clients',
        'envoyer des clients', 'amener des clients', 'obtenir une commission'
      ],
      response: () => `**Devenez Partenaire Luxfly** 🤝\n\nNous travaillons avec des agences de voyage, des hôtels, des voyagistes et des entreprises du Luxembourg et de la Grande Région.\n\n**Avantages du partenariat :**\n💰 Gagnez **10–15% de commission** sur tous les parrainages\n🎟️ Tarifs spéciaux pour vos clients\n📦 Matériaux promotionnels co-marqués\n🌐 Listés sur notre site Web en tant que partenaire privilégié\n\n📧 **Postulez :** partners@luxfly.lu\n📞 +32 63 39 11 63\n\nNotre équipe de partenaires répond dans les 48 heures ! ✈️`
    },

    // ── EMPLOIS ─────────────────────────────────────────────────────────────
    jobs: {
      keywords: [
        'emploi', 'emplois', 'carrière', 'carrières', 'travail', 'travailler', 'emploi',
        'poste vacant', 'postes vacants', 'nous recrutons', 'postuler', 'candidature', 'poste',
        'rôle', 'rejoindre l\'équipe', 'rejoignez-nous', 'recrutement', 'emploi instructeur tunnel',
        'agent de sécurité', 'coordinatrice d\'événements', 'expérience client', 'stage',
        'emploi', 'nous rejoindre', 'arbeit', 'stelle', 'êtes-vous en train d\'embaucher',
        'avez-vous des emplois', 'avez-vous besoin de personnel', 'travailler pour luxfly',
        'travailler avec luxfly', 'je veux travailler pour vous', 'je veux travailler avec vous',
        'y a-t-il un emploi', 'poste ouvert', 'ouverture d\'emploi', 'cv', 'envoyez mon cv',
        'envoyez mon résumé', 'postuler à un emploi', 'emplois@',
        'avez-vous besoin d\'instructeurs tunnel', 'poste instructeur tunnel',
        'poste instructeur tunnel', 'à la recherche d\'instructeurs'
      ],
      response: () => `**Carrières chez Luxfly** 💼✈️\n\nNous recherchons toujours des personnes passionnées pour rejoindre l'équipe !\n\n**Postes ouverts :**\n🌬️ **Instructeur Tunnel** — Diriger les sessions débutant et avancé\n🛡️ **Agent de Sécurité** — Maintenir les plus hauts standards de sécurité\n🎉 **Coordinatrice d'Événements** — Planifier les groupes, entreprises et événements spéciaux\n😊 **Expérience Client** — Service à l'accueil et accueil des visiteurs\n\nNe voyez pas votre rôle ? Contactez-nous quand même — nous sommes en croissance !\n\n📧 **Envoyez votre CV à :** jobs@luxfly.lu\n📞 +32 63 39 11 63\n\nAidez d'autres à découvrir la joie du vol ! 🚀`
    },

    // ── MONTGOLFIÈRE ────────────────────────────────────────────────────────
    balloon: {
      keywords: [
        'montgolfière', 'montgolfière', 'ballon', 'chaud air ballon', 'ballon',
        'ballon ride', 'expérience ballon', 'vol en ballon', 'partenaire ballon',
        'autres activités', 'quoi d\'autre', 'y a-t-il autre chose', 'autres expériences',
        'autres choses à faire', 'qu\'offrez-vous d\'autre', 'autres aventures',
        'expérience en plein air', 'vol panoramique', 'expérience ballon',
        'expérience vol en ballon', 'expérience vol en ballon'
      ],
      response: () => `**Expériences en Montgolfière** 🎈\n\nLuxfly s'est associé à un exploitant de montgolfière de premier plan !\n\n💶 **€180–€250 par personne**\n📅 Saison : **Avril – Octobre**\n📍 Décollage de la région Luxembourg/Belgique\n\nUne expérience magique pour compléter le parachutisme en intérieur, ou un magnifique cadeau unique pour quelqu'un de spécial ! 🌄\n\nPour les détails et réservations :\n📞 +32 63 39 11 63 | 📧 info@luxfly.lu`
    }
  };

  // ─── UTILITY FUNCTIONS ────────────────────────────────────────────────────

  function kwRegex(words) {
    const escaped = words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    return new RegExp('\\b(' + escaped.join('|') + ')\\b', 'gi');
  }

  function lev(a, b) {
    const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(0));
    for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= b.length; j++) matrix[j][0] = j;
    for (let j = 1; j <= b.length; j++)
      for (let i = 1; i <= a.length; i++)
        matrix[j][i] = a[i-1] === b[j-1] ? matrix[j-1][i-1] :
          1 + Math.min(matrix[j-1][i], matrix[j][i-1], matrix[j-1][i-1]);
    return matrix[b.length][a.length];
  }

  function kbVocab() {
    const set = new Set();
    Object.values(KB).forEach(topic => topic.keywords.forEach(kw => set.add(kw.toLowerCase())));
    return Array.from(set);
  }

  function fuzzyCorrect(input, threshold = 0.7) {
    const lower = input.toLowerCase().trim();
    const vocab = kbVocab();
    let best = { word: lower, dist: 0 };
    vocab.forEach(word => {
      const maxLen = Math.max(word.length, lower.length);
      const dist = 1 - (lev(lower, word) / maxLen);
      if (dist > best.dist) best = { word, dist };
    });
    return best.dist > threshold ? best.word : lower;
  }

  function classify(input) {
    const corrected = fuzzyCorrect(input, 0.6);
    let max = { topic: null, score: 0 };
    Object.entries(KB).forEach(([topic, data]) => {
      const regex = kwRegex(data.keywords);
      const matches = corrected.match(regex);
      const score = matches ? matches.length : 0;
      if (score > max.score) max = { topic, score };
    });
    return max.topic || 'fallback';
  }

  function isGreeting(text) {
    return /\b(bonjour|salut|coucou|bonsoir|allô|hey|hello|hé|yo)\b/i.test(text);
  }

  function isThanks(text) {
    return /\b(merci|parfait|génial|super|excellent|bravo|impeccable|nickel|cool|top|formidable|magnifique)\b/i.test(text);
  }

  function formatResponse(text) {
    return text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
               .replace(/\*([^*]+)\*/g, '<em>$1</em>')
               .replace(/\n/g, '<br>');
  }

  const greetings = [
    'Hey ! 👋 Je suis Zoom, l\'assistant Luxfly. Posez-moi n\'importe quelle question sur notre expérience d\'indoor skydiving — tarifs, réservation, santé, enfants, localisation et plus encore !',
    'Bonjour ! 😊 Je suis Zoom. Comment puis-je vous aider aujourd\'hui ?',
    'Salut ! ✈️ Bienvenue chez Luxfly. Que puis-je faire pour vous ?',
    'Coucou ! 🎉 Je suis là pour répondre à vos questions sur nos forfaits de vol et bien plus encore.'
  ];

  const replies = {
    fallback: [
      'Hmm, je ne suis pas tout à fait sûr de comprendre. Pouvez-vous reformuler ou me poser une autre question ?',
      'Désolé, je n\'ai pas trouvé de réponse à cela. Consultez notre site **luxfly.lu** ou appelez **+32 63 39 11 63** pour plus d\'aide.',
      'Je ne sais pas comment répondre à cette question. Y a-t-il quelque chose d\'autre que je puisse vous aider ?'
    ]
  };

  function getResponse(input) {
    if (isGreeting(input)) return greetings[Math.floor(Math.random() * greetings.length)];
    if (isThanks(input)) return ['De rien ! 😊 Y a-t-il quelque chose d\'autre ?', 'Avec plaisir ! Une autre question ?', 'Ravi de vous aider ! 🙌'][Math.floor(Math.random() * 3)];
    const topic = classify(input);
    return KB[topic] ? KB[topic].response() : replies.fallback[Math.floor(Math.random() * replies.fallback.length)];
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
    <button id="lf-chat-btn" aria-label="Chat avec Luxfly">
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
          <div id="lf-chat-header-status">En ligne · Toujours là pour vous aider</div>
        </div>
        <button id="lf-chat-close" aria-label="Fermer le chat">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      <div id="lf-chat-messages"></div>
      <div id="lf-chat-quick">
        <button class="lf-quick-btn" data-q="Quels sont vos tarifs ?">💰 Tarifs</button>
        <button class="lf-quick-btn" data-q="Quels sont vos horaires ?">🕐 Horaires</button>
        <button class="lf-quick-btn" data-q="C'est adapté aux enfants ?">👦 Enfants</button>
        <button class="lf-quick-btn" data-q="Comment réserver ?">🎟️ Réserver</button>
        <button class="lf-quick-btn" data-q="Où êtes-vous ?">📍 Localisation</button>
        <button class="lf-quick-btn" data-q="Quel forfait recommandez-vous ?">⭐ Conseil</button>
      </div>
      <form id="lf-chat-form" autocomplete="off">
        <textarea id="lf-chat-input" placeholder="Posez-moi une question…" rows="1"></textarea>
        <button type="submit" id="lf-chat-send" aria-label="Envoyer">
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
        addMsg("Hey ! 👋 Je suis Zoom, l'assistant Luxfly. Posez-moi n'importe quelle question sur notre expérience d'indoor skydiving — tarifs, réservation, santé, enfants, localisation et plus encore !", 'bot');
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
  bubble.textContent = 'Une question ? Posez-la ici !';
  bubble.setAttribute('role', 'button');
  bubble.setAttribute('aria-label', 'Open chat assistant');
  document.body.appendChild(bubble);
  bubble.addEventListener('click', () => { dismissBubble(); openChat(); });

  // Auto-dismiss after 9 seconds
  const bubbleTimeout = setTimeout(() => dismissBubble(), 9000);
  bubble.addEventListener('click', () => clearTimeout(bubbleTimeout));

})();
