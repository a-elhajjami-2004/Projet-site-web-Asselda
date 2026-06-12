"use client";
import { useState, Suspense } from "react";
import React from "react";
import styles from "@/styles/partenaires.module.css";
import Image from "next/image";
import Link from "next/link";
import { translations } from "@/lib/translations";
import { getPartners } from "@/lib/api";
import PartnerCards from "@/components/PartnerCards";
import { Category } from "@/components/PartnerCards";

// type Category = "all" | "intl" | "inst" | "nat";

// interface Partner {
// 	documentId: string;
// 	category: Category;
// 	logo: { url: string; alternativeText: string | null; width: number; height: number };
// 	name: string;
// 	role: string;
// 	description: string;
// }

// const PARTNERS: Partner[] = [
// 	{
// 		id: "amsed",
// 		cat: "intl",
// 		initials: "AM",
// 		logoClass: "logo-green",
// 		logoUrl: "/Images/partners/amsed.png",
// 		name: "AMSED",
// 		title: "Partenariat financier & technique",
// 		tagLabel: "Association Maroco-Suisse pour le Développement",
// 		tagClass: "tag-green",
// 		description:
// 			"Partenaire principal dans le projet d'assainissement liquide de 12 000 000 DH — une collaboration exemplaire entre ONG internationale et association locale.",
// 		statIcon: "ti-coin",
// 		statLabel: "12 000 000 DH",
// 	},
// 	{
// 		id: "fmps",
// 		cat: "intl",
// 		initials: "FM",
// 		logoClass: "logo-amber",
// 		logoUrl: "/Images/partners/fmps.png",
// 		name: "FMPS",
// 		title: "Organisation à but non lucratif",
// 		tagLabel: "Fondation Marocaine du PréScolaire",
// 		tagClass: "tag-amber",
// 		description:
// 			"Partenaire dans les domaines de l'éducation préscolaire et du soutien à la petite enfance dans la commune d'Asni.",
// 		statIcon: "ti-school",
// 		statLabel: "Éducation préscolaire",
// 	},
// 	{
// 		id: "commune-asni",
// 		cat: "inst",
// 		initials: "CA",
// 		logoClass: "logo-blue",
// 		logoUrl: "/Images/partners/commune-asni.png",
// 		name: "Commune d'Asni",
// 		title: "Collectivité territoriale",
// 		tagLabel: "Partenaire local",
// 		tagClass: "tag-blue",
// 		description:
// 			"Partenaire institutionnel local assurant la coordination administrative et le soutien aux projets d'infrastructure communautaire.",
// 		statIcon: "ti-building",
// 		statLabel: "Niveau communal",
// 	},
// 	{
// 		id: "al-haouz",
// 		cat: "inst",
// 		initials: "AH",
// 		logoClass: "logo-pink",
// 		logoUrl: "/Images/partners/province-alhaouz.png",
// 		name: "Province d'Al Haouz",
// 		title: "Tutelle administrative",
// 		tagLabel: "Niveau provincial",
// 		tagClass: "tag-pink",
// 		description:
// 			"Tutelle provinciale qui soutient les initiatives de développement rural et facilite l'accès aux programmes nationaux.",
// 		statIcon: "ti-map",
// 		statLabel: "Province Al Haouz",
// 	},
// 	{
// 		id: "wilaya",
// 		cat: "nat",
// 		initials: "WM",
// 		logoClass: "logo-coral",
// 		logoUrl: "/Images/partners/region-marrakech.png",
// 		name: "Wilaya de Marrakech",
// 		title: "Autorité régionale",
// 		tagLabel: "Région Marrakech-Safi",
// 		tagClass: "tag-teal",
// 		description:
// 			"Autorité régionale coordonnant les actions de développement au niveau de la région Marrakech-Safi.",
// 		statIcon: "ti-hierarchy",
// 		statLabel: "Niveau régional",
// 	},
// 	{
// 		id: "ministere",
// 		cat: "nat",
// 		initials: "MI",
// 		logoClass: "logo-blue",
// 		logoUrl: "/Images/partners/ministere-interieur.png",
// 		name: "Ministère de l'Intérieur",
// 		title: "Cadre légal & institutionnel",
// 		tagLabel: "Direction des Affaires Rurales",
// 		tagClass: "tag-purple",
// 		description:
// 			"Partenaire étatique via la Direction des Affaires Rurales, soutenant notamment le programme national Awrach 2022.",
// 		statIcon: "ti-file-certificate",
// 		statLabel: "Programme Awrach 2022",
// 	},
// ];

