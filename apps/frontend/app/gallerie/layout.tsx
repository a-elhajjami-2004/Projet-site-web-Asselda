import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Galerie - Association Asselda",
	description:
		"Découvrez les photos et vidéos des actions et événements de l'Association Asselda, mettant en lumière la vie quotidienne, les projets et les initiatives des habitants de Douar Asselda.",
	keywords: ["Association Asselda", "Galerie", "Photos", "Vidéos", "Projets", "Événements", "Douar Asselda"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
