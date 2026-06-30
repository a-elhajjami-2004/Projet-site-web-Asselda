"use client";

import React, { useState, useRef, useEffect, useActionState } from "react";
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
import { postContactSubmission } from "@/lib/api";
import { translations } from "@/lib/translations";

function RequiredMarker() {
	return <FaAsterisk className={styles.requiredField} style={{ display: "inline" }} />;
}

type SubjectOption = keyof typeof translatedSubjectOptions;
const translatedSubjectOptions = translations.fr.pages.contact.subjectOptions;

async function sendContactForm(
	prevState: any,
	formData: FormData,
	executeRecaptcha: ((action?: string) => Promise<string>) | undefined,
) {
	try {
		// Get reCAPTCHA token
		if (!executeRecaptcha) {
			throw new Error("reCAPTCHA not available");
		}
		const token = await executeRecaptcha("submit_form");

		// Collect form data
		// const formData = new FormData(formRef.current);
		const data = {
			fullName: formData.get("fullName") as string,
			email: formData.get("email") as string,
			phone: formData.get("phone") as string,
			subject: formData.get("subject") as SubjectOption,
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
		const [ok, contactResponse] = await postContactSubmission(data);

		if (!ok) {
			console.log(`E: ${JSON.stringify(contactResponse)}`);
			throw new Error("Erreur lors de l'envoi du message");
		}

		// Clear success message after 5 seconds
		// setTimeout(() => setSubmissionStatus("idle"), 5000);

		return { success: true, error: "", message: "Message envoyé avec succès" };
	} catch (error) {
		console.error("Form submission error:", error);
		return {
			success: false,
			error: "Erreur lors du traitement du formulaire",
			message: "",
		};
	}
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
	const formActionCallback = async (
		prevState: { success: boolean; error: string; message: string },
		formData: FormData,
	) => await sendContactForm(prevState, formData, executeRecaptcha);
	const [state, formAction, isPending] = useActionState(formActionCallback, {
		success: false,
		error: "",
		message: "",
	});

	const mapUrl = "https://www.google.com/maps/search/?api=1&query=31.249,-7.984";
	const embedUrl =
		"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3412.3!2d-7.984!3d31.249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1700000000000";

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
							<form className={styles.contactForm} action={formAction}>
								<div className={styles.formRow}>
									<div className={styles.formField} style={{ flex: 1 }}>
										<label htmlFor="fullName">
											Nom complet <RequiredMarker />
										</label>
										<input
											type="text"
											id="fullName"
											name="fullName"
											className={styles.inputField}
											minLength={3}
											placeholder="Entrez votre nom complet"
											required
											disabled={isPending}
										/>
										<p className={styles.fieldHint}>3 caractères minimum</p>
									</div>
									<div className={styles.formField} style={{ flex: 1 }}>
										<label htmlFor="phone">Téléphone</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											className={styles.inputField}
											pattern="^0[67]\d{8}$"
											placeholder="Ex : 0612345678"
											disabled={isPending}
										/>
										<p className={styles.fieldHint}>Numéro en 06 ou 07</p>
									</div>
								</div>

								<div className={styles.formField}>
									<label htmlFor="email">
										Email <RequiredMarker />
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className={styles.inputField}
										placeholder="nom@email.com"
										required
										disabled={isPending}
									/>
								</div>
								<div className={styles.formField} style={{ flex: 1 }}>
									<label htmlFor="subject">
										Objet de message <RequiredMarker />
									</label>
									<select
										id="subject"
										name="subject"
										className={styles.inputField}
										required
										disabled={isPending}>
										<option value="">Sélectionnez un objet...</option>
										{Object.entries(translatedSubjectOptions).map(([key, label]) => (
											<option key={key} value={key}>
												{label}
											</option>
										))}
									</select>
								</div>

								<div className={styles.formField}>
									<label htmlFor="message">
										Message <RequiredMarker />
									</label>
									<textarea
										className={styles.inputField}
										id="message"
										name="message"
										minLength={20}
										maxLength={1000}
										rows={4}
										onChange={updateCharCount}
										required
										disabled={isPending}></textarea>
									<p className={styles.fieldHint} id="messageHint">
										20 caractères min. 1000 caractères max. <span id="charCount">0/1000</span>
									</p>
								</div>

								<div className={styles.formFooter}>
									<button type="submit" className={styles.submitBtn} disabled={isPending}>
										<FaPaperPlane /> {isPending ? "Envoi en cours..." : "Envoyer"}
									</button>
									{state.success && state.message !== "" && (
										<p className={`${styles.formResult} ${styles.success}`}>
											Votre message a bien été envoyé. Nous vous répondrons dans un délai de 48
											heures ouvrables. Merci de votre intérêt pour l'Association Asselda.
										</p>
									)}
									{!state.success && state.error !== "" && (
										<p className={`${styles.formResult} ${styles.error}`}>{state.error}</p>
									)}
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
