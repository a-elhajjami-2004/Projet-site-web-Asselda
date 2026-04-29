import React from 'react';
// 1. On importe "styles" correctement
import styles from './page.module.css'; 

export default function JoinUs() {
  return (
    // 2. On applique les classes avec {styles.nomDeLaClasse}
    <div className={styles.container}>
      
      {/* Section principale avec fond vert */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Nous Rejoindre</h1>
        <p className={styles.heroSubtitle}>
          Que vous souhaitiez devenir membre, offrir de votre temps comme bénévole ou
          soutenir nos projets financièrement, votre engagement fait la différence
        </p>
      </section>

      {/* Section des boutons */}
      <section className={styles.buttonsSection}>
        <button className={styles.actionButton}>
          <span className={styles.icon}>
            {/* Icône Utilisateur */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </span>
          Devenir Membre
        </button>

        <button className={styles.actionButton}>
          <span className={styles.icon}>
            {/* Icône Cœur */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>
          Devenir Bénévole
        </button>
      </section>
    </div>
  );
}