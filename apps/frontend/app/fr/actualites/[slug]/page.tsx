import Image from "next/image";
import { getArticleBySlug } from "@/lib/api";
import { getTranslation } from "@/lib/translations";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug;
	const res = await getArticleBySlug(slug, "fr");
	const item = res?.data?.[0] || res?.data || null;
	if (!item) {
		return (
			<main className="min-h-screen flex items-center justify-center">
				<div>Aucune actualité trouvée.</div>
			</main>
		);
	}

	const attrs = item.attributes || item;
	const imageUrl =
		attrs.image?.data?.[0]?.attributes?.url ||
		attrs.cover?.data?.[0]?.attributes?.url ||
		attrs.imageCover?.url ||
		attrs.coverUrl ||
		null;

	return (
		<main className="max-w-4xl mx-auto py-12 px-6">
			<div className="mb-6">
				<span
					className="inline-block text-sm font-semibold px-3 py-1 rounded"
					style={{ backgroundColor: "var(--color-hero)", color: "var(--color-hero-text)" }}>
					{getTranslation("fr", `pages.news.categories.${attrs.category || attrs.type || "news"}`) ||
						attrs.category}
				</span>
			</div>

			<h1 className="text-4xl font-extrabold mb-4">{attrs.title}</h1>

			{imageUrl && (
				<div className="mb-6 rounded overflow-hidden">
					<Image
						src={
							imageUrl && imageUrl.startsWith("http")
								? imageUrl
								: `${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`
						}
						alt={attrs.title}
						width={1200}
						height={600}
						className="w-full h-auto object-cover"
					/>
				</div>
			)}

			<div
				className="prose max-w-none"
				dangerouslySetInnerHTML={{ __html: attrs.content || attrs.body || attrs.description || "" }}
			/>
		</main>
	);
}
