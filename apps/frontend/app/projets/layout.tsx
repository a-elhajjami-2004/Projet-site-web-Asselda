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
	title: "Projets - Association Asselda",
	description:
		"Découvrez les projets réalisés et en cours de l'Association Asselda, visant à améliorer les conditions de vie des habitants de Douar Asselda à travers des initiatives durables dans les domaines de l'environnement, du rural, du social et de l'éducation.",
	keywords: ["projets", "association asselda", "douar asselda", "environnement", "rural", "social", "éducation"],
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
