"use client";
import Header from "@/components/Header";
import styles from "@/styles/about.module.css";
export default function Home() {

  return <>

<main>
  <Header/>
  <section className={styles.section_definition}>
    <h1>À propos de l’association Asselda</h1>

    <div className={styles.definition}>
      <div className={styles.text}>
        <p>
          Depuis 1996, l'Association Asselda s'engage au quotidien pour améliorer
          les conditions de vie des habitants de Douar Asselda et de la commune
          d'Asni, avec une vision de développement durable intégré.
        </p>
      </div>

      <div className={styles.image}>
        <img
          src="/images/logo.png"
          alt="logo de l'association Asselda"
        />
      </div>
    </div>

    <div className={styles.history_asselda}>
      <p>
        L'Association Asselda pour l'Environnement, le Développement Rural et la
        Famille (en abrégé « Association Asselda » ou « AAEDRF ») est une
        organisation de la société civile fondée en 1996, dont le siège social
        est établi à Douar Asselda, commune d'Asni, province d'Al Haouz,
        Marrakech – Maroc.
      </p>

      <p>
        Reconnue officiellement et déposée auprès des autorités locales
        (récépissé de dépôt final signé par le Caïd d'Asni le 11 mars 2025),
        l'association œuvre en parfaite conformité avec le Dahir n° 1-58-376 du
        15 novembre 1958 réglementant le droit d'association, tel qu'il a été
        modifié et complété.
      </p>
    </div>
  </section>
<section className={styles.vision_mission_section}>
  <div className={styles.vision_mission_container}> 
     <h2>Notre Vision et Mission</h2>
    <div className={styles.vision_mission_boxes}>
      <div className={styles.vision_box}>
        <div className={styles.box_header}>
          <span className={styles.box_icon}>🎯</span>
          <h3 className={styles.box_title}>Notre Vision</h3>
        </div>

        <div className={styles.box_content}>
          <p>
            Contribuer au développement du milieu rural et à l'amélioration des
            conditions de vie de la population rurale, grâce à des approches
            environnementales, sociales, éducatives et un développement durable
            fondé sur le partenariat, la bonne gouvernance et la consolidation
            des valeurs de solidarité et de responsabilité.
          </p>
        </div>
      </div>

      <div className={styles.mission_box}>
        <div className={styles.box_header}>
          <span className={styles.box_icon}>📄</span>
          <h3 className={styles.box_title}>Notre Mission</h3>
        </div>

        <div className={styles.box_content}>
          <p>
            Mettre en œuvre des projets environnementaux, de développement et
            des services sociaux au profit des habitants de Douar Asselda, en
            mettant l'accent sur la fourniture d'eau potable,
            l'assainissement, la collecte des déchets ménagers, la
            réhabilitation des espaces ruraux, l'encouragement des initiatives
            solidaires et du travail bénévole.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className={styles.objectifs_section}>
  <div className={styles.objectifs_container}>
    <h2 className={styles.objectifs_title}>
      Nos objectifs
    </h2>

    <div className={styles.objectifs_grid}>
      <article className={styles.objectif_card}>
        <h3 className={styles.objectif_card_title}>
          01 – Participation aux programmes
        </h3>
        <p className={styles.objectif_card_text}>
          Contribuer à tous les programmes sociaux, économiques, culturels,
          sportifs et de santé, et encourager les projets environnementaux.
        </p>
      </article>

      <article className={styles.objectif_card}>
        <h3 className={styles.objectif_card_title}>
          02 – Services sociaux ruraux
        </h3>
        <p className={styles.objectif_card_text}>
          Améliorer les services sociaux liés au milieu rural et œuvrer à
          l'essor de la région sur tous les plans, pour un développement
          intégré et durable centré sur l'humain.
        </p>
      </article>

      <article className={styles.objectif_card}>
        <h3 className={styles.objectif_card_title}>
          03 – Femmes et Enfants
        </h3>
        <p className={styles.objectif_card_text}>
          Accorder une attention particulière aux femmes, aux enfants et aux
          personnes aux besoins spécifiques. Soutenir l'alphabétisation, la
          formation professionnelle et les activités génératrices de revenus.
        </p>
      </article>

      <article className={styles.objectif_card}>
        <h3 className={styles.objectif_card_title}>
          04 – Démocratie participative
        </h3>
        <p className={styles.objectif_card_text}>
          Contribuer en tant que force de proposition active dans le cadre des
          approches participatives lors de l'élaboration et l'évaluation des
          projets et décisions des collectivités et autorités.
        </p>
      </article>

      <article className={styles.objectif_card}>
        <h3 className={styles.objectif_card_title}>
          05 – Coordination institutionnelle
        </h3>
        <p className={styles.objectif_card_text}>
          Coordonner avec les autorités locales, régionales et les ONG pour
          réaliser des projets de développement communs dans le cadre de
          conventions de partenariat.
        </p>
      </article>

      <article className={styles.objectif_card}>
        <h3 className={styles.objectif_card_title}>
          06 – Initiative nationale
        </h3>
        <p className={styles.objectif_card_text}>
          Contribuer à la mise en œuvre du Programme national d'Initiative
          nationale pour le développement humain (INDH) au niveau local.
        </p>
      </article>
    </div>
  </div>
</section>
<section className={styles.bureau_section}>
  <div className={styles.bureau_container}>
    <h2 className={styles.bureau_title}>
       Bureau Exécutif (Mandat 2025)
    </h2>

    <p className={styles.bureau_subtitle}>
      Tableau des membres élus lors de l'AG du 3 février 2025.
    </p>

    <div className={styles.table_wrapper}>
      <table className={styles.bureau_table}>
        <thead>
          <tr>
            <th>N°</th>
            <th>Nom complet</th>
            <th>Fonction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Samir Ahram (سمير أهرام)</td>
            <td >Président</td>
          </tr>
          <tr>
            <td>02</td>
            <td>Moulay Lahcen Maroi (مولاي لحسن مروقي)</td>
            <td>1er Vice-Président</td>
          </tr>
          <tr>
            <td>03</td>
            <td>Yassine Baouti (ياسين باوتي)</td>
            <td>2e Vice-Président</td>
          </tr>
          <tr>
            <td>04</td>
            <td>Abderrahim Darrih (عبد الرحيم الصاريح)</td>
            <td>Secrétaire Général</td>
          </tr>
          <tr>
            <td>05</td>
            <td>Abdelaziz Benzaina (عبد العزيز بنزينة)</td>
            <td>Secrétaire Général Adj.</td>
          </tr>
          <tr>
            <td>06</td>
            <td>Mohamed Baouti (محمد باوتي)</td>
            <td>Trésorier</td>
          </tr>
          <tr>
            <td>07</td>
            <td>Youssef Id Braim (يوسف إد ابرايم)</td>
            <td>Trésorier Adjoint</td>
          </tr>
          <tr>
            <td>08</td>
            <td>Hassan ait elmokef (حسن أيت موكف)</td>
            <td>Conseiller</td>
          </tr>
 <tr>
            <td>09</td>
            <td>Lahcen ouarbane (لحسن واعربان)</td>
            <td>Conseiller</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Rachid id abdellah</td>
            <td>Conseiller</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Abderrahim agzoul</td>
            <td>Conseiller</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Hamid Iznagen</td>
            <td>Conseiller</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Abdellah amadid</td>
            <td>Conseiller</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section className={styles.values_section}>
  <div className={styles.values_container}>
    <h2 className={styles.values_title}> Nos Valeurs</h2>

    <div className={styles.values_grid}>
      <article className={styles.value_card}>
        <h3 className={styles.value_name}>Solidarité</h3>
        <p className={styles.value_text}>
          Agir ensemble, soutenir les plus vulnérables et renforcer le tissu
          social de nos communautés.
        </p>
      </article>

      <article className={styles.value_card}>
        <h3 className={styles.value_name}>Durabilité</h3>
        <p className={styles.value_text}>
          Concevoir des projets respectueux de l’environnement, viables sur le
          long terme et profitables aux générations futures.
        </p>
      </article>

      <article className={styles.value_card}>
        <h3 className={styles.value_name}>Transparence</h3>
        <p className={styles.value_text}>
          Gérer les ressources avec honnêteté, rendre compte de nos actions et
          maintenir une gouvernance claire.
        </p>
      </article>

      <article className={styles.value_card}>
        <h3 className={styles.value_name}>Participation</h3>
        <p className={styles.value_text}>
          Impliquer les habitants dans toutes les décisions qui les concernent,
          en valorisant leurs savoirs et leurs initiatives.
        </p>
      </article>
    </div>
  </div>
</section>
<section className={styles.docs_section}>
  <div className={styles.docs_container}>
    <h2 className={styles.docs_title}>Documents téléchargeables</h2>

    <div className={styles.docs_panel}>
      <a href="/documents/recepisse-depot.pdf" className={styles.doc_card}>
        <h3 className={styles.doc_name}>Récépissé de dépôt (PDF)</h3>
        <p className={styles.doc_text}>
          Récépissé final délivré par le Caïd d'Asni – 11 mars 2025
        </p>
      </a>

      <a href="/documents/proces-verbal-ag.pdf" className={styles.doc_card}>
        <h3 className={styles.doc_name}>Procès-verbal de l'AG (PDF)</h3>
        <p className={styles.doc_text}>
          Compte rendu de l'Assemblée Générale du 3 février 2025
        </p>
      </a>

      <a href="/documents/statuts-association.pdf" className={styles.doc_card}>
        <h3 className={styles.doc_name}>Statuts de l'association (PDF)</h3>
        <p className={styles.doc_text}>
          Texte complet du règlement intérieur et de l'acte de fondation –
          version 2025
        </p>
      </a>

      <a href="/documents/fiche-technique.pdf" className={styles.doc_card}>
        <h3 className={styles.doc_name}>Fiche technique (PDF)</h3>
        <p className={styles.doc_text}>
          Résumé institutionnel : objectifs, axes d'intervention, contacts
        </p>
      </a>

    </div>
  </div>
</section>







</main>
</>
 

}