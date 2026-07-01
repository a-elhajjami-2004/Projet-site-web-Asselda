"use client";

import { use } from "react";
import Image from "next/image";
import { API_URL } from "@/lib/api";
import { getTranslation, Language } from "@/lib/translations";
import { FaCalendarAlt, FaLocationArrow } from "react-icons/fa";

type Props = {
	events: Promise<any>;
	lang: Language | string;
};

function extractImage(item: any) {
	const attrs = item.attributes || item;
	return attrs.image?.data?.[0]?.attributes?.url || attrs.image?.url || attrs.cover?.url || null;
}

function formatDate(d: string | null) {
	if (!d) return "";
	try {
		const dt = new Date(d);
		return dt.toLocaleDateString();
	} catch {
		return d;
	}
}

export default function EventsGrid({ events, lang }: Props) {
	const response = use(events);
	const items = response?.data || response?.events || [];

	const normalized = items
		.map((it: any) => {
			const attrs = it.attributes || it;
			return {
				id: it.id || attrs.id,
				title: attrs.title || attrs.name || "",
				date: attrs.date || attrs.publishedAt || null,
				location: attrs.location || attrs.place || "",
				description: attrs.description || attrs.summary || "",
				imageUrl: extractImage(it),
			};
		})
		.sort((a: any, b: any) => {
			const da = a.date ? new Date(a.date).getTime() : 0;
			const db = b.date ? new Date(b.date).getTime() : 0;
			return db - da; // latest -> earliest
		});

	return (
		<div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
			{normalized.map((e: any) => (
				<article key={e.id} className="flex bg-white rounded-lg shadow-md overflow-hidden">
					<div className="w-44 h-32 flex-shrink-0 relative">
						{e.imageUrl ? (
							<Image
								src={
									e.imageUrl && e.imageUrl.startsWith("http")
										? e.imageUrl
										: API_URL
											? `${API_URL}${e.imageUrl}`
											: e.imageUrl
								}
								alt={e.title}
								width={320}
								height={240}
								className="object-cover w-full h-full"
							/>
						) : (
							<div className="w-full h-full bg-gray-100" />
						)}
					</div>

					<div className="p-4 flex-1">
						<h3 className="text-2xl font-bold text-gray-900 mb-2">{e.title}</h3>

						<div
							className="flex items-center gap-4 text-sm font-medium"
							style={{ color: "var(--color-hero)" }}>
							{/* <svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								viewBox="0 0 24 24"
								fill="currentColor">
								<path d="M12 8a4 4 0 100 8 4 4 0 000-8z" opacity=".25" />
								<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
							</svg> */}
							<FaCalendarAlt className="h-4 w-4" />
							<span>{formatDate(e.date)}</span>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 ml-2"
								viewBox="0 0 24 24"
								fill="currentColor">
								<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
							</svg>
							<span>{e.location}</span>
						</div>

						<p className="text-gray-700 mt-3">{e.description}</p>
					</div>
				</article>
			))}
			{normalized.length === 0 && (
				<div className="col-span-1 md:col-span-2 text-center text-gray-500 py-8">Aucun événement trouvé.</div>
			)}
		</div>
	);
}
