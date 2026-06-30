"use client";
import { useState, Suspense } from "react";
import React from "react";
import styles from "@/styles/partenaires.module.css";
import Image from "next/image";
import Link from "next/link";
import { translations } from "@/lib/translations";
import { getPartners } from "@/lib/api";
import PartnerCards from "@/components/PartnerCards";
import { Category } from "@/components/PartnerCards";

export default function PartenairesPage() {
	const [active, setActive] = useState<Category>("all");

	const translatedCategories = translations.en.pages.partners.categories;

	return (
		<main className={styles.page}>
			<section className="hero-section">
				<div className="max-w-3xl z-10">
					<h1 className="hero-title">Our Partners</h1>
					<p className="hero-copy">
						The Asselda Association works in close collaboration with public institutions, national and
						international organizations to maximize the impact of its actions.
					</p>
				</div>
			</section>
			<section className="bg-white py-12 px-6 flex flex-col gap-4">
				<div className="max-w-7xl mx-auto flex justify-center">
					<div className="flex flex-col items-center gap-4">
						<div className="font-bold max-w-6xl flex flex-row flex-wrap justify-center gap-4">
							<button
								key={"all"}
								className={
									active == "all"
										? "min-w-max border-2 border-[#7cb645] bg-[#7cb645] text-white rounded-full px-4 py-2 cursor-pointer"
										: "min-w-max border-2 border-[#7cb645] bg-white text-forground rounded-full px-4 py-2 cursor-pointer"
								}
								onClick={() => setActive("all")}>
								All
							</button>
							{Object.entries(translatedCategories).map(([key, status]) => (
								<button
									key={key}
									className={
										key == active
											? "min-w-max border-2 border-[#7cb645] bg-[#7cb645] text-white rounded-full px-4 py-2 cursor-pointer"
											: "min-w-max border-2 border-[#7cb645] bg-white text-forground rounded-full px-4 py-2 cursor-pointer"
									}
									onClick={() => setActive(key as Category)}>
									{status}
								</button>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Contenu principal resserré */}
			<Suspense fallback={<div className="text-center py-12">Loading partners...</div>}>
				<PartnerCards partners={getPartners("en")} active={active} lang="en" />
			</Suspense>
		</main>
	);
}
