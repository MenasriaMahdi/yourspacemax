/**
 * French Translation & Content Model (fr)
 */
module.exports = {
  lang: 'fr',
  dir: 'ltr',
  basePath: '../',
  brand: {
    name: 'YOUR SPACE MAX',
    slogan: 'YOUR JOURNEY. OUR SPACE.',
    tagline: "De l'idée au projet, de la planification à l'exécution et au développement.",
    shortBio: "Nous accompagnons porteurs de projets, startups et entreprises grâce à des solutions intégrées : incubation, conseil en investissement, formation, événementiel, design et technologies numériques.",
    footerBio: "Votre espace de croissance et d'innovation — Solutions complètes en présentiel et à distance : accompagnement, conseil, formation, événementiel, design et solutions digitales.",
    headquarters: "Incubateur d'entreprises – Université Constantine 1",
    scope: "En présentiel et à distance sur l'ensemble du territoire national",
    phoneDisplay: '0553 18 28 81',
    phoneAvailability: 'Service 24h/24',
    phoneTel: '+213553182881',
    whatsappUrl: 'https://wa.me/213553182881',
    contactEmail: 'filalisara29@gmail.com',
    copyright: 'Tous droits réservés © 2026 YOUR SPACE MAX.',
    socials: {
      facebook: 'https://www.facebook.com/share/1CLjPitu7C/',
      instagram: 'https://www.instagram.com/yourspace.max?gwpx=Zmg3ajZqN3JuOGgw',
      tiktok: 'https://www.tiktok.com/@yourspace.max?_r=1&_t=ZS-9BgKbaSO8oP',
      linkedin: 'https://www.linkedin.com/company/your-space.startup?trk=public_profile_topcard-current-company',
      whatsapp: 'https://wa.me/213553182881'
    }
  },
  navigation: [
    { id: 'home', label: 'Accueil', url: '/fr/index.html' },
    { id: 'about', label: 'À Propos', url: '/fr/about.html' },
    { id: 'services', label: 'Nos Services', url: '/fr/services.html' },
    { id: 'contact', label: 'Contact', url: '/fr/contact.html' }
  ],
  timeline: [
    {
      year: '2024',
      title: 'Arrêté Ministériel 1275',
      desc: "Diplômé avec le label Startup dans le cadre du dispositif de l'Arrêté Ministériel 1275."
    },
    {
      year: '2025',
      title: 'Label Projet Innovant',
      desc: "Obtention de la labellisation officielle « Projet Innovant » par la commission nationale."
    },
    {
      year: '2025',
      title: 'Défi PROTOMARKET 1',
      desc: "Lauréat du challenge PROTOMARKET 1 pour le développement et la mise sur le marché de prototypes innovants."
    },
    {
      year: '2026',
      title: 'Entreprise Économique',
      desc: "Concrétisation du projet en tant qu'entreprise économique à part entière : YOUR SPACE MAX."
    }
  ],
  services: [
    {
      id: 'service-1',
      num: '1',
      title: 'Incubateur & Accélérateur de Startups',
      shortDesc: "Nous accompagnons les porteurs d'idées et projets innovants, de la formalisation du business model jusqu'à la création et la croissance sur le marché.",
      fullDesc: "Un programme d'accompagnement sur-mesure conçu pour transformer des concepts novateurs en entreprises viables et scalables, soutenu par une méthodologie rigoureuse et des mentors expérimentés.",
      target: "Porteurs d'idées novatrices, entrepreneurs, porteurs de brevets et startups universitaires.",
      deliverables: [
        "Structuration de l'idée et validation du Business Model Canvas (BMC)",
        "Élaboration du plan de validation terrain et Prototype Minimum Viable (MVP)",
        "Accompagnement au dossier de labellisation « Projet Innovant / Startup »",
        "Stratégie de pénétration et de croissance sur les marchés cibles"
      ],
      image: 'assets/images/service-incubator.jpg'
    },
    {
      id: 'service-2',
      num: '2',
      title: "Conseil & Études d'Investissement",
      shortDesc: "Études de faisabilité technico-économiques et financières, plans d'affaires et conseil stratégique pour éclairer les décisions des investisseurs et dirigeants.",
      fullDesc: "Des solutions de conseil à haute valeur ajoutée fondées sur des analyses de marché approfondies, pour sécuriser vos investissements et optimiser le rendement du capital.",
      target: "Entreprises en activité, investisseurs privés/institutionnels, et projets en phase de levée ou d'expansion.",
      deliverables: [
        "Études de faisabilité économique, technique et financière complètes",
        "Rédaction de Business Plans bancables et dossiers de financement",
        "Conseil en structuration financière et ingénierie d'investissement",
        "Plans de restructuration managériale et d'optimisation de performance"
      ],
      image: 'assets/images/service-consulting.jpg'
    },
    {
      id: 'service-3',
      num: '3',
      title: 'Formation & Perfectionnement Professionnel',
      shortDesc: "Programmes de formation pratiques et certifiants pour renforcer les compétences entrepreneuriales, techniques et managériales des individus et des équipes.",
      fullDesc: "Des ateliers intensifs et formations interactives alignés sur les exigences réelles du marché, animés par des professionnels et formateurs chevronnés, en présentiel et à distance.",
      target: "Professionnels, cadres d'entreprises, chercheurs, diplômés et équipes projet.",
      deliverables: [
        "Formations spécialisées en entrepreneuriat et gestion de projet",
        "Programmes d'initiation et de perfectionnement au numérique et à l'IA",
        "Ateliers en marketing stratégique, négociation et développement commercial",
        "Certificats de réussite et suivi opérationnel post-formation"
      ],
      image: 'assets/images/service-training.jpg'
    },
    {
      id: 'service-4',
      num: '4',
      title: 'Organisation d’Événements Économiques et Scientifiques',
      shortDesc: "Planification et pilotage clé en main de conférences, séminaires, congrès, salons professionnels et workshops avec un standard d'excellence.",
      fullDesc: "Gestion événementielle intégrée, de la conception thématique et programmation scientifique jusqu'à la logistique sur le terrain et la couverture médiatique multicanale.",
      target: "Entreprises, institutions publiques, universités, centres de recherche et associations professionnelles.",
      deliverables: [
        "Ingénierie de programme, coordination des intervenants et gestion des inscriptions",
        "Logistique complète, sonorisation, régie technique et aménagement d'espaces",
        "Campagne de communication, relations presse et diffusion digitale en direct",
        "Rapports de synthèse, actes de colloques et restitution d'impact"
      ],
      image: 'assets/images/service-events.jpg'
    },
    {
      id: 'service-5',
      num: '5',
      title: 'Design & Services Créatifs',
      shortDesc: "Création d'identités visuelles complètes, chartes graphiques, supports publicitaires imprimés et digitaux pour démarquer puissamment votre marque.",
      fullDesc: "Conception d'univers de marque originaux qui capturent l'ADN de votre entreprise et génèrent un fort impact visuel auprès de vos clients et partenaires.",
      target: "Nouvelles marques, entreprises en phase de rebranding et porteurs de produits.",
      deliverables: [
        "Création de logos et chartes graphiques complètes (Brand Guidelines)",
        "Design de supports corporate (brochures, plaquettes, rapports, packaging)",
        "Création de contenus publicitaires pour les réseaux sociaux et campagnes digitales",
        "Conception d'interfaces utilisateurs (UI/UX) pour applications et sites web"
      ],
      image: 'assets/images/service-design.jpg'
    },
    {
      id: 'service-6',
      num: '6',
      title: 'Programmation & Solutions Digitales',
      shortDesc: "Développement de sites web vitrines et institutionnels, plateformes interactives et applications sur-mesure pour propulser votre transformation numérique.",
      fullDesc: "Développement de solutions logicielles fiables, sécurisées et optimisées pour tous les terminaux, répondant précisément à vos objectifs opérationnels.",
      target: "Startups tech, entreprises commerciales, professions libérales et prestataires de services.",
      deliverables: [
        "Création de sites web professionnels, portails institutionnels et e-commerce",
        "Développement d'applications web & mobiles personnalisées et tableaux de bord",
        "Intégration de solutions d'IA, automatisation de processus et cybersécurité",
        "Hébergement cloud haute performance, maintenance proactive et support technique"
      ],
      image: 'assets/images/service-digital.jpg'
    }
  ],
  metrics: [
    { value: '32+', label: 'Projets accompagnés', sub: 'Résultats tangibles' },
    { value: '18', label: 'Universités partenaires', sub: 'Réseau académique étendu' },
    { value: '3', label: 'Congrès scientifiques & économiques', sub: 'Organisation & pilotage clé en main' },
    { value: '8', label: 'Salons professionnels de référence', sub: 'Présence institutionnelle active' },
    { value: '5+', label: 'Startups labellisées Projet Innovant', sub: 'Homologation officielle' }
  ],
  executive: {
    nameAr: 'فيلالي سارة',
    nameEn: 'FILALI SARA',
    role: 'Fondatrice & CEO – YOUR SPACE MAX',
    badge: 'Direction Générale',
    sectionBadge: 'Direction & Équipe',
    sectionTitle: 'Leadership & Compétences',
    sectionDesc: 'Une vision stratégique d’excellence alliant expertises juridique, managériale et technologique, épaulée par un réseau de spécialistes.',
    bioHeading: 'Profil Professionnel & Académique',
    bioSubheading: 'Parcours et compétences managériales',
    bio: [
      {
        title: 'Parcours Académique',
        desc: "Licence en Droit privé (2022) et Master en Droit pénal et sciences criminelles (2024), Faculté de Droit – Université Constantine 1 Frères Mentouri (Tidjani Haddam)."
      },
      {
        title: 'Leadership & Entrepreneuriat',
        desc: "Fondatrice et Présidente-Directrice Générale de YOUR SPACE MAX, pilotant la stratégie d'expansion et le développement des activités de l'entreprise."
      },
      {
        title: 'Gestion & Développement d’Affaires',
        desc: "Solide expertise en gestion de projets, planification stratégique, modélisation économique et accompagnement d'entrepreneurs."
      },
      {
        title: 'Innovation & Technologies',
        desc: "Engagement fort pour la transformation numérique, l'intelligence artificielle et l'intégration des technologies émergentes."
      },
      {
        title: 'Certifications & Formations',
        desc: "Certificat CDE en Entrepreneuriat, certifications multiples en gestion de projet, IA, méthodologie de recherche, analyse SPSS et certification UNICEF BSAFE."
      },
      {
        title: 'Engagement Associatif & Étudiant',
        desc: "Ancienne Vice-présidente du Club Scientifique de Droit et membre active du Future Innovators Club à l'Université Constantine 1, organisatrice de colloques scientifiques."
      }
    ],
    visionTitle: 'Vision Professionnelle :',
    vision: "Contribuer activement au développement de l'écosystème entrepreneurial et de l'innovation, en créant une synergie puissante entre expertises juridique, managériale et technologique pour propulser les porteurs de projets et entreprises à chaque étape de leur croissance.",
    socials: {
      linkedin: 'https://dz.linkedin.com/in/sara-filali-714b7b35a/ar',
      facebook: 'https://www.facebook.com/share/1LUzuAQefG/',
      instagram: 'https://www.instagram.com/filali__sara',
      tiktok: 'https://www.tiktok.com/@filali_sara'
    }
  },
  team: {
    title: 'Notre Équipe & Réseau d’Experts',
    intro: "YOUR SPACE MAX s'appuie sur un réseau pluridisciplinaire d'experts, consultants et professionnels chevronnés, garantissant des solutions sur-mesure et d'excellence adaptées à chaque projet.",
    specializations: [
      {
        num: '01',
        title: "Accompagnement & Développement d'Entreprises",
        desc: "Accompagnement des porteurs d'idées, modélisation économique, amorçage et passage à l'échelle."
      },
      {
        num: '02',
        title: "Conseil & Études d'Investissement",
        desc: "Études économiques et financières, analyses de marché, faisabilité et structuration de capital."
      },
      {
        num: '03',
        title: 'Formation & Perfectionnement',
        desc: "Formations managériales, entrepreneuriales et technologiques pour élever les compétences des talents."
      },
      {
        num: '04',
        title: "Événementiel & Congrès Professionnels",
        desc: "Organisation de conférences, symposiums, ateliers et salons avec gestion technique et logistique complète."
      },
      {
        num: '05',
        title: 'Design & Services Créatifs',
        desc: "Identité de marque, design graphique, production de contenus visuels et supports de communication."
      },
      {
        num: '06',
        title: 'Développement & Solutions Digitales',
        desc: "Conception de sites et logiciels, intégration IA, cybersécurité et accélération de la transition digitale."
      }
    ]
  },
  valuesTitle: 'Notre Vision & Méthodologie',
  values: [
    { en: 'INNOVATION', ar: 'الابتكار', label: 'Innovation' },
    { en: 'EXPERTISE', ar: 'الخبرة والكفاءة', label: 'Expertise' },
    { en: 'QUALITY', ar: 'الجودة', label: 'Qualité' },
    { en: 'AGILITY', ar: 'المرونة', label: 'Agilité' },
    { en: 'SUSTAINABILITY', ar: 'الاستدامة', label: 'Durabilité' }
  ],
  ui: {
    otherLangCode: 'ar',
    otherLangLabel: 'العربية',
    otherLangName: 'العربية',
    otherLangTitle: 'التحويل إلى النسخة العربية',
    switchLangUrlPrefix: '../',
    themeToggleTitle: 'Basculer le thème (sombre / clair)',
    ctaOrder: 'Demander un service',
    ctaDiscover: 'Découvrir nos services',
    ctaContact: 'Contactez-nous',
    quickProof1: 'Présentiel & À distance',
    quickProof2: 'Incubateur Université Constantine 1',
    quickProof3: 'Solutions complètes 360°',
    heroBadgeText: "L'écosystème complet pour concrétiser votre vision en réussite économique.",
    aboutSectionBadge: 'À Propos',
    aboutSectionTitle: 'Votre Espace de Croissance et d’Innovation.',
    aboutStoryP1: "Entreprise multiservices, offrant des solutions intégrées d'accompagnement de startups, d'études d'investissement, de formation, d'organisation d'événements économiques et scientifiques, de design créatif et de développement digital.",
    aboutStoryP2: "Née d'un projet novateur en milieu universitaire, l'entreprise s'est affirmée à travers des jalons entrepreneuriaux majeurs jusqu'à sa concrétisation en institution économique pérenne.",
    timelineHeader: 'Jalons de Développement',
    timelineSubtitle: "De l'idée universitaire à l'institution économique de référence",
    aboutMissionBanner: '« Nous transformons les idées en projets concrets et pérennes, grâce à notre expertise et des solutions adaptées à chaque besoin, <strong class="text-brand dark:text-brand-dark font-bold">en présentiel et à distance</strong>. »',
    homeTeaserTag: 'Notre Équipe & Expertise',
    homeTeaserHeading: 'Découvrez la Direction Générale, notre réseau d’experts et notre méthodologie de travail',
    homeTeaserBtn: 'Explorer la page À Propos et notre Équipe',
    servicesBadge: 'Notre Offre Intégrée',
    servicesTitle: 'Des services complets.. adaptés à vos ambitions',
    servicesSubtitle: "Nous associons expertise de terrain, méthodologie rigoureuse et solutions pragmatiques pour propulser entrepreneurs, startups et entreprises à chaque étape de leur développement.",
    targetAudience: 'Publics cibles :',
    deliverablesTitle: 'Livrables & Résultats concrets :',
    serviceNumPrefix: 'Service 0',
    achievementsBadge: 'Nos Chiffres Clés',
    achievementsTitle: 'Des indicateurs qui témoignent de notre engagement',
    achievementsSubtitle: 'Au fil de notre trajectoire, nous avons noué des partenariats stratégiques et atteint des résultats concrets au service de l’entrepreneuriat et de l’innovation.',
    ctaSectionTitle: 'Prêt à propulser votre projet vers le succès ?',
    ctaSectionDesc: 'L’équipe YOUR SPACE MAX est à votre écoute pour vous apporter un accompagnement de haute qualité et des solutions concrètes.',
    ctaSectionBtnStart: 'Démarrer votre accompagnement',
    ctaSectionBtnServices: 'Explorer tous nos services',
    contactTitle: 'Contactez-nous.. Le premier pas vers votre réussite',
    contactSubtitle: 'Une question ? Un projet ? Notre équipe est mobilisée pour vous apporter les réponses et le soutien adaptés.',
    contactFormTitle: 'Transmettez-nous votre demande',
    fullName: 'Nom et Prénom',
    fullNamePlaceholder: 'Ex : Mohamed Benali',
    email: 'Adresse Email',
    emailPlaceholder: 'nom@entreprise.com',
    phone: 'Numéro de Téléphone',
    phonePlaceholder: '0550 00 00 00',
    serviceNeeded: 'Service souhaité',
    selectService: 'Sélectionnez le service approprié...',
    accompanimentType: "Format d'accompagnement souhaité",
    inPerson: 'En présentiel',
    remote: 'À distance (En ligne)',
    bothTypes: 'Format hybride (Présentiel & En ligne)',
    message: 'Détails de votre projet ou demande',
    messagePlaceholder: 'Décrivez brièvement votre projet, vos objectifs ou le type de conseil recherché...',
    submitBtn: 'Envoyer ma demande',
    formSuccessTitle: 'Demande transmise avec succès !',
    formSuccessDesc: 'Merci de votre confiance en YOUR SPACE MAX. Notre équipe vous recontactera dans les plus brefs délais.',
    headquartersTitle: 'Siège & Contact',
    headquartersLabel: 'Siège principal :',
    scopeLabel: "Périmètre d'action :",
    quickLinks: 'Liens Rapides',
    directChat: 'Échange immédiat & Réseaux',
    directChatDesc: "L'équipe YOUR SPACE MAX est disponible pour répondre à vos demandes instantanément.",
    whatsappBtn: 'Échanger sur WhatsApp',
    followUs: 'Suivez-nous sur nos réseaux :',
    designedAccording: 'Designed according to official brand guidelines.',
    allRightsReserved: 'Tous droits réservés © 2026 YOUR SPACE MAX.',
    executiveSocialsTitle: 'Réseaux professionnels et contact direct :'
  }
};

