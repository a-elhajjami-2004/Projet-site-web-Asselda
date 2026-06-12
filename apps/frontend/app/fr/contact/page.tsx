"use client";

import React, { useState, useRef, useEffect } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import styles from "@/styles/contact.module.css";
import {
	FaAsterisk,
	FaExternalLinkAlt,
	FaMapMarkerAlt,
	FaHome,
	FaEnvelope,
	FaPhoneAlt,
	FaGlobe,
	FaRegClock,
	FaPaperPlane,
	FaFacebook,
	FaYoutube,
	FaWhatsapp,
} from "react-icons/fa";
import { API_URL } from "@/lib/api";
import { translations } from "@/lib/translations";

function RequiredMarker() {
	return <FaAsterisk className={styles.requiredField} style={{ display: "inline" }} />;
}

function updateCharCount(event: React.ChangeEvent<HTMLTextAreaElement>) {
	const textarea = event.currentTarget;
	const charCount = textarea.value.length;
	const maxLength = textarea.maxLength;
	const charCountElement = document.getElementById("charCount");
	if (charCountElement) {
		charCountElement.textContent = `${charCount}/${maxLength}`;
	}
}

function ContactFormContent() {
	const { executeRecaptcha } = useGoogleReCaptcha();
	const [isLoading, setIsLoading] = useState(false);
	const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");
	const [errorMessage, setErrorMessage] = useState("");
	const formRef = useRef<HTMLFormElement | null>(null);

	const mapUrl = "https://www.google.com/maps/search/?api=1&query=31.249,-7.984";
	const embedUrl =
		"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3412.3!2d-7.984!3d31.249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1700000000000";

	const translatedSubjectOptions = translations.fr.pages.contact.subjectOptions;

	const handleFormSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!formRef.current) return;

		try {
			setIsLoading(true);
			setSubmissionStatus("idle");
			setErrorMessage("");

			// Get reCAPTCHA token
			if (!executeRecaptcha) {
				throw new Error("reCAPTCHA not available");
			}
			const token = await executeRecaptcha("submit_form");

			// Collect form data
			const formData = new FormData(formRef.current);
			const data = {
				fullName: formData.get("fullName") as string,
				email: formData.get("email") as string,
				phone: formData.get("phone") as string,
				subject: formData.get("subject") as string,
				message: formData.get("message") as string,
				recaptchaToken: token,
			};

			// Validate required fields
			if (!data.fullName || !data.email || !data.subject || !data.message) {
				throw new Error("Veuillez remplir tous les champs requis");
			}

			if (data.message.length < 20) {
				throw new Error("Le message doit contenir au moins 20 caractères");
			}

			if (data.message.length > 1000) {
				throw new Error("Le message ne doit pas dépasser 1000 caractères");
			}

			// Submit to backend
			const response = await fetch(`${API_URL}/api/contact-submissions`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ data }),
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.message || "Erreur lors de l'envoi du message");
			}

			setSubmissionStatus("success");
			formRef.current.reset();
			document.getElementById("charCount")!.textContent = "0/1000";

			// Clear success message after 5 seconds
			setTimeout(() => setSubmissionStatus("idle"), 5000);
		} catch (error) {
			setSubmissionStatus("error");
			setErrorMessage(
				error instanceof Error ? error.message : "Une erreur est survenue lors de l'envoi du message",
			);
			console.error("Form submission error:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<main>
			<section className="hero-section">
				<div className="max-w-3xl z-10">
					<h1 className="hero-title">Contactez-nous</h1>
					<p className="hero-copy">
						Une question, une proposition de partenariat, ou simplement envie d'en savoir plus ? <br />
						L'équipe de l'Association Asselda vous répond dans les meilleurs délais.
					</p>
				</div>
			</section>
			<div className={styles.pageWrapper}>
				{/* SECTION FORMULAIRE */}
				<section className={styles.sectionContainer}>
					<div className={styles.contactFlex}>
						<div className={styles.infoBox}>
							<h3>Informations de contact</h3>
							<div className={styles.infoItem}>
								<FaHome className={styles.infoIcon} />{" "}
								<span>
									<strong>Adresse:</strong> Douar Asselda, Commune d'Asni, Province d'Al Haouz,
									Marrakech, Maroc. Code postal : 42152
								</span>
							</div>
							<div className={styles.infoItem}>
								<FaEnvelope className={styles.infoIcon} />{" "}
								<span>
									<strong>Email:</strong> associationasselda@gmail.com
								</span>
							</div>
							<div className={styles.infoItem}>
								<FaPhoneAlt className={styles.infoIcon} />{" "}
								<span>
									<strong>Tél. Président:</strong> (Samir Ahram) 06 60 01 57 30
								</span>
							</div>
							<div className={styles.infoItem}>
								<FaPhoneAlt className={styles.infoIcon} />{" "}
								<span>
									<strong>Tél. Secrétaire:</strong> (Abdelrahim Dharar) 06 63 04 61 67
								</span>
							</div>
							<div className={styles.infoItem}>
								<FaGlobe className={styles.infoIcon} />{" "}
								<span>
									<strong>Site web:</strong> www.association-asselda.org
								</span>
							</div>
							<div className={styles.hoursBox}>
								<FaRegClock /> <strong>Horaires de contact :</strong>
								<p>Lundi à vendredi : 9h00 – 17h00 | Samedi 9h00 – 12h00</p>
							</div>
						</div>

						<div className={styles.formWrapper}>
							<h3 className={styles.formTitle}>Formulaire de contact</h3>
							{submissionStatus === "success" && (
								<div
									style={{
										backgroundColor: "#d4edda",
										border: "1px solid #c3e6cb",
										color: "#155724",
										padding: "12px",
										borderRadius: "4px",
										marginBottom: "16px",
										textAlign: "center",
									}}>
									Votre message a été envoyé avec succès. Merci!
								</div>
							)}
							{submissionStatus === "error" && (
								<div
									style={{
										backgroundColor: "#f8d7da",
										border: "1px solid #f5c6cb",
										color: "#721c24",
										padding: "12px",
										borderRadius: "4px",
										marginBottom: "16px",
										textAlign: "center",
									}}>
									Erreur: {errorMessage}
								</div>
							)}
							<form ref={formRef} className={styles.contactForm} onSubmit={handleFormSubmit}>
								<div className={styles.formRow}>
									<div className={styles.formField} style={{ flex: 1 }}>
										<label>
											Nom complet <RequiredMarker />
										</label>
										<input
											type="text"
											name="fullName"
											className={styles.inputField}
											minLength={3}
											placeholder="Entrez votre nom complet"
											required
											disabled={isLoading}
										/>
										<p className={styles.fieldHint}>3 caractères minimum</p>
									</div>
									<div className={styles.formField} style={{ flex: 1 }}>
										<label>Téléphone</label>
										<input
											type="tel"
											name="phone"
											className={styles.inputField}
											pattern="^0[67]\d{8}$"
											placeholder="Ex : 0612345678"
											disabled={isLoading}
										/>
										<p className={styles.fieldHint}>Numéro en 06 ou 07</p>
									</div>
								</div>

								<div className={styles.formField}>
									<label>
										Email <RequiredMarker />
									</label>
									<input
										type="email"
										name="email"
										className={styles.inputField}
										placeholder="nom@email.com"
										required
										disabled={isLoading}
									/>
								</div>
								<div className={styles.formField} style={{ flex: 1 }}>
									<label>
										Objet de message <RequiredMarker />
									</label>
									<select name="subject" className={styles.inputField} required disabled={isLoading}>
										<option value="">Sélectionnez un objet...</option>
										{Object.entries(translatedSubjectOptions).map(([key, label]) => (
											<option key={key} value={key}>
												{label}
											</option>
										))}
									</select>
								</div>

								<div className={styles.formField}>
									<label>
										Message <RequiredMarker />
									</label>
									<textarea
										className={styles.inputField}
										name="message"
										minLength={20}
										maxLength={1000}
										rows={4}
										onChange={updateCharCount}
										required
										disabled={isLoading}></textarea>
									<p className={styles.fieldHint} id="messageHint">
										20 caractères min. 1000 caractères max. <span id="charCount">0/1000</span>
									</p>
								</div>

								<div className={styles.formFooter}>
									<div className={styles.recaptchaPlaceholder}>
										<img
											src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
											width="25"
											alt="recap"
										/>
										<span>reCAPTCHA</span>
									</div>
									<button type="submit" className={styles.submitBtn} disabled={isLoading}>
										<FaPaperPlane /> {isLoading ? "Envoi..." : "Envoyer"}
									</button>
								</div>
							</form>
						</div>
					</div>
				</section>

				{/* SECTION LOCALISATION */}
				<section className={styles.sectionWrapper}>
					<div className={styles.sectionHeader}>
						<h2>Notre Localisation</h2>
					</div>
					<div className={styles.mapGridContainer}>
						<div className={styles.mapIframeWrapper}>
							<a
								href={mapUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.mapLinkTop}
								style={{ display: "none" }}>
								Ouvrir dans Maps <FaGlobe style={{ marginLeft: "5px", fontSize: "10px" }} />
							</a>
							<iframe
								src={embedUrl}
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"></iframe>
						</div>
						<div className={styles.locationSidebar}>
							<div className={styles.locationCard}>
								<div className={styles.locationCardHeader}>
									<FaMapMarkerAlt className={styles.pinIcon} />
									<div>
										<h3>Association Asselda</h3>
										<p>
											Douar Asselda, Asni
											<br />
											Province Al Haouz, Maroc
										</p>
									</div>
								</div>
								<p className={styles.coordinatesText}>
									<strong>Latitude :</strong> 31.249
									<br />
									<strong>Longitude :</strong> -7.984
								</p>
								<a href={mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapBtn}>
									Ouvrir dans google Maps{" "}
									<FaExternalLinkAlt style={{ marginLeft: "5px", display: "inline" }} />
								</a>
							</div>
							<div className={styles.locationDesc}>
								<p>
									Situé au cœur du village d'Asni, dans le massif du Haut Atlas, à environ 60 km de
									Marrakech.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* SECTION RÉSEAUX */}
				<section className={styles.sectionWrapper}>
					<div className={styles.sectionHeader}>
						<h2>Nos Réseaux Sociaux</h2>
						<p>
							Suivez nos actualités et restez connectés à la vie de l'association sur nos réseaux sociaux
						</p>
					</div>
					<div className={styles.socialGrid}>
						<a href="#" className={styles.socialCard} rel="noopener noreferrer" target="_blank">
							<FaFacebook className={styles.socialIcon} style={{ color: "#1877F2" }} />
							<span style={{ color: "#1c3e7a" }}>Suivez notre page</span>
						</a>
						<a href="#" className={styles.socialCard} rel="noopener noreferrer" target="_blank">
							<FaYoutube className={styles.socialIcon} style={{ color: "#FF0000" }} />
							<span style={{ color: "#cc0000" }}>Découvrir nos vidéos</span>
						</a>
						<a
							href="https://wa.me/212663046167"
							className={styles.socialCard}
							rel="noopener noreferrer"
							target="_blank">
							<FaWhatsapp className={styles.socialIcon} style={{ color: "#25D366" }} />
							<span style={{ color: "#128C7E" }}>Écrire sur WhatsApp</span>
						</a>
					</div>
				</section>
			</div>
		</main>
	);
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export default function UnifiedPage() {
	return (
		<GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
			<ContactFormContent />
		</GoogleReCaptchaProvider>
	);
}
