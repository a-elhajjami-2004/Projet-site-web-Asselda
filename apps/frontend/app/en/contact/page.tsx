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
const translatedSubjectOptions = translations.en.pages.contact.subjectOptions;

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
			throw new Error("Please fill in all required fields.");
		}

		if (data.message.length < 20) {
			throw new Error("The message must contain at least 20 characters.");
		}

		if (data.message.length > 1000) {
			throw new Error("The message must not exceed 1000 characters.");
		}

		// Submit to backend
		const [ok, contactResponse] = await postContactSubmission(data);

		if (!ok) {
			// console.log(`E: ${JSON.stringify(contactResponse)}`);
			throw new Error("Error sending message.");
		}

		// Clear success message after 5 seconds
		// setTimeout(() => setSubmissionStatus("idle"), 5000);

		return { success: true, error: "", message: "Message sent successfully." };
	} catch (error) {
		console.error("Form submission error:", error);
		return {
			success: false,
			error: "Error processing form.",
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
					<h1 className="hero-title">Contact Us</h1>
					<p className="hero-copy">
						A question, a partnership proposal, or simply want to learn more? <br />
						The Asselda Association team will get back to you as soon as possible.
					</p>
				</div>
			</section>
			<div className={styles.pageWrapper}>
				{/* SECTION FORMULAIRE */}
				<section className={styles.sectionContainer}>
					<div className={styles.contactFlex}>
						<div className={styles.infoBox}>
							<h3>Contact Information</h3>
							<div className={styles.infoItem}>
								<FaHome className={styles.infoIcon} />{" "}
								<span>
									<strong>Address:</strong> Douar Asselda, Commune d'Asni, Al Haouz Province,
									Marrakech, Morocco. Zip Code : 42152
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
									<strong>President Phone Number:</strong> (Samir Ahram) 06 60 01 57 30
								</span>
							</div>
							<div className={styles.infoItem}>
								<FaPhoneAlt className={styles.infoIcon} />{" "}
								<span>
									<strong>Secretary Phone Number:</strong> (Abdelrahim Dharar) 06 63 04 61 67
								</span>
							</div>
							<div className={styles.infoItem}>
								<FaGlobe className={styles.infoIcon} />{" "}
								<span>
									<strong>Website:</strong> www.association-asselda.org
								</span>
							</div>
							<div className={styles.hoursBox}>
								<FaRegClock /> <strong>Contact Hours :</strong>
								<p>Monday to Froday: 9 AM – 5 PM | Saturday: 9 AM – 12 PM</p>
							</div>
						</div>

						<div className={styles.formWrapper}>
							<h3 className={styles.formTitle}>Contact Form</h3>
							<form className={styles.contactForm} action={formAction}>
								<div className={styles.formRow}>
									<div className={styles.formField} style={{ flex: 1 }}>
										<label htmlFor="fullName">
											Full Name <RequiredMarker />
										</label>
										<input
											type="text"
											id="fullName"
											name="fullName"
											className={styles.inputField}
											minLength={3}
											placeholder="Enter your full name"
											required
											disabled={isPending}
										/>
										<p className={styles.fieldHint}>3 characters minimum</p>
									</div>
									<div className={styles.formField} style={{ flex: 1 }}>
										<label htmlFor="phone">Phone Number</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											className={styles.inputField}
											pattern="^0[67]\d{8}$"
											placeholder="Ex : 0612345678"
											disabled={isPending}
										/>
										<p className={styles.fieldHint}>Number in 06 or 07</p>
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
										placeholder="name@email.com"
										required
										disabled={isPending}
									/>
								</div>
								<div className={styles.formField} style={{ flex: 1 }}>
									<label htmlFor="subject">
										Message Subject <RequiredMarker />
									</label>
									<select
										id="subject"
										name="subject"
										className={styles.inputField}
										required
										disabled={isPending}>
										<option value="">Select a subject...</option>
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
										20 characters min. 1000 characters max. <span id="charCount">0/1000</span>
									</p>
								</div>

								<div className={styles.formFooter}>
									<button type="submit" className={styles.submitBtn} disabled={isPending}>
										<FaPaperPlane /> {isPending ? "Submitting..." : "Submit"}
									</button>
									{state.success && state.message !== "" && (
										<p className={`${styles.formResult} ${styles.success}`}>
											Your message has been successfully sent. We will respond within 48 business
											hours. Thank you for your interest in the Asselda Association.
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
						<h2>Our Location</h2>
					</div>
					<div className={styles.mapGridContainer}>
						<div className={styles.mapIframeWrapper}>
							<a
								href={mapUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.mapLinkTop}
								style={{ display: "none" }}>
								Open in Maps <FaGlobe style={{ marginLeft: "5px", fontSize: "10px" }} />
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
										<h3>Asselda Association</h3>
										<p>
											Douar Asselda, Asni
											<br />
											Al Haouz Province, Morocco
										</p>
									</div>
								</div>
								<p className={styles.coordinatesText}>
									<strong>Latitude :</strong> 31.249
									<br />
									<strong>Longitude :</strong> -7.984
								</p>
								<a href={mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapBtn}>
									Open in Maps <FaExternalLinkAlt style={{ marginLeft: "5px", display: "inline" }} />
								</a>
							</div>
							<div className={styles.locationDesc}>
								<p>
									Located in the heart of the village of Asni, in the High Atlas Mountains,
									approximately 60 km from Marrakech.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* SECTION RÉSEAUX */}
				<section className={styles.sectionWrapper}>
					<div className={styles.sectionHeader}>
						<h2>Our Social Media</h2>
						<p>Follow our news and stay connected to the association's activities on our social media.</p>
					</div>
					<div className={styles.socialGrid}>
						<a href="#" className={styles.socialCard} rel="noopener noreferrer" target="_blank">
							<FaFacebook className={styles.socialIcon} style={{ color: "#1877F2" }} />
							<span style={{ color: "#1c3e7a" }}>Follow our page</span>
						</a>
						<a href="#" className={styles.socialCard} rel="noopener noreferrer" target="_blank">
							<FaYoutube className={styles.socialIcon} style={{ color: "#FF0000" }} />
							<span style={{ color: "#cc0000" }}>Discover our videos</span>
						</a>
						<a
							href="https://wa.me/212663046167"
							className={styles.socialCard}
							rel="noopener noreferrer"
							target="_blank">
							<FaWhatsapp className={styles.socialIcon} style={{ color: "#25D366" }} />
							<span style={{ color: "#128C7E" }}>Write to us on WhatsApp</span>
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
