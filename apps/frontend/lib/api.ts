import { Language } from "./translations";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

type PopulateFields = "*" | string[] | { [key: string]: PopulateFields };

const apiQueryUrl = ({
	endpoint,
	locale = undefined,
	filters = undefined,
	fields = undefined,
	populate = undefined,
}: {
	endpoint: string;
	locale?: Language | string;
	filters?: { [key: string]: any };
	fields?: string[];
	populate?: PopulateFields;
}) => {
	const url = new URL(`${API_URL}/api/${endpoint}`);
	if (locale) {
		url.searchParams.append("locale", locale);
	}
	if (filters) {
		Object.entries(filters).forEach(([key, value]) => url.searchParams.append(`filters[${key}][$eq]`, value));
	}
	if (fields) {
		fields.forEach((field, index) => url.searchParams.append(`fields[${index}]`, field));
	}
	if (populate) {
		if (populate === "*") {
			url.searchParams.append("populate", "*");
		} else if (Array.isArray(populate)) {
			populate.forEach((field, index) => url.searchParams.append(`populate[fields][${index}]`, field));
		} else {
			throw new Error("Unsupported populate format");
		}
	}
	// console.log(`apiQueryUrl: ${url.toString()}`);
	return url.toString();
};

export const getActivities = async (
	locale?: Language,
	domain?: "environment" | "infrastructure" | "social" | "education",
) => {
	const response = await fetch(
		apiQueryUrl({ endpoint: "activities", locale, filters: domain ? { domain } : undefined, populate: "*" }),
	);
	const activities = await response.json();
	return activities;
};

export const getAlbumTitles = async (locale?: Language) => {
	const response = await fetch(apiQueryUrl({ endpoint: "albums", locale, fields: ["title"] }));
	const albumtitles = await response.json();
	return albumtitles;
};

export const getAlbumPhotos = async (albumId: string, locale?: Language) => {
	const response = await fetch(apiQueryUrl({ endpoint: `albums/${albumId}`, locale, populate: "*" }));
	const albums = await response.json();
	return albums;
};

export const getArticles = async (locale?: Language, category?: "news" | "event" | "project" | "solidarity") => {
	const response = await fetch(
		apiQueryUrl({ endpoint: "articles", locale, filters: category ? { category } : undefined, populate: "*" }),
	);
	const articles = await response.json();
	return articles;
};

export const getArticleBySlug = async (slug: string, locale?: Language) => {
	const response = await fetch(apiQueryUrl({ endpoint: "articles", locale, filters: { slug }, populate: "*" }));
	const article = await response.json();
	return article;
};

export const getEvents = async (locale?: Language) => {
	const response = await fetch(apiQueryUrl({ endpoint: "events", locale, populate: "*" }));
	const events = await response.json();
	return events;
};

export const getTimelineEvent = async (locale?: Language) => {
	const response = await fetch(apiQueryUrl({ endpoint: "timeline-events", locale, populate: "*" }));
	const timelineEvent = await response.json();
	return timelineEvent;
};

export const getPartners = async (locale?: Language, category?: "international" | "institutional" | "national") => {
	const response = await fetch(
		apiQueryUrl({ endpoint: "partners", locale, filters: category ? { category } : undefined, populate: "*" }),
	);
	const partners = await response.json();
	return partners;
};

export const getProjects = async (
	locale?: Language,
	statusType?: "inProgress" | "done" | "operational" | "planned",
	domain?: "environment" | "sanitation" | "infrastructure" | "social",
) => {
	const response = await fetch(
		apiQueryUrl({
			endpoint: "projects",
			locale,
			filters: statusType ? (domain ? { statusType, domain } : { statusType }) : domain ? { domain } : undefined,
			populate: "*",
		}),
	);
	const projects = await response.json();
	return projects;
};
