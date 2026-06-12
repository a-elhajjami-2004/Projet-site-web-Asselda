"use client";

import { use } from "react";
import Image from "next/image";
import { getTranslation, Language } from "@/lib/translations";
import { API_URL } from "@/lib/api";
import styles from "@/styles/projects.module.css";

export default function ProjectsGrid({ projects, lang }: { projects: Promise<any>; lang: Language }) {
	const projectsResponse = use(projects);

	return (
		<div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 gap-8">
			{projectsResponse.data.length > 0 ? (
				projectsResponse.data.map(
					({
						id,
						imageCover,
						statusType,
						domain,
						flagship,
						title,
						budget,
						partner,
						description,
						results,
					}: {
						id: number;
						imageCover: { url: string; alternativeText: string };
						statusType: string;
						domain: string;
						flagship: boolean;
						title: string;
						budget: string;
						partner: { name: string };
						description: string;
						results: string;
					}) => (
						<article key={id} className={styles.projectCard}>
							<img
								src={API_URL + imageCover.url}
								alt={imageCover.alternativeText}
								className={styles.projectImage}
							/>
							<main className={styles.projectBody}>
								<section className={styles.projectMeta}>
									<span className="inline-block bg-[#49a120] text-white text-xs font-bold px-3 py-1 rounded mb-4">
										{getTranslation(lang, `pages.projects.statuses.${statusType}`)}
									</span>
									<span className="inline-block bg-[#49a120] text-white text-xs font-bold px-3 py-1 rounded mb-4">
										{getTranslation(lang, `pages.projects.domains.${domain}`)}
									</span>
								</section>

								<h3 className={styles.projectTitle}>{title}</h3>

								{budget && (
									<p className={styles.projectDetail}>
										<strong className={styles.projectDetailLabel}>
											{getTranslation(lang, "pages.projects.budgetLabel")}
										</strong>
										<span>{budget}</span>
									</p>
								)}

								{partner && (
									<p className={styles.projectDetail}>
										<strong className={styles.projectDetailLabel}>
											{getTranslation(lang, "pages.projects.partnerLabel")}
										</strong>
										<span>{partner.name}</span>
									</p>
								)}

								{/* {Object.entries(project.details).map(([key, value]) => (
									<p className={styles.projectDetail}>
										<strong className={styles.projectDetailLabel}>{key}</strong>
										<span>{value}</span>
									</p>
								))} */}

								<div className={styles.projectDescription}>{description}</div>

								{results && (
									<p className={styles.projectResults}>
										<strong>{getTranslation(lang, "pages.projects.resultsLabel")}</strong>
										{results}
									</p>
								)}
							</main>
						</article>
					),
				)
			) : (
				<div className={styles.emptyState}>{getTranslation(lang, "pages.projects.noProjects")}</div>
			)}
		</div>
	);
}
