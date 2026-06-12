"use client";

import { use } from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { getTranslation, translations, Language } from "@/lib/translations";
import { API_URL } from "@/lib/api";
import styles from "@/styles/partenaires.module.css";

const translatedCategories = translations.fr.pages.partners.catergories;

export type Category = "all" | keyof typeof translatedCategories;

interface Partner {
	documentId: string;
	category: Category;
	logo: { url: string; alternativeText: string | null; width: number; height: number };
	website?: string;
	name: string;
	role: string;
	description: string;
}

function PartnerCard({ partner }: { partner: Partner }) {
	return (
		<article className={styles["partner-card"]}>
			<div className={styles["card-header"]}>
				{/* MODIFICATION ICI : On retire la div conteneur .card-logo */}
				<Image
					src={API_URL + partner.logo.url}
					alt={`Logo ${partner.name}`}
					width={partner.logo.width}
					height={partner.logo.height}
					className={styles["partner-logo-free"]}
					priority
				/>

				<div className={styles["card-info"]}>
					<p className={styles["card-role"]}>{partner.role}</p>
					<h3 className={styles["card-name"]}>
						{partner.website ? (
							<a href={partner.website} target="_blank" rel="noopener noreferrer">
								{partner.name} <FaExternalLinkAlt className="inline" />
							</a>
						) : (
							partner.name
						)}
					</h3>
				</div>
			</div>
			<p className={styles["card-desc"]}>{partner.description}</p>
		</article>
	);
}

const SECTIONS: { cat: Exclude<Category, "all">; badgeClass: string; icon: string }[] = [
	{ cat: "international", badgeClass: "badge-intl", icon: "ti-world" },
	{ cat: "institutional", badgeClass: "badge-inst", icon: "ti-building-community" },
	{ cat: "national", badgeClass: "badge-nat", icon: "ti-flag" },
];

export default function PartnerCards({
	partners,
	active,
	lang,
}: {
	partners: Promise<any>;
	active: Category;
	lang: Language;
}) {
	const partnersResponse = use(partners);

	return (
		<div className={styles.content}>
			{SECTIONS.filter((s) => active === "all" || active === s.cat).map((section) => (
				<section key={section.cat} className={styles.section}>
					<div className={styles["section-header"]}>
						<div className={styles["section-line"]} />
						<h2 className={`${styles["section-badge"]}`}>
							<i className={`ti ${section.icon}`} aria-hidden="true" />
							{getTranslation(lang, `pages.partners.catergories.${section.cat}`)}
						</h2>
						<div className={styles["section-line"]} />
					</div>
					<div className={styles["cards-grid"]}>
						{partnersResponse.data
							.filter((p: Partner) => p.category === section.cat)
							.map((partner: Partner) => (
								<PartnerCard key={partner.documentId} partner={partner} />
							))}
					</div>
				</section>
			))}
		</div>
	);
}
