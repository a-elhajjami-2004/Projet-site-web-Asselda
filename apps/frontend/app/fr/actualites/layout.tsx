import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualités - Association Asselda",
  description: "Restez informé des dernières nouvelles de l'Association Asselda, y compris les projets, événements, communiqués et initiatives de solidarité.",
  keywords: ["actualités", "événements", "projets", "communiqués", "solidarité"],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
