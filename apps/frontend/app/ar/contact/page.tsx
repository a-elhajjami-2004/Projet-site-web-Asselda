import React from 'react';
import styles from '@/styles/contact.module.css';
import { 
  FaMapMarkerAlt, FaHome, FaEnvelope, FaPhoneAlt, 
  FaGlobe, FaRegClock, FaPaperPlane, FaFacebook, FaYoutube, FaWhatsapp 
} from 'react-icons/fa';

export default function UnifiedPage() {
  // Liens réels pour l'Association Asselda à Asni
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=31.249,-7.984";
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3412.3!2d-7.984!3d31.249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1700000000000";

  return (
    <div className={styles.pageWrapper}>
      
      {/* SECTION LOCALISATION (Image 1) */}
      <header className={styles.headerBox}>
        <h2>Localisation et Réseaux Sociaux</h2>
        <p>Retrouvez l'Association Asselda au cœur du douar d'Asni, dans les montagnes du Haut Atlas.</p>
      </header>

      <div className={styles.sectionBadgeWrapper}>
        <div className={styles.sectionBadge}>Notre Localisation</div>
      </div>

      <div className={styles.mapGridContainer}>
        <div className={styles.mapIframeWrapper}>
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapLinkTop}>
            Ouvrir dans Maps <FaGlobe style={{marginLeft: '5px', fontSize: '10px'}} />
          </a>
          <iframe 
            src={embedUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>

        <div className={styles.locationSidebar}>
          <div className={styles.locationCard}>
            <div className={styles.locationCardHeader}>
              <FaMapMarkerAlt className={styles.pinIcon} />
              <div>
                <h3>Association Asselda</h3>
                <p>Douar Asselda, Asni<br/>Province Al Haouz, Maroc</p>
              </div>
            </div>
            <p className={styles.coordinatesText}>
              <strong>Latitude :</strong> 31.249<br/>
              <strong>Longitude :</strong> -7.984
            </p>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapBtn}>
              <span style={{color: 'red'}}>📍</span> Ouvrir dans google Maps
            </a>
          </div>
          
          <div className={styles.locationDesc}>
            <p>Situé au cœur du village d'Asni, dans le massif du Haut Atlas, à environ 60 km de Marrakech.</p>
          </div>
        </div>
      </div>

      {/* SECTION FORMULAIRE (Image 2) */}
      <div className={styles.formSectionContainer}>
        <div className={styles.formHeader}>
          <h2>Une question, une proposition de partenariat ou envie d'en savoir plus ?</h2>
          <p>L'équipe de l'Association Asselda vous répond dans les plus brefs délais.</p>
        </div>

        <div className={styles.contactFlex}>
          <div className={styles.infoBox}>
            <h3>Informations de contact</h3>
            <div className={styles.infoItem}><FaHome className={styles.infoIcon}/> <span><strong>Adresse:</strong> Douar Asselda, Commune d'Asni, Province d'Al Haouz, Marrakech, Maroc. Code postal : 42152</span></div>
            <div className={styles.infoItem}><FaEnvelope className={styles.infoIcon}/> <span><strong>Email:</strong> associationasselda@gmail.com</span></div>
            <div className={styles.infoItem}><FaPhoneAlt className={styles.infoIcon}/> <span><strong>Tél. Président:</strong> (Samir Ahram) 06 XX XX XX XX</span></div>
            <div className={styles.infoItem}><FaPhoneAlt className={styles.infoIcon}/> <span><strong>Tél. Secrétaire:</strong> (Abdelrahim Dharar) 06 XX XX XX XX</span></div>
            <div className={styles.infoItem}><FaGlobe className={styles.infoIcon}/> <span><strong>Site web:</strong> www.association-asselda.org</span></div>
            <div className={styles.hoursBox}>
              <FaRegClock /> <strong>Horaires de contact :</strong>
              <p>Lundi à vendredi 9h00 – 17h00 | Samedi 9h00 – 12h00</p>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <h3 className={styles.formTitle}>Formulaire de contact</h3>
            <form>
              <label>Nom complet<span style={{color:'red'}}>*</span></label>
              <input type="text" className={styles.inputField} placeholder="Entrez votre nom complet" />
              
              <label>Email <span style={{color:'red'}}>*</span></label>
              <input type="email" className={styles.inputField} placeholder="ab_ikram@email.com" />
              
              <div className={styles.formRow}>
                <div style={{flex:1}}><label>Téléphone <span style={{color:'red'}}>*</span></label><input type="text" className={styles.inputField} placeholder="Ex : 06 12 34 56 78" /></div>
                <div style={{flex:1}}><label>Objet de message</label><input type="text" className={styles.inputField} /></div>
              </div>
              
              <label>Message:</label>
              <textarea className={styles.inputField} rows={4}></textarea>
              <p className={styles.charLimit}>minlength="20", maxlength="1000"</p>

              <div className={styles.formFooter}>
                <button type="submit" className={styles.submitBtn}><FaPaperPlane/> Envoyer</button>
                <div className={styles.recaptchaPlaceholder}>
                   <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" width="25" alt="recap" />
                   <span>reCAPTCHA</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* SECTION RÉSEAUX (Image 3) */}
      <div className={styles.socialBanner}>Suivez nos actualités et restez connectés à la vie de l'association sur nos réseaux sociaux</div>
      <div className={styles.socialGrid}>
        <a href="#" className={styles.socialCard}>
          <FaFacebook className={styles.socialIcon} style={{color:'#1877F2'}}/>
          <p style={{color:'#1c3e7a'}}>Suivez notre page</p>
        </a>
        <a href="#" className={styles.socialCard}>
          <FaYoutube className={styles.socialIcon} style={{color:'#FF0000'}}/>
          <p style={{color:'#cc0000'}}>Découvrir nos vidéos</p>
        </a>
        <a href="#" className={styles.socialCard}>
          <FaWhatsapp className={styles.socialIcon} style={{color:'#25D366'}}/>
          <p style={{color:'#128C7E'}}>Écrire sur WhatsApp</p>
        </a>
      </div>
    </div>
  );
}