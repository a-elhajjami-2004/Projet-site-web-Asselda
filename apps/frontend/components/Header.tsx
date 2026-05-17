"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getTranslation, Language } from "@/lib/translations";
import { useCurrentLanguage, buildLocalizedLink, getPath } from "@/lib/useLanguage";
import styles from "@/styles/Header.module.css";

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

	// Liste des liens du menu principal
	const navItems = [
		{ label: t("header.home"), href: link("/") },
		{ label: t("header.about"), href: link("/a-propos") },
		{ label: t("header.activities"), href: link("/activites") },
		{ label: t("header.projects"), href: link("/projets") },
		{ label: t("header.news"), href: link("/actualites") },
		{ label: t("header.gallery"), href: link("/gallerie") },
		{ label: t("header.partners"), href: link("/partenaires") },
		{ label: t("header.contact"), href: link("/contact") },
	];

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
				<a href="#accueil" className={styles.brand}>
					<span className={styles.logo}>
						<img src="/images/logo.png" alt="logo de l'association Asselda" />
					</span>
					<span className={styles.brandText}>
						<span className={styles.brandName}>{t("header.name")}</span>
						<span className={styles.brandSubtitle}></span>
					</span>
				</a>

				{/* Bouton hamburger mobile */}
				<button
					type="button"
					className={styles.mobileToggle}
					onClick={() => setIsMenuOpen((prev) => !prev)}
					aria-expanded={isMenuOpen}
					aria-label="Ouvrir le menu mobile">
					<span className={styles.hamburger}>
						<span />
						<span />
						<span />
					</span>
				</button>

				{/* Navigation principale */}
				<nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
					<ul className={styles.navList}>
						{navItems.map((item) => (
							<li key={item.label} className={styles.navItem}>
								<a href={item.href} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
									{item.label}
								</a>
							</li>
						))}

						{/* Sélecteur node langue affiché dans le menu mobile */}
						<li className={`${styles.navItem} ${styles.mobileOnly}`}>
							<div className={styles.languageSelector}>
								<button
									type="button"
									className={`${styles.languageButton} ${currentLang === "fr" ? styles.active : ""}`}
									onClick={() => {
										router.push(pushedPath("fr"));
										setIsMenuOpen(false);
									}}>
									FR
								</button>
								<button
									type="button"
									className={`${styles.languageButton} ${currentLang === "ar" ? styles.active : ""}`}
									onClick={() => {
										router.push(pushedPath("ar"));
										setIsMenuOpen(false);
									}}>
									AR
								</button>
							</div>
						</li>

						{/* Bouton CTA dans le menu mobile */}
						<li className={`${styles.navItem} ${styles.mobileOnly}`}>
							<a href={link("/rejoindre")} className={styles.ctaBtn} onClick={() => setIsMenuOpen(false)}>
								{t("header.join")}
							</a>
						</li>
					</ul>
				</nav>

				{/* Actions visibles sur desktop */}
				<div className={styles.actions}>
					<div className={styles.languageDesktop}>
						<button
							type="button"
							className={`${styles.languageButton} ${currentLang === "fr" ? styles.active : ""}`}
							onClick={() => router.push(pushedPath("fr"))}>
							FR
						</button>
						<button
							type="button"
							className={`${styles.languageButton} ${currentLang === "ar" ? styles.active : ""}`}
							onClick={() => router.push(pushedPath("ar"))}>
							AR
						</button>
					</div>

					<a href={link("/rejoindre")} className={styles.ctaBtn}>
						{t("header.join")}
					</a>
				</div>
			</div>
		</header>
	);
}
