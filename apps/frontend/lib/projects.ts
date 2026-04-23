export type ProjectStatus = "Réalisé" | "En cours" | "Programmé";
export type ProjectDomain = "Environnement" | "Infrastructure & Rural" | "Social & Famille" | "Éducation & Formation";

export interface Project {
  id: number;
  title: string;
  status: ProjectStatus;
  domain: ProjectDomain;
  image?: string;
  budget?: string;
  partner?: string;
  beneficiary?: string;
  description?: string;
  results?: string;
  year?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Projet d'assainissement liquide et de traitement des eaux usées de Douar Asselda",
    status: "Réalisé",
    domain: "Environnement",
    image: "https://picsum.photos/400/280?random=1",
    budget: "12 000 000.00 DH",
    partner: "AMEED - Association Maroco-Suisse pour le Développement",
    beneficiary: "Population de Douar Asselda (environ 1.5 à 2 ans)",
    description: "L'Association Asselda assure la supervision effective de la gestion et la réglementation du réseau d'assainissement et les habitats Gérés. Gestion hygiénique, sanitaire et du bâti. L'association assure la supervision effective de la gestion et de la réglementation du réseau de ses habitants constitue un modèle environnemental innovant. La première action de nos de la contamination responsable... La deuxième action est maintenir les habitants secs et de saler constitue un modèle enviro...",
    results: "Zéro déversement d'eaux usées brutes. Réduction de 90% de la pollution des cours d'eau souterraines locales. Amélioration sanitaire mesurable 4500 familles"
  },
  {
    id: 2,
    title: "Réhabilitation des voiries - Programme Awrach 2022",
    status: "Réalisé",
    domain: "Infrastructure & Rural",
    image: "https://picsum.photos/400/280?random=2",
    budget: "8 500 000.00 DH",
    partner: "Ministère de l'Intérieur - Programme Awrach",
    beneficiary: "3 villages de la région d'Asni",
    description: "Pavage des ruelles, passages et espaces publics dans les 3 villages cibles du programme national d'amélioration 2022. Utilisation de matériaux locaux et critères écologiques. Réduction des eaux stagnantes dangereuses. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    results: "Réhabilitation complète de 45 km de voiries. Amélioration de l'accessibilité routière pour 12 000 habitants. Création de 250 jours de travail local."
  },
  {
    id: 3,
    title: "Développement économique local - Microcrédits agricoles",
    status: "En cours",
    domain: "Social & Famille",
    image: "https://picsum.photos/400/280?random=3",
    budget: "2 500 000.00 DH",
    partner: "Banque Populaire du Maroc",
    beneficiary: "150 familles",
    description: "Soutien aux initiatives économiques génératrices de revenus pour les habitants. Accompagnement de petits projets agricoles ou artisanaux. Formation en gestion d'entreprise. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    results: "Revenus augmentés de 40% pour les bénéficiaires. Création de 120 emplois directs et indirects."
  },
  {
    id: 4,
    title: "Construction de sources d'eau potable solaire",
    status: "Programmé",
    domain: "Environnement",
    budget: "4 200 000.00 DH",
    partner: "GIZ - Coopération allemande",
    beneficiary: "8 localités isolées",
    description: "Installation de systèmes d'eau potable alimentés par énergie solaire dans les zones reculées. Réduction de la dépendance énergétique. Amélioration de l'accès à l'eau potable. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation."
  },
  {
    id: 5,
    title: "Alphabétisation des femmes - Modules de formation",
    status: "En cours",
    domain: "Éducation & Formation",
    budget: "1 800 000.00 DH",
    partner: "UNESCO - Programme d'alphabétisation",
    beneficiary: "350 femmes",
    description: "Formation complète en lecture, écriture et calcul pour les femmes adultes. Inclusion économique et social. Modules adaptés aux besoins locaux. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse."
  },
  {
    id: 6,
    title: "Aide post-séisme - Distribution d'aide d'urgence",
    status: "Réalisé",
    domain: "Social & Famille",
    budget: "3 100 000.00 DH",
    partner: "Croix-Rouge Marocaine",
    beneficiary: "2000 personnes affectées",
    description: "Distribution rapide d'aide humanitaire suite au séisme du 8 septembre 2023. Fourniture de tentes, couvertures, nourriture et fournitures médicales. Soutien psychosocial. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident."
  }
];

export const timelineEvents: (Project & { year: string })[] = [
  {
    id: 101,
    title: "Fondation de l'Association Asselda",
    status: "Réalisé",
    domain: "Environnement",
    year: "1996"
  },
  {
    id: 102,
    title: "Premiers projets d'eau potable, alphabétisation des femmes, activités culturelles et sportives",
    status: "Réalisé",
    domain: "Infrastructure & Rural",
    year: "1998 - 2003"
  },
  {
    id: 103,
    title: "Développement du réseau d'eau potable solaire, connexions électriques et scolarisation",
    status: "Réalisé",
    domain: "Éducation & Formation",
    year: "2007 - 2008"
  },
  {
    id: 104,
    title: "Projet d'assainissement liquide AMEED - Étude, financement et réalisation",
    status: "Réalisé",
    domain: "Environnement",
    year: "2019"
  },
  {
    id: 105,
    title: "Programme Awrach - réhabilitation des voiries de Douar Asselda",
    status: "Réalisé",
    domain: "Infrastructure & Rural",
    year: "2021"
  },
  {
    id: 106,
    title: "Réponse humanitaire du séisme du 8 septembre 2023",
    status: "Réalisé",
    domain: "Social & Famille",
    year: "2023"
  },
  {
    id: 107,
    title: "Reconstruction post-séisme, renouvellement du bureau exécutif (AS du 2 février 2025)",
    status: "Réalisé",
    domain: "Social & Famille",
    year: "2024 - 2025"
  }
];

export const statuses: ProjectStatus[] = ["Réalisé", "En cours", "Programmé"];
export const domains: ProjectDomain[] = [
  "Environnement",
  "Infrastructure & Rural",
  "Social & Famille",
  "Éducation & Formation"
];

export const getStatusColor = (status: ProjectStatus): string => {
  const colors: Record<ProjectStatus, string> = {
    "Réalisé": "#2e7d32",
    "En cours": "#fbc02d",
    "Programmé": "#d32f2f"
  };
  return colors[status];
};

export const getDomainColor = (domain: ProjectDomain): string => {
  const colors: Record<ProjectDomain, string> = {
    "Environnement": "#7cb342",
    "Infrastructure & Rural": "#ffd54f",
    "Social & Famille": "#e57373",
    "Éducation & Formation": "#64b5f6"
  };
  return colors[domain];
};

export const filterProjects = (
  allProjects: Project[],
  status: ProjectStatus | "Tous",
  domain: ProjectDomain | "Tous"
): Project[] => {
  return allProjects.filter(
    (project) =>
      (status === "Tous" || project.status === status) &&
      (domain === "Tous" || project.domain === domain)
  );
};
