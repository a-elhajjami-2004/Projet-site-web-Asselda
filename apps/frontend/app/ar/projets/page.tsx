"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import styles from "@/styles/projects.module.css";
import ProjectsGrid from "@/components/ProjectsGrid";
import EventsTimeline from "@/components/EventsTimeline";
import { translations } from "@/lib/translations";
import { getProjects, getTimelineEvents } from "@/lib/api";

export default function Projects() {
	type StatusKey = keyof typeof translatedStatues | "all";
	type DomainKey = keyof typeof translatedDomains | "all";
	const [selectedStatus, setSelectedStatus] = useState<StatusKey>("all");
	const [selectedDomain, setSelectedDomain] = useState<DomainKey>("all");
	const [timelineVisible, setTimelineVisible] = useState(false);

	const translatedStatues = translations.ar.pages.projects.statuses;
	const translatedDomains = translations.ar.pages.projects.domains;

	const timelineRef = useRef<HTMLDivElement>(null);

	// const filteredProjects = filterProjects(projects, selectedStatus, selectedDomain);

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
			<section className="hero-section">
				<div className="max-w-3xl z-10">
					<h1 className="hero-title">مشاريعنا</h1>
					<p className="hero-copy">
						منذ عام 1996، صممت جمعية أسلدة ونفّذت مشاريع هيكلية تخدم مجتمع دوار أسلدة. كل مشروع يستجيب لحاجة
						حقيقية، حُدِّدت مع السكان ومن أجلهم.
					</p>
				</div>
			</section>
			<section className="bg-white py-12 px-6 flex flex-col gap-4">
				<div className="max-w-7xl mx-auto flex justify-center">
					<div className="flex flex-col items-center gap-4">
						<label className="font-semibold text-gray-900 text-xl">الاختيار حسب الحالة</label>
						<div className="font-bold max-w-6xl flex flex-row flex-wrap justify-center gap-4">
							<button
								key={"all"}
								className={
									selectedStatus == "all"
										? "min-w-max border-2 border-[#7cb645] bg-[#7cb645] text-white rounded-full px-4 py-2 cursor-pointer"
										: "min-w-max border-2 border-[#7cb645] bg-white text-forground rounded-full px-4 py-2 cursor-pointer"
								}
								onClick={() => setSelectedStatus("all")}>
								الكل
							</button>
							{Object.entries(translatedStatues).map(([key, status]) => (
								<button
									key={key}
									className={
										key == selectedStatus
											? "min-w-max border-2 border-[#7cb645] bg-[#7cb645] text-white rounded-full px-4 py-2 cursor-pointer"
											: "min-w-max border-2 border-[#7cb645] bg-white text-forground rounded-full px-4 py-2 cursor-pointer"
									}
									onClick={() => setSelectedStatus(key as StatusKey)}>
									{status}
								</button>
							))}
						</div>
					</div>
				</div>
				<div className="max-w-7xl mx-auto flex justify-center">
					<div className="flex flex-col items-center gap-4">
						<label className="font-semibold text-gray-900 text-xl">الاختيار حسب المجال</label>
						<div className="font-bold max-w-6xl flex flex-row flex-wrap justify-center gap-4">
							<button
								key={"all"}
								className={
									selectedDomain == "all"
										? "min-w-max border-2 border-[#7cb645] bg-[#7cb645] text-white rounded-full px-4 py-2 cursor-pointer"
										: "min-w-max border-2 border-[#7cb645] bg-white text-forground rounded-full px-4 py-2 cursor-pointer"
								}
								onClick={() => setSelectedDomain("all")}>
								الكل
							</button>
							{Object.entries(translatedDomains).map(([key, domain]) => (
								<button
									key={key}
									className={
										key == selectedDomain
											? "min-w-max border-2 border-[#7cb645] bg-[#7cb645] text-white rounded-full px-4 py-2 cursor-pointer"
											: "min-w-max border-2 border-[#7cb645] bg-white text-forground rounded-full px-4 py-2 cursor-pointer"
									}
									onClick={() => setSelectedDomain(key as DomainKey)}>
									{domain}
								</button>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Section Projets */}
			<section className={styles.projectsSection + " bg-white"}>
				<Suspense fallback={<div className="py-12 text-center">جاري التحميل...</div>}>
					<ProjectsGrid
						projects={getProjects(
							"ar",
							selectedStatus === "all" ? undefined : selectedStatus,
							selectedDomain === "all" ? undefined : selectedDomain,
						)}
						lang="ar"
					/>
				</Suspense>
			</section>

			{/* Section Timeline */}
			<section className={styles.timelineSection}>
				<h2 className={styles.timelineTitle}>الجدول الزمني للمشاريع</h2>
				<div
					ref={timelineRef}
					className={`${styles.timelineContainer} ${timelineVisible ? styles.visible : ""}`}>
					<div className={styles.timelineLine}></div>
					<Suspense fallback={<div className="py-12 text-center">جاري التحميل...</div>}>
						<EventsTimeline eventsTimeline={getTimelineEvents("ar")} lang="ar" />
					</Suspense>
				</div>
			</section>
		</main>
	);
}
