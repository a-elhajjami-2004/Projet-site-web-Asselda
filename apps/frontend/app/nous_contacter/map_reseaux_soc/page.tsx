import React from 'react';
import styles from './page.module.css';
import { FaMapMarkerAlt, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function LocalisationReseaux() {
  return (
    <div className={styles.wrapper}>
      
      {/* En-tête principal de la section */}
      <div className={styles.headerBox}>
        <h2>Localisation et Réseaux Sociaux</h2>
        <p>
          Retrouvez l'Association Asselda au cœur du douar d'Asni, dans les montagnes du Haut Atlas. 
          Suivez nos actions sur les réseaux sociaux.
        </p>
      </div>

      {/* --- SECTION LOCALISATION --- */}
      <div className={styles.sectionBadge}>
        <span>Notre Localisation</span>
      </div>

      <div className={styles.mapContainer}>
        {/* Gauche : La carte Google Maps */}
        <div className={styles.mapIframeWrapper}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13636.562725807963!2d-7.9942!3d31.249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDE0JzU2LjQiTiA3wrA1OScwMi40Ilc!5e0!3m2!1sfr!2sma!4v1690000000000!5m2!1sfr!2sma" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte d'Asni, Maroc"
          ></iframe>
        </div>

        {/* Droite : Informations de localisation */}
        <div className={styles.locationInfo}>
          <div className={styles.locationCard}>
            <div className={styles.locationCardHeader}>
              <FaMapMarkerAlt className={styles.pinIcon} />
              <div>
                <h3>Association Asselda</h3>
                <p>Douar Asselda, Asni<br/>Province Al Haouz, Maroc</p>
              </div>
            </div>
            
            <div className={styles.coordinates}>
              <p>Latitude : 31.249</p>
              <p>Longitude : -7.984</p>
            </div>

            <a href="https://maps.google.com/?q=31.249,-7.984" target="_blank" rel="noopener noreferrer" className={styles.mapBtn}>
              <FaMapMarkerAlt /> Ouvrir dans google Maps
            </a>
          </div>

          <div className={styles.locationDesc}>
            <p>Situé au cœur du village d'Asni, dans le massif du<br/>Haut Atlas, à environ 60 km de Marrakech.</p>
          </div>
        </div>
      </div>

      {/* --- SECTION RÉSEAUX SOCIAUX --- */}
      <div className={styles.socialContainer}>
        <div className={styles.sectionBadge}>
          <span>Suivez nos actualités et restez connectés à la vie de l'association sur nos réseaux sociaux</span>
        </div>

        <div className={styles.socialCardsGrid}>
          
          {/* Carte Facebook */}
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
            <FaFacebook className={styles.facebookIcon} />
            <p className={styles.socialTextFB}>Suivez notre<br/>page</p>
          </a>

          {/* Carte YouTube */}
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
            <FaYoutube className={styles.youtubeIcon} />
            <p className={styles.socialTextYT}>Découvrir nos<br/>vidéos</p>
          </a>

          {/* Carte WhatsApp */}
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
            <FaWhatsapp className={styles.whatsappIcon} />
            <p className={styles.socialTextWA}>Écrire sur WhatsApp</p>
          </a>

        </div>
      </div>

    </div>
  );
}





