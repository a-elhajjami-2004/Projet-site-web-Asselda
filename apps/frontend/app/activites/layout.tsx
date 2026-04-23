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
	title: "Activités - Association Asselda",
	description:
		"Découvrez les projets et initiatives de l'Association Asselda pour le développement durable et le bien-être des habitants de la région d'Asni, Al Haouz.",
	keywords: [
		"Association Asselda",
		"Activités",
		"Projets",
		"Développement durable",
		"Environnement",
		"Rural",
		"Social",
	],
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
