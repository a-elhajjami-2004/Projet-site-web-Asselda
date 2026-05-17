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
    // Ajout de dir="rtl" pour aligner correctement le texte de droite à gauche
    <div className={styles.pageWrapper} dir="rtl">
      
      {/* SECTION LOCALISATION (Image 1) */}
      <header className={styles.headerBox}>
        <h2>الموقع وشبكات التواصل الاجتماعي</h2>
        <p>تجدون جمعية أسيلدا في قلب دوار أسني، وسط جبال الأطلس الكبير.</p>
      </header>

      <div className={styles.sectionBadgeWrapper}>
        <div className={styles.sectionBadge}>موقعنا</div>
      </div>

      <div className={styles.mapGridContainer}>
        <div className={styles.mapIframeWrapper}>
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapLinkTop}>
            الفتح في خرائط Google <FaGlobe style={{marginRight: '5px', fontSize: '10px'}} />
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
                <h3>جمعية أسيلدا</h3>
                <p>دوار أسيلدا، أسني<br/>إقليم الحوز، المغرب</p>
              </div>
            </div>
            <p className={styles.coordinatesText}>
              <strong>خط العرض:</strong> 31.249<br/>
              <strong>خط الطول:</strong> -7.984
            </p>
            <a href={mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapBtn}>
              <span style={{marginLeft: '5px'}}>📍</span> الفتح في خرائط Google
            </a>
          </div>
          
          <div className={styles.locationDesc}>
            <p>تقع في قلب قرية أسني، في سلسلة جبال الأطلس الكبير، على بعد حوالي 60 كم من مراكش.</p>
          </div>
        </div>
      </div>

      {/* SECTION FORMULAIRE (Image 2) */}
      <div className={styles.formSectionContainer}>
        <div className={styles.formHeader}>
          <h2>لديك سؤال، اقتراح شراكة أو ترغب في معرفة المزيد؟</h2>
          <p>فريق جمعية أسيلدا يجيبكم في أقرب وقت ممكن.</p>
        </div>

        <div className={styles.contactFlex}>
          <div className={styles.infoBox}>
            <h3>معلومات الاتصال</h3>
            <div className={styles.infoItem}><FaHome className={styles.infoIcon}/> <span><strong>العنوان:</strong> دوار أسيلدا، جماعة أسني، إقليم الحوز، مراكش، المغرب. الرمز البريدي: 42152</span></div>
            <div className={styles.infoItem}><FaEnvelope className={styles.infoIcon}/> <span><strong>البريد الإلكتروني:</strong> associationasselda@gmail.com</span></div>
            <div className={styles.infoItem}><FaPhoneAlt className={styles.infoIcon}/> <span><strong>هاتف الرئيس:</strong> (سمير أهرام) 06 XX XX XX XX</span></div>
            <div className={styles.infoItem}><FaPhoneAlt className={styles.infoIcon}/> <span><strong>هاتف الكاتب العام:</strong> (عبد الرحيم ضرار) 06 XX XX XX XX</span></div>
            <div className={styles.infoItem}><FaGlobe className={styles.infoIcon}/> <span><strong>الموقع الإلكتروني:</strong> www.association-asselda.org</span></div>
            <div className={styles.hoursBox}>
              <FaRegClock /> <strong>أوقات الاتصال:</strong>
              <p>من الإثنين إلى الجمعة: 9:00 صباحاً – 5:00 مساءً | السبت: 9:00 صباحاً – 12:00 ظهراً</p>
            </div>
          </div>

          <div className={styles.formWrapper}>
            <h3 className={styles.formTitle}>استمارة الاتصال</h3>
            <form>
              <label>الاسم الكامل <span style={{color:'red'}}>*</span></label>
              <input type="text" className={styles.inputField} placeholder="أدخل اسمك الكامل" />
              
              <label>البريد الإلكتروني <span style={{color:'red'}}>*</span></label>
              <input type="email" className={styles.inputField} placeholder="ab_ikram@email.com" />
              
              <div className={styles.formRow}>
                <div style={{flex:1}}><label>الهاتف <span style={{color:'red'}}>*</span></label><input type="text" className={styles.inputField} placeholder="مثال: 06 12 34 56 78" /></div>
                <div style={{flex:1}}><label>موضوع الرسالة</label><input type="text" className={styles.inputField} /></div>
              </div>
              
              <label>الرسالة:</label>
              <textarea className={styles.inputField} rows={4}></textarea>
              <p className={styles.charLimit}>الحد الأدنى: 20 حرفاً، الحد الأقصى: 1000 حرف</p>

              <div className={styles.formFooter}>
                <button type="submit" className={styles.submitBtn}><FaPaperPlane style={{marginLeft: '5px'}}/> إرسال</button>
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
      <div className={styles.socialBanner}>تابعوا آخر أخبارنا وابقوا على تواصل مع حياة الجمعية عبر شبكاتنا الاجتماعية</div>
      <div className={styles.socialGrid}>
        <a href="#" className={styles.socialCard}>
          <FaFacebook className={styles.socialIcon} style={{color:'#1877F2'}}/>
          <p style={{color:'#1c3e7a'}}>تابعوا صفحتنا</p>
        </a>
        <a href="#" className={styles.socialCard}>
          <FaYoutube className={styles.socialIcon} style={{color:'#FF0000'}}/>
          <p style={{color:'#cc0000'}}>اكتشفوا فيديوهاتنا</p>
        </a>
        <a href="#" className={styles.socialCard}>
          <FaWhatsapp className={styles.socialIcon} style={{color:'#25D366'}}/>
          <p style={{color:'#128C7E'}}>راسلونا على واتساب</p>
        </a>
      </div>
    </div>
  );
}