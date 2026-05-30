"use client";

import { useState, useMemo } from "react";
import { albums, albumCategories, getAlbumsByCategory, type AlbumCategory, Album } from "@/lib/gallery";

export default function Gallery() {
	const [selectedCategory, setSelectedCategory] = useState<AlbumCategory>("Tous");

	const filteredAlbums = useMemo(() => {
		return getAlbumsByCategory(selectedCategory);
	}, [selectedCategory]);

	return (
		<main>
			{/* Section Héro */}
			<section
				className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-6 py-20"
				style={{ backgroundImage: 'url("https://picsum.photos/1600/900?random=20")' }}>
				<div className="absolute inset-0 bg-black/50"></div>
				<div className="relative z-10 max-w-3xl">
					<h1 className="text-5xl font-bold text-white mb-5">Galerie Photos & Vidéos</h1>
					<p className="text-lg text-white/95 leading-relaxed">
						Une image vaut mille mots. Découvrez en images les projets, les actions et la vie de
						l'Association Asselda et de Douar Asselda.
					</p>
				</div>
			</section>

			{/* Section Filtres avec fond vert */}
			<section className="bg-[#4a7c3d] py-12 px-6">
				<div className="max-w-7xl mx-auto flex justify-center">
					<div className="flex flex-col items-center gap-4">
						<label className="font-semibold text-white text-sm">Filtrer par album :</label>
						<select
							className="px-4 py-2 border-2 border-white rounded text-base bg-white text-gray-900 cursor-pointer font-medium"
							value={selectedCategory}
							onChange={(e) => setSelectedCategory(e.target.value as AlbumCategory)}>
							<option value="Tous">Tous les albums</option>
							{albumCategories.map((category) => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</select>
					</div>
				</div>
			</section>

			{/* Section Galerie */}
			<section className="bg-white py-16 px-6">
				<div className="max-w-7xl mx-auto">
					{/* Album Photos */}
					<h2 className="text-3xl font-bold mb-8 text-gray-900">Album Photos</h2>
					<div className="grid grid-cols-4 gap-6">
						{filteredAlbums.length > 0 ? (
							filteredAlbums.map((album, key) => (
								<div
									key={key}
									className="relative overflow-hidden rounded-xl cursor-pointer transition duration-300">
									<img
										src={(album as Album).image}
										alt={album.title}
										className="w-full h-64 object-cover"
									/>
									<div className="absolute inset-0 bg-black/40"></div>
									<div className="absolute inset-0 flex items-center justify-center">
										<p className="text-white font-semibold text-center px-4">{album.title}</p>
									</div>
								</div>
							))
						) : (
							<div className="col-span-4 text-center text-gray-500 py-8">
								Aucune photo trouvée pour cette sélection.
							</div>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
