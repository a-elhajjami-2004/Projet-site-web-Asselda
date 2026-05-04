import { ReactElement } from "react";

export type ProjectStatus = "Opérationel" | "Terminé" | "En cours";
export type ProjectDomain = "Environnement" | "Eau" | "Infrastructure & Rural" | "Social & Famille";

export interface Project {
	title: string;
	status: ProjectStatus;
	domain: ProjectDomain;
	image: string;
	details: { [key: string]: string };
	description?: ReactElement;
	results?: string;
}

export interface TimelineEvent {
	title: string;
	year: string;
}

export const projects: Project[] = [
	{
		title: "Projet d'assainissement liquide et de traitement des eaux usées de Douar Asselda",
		status: "Opérationel",
		domain: "Environnement",
		image: "https://picsum.photos/400/280?random=1",
		details: {
			"Budget total": "12 000 000.00 DH (12 MDH)",
			"Partenaire principal": "AMEED - Association Maroco-Suisse pour le Développement",
			Bénéficiaires: "Ensemble des habitants de Douar Asselda (douars 1, 2 et 3)",
		},
		description: (
			<>
				<p>
					Ce projet constitue un modèle environnemental avancé, le premier de ce type dans la région. Il
					repose sur des technologies respectueuses de l'environnement pour contribuer à la protection des
					ressources naturelles et à la réduction de la pollution.
				</p>
				<p>
					L'Association Asselda assure la supervision effective de la gestion et de l'exploitation du réseau
					et de la station de traitement, garantissant la continuité du service, la maintenance périodique, le
					suivi de la qualité des eaux traitées et leur conformité aux normes environnementales, pour réduire
					la pollution des sols et des eaux souterraines, améliorer la santé publique et protéger
					l'environnement naturel.
				</p>
			</>
		),
		results:
			"Zéro déversement d'eaux usées brutes. Réduction de 90% de la pollution des eaux souterraines locales. Amélioration sanitaire mesurable pour +500 familles.",
	},
	{
		title: "Réseau d'eau potable alimenté par énergie solaire",
		status: "Opérationel",
		domain: "Eau",
		image: "https://picsum.photos/400/280?random=2",
		details: {},
		description: (
			<>
				<p>
					Pour généraliser l'accès au service d'eau potable et réduire les difficultés liées à
					l'approvisionnement en eau, notamment pour les femmes et les enfants, l'association a développé un
					réseau complet comprenant :
				</p>
				<ul>
					<li>Forage de puits et captage de sources</li>
					<li>Extension du réseau et création de nouveaux points de branchement</li>
					<li>
						Organisation et gestion de la distribution et de la facturation selon une méthodologie
						transparente
					</li>
					<li>Construction de réservoirs de stockage pour renforcer la sécurité hydrique</li>
					<li>Adoption de l'énergie solaire pour réduire les coûts de production</li>
				</ul>
			</>
		),
	},
	{
		title: "Trottoirs et ruelles de Douar Asselda – Programme Awrach 2022",
		status: "Terminé",
		domain: "Infrastructure & Rural",
		image: "https://picsum.photos/400/280?random=3",
		details: {
			Programme: "Programme National Awrach 2022 – Royaume du Maroc",
			"Zones concernées": "Douar Asselda 1, Douar Asselda 2, Douar Asselda 3",
		},
		description: (
			<p>
				Participation au programme national Awrach par un projet de pavage des ruelles, passages et places
				publiques (Asselda 1, 2, 3). Intégration d'une approche environnementale dans le choix des matériaux et
				des méthodes d'exécution, selon une vision globale d'amélioration du paysage urbain et de facilitation
				d'accès aux services essentiels.
			</p>
		),
	},
	{
		title: "Réponse humanitaire au séisme du 8 septembre 2023",
		status: "En cours",
		domain: "Social & Famille",
		image: "https://picsum.photos/400/280?random=4",
		details: {
			Contexte:
				"Le 8 septembre 2023, un séisme dévastateur a frappé la région. La quasi-totalité des maisons du douar a été endommagée ou détruite. Les ruelles ont été obstruées, les réseaux d'eau et d'électricité coupés. L'école et la mosquée ont subi des fissures importantes.",
			"Actions menées":
				"Distribution de vivres et denrées de première nécessité, montage de tentes pour les familles sinistrées, mobilisation de bénévoles pour les opérations de déblaiement, soutien psychologique pour les enfants et les personnes âgées, coordination avec les convois d'aide humanitaire nationaux et internationaux.",
			"Phase actuelle":
				"Reconstruction progressive, en attente de financements pour les projets de logements sismiquement résistants et de réhabilitation de l'école.",
			Appel: "L'association lance un appel aux partenaires et donateurs pour soutenir la phase de reconstruction durable.",
		},
		description: <></>,
	},
];

export const timelineEvents: TimelineEvent[] = [
	{
		title: "Fondation de l'Association Asselda",
		year: "1996",
	},
	{
		title: "Premiers projets d'eau potable, alphabétisation des femmes, activités culturelles et sportives",
		year: "1998 - 2003",
	},
	{
		title: "Développement du réseau d'eau potable solaire, connexions électriques et scolarisation",
		year: "2007 - 2008",
	},
	{
		title: "Projet d'assainissement liquide AMEED - Étude, financement et réalisation",
		year: "2019",
	},
	{
		title: "Programme Awrach - réhabilitation des voiries de Douar Asselda",
		year: "2021",
	},
	{
		title: "Réponse humanitaire du séisme du 8 septembre 2023",
		year: "2023",
	},
	{
		title: "Reconstruction post-séisme, renouvellement du bureau exécutif (AS du 2 février 2025)",
		year: "2024 - 2025",
	},
];

export const statuses: ProjectStatus[] = ["Terminé", "Opérationel", "En cours"];
export const domains: ProjectDomain[] = ["Environnement", "Infrastructure & Rural", "Social & Famille", "Eau"];

export const getStatusColor = (status: ProjectStatus): string => {
	const colors: Record<ProjectStatus, string> = {
		Terminé: "#2e7d32",
		Opérationel: "#d32f2f",
		"En cours": "#fbc02d",
	};
	return colors[status];
};

export const getDomainColor = (domain: ProjectDomain): string => {
	const colors: Record<ProjectDomain, string> = {
		Environnement: "#7cb342",
		"Infrastructure & Rural": "#ffd54f",
		"Social & Famille": "#e57373",
		Eau: "#64b5f6",
	};
	return colors[domain];
};

export const filterProjects = (
	allProjects: Project[],
	status: ProjectStatus | "Tous",
	domain: ProjectDomain | "Tous",
): Project[] => {
	return allProjects.filter(
		(project) =>
			(status === "Tous" || project.status === status) && (domain === "Tous" || project.domain === domain),
	);
};
