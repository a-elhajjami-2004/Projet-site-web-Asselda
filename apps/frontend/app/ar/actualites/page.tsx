
import Image from "next/image";
import styles from "@/styles/actualites.module.css";

export default function News() {

  return (
    <main className={styles.main}>

      {/* ===== HERO ===== */}
      <section className={styles.heroActualites}>
        <h1 className={styles.title}>الأخبار / الفعاليات</h1>

        <p className={styles.heroSubtitle}>
          ابق على اطلاع بآخر الأخبار والمشاريع والفعاليات والبيانات الصادرة عن جمعية أسلدا.
        </p>

        <div className={styles.categoriesBar}>
          <span className={styles.catLabel}>الفئات</span>
          <nav className={styles.catLinks}>
            <a href="#">الكل</a> |
            <a href="#">المشاريع</a> |
            <a href="#">الفعاليات</a> |
            <a href="#">البيانات</a> |
            <a href="#">التضامن</a>
          </nav>
        </div>

        <div className={styles.searchBox}>
          <input type="text" placeholder="ابحث عن خبر..." />
          <span className={styles.searchArrow}>→</span>
        </div>

        <div className={styles.heroImage}>
          <Image
            src="/images/image-actu.png"
            alt="متطوعون"
            width={1200}
            height={500}
          />
        </div>

        <a href="#actualites" className={`${styles.btn} ${styles.btnOutlineDark}`}>
          مدونة الأخبار →
        </a>
      </section>

      {/* ===== خبر 1 ===== */}
      <section className={styles.actuCard} id="actualites">

        <div className={styles.cardImages}>
          <Image src="/images/ag1.jpg" alt="" width={580} height={280} />
          <Image src="/images/ag2.jpg" alt="" width={580} height={280} />
        </div>

        <div className={`${styles.cardTexts} ${styles.twoCol}`}>
          <div className={styles.cardTitleBox}>
            <p>
              تجديد مكتب الجمعية – الجمعية العامة الاستثنائية بتاريخ 3 فبراير 2025
            </p>
          </div>

          <div className={styles.cardDescBox}>
            <p>
              خلال الجمعية العامة الاستثنائية المنعقدة بتاريخ 3 فبراير 2025، انتخب الأعضاء
              المكتب التنفيذي الجديد لولاية مدتها 5 سنوات، برئاسة السيد سمير أحرام.
            </p>
          </div>
        </div>

      </section>

      {/* ===== خبر 2 ===== */}
      <section className={styles.actuCard}>

        <div className={styles.cardImageSingle}>
          <Image src="/images/seisme.jpg" alt="" width={10000} height={240} />
        </div>

        <div className={`${styles.cardTexts} ${styles.oneCol}`}>
          <div className={styles.cardTitleBox}>
            <p>
              بعد عام على الزلزال: حصيلة التضامن وآفاق إعادة الإعمار
            </p>
          </div>
        </div>

      </section>

      {/* ===== خبر 3 ===== */}
      <section className={styles.actuCard}>

        <div className={styles.cardImages}>
          <Image src="/images/recons1.jpg" alt="" width={580} height={280} />
          <Image src="/images/recons2.jpg" alt="" width={580} height={280} />
        </div>

        <div className={styles.cardTexts}>
          <div className={styles.cardTitleBox}>
            <p>
              استعراض الإجراءات التي اتخذتها الجمعية منذ الزلزال المدمر في 8 سبتمبر 2023:
              توزيع المساعدات، ونصب الخيام، والدعم النفسي، ومتابعة أعمال إعادة الإعمار.
            </p>
          </div>
        </div>

      </section>

      {/* ===== خبر 4 ===== */}
      <section className={styles.actuCard}>

        <div className={styles.cardImages}>
          <Image src="/images/awrach1.jpg" alt="" width={580} height={280} />
          <Image src="/images/awrach2.jpg" alt="" width={580} height={280} />
        </div>

        <div className={`${styles.cardTexts} ${styles.twoCol}`}>
          <div className={styles.cardTitleBox}>
            <p>نتائج برنامج أوراش 2022: تجديد أزقة دوار أسلدا</p>
          </div>

          <div className={styles.cardDescBox}>
            <p>
              أتاح البرنامج الوطني أوراش 2022 تبليط الأزقة والساحات العامة للدواوير الثلاث بالكامل،
              مما أسهم في تحسين إطار الحياة اليومية للسكان بشكل ملحوظ.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a className={`${styles.btn} ${styles.btnGreenPill}`} href="#">
            جميع الأخبار →
          </a>
        </div>

      </section>

      {/* ===== الفعاليات القادمة ===== */}
      <section className={styles.eventsSection}>

        <h2 className={styles.sectionTitle}>
          الفعاليات القادمة (التقويم)
        </h2>

        <div className={styles.eventsContainer}>

          <div className={styles.event}>
            <div className={styles.eventLeft}>
              <Image src="/images/Ev1.png" alt="الجمعية العامة" width={300} height={180} />
            </div>
            <div className={styles.eventRight}>
              الجمعية العامة السنوية 2025 – تاريخ يُحدد لاحقاً – قاعة المجتمع أسني
            </div>
          </div>

          <div className={styles.event}>
            <div className={styles.eventLeft}>
              <Image src="/images/Ev2.png" alt="قافلة طبية" width={300} height={180} />
            </div>
            <div className={styles.eventRight}>
              قافلة طبية – تاريخ يُحدد لاحقاً – دوار أسلدا
            </div>
          </div>

          <div className={styles.event}>
            <div className={styles.eventLeft}>
              <Image src="/images/Ev3.png" alt="حملة نظافة" width={300} height={180} />
            </div>
            <div className={styles.eventRight}>
              يوم النظافة والتوعية – تاريخ يُحدد لاحقاً – دوار أسلدا
            </div>
          </div>

          <div className={styles.event}>
            <div className={styles.eventLeft}>
              <Image src="/images/Ev4.png" alt="ورشة تكوين" width={300} height={180} />
            </div>
            <div className={styles.eventRight}>
              ورشة تكوين الشباب – الإعلاميات وريادة الأعمال – تاريخ يُحدد لاحقاً
            </div>
          </div>

        </div>

      </section>

      <section className={styles.atelierSection}>
        <div className={styles.atelierButtons}>
          <a className={`${styles.btn} ${styles.btnOutlineGreen}`} href="#">
            التسجيل →
          </a>

          <a className={`${styles.btn} ${styles.btnOutlineGreen}`} href="#">
            اتصل بنا →
          </a>
        </div>
      </section>

      {/* ===== تذييل الصفحة ===== */}
      <footer className={styles.siteFooter}>
        <div className={styles.footerInner}>
          <p>جمعية أسلدا – منذ 1996</p>
          <p>البريد الإلكتروني: associationasselda@gmail.com</p>
        </div>
      </footer>

    </main>
  );
}