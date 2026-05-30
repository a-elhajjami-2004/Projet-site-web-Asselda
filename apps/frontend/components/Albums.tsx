"use client";

import { use } from "react";
import Image from "next/image";
import { getTranslation, Language } from "@/lib/translations";
import { API_URL } from "@/lib/api";

export default function Albums({ albums, lang }: { albums: Promise<any>; lang: Language }) {
	const albumsResponse = use(albums);

	return (
		<div className="grid grid-cols-4 gap-6">
			{albumsResponse.data ? (
				albumsResponse.data.images.map((image: any) => (
					<div
						key={image.id}
						className="relative overflow-hidden rounded-xl cursor-pointer transition duration-300">
						<img
							src={API_URL + image.url}
							alt={image.alternativeText}
							className="w-full h-64 object-cover"
						/>
					</div>
				))
			) : (
				<div className="col-span-4 text-center text-gray-500 py-8">
					{getTranslation(lang, "gallery.noAlbums")}
				</div>
			)}
		</div>
	);
}
