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

  // دالة للتحكم في اختيار وإلغاء اختيار مجال الاهتمام
  const handleInteretClick = (value: string) => {
    if (interet === value) {
      setInteret(null); // إذا تم النقر عليه مجدداً يتم إلغاء التلوين
    } else {
      setInteret(value);
    }
  };

  // دالة للتحكم في اختيار وإلغاء اختيار نوع الالتزام
  const handleEngagementClick = (value: string) => {
    if (engagement === value) {
      setEngagement(null); // إذا تم النقر عليه مجدداً يتم إلغاء التلوين
    } else {
      setEngagement(value);
    }
  };

  return (
    <div className={styles.pageWrapper} dir="rtl">
      
      {/* SECTION 1 : HERO AVEC LES 2 BOUTONS */}
      <section className={styles.heroSection}>
        <div className={styles.heroBanner}>
          <h1>انضم إلى جمعية أسيلدا</h1>
          <p>سواء كنت ترغب في أن تصبح عضواً، أو تمنح من وقتك كمتطوع، أو تدعم مشاريعنا مالياً، فإن التزامك يصنع الفارق.</p>
        </div>
        
        <div className={styles.heroNavButtons}>
          <a href="#inscription" className={styles.navBtnLarge}>
            <UserCircle size={24} className={styles.iconBtn} /> طلب العضوية
          </a>
          <a href="#benevolat" className={styles.navBtnLarge}>
            <Heart size={24} className={styles.iconBtn} /> التطوع معنا
          </a>
        </div>
      </section>

      {/* SECTION 2 : FORMULAIRE D'INSCRIPTION */}
      <section id="inscription" className={styles.formSection}>
        <div className={styles.formCard}>
          
          <div 
            className={styles.columnsContainer} 
            style={{ 
              display: 'flex', 
              gap: '40px', 
              alignItems: 'flex-start',
              position: 'relative'
            }}
          >
            
            {/* الجزء الأيمن: المعلومات الشخصية */}
            <div className={styles.leftColumn} style={{ flex: 1 }}>
              <div className={styles.inputGroup}>
                <div className={styles.labelContainer}>
                  <User size={18} className={styles.icon} /> الاسم الكامل <span className={styles.asterisk}>*</span>
                </div>
                <input type="text" className={styles.inputField} placeholder="أدخل اسمك الكامل" />
                <p className={styles.helperText}>3 أحرف على الأقل</p>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.labelContainer}>
                  <CreditCard size={18} className={styles.icon} /> رقم البطاقة الوطنية (CIN) <span className={styles.asterisk}>*</span>
                </div>
                <input type="text" className={styles.inputField} placeholder="مثال: AB123456" />
                <p className={styles.helperText}>الصيغة المغربية: حرف أو حرفين + 6 أرقام</p>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.labelContainer}>
                  <Phone size={18} className={styles.icon} /> الهاتف <span className={styles.asterisk}>*</span>
                </div>
                <input type="text" className={styles.inputField} placeholder="مثال: 06 12 34 56 78" />
                <p className={styles.helperText}>الصيغة: 06/07 XXXXXXXX</p>
              </div>

              <div className={styles.inputGroup}>
                <div className={styles.labelContainer}>
                  <Mail size={18} className={styles.icon} /> البريد الإلكتروني
                </div>
                <input type="email" className={styles.inputField} placeholder="ab_ikram@email.com" />
              </div>

              <div className={styles.inputGroup} style={{ marginBottom: 0 }}>
                <div className={styles.labelContainer}>
                  <MapPin size={18} className={styles.icon} /> العنوان / المنطقة
                </div>
                <input type="text" className={styles.inputField} placeholder="أدخل عنوانك أو منطقتك" />
              </div>
            </div>

            {/* خط عمودي فاصل في المنتصف */}
            <div 
              style={{ 
                width: '1px', 
                backgroundColor: '#e2e8f0', 
                alignSelf: 'stretch',
                margin: '0 10px'
              }} 
            />

            {/* الجزء الأيسر: مجالات الاهتمام والالتزام */}
            <div className={styles.rightColumn} style={{ flex: 1 }}>
              <div className={styles.sectionHeader}>
                <div className={styles.labelContainer}>
                  <LayoutGrid size={18} className={styles.icon} /> مجال الاهتمام
                </div>
                <div className={styles.sectionSubtitle}>اختر مجالات اهتمامك</div>
              </div>
              
              <div className={styles.gridInterest}>
                {['Environnement', 'Infrastructure', 'Social', 'Education'].map((item) => (
                  <button 
                    key={item} 
                    type="button" 
                    className={`${styles.selectBtn} ${interet === item ? styles.activeBtn : ''}`} 
                    onClick={() => handleInteretClick(item)}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {item === 'Environnement' && <Leaf size={16} />}
                      {item === 'Infrastructure' && <Building size={16} />}
                      {item === 'Social' && <Heart size={16} />}
                      {item === 'Education' && <BookOpen size={16} />}
                      {item === 'Environnement' && 'البيئة'}
                      {item === 'Infrastructure' && 'البنية التحتية'}
                      {item === 'Social' && 'العمل الاجتماعي'}
                      {item === 'Education' && 'التعليم'}
                    </span>
                    <Square size={16} className={styles.uncheck} />
                  </button>
                ))}
                
                {/* زر الكل يتلون الآن فقط عندما تكون قيمته نشطة ويتوقف عن التلوين عند إعادة النقر أو اختيار مجال آخر */}
                <button 
                  type="button" 
                  className={`${styles.selectBtn} ${styles.fullWidth} ${interet === 'Tous' ? styles.activeBtn : ''}`} 
                  onClick={() => handleInteretClick('Tous')}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><LayoutGrid size={16} /> الكل</span>
                  <Square size={16} className={styles.uncheck} />
                </button>
              </div>

              <div className={styles.sectionHeader} style={{ marginTop: '25px' }}>
                <div className={styles.labelContainer}>
                  <Handshake size={18} className={styles.icon} /> نوع الالتزام
                </div>
                <div className={styles.sectionSubtitle}>اختر مستوى مشاركتك</div>
              </div>

              <div className={styles.engagementList}>
                {['Membre actif', 'Membre soutien', 'Bénévole occasionnel'].map((type) => (
                  <button 
                    key={type} 
                    type="button" 
                    className={`${styles.selectBtn} ${engagement === type ? styles.activeBtn : ''}`} 
                    onClick={() => handleEngagementClick(type)}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {type.includes('actif') ? <Users size={16} /> : <Handshake size={16} />}
                      {type === 'Membre actif' && 'عضو نشيط'}
                      {type === 'Membre soutien' && 'عضو داعم'}
                      {type === 'Bénévole occasionnel' && 'متطوع عرضي'}
                    </span>
                    <Square size={16} className={styles.uncheck} />
                  </button>
                ))}
              </div>
            </div>

          </div>

          <div className={styles.formFooter} style={{ marginTop: '30px' }}>
            <div className={styles.consentBox} onClick={() => setAccepted(!accepted)}>
              {accepted ? <CheckSquare size={18} /> : <Square size={18} className={styles.uncheck} />}
              <p>أوافق على استخدام بياناتي حصرياً من قبل جمعية أسيلدا <span className={styles.asterisk}>*</span></p>
            </div>
            <button className={styles.submitBtn}>
              <Send size={18} style={{ marginLeft: '5px' }} /> إرسال الترشيح
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3 : DEVENIR BÉNÉVOLE (OPPORTUNITÉS) */}
      <section id="benevolat" className={styles.oppSection}>
        <div className={styles.oppIntroBox}>
          <p>توفر الجمعية العديد من فرص التطوع. إن وقتكم هو مورد ثمين بالنسبة لنا.</p>
        </div>
        
        <div className={styles.oppGrid}>
          <div className={`${styles.oppCard} ${styles.bgGreen}`}>
            <Leaf size={32} className={styles.oppIcon} />
            <p>توزيع المساعدات الغذائية والإنسانية خلال الحملات التضامنية</p>
          </div>
          <div className={`${styles.oppCard} ${styles.bgBlue}`}>
            <BookOpen size={32} className={styles.oppIcon} />
            <p>المواكبة والدعم المدرسي لأطفال القرية</p>
          </div>
          <div className={`${styles.oppCard} ${styles.bgBlue}`}>
            <Laptop size={32} className={styles.oppIcon} />
            <p>تأطير ورشات العمل التكوينية (معلوميات، صناعة تقليدية، صحة)</p>
          </div>
          <div className={`${styles.oppCard} ${styles.bgYellow}`}>
            <Wrench size={32} className={styles.oppIcon} />
            <p>تأهيل وصيانة المرافق والمنشآت (شبكة الماء، الطرقات)</p>
          </div>
          <div className={`${styles.oppCard} ${styles.bgOrange}`}>
            <Megaphone size={32} className={styles.oppIcon} />
            <p>التواصل، صياغة المحتوى وإدارة صفحات التواصل الاجتماعي</p>
          </div>
          <div className={`${styles.oppCard} ${styles.bgGreen}`}>
            <Truck size={32} className={styles.oppIcon} />
            <p>التنظيم اللوجيستي للفعاليات والقوافل الطبية</p>
          </div>
        </div>

        <div className={styles.availabilityCard}>
          <strong>الالتزام والجاهزية</strong>
          <p>مرن - حسب أوقات فراغكم وجاهزيتكم</p>
        </div>

        <div className={styles.finalCtaWrapper}>
           <a href="#inscription" className={styles.benevoleFinalBtn}>
            <span className={styles.ctaMainText}>أرغب في التطوع <ArrowRight size={18} style={{ transform: 'rotate(180deg)', marginRight: '5px' }} /></span>
            <span className={styles.ctaSubText}>استمارة الانخراط</span>
          </a>
        </div>
      </section>
    </div>
  );
}