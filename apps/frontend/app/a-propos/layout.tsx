import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "APropos_association_Asselda",
  description: "Page à-propos donnant plus d'informations sur l'association Asselda contenant toutes les informations sur celle-ci et tous ces projets réalisés",
keywords:["Asselda","Association","a-propos","developpement","rural","al-houz"] ,
openGraph: {
    title: "APropos_Association_Asselda_Al-Haouz",
    description: "Page à-propos donnant plus d'informations sur l'association Asselda contenant toutes les informations sur celle-ci et tous ces projets réalisés",
    images: ["/images/asselda.jpg"],/*L'image qui va s'afficher lorsqu'on va partager le lien*/
  },
  alternates: {
    canonical: "",/*lien du site sur google*/
  },};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