// const SECTIONS: { cat: Exclude<Category, "all">; label: string; badgeClass: string; icon: string }[] = [
// 	{ cat: "intl", label: "internationales", badgeClass: "badge-intl", icon: "ti-world" },
// 	{ cat: "inst", label: "institutionnelles", badgeClass: "badge-inst", icon: "ti-building-community" },
// 	{ cat: "nat", label: "nationales", badgeClass: "badge-nat", icon: "ti-flag" },
// ];

// function PartnerCard({ partner }: { partner: Partner }) {
// 	return (
// 		<div className={styles["partner-card"]}>
// 			<div className={styles["card-header"]}>
// 				{/* MODIFICATION ICI : On retire la div conteneur .card-logo */}
// 				{partner.logoUrl ? (
// 					<Image
// 						src={partner.logoUrl}
// 						alt={`Logo ${partner.name}`}
// 						width={70}
// 						height={60}
// 						className={styles["partner-logo-free"]}
// 						priority
// 					/>
// 				) : (
// 					<div className={styles["partner-initials-free"]}>{partner.initials}</div>
// 				)}

// 				<div className={styles["card-info"]}>
// 					<div className={styles["card-name"]}>{partner.name}</div>
// 					<div className={styles["card-title"]}>{partner.title}</div>
// 				</div>
// 			</div>
// 			<span className={`${styles["card-tag"]} ${styles[partner.tagClass]}`}>{partner.tagLabel}</span>
// 			<p className={styles["card-desc"]}>{partner.description}</p>
// 			<div className={styles["stats-bar"]}>
// 				<span className={styles.stat}>
// 					<i className={`ti ${partner.statIcon}`} aria-hidden="true" />
// 					{partner.statLabel}
// 				</span>
// 			</div>
// 		</div>
// 	);
// }

export default function PartenairesPage() {
	const [active, setActive] = useState<Category>("all");

	const translatedCategories = translations.fr.pages.partners.catergories;

	return (
		<main className={styles.page}>
			<section className="hero-section">
				<div className="max-w-3xl z-10">
					<h1 className="hero-title">Nos partenaires</h1>
					<p className="hero-copy">
						L'Association Asselda agit en collaboration étroite avec des institutions publiques, des
						organisations nationales et internationales pour maximiser l'impact de ses actions.
					</p>
				</div>
			</section>
			{/* Hero resserré */}
			{/* <div className={styles.hero}>
				<h1>Nos partenaires</h1>
				<p>
					L'Association Asselda agit en collaboration étroite avec des institutions publiques, des
					organisations nationales et internationales pour maximiser l'impact de ses actions.
				</p>
				<div className={styles["filter-bar"]}>
					{filters.map((f) => (
						<button
							key={f.value}
							className={`${styles["filter-btn"]} ${active === f.value ? styles.active : ""}`}
							onClick={() => setActive(f.value)}>
							{f.label}
						</button>
					))}
				</div>
			</div> */}
			<section className="bg-white py-12 px-6 flex flex-col gap-4">
				<div className="max-w-7xl mx-auto flex justify-center">
					<div className="flex flex-col items-center gap-4">
						<div className="font-bold max-w-6xl flex flex-row justify-center gap-4">
							<button
								key={"all"}
								className={
									active == "all"
										? "min-w-max border-2 border-[#7cb645] bg-[#7cb645] text-white rounded-full px-4 py-2 cursor-pointer"
										: "min-w-max border-2 border-[#7cb645] bg-white text-forground rounded-full px-4 py-2 cursor-pointer"
								}
								onClick={() => setActive("all")}>
								Tous
							</button>
							{Object.entries(translatedCategories).map(([key, status]) => (
								<button
									key={key}
									className={
										key == active
											? "min-w-max border-2 border-[#7cb645] bg-[#7cb645] text-white rounded-full px-4 py-2 cursor-pointer"
											: "min-w-max border-2 border-[#7cb645] bg-white text-forground rounded-full px-4 py-2 cursor-pointer"
									}
									onClick={() => setActive(key as Category)}>
									{status}
								</button>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Contenu principal resserré */}
			<Suspense fallback={<div className="text-center py-12">Chargement des partenaires...</div>}>
				<PartnerCards partners={getPartners("fr")} active={active} lang="fr" />
			</Suspense>
		</main>
	);
}
