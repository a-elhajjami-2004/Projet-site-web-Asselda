"use client";

import { use, useState } from "react";
import Image from "next/image";

import { ColumnsPhotoAlbum, MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { Fullscreen, Slideshow, Zoom, Share } from "yet-another-react-lightbox/plugins";

import { getTranslation, Language } from "@/lib/translations";
import { API_URL } from "@/lib/api";

type ImageFormat = { url: string; width: number; height: number };

function albumPhotos(images: Array<any>, [index, setIndex]: [number, React.Dispatch<React.SetStateAction<number>>]) {
	const photos = images.map(
		({
			documentId,
			name,
			url,
			alternativeText,
			width,
			height,
			formats,
		}: {
			documentId: string;
			name: string;
			url: string;
			alternativeText: string;
			width: number;
			height: number;
			formats: { large: ImageFormat; medium: ImageFormat; small: ImageFormat; thumbnail: ImageFormat };
		}) => ({
			key: documentId,
			name,
			width,
			height,
			src: API_URL + url,
			alt: alternativeText ?? name,
			srcSet: Object.values(formats).map(({ url, width, height }) => ({ src: API_URL + url, width, height })),
		}),
	);

	return (
		<>
			<MasonryPhotoAlbum
				photos={photos}
				columns={(containerWidth) => {
					if (containerWidth < 400) return 2;
					if (containerWidth < 800) return 3;
					return 4;
				}}
				onClick={({ index }) => setIndex(index)}
			/>
			<Lightbox
				slides={photos}
				open={index >= 0}
				index={index}
				close={() => setIndex(-1)}
				plugins={[Fullscreen, Slideshow, Share, Zoom]}
			/>
		</>
	);

	// return album.images.map((image: any) => (
	// 	<div key={image.id} className="relative overflow-hidden rounded-xl cursor-pointer transition duration-300">
	// 		<img src={API_URL + image.url} alt={image.alternativeText} className="w-full h-64 object-cover" />
	// 	</div>
	// ));
}

export default function Albums({ albums, all, lang }: { albums: Promise<any>; all: boolean; lang: Language }) {
	const albumsResponse = use(albums);

	const [index, setIndex] = useState(-1);

	return (
		<div className="">
			{albumsResponse.data ? (
				all ? (
					albumPhotos(albumsResponse.data.map((albums: any) => albums.images).flat(), [index, setIndex])
				) : (
					albumPhotos(albumsResponse.data.images, [index, setIndex])
				)
			) : (
				<div className="col-span-4 text-center text-gray-500 py-8">
					{getTranslation(lang, "pages.gallery.noAlbums")}
				</div>
			)}
		</div>
	);
}
