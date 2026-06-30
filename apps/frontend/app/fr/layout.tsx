import type { Metadata } from "next";
import { Open_Sans, Noto_Kufi_Arabic } from "next/font/google";
import { getPageMetadata } from "@/lib/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin", "latin-ext"],
});

const notoKufi = Noto_Kufi_Arabic({
	variable: "--font-noto-kufi",
	subsets: ["arabic"],
});

const pageMetadata = getPageMetadata("fr", "home");

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="fr"
			className={`${openSans.className} ${notoKufi.className} font-sans h-full antialiased`}
			data-scroll-behavior="smooth">
			<body className="min-h-full flex flex-col">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
