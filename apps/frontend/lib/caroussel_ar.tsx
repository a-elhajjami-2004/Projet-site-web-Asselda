import { useState } from "react";
import styles from "@/styles/page.module.css";

export default function ProjectsSectionAr() {
  const projects = [
    {
      id: 1,
      image: "https://picsum.photos/800/500?random=11",
      alt: "مشهد جوي لمحطة الصرف الصحي",
      title: "الصرف الصحي السائل ومعالجة مياه الصرف",
      summary:
        "أول مشروع من نوعه في المنطقة، تم تنفيذه بالشراكة مع AMSED. الميزانية: 12,000,000 درهم. يحمي الموارد الطبيعية ويحسن الصحة العامة.",
      badges: ["الميزانية: 12 مليون درهم", "الشريك: AMSED", "الحالة: تشغيلي"],
      link: "/projets",
    },
    {
      id: 2,
      title: "المياه الصالحة للشرب بالطاقة الشمسية",
      summary:
        "شبكة مياه الشرب مغذاة بألواح شمسية، مع خزانات التخزين ونقاط التوزيع ونظام الفواتير الشفاف.",
      badges: ["الطاقة الشمسية", "الوصول إلى المياه", "الحالة: قيد الخدمة"],
      link: "/projets",
    },
    {
      id: 3,
      title: "إعادة تأهيل الطرق – برنامج الأرّاك 2022",
      summary:
        "أرصفة وأزقة معبدة في 3 دواوير (أسلداه 1 و 2 و 3). تحسين جمالي وإمكانية وصول وإدارة مياه الأمطار.",
      badges: ["برنامج الأرّاك", "الطرق", "الحالة: مكتمل"],
      link: "/projets",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsWrapper}>
        <div className={styles.projectsCarousel}>
          <button
            className={styles.carouselBtn}
            onClick={handlePrev}
            aria-label="المشروع السابق"
          >
            &#10094;
          </button>

          <div className={styles.carouselViewport}>
            <div
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
             {projects.map((project) => (
  <div className={styles.carouselSlide} key={project.id}>
    <div className={styles.projectCard}>
      {project.image && (
        <img
          src={project.image}
          alt={project.alt || project.title}
          className={styles.projectImage}
                    /> )}

                    <div className={styles.projectContent}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>

                      <p className={styles.projectSummary}>{project.summary}</p>

                      <div className={styles.projectBadge}>
                        {project.badges.map((badge, index) => (
                          <span key={index}>{badge}</span>
                        ))}
                      </div>

                      <a href={project.link} className={styles.projectLink}>
                        عرض المشروع
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className={styles.carouselBtn}
            onClick={handleNext}
            aria-label="المشروع التالي"
          >
            &#10095;
          </button>
        </div></div>
    </section>
  );
}
