"use client";
import React, { useState, useActionState, ChangeEvent } from "react";
import styles from "@/styles/rejoindre.module.css";
import { FaAsterisk } from "react-icons/fa";
import {
	User,
	CreditCard,
	Phone,
	Mail,
	MapPin,
	Leaf,
	Building,
	Heart,
	BookOpen,
	LayoutGrid,
	Users,
	Handshake,
	CheckSquare,
	Square,
	Send,
	UserCircle,
	Laptop,
	Wrench,
	Megaphone,
	Truck,
	ArrowRight,
	TextInitial,
} from "lucide-react";
import { translations, getTranslation } from "@/lib/translations";
import { postMembership } from "@/lib/api";

type DomainKey = keyof typeof translatedDomains;
type EngagementKey = keyof typeof translatedEngagementTypes | "";

const translatedDomains = translations.fr.pages.join.domains;
const translatedEngagementTypes = translations.fr.pages.join.engagementTypes;

function RequiredMarker() {
	return <FaAsterisk className={styles.requiredField} style={{ display: "inline" }} />;
}

async function sendMembershipForm(
	prevState: any,
	formData: FormData,
	resetDomains: () => void,
	resetEngagement: () => void,
) {
	try {
		// Collect form data
		const data = {
			fullName: formData.get("fullName") as string,
			cin: formData.get("cin") as string,
			email: formData.get("email") as string,
			phone: formData.get("phone") as string,
			address: formData.get("address") as string,
			interestedInEnvironment: (formData.getAll("domain") as DomainKey[]).includes("environment"),
			interestedInInfrastructure: (formData.getAll("domain") as DomainKey[]).includes("infrastructure"),
			interestedInSocial: (formData.getAll("domain") as DomainKey[]).includes("social"),
			interestedInEducation: (formData.getAll("domain") as DomainKey[]).includes("education"),
			engagementType: formData.get("engagementType") as Exclude<EngagementKey, "">,
			message: formData.get("message") as string,
		};

		const consent = formData.get("consent") === "on" ? true : false;

		// Validate required fields
		if (!data.fullName || !data.cin || !data.email || !data.phone || !data.engagementType) {
			throw new Error("Veuillez remplir tous les champs requis");
		}

		if (data.fullName.length < 3) {
			throw new Error("Le nom complet doit contenir au moins 3 caractères");
		}

		if (data.message.length > 300) {
			throw new Error("Le message ne doit pas dépasser 300 caractères");
		}

		if (!consent) {
			throw new Error("Veillez accepter le traitement de vos données");
		}

		// Submit to backend
		const [ok, contactResponse] = await postMembership(data);

		if (!ok) {
			console.log(`E: ${JSON.stringify(contactResponse)}`);
			throw new Error("Erreur lors de l'envoi du message");
		}

		resetDomains();
		resetEngagement();

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

export default function RejoindrePage() {
	const domainIcons = {
		environment: <Leaf size={16} />,
		infrastructure: <Building size={16} />,
		social: <Heart size={16} />,
		education: <BookOpen size={16} />,
	};

	const engagementIcons = {
		active: <Handshake size={16} />,
		support: <Handshake size={16} />,
		occasional: <User size={16} />,
	};

	const domainMapAllFalse: Map<DomainKey, boolean> = new Map([
		["environment", false],
		["infrastructure", false],
		["social", false],
		["education", false],
	]);
	const domainMapAllTrue: Map<DomainKey, boolean> = new Map([
		["environment", true],
		["infrastructure", true],
		["social", true],
		["education", true],
	]);

	const [domains, setDomains] = useState<Map<DomainKey, boolean>>(domainMapAllFalse);
	const [engagement, setEngagement] = useState<EngagementKey>("");
	const [state, formAction, isPending] = useActionState(
		(prevState: any, formData: FormData) =>
			sendMembershipForm(
				prevState,
				formData,
				() => setDomains(domainMapAllFalse),
				() => setEngagement(""),
			),
		{
			success: false,
			error: "",
			message: "",
		},
	);

	const handleDomainChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { checked, value } = event.target;
		const updatedDomains = new Map(domains);

		if (checked) {
			updatedDomains.set(value as DomainKey, true);
			setDomains(updatedDomains);
		} else {
			updatedDomains.set(value as DomainKey, false);
			setDomains(updatedDomains);
		}
	};

	return (
		<main className={styles.pageWrapper}>
			{/* SECTION 1 : HERO AVEC LES 2 BOUTONS */}
			<section className="hero-section">
				<div className="max-w-3xl z-10">
					<h1 className="hero-title">Rejoignez l'Association Asselda</h1>
					<p className="hero-copy">
						Que vous souhaitiez devenir membre, offrir de votre temps comme bénévole ou soutenir nos projets
						financièrement, votre engagement fait la différence.
					</p>
				</div>
				<div className={styles.heroNavButtons}>
					<a href="#inscription" className={styles.navBtnLarge}>
						<UserCircle size={24} className={styles.iconBtn} /> Devenir Membre
					</a>
					<a href="#benevolat" className={styles.navBtnLarge}>
						<Heart size={24} className={styles.iconBtn} /> Devenir Bénévole
					</a>
				</div>
			</section>

			{/* SECTION 2 : FORMULAIRE D'INSCRIPTION */}
			<section id="inscription" className={styles.formSection}>
				<form className={styles.formCard} action={formAction}>
					<div className={styles.columnsContainer}>
						{/* Colonne Gauche : Identité */}
						<div className={styles.leftColumn}>
							<div className={styles.inputGroup}>
								<label htmlFor="fullName" className={styles.labelContainer}>
									<User size={18} className={styles.icon} /> Nom complet <RequiredMarker />
								</label>
								<input
									type="text"
									id="fullName"
									name="fullName"
									minLength={3}
									className={styles.inputField}
									placeholder="Entrez votre nom complet"
									autoComplete="name"
									required
								/>
								<p className={styles.helperText}>Minimum 3 caractères</p>
							</div>

							<div className={styles.inputGroup}>
								<label htmlFor="cin" className={styles.labelContainer}>
									<CreditCard size={18} className={styles.icon} /> Numéro de CIN <RequiredMarker />
								</label>
								<input
									type="text"
									id="cin"
									name="cin"
									pattern="^[A-Z]{1,2}\d{6}$"
									className={styles.inputField}
									placeholder="Ex : AB123456"
									autoCapitalize="characters"
									required
								/>
								<p className={styles.helperText}>Format marocain : 1-2 lettres + 6 chiffres</p>
							</div>

							<div className={styles.inputGroup}>
								<label htmlFor="phone" className={styles.labelContainer}>
									<Phone size={18} className={styles.icon} /> Téléphone <RequiredMarker />
								</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									pattern="^0[67]\d{8}$"
									className={styles.inputField}
									placeholder="Ex : 0612345678"
									autoComplete="tel"
									required
								/>
								<p className={styles.helperText}>Format : 06/07 XXXXXXXX</p>
							</div>

							<div className={styles.inputGroup}>
								<label htmlFor="email" className={styles.labelContainer}>
									<Mail size={18} className={styles.icon} /> Email <RequiredMarker />
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className={styles.inputField}
									placeholder="nom@email.com"
									required
								/>
							</div>

							<div className={styles.inputGroup}>
								<label htmlFor="address" className={styles.labelContainer}>
									<MapPin size={18} className={styles.icon} /> Adresse / Localité
								</label>
								<input
									type="text"
									id="address"
									name="address"
									className={styles.inputField}
									placeholder="Entrez votre adresse ou localité"
									autoComplete="street-address"
								/>
							</div>

							<div className={styles.inputGroup} style={{ marginBottom: 0 }}>
								<label htmlFor="message" className={styles.labelContainer}>
									<TextInitial size={18} className={styles.icon} /> Message
								</label>
								<textarea
									id="message"
									name="message"
									className={styles.inputField}
									placeholder="Message optionnel"
									maxLength={300}
									rows={4}
									onChange={updateCharCount}
								/>
								<p className={styles.helperText}>
									Maximum 300 caractères <span id="charCount">0/300</span>
								</p>
							</div>
						</div>

						{/* Colonne Droite : Choix & Engagement */}
						<div className={styles.rightColumn}>
							<div className={styles.sectionHeader}>
								<label className={styles.labelContainer}>
									<LayoutGrid size={18} className={styles.icon} /> Domaine d'intérêt
								</label>
								<div className={styles.sectionSubtitle}>Sélectionnez vos centres d'intérêt</div>
							</div>

							<div className={styles.gridInterest}>
								{Object.entries(domainIcons).map(([key, icon]) => (
									<label
										key={key}
										htmlFor={`domain-${key}`}
										className={`${styles.selectBtn} ${domains.get(key as DomainKey) ? styles.activeBtn : ""}`}>
										<span className={styles.selectBtnLabel}>
											{icon} {translatedDomains[key as DomainKey]}
										</span>
										<input
											type="checkbox"
											id={`domain-${key}`}
											name="domain"
											value={key}
											checked={domains.get(key as DomainKey) || false}
											onChange={handleDomainChange}
										/>
									</label>
								))}
								<label
									key="all"
									htmlFor="domain-all"
									className={`${styles.selectBtn} ${styles.fullWidth} ${domains.values().every((value) => value) ? styles.activeBtn : ""}`}>
									<span className={styles.selectBtnLabel}>
										<LayoutGrid size={16} /> Tous
									</span>

									<input
										type="checkbox"
										id="domain-all"
										name="domain-all"
										checked={domains.values().every((value) => value)}
										onChange={() =>
											domains.values().every((value) => value)
												? setDomains(domainMapAllFalse)
												: setDomains(domainMapAllTrue)
										}
									/>
								</label>
							</div>

							<div className={styles.sectionHeader} style={{ marginTop: "10px" }}>
								<label className={styles.labelContainer}>
									<Handshake size={18} className={styles.icon} /> Type d'engagement <RequiredMarker />
								</label>
								<div className={styles.sectionSubtitle}>Choisissez votre niveau d'implication</div>
							</div>

							<div className={styles.engagementList}>
								{Object.entries(engagementIcons).map(([key, icon]) => (
									<label
										key={key}
										htmlFor={`engagementType-${key}`}
										className={`${styles.selectBtn} ${engagement === key ? styles.activeBtn : ""}`}
										onClick={() => setEngagement(key as EngagementKey)}>
										<span className={styles.selectBtnLabel}>
											{icon} {translatedEngagementTypes[key as Exclude<EngagementKey, "">]}
										</span>
										<input
											type="radio"
											name="engagementType"
											id={`engagementType-${key}`}
											value={key}
											checked={engagement == (key as EngagementKey)}
											onChange={() => setEngagement(key as EngagementKey)}
											required
										/>
									</label>
								))}
							</div>
						</div>
					</div>

					<div className={styles.formFooter}>
						<label htmlFor="consent" className={styles.consentBox}>
							<input type="checkbox" name="consent" id="consent" required />
							<p>
								J'accepte que mes données soient utilisées uniquement par l'Association Asselda{" "}
								<RequiredMarker />
							</p>
						</label>
						<button type="submit" className={styles.submitBtn} disabled={isPending}>
							<Send size={18} /> {isPending ? "Envoi en cours..." : "Envoyer ma candidature"}
						</button>
						{state.success && state.message !== "" && (
							<p className={`${styles.formResult} ${styles.success}`}>
								Merci pour votre demande d'adhésion ! Le bureau de l'Association Asselda examinera votre
								dossier et vous contactera sous 48 heures.
							</p>
						)}
						{!state.success && state.error !== "" && (
							<p className={`${styles.formResult} ${styles.error}`}>{state.error}</p>
						)}
					</div>
				</form>
			</section>

			{/* SECTION 3 : DEVENIR BÉNÉVOLE (OPPORTUNITÉS) */}
			<section id="benevolat" className={styles.oppSection}>
				<h2>Devenez bénévole</h2>
				<div className={styles.oppIntroBox}>
					<p>
						L'association offre de nombreuses opportunités de bénévolat, que vous soyez professionnel de
						santé, enseignant, ingénieur, technicien, artiste ou simplement motivé. Votre temps est une
						ressource précieuse.
					</p>
				</div>

				<div className={styles.oppGrid}>
					<div className={`${styles.oppCard} ${styles.bgGreen}`}>
						<Leaf size={32} className={styles.oppIcon} />
						<p>Distribution d'aide alimentaire et humanitaire lors des campagnes solidaires</p>
					</div>
					<div className={`${styles.oppCard} ${styles.bgBlue}`}>
						<BookOpen size={32} className={styles.oppIcon} />
						<p>Accompagnement et soutien scolaire pour les enfants du village</p>
					</div>
					<div className={`${styles.oppCard} ${styles.bgBlue}`}>
						<Laptop size={32} className={styles.oppIcon} />
						<p>Encadrement d'ateliers de formation (informatique, artisanat, santé)</p>
					</div>
					<div className={`${styles.oppCard} ${styles.bgYellow}`}>
						<Wrench size={32} className={styles.oppIcon} />
						<p>Entretien et maintenance des installations (réseau d'eau, voirie, espaces verts)</p>
					</div>
					<div className={`${styles.oppCard} ${styles.bgOrange}`}>
						<Megaphone size={32} className={styles.oppIcon} />
						<p>Communication, rédaction de contenu et gestion des réseaux sociaux</p>
					</div>
					<div className={`${styles.oppCard} ${styles.bgGreen}`}>
						<Truck size={32} className={styles.oppIcon} />
						<p>Organisation logistique des événements et caravanes médicales</p>
					</div>
				</div>

				<div className={styles.availabilityCard}>
					<strong>Engagement & Disponibilité</strong>
					<p>Flexible - de quelques heures à des missions régulières, selon vos disponibilités</p>
				</div>

				<div className={styles.finalCtaWrapper}>
					<a
						href="#inscription"
						className={styles.benevoleFinalBtn}
						onClick={() => setEngagement("occasional")}>
						<span className={styles.ctaMainText}>
							Je veux me porter bénévole <ArrowRight size={18} />
						</span>
						<span className={styles.ctaSubText}>formulaire d'adhésion</span>
					</a>
				</div>
			</section>
		</main>
	);
}
