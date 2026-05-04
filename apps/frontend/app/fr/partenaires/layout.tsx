import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "Partenaires - Association Asselda",
	description: "Découvrez nos partenaires et collaborateurs dans la mission de l'Association Asselda.",
	keywords: ["partenaires", "collaborateurs", "association", "solidarité"],
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
