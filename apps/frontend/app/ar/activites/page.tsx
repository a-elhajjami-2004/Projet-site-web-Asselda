"use client";

import { useEffect, useState, Suspense } from "react";
import { domains, type Domain } from "@/lib/activities";
import ActivitiesGrid from "@/components/ActivitiesGrid";
import { getActivities } from "@/lib/api";
import { translations } from "@/lib/translations";

export default function Activities() {
	const [selectedDomain, setSelectedDomain] = useState<string>("الكل");
	const translatedDomains = translations["ar"].pages.activities.domains;

	// const [activities, setActivities] = useState<any>({});
	// useEffect(() => {
	// 	(async () => {
	// 		setActivities(await getActivities("fr"));
	// 	})();
	// }, []);

	return (
		<main>
			{/* Section Héro */}
			<section className="hero-section">
				<div className="max-w-3xl">
					<h1 className="hero-title">أنشطتنا</h1>
					<p className="hero-copy">
						من الماء الشروب إلى الفضاءات المؤهَّلة، مروراً بالتكوين والدعم الاجتماعي، اكتشف كيف تحوّل
						الجمعية حياة سكان دوار أسلدة يوماً بعد يوم.
					</p>
				</div>
			</section>

			{/* Section Projets */}
			<section className="bg-white py-12 px-6">
				<div className="max-w-7xl mx-auto flex justify-center">
					<div className="flex flex-col items-center gap-4">
						<label className="font-semibold text-gray-900 text-xl"></label>
						<div className="font-bold max-w-6xl flex flex-row justify-center gap-4">
							<button
								className={
									selectedDomain == "الكل"
										? "min-w-max border-2 border-[#7cb645] bg-[#7cb645] text-white rounded-full px-4 py-2 cursor-pointer"
										: "min-w-max border-2 border-[#7cb645] bg-white text-forground rounded-full px-4 py-2 cursor-pointer"
								}
								onClick={() => setSelectedDomain("الكل")}>
								الكل
							</button>
							{Object.entries(translatedDomains).map(([key, domain]) => (
								<button
									key={key}
									className={
										domain == selectedDomain
											? "min-w-max border-2 border-[#7cb645] bg-[#7cb645] text-white rounded-full px-4 py-2 cursor-pointer"
											: "min-w-max border-2 border-[#7cb645] bg-white text-forground rounded-full px-4 py-2 cursor-pointer"
									}
									onClick={() => setSelectedDomain(domain)}>
									{domain}
								</button>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Grille de cartes */}
			<Suspense fallback={<div>جاري تحميل الأنشطة...</div>}>
				<ActivitiesGrid albums={getActivities("ar")} lang="ar" />
			</Suspense>
		</main>
	);
}
