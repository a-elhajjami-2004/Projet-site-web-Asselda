import React from "react";
import styles from "@/styles/partenaires.module.css";
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
    title: "شراكة مالية وتقنية",
    subtitle: "الجمعية المغربية السويسرية للتنمية",
    description:
      "الشريك الرئيسي في مشروع الصرف الصحي السائل بقيمة 12,000,000 درهم — تعاون نموذجي بين منظمة دولية غير حكومية وجمعية محلية.",
    cardColor: styles.cardBlue,
  },
  {
    id: "fmps",
    logo: "/images/partners/fmps.png",
    logoShape: "square",
    tag: "FMPS",
    tagColor: styles.tagOrange,
    title: "منظمة غير ربحية",
    subtitle: "",
    description:
      "شريك في مجالات التعليم ما قبل المدرسي ودعم الطفولة المبكرة في جماعة أسني.",
    cardColor: styles.cardOrange,
  },
];

const institutionnelles: Partner[] = [
  {
    id: "commune",
    logo: "/images/partners/commune-asni.png",
    logoShape: "circle",
    tag: "جماعة أسني",
    tagColor: styles.tagGray,
    title: "جماعة ترابية",
    subtitle: "",
    description:
      "شريك مؤسسي محلي يضمن التنسيق الإداري ودعم مشاريع البنية التحتية المجتمعية.",
    cardColor: styles.cardGreen,
  },
  {
    id: "province",
    logo: "/images/partners/province-alhaouz.png",
    logoShape: "square",
    tag: "إقليم الحوز",
    tagColor: styles.tagYellow,
    title: "وصاية إدارية",
    subtitle: "",
    description:
      "الوصاية الإقليمية التي تدعم مبادرات التنمية القروية وتيسر الوصول إلى البرامج الوطنية.",
    cardColor: styles.cardYellow,
  },
];

const nationales: Partner[] = [
  {
    id: "wilaya",
    logo: "/images/partners/region-marrakech.png",
    logoShape: "square",
    tag: "ولاية مراكش",
    tagColor: styles.tagPink,
    title: "سلطة جهوية",
    subtitle: "",
    description:
      "السلطة الجهوية المنسقة لأعمال التنمية على مستوى جهة مراكش-آسفي.",
    cardColor: styles.cardPink,
  },
  {
    id: "ministere",
    logo: "/images/partners/ministere-interieur.png",
    logoShape: "square",
    tag: "وزارة الداخلية",
    tagColor: styles.tagGrayGreen,
    title: "الإطار القانوني والمؤسسي",
    subtitle: "",
    description:
      "شريك حكومي عبر مديرية الشؤون القروية، يدعم بشكل خاص البرنامج الوطني أوراش 2022.",
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
      {/* الشعار */}
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

      {/* بطاقة المعلومات */}
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

// ─── الصفحة ────────────────────────────────────────────────────────────────────
export default function PartenairesPage() {
  return (
    <main className={styles.main}>
      {/* ── رأس الصفحة ── */}
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>شركاؤنا</h1>
        <p className={styles.heroDesc}>
          تعمل جمعية أسلدا بتعاون وثيق مع مؤسسات عمومية ومنظمات وطنية ودولية
          لتعظيم أثر أعمالها.
        </p>
        <p className={styles.heroCat}>الفئات</p>
      </header>

      {/* ── أقسام الشركاء ── */}
      <div className={styles.sectionsWrapper}>
        <PartnerSection category="دولية" partners={internationales} />
        <PartnerSection category="مؤسسية" partners={institutionnelles} />
        <PartnerSection category="وطنية" partners={nationales} />
      </div>

      {/* ── دعوة للعمل ── */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>كن شريكاً</h2>
        <p className={styles.ctaDesc}>
          هل تودّ دعم التنمية المستدامة لمنطقة أسني؟
          <br />
          تواصل معنا لاستكشاف فرص الشراكة.
        </p>
        <Link href="/contact" className={styles.ctaBtn}>
          اتصل بنا
        </Link>
      </section>
    </main>
  );
}
