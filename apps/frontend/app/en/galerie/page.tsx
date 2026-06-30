"use client";

import { useState, useEffect, Suspense } from "react";
import Albums from "@/components/Albums";
import { getAlbumTitles, getAlbumPhotos, getAlbums } from "@/lib/api";

export default function Gallery() {
	const [albumId, setAlbumId] = useState<string>("*");
	const [albumTitles, setAlbumTiltes] = useState<{ data: { id: number; documentId: string; title: string }[] }>({
		data: [],
	});
	useEffect(() => {
		(async () => {
			setAlbumTiltes(await getAlbumTitles("en"));
		})();
	}, []);

	return (
		<main>
			{/* Section Héro */}
			<section className="hero-section">
				<div className="relative z-10 max-w-3xl">
					<h1 className="hero-title">Media Gallery</h1>
					<p className="hero-copy">
						A picture is worth a thousand words. Discover in pictures the projects, actions, and life of the
						Asselda Association and Douar Asselda.
					</p>
				</div>
			</section>

			{/* Section Filtres avec fond vert */}
			<section className="bg-white py-12 px-6">
				<div className="max-w-7xl mx-auto flex justify-center">
					<div className="flex flex-col items-center gap-4">
						<label className="font-semibold text-gray-900 text-xl">Filter by album:</label>
						<select
							className="px-4 py-2 border-2 border-[#7cb645] rounded text-base bg-white text-gray-900 cursor-pointer font-medium"
							value={albumId}
							onChange={(e) => setAlbumId(e.target.value)}>
							<option value="*">All albums</option>
							{albumTitles.data.map(({ documentId, title }) => (
								<option key={documentId} value={documentId}>
									{title}
								</option>
							))}
						</select>
					</div>
				</div>
			</section>

			{/* Section Galerie */}
			<section className="bg-white py-12 px-6">
				<div className="max-w-7xl mx-auto">
					{/* Album Photos */}
					<h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Photo Album</h2>
					<Suspense fallback={<div>Loading photos...</div>}>
						<Albums
							albums={albumId == "*" ? getAlbums("en") : getAlbumPhotos(albumId, "en")}
							all={albumId == "*"}
							lang="en"
						/>
					</Suspense>
				</div>
			</section>
		</main>
	);
}
