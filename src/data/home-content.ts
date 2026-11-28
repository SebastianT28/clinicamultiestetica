import type { Locale } from "@/config/site";

export type ServiceIconKind = "harmony" | "maxillofacial" | "collagen" | "body";
export type WhyIconKind = "globe" | "harmony" | "heart" | "shield";

export interface HeroSlideContent {
  id: string;
  titleLead: string;
  titleAccent: string;
  titleTrail: string;
  cardDescription: string;
  ctaLabel: string;
  ctaTarget: "booking" | "services";
  portraitTitle: string;
  imageSrc: string;
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
  avatarSrc: string;
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
    imageSrc: string;
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
    imageSrc: string;
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
          titleLead: "Armonización facial y ",
          titleAccent: "cirugía estética",
          titleTrail: " que realzan tu belleza natural",
          cardDescription:
            "Más de 18 años acompañándote con criterio anatómico, preparación internacional y calidez humana en Arequipa.",
          ctaLabel: "Agendar cita",
          ctaTarget: "booking",
          portraitTitle: "Dra. Gabriela Delgado Silva en consulta",
          imageSrc: "/images/doctora/dra-hero-1.jpg",
          isVideo: true,
        },
        {
          id: "hero-clinica",
          titleLead: "Ciencia médica y ",
          titleAccent: "acompañamiento cercano",
          titleTrail: " para una transformación segura",
          cardDescription:
            "Liderada por la Dra. Gabriela Delgado junto a médicos especialistas en Clínica Multiestética.",
          ctaLabel: "Explorar servicios",
          ctaTarget: "services",
          portraitTitle: "Atención personalizada en Clínica Multiestética",
          imageSrc: "/images/doctora/dra-hero-2.jpg",
        },
      ],
    },
    specialization: {
      titleLead: "Atención médica especializada en ",
      titleAccent: "armonización facial y cirugía maxilofacial",
      portraitTitle: "Evaluación facial con la Dra. Gabriela Delgado Silva",
      imageSrc: "/images/doctora/dra-especializacion.jpg",
      quote:
        "«Mi mayor satisfacción no es solamente ver una transformación física, sino saber que detrás de ella hay una persona que vuelve a sonreír, recupera su seguridad y se siente feliz consigo misma.»",
      quoteAuthor: "Dra. Gabriela Delgado Silva",
      statNumber: "18+",
      statCaption: "Años de experiencia profesional",
      description:
        "Para la Dra. Gabriela Delgado, la belleza consiste en sentirte cómoda y segura con quien eres, uniendo precisión facial, insumos certificados y el respaldo de especialistas en Clínica Multiestética.",
      ctaLabel: "Agendar cita",
    },
    servicesSection: {
      titleLead: "Servicios de ",
      titleAccent: "excelencia médica",
      subtitle:
        "Especialidades faciales y corporales enfocadas en resultados armónicos y seguros.",
      cardActionLabel: "Agendar cita",
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
      ctaLabel: "Agendar cita",
      counters: [
        { value: "+18", label: "Años de experiencia" },
        { value: "16", label: "Procedimientos médicos" },
      ],
      portraitTitle: "Retrato Dra. Gabriela Delgado Silva",
      imageSrc: "/images/doctora/dra-historia.jpg",
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
        "Experiencias de atención cercana, seguridad clínica y resultados armónicos en Arequipa.",
      starAriaLabel: "Calificación de 5 estrellas",
      reviews: [
        {
          id: "rev-1",
          patientLabel: "Valeria M.",
          procedureName: "Armonización facial",
          quote:
            "La Dra. Gabriela me escuchó con mucha paciencia y logró un resultado tan natural que todos notan mi rostro más descansado sin saber qué me hice.",
          avatarPlaceholder: "Valeria M.",
          avatarSrc: "/images/pacientes/paciente-1.jpg",
        },
        {
          id: "rev-2",
          patientLabel: "Carlos R.",
          procedureName: "Marcación mandibular",
          quote:
            "Desde la primera cita me explicó cada detalle anatómico con honestidad. La definición del perfil quedó limpia, equilibrada y el seguimiento fue impecable.",
          avatarPlaceholder: "Carlos R.",
          avatarSrc: "/images/pacientes/paciente-2.jpg",
        },
        {
          id: "rev-3",
          patientLabel: "Patricia S.",
          procedureName: "Blefaroplastia",
          quote:
            "Sentía la mirada cansada desde hacía años. El trato humano de la doctora y su equipo me dio total tranquilidad y la recuperación fue muy llevadera.",
          avatarPlaceholder: "Patricia S.",
          avatarSrc: "/images/pacientes/paciente-3.jpg",
        },
        {
          id: "rev-4",
          patientLabel: "Lucía F.",
          procedureName: "Bioestimulador de colágeno",
          quote:
            "A los dos meses mi piel recuperó firmeza y luminosidad sin perder mis gestos. Se nota la experiencia y el cuidado en cada sesión.",
          avatarPlaceholder: "Lucía F.",
          avatarSrc: "/images/pacientes/paciente-4.jpg",
        },
        {
          id: "rev-5",
          patientLabel: "Camila V.",
          procedureName: "Bichectomía",
          quote:
            "Me encantó la calidez del consultorio en Cayma y la precisión del procedimiento. El posoperatorio estuvo acompañado en todo momento.",
          avatarPlaceholder: "Camila V.",
          avatarSrc: "/images/pacientes/paciente-5.jpg",
        },
        {
          id: "rev-6",
          patientLabel: "Mariana T.",
          procedureName: "Cirugía estética corporal",
          quote:
            "El respaldo del equipo de especialistas de Clínica Multiestética me hizo sentir segura antes, durante y después de mi intervención.",
          avatarPlaceholder: "Mariana T.",
          avatarSrc: "/images/pacientes/paciente-6.jpg",
        },
      ],
    },
    bookingSection: {
      titleLead: "Agenda tu ",
      titleAccent: "cita médica",
      subtitle:
        "Déjanos tus datos y el servicio de tu interés para coordinar contigo por WhatsApp.",
      addressLabel: "Consultorio",
      addressValue: "Urb. León XIII K-8, Cayma, Arequipa",
      whatsappLabel: "WhatsApp directo",
      modalityInfoLabel: "Atención",
      modalityInfoValue: "Previa cita personalizada (Español e Inglés)",
      formTitle: "Agendar cita",
      nameLabel: "Nombre y apellidos",
      namePlaceholder: "Ej. Valeria Paredes",
      phoneLabel: "WhatsApp o celular",
      phonePlaceholder: "Ej. +51 958 000 000",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "Ej. valeria@correo.com",
      procedureLabel: "Motivo o servicio de interés",
      procedurePlaceholder: "Selecciona un servicio o escribe tu motivo",
      privacyLabel:
        "Acepto el tratamiento de mis datos conforme a la Ley N° 29733.",
      privacyError: "Acepta la política de privacidad para continuar.",
      submitBtn: "Agendar cita",
      successTitle: "Solicitud lista en WhatsApp",
      successBody:
        "Abrimos WhatsApp con tus datos y motivo de interés. Si la ventana no se abrió automáticamente, pulsa el botón inferior.",
      whatsappConfirmBtn: "Abrir en WhatsApp",
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
      bookBtn: "Agendar cita",
      copyright:
        "© 2026 Dra. Gabriela Delgado Silva · Clínica Multiestética. Todos los derechos reservados.",
    },
    waModal: {
      fabAriaLabel: "Hablar por WhatsApp con el consultorio de la Dra. Gabriela Delgado",
      title: "Agendar cita",
      description:
        "Indícanos tu nombre y el motivo o servicio de interés para atenderte por WhatsApp.",
      nameLabel: "Tu nombre",
      namePlaceholder: "Ej. Andrea Rojas",
      ageLabel: "Edad (+18)",
      agePlaceholder: "Ej. 30",
      procedureLabel: "Motivo o servicio de interés",
      procedurePlaceholder: "Selecciona un servicio o escribe tu motivo",
      privacyAccept:
        "Acepto la política de privacidad (Ley N° 29733).",
      privacyError: "Debes aceptar la política de privacidad para continuar.",
      submitBtn: "Agendar cita por WhatsApp",
      footnote:
        "Tus datos se emplean únicamente para coordinar tu cita médica.",
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
          titleLead: "Facial harmonization and ",
          titleAccent: "aesthetic surgery",
          titleTrail: " that enhance your natural essence",
          cardDescription:
            "Over 18 years guiding patients with anatomical precision, international training, and warm care in Arequipa.",
          ctaLabel: "Book appointment",
          ctaTarget: "booking",
          portraitTitle: "Dr. Gabriela Delgado Silva in consultation",
          imageSrc: "/images/doctora/dra-hero-1.jpg",
          isVideo: true,
        },
        {
          id: "hero-clinica",
          titleLead: "Medical excellence and ",
          titleAccent: "compassionate care",
          titleTrail: " for safe transformations",
          cardDescription:
            "Led by Dr. Gabriela Delgado alongside specialist physicians at Clínica Multiestética.",
          ctaLabel: "Explore services",
          ctaTarget: "services",
          portraitTitle: "Personalized care at Clínica Multiestética",
          imageSrc: "/images/doctora/dra-hero-2.jpg",
        },
      ],
    },
    specialization: {
      titleLead: "Specialized medical care in ",
      titleAccent: "facial harmonization and maxillofacial surgery",
      portraitTitle: "Facial assessment with Dr. Gabriela Delgado Silva",
      imageSrc: "/images/doctora/dra-especializacion.jpg",
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
      cardActionLabel: "Book appointment",
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
      ctaLabel: "Book appointment",
      counters: [
        { value: "+18", label: "Years of experience" },
        { value: "16", label: "Medical procedures" },
      ],
      portraitTitle: "Portrait Dr. Gabriela Delgado Silva",
      imageSrc: "/images/doctora/dra-historia.jpg",
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
        "Warm medical guidance, clinical safety, and harmonious outcomes in Arequipa.",
      starAriaLabel: "5 out of 5 stars",
      reviews: [
        {
          id: "rev-1",
          patientLabel: "Valeria M.",
          procedureName: "Facial harmonization",
          quote:
            "Dr. Gabriela listened unhurriedly and achieved such a subtle result that everyone says I look well-rested while keeping my natural expressions.",
          avatarPlaceholder: "Valeria M.",
          avatarSrc: "/images/pacientes/paciente-1.jpg",
        },
        {
          id: "rev-2",
          patientLabel: "Carlos R.",
          procedureName: "Jawline contouring",
          quote:
            "Every anatomical detail was explained honestly from day one. My jawline contour looks clean, balanced, and the follow-up was attentive.",
          avatarPlaceholder: "Carlos R.",
          avatarSrc: "/images/pacientes/paciente-2.jpg",
        },
        {
          id: "rev-3",
          patientLabel: "Patricia S.",
          procedureName: "Blepharoplasty",
          quote:
            "My eyelids had felt heavy for years. Dr. Gabriela and her team gave me complete peace of mind and a smooth, comfortable recovery.",
          avatarPlaceholder: "Patricia S.",
          avatarSrc: "/images/pacientes/paciente-3.jpg",
        },
        {
          id: "rev-4",
          patientLabel: "Lucía F.",
          procedureName: "Collagen biostimulator",
          quote:
            "Within two months my skin regained firmness and glow without changing my features. You can feel her dedication in every visit.",
          avatarPlaceholder: "Lucía F.",
          avatarSrc: "/images/pacientes/paciente-4.jpg",
        },
        {
          id: "rev-5",
          patientLabel: "Camila V.",
          procedureName: "Bichectomy",
          quote:
            "Warm care at the Cayma clinic and very precise planning. Post-procedure checkups were supportive every step of the way.",
          avatarPlaceholder: "Camila V.",
          avatarSrc: "/images/pacientes/paciente-5.jpg",
        },
        {
          id: "rev-6",
          patientLabel: "Mariana T.",
          procedureName: "Aesthetic body surgery",
          quote:
            "The specialist surgical team at Clínica Multiestética made me feel safe and cared for before, during, and after my procedure.",
          avatarPlaceholder: "Mariana T.",
          avatarSrc: "/images/pacientes/paciente-6.jpg",
        },
      ],
    },
    bookingSection: {
      titleLead: "Book your ",
      titleAccent: "medical appointment",
      subtitle:
        "Share your details and service of interest to coordinate your appointment via WhatsApp.",
      addressLabel: "Clinic address",
      addressValue: "Urb. León XIII K-8, Cayma, Arequipa",
      whatsappLabel: "Direct WhatsApp",
      modalityInfoLabel: "Appointments",
      modalityInfoValue: "By appointment in Spanish & English",
      formTitle: "Book appointment",
      nameLabel: "Full name",
      namePlaceholder: "e.g. Valeria Paredes",
      phoneLabel: "WhatsApp or mobile phone",
      phonePlaceholder: "e.g. +51 958 000 000",
      emailLabel: "Email address",
      emailPlaceholder: "e.g. valeria@email.com",
      procedureLabel: "Reason or service of interest",
      procedurePlaceholder: "Select a service or type your reason",
      privacyLabel:
        "I accept the processing of my personal data under Law N° 29733.",
      privacyError: "Please accept the privacy policy to continue.",
      submitBtn: "Book appointment",
      successTitle: "Request ready on WhatsApp",
      successBody:
        "We opened WhatsApp with your details and service of interest. If it did not open automatically, click below.",
      whatsappConfirmBtn: "Open on WhatsApp",
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
      title: "Book appointment",
      description:
        "Share your name and reason or service of interest to assist you on WhatsApp.",
      nameLabel: "Your name",
      namePlaceholder: "e.g. Andrea Rojas",
      ageLabel: "Age (+18)",
      agePlaceholder: "e.g. 30",
      procedureLabel: "Reason or service of interest",
      procedurePlaceholder: "Select a service or type your reason",
      privacyAccept: "I accept the privacy policy (Law N° 29733).",
      privacyError: "Please accept the privacy policy to continue.",
      submitBtn: "Book appointment on WhatsApp",
      footnote:
        "Your information is used strictly to coordinate your medical appointment.",
    },
  },
};
