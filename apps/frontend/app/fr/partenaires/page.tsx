"use client";
import { useState } from "react";
import React from "react";
import styles from "@/styles/partenaires.module.css";
import Image from "next/image";
import Link from "next/link";

type Category = "all" | "intl" | "inst" | "nat";

interface Partner {
  id: string;
  cat: Category;
  initials: string;
  logoClass: string;
  logoUrl?: string; 
  name: string;
  title: string;
  tagLabel: string;
  tagClass: string;
  description: string;
  statIcon: string;
  statLabel: string;
}

const PARTNERS: Partner[] = [
  {
    id: "amsed",
    cat: "intl",
    initials: "AM",
    logoClass: "logo-green",
    logoUrl: "/Images/partners/amsed.png", 
    name: "AMSED",
    title: "Partenariat financier & technique",
    tagLabel: "Association Maroco-Suisse pour le Développement",
    tagClass: "tag-green",
    description:
      "Partenaire principal dans le projet d'assainissement liquide de 12 000 000 DH — une collaboration exemplaire entre ONG internationale et association locale.",
    statIcon: "ti-coin",
    statLabel: "12 000 000 DH",
  },
  {
    id: "fmps",
    cat: "intl",
    initials: "FM",
    logoClass: "logo-amber",
    logoUrl: "/Images/partners/fmps.png",
    name: "FMPS",
    title: "Organisation à but non lucratif",
    tagLabel: "Fondation Marocaine du PréScolaire",
    tagClass: "tag-amber",
    description:
      "Partenaire dans les domaines de l'éducation préscolaire et du soutien à la petite enfance dans la commune d'Asni.",
    statIcon: "ti-school",
    statLabel: "Éducation préscolaire",
  },
  {
    id: "commune-asni",
    cat: "inst",
    initials: "CA",
    logoClass: "logo-blue",
    logoUrl: "/Images/partners/commune-asni.png",
    name: "Commune d'Asni",
    title: "Collectivité territoriale",
    tagLabel: "Partenaire local",
    tagClass: "tag-blue",
    description:
      "Partenaire institutionnel local assurant la coordination administrative et le soutien aux projets d'infrastructure communautaire.",
    statIcon: "ti-building",
    statLabel: "Niveau communal",
  },
  {
    id: "al-haouz",
    cat: "inst",
    initials: "AH",
    logoClass: "logo-pink",
    logoUrl: "/Images/partners/province-alhaouz.png",
    name: "Province d'Al Haouz",
    title: "Tutelle administrative",
    tagLabel: "Niveau provincial",
    tagClass: "tag-pink",
    description:
      "Tutelle provinciale qui soutient les initiatives de développement rural et facilite l'accès aux programmes nationaux.",
    statIcon: "ti-map",
    statLabel: "Province Al Haouz",
  },
  {
    id: "wilaya",
    cat: "nat",
    initials: "WM",
    logoClass: "logo-coral",
    logoUrl: "/Images/partners/region-marrakech.png",
    name: "Wilaya de Marrakech",
    title: "Autorité régionale",
    tagLabel: "Région Marrakech-Safi",
    tagClass: "tag-teal",
    description:
      "Autorité régionale coordonnant les actions de développement au niveau de la région Marrakech-Safi.",
    statIcon: "ti-hierarchy",
    statLabel: "Niveau régional",
  },
  {
    id: "ministere",
    cat: "nat",
    initials: "MI",
    logoClass: "logo-blue",
    logoUrl: "/Images/partners/ministere-interieur.png",
    name: "Ministère de l'Intérieur",
    title: "Cadre légal & institutionnel",
    tagLabel: "Direction des Affaires Rurales",
    tagClass: "tag-purple",
    description:
      "Partenaire étatique via la Direction des Affaires Rurales, soutenant notamment le programme national Awrach 2022.",
    statIcon: "ti-file-certificate",
    statLabel: "Programme Awrach 2022",
  },
];

const SECTIONS: { cat: Exclude<Category, "all">; label: string; badgeClass: string; icon: string }[] = [
  { cat: "intl", label: "internationales", badgeClass: "badge-intl", icon: "ti-world" },
  { cat: "inst", label: "institutionnelles", badgeClass: "badge-inst", icon: "ti-building-community" },
  { cat: "nat",  label: "nationales",        badgeClass: "badge-nat",  icon: "ti-flag" },
];

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <div className={styles['partner-card']}>
      <div className={styles['card-header']}>
        
        {/* MODIFICATION ICI : On retire la div conteneur .card-logo */}
        {partner.logoUrl ? (
          <Image 
            src={partner.logoUrl} 
            alt={`Logo ${partner.name}`}
            width={70} 
            height={60} 
            className={styles['partner-logo-free']} 
            priority
          />
        ) : (
          <div className={styles['partner-initials-free']}>
            {partner.initials}
          </div>
        )}

        <div className={styles['card-info']}>
          <div className={styles['card-name']}>{partner.name}</div>
          <div className={styles['card-title']}>{partner.title}</div>
        </div>
      </div>
      <span className={`${styles['card-tag']} ${styles[partner.tagClass]}`}>{partner.tagLabel}</span>
      <p className={styles['card-desc']}>{partner.description}</p>
      <div className={styles['stats-bar']}>
        <span className={styles.stat}>
          <i className={`ti ${partner.statIcon}`} aria-hidden="true" />
          {partner.statLabel}
        </span>
      </div>
    </div>
  );
}

export default function PartenairesPage() {
  const [active, setActive] = useState<Category>("all");

  const filters: { value: Category; label: string }[] = [
    { value: "all",  label: "Tous" },
    { value: "intl", label: "Internationales" },
    { value: "inst", label: "Institutionnelles" },
    { value: "nat",  label: "Nationales" },
  ];

  return (
    <div className={styles.page}>
      {/* Hero resserré */}
      <div className={styles.hero}>
        <h1>Nos partenaires</h1>
        <p>
          L'Association Asselda agit en collaboration étroite avec des institutions
          publiques, des organisations nationales et internationales pour maximiser
          l'impact de ses actions.
        </p>
        <div className={styles['filter-bar']}>
          {filters.map((f) => (
            <button
              key={f.value}
              className={`${styles['filter-btn']} ${active === f.value ? styles.active : ""}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contenu principal resserré */}
      <div className={styles.content}>
        {SECTIONS.filter((s) => active === "all" || active === s.cat).map((section) => (
          <div key={section.cat} className={styles.section}>
            <div className={styles['section-header']}>
              <div className={styles['section-line']} />
              <span className={`${styles['section-badge']} ${styles[section.badgeClass]}`}>
                <i className={`ti ${section.icon}`} aria-hidden="true" />
                {section.label}
              </span>
              <div className={styles['section-line']} />
            </div>
            <div className={styles['cards-grid']}>
              {PARTNERS.filter((p) => p.cat === section.cat).map((partner) => (
                <PartnerCard key={partner.id} partner={partner} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}