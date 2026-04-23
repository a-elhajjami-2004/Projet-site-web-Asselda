"use client";

import { useState, useMemo } from "react";
import styles from "@/styles/gallery.module.css";
import {
	albums,
	videos,
	albumCategories,
	getAlbumsByCategory,
	getItemsByYear,
	type AlbumCategory,
	type Year,
	Album,
	Video,
	itemYears,
} from "@/lib/gallery";

export default function Gallery() {
	const [selectedCategory, setSelectedCategory] = useState<AlbumCategory>("Tous");
	const [selectedYear, setSelectedYear] = useState<Year>(0);

	const filteredAlbums = useMemo(() => {
		let filtered = getAlbumsByCategory(selectedCategory);
		return getItemsByYear(filtered, selectedYear);
	}, [selectedCategory, selectedYear]);

	const filteredVideos = useMemo(() => {
		return getItemsByYear(videos, selectedYear);
	}, [selectedYear]);

	return (
		<main>
			{/* Section Héro */}
			<section className={styles.galleryHero}>
				<div className={styles.galleryOverlay}></div>
				<div className={styles.galleryContent}>
					<h1>Galerie Photos & Vidéos</h1>
					<p>
						Une image vaut mille mots. Découvrez en images les projets, les actions et la vie de
						l'Association Asselda et de Douar Asselda.
					</p>
				</div>
			</section>

			{/* Section Galerie */}
			<section className={styles.gallerySection}>
				<div className={styles.galleryContainer}>
					{/* Filtres */}
					<div className={styles.filterContainer}>
						<div className={styles.filterGroup}>
							<label className={styles.filterLabel}>Filtrer par album :</label>
							<select
								className={styles.filterSelect}
								value={selectedYear}
								onChange={(e) => setSelectedCategory(e.target.value as AlbumCategory)}>
								<option value="Tous">Tous les albums</option>
								{albumCategories.map((category) => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</select>
						</div>

						<div className={styles.filterGroup}>
							<label className={styles.filterLabel}>Filtrer par année :</label>
							<select
								className={styles.filterSelect}
								value={selectedYear}
								onChange={(e) => setSelectedYear(parseInt(e.target.value) as Year)}>
								<option value="0">Tous les albums</option>
								{itemYears.map((year) => (
									<option key={year} value={year}>
										{year}
									</option>
								))}
							</select>
						</div>
					</div>

					{/* Album Photos */}
					<h2 className={styles.sectionTitle}>Album Photos</h2>
					<div className={styles.gallery}>
						{filteredAlbums.length > 0 ? (
							filteredAlbums.map((album) => (
								<div key={album.id} className={styles.galleryCard}>
									<img src={(album as Album).image} alt={album.title} className={styles.cardImage} />
									<div className={styles.cardOverlay}></div>
									<div className={styles.cardTitle}>{album.title}</div>
								</div>
							))
						) : (
							<div className={styles.emptyState}>Aucune photo trouvée pour cette sélection.</div>
						)}
					</div>

					{/* Vidéos */}
					<h2 className={styles.subsectionTitle}>Vidéos</h2>
					<div className={styles.gallery}>
						{filteredVideos.length > 0 ? (
							filteredVideos.map((video) => (
								<div key={video.id} className={styles.galleryCard}>
									<img
										src={(video as Video).thumbnail}
										alt={video.title}
										className={styles.cardImage}
									/>
									<div className={styles.cardOverlay}></div>
									<div className={styles.playButton}>▶</div>
									<div className={styles.cardTitle}>{video.title}</div>
								</div>
							))
						) : (
							<div className={styles.emptyState}>Aucune vidéo trouvée pour cette sélection.</div>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
