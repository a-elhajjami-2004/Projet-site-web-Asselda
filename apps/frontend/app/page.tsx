
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
 

  return (
    <main className={styles.main}>

      {/* ===== HERO ===== */}
      <section className={styles.heroActualites}>
        <h1 className={styles.title}>Actualités / Événements</h1>
 
         <p className={styles.heroSubtitle}>
          Restez informé des dernières nouvelles, projets, événements et communiqués de l'Association Asselda.
        </p>

        <div className={styles.categoriesBar}>
          <span className={styles.catLabel}>Catégories</span>
          <nav className={styles.catLinks}>
            <a href="#">Toutes</a> |
            <a href="#">Projets</a> |
            <a href="#">Événements</a> |
            <a href="#">Communiqués</a> |
            <a href="#">Solidarité</a>
          </nav>
        </div>

        
        <div className={styles.searchBox}>
          <input type="text" placeholder="Rechercher une actualité..." />
          <span className={styles.searchArrow}>→</span>
        </div>
      


        <div className={styles.heroImage}>
          <Image
            src="/images/image-actu.png"
            alt="Bénévoles"
            width={1200}
            height={500}
          />
        </div>
       
        <a href="#actualites" className={`${styles.btn} ${styles.btnOutlineDark}`}>
          Blog d'actualités →
        </a>
      </section>

      {/* ===== ACTU 1 ===== */}
      <section className={styles.actuCard} id="actualites">

        <div className={styles.cardImages}>
          <Image src="/images/ag1.jpg" alt="" width={580} height={280} />
          <Image src="/images/ag2.jpg" alt="" width={580} height={280} />
        </div>

        <div className={`${styles.cardTexts} ${styles.twoCol}`}>
          <div className={styles.cardTitleBox}>
            <p>
             Renouvellement du bureau de l'association – Assemblée Générale du 3 février 2025
            </p>
          </div>

          <div className={styles.cardDescBox}>
            <p>
              Lors de l'AG extraordinaire du 3 février 2025, les membres ont élu 
              le nouveau bureau exécutif pour un mandat de 5 ans, sous la présidence de M. Samir Ahram.
            </p>
          </div>
        </div>

      </section>

      {/* ===== ACTU 2 ===== */}
      <section className={styles.actuCard}>

        <div className={styles.cardImageSingle}>
          <Image src="/images/seisme.jpg" alt="" width={10000} height={240}/>
        </div>

        <div className={`${styles.cardTexts} ${styles.oneCol}`}>
          <div className={styles.cardTitleBox}>
            <p>
              Un an après le séisme : bilan de la solidarité et perspectives de reconstruction
            </p>
          </div>
        </div>

      </section>

      {/* ===== ACTU 3 ===== */}
      <section className={styles.actuCard}>

        <div className={styles.cardImages}>
          <Image src="/images/recons1.jpg" alt="" width={580} height={280} />
          <Image src="/images/recons2.jpg" alt="" width={580} height={280} />
        </div>

        <div className={styles.cardTexts}>
          <div className={styles.cardTitleBox}>
            <p>
             Retour sur les actions menées par l'association depuis le séisme dévastateur du 8 septembre 2023 : 
             distribution d'aide, montage de tentes, soutien psychologique et suivi de la reconstruction.
            </p>
          </div>
        </div>

      </section>

      {/* ===== ACTU 4 ===== */}
      <section className={styles.actuCard}>

        <div className={styles.cardImages}>
          <Image src="/images/awrach1.jpg" alt="" width={580} height={280} />
          <Image src="/images/awrach2.jpg" alt="" width={580} height={280} />
        </div>

        <div className={`${styles.cardTexts} ${styles.twoCol}`}>
          <div className={styles.cardTitleBox}>
            <p>Résultats du programme Awrach 2022 : les ruelles de Douar Asselda rénovées</p>
          </div>

          <div className={styles.cardDescBox}>
            <p>
             Le programme national Awrach 2022 a permis le pavage complet des ruelles et 
             places publiques des trois douars, améliorant significativement le cadre de vie des habitants
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a className={`${styles.btn} ${styles.btnGreenPill}`} href="#">
            Toutes les actualités →
          </a>
        </div>

      </section>

      
      {/* ===== ÉVÉNEMENTS À VENIR ===== */}
<section className={styles.eventsSection}>

  <h2 className={styles.sectionTitle}>
    Événements à Venir (Calendrier)
  </h2>

  <div className={styles.eventsContainer}>

    <div className={styles.event}>
      <div className={styles.eventLeft}>
        <Image src="/images/Ev1.png" alt="Assemblée Générale" width={300} height={180} />
      </div>
      <div className={styles.eventRight}>
        Assemblée Générale Annuelle 2025 – Date à définir – Salle communautaire Asni
      </div>
    </div>

    <div className={styles.event}>
      <div className={styles.eventLeft}>
        <Image src="/images/Ev2.png" alt="Caravane médicale" width={300} height={180} />
      </div>
      <div className={styles.eventRight}>
        Caravane médicale – Date à planifier – Douar Asselda
      </div>
    </div>

    <div className={styles.event}>
      <div className={styles.eventLeft}>
        <Image src="/images/Ev3.png" alt="Nettoyage" width={300} height={180} />
      </div>
      <div className={styles.eventRight}>
        Journée de nettoyage et sensibilisation – Date à définir – Douar Asselda
      </div>
    </div>

<div className={styles.event}>
      <div className={styles.eventLeft}>
        <Image src="/images/Ev4.png" alt="Nettoyage" width={300} height={180} />
      </div>
      <div className={styles.eventRight}>
        Atelier de formation jeunes – Informatique et entrepreneuriat – Date à définir
      </div>
    </div>


  </div>

</section>

      <section className={styles.atelierSection}>
        <div className={styles.atelierButtons}>
          <a className={`${styles.btn} ${styles.btnOutlineGreen}`} href="#">
            s'inscrire →
          </a>

          <a className={`${styles.btn} ${styles.btnOutlineGreen}`} href="#">
            nous contacter →
          </a>
        </div>

      </section>

      {/* ===== FOOTER ===== */}
      <footer className={styles.siteFooter}>
        <div className={styles.footerInner}>
          <p>Association Asselda – Depuis 1996</p>
          <p>contact : associationasselda@gmail.com</p>
        </div>
      </footer>

    </main>
  );
}