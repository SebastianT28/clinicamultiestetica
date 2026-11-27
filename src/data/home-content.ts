import type { Locale } from "@/config/site";

export type ServiceIconKind = "harmony" | "maxillofacial" | "collagen" | "body";
export type WhyIconKind = "globe" | "harmony" | "heart" | "shield";

export interface HeroSlideContent {
  id: string;
  title: string;
  cardDescription: string;
  ctaLabel: string;
  ctaTarget: "booking" | "services";
  portraitTitle: string;
  isVideo?: boolean;
}

export interface ExcellenceServiceItem {
  slug: string;
  iconKind: ServiceIconKind;
  title: string;
  summary: string;
  photoRevealLabel: string;
}

export interface WhyGabrielaItem {
  id: string;
  iconKind: WhyIconKind;
  title: string;
  description: string;
}

export interface PatientReviewItem {
  id: string;
  patientLabel: string;
  procedureName: string;
  quote: string;
  avatarPlaceholder: string;
}

export interface HomeDictionary {
  nav: {
    home: string;
    services: string;
    reviews: string;
    about: string;
    blog: string;
    contactCta: string;
    menuLabel: string;
    closeMenuLabel: string;
  };
  hero: {
    prevSlideLabel: string;
    nextSlideLabel: string;
    slides: HeroSlideContent[];
  };
  specialization: {
    titleLead: string;
    titleAccent: string;
    portraitTitle: string;
    quote: string;
    quoteAuthor: string;
    statNumber: string;
    statCaption: string;
    description: string;
    ctaLabel: string;
  };
  servicesSection: {
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    cardActionLabel: string;
    viewAllLabel: string;
    prevLabel: string;
    nextLabel: string;
    pageDotPrefix: string;
    items: ExcellenceServiceItem[];
  };
  storySection: {
    titleLead: string;
    titleAccent: string;
    openingMotto: string;
    paragraphs: string[];
    personalQuote: string;
    quoteSignature: string;
    ctaLabel: string;
    counters: { value: string; label: string }[];
    portraitTitle: string;
  };
  whySection: {
    sectionLabel: string;
    titleLead: string;
    titleAccent: string;
    items: WhyGabrielaItem[];
  };
  reviewsSection: {
    title: string;
    subtitle: string;
    starAriaLabel: string;
    reviews: PatientReviewItem[];
  };
  bookingSection: {
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    addressLabel: string;
    addressValue: string;
    whatsappLabel: string;
    modalityInfoLabel: string;
    modalityInfoValue: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    procedureLabel: string;
    procedurePlaceholder: string;
    privacyLabel: string;
    privacyError: string;
    submitBtn: string;
    successTitle: string;
    successBody: string;
    whatsappConfirmBtn: string;
  };
  footer: {
    tagline: string;
    schedule: string;
    exploreHeading: string;
    specialtiesHeading: string;
    patientCareHeading: string;
    claimsBook: string;
    privacyPolicy: string;
    termsConditions: string;
    valuationTerms: string;
    bookBtn: string;
    copyright: string;
  };
  waModal: {
    fabAriaLabel: string;
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    ageLabel: string;
    agePlaceholder: string;
    procedureLabel: string;
    procedurePlaceholder: string;
    privacyAccept: string;
    privacyError: string;
    submitBtn: string;
    footnote: string;
  };
}

