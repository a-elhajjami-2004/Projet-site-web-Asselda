import { usePathname } from "next/navigation";
import { languages, type Language } from "@/lib/translations";

/**
 * Hook to get the current language from the URL pathname
 * Returns the detected language or defaults to "fr"
 */
export function useCurrentLanguage(): Language {
	const pathname = usePathname();

	for (const lang of languages) {
		if (pathname.includes(`/${lang}`) || pathname.startsWith(lang)) {
			return lang;
		}
	}

	return "fr";
}

/**
 * Build a navigation link with language prefix if needed
 */
export function buildLocalizedLink(path: string, language: Language): string {
	if (language) {
		return `/${language}${path}`;
	}
	return path;
}
