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
				<h1>Nos Activités</h1>
				<p>
					De l'eau potable aux espaces réhabilitées, en passant par la formation et le soutien social,
					découvrez comment l'association transforme le quotidien des habitants de Douar Asselda.
				</p>
			</section>

			{/* Section Projets */}
			<section className={styles.projectsSection}>
				<div className={styles.projectsContainer}>
					<h2 className={styles.sectionTitle}>Projets Actuels</h2>

					{/* Filtre */}
					<div className={styles.filterContainer}>
						<span className={styles.filterLabel}>Filtrer par domaine :</span>
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
							<div className={styles.emptyState}>Aucun projet trouvé pour cette catégorie.</div>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
