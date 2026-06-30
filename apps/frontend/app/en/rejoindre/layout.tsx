import { Metadata } from "next";
import { getPageMetadata } from "@/lib/translations";
import React from "react";

const pageMetadata = getPageMetadata("en", "join");

export const metadata: Metadata = {
	title: pageMetadata.title,
	description: pageMetadata.description,
	keywords: pageMetadata.keywords,
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return children;
}
