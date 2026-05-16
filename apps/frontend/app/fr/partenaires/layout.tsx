import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/translations";
import "@/styles/globals.css";

const pageMetadata = getPageMetadata("fr", "partners");

export const metadata: Metadata = {
	title: pageMetadata.title,
	description: pageMetadata.description,
	keywords: pageMetadata.keywords,
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
