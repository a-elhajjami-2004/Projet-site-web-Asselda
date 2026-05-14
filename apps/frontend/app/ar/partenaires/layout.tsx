import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الشركاء - جمعية أسلدا",
  description: "تعرف على شركائنا ومتعاونينا في مهمة جمعية أسلدا.",
  keywords: ["شركاء", "متعاونون", "جمعية", "تضامن"],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}