import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الأخبار - جمعية أسلدا",
  description: "ابق على اطلاع بآخر أخبار جمعية أسلدا، بما في ذلك المشاريع والفعاليات والبيانات ومبادرات التضامن.",
  keywords: ["أخبار", "فعاليات", "مشاريع", "بيانات", "تضامن"],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}