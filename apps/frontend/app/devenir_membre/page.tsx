import React from 'react';
import styles from './page.module.css';
import { 
  User, 
  CreditCard, 
  Phone, 
  Mail, 
  MapPin, 
  Leaf, 
  Building, 
  Heart, 
  BookOpen, 
  LayoutGrid, 
  Users, 
  Handshake, 
  HelpingHand,
  CheckSquare,
  Square
} from 'lucide-react';

export default function DevenirMembre() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.formCard}>
        
        <div className={styles.columnsContainer}>
          
          {/* COLONNE GAUCHE : Informations personnelles */}
          <div className={styles.leftColumn}>
            
            <div className={styles.inputGroup}>
              <div className={styles.labelContainer}>
                <User size={18} className={styles.icon} /> 
                <label>Nom complet</label> <span className={styles.asterisk}>*</span>
              </div>
              <input type="text" className={styles.inputField} placeholder="Entrez votre nom complet" />
              <div className={styles.helperText}>Minimum 3 caractères</div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.labelContainer}>
                <CreditCard size={18} className={styles.icon} />
                <label>Numéro de CIN</label> <span className={styles.asterisk}>*</span>
              </div>
              <input type="text" className={styles.inputField} placeholder="Ex: AB123456" />
              <div className={styles.helperText}>Format marocain : 1-2 lettres + 6 chiffres</div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.labelContainer}>
                <Phone size={18} className={styles.icon} />
                <label>Téléphone</label> <span className={styles.asterisk}>*</span>
              </div>
              <input type="text" className={styles.inputField} placeholder="Ex : 06 12 34 56 78" />
              <div className={styles.helperText}>Format : 06/07 XXXXXXXX</div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.labelContainer}>
                <Mail size={18} className={styles.icon} />
                <label>Email</label>
              </div>
              <input type="email" className={styles.inputField} placeholder="ab_ikram@email.com" />
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.labelContainer}>
                <MapPin size={18} className={styles.icon} />
                <label>Adresse / Localité</label>
              </div>
              <input type="text" className={styles.inputField} placeholder="Entrez votre adresse ou localité" />
            </div>

          </div>

          {/* COLONNE DROITE : Intérêts et Engagement */}
          <div className={styles.rightColumn}>
            
            {/* Section : Domaine d'intérêt */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <Leaf size={24} className={styles.sectionIcon} />
                <div>
                  <div className={styles.sectionTitle}>Domaine d'intérêt</div>
                  <div className={styles.sectionSubtitle}>Sélectionnez vos centres d'intérêt</div>
                </div>
              </div>
              
              <div className={styles.gridInterest}>
                {/* Bouton inactif */}
                <button type="button" className={styles.selectBtn}>
                  <span className={styles.btnContent}><Leaf size={16} /> Environnement</span> 
                  <Square size={16} className={styles.uncheck} />
                </button>
                
                {/* Bouton inactif */}
                <button type="button" className={styles.selectBtn}>
                  <span className={styles.btnContent}><Building size={16} /> Infrastructure</span> 
                  <Square size={16} className={styles.uncheck} />
                </button>
                
                {/* Bouton ACTIF (Social) */}
                <button type="button" className={`${styles.selectBtn} ${styles.activeBtn}`}>
                  <span className={styles.btnContent}><Heart size={16} /> Social</span> 
                  <CheckSquare size={16} />
                </button>
                
                {/* Bouton inactif */}
                <button type="button" className={styles.selectBtn}>
                  <span className={styles.btnContent}><BookOpen size={16} /> Education</span> 
                  <Square size={16} className={styles.uncheck} />
                </button>
                
                {/* Bouton inactif */}
                <button type="button" className={`${styles.selectBtn} ${styles.fullWidth}`}>
                  <span className={styles.btnContent}><LayoutGrid size={16} /> Tous</span> 
                  <Square size={16} className={styles.uncheck} />
                </button>
              </div>
            </div>

            {/* Section : Type d'engagement */}
            <div className={styles.section}>
              <div className={styles.sectionHeader}>
                <Handshake size={24} className={styles.sectionIcon} />
                <div>
                  <div className={styles.sectionTitle}>Type d'engagement</div>
                  <div className={styles.sectionSubtitle}>Choisissez votre niveau d'implication</div>
                </div>
              </div>
              
              <div className={styles.engagementList}>
                {/* Bouton ACTIF (Membre actif) */}
                <button type="button" className={`${styles.selectBtn} ${styles.activeBtn}`}>
                  <span className={styles.btnContent}><Users size={16} /> Membre actif</span> 
                  <CheckSquare size={16} />
                </button>
                
                {/* Bouton inactif */}
                <button type="button" className={styles.selectBtn}>
                  <span className={styles.btnContent}><Handshake size={16} /> Membre soutien</span> 
                  <Square size={16} className={styles.uncheck} />
                </button>
                
                {/* Bouton inactif */}
                <button type="button" className={styles.selectBtn}>
                  <span className={styles.btnContent}><HelpingHand size={16} /> Bénévole occasionnel</span> 
                  <Square size={16} className={styles.uncheck} />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* BAS DE LA CARTE */}
        <div className={styles.footer}>
          <div className={styles.consentBox}>
             <CheckSquare size={18} className={styles.consentIcon} />
            <p>J'accepte que mes données soient utilisées uniquement par l'Association Asselda <span className={styles.asterisk}>*</span></p>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Envoyer ma candidature
          </button>
        </div>

      </div>
    </div>
  );
}