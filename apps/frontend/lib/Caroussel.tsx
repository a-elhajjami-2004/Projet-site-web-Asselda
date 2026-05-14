import { useState } from "react";
import styles from "@/styles/page.module.css";

export default function ProjectsSection() {
  const projects = [
    {id: 1,
      image: "https://picsum.photos/800/500?random=11",
    
        alt: "Vue aérienne de la station d'assainissement",
      title: "Assainissement liquide et traitement des eaux usées",
      summary:
        "Premier projet de ce type dans la région, réalisé en partenariat avec l'AMSED. Budget : 12 000 000 DH. Protège les ressources naturelles et améliore la santé publique.",
      badges: ["Budget : 12 MDH", "Partenaire : AMSED", "Statut : Opérationnel"],
      link: "/projets",
    },
    {
      id: 2,
      title: "Eau potable par énergie solaire",
      summary:
        "Réseau d'eau potable alimenté par panneaux solaires, avec réservoirs de stockage, points de distribution et système de facturation transparent.",
      badges: ["Énergie solaire", "Accès à l’eau", "Statut : En service"],
      link: "/projets",
    },
    {
      id: 3,
      
      title: "Réhabilitation des voiries – Programme Awrach 2022",
      summary:
        "Trottoirs et ruelles pavés dans les 3 douars (Asselda 1, 2 et 3). Amélioration esthétique, accessibilité et gestion des eaux pluviales.",
      badges: ["Programme Awrach", "Voirie", "Statut : Terminé"],
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
            aria-label="Projet précédent"
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
                        Voir le projet
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
            aria-label="Projet suivant"
          >
            &#10095;
          </button>
        </div>

        <div className={styles.projectsFooter}>
          <a href="/projets" className={styles.globalBtn}>
            Voir tous nos projets →
          </a>
        </div>
      </div>
    </section>
  );
}