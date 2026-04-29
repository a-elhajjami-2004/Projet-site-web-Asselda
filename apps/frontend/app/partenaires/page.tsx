import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Partner {
  id: string;
  logo: string;
  logoShape?: "circle" | "square";
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  description: string;
  cardColor: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const internationales: Partner[] = [
  {
    id: "amsed",
    logo: "/images/partners/amsed.png",
    logoShape: "square",
    tag: "AMSED",
    tagColor: styles.tagBlue,
    title: "partenariat financier & technique",
    subtitle: "Association Maroco-Suisse pour le Développement",
    description:
      "Partenaire principal dans le projet d'assainissement liquide de 12 000 000 DH — une collaboration exemplaire entre ONG internationale et association locale.",
    cardColor: styles.cardBlue,
  },
  {
    id: "fmps",
    logo: "/images/partners/fmps.png",
    logoShape: "square",
    tag: "FMPS",
    tagColor: styles.tagOrange,
    title: "Organisation à but non lucratif",
    subtitle: "",
    description:
      "Partenaire dans les domaines de l'éducation préscolaire et du soutien à la petite enfance dans la commune d'Asni.",
    cardColor: styles.cardOrange,
  },
];

const institutionnelles: Partner[] = [
  {
    id: "commune",
    logo: "/images/partners/commune-asni.png",
    logoShape: "circle",
    tag: "Commune d'Asni",
    tagColor: styles.tagGray,
    title: "Collectivité territoriale",
    subtitle: "",
    description:
      "Partenaire institutionnel local assurant la coordination administrative et le soutien aux projets d'infrastructure communautaire.",
    cardColor: styles.cardGreen,
  },
  {
    id: "province",
    logo: "/images/partners/province-alhaouz.png",
    logoShape: "square",
    tag: "Province d'Al Haouz",
    tagColor: styles.tagYellow,
    title: "Tutelle administrative",
    subtitle: "",
    description:
      "Tutelle provinciale qui soutient les initiatives de développement rural et facilite l'accès aux programmes nationaux.",
    cardColor: styles.cardYellow,
  },
];

const nationales: Partner[] = [
  {
    id: "wilaya",
    logo: "/images/partners/region-marrakech.png",
    logoShape: "square",
    tag: "Wilaya de Marrakech",
    tagColor: styles.tagPink,
    title: "Autorité régionale",
    subtitle: "",
    description:
      "Autorité régionale coordonnant les actions de développement au niveau de la région Marrakech-Safi.",
    cardColor: styles.cardPink,
  },
  {
    id: "ministere",
    logo: "/images/partners/ministere-interieur.png",
    logoShape: "square",
    tag: "Ministère de l'Intérieur",
    tagColor: styles.tagGrayGreen,
    title: "Cadre légal & institutionnel",
    subtitle: "",
    description:
      "Partenaire étatique via la Direction des Affaires Rurales, soutenant notamment le programme national Awrach 2022.",
    cardColor: styles.cardGreenLight,
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────
function CategoryBadge({ label }: { label: string }) {
  return (
    <div className={styles.categoryBadgeWrapper}>
      <span className={styles.categoryBadge}>{label}</span>
    </div>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className={styles.partnerCol}>
      {/* Logo */}
      <div className={styles.logoWrapper}>
        <img
          src={partner.logo}
          alt={partner.tag}
          className={
            partner.logoShape === "circle"
              ? styles.logoCircle
              : styles.logoSquare
          }
        />
      </div>

      {/* Info card */}
      <div className={`${styles.infoCard} ${partner.cardColor}`}>
        <span className={`${styles.infoTag} ${partner.tagColor}`}>
          {partner.tag}
          {partner.subtitle && (
            <span className={styles.infoTagSub}> {partner.subtitle}</span>
          )}
        </span>
        <h3 className={styles.infoTitle}>{partner.title}</h3>
        <p className={styles.infoDesc}>{partner.description}</p>
      </div>
    </div>
  );
}

function PartnerSection({
  category,
  partners,
}: {
  category: string;
  partners: Partner[];
}) {
  return (
    <section className={styles.section}>
      <CategoryBadge label={category} />
      <div className={styles.partnerGrid}>
        {partners.map((p) => (
          <PartnerCard key={p.id} partner={p} />
        ))}
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function PartenairesPage() {
  return (
    <main className={styles.main}>
      {/* ── Hero Header ── */}
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Nos Partenaires</h1>
        <p className={styles.heroDesc}>
          L'Association Asselda agit en collaboration étroite avec des
          institutions publiques, des organisations nationales et
          internationales pour maximiser l'impact de ses actions.
        </p>
        <p className={styles.heroCat}>catégories</p>
      </header>

      {/* ── Partner Sections ── */}
      <div className={styles.sectionsWrapper}>
        <PartnerSection category="internationales" partners={internationales} />
        <PartnerSection category="institutionnelles" partners={institutionnelles} />
        <PartnerSection category="nationales" partners={nationales} />
      </div>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Devenir Partenaire</h2>
        <p className={styles.ctaDesc}>
          Vous souhaitez soutenir le développement durable de la région d'Asni ?
          <br />
          Contactez-nous pour explorer les opportunités de partenariat.
        </p>
        <Link href="/contact" className={styles.ctaBtn}>
          Nous contacter
        </Link>
      </section>

     
    </main>
  );
}