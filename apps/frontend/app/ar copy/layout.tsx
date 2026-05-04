import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
	title: "Accueil_association_Asselda",
	description:
		"Page d'accueil de l'association Asselda contenant toutes les informations sur celle-ci et tous ces projets réalisés",
	keywords: ["Asselda", "Association", "Accueil"],
	openGraph: {
		title: "Accueil_Association_Asselda_Al-Haouz",
		description:
			"Page d'accueil de l'association Asselda contenant toutes les informations sur celle-ci et tous ces projets réalisés",
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
		<html lang="ar" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
