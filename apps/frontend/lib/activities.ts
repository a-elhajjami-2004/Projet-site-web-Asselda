export type Domain = "Tous" | "Environnement" | "Infrastructure & Rural" | "Social & Famille" | "Éducation & Formation";

export interface Activity {
	title: string;
	domain: Exclude<Domain, "Tous">;
	description: string;
	impact: string;
	image: string;
}

export const projects: Activity[] = [
	{
		title: "Assainissement liquide",
		domain: "Environnement",
		description:
			"Gestion et exploitation du réseau d'assainissement et de la station de traitement des eaux usées, réalisée en partenariat avec l'AMSED pour 12 MDH. L'association assure la supervision, la maintenance régulière et le suivi de la qualité des eaux traitées.",
		impact: "Réduction de la pollution des sols et des eaux souterraines. Amélioration de la santé publique. Premier projet de ce type dans la région.",
		image: "https://picsum.photos/300/250?random=1",
	},
	{
		title: "Protection des ressources naturelles",
		domain: "Environnement",
		description:
			"Sensibilisation des habitants à la préservation des écosystèmes locaux : sources d'eau, forêts, zones agricoles. Organisation de campagnes de nettoyage et de reboisement.",
		impact: "Réduction des décharges sauvages. Prise de conscience environnementale dans la communauté.",
		image: "https://picsum.photos/300/250?random=2",
	},
	{
		title: "Gestion des déchets ménagers",
		domain: "Environnement",
		description:
			"Mise en place de points de collecte des déchets ménagers dans les 3 douars. Sensibilisation au tri et à l'hygiène publique.",
		impact: "Amélioration nette du cadre de vie et réduction de la pollution visuelle.",
		image: "https://picsum.photos/300/250?random=3",
	},
	{
		title: "Eau potable solaire",
		domain: "Infrastructure & Rural",
		description:
			"Forage de puits, installation de panneaux solaires pour alimenter les pompes, extension et maintenance du réseau de distribution. Gestion d'un système de facturation transparent.",
		impact: "Accès à l'eau potable pour toutes les familles de Douar Asselda. Réduction du temps consacré à la corvée d'eau, notamment pour les femmes et enfants.",
		image: "https://picsum.photos/300/250?random=4",
	},
	{
		title: "Réhabilitation voiries - Awrach 2022",
		domain: "Infrastructure & Rural",
		description:
			"Pavage des ruelles, passages et places publiques dans les 3 douars (Asselda 1, 2, 3) dans le cadre du programme national Awrach 2022. Matériaux locaux, critères de durabilité.",
		impact: "Amélioration de l'accessibilité et du cadre de vie. Création d'emplois locaux temporaires. Réduction des eaux stagnantes.",
		image: "https://picsum.photos/300/250?random=5",
	},
	{
		title: "Développement économique local",
		domain: "Infrastructure & Rural",
		description:
			"Soutien aux initiatives économiques génératrices de revenus pour les femmes et les jeunes. Accompagnement de petits projets agricoles ou artisanaux.",
		impact: "Réduction de l'exode rural. Amélioration du pouvoir d'achat des ménages.",
		image: "https://picsum.photos/300/250?random=6",
	},
	{
		title: "Aide post-séisme (2023)",
		domain: "Social & Famille",
		description:
			"Mobilisation immédiate après le séisme du 8 septembre 2023 : distribution de vivres, de couvertures et de tentes aux familles sinistrées. Coordination des convois d'aide. Soutien psychologique aux enfants et personnes âgées.",
		impact: "Centaines de familles secourues. Témoignage concret de la solidarité villageoise et institutionnelle.",
		image: "https://picsum.photos/300/250?random=7",
	},
	{
		title: "Soutien aux familles vulnérables",
		domain: "Social & Famille",
		description:
			"Distribution de vêtements, denrées alimentaires et colis de rentrée scolaire lors des campagnes hivernales. Soutien aux familles à faibles revenus et aux personnes en situation de handicap.",
		impact: "Réduction de la précarité. Amélioration du bien-être des familles les plus exposées.",
		image: "https://picsum.photos/300/250?random=8",
	},
	{
		title: "Caravanes médicales",
		domain: "Social & Famille",
		description:
			"Organisation de caravanes médicales en partenariat avec des médecins volontaires et des associations de santé. Consultations générales, dentaires et gynécologiques.",
		impact: "Accès aux soins pour des populations éloignées des centres de santé.",
		image: "https://picsum.photos/300/250?random=9",
	},
	{
		title: "Alphabétisation des femmes",
		domain: "Éducation & Formation",
		description:
			"Cours d'alphabétisation et de formation continue pour les femmes adultes : lecture, écriture, calcul. Séances adaptées aux emplois du temps des mères de famille.",
		impact: "Autonomisation des femmes. Amélioration de la gestion du foyer et des démarches administratives.",
		image: "https://picsum.photos/300/250?random=10",
	},
	{
		title: "Soutien scolaire",
		domain: "Éducation & Formation",
		description:
			"Cours de soutien et de renforcement pour les élèves du primaire et secondaire. Lutte contre l'abandon scolaire, particulièrement chez les filles.",
		impact: "Amélioration des résultats scolaires. Réduction du décrochage scolaire.",
		image: "https://picsum.photos/300/250?random=11",
	},
	{
		title: "Formation numérique & professionnelle",
		domain: "Éducation & Formation",
		description:
			"Ateliers informatiques pour les jeunes. Formation aux métiers artisanaux (tapis, couture, travail du bois). Modules sur la conduite de projets associatifs.",
		impact: "Insertion professionnelle des jeunes. Développement des compétences locales.",
		image: "https://picsum.photos/300/250?random=12",
	},
	{
		title: "Sensibilisation environnementale enfants",
		domain: "Éducation & Formation",
		description: "Ateliers ludiques sur la nature, le tri des déchets, l'eau et l'énergie solaire.",
		impact: "Formation des citoyens de demain à une culture écologique dès le plus jeune âge.",
		image: "https://picsum.photos/300/250?random=13",
	},
];

export const domains: Exclude<Domain, "Tous">[] = [
	"Environnement",
	"Infrastructure & Rural",
	"Social & Famille",
	"Éducation & Formation",
];

export const getDomainColor = (domain: Exclude<Domain, "Tous">): string => {
	const colors: Record<Exclude<Domain, "Tous">, string> = {
		Environnement: "#7cb342",
		"Infrastructure & Rural": "#ffd54f",
		"Social & Famille": "#e57373",
		"Éducation & Formation": "#64b5f6",
	};
	return colors[domain];
};

export const filterActivities = (allActivities: Activity[], domain: Domain): Activity[] => {
	return allActivities.filter((activity) => domain === "Tous" || activity.domain === domain);
};
