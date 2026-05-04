"use client";

import { useEffect, useState } from "react";import { useRouter, usePathname } from "next/navigation";import styles from "@/styles/Header.module.css";

// Liste des liens du menu principal
const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Àpropos", href: "/a-propos" },
  { label: "Activités", href: "/activites" },
  { label: "Projets", href: "/projets" },
  { label: "Actualités", href: "/actualites" },
  { label: "Galerie", href: "/galerie" },
  { label: "Partenaires", href: "/partenaires" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  // État du menu mobile (ouvert / fermé)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // État du scroll pour ajouter une ombre au header quand on descend
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // Détermine la langue active basée sur le chemin actuel
  const selectedLanguage = pathname.startsWith('/ar') ? 'AR' : 'FR';

  // Supprime le suffixe de langue /fr ou /ar pour reconstruire la route locale
  const currentPathWithoutLocale = pathname.replace(/\/(fr|ar)$/, '') || '/';

  const buildLocalePath = (locale: 'FR' | 'AR', path = currentPathWithoutLocale) => {
    const suffix = locale === 'FR' ? 'fr' : 'ar';
    const normalizedPath = path.replace(/\/$/, '') || '/';
    return normalizedPath === '/' ? `/${suffix}` : `${normalizedPath}/${suffix}`;
  };

  const buildLocalizedNavPath = (path: string) => {
    return buildLocalePath(selectedLanguage, path);
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
        <a href="#accueil" className={styles.brand}>
          <span className={styles.logo}> 
     <img 
          src="/images/logo.png"
          alt="logo de l'association Asselda"
        />
     </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>Association Asselda</span>
            <span className={styles.brandSubtitle}></span>
          </span>
        </a>

        {/* Bouton hamburger mobile */}
        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label="Ouvrir le menu mobile"
        >
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
                <a
                  href={buildLocalizedNavPath(item.href)}
                  className={styles.navLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* Sélecteur node langue affiché dans le menu mobile */}
            <li className={`${styles.navItem} ${styles.mobileOnly}`}>
              <div className={styles.languageSelector}>
                <button
                  type="button"
                  className={`${styles.languageButton} ${selectedLanguage === 'FR' ? styles.active : ''}`}
                  onClick={() => {
                    router.push(buildLocalePath('FR'));
                    setIsMenuOpen(false);
                  }}
                >
                  FR
                </button>
                <button
                  type="button"
                  className={`${styles.languageButton} ${selectedLanguage === 'AR' ? styles.active : ''}`}
                  onClick={() => {
                    router.push(buildLocalePath('AR'));
                    setIsMenuOpen(false);
                  }}
                >
                  AR
                </button>
              </div>
            </li>

            {/* Bouton CTA dans le menu mobile */}
            <li className={`${styles.navItem} ${styles.mobileOnly}`}>
              <a href={buildLocalizedNavPath('/nous-rejoindre')} className={styles.ctaBtn} onClick={() => setIsMenuOpen(false)}>
                Nous rejoindre
              </a>
            </li>
          </ul>
        </nav>

        {/* Actions visibles sur desktop */}
        <div className={styles.actions}>
          <div className={styles.languageDesktop}>
            <button
              type="button"
              className={`${styles.languageButton} ${selectedLanguage === 'FR' ? styles.active : ''}`}
              onClick={() => router.push(buildLocalePath('FR'))}
            >
              FR
            </button>
            <button
              type="button"
              className={`${styles.languageButton} ${selectedLanguage === 'AR' ? styles.active : ''}`}
              onClick={() => router.push(buildLocalePath('AR'))}
            >
              AR
            </button>
          </div>

          <a href="/nous-rejoindre" className={styles.ctaBtn}>
            Nous rejoindre
          </a>
        </div>
      </div>
    </header>
  );
}
