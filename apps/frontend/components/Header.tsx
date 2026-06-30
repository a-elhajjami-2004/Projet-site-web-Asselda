"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { getTranslation, languages, languageLabel, Language } from "@/lib/translations";
import { useCurrentLanguage, buildLocalizedLink, getPath } from "@/lib/useLanguage";
import styles from "@/styles/header.module.css";

export default function Header() {
	// État du menu mobile (ouvert / fermé)
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// État du scroll pour ajouter une ombre au header quand on descend
	const [isScrolled, setIsScrolled] = useState(false);

	const router = useRouter();

	const currentLang = useCurrentLanguage();
	const pathname = usePathname();
	const t = (key: string) => getTranslation(currentLang, key);
	const link = (path: string) => buildLocalizedLink(path, currentLang);
	const pushedPath = (lang: Language) => buildLocalizedLink(getPath(pathname), lang);

	const [selectedLanguage, setSelectedLanguage] = useState(currentLang);

	const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
		const newLanguage = event.target.value as Language;
		setSelectedLanguage(newLanguage);
		router.push(pushedPath(newLanguage));
	};

	// Liste des liens du menu principal
	const navItems: { [key: string]: { label: string; href: string; cta?: boolean } } = {
		home: { label: t("header.home"), href: link("/") },
		about: { label: t("header.about"), href: link("/a-propos") },
		activities: { label: t("header.activities"), href: link("/activites") },
		projects: { label: t("header.projects"), href: link("/projets") },
		news: { label: t("header.news"), href: link("/actualites") },
		gallery: { label: t("header.gallery"), href: link("/galerie") },
		partners: { label: t("header.partners"), href: link("/partenaires") },
		contact: { label: t("header.contact"), href: link("/contact") },
		join: { label: t("header.join"), href: link("/rejoindre"), cta: true },
	};

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);

		// Vérifie immédiatement l'état du scroll et ajoute l'écouteur
		handleScroll();
		window.addEventListener("scroll", handleScroll);

		// Nettoyage lorsque le composant est démonté
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
			{/* Conteneur principal du header */}
			<div className={styles.inner}>
				{/* Logo + nom de l'association */}
				<Link href={navItems.home.href} className={styles.brand}>
					<span className={styles.logo}>
						<img src="/images/logo.png" alt="Logo Association Asselda" />
					</span>
					<span className={styles.brandText}>
						<span className={styles.brandName}>{t("header.name")}</span>
					</span>
				</Link>

				{/* Navigation principale */}
				<nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
					{/* Bouton hamburger mobile */}
					<button
						type="button"
						className={styles.hamburgerMenu}
						onClick={() => setIsMenuOpen((prev) => !prev)}
						aria-expanded={isMenuOpen}
						aria-label={t("header.openNavMenuLabel")}>
						<GiHamburgerMenu />
					</button>

					<ul className={styles.navList}>
						{Object.entries(navItems).map(([key, { label, href, cta }]) => (
							<li key={key} className={styles.navItem}>
								<Link
									href={href}
									className={`${styles.navLink} ${cta ? styles.ctaBtn : ""}`}
									onClick={() => setIsMenuOpen(false)}>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Sélecteur node langue affiché dans le menu mobile */}
				<div className={styles.languageSelector}>
					{/* <button
						type="button"
						className={`${styles.languageButton} ${currentLang === "fr" ? styles.active : ""}`}
						onClick={() => {
							router.push(pushedPath("fr"));
							setIsMenuOpen(false);
						}}>
						FR
					</button> */}
					<select
						id="languageSwitcher"
						aria-label={t("header.changeLanguageLabel")}
						className={styles.languageSwitcher}
						value={selectedLanguage}
						onChange={changeLanguage}>
						{languages.map((lang) => (
							<option key={lang} value={lang}>
								{languageLabel.get(lang)}
							</option>
						))}
					</select>
				</div>
			</div>
		</header>
	);
}
