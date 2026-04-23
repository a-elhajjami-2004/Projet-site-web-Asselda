"use client";

import { useState, useRef, useEffect } from "react";
import styles from "@/styles/projects.module.css";
import {
	projects,
	timelineEvents,
	statuses,
	domains,
	getStatusColor,
	getDomainColor,
	filterProjects,
	type ProjectStatus,
	type ProjectDomain,
} from "@/lib/projects";

export default function Projects() {
	const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | "Tous">("Tous");
	const [selectedDomain, setSelectedDomain] = useState<ProjectDomain | "Tous">("Tous");
	const [timelineVisible, setTimelineVisible] = useState(false);

	const timelineRef = useRef<HTMLDivElement>(null);

	const filteredProjects = filterProjects(projects, selectedStatus, selectedDomain);

	// Intersection Observer for timeline animation
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimelineVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.3 },
		);

		if (timelineRef.current) {
			observer.observe(timelineRef.current);
		}

		return () => {
			if (timelineRef.current) {
				observer.unobserve(timelineRef.current);
			}
		};
	}, []);

	return (
		<main>
			{/* Section Héro */}
			<section className={styles.projectsHero}>
				<div className={styles.projectsOverlay}></div>
				<hgroup className={styles.projectsContent}>
					<h1>Nos Projets</h1>
					<p>
						Depuis 1996, l'Association Asselda a conçu et réalisé des projets structurants pour la
						communauté de Douar Asselda. Chaque projet répond à un besoin réel, identifié avec et pour ses
						habitants.
					</p>
				</hgroup>
			</section>

			{/* Section Projets */}
			<section className={styles.projectsSection}>
				<div className={styles.projectsContainer}>
					<h2 className={styles.sectionTitle}>Projets Actuels</h2>

					{/* Filtres */}
					<div className={styles.filtersWrapper}>
						<div className={styles.filterSection}>
							<label className={styles.filterLabel}>Filtrer par statut :</label>
							<div className={styles.filterButtonsGroup}>
								<button
									className={`${styles.filterButton} ${selectedStatus === "Tous" ? styles.active : ""}`}
									onClick={() => setSelectedStatus("Tous")}>
									Tous
								</button>
								{statuses.map((status) => (
									<button
										key={status}
										className={`${styles.filterButton} ${selectedStatus === status ? styles.active : ""}`}
										onClick={() => setSelectedStatus(status)}>
										{status}
									</button>
								))}
							</div>
						</div>

						<div className={styles.filterSection}>
							<label className={styles.filterLabel}>Filtrer par domaine :</label>
							<div className={styles.filterButtonsGroup}>
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
						</div>
					</div>

					{/* Cartes de projets */}
					<div className={styles.projectsGrid}>
						{filteredProjects.length > 0 ? (
							filteredProjects.map((project) => (
								<article key={project.id} className={styles.projectCard}>
									<img src={project.image} alt={project.title} className={styles.projectImage} />
									<main className={styles.projectBody}>
										<section className={styles.projectMeta}>
											<span
												className={styles.badge}
												style={{ backgroundColor: getStatusColor(project.status) }}>
												{project.status}
											</span>
											<span
												className={styles.badge}
												style={{ backgroundColor: getDomainColor(project.domain) }}>
												{project.domain}
											</span>
										</section>

										<h3 className={styles.projectTitle}>{project.title}</h3>

										{project.budget && (
											<div className={styles.projectDetail}>
												<span className={styles.projectDetailLabel}>Budget total :</span>
												<span>{project.budget}</span>
											</div>
										)}

										{project.partner && (
											<div className={styles.projectDetail}>
												<span className={styles.projectDetailLabel}>
													Partenaire principal :
												</span>
												<span>{project.partner}</span>
											</div>
										)}

										{project.beneficiary && (
											<div className={styles.projectDetail}>
												<span className={styles.projectDetailLabel}>Bénéficiaire :</span>
												<span>{project.beneficiary}</span>
											</div>
										)}

										{project.description && (
											<p className={styles.projectDescription}>{project.description}</p>
										)}

										{project.results && (
											<p className={styles.projectResults}>
												<strong>Résultats :</strong> {project.results}
											</p>
										)}
									</main>
								</article>
							))
						) : (
							<div className={styles.emptyState}>Aucun projet ne correspond à cette sélection.</div>
						)}
					</div>
				</div>
			</section>

			{/* Section Timeline */}
			<section className={styles.timelineSection}>
				<h2 className={styles.timelineTitle}>Timeline des Projets</h2>
				<div
					ref={timelineRef}
					className={`${styles.timelineContainer} ${timelineVisible ? styles.visible : ""}`}>
					<div className={styles.timelineLine}></div>

					<div className={styles.timelineContent}>
						{timelineEvents.map((event) => (
							<div key={event.id} className={styles.timelineItem}>
								<div className={styles.timelineYear}>{event.year}</div>
								<div className={styles.timelineEventBody}>
									<h3 className={styles.timelineEventTitle}>{event.title}</h3>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
