"use client";

import { useState } from "react";
import styles from "@/styles/activities.module.css";
import { projects, domains, getDomainColor, filterActivities, type Domain } from "@/lib/activities";

export default function Activities() {
	const [selectedDomain, setSelectedDomain] = useState<Domain>("Tous");

	const filteredProjects = filterActivities(projects, selectedDomain);

	return (
		<main>
			{/* Section Héro */}
			<section className={styles.activitiesHero}>
				<h1>أنشطتنا</h1>
				<p>
					من الماء الشروب إلى الفضاءات المؤهَّلة، مروراً بالتكوين والدعم الاجتماعي، اكتشف كيف تحوّل الجمعية حياة سكان دوار أسلدة يوماً بعد يوم.
				</p>
			</section>

			{/* Section Projets */}
			<section className={styles.projectsSection}>
				<div className={styles.projectsContainer}>
					<h2 className={styles.sectionTitle}>المشاريع الحالية</h2>

					{/* Filtre */}
					<div className={styles.filterContainer}>
						<span className={styles.filterLabel}>اختيار حسب المجال :</span>
						<button
							className={`${styles.filterButton} ${selectedDomain === "Tous" ? styles.active : ""}`}
							onClick={() => setSelectedDomain("Tous")}>
							Tous
						</button>
						{domains.map((domain) => (
							<button
								key={domain}
								className={`${styles.filterButton} ${selectedDomain === domain ? styles.active : ""}`}
								onClick={() => setSelectedDomain(domain)}>
								{domain}
							</button>
						))}
					</div>

					{/* Grille de cartes */}
					<div className={styles.projectsGrid}>
						{filteredProjects.length > 0 ? (
							filteredProjects.map((project, key) => (
								<div key={key} className={styles.projectCard}>
									<img src={project.image} alt={project.title} className={styles.projectImage} />
									<div className={styles.projectContent}>
										<div
											className={styles.projectDomain}
											style={{ backgroundColor: getDomainColor(project.domain) }}>
											{project.domain}
										</div>
										<h3 className={styles.projectTitle}>{project.title}</h3>
										{project.description && (
											<p className={styles.projectDescription}>{project.description}</p>
										)}
										{project.impact && <p className={styles.projectImpact}>{project.impact}</p>}
									</div>
								</div>
							))
						) : (
							<div className={styles.emptyState}>لم يتم العثور على أي مشاريع لهذه الفئة.</div>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
