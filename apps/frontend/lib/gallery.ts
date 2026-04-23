export type AlbumCategory = "Tous" | "Assainissement & Eau" | "Voirie - Awrach 2022" | "Douar Asselda - Vie quotidienne" | "Séisme 2023" | "Formation & Éducation" | "Événements & AG";

export interface Album {
  id: number;
  title: string;
  category: Exclude<AlbumCategory, "Tous">;
  image?: string;
  date: string; // Format: "YYYY-MM-DD"
}

export interface Video {
  id: number;
  title: string;
  thumbnail?: string;
  date: string; // Format: "YYYY-MM-DD"
}

export const albums: Album[] = [
  {
    id: 1,
    title: "Assainissement & Eau",
    category: "Assainissement & Eau",
    image: "https://picsum.photos/400/280?random=1",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Voirie - Awrach 2022",
    category: "Voirie - Awrach 2022",
    image: "https://picsum.photos/400/280?random=2",
    date: "2022-06-20"
  },
  {
    id: 3,
    title: "Douar Asselda - Vie quotidienne",
    category: "Douar Asselda - Vie quotidienne",
    image: "https://picsum.photos/400/280?random=3",
    date: "2023-09-10"
  },
  {
    id: 4,
    title: "Séisme 2023",
    category: "Séisme 2023",
    image: "https://picsum.photos/400/280?random=4",
    date: "2023-09-08"
  },
  {
    id: 5,
    title: "Formation & Éducation",
    category: "Formation & Éducation",
    image: "https://picsum.photos/400/280?random=5",
    date: "2024-03-12"
  },
  {
    id: 6,
    title: "Événements & AG",
    category: "Événements & AG",
    image: "https://picsum.photos/400/280?random=6",
    date: "2024-02-05"
  }
];

export const videos: Video[] = [
  {
    id: 1,
    title: "Reportage assainissement",
    thumbnail: "https://picsum.photos/400/280?random=7",
    date: "2024-01-20"
  },
  {
    id: 2,
    title: "Douar Asselda - Avant séisme",
    thumbnail: "https://picsum.photos/400/280?random=8",
    date: "2023-09-01"
  },
  {
    id: 3,
    title: "Aftermath & solidarité",
    thumbnail: "https://picsum.photos/400/280?random=9",
    date: "2023-09-15"
  },
  {
    id: 4,
    title: "Programme Awrach",
    thumbnail: "https://picsum.photos/400/280?random=10",
    date: "2022-07-10"
  }
];

export const albumCategories: Exclude<AlbumCategory, "Tous">[] = [
  "Assainissement & Eau",
  "Voirie - Awrach 2022",
  "Douar Asselda - Vie quotidienne",
  "Séisme 2023",
  "Formation & Éducation",
  "Événements & AG"
];

export const getAllAlbums = () => albums;
export const getAllVideos = () => videos;

export const getAlbumsByCategory = (category: AlbumCategory) => {
  if (category === "Tous") return albums;
  return albums.filter((album) => album.category === category);
};

export const getItemsByDate = (items: (Album | Video)[], dateFilter: string) => {
  if (!dateFilter) return items;
  return items.filter((item) => item.date.startsWith(dateFilter.substring(0, 7)));
};
