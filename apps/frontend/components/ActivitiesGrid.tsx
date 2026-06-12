"use client";

import { use } from "react";
import Image from "next/image";
import { getTranslation, Language } from "@/lib/translations";
import { API_URL } from "@/lib/api";

export default function ActivitiesGrid({ activities, lang }: { activities: Promise<any>; lang: Language }) {
	const activitiesResponse = use(activities);

	return (
		<div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
			{activitiesResponse.data ? (
				activitiesResponse.data.map(
					({
						id,
						imageCover,
						domain,
						title,
						description,
						impact,
					}: {
						id: number;
						imageCover: { url: string; alternativeText: string };
						domain: string;
						title: string;
						description: string;
						impact: string;
					}) => (
						<div
							key={id}
							className="bg-lime-100 flex flex-col rounded-lg overflow-hidden shadow-lg/30 max-w-sm">
							<img
								src={API_URL + imageCover.url}
								alt={imageCover.alternativeText}
								className="w-full h-48 object-cover"
							/>

							<div className="p-6 flex-1">
								<span className="inline-block bg-[#49a120] text-white text-xs font-bold px-3 py-1 rounded mb-4">
									{getTranslation(lang, `pages.activities.domains.${domain}`)}
								</span>

								<h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

								<p className="text-gray-700 text-base leading-relaxed mb-4">{description}</p>
							</div>
							<p className="text-gray-700 text-base leading-relaxed bg-[#49a120] text-white p-4 rounded-b-lg">
								<strong>Impact : </strong> {impact}
							</p>
						</div>
					),
				)
			) : (
				<div className="col-span-4 text-center text-gray-500 py-8">
					{getTranslation(lang, "pages.activities.noActivities")}
				</div>
			)}
		</div>
	);
}
