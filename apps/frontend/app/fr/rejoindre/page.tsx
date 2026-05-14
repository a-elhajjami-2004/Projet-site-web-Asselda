'use client';
import React, { useState } from 'react';
import styles from '@/styles/rejoindre.module.css';
import { 
  User, CreditCard, Phone, Mail, MapPin, Leaf, Building, Heart, 
  BookOpen, LayoutGrid, Users, Handshake, CheckSquare, 
  Square, Send, UserCircle, Laptop, Wrench, Megaphone, Truck, ArrowRight
} from 'lucide-react';

export default function RejoindrePage() {
  const [interet, setInteret] = useState<string | null>(null);
  const [engagement, setEngagement] = useState<string | null>(null);
  const [accepted, setAccepted] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      
      {/* SECTION 1 : HERO AVEC LES 2 BOUTONS */}
      <section className={styles.heroSection}>
        <div className={styles.heroBanner}>
          <h1>Rejoignez l'Association Asselda</h1>
          <p>Que vous souhaitiez devenir membre, offrir de votre temps comme bénévole ou soutenir nos projets financièrement, votre engagement fait la différence.</p>
        </div>
        
        <div className={styles.heroNavButtons}>
          <a href="#inscription" className={styles.navBtnLarge}>
            <UserCircle size={24} className={styles.iconBtn} /> Devenir Membre
          </a>
          <a href="#benevolat" className={styles.navBtnLarge}>
            <Heart size={24} className={styles.iconBtn} /> Devenir Bénévole
          </a>
        </div>
      </section>

      {/* SECTION 2 : FORMULAIRE D'INSCRIPTION */}
      <section id="inscription" className={styles.formSection}>
        <div className={styles.formCard}>
          <div className={styles.columnsContainer}>
            
            {/* Colonne Gauche : Identité */}
            <div className={styles.leftColumn}>
              <div className={styles.inputGroup}>
                <div className={styles.labelContainer}>
                  <User size={18} className={styles.icon} /> Nom complet <span className={styles.asterisk}>*</span>
                </div>
                <input type="text" className={styles.inputField} placeholder="Entrez votre nom complet" />
                <p className={styles.helperText}>Minimum 3 caractères</p>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.labelContainer}>
                  <CreditCard size={18} className={styles.icon} /> Numéro de CIN <span className={styles.asterisk}>*</span>
                </div>
                <input type="text" className={styles.inputField} placeholder="Ex : AB123456" />
                <p className={styles.helperText}>Format marocain : 1-2 lettres + 6 chiffres</p>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.labelContainer}>
                  <Phone size={18} className={styles.icon} /> Téléphone <span className={styles.asterisk}>*</span>
                </div>
                <input type="text" className={styles.inputField} placeholder="Ex : 06 12 34 56 78" />
                <p className={styles.helperText}>Format : 06/07 XXXXXXXX</p>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.labelContainer}>
                  <Mail size={18} className={styles.icon} /> Email
                </div>
                <input type="email" className={styles.inputField} placeholder="ab_ikram@email.com" />
              </div>

              <div className={styles.inputGroup} style={{ marginBottom: 0 }}>
                <div className={styles.labelContainer}>
                  <MapPin size={18} className={styles.icon} /> Adresse / Localité
                </div>
                <input type="text" className={styles.inputField} placeholder="Entrez votre adresse ou localité" />
              </div>
            </div>

            {/* Colonne Droite : Choix & Engagement */}
            <div className={styles.rightColumn}>
              <div className={styles.sectionHeader}>
                <div className={styles.labelContainer}>
                  <LayoutGrid size={18} className={styles.icon} /> Domaine d'intérêt
                </div>
                <div className={styles.sectionSubtitle}>Sélectionnez vos centres d'intérêt</div>
              </div>
              
              <div className={styles.gridInterest}>
                {['Environnement', 'Infrastructure', 'Social', 'Education'].map((item) => (
                  <button key={item} type="button" className={`${styles.selectBtn} ${interet === item ? styles.activeBtn : ''}`} onClick={() => setInteret(item)}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {item === 'Environnement' && <Leaf size={16} />}
                      {item === 'Infrastructure' && <Building size={16} />}
                      {item === 'Social' && <Heart size={16} />}
                      {item === 'Education' && <BookOpen size={16} />}
                      {item}
                    </span>
                    <Square size={16} className={styles.uncheck} />
                  </button>
                ))}
                <button type="button" className={`${styles.selectBtn} ${styles.fullWidth}`} onClick={() => setInteret('Tous')}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><LayoutGrid size={16} /> Tous</span>
                  <Square size={16} className={styles.uncheck} />
                </button>
              </div>

              <div className={styles.sectionHeader} style={{ marginTop: '10px' }}>
                <div className={styles.labelContainer}>
                  <Handshake size={18} className={styles.icon} /> Type d'engagement
                </div>
                <div className={styles.sectionSubtitle}>Choisissez votre niveau d'implication</div>
              </div>

              <div className={styles.engagementList}>
                {['Membre actif', 'Membre soutien', 'Bénévole occasionnel'].map((type) => (
                  <button key={type} type="button" className={`${styles.selectBtn} ${engagement === type ? styles.activeBtn : ''}`} onClick={() => setEngagement(type)}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {type.includes('actif') ? <Users size={16} /> : <Handshake size={16} />}
                      {type}
                    </span>
                    <Square size={16} className={styles.uncheck} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.formFooter}>
            <div className={styles.consentBox} onClick={() => setAccepted(!accepted)}>
              {accepted ? <CheckSquare size={18} /> : <Square size={18} className={styles.uncheck} />}
              <p>J'accepte que mes données soient utilisées uniquement par l'Association Asselda <span className={styles.asterisk}>*</span></p>
            </div>
            <button className={styles.submitBtn}>
              <Send size={18} /> Envoyer ma candidature
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3 : DEVENIR BÉNÉVOLE (OPPORTUNITÉS) */}
      <section id="benevolat" className={styles.oppSection}>
        <div className={styles.oppIntroBox}>
          <p>L'association offre de nombreuses opportunités de bénévolat. Votre temps est une ressource précieuse.</p>
        </div>
        
        <div className={styles.oppGrid}>
          <div className={`${styles.oppCard} ${styles.bgGreen}`}>
            <Leaf size={32} className={styles.oppIcon} />
            <p>Distribution d'aide alimentaire et humanitaire lors des campagnes solidaires</p>
          </div>
          <div className={`${styles.oppCard} ${styles.bgBlue}`}>
            <BookOpen size={32} className={styles.oppIcon} />
            <p>Accompagnement et soutien scolaire pour les enfants du village</p>
          </div>
          <div className={`${styles.oppCard} ${styles.bgBlue}`}>
            <Laptop size={32} className={styles.oppIcon} />
            <p>Encadrement d'ateliers de formation (informatique, artisanat, santé)</p>
          </div>
          <div className={`${styles.oppCard} ${styles.bgYellow}`}>
            <Wrench size={32} className={styles.oppIcon} />
            <p>Entretien et maintenance des installations (réseau d'eau, voirie)</p>
          </div>
          <div className={`${styles.oppCard} ${styles.bgOrange}`}>
            <Megaphone size={32} className={styles.oppIcon} />
            <p>Communication, rédaction de contenu et gestion des réseaux sociaux</p>
          </div>
          <div className={`${styles.oppCard} ${styles.bgGreen}`}>
            <Truck size={32} className={styles.oppIcon} />
            <p>Organisation logistique des événements et caravanes médicales</p>
          </div>
        </div>

        <div className={styles.availabilityCard}>
          <strong>Engagement & Disponibilité</strong>
          <p>Flexible - selon vos disponibilités</p>
        </div>

        <div className={styles.finalCtaWrapper}>
           <a href="#inscription" className={styles.benevoleFinalBtn}>
            <span className={styles.ctaMainText}>Je veux me porter bénévole <ArrowRight size={18} /></span>
            <span className={styles.ctaSubText}>formulaire d'adhésion</span>
          </a>
        </div>
      </section>
    </div>
  );
}