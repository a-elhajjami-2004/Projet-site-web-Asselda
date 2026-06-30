import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/translations";
import "@/styles/globals.css";

const pageMetadata = getPageMetadata("fr", "about");

export const metadata: Metadata = {
	title: pageMetadata.title,
	description: pageMetadata.description,
	keywords: pageMetadata.keywords,
	openGraph: {
		title: pageMetadata.title,
		description: pageMetadata.description,
		images: ["/images/asselda.jpg"] /*L'image qui va s'afficher lorsqu'on va partager le lien*/,
	},
	alternates: {
		canonical: "" /*lien du site sur google*/,
	},
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
