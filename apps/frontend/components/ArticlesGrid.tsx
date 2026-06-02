"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { API_URL } from "@/lib/api";
import { getTranslation, Language } from "@/lib/translations";

type Props = {
	articles: Promise<any>;
	lang: Language | string;
	search?: string;
	category?: string;
};

function extractImage(item: any) {
	// try a few possible shapes returned by Strapi or custom APIs
	const attrs = item.attributes || item;
	const candidate =
		attrs.image?.data?.[0]?.attributes?.url ||
		attrs.cover?.data?.[0]?.attributes?.url ||
		attrs.imageCover?.url ||
		attrs.image?.url ||
		attrs.thumbnail?.url ||
		attrs.coverUrl ||
		null;
	return candidate;
}

export default function ArticlesGrid({ articles, lang, search = "", category = "" }: Props) {
	const response = use(articles);
	const items = response?.data || response?.articles || [];

	const normalized = items.map((it: any) => {
		const attrs = it.attributes || it;
		return {
			id: it.id || attrs.id,
			title: attrs.title || attrs.name || "",
			summary: attrs.summary || attrs.excerpt || attrs.description || "",
			slug: attrs.slug || attrs.id || it.slug,
			category: attrs.category || attrs.type || "news",
			imageUrl: extractImage(it),
			content: attrs.content || attrs.body || "",
			date: attrs.publishedAt || attrs.date || null,
			location: attrs.location || null,
		};
	});

	const q = (search || "").trim().toLowerCase();
	const filtered = normalized.filter((a) => {
		if (category && category !== "all") {
			if (a.category !== category) return false;
		}
		if (!q) return true;
		return (a.title || "").toLowerCase().includes(q) || (a.summary || "").toLowerCase().includes(q);
	});

	return (
		<div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
			{filtered.map((a) => (
				<article key={a.slug} className="flex bg-white rounded-lg shadow-md overflow-hidden">
					<div className="w-40 h-32 md:w-48 md:h-36 flex-shrink-0 relative">
						{a.imageUrl ? (
							// Next Image requires absolute or configured loader; we prefix with API_URL when needed
							<Image
								src={
									a.imageUrl && a.imageUrl.startsWith("http")
										? a.imageUrl
										: API_URL
											? `${API_URL}${a.imageUrl}`
											: a.imageUrl
								}
								alt={a.title}
								width={320}
								height={240}
								className="object-cover w-full h-full"
							/>
						) : (
							<div className="w-full h-full bg-gray-100" />
						)}
					</div>

					<div className="p-4 flex-1 flex flex-col">
						<span
							className="inline-block text-xs font-semibold px-2 py-1 rounded"
							style={{ backgroundColor: "var(--color-hero)", color: "var(--color-hero-text)" }}>
							{getTranslation(lang, `pages.news.categories.${a.category}`) || a.category}
						</span>

						<h3 className="text-2xl font-bold text-gray-900 mt-2 mb-2">{a.title}</h3>

						<p className="text-gray-700 mb-4 flex-1">{a.summary}</p>

						<div className="mt-2">
							<Link href={`/fr/actualites/${a.slug}`} className="text-green-700 font-semibold">
								{getTranslation(lang, "pages.news.readMore")}
							</Link>
						</div>
					</div>
				</article>
			))}
			{filtered.length === 0 && (
				<div className="col-span-1 md:col-span-2 text-center text-gray-500 py-8">Aucune actualité trouvée.</div>
			)}
		</div>
	);
}
