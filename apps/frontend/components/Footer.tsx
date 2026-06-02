"use client";

import styles from "@/styles/footer.module.css";
import { getTranslation, type Language } from "@/lib/translations";
import { useCurrentLanguage, buildLocalizedLink } from "@/lib/useLanguage";
import FacebookLogo from "@/public/icons/facebook.png";
import WhatsAppLogo from "@/public/icons/whatsapp.png";
import YouTubeLogo from "@/public/icons/youtube.png";

export default function Footer() {
	const currentLang = useCurrentLanguage();

	const t = (key: string) => getTranslation(currentLang, key);

	const link = (path: string): string => buildLocalizedLink(path, currentLang);

	return (
		<footer className={styles.footer}>
			<div className={styles.footerContainer}>
				<div className={styles.footerContent}>
					<div className={styles.aboutColumn}>
						<div className={styles.logo}>
							<svg
								viewBox="0 0 100 100"
								xmlns="http://www.w3.org/2000/svg"
								style={{
									width: "80px",
									height: "80px",
									borderRadius: "50%",
								}}>
								<text x="50" y="55" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#f4c430">
									LOGO
								</text>
							</svg>
						</div>
						<h3 className={styles.brandName}>Association Asselda</h3>
						<q className={styles.tagline}>{t("footer.tagline")}</q>
					</div>

					<div className={styles.column}>
						<h3 className={styles.columnTitle}>{t("footer.navigation")}</h3>
						<ul className={styles.columnLinks}>
							<li>
								<a href={link("/")} className={styles.columnLink}>
									{t("footer.home")}
								</a>
							</li>
							<li>
								<a href={link("/a-propos")} className={styles.columnLink}>
									{t("footer.about")}
								</a>
							</li>
							<li>
								<a href={link("/activites")} className={styles.columnLink}>
									{t("footer.activities")}
								</a>
							</li>
							<li>
								<a href={link("/projets")} className={styles.columnLink}>
									{t("footer.projects")}
								</a>
							</li>
							<li>
								<a href={link("/actuatites")} className={styles.columnLink}>
									{t("footer.news")}
								</a>
							</li>
							<li>
								<a href={link("/galerie")} className={styles.columnLink}>
									{t("footer.gallery")}
								</a>
							</li>
							<li>
								<a href={link("/rejoindre")} className={styles.columnLink}>
									{t("footer.join")}
								</a>
							</li>
							<li>
								<a href={link("/contact")} className={styles.columnLink}>
									{t("footer.contact")}
								</a>
							</li>
						</ul>
					</div>

					<div className={styles.column}>
						<h3 className={styles.columnTitle}>{t("footer.info")}</h3>
						<div className={styles.infoItem}>
							<span className={styles.infoLabel}>{t("footer.location")}</span>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.infoLabel}>Email:</span>
							<a
								href="mailto:associationasselda@gmail.com"
								className={styles.columnLink}
								style={{ color: "white", textDecoration: "none" }}>
								{t("footer.email")}
							</a>
						</div>
						<div className={styles.infoItem}>
							<span className={styles.infoLabel}>Tel:</span>
							<a
								href="tel:+212660015730"
								className={styles.columnLink}
								style={{ color: "white", textDecoration: "none" }}>
								{t("footer.phone")}
							</a>
						</div>
					</div>

					<div className={styles.column}>
						<h3 className={styles.columnTitle}>{t("footer.social")}</h3>
						<ul className={styles.socialLinks}>
							<li>
								<a
									href="#"
									className={styles.socialLink}
									target="_blank"
									rel="noopener noreferrer"
									title="Facebook">
									<img src={FacebookLogo.src} width="30" height="30" alt="Facebook" />
								</a>
							</li>
							<li>
								<a
									href="#"
									className={styles.socialLink}
									target="_blank"
									rel="noopener noreferrer"
									title="WhatsApp">
									<img src={WhatsAppLogo.src} width="30" height="30" alt="WhatsApp" />
								</a>
							</li>
							<li>
								<a
									href="#"
									className={styles.socialLink}
									target="_blank"
									rel="noopener noreferrer"
									title="YouTube">
									<img src={YouTubeLogo.src} width="30" height="30" alt="YouTube" />
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className={styles.footerBottom}>
					<div className={styles.bottomContent}>
						<ul className={styles.bottomLinks}>
							<li>
								<a href={link("/mentions-legales")} className={styles.bottomLink}>
									{t("footer.legal")}
								</a>
							</li>
							<li>
								<a href={link("/politique-confidentialite")} className={styles.bottomLink}>
									{t("footer.privacy")}
								</a>
							</li>
						</ul>
					</div>
					<p className={styles.copyright}>{t("footer.copyright")}</p>
					<p className={styles.credits}>{t("footer.credits")}</p>
				</div>
			</div>
		</footer>
	);
}
