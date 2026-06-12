"use client";

import { useEffect, useState, Suspense } from "react";
import { domains, type Domain } from "@/lib/activities";
import ActivitiesGrid from "@/components/ActivitiesGrid";
import { getActivities } from "@/lib/api";
import { getTranslation, translations } from "@/lib/translations";

export default function Activities() {
	type DomainKey = keyof typeof translatedDomains | "all";
	const [selectedDomain, setSelectedDomain] = useState<DomainKey>("all");
	const translatedDomains = translations.fr.pages.activities.domains;

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
					<h1 className="hero-title">Nos Activités</h1>
					<p className="hero-copy">
						De l'eau potable aux espaces réhabilitées, en passant par la formation et le soutien social,
						découvrez comment l'association transforme le quotidien des habitants de Douar Asselda.
					</p>
				</div>
			</section>

			{/* Section Projets */}
			<section className="bg-white py-12 px-6">
				<div className="max-w-7xl mx-auto flex justify-center">
					<div className="flex flex-col items-center gap-4">
						<label className="font-semibold text-gray-900 text-xl">Filtrer par domaine :</label>
						<div className="font-bold max-w-6xl flex flex-row justify-center gap-4">
							<button
								key="all"
								className={
									selectedDomain == "all"
										? "min-w-max border-2 border-[#7cb645] bg-[#7cb645] text-white rounded-full px-4 py-2 cursor-pointer"
										: "min-w-max border-2 border-[#7cb645] bg-white text-forground rounded-full px-4 py-2 cursor-pointer"
								}
								onClick={() => setSelectedDomain("all")}>
								Tous
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

			{/* Grille de cartes */}
			<Suspense fallback={<div>Chargement des activités...</div>}>
				<ActivitiesGrid
					activities={getActivities("fr", selectedDomain == "all" ? undefined : selectedDomain)}
					lang="fr"
				/>
			</Suspense>
		</main>
	);
}
