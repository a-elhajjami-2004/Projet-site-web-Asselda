import { join } from "path";

// Translations for the website
export type Language = "fr" | "ar" | "en";

export type PageKey =
	| "home"
	| "about"
	| "news"
	| "projects"
	| "activities"
	| "gallery"
	| "partners"
	| "contact"
	| "join";

export const languages: Language[] = ["fr", "ar"];

export const translations = {
	fr: {
		pages: {
			home: {
				title: "Association Asselda",
				description: "Pour l'environnement, le développement et la famille – depuis 1996",
			},
			about: {
				title: "À Propos - Association Asselda",
				description:
					"Page à-propos donnant plus d'informations sur l'association Asselda contenant toutes les informations sur celle-ci et tous ces projets réalisés",
				keywords: ["Asselda", "Association", "a-propos", "developpement", "rural", "al-houz"],
			},
			news: {
				title: "Actualités - Association Asselda",
				description:
					"Restez informé des dernières nouvelles de l'Association Asselda, y compris les projets, événements, communiqués et initiatives de solidarité.",
				keywords: ["actualités", "événements", "projets", "communiqués", "solidarité"],
			},
			projects: {
				title: "Projets - Association Asselda",
				description:
					"Découvrez les projets réalisés et en cours de l'Association Asselda, visant à améliorer les conditions de vie des habitants de Douar Asselda à travers des initiatives durables dans les domaines de l'environnement, du rural, du social et de l'éducation.",
				keywords: [
					"projets",
					"association asselda",
					"douar asselda",
					"environnement",
					"rural",
					"social",
					"éducation",
				],
			},
			activities: {
				title: "Activités - Association Asselda",
				description:
					"Découvrez les projets et initiatives de l'Association Asselda pour le développement durable et le bien-être des habitants de la région d'Asni, Al Haouz.",
				keywords: [
					"Association Asselda",
					"Activités",
					"Projets",
					"Développement durable",
					"Environnement",
					"Rural",
					"Social",
				],
				domains: {
					environment: "Environnement",
					infrastructure: "Infrastructure & Rural",
					social: "Social & Famille",
					formation: "Formation & Éducation",
				},
			},
			gallery: {
				title: "Galerie - Association Asselda",
				description:
					"Découvrez les photos et vidéos des actions et événements de l'Association Asselda, mettant en lumière la vie quotidienne, les projets et les initiatives des habitants de Douar Asselda.",
				keywords: [
					"Association Asselda",
					"Galerie",
					"Photos",
					"Vidéos",
					"Projets",
					"Événements",
					"Douar Asselda",
				],
				allAlbums: "Tous les albums",
				noAlbums: "Aucun album trouvé",
			},
			partners: {
				title: "Partenaires - Association Asselda",
				description: "Découvrez nos partenaires et collaborateurs dans la mission de l'Association Asselda.",
				keywords: ["partenaires", "collaborateurs", "association", "solidarité"],
			},
			contact: {
				title: "Contact - Association Asselda",
				description: "Contactez l'Association Asselda pour plus d'informations sur nos projets et initiatives.",
				keywords: ["Association Asselda", "Contact", "Projets", "Initiatives", "Douar Asselda"],
			},
			join: {
				title: "Nous Rejoindre - Association Asselda",
				description:
					"Rejoignez l'Association Asselda pour contribuer à nos projets et initiatives en faveur de l'environnement, du développement rural, du social et de l'éducation à Douar Asselda.",
				keywords: ["Association Asselda", "Nous Rejoindre", "Projets", "Initiatives", "Douar Asselda"],
			},
		},
		footer: {
			tagline: "« Pour l'environnement, le développement et la famille – depuis 1996 »",
			navigation: "Navigation",
			home: "Accueil",
			about: "À Propos",
			activities: "Activités",
			projects: "Projets",
			news: "Actualités",
			gallery: "Galerie",
			partners: "Partenaires",
			join: "Nous Rejoindre",
			contact: "Contact",
			info: "Informations",
			location: "Douar Asselda, Asni",
			email: "associationasselda@gmail.com",
			phone: "06 60 01 57 30",
			social: "Réseaux Sociaux",
			followUs: "Suivez-nous",
			copyright:
				"© 2025 Association Asselda pour l'Environnement, le Développement Rural et la Famille. Tous droits réservés.",
			legal: "Mentions légales",
			privacy: "Politique de confidentialité",
			credits:
				"Site réalisé par Ikram Aboutayeb, Adam El Hajjami, Djamilatou Keita, Djelika Tiemtoré – ENSET Mohammedia – 2026",
		},
		header: {
			name: "Association Asselda",
			home: "Accueil",
			about: "À Propos",
			activities: "Activités",
			projects: "Projets",
			news: "Actualités",
			gallery: "Galerie",
			partners: "Partenaires",
			join: "Nous Rejoindre",
			contact: "Contact",
		},
	},
	en: {
		pages: {
			home: {
				title: "Association Asselda",
				description: "Pour l'environnement, le développement et la famille – depuis 1996",
			},
			about: {
				title: "À Propos - Association Asselda",
				description:
					"Page à-propos donnant plus d'informations sur l'association Asselda contenant toutes les informations sur celle-ci et tous ces projets réalisés",
				keywords: ["Asselda", "Association", "a-propos", "developpement", "rural", "al-houz"],
			},
			news: {
				title: "Actualités - Association Asselda",
				description:
					"Restez informé des dernières nouvelles de l'Association Asselda, y compris les projets, événements, communiqués et initiatives de solidarité.",
				keywords: ["actualités", "événements", "projets", "communiqués", "solidarité"],
			},
			projects: {
				title: "Projets - Association Asselda",
				description:
					"Découvrez les projets réalisés et en cours de l'Association Asselda, visant à améliorer les conditions de vie des habitants de Douar Asselda à travers des initiatives durables dans les domaines de l'environnement, du rural, du social et de l'éducation.",
				keywords: [
					"projets",
					"association asselda",
					"douar asselda",
					"environnement",
					"rural",
					"social",
					"éducation",
				],
			},
			activities: {
				title: "Activités - Association Asselda",
				description:
					"Découvrez les projets et initiatives de l'Association Asselda pour le développement durable et le bien-être des habitants de la région d'Asni, Al Haouz.",
				keywords: [
					"Association Asselda",
					"Activités",
					"Projets",
					"Développement durable",
					"Environnement",
					"Rural",
					"Social",
				],
			},
			gallery: {
				title: "Galerie - Association Asselda",
				description:
					"Découvrez les photos et vidéos des actions et événements de l'Association Asselda, mettant en lumière la vie quotidienne, les projets et les initiatives des habitants de Douar Asselda.",
				keywords: [
					"Association Asselda",
					"Galerie",
					"Photos",
					"Vidéos",
					"Projets",
					"Événements",
					"Douar Asselda",
				],
				allAlbums: "Tous les albums",
				noAlbums: "Aucun album trouvé",
			},
			partners: {
				title: "Partenaires - Association Asselda",
				description: "Découvrez nos partenaires et collaborateurs dans la mission de l'Association Asselda.",
				keywords: ["partenaires", "collaborateurs", "association", "solidarité"],
			},
			contact: {
				title: "Contact - Association Asselda",
				description: "Contactez l'Association Asselda pour plus d'informations sur nos projets et initiatives.",
				keywords: ["Association Asselda", "Contact", "Projets", "Initiatives", "Douar Asselda"],
			},
			join: {
				title: "Nous Rejoindre - Association Asselda",
				description:
					"Rejoignez l'Association Asselda pour contribuer à nos projets et initiatives en faveur de l'environnement, du développement rural, du social et de l'éducation à Douar Asselda.",
				keywords: ["Association Asselda", "Nous Rejoindre", "Projets", "Initiatives", "Douar Asselda"],
			},
		},
		footer: {
			tagline: "« Pour l'environnement, le développement et la famille – depuis 1996 »",
			navigation: "Navigation",
			home: "Accueil",
			about: "À Propos",
			activities: "Activités",
			projects: "Projets",
			news: "Actualités",
			gallery: "Galerie",
			partners: "Partenaires",
			join: "Nous Rejoindre",
			contact: "Contact",
			info: "Informations",
			location: "Douar Asselda, Asni",
			email: "associationasselda@gmail.com",
			phone: "06 60 01 57 30",
			social: "Réseaux Sociaux",
			followUs: "Suivez-nous",
			copyright:
				"© 2025 Association Asselda pour l'Environnement, le Développement Rural et la Famille. Tous droits réservés.",
			legal: "Mentions légales",
			privacy: "Politique de confidentialité",
			credits:
				"Site réalisé par Ikram Aboutayeb, Adam El Hajjami, Djamilatou Keita, Djelika Tiemtoré – ENSET Mohammedia – 2026",
		},
		header: {
			name: "Association Asselda",
			home: "Accueil",
			about: "À Propos",
			activities: "Activités",
			projects: "Projets",
			news: "Actualités",
			gallery: "Galerie",
			partners: "Partenaires",
			join: "Nous Rejoindre",
			contact: "Contact",
		},
	},
	ar: {
		pages: {
			home: {
				title: "جمعية أسلدة",
				description: "من أجل البيئة والتنمية والعائلة – منذ 1996",
			},
			about: {
				title: "من نحن - جمعية أسلدة",
				description:
					"صفحة من نحن التي تقدم المزيد من المعلومات حول جمعية أسلدة تحتوي على جميع المعلومات حولها وجميع مشاريعها المنجزة",
				keywords: ["أسلدة", "جمعية", "من نحن", "تطوير", "ريفية", "الحوز"],
			},
			news: {
				title: "الأخبار - جمعية أسلدة",
				description:
					"ابق على اطلاع بأحدث أخبار جمعية أسلدة، بما في ذلك المشاريع، الأحداث، البيانات الصحفية والمبادرات التضامنية.",
				keywords: ["أخبار", "أحداث", "مشاريع", "بيانات صحفية", "تضامن"],
			},
			projects: {
				title: "المشاريع - جمعية أسلدة",
				description:
					"اكتشف المشاريع المنجزة والجارية لجمعية أسلدة، التي تهدف إلى تحسين ظروف حياة سكان دوار أسلدة من خلال مبادرات مستدامة في مجالات البيئة والتنمية الريفية والشؤون الاجتماعية والتعليم.",
				keywords: ["مشاريع", "جمعية أسلدة", "دوار أسلدة", "بيئة", "تنمية ريفية", "شؤون اجتماعية", "تعليم"],
			},
			activities: {
				title: "الأنشطة - جمعية أسلدة",
				description:
					"اكتشف المشاريع والمبادرات التابعة لجمعية أسلدة من أجل التنمية المستدامة وسعادة سكان منطقة أسني بالحوز.",
				keywords: ["جمعية أسلدة", "أنشطة", "مشاريع", "تنمية مستدامة", "بيئة", "تنمية ريفية", "شؤون اجتماعية"],
			},
			gallery: {
				title: "المعرض - جمعية أسلدة",
				description:
					"اكتشف الصور ومقاطع الفيديو الخاصة بأنشطة وفعاليات جمعية أسلدة، مما يسلط الضوء على الحياة اليومية والمشاريع والمبادرات لسكان دوار أسلدة.",
				keywords: ["جمعية أسلدة", "معرض", "صور", "فيديوهات", "مشاريع", "فعاليات", "دوار أسلدة"],
				allAlbums: "جميع الألبومات",
				noAlbums: "لم يتم العثور على ألبومات",
			},
			partners: {
				title: "الشركاء - جمعية أسلدة",
				description: "اكتشف شركاءنا والمتعاونين معنا في مهمة جمعية أسلدة.",
				keywords: ["شركاء", "متعاونين", "جمعية", "تضامن"],
			},
			contact: {
				title: "اتصل بنا - جمعية أسلدة",
				description: "اتصل بجمعية أسلدة للحصول على معلومات إضافية حول مشاريعنا ومبادراتنا.",
				keywords: ["جمعية أسلدة", "اتصل بنا", "مشاريع", "مبادرات", "دوار أسلدة"],
			},
			join: {
				title: "انضم إلينا - جمعية أسلدة",
				description: "انضم إلينا لمساهمة في مشاريعنا ومبادراتنا لخدمة البيئة والتنمية والمجتمع في دوار أسلدة.",
				keywords: ["جمعية أسلدة", "انضم إلينا", "مشاريع", "مبادرات", "دوار أسلدة"],
			},
		},
		footer: {
			tagline: "« من أجل البيئة والتنمية والعائلة - منذ 1996 »",
			navigation: "التنقل",
			home: "الرئيسية",
			about: "من نحن",
			activities: "الأنشطة",
			projects: "المشاريع",
			news: "الأخبار",
			gallery: "المعرض",
			partners: "الشركاء",
			join: "انضم إلينا",
			contact: "اتصل بنا",
			info: "معلومات",
			location: "دوار أسلدة، أسني",
			email: "associationasselda@gmail.com",
			phone: "06 60 01 57 30",
			social: "وسائل التواصل الاجتماعي",
			followUs: "تابعنا",
			copyright: "© 2025 جمعية أسلدة للبيئة والتنمية القروية والأسرة. جميع الحقوق محفوظة.",
			legal: "الشروط القانونية",
			privacy: "سياسة الخصوصية",
			credits:
				"الموقع من تصميم إكرام أبوطيب، آدم الحجامي، دجاميلا كيتا، دجيليكا تيمتوري - ENSET Mohammedia - 2026",
		},
		header: {
			name: "جمعية أسلدة",
			home: "الرئيسية",
			about: "من نحن",
			activities: "الأنشطة",
			projects: "المشاريع",
			news: "الأخبار",
			gallery: "المعرض",
			partners: "الشركاء",
			join: "انضم إلينا",
			contact: "اتصل بنا",
		},
	},
};

export const getTranslation = (lang: Language | string, key: string): string => {
	const safeLang = (languages.includes(lang as Language) ? lang : "fr") as Language;
	const keys = key.split(".");
	let value: any = translations[safeLang];

	for (const k of keys) {
		if (value && typeof value === "object" && k in value) {
			value = value[k];
		} else {
			return key; // Return the key if translation not found
		}
	}

	return typeof value === "string" ? value : key;
};

/**
 * Get page metadata (title, description, keywords) from translations
 * @param lang - Language code (fr, ar)
 * @param page - Page key (home, projects, activities, gallery, contact, join)
 */
export function getPageMetadata(lang: Language | string, page: PageKey) {
	const safeLang = (languages.includes(lang as Language) ? lang : "fr") as Language;
	const pageTranslations = translations[safeLang].pages[page];

	return {
		title: pageTranslations.title,
		description: pageTranslations.description,
		keywords: (pageTranslations as any).keywords || [],
	};
}
