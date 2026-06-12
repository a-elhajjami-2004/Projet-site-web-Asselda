"use client";

import { use } from "react";
import Image from "next/image";
import { getTranslation, Language } from "@/lib/translations";
import { API_URL } from "@/lib/api";
import styles from "@/styles/projects.module.css";

export default function EventsTimeline({ eventsTimeline, lang }: { eventsTimeline: Promise<any>; lang: Language }) {
	const eventsTimelineResponse = use(eventsTimeline);

	return (
		<div className={styles.timelineContent}>
			{eventsTimelineResponse.data
				? eventsTimelineResponse.data.map(
						({
							id,
							startYear,
							endYear,
							description,
						}: {
							id: number;
							startYear: number;
							endYear: number | null;
							description: string;
						}) => (
							<div key={id} className={styles.timelineItem}>
								<div className={styles.timelineYear}>
									{endYear != null ? `${startYear} ‒ ${endYear}` : `${startYear}`}
								</div>
								<div className={styles.timelineEventBody}>
									<h3 className={styles.timelineEventTitle}>{description}</h3>
								</div>
							</div>
						),
					)
				: null}
		</div>
	);
}
