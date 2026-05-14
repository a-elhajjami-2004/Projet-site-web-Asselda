"use client";
import Header from "@/components/Header";
import styles from "@/styles/about.module.css";
export default function Home() {

  return (

<main>
  <section className={styles.section_definition}>
    <h1>من نحن – جمعية أسلدة</h1>

    <div className={styles.definition}>
      <div className={styles.text}>
        <p>
          منذ عام 1996، تعمل جمعية أسلدة يومياً على تحسين ظروف حياة سكان دوار أسلدة وجماعة أسني، برؤية تنمية دائمة متكاملة.
        </p>
      </div>

      <div className={styles.image}>
        <img
          src="/images/logo.png"
          alt="شعار جمعية أسلدة"
        />
      </div>
    </div>

    <div className={styles.history_asselda}>
      <p>
        جمعية أسلدة للبيئة والتنمية الريفية والأسرة (اختصاراً « جمعية أسلدة » أو « AAEDRF ») هي منظمة من منظمات المجتمع المدني تأسست عام 1996، ومقرها الاجتماعي بدوار أسلدة، جماعة أسني، إقليم الحوز، مراكش – المغرب.
      </p>

      <p>
        معترف بها رسمياً وودعت لدى السلطات المحلية (وصل إيداع نهائي موقع من قاضي أسني في 11 مارس 2025)، تعمل الجمعية في امتثال تام مع الظهير الشريف رقم 1-58-376 بتاريخ 15 نوفمبر 1958 المتعلق بحق التجمع، كما تم تعديله وإكماله.
      </p>
    </div>
  </section>
<section className={styles.vision_mission_section}>
  <div className={styles.vision_mission_container}> 
     <h2>رؤيتنا ورسالتنا</h2>
    <div className={styles.vision_mission_boxes}>
      <div className={styles.vision_box}>
        <div className={styles.box_header}>
          <span className={styles.box_icon}>🎯</span>
          <h3 className={styles.box_title}>رؤيتنا</h3>
        </div>

        <div className={styles.box_content}>
          <p>
            المساهمة في تنمية البيئة الريفية وتحسين ظروف حياة السكان الريفيين، من خلال نهج بيئية واجتماعية وتعليمية وتنمية مستدامة قائمة على الشراكة والحكم الرشيد وتعزيز قيم التضامن والمسؤولية.
          </p>
        </div>
      </div>

      <div className={styles.mission_box}>
        <div className={styles.box_header}>
          <span className={styles.box_icon}>📄</span>
          <h3 className={styles.box_title}>رسالتنا</h3>
        </div>

        <div className={styles.box_content}>
          <p>
            تنفيذ مشاريع بيئية وتنموية وخدمات اجتماعية لصالح سكان دوار أسلدة، مع التركيز على توفير المياه الصالحة للشرب والصرف الصحي وجمع النفايات المنزلية وإعادة تأهيل المساحات الريفية وتشجيع المبادرات التضامنية والعمل التطوعي.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className={styles.objectifs_section}>
  <div className={styles.objectifs_container}>
    <h2 className={styles.objectifs_title}>
      أهدافنا
    </h2>

    <div className={styles.objectifs_grid}>
      <article className={styles.objectif_card}>
        <h3 className={styles.objectif_card_title}>
          01 – المشاركة في البرامج
        </h3>
        <p className={styles.objectif_card_text}>
          المساهمة في جميع البرامج الاجتماعية والاقتصادية والثقافية والرياضية والصحية، وتشجيع المشاريع البيئية.
        </p>
      </article>

      <article className={styles.objectif_card}>
        <h3 className={styles.objectif_card_title}>
          02 – الخدمات الاجتماعية الريفية
        </h3>
        <p className={styles.objectif_card_text}>
          تحسين الخدمات الاجتماعية المرتبطة بالبيئة الريفية والعمل على ازدهار المنطقة على جميع الأصعدة، لتحقيق تنمية متكاملة ومستدامة تركز على الإنسان.
        </p>
      </article>

      <article className={styles.objectif_card}>
        <h3 className={styles.objectif_card_title}>
          03 – النساء والأطفال
        </h3>
        <p className={styles.objectif_card_text}>
          إيلاء اهتمام خاص للنساء والأطفال والأشخاص ذوي الاحتياجات الخاصة. دعم محو الأمية والتدريب المهني والأنشطة المدرة للدخل.
        </p>
      </article>

      <article className={styles.objectif_card}>
        <h3 className={styles.objectif_card_title}>
          04 – الديمقراطية التشاركية
        </h3>
        <p className={styles.objectif_card_text}>
          المساهمة كقوة اقتراح فعالة في إطار النهج التشاركية عند صياغة وتقييم مشاريع وقرارات الجماعات والسلطات.
        </p>
      </article>

      <article className={styles.objectif_card}>
        <h3 className={styles.objectif_card_title}>
          05 – التنسيق المؤسسي
        </h3>
        <p className={styles.objectif_card_text}>
          التنسيق مع السلطات المحلية والإقليمية والمنظمات غير الحكومية لتنفيذ مشاريع تنموية مشتركة في إطار اتفاقيات الشراكة.
        </p>
      </article>

      <article className={styles.objectif_card}>
        <h3 className={styles.objectif_card_title}>
          06 – المبادرة الوطنية
        </h3>
        <p className={styles.objectif_card_text}>
          المساهمة في تنفيذ البرنامج الوطني للمبادرة الوطنية للتنمية البشرية (INDH) على المستوى المحلي.
        </p>
      </article>
    </div>
  </div>
</section>
<section className={styles.bureau_section}>
  <div className={styles.bureau_container}>
    <h2 className={styles.bureau_title}>
       المكتب التنفيذي (الولاية 2025)
    </h2>

    <p className={styles.bureau_subtitle}>
      جدول الأعضاء المنتخبين في الجمعية العامة بتاريخ 3 فبراير 2025.
    </p>

    <div className={styles.table_wrapper}>
      <table className={styles.bureau_table}>
        <thead>
          <tr>
            <th>الرقم</th>
            <th>الاسم الكامل</th>
            <th>الوظيفة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>سمير أهرام</td>
            <td>الرئيس</td>
          </tr>
          <tr>
            <td>02</td>
            <td>مولاي لحسن مروقي</td>
            <td>نائب الرئيس الأول</td>
          </tr>
          <tr>
            <td>03</td>
            <td>ياسين باوتي</td>
            <td>نائب الرئيس الثاني</td>
          </tr>
          <tr>
            <td>04</td>
            <td>عبد الرحيم الصاريح</td>
            <td>الأمين العام</td>
          </tr>
          <tr>
            <td>05</td>
            <td>عبد العزيز بنزينة</td>
            <td>الأمين العام المساعد</td>
          </tr>
          <tr>
            <td>06</td>
            <td>محمد باوتي</td>
            <td>أمين الصندوق</td>
          </tr>
          <tr>
            <td>07</td>
            <td>يوسف إد إبراهيم</td>
            <td>أمين الصندوق المساعد</td>
          </tr>
          <tr>
            <td>08</td>
            <td>حسن أيت موكف</td>
            <td>مستشار</td>
          </tr>
          <tr>
            <td>09</td>
            <td>لحسن وعربان</td>
            <td>مستشار</td>
          </tr>
          <tr>
            <td>10</td>
            <td>رشيد إد عبد الله</td>
            <td>مستشار</td>
          </tr>
          <tr>
            <td>11</td>
            <td>عبد الرحيم أكزول</td>
            <td>مستشار</td>
          </tr>
          <tr>
            <td>12</td>
            <td>حميد إزناكن</td>
            <td>مستشار</td>
          </tr>
          <tr>
            <td>13</td>
            <td>عبد الله أماديد</td>
            <td>مستشار</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section className={styles.values_section}>
  <div className={styles.values_container}>
    <h2 className={styles.values_title}> قيمنا</h2>

    <div className={styles.values_grid}>
      <article className={styles.value_card}>
        <h3 className={styles.value_name}>التضامن</h3>
        <p className={styles.value_text}>
          العمل معاً ودعم الأكثر ضعفاً وتعزيز النسيج الاجتماعي لمجتمعاتنا.
        </p>
      </article>

      <article className={styles.value_card}>
        <h3 className={styles.value_name}>الاستدامة</h3>
        <p className={styles.value_text}>
          تصميم مشاريع تحترم البيئة وقابلة للبقاء على المدى الطويل ومفيدة للأجيال القادمة.
        </p>
      </article>

      <article className={styles.value_card}>
        <h3 className={styles.value_name}>الشفافية</h3>
        <p className={styles.value_text}>
          إدارة الموارد بصدق وتقديم حسابات عن أفعالنا والحفاظ على حكم راشد واضح.
        </p>
      </article>

      <article className={styles.value_card}>
        <h3 className={styles.value_name}>المشاركة</h3>
        <p className={styles.value_text}>
          إشراك السكان في جميع القرارات التي تؤثر عليهم، مع تقدير معارفهم ومبادراتهم.
        </p>
      </article>
    </div>
  </div>
</section>
<section className={styles.docs_section}>
  <div className={styles.docs_container}>
    <h2 className={styles.docs_title}>المستندات القابلة للتنزيل</h2>

    <div className={styles.docs_panel}>
      <a href="/documents/recepisse-depot.pdf" className={styles.doc_card}>
        <h3 className={styles.doc_name}>وصل الإيداع (PDF)</h3>
        <p className={styles.doc_text}>
          الوصل النهائي الصادر من قاضي أسني – 11 مارس 2025
        </p>
      </a>

      <a href="/documents/proces-verbal-ag.pdf" className={styles.doc_card}>
        <h3 className={styles.doc_name}>محضر الجمعية العامة (PDF)</h3>
        <p className={styles.doc_text}>
          تقرير الجمعية العامة بتاريخ 3 فبراير 2025
        </p>
      </a>

      <a href="/documents/statuts-association.pdf" className={styles.doc_card}>
        <h3 className={styles.doc_name}>نظام الجمعية (PDF)</h3>
        <p className={styles.doc_text}>
          النص الكامل للائحة الداخلية وعقد التأسيس – الإصدار 2025
        </p>
      </a>

      <a href="/documents/fiche-technique.pdf" className={styles.doc_card}>
        <h3 className={styles.doc_name}>البطاقة الفنية (PDF)</h3>
        <p className={styles.doc_text}>
          ملخص مؤسسي: الأهداف والمحاور الحد الأدنى والجهات المسؤولة
        </p>
      </a>

    </div>
  </div>
</section>





</main>

  )}