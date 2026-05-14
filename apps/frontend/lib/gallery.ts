export type AlbumCategory =
	| "Tous"
	| "Assainissement & Eau"
	| "Voirie - Awrach 2022"
	| "Douar Asselda - Vie quotidienne"
	| "Séisme 2023"
	| "Formation & Éducation"
	| "Événements & AG";
export type Year = 0 | 2022 | 2023 | 2024 | 2025 | 2026;

export interface Album {
	title: string;
	category: Exclude<AlbumCategory, "Tous">;
	image: string;
	year: Exclude<Year, 0>;
}
export interface Video {
	title: string;
	thumbnail: string;
	year: Exclude<Year, 0>;
}

export const albums: Album[] = [
	{
		title: "Assainissement & Eau",
		category: "Assainissement & Eau",
		image: "https://picsum.photos/400/280?random=1",
		year: 2024,
	},
	{
		title: "Voirie - Awrach 2022",
		category: "Voirie - Awrach 2022",
		image: "https://picsum.photos/400/280?random=2",
		year: 2022,
	},
	{
		title: "Douar Asselda - Vie quotidienne",
		category: "Douar Asselda - Vie quotidienne",
		image: "https://picsum.photos/400/280?random=3",
		year: 2023,
	},
	{
		title: "Séisme 2023",
		category: "Séisme 2023",
		image: "https://picsum.photos/400/280?random=4",
		year: 2023,
	},
	{
		title: "Formation & Éducation",
		category: "Formation & Éducation",
		image: "https://picsum.photos/400/280?random=5",
		year: 2024,
	},
	{
		title: "Événements & AG",
		category: "Événements & AG",
		image: "https://picsum.photos/400/280?random=6",
		year: 2024,
	},
] as const;

export const videos: Video[] = [
	{
		title: "Reportage assainissement",
		thumbnail: "https://picsum.photos/400/280?random=7",
		year: 2024,
	},
	{
		title: "Douar Asselda - Avant séisme",
		thumbnail: "https://picsum.photos/400/280?random=8",
		year: 2023,
	},
	{
		title: "Aftermath & solidarité",
		thumbnail: "https://picsum.photos/400/280?random=9",
		year: 2023,
	},
	{
		title: "Programme Awrach",
		thumbnail: "https://picsum.photos/400/280?random=10",
		year: 2022,
	},
] as const;

export const albumCategories: Exclude<AlbumCategory, "Tous">[] = [
	"Assainissement & Eau",
	"Voirie - Awrach 2022",
	"Douar Asselda - Vie quotidienne",
	"Séisme 2023",
	"Formation & Éducation",
	"Événements & AG",
];

export const itemYears: Exclude<Year, 0>[] = [2022, 2023, 2024, 2025, 2026];

export const getAllAlbums = () => albums;
export const getAllVideos = () => videos;

export const getAlbumsByCategory = (category: AlbumCategory) => {
	if (category === "Tous") return albums;
	return albums.filter((album) => album.category === category);
};

export const getItemsByYear = (items: (Album | Video)[], yearFilter: Year) => {
	if (yearFilter === 0) return items;
	return items.filter((item) => item.year === yearFilter);
};
