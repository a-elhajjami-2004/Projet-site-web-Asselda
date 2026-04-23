export type Domain = "Tous" | "Environnement" | "Infrastructure & Rural" | "Social & Famille" | "Éducation & Formation";

export interface Project {
  id: number;
  title: string;
  domain: Exclude<Domain, "Tous">;
  description?: string;
  impact?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Assainissement liquide",
    domain: "Environnement",
    description: "Sous-dit expédition du réseau d'assainissement de la région de Douar Asselda. L'amélioration des deux crises en urgence des MCH. L'association assure la supervision et la maintenance du réseau d'assainissement de trois quartiers.",
    impact: "Réduction de la pollution des eaux et de la santé publique. Amélioration de la santé publique de la région.",
    image: "https://picsum.photos/300/250?random=1"
  },
  {
    id: 2,
    title: "Réhabilitation voiries - Awrach 2022",
    domain: "Environnement",
    description: "Pavage des ruelles, passages et espaces publiques dans les 3 villages cibles du programme national d'amélioration 2022. Matériaux locaux, critères écologiques et d'autres temporaires. Réduction des eaux dangereuses.",
    impact: "Impact : Réhabilitation et amélioration de l'accessibilité routière.",
    image: "https://picsum.photos/300/250?random=2"
  },
  {
    id: 3,
    title: "Développement économique local",
    domain: "Environnement",
    description: "Soutien aux initiatives économiques généreuses de revenus pour les habitants. Accompagnement de petits projets agricoles ou artisanaux.",
    image: "https://picsum.photos/300/250?random=3"
  },
  {
    id: 4,
    title: "Eau potable solaire",
    domain: "Infrastructure & Rural",
    image: "https://picsum.photos/300/250?random=4"
  },
  {
    id: 5,
    title: "Réhabilitation voiries - Awrach 2022",
    domain: "Infrastructure & Rural",
    image: "https://picsum.photos/300/250?random=5"
  },
  {
    id: 6,
    title: "Développement économique local",
    domain: "Infrastructure & Rural",
    image: "https://picsum.photos/300/250?random=6"
  },
  {
    id: 7,
    title: "Aide post-séisme (2023)",
    domain: "Social & Famille",
    image: "https://picsum.photos/300/250?random=7"
  },
  {
    id: 8,
    title: "Soutien aux familles vulnérables",
    domain: "Social & Famille",
    image: "https://picsum.photos/300/250?random=8"
  },
  {
    id: 9,
    title: "Caravanes médicales",
    domain: "Social & Famille",
    image: "https://picsum.photos/300/250?random=9"
  },
  {
    id: 10,
    title: "Alphabétisation des femmes",
    domain: "Éducation & Formation",
    image: "https://picsum.photos/300/250?random=10"
  },
  {
    id: 11,
    title: "Soutien scolaire",
    domain: "Éducation & Formation",
    image: "https://picsum.photos/300/250?random=11"
  },
  {
    id: 12,
    title: "Formation numérique & professionnelle",
    domain: "Éducation & Formation",
    image: "https://picsum.photos/300/250?random=12"
  }
];

export const domains: Exclude<Domain, "Tous">[] = [
  "Environnement",
  "Infrastructure & Rural",
  "Social & Famille",
  "Éducation & Formation"
];

export const getDomainColor = (domain: Exclude<Domain, "Tous">): string => {
  const colors: Record<Exclude<Domain, "Tous">, string> = {
    "Environnement": "#7cb342",
    "Infrastructure & Rural": "#ffd54f",
    "Social & Famille": "#e57373",
    "Éducation & Formation": "#64b5f6"
  };
  return colors[domain];
};