export const HOME_CONTENT: Record<Locale, HomeDictionary> = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      reviews: "Testimonios",
      about: "¿Quién soy?",
      blog: "Blog",
      contactCta: "Contáctame",
      menuLabel: "Abrir menú principal",
      closeMenuLabel: "Cerrar menú principal",
    },
    hero: {
      prevSlideLabel: "Diapositiva anterior",
      nextSlideLabel: "Siguiente diapositiva",
      slides: [
        {
          id: "hero-personal",
          title:
            "Armonización facial y cirugía estética que realzan tu belleza natural",
          cardDescription:
            "Más de 18 años acompañándote con criterio anatómico, preparación internacional y calidez humana en Arequipa.",
          ctaLabel: "Reservar valoración",
          ctaTarget: "booking",
          portraitTitle: "Espacio para retrato o video principal",
          isVideo: true,
        },
        {
          id: "hero-clinica",
          title:
            "Ciencia médica y acompañamiento cercano para una transformación segura",
          cardDescription:
            "Liderada por la Dra. Gabriela Delgado junto a médicos especialistas en Clínica Multiestética.",
          ctaLabel: "Explorar servicios",
          ctaTarget: "services",
          portraitTitle: "Espacio para fotografía editorial",
        },
      ],
    },
    specialization: {
      titleLead: "Atención médica especializada en ",
      titleAccent: "armonización facial y cirugía maxilofacial",
      portraitTitle: "Retrato Dra. Gabriela Delgado Silva",
      quote:
        "«Mi mayor satisfacción no es solamente ver una transformación física, sino saber que detrás de ella hay una persona que vuelve a sonreír, recupera su seguridad y se siente feliz consigo misma.»",
      quoteAuthor: "Dra. Gabriela Delgado Silva",
      statNumber: "18+",
      statCaption: "Años de experiencia profesional",
      description:
        "Para la Dra. Gabriela Delgado, la belleza consiste en sentirte cómoda y segura con quien eres, uniendo precisión facial, insumos certificados y el respaldo de especialistas en Clínica Multiestética.",
      ctaLabel: "Solicitar cita",
    },
    servicesSection: {
      titleLead: "Servicios de ",
      titleAccent: "excelencia médica",
      subtitle:
        "Especialidades faciales y corporales enfocadas en resultados armónicos y seguros.",
      cardActionLabel: "Solicitar valoración",
      viewAllLabel: "Ver todos los servicios",
      prevLabel: "Servicios anteriores",
      nextLabel: "Siguientes servicios",
      pageDotPrefix: "Grupo",
      items: [
        {
          slug: "acido-hialuronico",
          iconKind: "harmony",
          title: "Ácido hialurónico",
          summary:
            "Soporte sutil en labios, pómulos, mentón y ojeras respetando tus gestos naturales.",
          photoRevealLabel: "Foto · Hialurónico",
        },
        {
          slug: "lipopapada-marcacion-mandibular",
          iconKind: "maxillofacial",
          title: "Lipopapada y marcación mandibular",
          summary:
            "Define el contorno del cuello y proyecta un ángulo mandibular limpio y equilibrado.",
          photoRevealLabel: "Foto · Mandibular",
        },
        {
          slug: "toxina-botulinica",
          iconKind: "harmony",
          title: "Toxina botulínica",
          summary:
            "Suaviza líneas de expresión conservando una mirada descansada y natural.",
          photoRevealLabel: "Foto · Toxina",
        },
        {
          slug: "blefaroplastia",
          iconKind: "maxillofacial",
          title: "Blefaroplastia superior e inferior",
          summary:
            "Corrige el exceso de piel y bolsas palpebrales devolviendo luz a tu mirada.",
          photoRevealLabel: "Foto · Mirada",
        },
        {
          slug: "bioestimulador-colageno",
          iconKind: "collagen",
          title: "Bioestimulador de colágeno",
          summary:
            "Activa la producción natural de colágeno para recuperar firmeza y calidad dérmica.",
          photoRevealLabel: "Foto · Colágeno",
        },
        {
          slug: "lifting-facial",
          iconKind: "maxillofacial",
          title: "Lifting facial",
          summary:
            "Reposiciona tejidos profundos de rostro y cuello con apariencia fresca y duradera.",
          photoRevealLabel: "Foto · Lifting",
        },
        {
          slug: "bichectomia",
          iconKind: "maxillofacial",
          title: "Bichectomía",
          summary:
            "Estiliza el tercio medio facial mediante evaluación anatómica responsable.",
          photoRevealLabel: "Foto · Bichectomía",
        },
        {
          slug: "liposuccion-360",
          iconKind: "body",
          title: "Liposucción 360",
          summary:
            "Remodelación integral de cintura, abdomen y espalda junto a nuestro staff quirúrgico.",
          photoRevealLabel: "Foto · Lipo 360",
        },
      ],
    },
    storySection: {
      titleLead: "Doctora ",
      titleAccent: "Gabriela Delgado Silva",
      openingMotto:
        "Nacimos de un sueño. Crecimos con valentía. Existimos para transformar vidas.",
      paragraphs: [
        "Cirujana maxilofacial y especialista en armonización facial con más de 18 años de experiencia profesional y constante preparación internacional, dedicada a que cada persona se sienta segura y feliz con su propia imagen.",
        "Tras una etapa de grandes cambios personales, sus tres hijos impulsaron su decisión de reinventarse y fundar Clínica Multiestética junto a médicos especialistas que comparten una atención ética, cálida y personalizada.",
      ],
      personalQuote:
        "«Nunca permitas que una etapa difícil defina tu futuro. Siempre puedes volver a empezar, prepararte, crecer y construir algo extraordinario.»",
      quoteSignature: "Dra. Gabriela Delgado Silva",
      ctaLabel: "Agendar valoración",
      counters: [
        { value: "+18", label: "Años de experiencia" },
        { value: "16", label: "Procedimientos médicos" },
      ],
      portraitTitle: "Retrato Dra. Gabriela Delgado Silva",
    },
    whySection: {
      sectionLabel: "¿Por qué la Dra. Gabriela Delgado?",
      titleLead: "Mucho más que estética: ",
      titleAccent: "experiencia, naturalidad y calidez",
      items: [
        {
          id: "why-internacional",
          iconKind: "globe",
          title: "Preparación internacional",
          description:
            "Más de 18 años actualizando técnicas seguras de cirugía maxilofacial y armonización facial.",
        },
        {
          id: "why-naturalidad",
          iconKind: "harmony",
          title: "Resultados armónicos",
          description:
            "Cada plan respeta tus facciones reales para lograr frescura y proporción sin excesos.",
        },
        {
          id: "why-empatia",
          iconKind: "heart",
          title: "Cercanía y empatía",
          description:
            "Escuchamos tu historia sin prisas acompañándote antes, durante y después del tratamiento.",
        },
        {
          id: "why-respaldo",
          iconKind: "shield",
          title: "Respaldo multidisciplinario",
          description:
            "Dirección médica junto a especialistas acreditados en Clínica Multiestética.",
        },
      ],
    },
    reviewsSection: {
      title: "¿Qué piensan nuestros pacientes?",
      subtitle:
        "Espacios reservados para testimonios verificados de pacientes reales.",
      starAriaLabel: "Calificación de 5 estrellas",
      reviews: [
        {
          id: "rev-1",
          patientLabel: "Espacio reseña verificada 1",
          procedureName: "Armonización facial",
          quote:
            "Espacio reservado para testimonio real sobre la escucha cercana y la naturalidad del resultado facial.",
          avatarPlaceholder: "Avatar 1",
        },
        {
          id: "rev-2",
          patientLabel: "Espacio reseña verificada 2",
          procedureName: "Marcación mandibular",
          quote:
            "Espacio reservado para testimonio real destacando la precisión del perfilamiento y el seguimiento atento.",
          avatarPlaceholder: "Avatar 2",
        },
        {
          id: "rev-3",
          patientLabel: "Espacio reseña verificada 3",
          procedureName: "Blefaroplastia",
          quote:
            "Espacio reservado para testimonio real acerca de recuperar una mirada descansada con total confianza.",
          avatarPlaceholder: "Avatar 3",
        },
        {
          id: "rev-4",
          patientLabel: "Espacio reseña verificada 4",
          procedureName: "Bioestimulador de colágeno",
          quote:
            "Espacio reservado para testimonio real valorando la mejora progresiva en firmeza y calidad de piel.",
          avatarPlaceholder: "Avatar 4",
        },
        {
          id: "rev-5",
          patientLabel: "Espacio reseña verificada 5",
          procedureName: "Bichectomía",
          quote:
            "Espacio reservado para testimonio real resaltando el trato cálido y la honestidad en la evaluación previa.",
          avatarPlaceholder: "Avatar 5",
        },
        {
          id: "rev-6",
          patientLabel: "Espacio reseña verificada 6",
          procedureName: "Cirugía estética corporal",
          quote:
            "Espacio reservado para testimonio real sobre el acompañamiento seguro del equipo en Clínica Multiestética.",
          avatarPlaceholder: "Avatar 6",
        },
      ],
    },
    bookingSection: {
      titleLead: "Reserva tu cita de ",
      titleAccent: "valoración",
      subtitle:
        "Déjanos tus datos y nuestro equipo coordinará contigo el horario ideal en Arequipa.",
      addressLabel: "Consultorio",
      addressValue: "Urb. León XIII K-8, Cayma, Arequipa",
      whatsappLabel: "WhatsApp directo",
      modalityInfoLabel: "Atención",
      modalityInfoValue: "Previa cita personalizada (Español e Inglés)",
      formTitle: "Solicitar cita",
      nameLabel: "Nombre y apellidos",
      namePlaceholder: "Ej. Valeria Paredes",
      phoneLabel: "WhatsApp o celular",
      phonePlaceholder: "Ej. +51 958 000 000",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "Ej. valeria@correo.com",
      procedureLabel: "Servicio de interés",
      procedurePlaceholder: "Selecciona o escribe un procedimiento",
      privacyLabel:
        "Acepto el tratamiento de mis datos conforme a la Ley N° 29733.",
      privacyError: "Acepta la política de privacidad para continuar.",
      submitBtn: "Reservar cita",
      successTitle: "Solicitud registrada",
      successBody:
        "Hemos preparado los datos de tu cita. También puedes confirmarla ahora mismo por WhatsApp.",
      whatsappConfirmBtn: "Confirmar por WhatsApp",
    },
    footer: {
      tagline:
        "Donde la belleza encuentra su propósito y cada historia merece una nueva oportunidad.",
      schedule: "Atención previa cita · Cayma, Arequipa",
      exploreHeading: "Navegación",
      specialtiesHeading: "Servicios destacados",
      patientCareHeading: "Atención al paciente",
      claimsBook: "Libro de Reclamaciones Virtual",
      privacyPolicy: "Política de privacidad (Ley N° 29733)",
      termsConditions: "Términos y condiciones",
      valuationTerms: "Criterios de valoración médica",
      bookBtn: "Reservar cita",
      copyright:
        "© 2026 Dra. Gabriela Delgado Silva · Clínica Multiestética. Todos los derechos reservados.",
    },
    waModal: {
      fabAriaLabel: "Hablar por WhatsApp con la consulta de la Dra. Gabriela Delgado",
      title: "Orientación por WhatsApp",
      description:
        "Completa estos datos y abriremos WhatsApp con tu consulta lista.",
      nameLabel: "Tu nombre",
      namePlaceholder: "Ej. Andrea Rojas",
      ageLabel: "Edad (+18)",
      agePlaceholder: "Ej. 30",
      procedureLabel: "Procedimiento de interés",
      procedurePlaceholder: "Ej. Armonización facial",
      privacyAccept:
        "Acepto la política de privacidad (Ley N° 29733).",
      privacyError: "Debes aceptar la política de privacidad para continuar.",
      submitBtn: "Continuar a WhatsApp",
      footnote:
        "Tus datos se emplean únicamente para coordinar tu valoración médica.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      reviews: "Testimonials",
      about: "About me",
      blog: "Blog",
      contactCta: "Contact me",
      menuLabel: "Open main menu",
      closeMenuLabel: "Close main menu",
    },
    hero: {
      prevSlideLabel: "Previous slide",
      nextSlideLabel: "Next slide",
      slides: [
        {
          id: "hero-personal",
          title:
            "Facial harmonization and aesthetic surgery that enhance your natural essence",
          cardDescription:
            "Over 18 years guiding patients with anatomical precision, international training, and warm care in Arequipa.",
          ctaLabel: "Book consultation",
          ctaTarget: "booking",
          portraitTitle: "Hero portrait or video placeholder",
          isVideo: true,
        },
        {
          id: "hero-clinica",
          title:
            "Medical excellence and compassionate care for safe transformations",
          cardDescription:
            "Led by Dr. Gabriela Delgado alongside specialist physicians at Clínica Multiestética.",
          ctaLabel: "Explore services",
          ctaTarget: "services",
          portraitTitle: "Editorial portrait placeholder",
        },
      ],
    },
    specialization: {
      titleLead: "Specialized medical care in ",
      titleAccent: "facial harmonization and maxillofacial surgery",
      portraitTitle: "Portrait Dr. Gabriela Delgado Silva",
      quote:
        "“My greatest satisfaction is not only seeing a physical transformation, but knowing that behind it is a person who smiles again, regains confidence, and feels happy with themselves.”",
      quoteAuthor: "Dr. Gabriela Delgado Silva",
      statNumber: "18+",
      statCaption: "Years of professional experience",
      description:
        "For Dr. Gabriela Delgado, true beauty means feeling comfortable and confident in who you are, combining facial precision, certified products, and the specialist team at Clínica Multiestética.",
      ctaLabel: "Book appointment",
    },
    servicesSection: {
      titleLead: "Services of ",
      titleAccent: "medical excellence",
      subtitle:
        "Facial and body specialties focused on balanced, natural-looking results.",
      cardActionLabel: "Request consultation",
      viewAllLabel: "View all services",
      prevLabel: "Previous services",
      nextLabel: "Next services",
      pageDotPrefix: "Group",
      items: [
        {
          slug: "acido-hialuronico",
          iconKind: "harmony",
          title: "Hyaluronic acid fillers",
          summary:
            "Subtle support for lips, cheeks, chin, and under-eye hollows keeping natural expressions.",
          photoRevealLabel: "Photo · Hyaluronic",
        },
        {
          slug: "lipopapada-marcacion-mandibular",
          iconKind: "maxillofacial",
          title: "Chin lipo & jawline contouring",
          summary:
            "Refines submental fullness and defines a clean, balanced mandibular contour.",
          photoRevealLabel: "Photo · Jawline",
        },
        {
          slug: "toxina-botulinica",
          iconKind: "harmony",
          title: "Botulinum toxin",
          summary:
            "Softens dynamic expression lines while keeping your gaze rested and natural.",
          photoRevealLabel: "Photo · Toxin",
        },
        {
          slug: "blefaroplastia",
          iconKind: "maxillofacial",
          title: "Upper & lower blepharoplasty",
          summary:
            "Addresses excess eyelid skin and under-eye bags to brighten your gaze.",
          photoRevealLabel: "Photo · Eyelids",
        },
        {
          slug: "bioestimulador-colageno",
          iconKind: "collagen",
          title: "Collagen biostimulators",
          summary:
            "Stimulates natural collagen production to restore dermal firmness and glow.",
          photoRevealLabel: "Photo · Collagen",
        },
        {
          slug: "lifting-facial",
          iconKind: "maxillofacial",
          title: "Facelift surgery",
          summary:
            "Repositions deep facial and neck tissues for rested, lasting rejuvenation.",
          photoRevealLabel: "Photo · Facelift",
        },
        {
          slug: "bichectomia",
          iconKind: "maxillofacial",
          title: "Buccal fat removal",
          summary:
            "Refines mid-face contour through responsible anatomical facial evaluation.",
          photoRevealLabel: "Photo · Bichectomy",
        },
        {
          slug: "liposuccion-360",
          iconKind: "body",
          title: "360 liposuction",
          summary:
            "Comprehensive waist, abdomen, and back sculpting with our surgical team.",
          photoRevealLabel: "Photo · 360 Lipo",
        },
      ],
    },
    storySection: {
      titleLead: "Doctor ",
      titleAccent: "Gabriela Delgado Silva",
      openingMotto:
        "Born from a dream. Grown with courage. Dedicated to transforming lives.",
      paragraphs: [
        "Maxillofacial surgeon and facial harmonization specialist with over 18 years of professional experience and ongoing international training, dedicated to helping every patient feel confident in their own skin.",
        "After navigating a chapter of major personal change, her three children inspired her to reinvent herself and found Clínica Multiestética alongside accredited specialist physicians.",
      ],
      personalQuote:
        "“Never let a difficult chapter define your future. You can always start again, prepare yourself, grow, and build something extraordinary.”",
      quoteSignature: "Dr. Gabriela Delgado Silva",
      ctaLabel: "Book consultation",
      counters: [
        { value: "+18", label: "Years of experience" },
        { value: "16", label: "Medical procedures" },
      ],
      portraitTitle: "Portrait Dr. Gabriela Delgado Silva",
    },
    whySection: {
      sectionLabel: "Why Dr. Gabriela Delgado?",
      titleLead: "More than aesthetics: ",
      titleAccent: "experience, natural harmony, and warmth",
      items: [
        {
          id: "why-internacional",
          iconKind: "globe",
          title: "International training",
          description:
            "Over 18 years refining safe maxillofacial and facial harmonization techniques.",
        },
        {
          id: "why-naturalidad",
          iconKind: "harmony",
          title: "Natural harmony",
          description:
            "Every plan respects your true facial proportions without artificial excess.",
        },
        {
          id: "why-empatia",
          iconKind: "heart",
          title: "Genuine empathy",
          description:
            "Unhurried listening and attentive care before, during, and after your procedure.",
        },
        {
          id: "why-respaldo",
          iconKind: "shield",
          title: "Multidisciplinary team",
          description:
            "Medical leadership backed by accredited specialists at Clínica Multiestética.",
        },
      ],
    },
    reviewsSection: {
      title: "What do our patients think?",
      subtitle:
        "Dedicated slots prepared for verified real patient testimonials.",
      starAriaLabel: "5 out of 5 stars",
      reviews: [
        {
          id: "rev-1",
          patientLabel: "Verified review slot 1",
          procedureName: "Facial harmonization",
          quote:
            "Reserved space for a verified patient review highlighting attentive listening and natural facial balance.",
          avatarPlaceholder: "Avatar 1",
        },
        {
          id: "rev-2",
          patientLabel: "Verified review slot 2",
          procedureName: "Jawline contouring",
          quote:
            "Reserved space for a verified patient review describing precise mandibular definition and supportive care.",
          avatarPlaceholder: "Avatar 2",
        },
        {
          id: "rev-3",
          patientLabel: "Verified review slot 3",
          procedureName: "Blepharoplasty",
          quote:
            "Reserved space for a verified patient review on achieving a rested gaze with full medical confidence.",
          avatarPlaceholder: "Avatar 3",
        },
        {
          id: "rev-4",
          patientLabel: "Verified review slot 4",
          procedureName: "Collagen biostimulator",
          quote:
            "Reserved space for a verified patient review sharing progressive firmness and radiant skin quality.",
          avatarPlaceholder: "Avatar 4",
        },
        {
          id: "rev-5",
          patientLabel: "Verified review slot 5",
          procedureName: "Bichectomy",
          quote:
            "Reserved space for a verified patient review praising warm care and honest anatomical evaluation.",
          avatarPlaceholder: "Avatar 5",
        },
        {
          id: "rev-6",
          patientLabel: "Verified review slot 6",
          procedureName: "Aesthetic body surgery",
          quote:
            "Reserved space for a verified patient review on the surgical team’s safety and recovery follow-up.",
          avatarPlaceholder: "Avatar 6",
        },
      ],
    },
    bookingSection: {
      titleLead: "Book your ",
      titleAccent: "consultation",
      subtitle:
        "Leave your details and our team will coordinate your ideal appointment time in Arequipa.",
      addressLabel: "Clinic address",
      addressValue: "Urb. León XIII K-8, Cayma, Arequipa",
      whatsappLabel: "Direct WhatsApp",
      modalityInfoLabel: "Appointments",
      modalityInfoValue: "By appointment in Spanish & English",
      formTitle: "Request appointment",
      nameLabel: "Full name",
      namePlaceholder: "e.g. Valeria Paredes",
      phoneLabel: "WhatsApp or mobile phone",
      phonePlaceholder: "e.g. +51 958 000 000",
      emailLabel: "Email address",
      emailPlaceholder: "e.g. valeria@email.com",
      procedureLabel: "Service of interest",
      procedurePlaceholder: "Select or type a procedure",
      privacyLabel:
        "I accept the processing of my personal data under Law N° 29733.",
      privacyError: "Please accept the privacy policy to continue.",
      submitBtn: "Book appointment",
      successTitle: "Request registered",
      successBody:
        "Your appointment details are ready. You can also confirm immediately via WhatsApp.",
      whatsappConfirmBtn: "Confirm via WhatsApp",
    },
    footer: {
      tagline:
        "Where beauty finds its purpose and every story deserves a new opportunity.",
      schedule: "By appointment · Cayma, Arequipa",
      exploreHeading: "Navigation",
      specialtiesHeading: "Featured services",
      patientCareHeading: "Patient care",
      claimsBook: "Virtual Claims Book (INDECOPI)",
      privacyPolicy: "Privacy policy (Law N° 29733)",
      termsConditions: "Terms & conditions",
      valuationTerms: "Medical assessment criteria",
      bookBtn: "Book appointment",
      copyright:
        "© 2026 Dr. Gabriela Delgado Silva · Clínica Multiestética. All rights reserved.",
    },
    waModal: {
      fabAriaLabel: "Chat on WhatsApp with Dr. Gabriela Delgado’s practice",
      title: "WhatsApp guidance",
      description:
        "Fill in these brief details and continue directly on WhatsApp.",
      nameLabel: "Your name",
      namePlaceholder: "e.g. Andrea Rojas",
      ageLabel: "Age (+18)",
      agePlaceholder: "e.g. 30",
      procedureLabel: "Procedure of interest",
      procedurePlaceholder: "e.g. Facial harmonization",
      privacyAccept: "I accept the privacy policy (Law N° 29733).",
      privacyError: "Please accept the privacy policy to continue.",
      submitBtn: "Continue to WhatsApp",
      footnote:
        "Your information is used strictly to coordinate your medical consultation.",
    },
  },
};
