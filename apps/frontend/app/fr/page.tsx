"use client";
import Header from "@/components/Header";
import ProjetsSection from "@/lib/Caroussel";
import AnimatedCounter from "@/components/AnimatedCounter";
import styles from "@/styles/page.module.css";

export default function Home() {
  const LOGO_SRC = "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0000/0502/brand.gif?itok=ywZxw0rj";
  return <>
  <Header></Header>
   <main>
    <section className={styles.heroBanner}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Ensemble, construisons un avenir durable pour nos villages
        </h1>

        <p className={styles.arabicTitle} lang="ar">
          معًا نبني مستقبلًا مستدامًا لقرانا
        </p>

        <p className={styles.subtitle}>
          L'Association Asselda œuvre depuis 1996 pour l'environnement, le
          développement rural et le bien-être des familles de la région d'Asni,
          Al Haouz.
        </p>

        <div className={styles.buttons}>
          <a href="/projets" className={styles.primaryBtn}>
            Découvrir nos projets
          </a>

          <a href="/rejoindre" className={styles.secondaryBtn}>
            Nous soutenir
          </a>
        </div>
      </div>
    </section>

<section className={styles.stats_section}>
<div className={styles.stats_container}>
    <AnimatedCounter endValue={250} label="Projets réalisés" />
    <AnimatedCounter endValue={10000} label="Bénéficiaires" />
    <AnimatedCounter endValue={15} label="Années d'existence" />
    <AnimatedCounter endValue={45} label="Partenaires" />
  </div></section>
 
    <section className={styles.domainsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Nos domaines d'intervention</h2>
        <h3 className={styles.sectionSubtitle}>
          Trois axes majeurs pour un impact durable
        </h3>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardEmoji}>🌿</div>
            <h4 className={styles.cardTitle}>Environnement</h4>
            <p className={styles.cardText}>
              Protection de la biodiversité et sensibilisation aux enjeux
              écologiques pour un avenir durable.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardEmoji}>💡</div>
            <h4 className={styles.cardTitle}>Développement</h4>
            <p className={styles.cardText}>
              Accès à l'eau potable, infrastructures et soutien aux
              communautés pour un développement équitable.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardEmoji}>👨‍👩‍👧</div>
            <h4 className={styles.cardTitle}>Famille</h4>
            <p className={styles.cardText}>
              Accompagnement des familles, éducation des enfants et
              renforcement des liens intergénérationnels.
            </p>
          </div>
        </div>
      </div>
    </section>
 {ProjetsSection()}
<section className={styles.news_section}>
  <div className={styles.news_container}>
    <h2 className={styles.news_title}>Actualités & Événements</h2>

    <div className={styles.news_grid}>
      <article className={styles.news_card}>
        <h3 className={styles.news_card_title}>
          Renouvellement du bureau de l'association – Assemblée Générale du 3 février 2025
        </h3>
        <p className={styles.news_card_text}>
          Lors de l'AG extraordinaire du 3 février 2025, les membres ont élu le
          nouveau bureau exécutif pour un mandat de 5 ans, sous la présidence
          de M. Samir Ahram.
        </p>
      </article>

      <article className={styles.news_card}>
        <h3 className={styles.news_card_title}>
          Un an après le séisme : bilan de la solidarité et perspectives de reconstruction
        </h3>
        <p className={styles.news_card_text}>
          Retour sur les actions menées par l'association depuis le séisme
          dévastateur du 8 septembre 2023 : distribution d'aide, montage de
          tentes, soutien psychologique et suivi de la reconstruction.
        </p>
      </article>

      <article className={styles.news_card}>
        <h3 className={styles.news_card_title}>
          Résultats du programme Awrach 2022 : les ruelles de Douar Asselda rénovées
        </h3>
        <p className={styles.news_card_text}>
          Le programme national Awrach 2022 a permis le pavage complet des
          ruelles et places publiques des trois douars, améliorant
          significativement le cadre de vie des habitants.
        </p>
      </article>
    </div>

    <div className={styles.news_footer}>
      <a href="/actualites" className={styles.news_btn}>Toutes les actualités →</a>
    </div>
  </div>
</section>
<section className={styles.partners_section}>
  <div className={styles.partners_container}>
    <h2 className={styles.partners_title}>Nos Partenaires</h2>

    <p className={styles.partners_subtitle}>
      L'association agit en collaboration avec des institutions nationales et internationales
    </p>

    <div className={styles.partners_slider}>
      <div className={styles.partners_track}>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC} alt="AMSED" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src="/images/asni.png" alt="Commune d'Asni" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC} alt="Province d'Al Haouz" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC} alt="Wilaya de Marrakech" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC} alt="Ministère de l'Intérieur" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC}  alt="FMPS" className={styles.partner_logo} />
        </div>

        {/* duplication pour boucle infinie */}
        <div className={styles.partner_item}>
          <img src={LOGO_SRC}  alt="AMSED" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC}  alt="Commune d'Asni" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC} alt="Province d'Al Haouz" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC}  alt="Wilaya de Marrakech" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC}  alt="Ministère de l'Intérieur" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC}  alt="FMPS" className={styles.partner_logo} />
        </div>
      </div>
    </div>
  </div>
</section>
<section className={styles.cta_section}>
  <div className={styles.cta_container}>
    <h2 className={styles.cta_title}>
      Rejoignez le mouvement pour un développement durable
    </h2>

    <p className={styles.cta_subtitle}>
      Devenez membre, bénévole, ou soutenez nos projets par un don. Chaque
      geste compte.
    </p>

    <div className={styles.cta_banner}>
      <img
        src="https://picsum.photos/1600/900"
        alt="Jeune pousse symbole de développement durable"
        className={styles.cta_image}
      />

      <div className={styles.cta_overlay}>
        <a href="/Nous rejoindre" className={styles.cta_button}>
          Devenir membre →
        </a>

        <a href="/don" className={styles.cta_button}>
          Faire un don →
        </a>
      </div>
    </div>
  </div>
</section>





</main>
</>
 ;

}