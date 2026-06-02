"use client";

import { Suspense, useState } from "react";
import { getArticles, getEvents } from "@/lib/api";
import { getTranslation } from "@/lib/translations";
import ArticlesGrid from "@/components/ArticlesGrid";
import EventsGrid from "@/components/EventsGrid";

export default function NewsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const lang = "fr";

  const articlesPromise = getArticles("fr");
  const eventsPromise = getEvents("fr");

  const categories = [
    { key: "all", label: "Toutes" },
    { key: "news", label: getTranslation(lang, "pages.news.categories.news") },
    { key: "event", label: getTranslation(lang, "pages.news.categories.event") },
    { key: "project", label: getTranslation(lang, "pages.news.categories.project") },
    { key: "solidarity", label: getTranslation(lang, "pages.news.categories.solidarity") },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="py-20" style={{ backgroundColor: "var(--color-hero)", color: "var(--color-hero-text)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold">Actualités / Événements</h1>
          <p className="mt-4 text-lg font-semibold">
            Restez informé des dernières nouvelles, projets, événements et communiqués de l'Association Asselda.
          </p>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-full md:w-1/2">
              <input
                aria-label="Rechercher"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher une actualité..."
                className="w-full rounded-md p-3 border-2 border-white text-black"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setCategory(c.key)}
                  className={`px-4 py-2 rounded-full font-semibold ${category === c.key ? "bg-white text-black" : "bg-white/20 text-white"}`}>
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <Suspense fallback={<div className="py-12 text-center">Chargement des actualités...</div>}>
        <ArticlesGrid articles={articlesPromise} lang={lang} search={search} category={category === "all" ? "" : category} />
      </Suspense>

      {/* EVENTS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Événements à venir</h2>
          <Suspense fallback={<div className="py-8 text-center">Chargement des événements...</div>}>
            <EventsGrid events={eventsPromise} lang={lang} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
