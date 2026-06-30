"use client";

import { Suspense, useState } from "react";
import { getArticles, getEvents } from "@/lib/api";
import { getTranslation } from "@/lib/translations";
import ArticlesGrid from "@/components/ArticlesGrid";
import EventsGrid from "@/components/EventsGrid";

export default function NewsPage() {
	const [search, setSearch] = useState("");
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const lang = "en";

	const articlesPromise = getArticles("en");
	const eventsPromise = getEvents("en");

	const categories = [
		{ key: "all", label: "All" },
		{ key: "news", label: getTranslation(lang, "pages.news.categories.news") },
		{ key: "event", label: getTranslation(lang, "pages.news.categories.event") },
		{ key: "project", label: getTranslation(lang, "pages.news.categories.project") },
		{ key: "solidarity", label: getTranslation(lang, "pages.news.categories.solidarity") },
	];

	return (
		<main className="min-h-screen bg-white text-gray-900">
			{/* HERO */}
			<section className="hero-section">
				<div className="max-w-3xl z-10">
					<h1 className="hero-title">News & Events</h1>
					<p className="hero-copy">
						Stay informed about the latest news, projects, events and announcements from the Asselda
						Association.
					</p>
				</div>
			</section>

			<section className="bg-white py-12 px-6 flex flex-col gap-4">
				<div className="max-w-7xl mx-auto flex justify-center">
					<div className="flex flex-col items-center gap-4">
						<label className="font-semibold text-gray-900 text-xl">Search articles</label>
						<input
							aria-label="Search..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search..."
							className="rounded-md p-3 border-2 border-[#7cb645] text-black"
						/>
					</div>
				</div>
				<div className="max-w-7xl mx-auto flex justify-center">
					<div className="flex flex-col items-center gap-4">
						<label className="font-semibold text-gray-900 text-xl">Filter by category</label>
						<div className="font-bold max-w-6xl flex flex-row flex-wrap justify-center gap-4">
							{categories.map((category) => (
								<button
									key={category.key}
									className={
										category.key == selectedCategory
											? "min-w-max border-2 border-[#7cb645] bg-[#7cb645] text-white rounded-full px-4 py-2 cursor-pointer"
											: "min-w-max border-2 border-[#7cb645] bg-white text-forground rounded-full px-4 py-2 cursor-pointer"
									}
									onClick={() => setSelectedCategory(category.key)}>
									{category.label}
								</button>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ARTICLES */}
			<Suspense fallback={<div className="py-12 text-center">Loading news...</div>}>
				<ArticlesGrid
					articles={articlesPromise}
					lang={lang}
					search={search}
					category={selectedCategory === "all" ? "" : selectedCategory}
				/>
			</Suspense>

			{/* EVENTS */}
			<section className="py-12 bg-gray-50">
				<div className="max-w-7xl mx-auto px-6">
					<h2 className="text-2xl font-bold mb-6">Upcoming events</h2>
					<Suspense fallback={<div className="py-8 text-center">Loading events...</div>}>
						<EventsGrid events={eventsPromise} lang={lang} />
					</Suspense>
				</div>
			</section>
		</main>
	);
}
