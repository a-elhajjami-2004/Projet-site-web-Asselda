
import styles from "./page.module.css";

export default function Home() {
  return (
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

<section className="stats-section">
<div className="stats-container">
    <div className="stat-box">
      <h2>250+</h2>
      <p>Projets réalisés</p>
    </div>

    <div className="stat-box">
      <h2>10000+</h2>
      <p>Bénéficiaires</p>
    </div>

    <div className="stat-box">
      <h2>15</h2>
      <p>Années d'existence</p>
    </div>

    <div className="stat-box">
      <h2>45</h2>
      <p>Partenaires</p>
    </div>
  </div></section>
  







</main>
  );
}