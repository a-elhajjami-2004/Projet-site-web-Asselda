"use client";
import Header from "@/components/Header";
import ProjetsSectionAr from "@/lib/caroussel_ar";
import AnimatedCounter from "@/components/AnimatedCounter";
import styles from "@/styles/page.module.css";

export default function Home() {
  const LOGO_SRC = "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-original-577x577/s3/0000/0502/brand.gif?itok=ywZxw0rj";
  return <>
   <main>
    <section className={styles.heroBanner} style={{ backgroundImage: 'url("http://localhost:1337/uploads/banner_79228a7d13.jpeg")' }}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          معًا نبني مستقبلًا مستدامًا لقرانا
        </h1>

        <p className={styles.arabicTitle} lang="fr">
          Ensemble, construisons un avenir durable pour nos villages
        </p>

        <p className={styles.subtitle}>
          جمعية أسيلدا تعمل منذ عام 1996 على البيئة والتنمية الريفية ورعاية الأسر في منطقة أسني والحوز.
        </p>

        <div className={styles.buttons}>
          <a href="/projets" className={styles.primaryBtn}>
            اكتشف مشاريعنا
          </a>

          <a href="/rejoindre" className={styles.secondaryBtn}>
            ادعمنا
          </a>
        </div>
      </div>
    </section>

<section className={styles.stats_section}>
<div className={styles.stats_container}>
    <AnimatedCounter endValue={250} label="مشاريع منجزة" />
    <AnimatedCounter endValue={10000} label="مستفيدين" />
    <AnimatedCounter endValue={15} label="سنوات من الوجود" />
    <AnimatedCounter endValue={45} label="شركاء" />
  </div></section>
 
    <section className={styles.domainsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>مجالات تدخلنا</h2>
        <h3 className={styles.sectionSubtitle}>
          ثلاثة محاور رئيسية لتأثير مستدام
        </h3>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardEmoji}>🌿</div>
            <h4 className={styles.cardTitle}>البيئة</h4>
            <p className={styles.cardText}>
              حماية التنوع البيولوجي وتوعية بالقضايا البيئية لمستقبل مستدام.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardEmoji}>💡</div>
            <h4 className={styles.cardTitle}>التنمية</h4>
            <p className={styles.cardText}>
              الوصول إلى المياه الصالحة للشرب والبنية التحتية ودعم المجتمعات لتنمية عادلة.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardEmoji}>👨‍👩‍👧</div>
            <h4 className={styles.cardTitle}>العائلة</h4>
            <p className={styles.cardText}>
              مرافقة العائلات وتعليم الأطفال وتعزيز الروابط بين الأجيال.
            </p>
          </div>
        </div>
      </div>
    </section>
 {ProjetsSectionAr()}
<section className={styles.news_section}>
  <div className={styles.news_container}>
    <h2 className={styles.news_title}>الأخبار والأحداث</h2>

    <div className={styles.news_grid}>
      <article className={styles.news_card}>
        <h3 className={styles.news_card_title}>
          تجديد مكتب الجمعية - الجمعية العامة في 3 فبراير 2025
        </h3>
        <p className={styles.news_card_text}>
          خلال الجمعية العامة الاستثنائية في 3 فبراير 2025، انتخب الأعضاء المكتب التنفيذي الجديد لمدة 5 سنوات برئاسة السيد سمير أهرام.
        </p>
      </article>

      <article className={styles.news_card}>
        <h3 className={styles.news_card_title}>
          بعد عام من الزلزال: تقييم التضامن وآفاق إعادة الإعمار
        </h3>
        <p className={styles.news_card_text}>
          نظرة على الإجراءات التي قامت بها الجمعية منذ الزلزال المدمر في 8 سبتمبر 2023: توزيع المساعدات، نصب الخيام، الدعم النفسي ومتابعة إعادة الإعمار.
        </p>
      </article>

      <article className={styles.news_card}>
        <h3 className={styles.news_card_title}>
          نتائج برنامج أوراش 2022: شوارع دوار أسيلدا المجددة
        </h3>
        <p className={styles.news_card_text}>
          سمح برنامج أوراش الوطني 2022 بتعبيد كامل الشوارع والساحات العامة في الثلاث دوارات، مما حسّن بشكل كبير إطار حياة السكان.
        </p>
      </article>
    </div>

    <div className={styles.news_footer}>
      <a href="/actualites" className={styles.news_btn}>جميع الأخبار ←</a>
    </div>
  </div>
</section>
<section className={styles.partners_section}>
  <div className={styles.partners_container}>
    <h2 className={styles.partners_title}>شركاؤنا</h2>

    <p className={styles.partners_subtitle}>
      تعمل الجمعية بالتعاون مع المؤسسات الوطنية والدولية
    </p>

    <div className={styles.partners_slider}>
      <div className={styles.partners_track}>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC} alt="AMSED" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src="/images/asni.png" alt="جماعة أسني" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC} alt="إقليم الحوز" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC} alt="ولاية مراكش" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC} alt="وزارة الداخلية" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC}  alt="FMPS" className={styles.partner_logo} />
        </div>

        {/* duplication pour boucle infinie */}
        <div className={styles.partner_item}>
          <img src={LOGO_SRC}  alt="AMSED" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC}  alt="جماعة أسني" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC} alt="إقليم الحوز" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC}  alt="ولاية مراكش" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC}  alt="وزارة الداخلية" className={styles.partner_logo} />
        </div>
        <div className={styles.partner_item}>
          <img src={LOGO_SRC}  alt="FMPS" className={styles.partner_logo} />
        </div>
      </div>
    </div>
  </div>
</section>
<section className={styles.cta_section}>
  <div className={styles.cta_container}>
    <h2 className={styles.cta_title}>
      انضم إلى الحركة من أجل تنمية مستدامة
    </h2>

    <p className={styles.cta_subtitle}>
      كن عضوًا أو متطوعًا أو ادعم مشاريعنا بتبرع. كل إيماءة مهمة.
    </p>

    <div className={styles.cta_banner}>
      <img
        src="https://picsum.photos/1600/900"
        alt="شجرة صغيرة رمز التنمية المستدامة"
        className={styles.cta_image}
      />

      <div className={styles.cta_overlay}>
        <a href="/Nous rejoindre" className={styles.cta_button}>
          كن عضوًا ←
        </a>

        <a href="/don" className={styles.cta_button}>
          تبرع ←
        </a>
      </div>
    </div>
  </div>
</section>


</main>
</>
 ;

}
