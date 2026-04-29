import React from 'react';
import styles from './page.module.css';
import { FaHome, FaEnvelope, FaPhoneAlt, FaGlobe, FaRegClock, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        
        {/* Partie Gauche : Informations */}
        <div className={styles.contactLeft}>
          <div className={styles.headerText}>
            <h2>Une question, une proposition<br />de partenariat ou envie d'en savoir plus ?</h2>
            <p>L'équipe de l'Association Asselda vous répond<br />dans les plus brefs délais.</p>
          </div>

          <div className={styles.infoCard}>
            <h3>Informations de contact</h3>
            
            <ul className={styles.infoList}>
              <li>
                <div className={styles.iconContainer}><FaHome /></div>
                <div className={styles.infoContent}>
                  <strong>Adresse:</strong> 
                  <span>Douar Asselda, Commune d'Asni, Province<br />d'Al Haouz, Marrakech, Maroc.<br />Code postal : 42152</span>
                </div>
              </li>
              
              <li>
                <div className={styles.iconContainer}><FaEnvelope /></div>
                <div className={`${styles.infoContent} ${styles.alignCenter}`}>
                  <strong>Email:</strong> <span>associationasselda@gmail.com</span>
                </div>
              </li>

              <li>
                <div className={styles.iconContainer}><FaPhoneAlt /></div>
                <div className={styles.infoContent}>
                  <strong>Téléphone du président:</strong>
                  <span>(Samir Ahram) 06 XX XX XX XX</span>
                </div>
              </li>

              <li>
                <div className={styles.iconContainer}><FaPhoneAlt /></div>
                <div className={styles.infoContent}>
                  <strong>Téléphone du secrétaire général:</strong>
                  <span>(Abdelrahim Dharar) 06 XX XX XX XX</span>
                </div>
              </li>

              <li>
                <div className={styles.iconContainer}><FaGlobe /></div>
                <div className={`${styles.infoContent} ${styles.alignCenter}`}>
                  <strong>Site web:</strong> <span>www.association-asselda.org</span>
                </div>
              </li>

              <li>
                <div className={styles.iconContainer}><FaRegClock /></div>
                <div className={`${styles.infoContent} ${styles.hours}`}>
                  <strong>Horaires de contact :</strong>
                  <span>Lundi à vendredi 9h00 – 17h00 |<br />Samedi 9h00 – 12h00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Partie Droite : Formulaire */}
        <div className={styles.contactRight}>
          <div className={styles.formCard}>
            <h2>Formulaire de contact</h2>
            
            <form className={styles.contactForm}>
              
              <div className={styles.inputGroup}>
                <label>Nom complet <span className={styles.required}>*</span></label>
                <input type="text" placeholder="Entrez votre nom complet" required className={styles.inputField} />
              </div>

              <div className={styles.inputGroup}>
                <label>Email <span className={styles.required}>*</span></label>
                <input type="email" placeholder="ab_ikram@email.com" required className={styles.inputField} />
              </div>

              <div className={styles.formRow}>
                <div className={`${styles.inputGroup} ${styles.halfWidth}`}>
                  <label>Téléphone <span className={styles.required}>*</span></label>
                  <input type="tel" placeholder="Ex : 06 12 34 56 78" required className={styles.inputField} />
                </div>
                <div className={`${styles.inputGroup} ${styles.halfWidth}`}>
                  <label>Objet de message</label>
                  <input type="text" className={styles.inputField} />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Message:</label>
                <textarea rows={5} minLength={20} maxLength={1000} required className={styles.textareaField}></textarea>
                <span className={styles.charLimits}>minlength="20", maxlength="1000"</span>
              </div>

              <div className={styles.formFooter}>
                <button type="submit" className={styles.submitBtn}>
                  <FaPaperPlane /> Envoyer
                </button>
                <div className={styles.recaptchaMock}>
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" width="32" />
                  <span>reCAPTCHA</span>
                </div>
              </div>
              
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}