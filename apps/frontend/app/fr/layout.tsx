import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getPageMetadata } from "@/lib/translations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
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
		<html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
