import { Metadata } from "next";
import { getPageMetadata } from "@/lib/translations";

const pageMetadata = getPageMetadata("ar", "activities");

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
