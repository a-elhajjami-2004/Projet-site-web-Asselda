import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function DevenirBenevole() {
  return (
    <div className={styles.container}>
      {/* Texte d'introduction */}
      <p className={styles.introText}>
        L'association offre de nombreuses opportunités de bénévolat, que vous soyez professionnel de santé, enseignant,
        ingénieur, technicien, artiste ou simplement motivé. Votre temps est une ressource précieuse.
      </p>

      {/* Grille des opportunités */}
      <div className={styles.gridContainer}>
        
        {/* Carte 1 */}
        <div className={`${styles.card} ${styles.bgGreenLight}`}>
          <span className={styles.icon}>🌿</span>
          <p>Distribution d'aide alimentaire et humanitaire lors des campagnes solidaires</p>
        </div>

        {/* Carte 2 */}
        <div className={`${styles.card} ${styles.bgBlueLight}`}>
          <span className={styles.icon}>🎓</span>
          <p>Accompagnement et soutien scolaire pour les enfants du village</p>
        </div>

        {/* Carte 3 */}
        <div className={`${styles.card} ${styles.bgBlueLight}`}>
          <span className={styles.icon}>👩‍🏫</span>
          <p>Encadrement d'ateliers de formation (informatique, artisanat, santé)</p>
        </div>

        {/* Carte 4 */}
        <div className={`${styles.card} ${styles.bgYellowLight}`}>
          <span className={styles.icon}>🛠️</span>
          <p>Entretien et maintenance des installations (réseau d'eau, voirie, espaces verts)</p>
        </div>

        {/* Carte 5 */}
        <div className={`${styles.card} ${styles.bgOrangeLight}`}>
          <span className={styles.icon}>📱</span>
          <p>Communication, rédaction de contenu et gestion des réseaux sociaux</p>
        </div>

        {/* Carte 6 */}
        <div className={`${styles.card} ${styles.bgGreenLight}`}>
          <span className={styles.icon}>📋</span>
          <p>Organisation logistique des événements et caravanes médicales</p>
        </div>

      </div>

      {/* Bannière Engagement */}
      <div className={styles.engagementBanner}>
        <h3>Engagement & Disponibilité</h3>
        <p>Flexible - de quelques heures à des missions régulières, selon vos disponibilités</p>
      </div>

      {/* Bouton d'action */}
      <div className={styles.ctaContainer}>
        <Link href="/contact" className={styles.ctaButton}>
          <span className={styles.ctaMainText}>Je veux me porter bénévole ➔</span>
          <span className={styles.ctaSubText}>(formulaire d'adhésion avec type = Bénévole)</span>
        </Link>
      </div>
      
    </div>
  );
}