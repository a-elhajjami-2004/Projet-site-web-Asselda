"use client";

import { useState, useEffect, Suspense } from "react";
import Albums from "@/components/Albums";
import { getAlbumTitles, getAlbumPhotos } from "@/lib/api";

export default function Gallery() {
	const [albumId, setAlbumId] = useState<string>("*");
	const [albumTitles, setAlbumTiltes] = useState<{ data: { id: number; documentId: string; title: string }[] }>({
		data: [],
	});
	useEffect(() => {
		(async () => {
			setAlbumTiltes(await getAlbumTitles("fr"));
		})();
	}, []);

	return (
		<main>
			{/* Section Héro */}
			<section className="hero-section">
				<div className="relative z-10 max-w-3xl">
					<h1 className="hero-title">Galerie Photos & Vidéos</h1>
					<p className="hero-copy">
						Une image vaut mille mots. Découvrez en images les projets, les actions et la vie de
						l'Association Asselda et de Douar Asselda.
					</p>
				</div>
			</section>

			{/* Section Filtres avec fond vert */}
			<section className="bg-white py-12 px-6">
				<div className="max-w-7xl mx-auto flex justify-center">
					<div className="flex flex-col items-center gap-4">
						<label className="font-semibold text-gray-900 text-xl">Filtrer par album :</label>
						<select
							className="px-4 py-2 border-2 border-[#7cb645] rounded text-base bg-white text-gray-900 cursor-pointer font-medium"
							value={albumId}
							onChange={(e) => setAlbumId(e.target.value)}>
							<option value="*">Tous les albums</option>
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
					<h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Album Photos</h2>
					<Suspense fallback={<div>Chargement des photos...</div>}>
						<Albums albums={getAlbumPhotos(albumId, "fr")} lang="fr" />
					</Suspense>
				</div>
			</section>
		</main>
	);
}
