import type { Locale, ServiceCategorySlug } from "@/config/site";

export type ServiceIconKind = "harmony" | "maxillofacial" | "collagen" | "body";
export type WhyIconKind = "globe" | "harmony" | "heart" | "shield";

export interface HeroSlideContent {
  id: string;
  badgeTag: string;
  badgeText: string;
  title: string;
  cardDescription: string;
  ctaLabel: string;
  ctaTarget: "booking" | "services";
  portraitTitle: string;
  portraitSubtitle: string;
  isVideo?: boolean;
}

export interface ExcellenceServiceItem {
  slug: string;
  category: ServiceCategorySlug;
  featured: boolean;
  iconKind: ServiceIconKind;
  title: string;
  summary: string;
  specialistTag: string;
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
    pill: string;
    titleLead: string;
    titleAccent: string;
    portraitTitle: string;
    portraitSubtitle: string;
    quote: string;
    quoteAuthor: string;
    statNumber: string;
    statCaption: string;
    trustHeading: string;
    description: string;
    ctaLabel: string;
    tickerItems: string[];
  };
  servicesSection: {
    pill: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    filterFeatured: string;
    filterFacialSurgery: string;
    filterHarmonization: string;
    filterBodySurgery: string;
    filterAll: string;
    cardActionLabel: string;
    prevLabel: string;
    nextLabel: string;
    pageDotPrefix: string;
    items: ExcellenceServiceItem[];
  };
  storySection: {
    pill: string;
    titleLead: string;
    titleAccent: string;
    openingMotto: string;
    paragraphs: string[];
    bulletsIntro: string;
    bullets: string[];
    personalQuote: string;
    quoteSignature: string;
    ctaLabel: string;
    counters: { value: string; label: string }[];
    portraitTitle: string;
    portraitSubtitle: string;
    ribbonText: string;
  };
  whySection: {
    pill: string;
    titleLead: string;
    titleAccent: string;
    items: WhyGabrielaItem[];
  };
  reviewsSection: {
    pill: string;
    title: string;
    subtitle: string;
    starAriaLabel: string;
    reviews: PatientReviewItem[];
  };
  bookingSection: {
    pill: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    addressLabel: string;
    addressValue: string;
    whatsappLabel: string;
    modalityInfoLabel: string;
    modalityInfoValue: string;
    stepsTitle: string;
    steps: { title: string; detail: string }[];
    formTitle: string;
    formSubtitle: string;
    modalityLegend: string;
    modalityInPerson: string;
    modalityVirtual: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    dateLabel: string;
    procedureLabel: string;
    procedurePlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
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
          badgeTag: "Dra. Gabriela Delgado",
          badgeText: "Cirujana Maxilofacial · +18 años de experiencia",
          title:
            "Armonización facial y cirugía estética que realzan tu belleza sin perder tu esencia",
          cardDescription:
            "Más de 18 años acompañándote con rigor anatómico, preparación internacional y calidez humana en Arequipa.",
          ctaLabel: "Reservar valoración",
          ctaTarget: "booking",
          portraitTitle: "Retrato o video principal en gris (4:5)",
          portraitSubtitle: "Dra. Gabriela Delgado Silva · Marca Personal",
          isVideo: true,
        },
        {
          id: "hero-clinica",
          badgeTag: "Clínica Multiestética",
          badgeText: "Rostro, piel y cirugía estética corporal en Arequipa",
          title:
            "Ciencia médica y acompañamiento cercano para una transformación segura y natural",
          cardDescription:
            "Liderada por la Dra. Gabriela Delgado junto a un equipo de médicos especialistas en Urb. León XIII K-8, Cayma.",
          ctaLabel: "Explorar servicios",
          ctaTarget: "services",
          portraitTitle: "Fotografía editorial en gris (4:5)",
          portraitSubtitle: "Dra. Gabriela Delgado en consulta personalizada",
        },
      ],
    },
    specialization: {
      pill: "Dra. Gabriela Delgado Silva",
      titleLead: "Atención médica especializada en ",
      titleAccent: "armonización facial y cirugía maxilofacial",
      portraitTitle: "Retrato editorial en gris (4:3): Dra. Gabriela Delgado Silva",
      portraitSubtitle: "Cercanía, escucha activa y precisión anatómica facial",
      quote:
        "«Mi mayor satisfacción no es solamente ver una transformación física, sino saber que detrás de ella hay una persona que vuelve a sonreír, recupera su seguridad y se siente feliz consigo misma.»",
      quoteAuthor: "Dra. Gabriela Delgado Silva",
      statNumber: "18+",
      statCaption: "Años de experiencia profesional",
      trustHeading:
        "Referente en armonización facial y directora de Clínica Multiestética en Arequipa",
      description:
        "Para la Dra. Gabriela Delgado, la belleza no consiste en parecerte a alguien más, sino en sentirte cómoda y segura con quien eres. Cada valoración une criterio quirúrgico maxilofacial, insumos certificados y el respaldo de médicos especialistas en Clínica Multiestética.",
      ctaLabel: "Solicitar cita con la Dra. Gabriela",
      tickerItems: [
        "Armonización Facial",
        "Cirugía Maxilofacial",
        "Perfilamiento Mandibular",
        "Blefaroplastia y Lifting",
        "Bioestimulación de Colágeno",
        "Cirugía Estética Corporal",
      ],
    },
    servicesSection: {
      pill: "Servicios de Excelencia",
      titleLead: "Procedimientos diseñados con ",
      titleAccent: "precisión y armonía natural",
      subtitle:
        "Explora las especialidades lideradas por la Dra. Gabriela Delgado y la unidad quirúrgica de Clínica Multiestética.",
      filterFeatured: "Principales (8)",
      filterFacialSurgery: "Cirugía facial (5)",
      filterHarmonization: "Armonización y piel (6)",
      filterBodySurgery: "Cirugía corporal (5)",
      filterAll: "Todos (16)",
      cardActionLabel: "Solicitar valoración",
      prevLabel: "Ver servicios anteriores",
      nextLabel: "Ver siguientes servicios",
      pageDotPrefix: "Grupo de servicios",
      items: [
        {
          slug: "acido-hialuronico",
          category: "armonizacion-facial-piel",
          featured: true,
          iconKind: "harmony",
          title: "Ácido hialurónico",
          summary:
            "Soporte sutil y proporcionado en labios, pómulos, mentón y ojeras respetando tus gestos naturales.",
          specialistTag: "Dra. Gabriela Delgado",
          photoRevealLabel: "Foto gris · Hialurónico",
        },
        {
          slug: "lipopapada-marcacion-mandibular",
          category: "cirugia-perfilamiento-facial",
          featured: true,
          iconKind: "maxillofacial",
          title: "Liposucción de papada y marcación mandibular",
          summary:
            "Define el contorno del cuello y proyecta un ángulo mandibular limpio con criterio maxilofacial.",
          specialistTag: "Dra. Gabriela Delgado",
          photoRevealLabel: "Foto gris · Mandibular",
        },
        {
          slug: "toxina-botulinica",
          category: "armonizacion-facial-piel",
          featured: true,
          iconKind: "harmony",
          title: "Toxina botulínica",
          summary:
            "Suaviza líneas dinámicas de expresión conservando una mirada descansada, fresca y natural.",
          specialistTag: "Dra. Gabriela Delgado",
          photoRevealLabel: "Foto gris · Toxina",
        },
        {
          slug: "blefaroplastia",
          category: "cirugia-perfilamiento-facial",
          featured: true,
          iconKind: "maxillofacial",
          title: "Blefaroplastia superior e inferior",
          summary:
            "Rejuvenece tu mirada corrigiendo exceso de piel y bolsas palpebrales con recuperación acompañada.",
          specialistTag: "Dra. Gabriela Delgado",
          photoRevealLabel: "Foto gris · Mirada",
        },
        {
          slug: "bioestimulador-colageno",
          category: "armonizacion-facial-piel",
          featured: true,
          iconKind: "collagen",
          title: "Bioestimulador de colágeno",
          summary:
            "Activa la producción natural de colágeno para devolver firmeza, densidad y luminosidad a tu piel.",
          specialistTag: "Dra. Gabriela Delgado",
          photoRevealLabel: "Foto gris · Colágeno",
        },
        {
          slug: "lifting-facial",
          category: "cirugia-perfilamiento-facial",
          featured: true,
          iconKind: "maxillofacial",
          title: "Lifting facial",
          summary:
            "Reposiciona tejidos profundos de rostro y cuello logrando un rejuvenecimiento armónico y duradero.",
          specialistTag: "Unidad Facial",
          photoRevealLabel: "Foto gris · Lifting",
        },
        {
          slug: "bichectomia",
          category: "cirugia-perfilamiento-facial",
          featured: true,
          iconKind: "maxillofacial",
          title: "Bichectomía",
          summary:
            "Estiliza el tercio medio facial mediante valoración anatómica responsable de las bolsas de Bichat.",
          specialistTag: "Dra. Gabriela Delgado",
          photoRevealLabel: "Foto gris · Bichectomía",
        },
        {
          slug: "liposuccion-360",
          category: "cirugia-estetica-corporal",
          featured: true,
          iconKind: "body",
          title: "Liposucción 360",
          summary:
            "Remodelación integral de cintura, abdomen y espalda a cargo del staff quirúrgico de Clínica Multiestética.",
          specialistTag: "Staff Cirugía Corporal",
          photoRevealLabel: "Foto gris · Lipo 360",
        },
        {
          slug: "afinamiento-facial",
          category: "cirugia-perfilamiento-facial",
          featured: false,
          iconKind: "maxillofacial",
          title: "Afinamiento facial",
          summary:
            "Equilibra las proporciones del rostro integrando técnicas personalizadas según tu estructura ósea.",
          specialistTag: "Dra. Gabriela Delgado",
          photoRevealLabel: "Foto gris · Afinamiento",
        },
        {
          slug: "reduccion-con-enzimas",
          category: "armonizacion-facial-piel",
          featured: false,
          iconKind: "collagen",
          title: "Tratamientos de reducción con enzimas",
          summary:
            "Enzimas recombinantes específicas para atenuar grasa localizada, flacidez leve y fibrosis.",
          specialistTag: "Dra. Gabriela Delgado",
          photoRevealLabel: "Foto gris · Enzimas",
        },
        {
          slug: "tratamientos-de-piel",
          category: "armonizacion-facial-piel",
          featured: false,
          iconKind: "collagen",
          title: "Tratamientos de piel",
          summary:
            "Protocolos médicos de hidratación profunda, textura uniforme y revitalización dérmica.",
          specialistTag: "Dra. Gabriela Delgado",
          photoRevealLabel: "Foto gris · Piel",
        },
        {
          slug: "retiro-de-cicatrices",
          category: "armonizacion-facial-piel",
          featured: false,
          iconKind: "collagen",
          title: "Retiro de cicatrices",
          summary:
            "Manejo clínico progresivo de cicatrices faciales o corporales con técnicas regenerativas combinadas.",
          specialistTag: "Unidad Regenerativa",
          photoRevealLabel: "Foto gris · Cicatrices",
        },
        {
          slug: "lipotransferencia",
          category: "cirugia-estetica-corporal",
          featured: false,
          iconKind: "body",
          title: "Lipotransferencia",
          summary:
            "Restaura proyección y armonía corporal empleando tejido graso autólogo purificado con seguridad.",
          specialistTag: "Staff Cirugía Corporal",
          photoRevealLabel: "Foto gris · Lipotransfer",
        },
        {
          slug: "implantes-de-mamas",
          category: "cirugia-estetica-corporal",
          featured: false,
          iconKind: "body",
          title: "Implantes de mamas",
          summary:
            "Aumento mamario planificado según tu complexión torácica, proporción corporal y bienestar.",
          specialistTag: "Staff Cirugía Corporal",
          photoRevealLabel: "Foto gris · Mamas",
        },
        {
          slug: "ginecomastia",
          category: "cirugia-estetica-corporal",
          featured: false,
          iconKind: "body",
          title: "Ginecomastia",
          summary:
            "Definición quirúrgica del contorno pectoral masculino con seguimiento médico personalizado.",
          specialistTag: "Staff Cirugía Corporal",
          photoRevealLabel: "Foto gris · Pectoral",
        },
        {
          slug: "abdominoplastia",
          category: "cirugia-estetica-corporal",
          featured: false,
          iconKind: "body",
          title: "Abdominoplastias",
          summary:
            "Recupera la firmeza de la pared abdominal y retira el exceso de piel con rigor quirúrgico.",
          specialistTag: "Staff Cirugía Corporal",
          photoRevealLabel: "Foto gris · Abdomen",
        },
      ],
    },
    storySection: {
      pill: "+18 años · Cirujana · Especialista · Madre",
      titleLead: "Doctora ",
      titleAccent: "Gabriela Delgado Silva",
      openingMotto:
        "Nacimos de un sueño. Crecimos con valentía. Existimos para transformar vidas.",
      paragraphs: [
        "Soy la Dra. Gabriela Delgado Silva, cirujana maxilofacial y especialista en armonización facial con más de 18 años de experiencia profesional. A lo largo de mi carrera he unido preparación académica constante a nivel internacional con una convicción clara: ayudarte a sentirte segura, cómoda y feliz con tu propia imagen.",
        "Después de atravesar una etapa de profundos cambios personales, decidí reinventarme y construir un camino propio impulsada por mis tres hijos, mi mayor motor para seguir estudiando y fundar Clínica Multiestética junto a un equipo de médicos especialistas que comparten esta vocación humana.",
      ],
      bulletsIntro: "Cómo resumir mi vocación y camino profesional:",
      bullets: [
        "+18 años de trayectoria profesional en cirugía maxilofacial y armonización facial.",
        "Actualización médica internacional continua en técnicas seguras y resultados naturales.",
        "Valoraciones honestas y personalizadas donde escuchamos tu historia sin prisas.",
        "Dirección médica de Clínica Multiestética junto a cirujanos y especialistas acreditados.",
        "Acompañamiento cercano antes, durante y después de cada procedimiento en Arequipa.",
      ],
      personalQuote:
        "«Nunca permitas que una etapa difícil defina tu futuro. Siempre puedes volver a empezar, prepararte, crecer y construir algo extraordinario.»",
      quoteSignature: "Dra. Gabriela Delgado Silva · Fundadora de Clínica Multiestética",
      ctaLabel: "Agendar valoración personal",
      counters: [
        { value: "+18", label: "Años de experiencia profesional" },
        { value: "16", label: "Procedimientos especializados" },
      ],
      portraitTitle: "Retrato vertical en gris (3:4): Dra. Gabriela Delgado Silva",
      portraitSubtitle: "Historia real de valentía, ciencia médica y sensibilidad humana",
      ribbonText:
        "Donde la belleza encuentra su propósito y cada historia merece una nueva oportunidad · Urb. León XIII K-8, Cayma, Arequipa",
    },
    whySection: {
      pill: "¿Por qué la Dra. Gabriela Delgado?",
      titleLead: "Mucho más que estética: ",
      titleAccent: "experiencia, naturalidad y compromiso humano",
      items: [
        {
          id: "why-internacional",
          iconKind: "globe",
          title: "Preparación internacional continua",
          description:
            "Más de 18 años perfeccionando protocolos de cirugía maxilofacial y armonización facial con estándares médicos actuales.",
        },
        {
          id: "why-naturalidad",
          iconKind: "harmony",
          title: "Resultados armónicos con tu esencia",
          description:
            "Cada plan respeta tus facciones y proporciones reales para lograr frescura y equilibrio sin exageraciones.",
        },
        {
          id: "why-empatia",
          iconKind: "heart",
          title: "Calidez, cariño y empatía real",
          description:
            "Te hablamos con cercanía y claridad desde la primera consulta para que vivas tu proceso con total tranquilidad.",
        },
        {
          id: "why-respaldo",
          iconKind: "shield",
          title: "Respaldo de Clínica Multiestética",
          description:
            "Trabajo articulado con médicos especialistas acreditados para cuidar tu seguridad en rostro, piel y contorno corporal.",
        },
      ],
    },
    reviewsSection: {
      pill: "Pacientes",
      title: "¿Qué piensan nuestros pacientes?",
      subtitle:
        "Seis espacios preparados para integrar reseñas verificadas de pacientes reales atendidos por la Dra. Gabriela Delgado y Clínica Multiestética.",
      starAriaLabel: "Calificación de 5 estrellas",
      reviews: [
        {
          id: "rev-1",
          patientLabel: "Espacio reseña verificada 1",
          procedureName: "Armonización facial con ácido hialurónico",
          quote:
            "Espacio reservado para testimonio real destacando la escucha cercana de la Dra. Gabriela Delgado, la delicadeza en consulta y la naturalidad del resultado facial.",
          avatarPlaceholder: "Avatar 1",
        },
        {
          id: "rev-2",
          patientLabel: "Espacio reseña verificada 2",
          procedureName: "Lipopapada y marcación mandibular",
          quote:
            "Espacio reservado para testimonio real sobre la precisión anatómica del perfilamiento mandibular y el seguimiento atento durante cada control postoperatorio.",
          avatarPlaceholder: "Avatar 2",
        },
        {
          id: "rev-3",
          patientLabel: "Espacio reseña verificada 3",
          procedureName: "Blefaroplastia superior e inferior",
          quote:
            "Espacio reservado para testimonio real acerca de recuperar una mirada descansada con una explicación médica clara y total confianza en el equipo.",
          avatarPlaceholder: "Avatar 3",
        },
        {
          id: "rev-4",
          patientLabel: "Espacio reseña verificada 4",
          procedureName: "Bioestimulador de colágeno y piel",
          quote:
            "Espacio reservado para testimonio real valorando la mejora progresiva en firmeza y calidad de piel sin alterar las facciones propias.",
          avatarPlaceholder: "Avatar 4",
        },
        {
          id: "rev-5",
          patientLabel: "Espacio reseña verificada 5",
          procedureName: "Bichectomía y afinamiento facial",
          quote:
            "Espacio reservado para testimonio real resaltando el ambiente cálido de la sede en Cayma y la honestidad profesional durante la evaluación previa.",
          avatarPlaceholder: "Avatar 5",
        },
        {
          id: "rev-6",
          patientLabel: "Espacio reseña verificada 6",
          procedureName: "Cirugía estética corporal · Clínica Multiestética",
          quote:
            "Espacio reservado para testimonio real sobre el acompañamiento integral del staff quirúrgico de Clínica Multiestética antes, durante y después de la cirugía.",
          avatarPlaceholder: "Avatar 6",
        },
      ],
    },
    bookingSection: {
      pill: "Agenda tu valoración",
      titleLead: "Reserva tu cita desde ",
      titleAccent: "nuestra web de forma simple",
      subtitle:
        "Déjanos tus datos y el procedimiento de tu interés. Nuestro equipo coordinará contigo el horario ideal junto a la Dra. Gabriela Delgado en Arequipa.",
      addressLabel: "Consultorio en Arequipa",
      addressValue: "Urb. León XIII K-8, Cayma, Arequipa, Perú",
      whatsappLabel: "Atención directa WhatsApp",
      modalityInfoLabel: "Idiomas y atención",
      modalityInfoValue: "Previa cita personalizada (Español e Inglés)",
      stepsTitle: "¿Cómo coordinamos tu cita?",
      steps: [
        {
          title: "Envía tu solicitud web",
          detail: "Indica el tratamiento de interés y tu fecha tentativa preferida.",
        },
        {
          title: "Confirmación personalizada",
          detail: "Te contactamos para confirmar disponibilidad presencial o virtual.",
        },
        {
          title: "Valoración con la Dra. Gabriela",
          detail: "Evaluamos tu caso con honestidad médica y plan a tu medida.",
        },
      ],
      formTitle: "Formulario de reserva de cita",
      formSubtitle:
        "Completa tus datos para registrar tu solicitud de valoración médica.",
      modalityLegend: "Modalidad de valoración",
      modalityInPerson: "Presencial en Arequipa",
      modalityVirtual: "Orientación virtual previa",
      nameLabel: "Nombre y apellidos",
      namePlaceholder: "Ej. Valeria Paredes",
      phoneLabel: "WhatsApp o celular",
      phonePlaceholder: "Ej. +51 958 000 000",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "Ej. valeria@correo.com",
      dateLabel: "Fecha preferida (opcional)",
      procedureLabel: "Servicio o especialidad de interés",
      procedurePlaceholder: "Selecciona o escribe un procedimiento",
      notesLabel: "Cuéntanos brevemente tu objetivo (opcional)",
      notesPlaceholder: "Ej. Deseo información sobre armonización facial natural",
      privacyLabel:
        "Acepto el tratamiento de mis datos personales conforme a la Ley N° 29733 para coordinar mi cita médica.",
      privacyError:
        "Por favor acepta la política de privacidad (Ley N° 29733) para registrar tu cita.",
      submitBtn: "Reservar cita de valoración",
      successTitle: "¡Solicitud lista para confirmar!",
      successBody:
        "Hemos preparado los datos de tu cita con la Dra. Gabriela Delgado. Si deseas atención prioritaria inmediata, envíala también ahora mismo a nuestro WhatsApp oficial.",
      whatsappConfirmBtn: "Confirmar ahora por WhatsApp",
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
      title: "Orientación rápida por WhatsApp",
      description:
        "Completa estos datos breves y abriremos WhatsApp con tu consulta lista para atenderte.",
      nameLabel: "Tu nombre",
      namePlaceholder: "Ej. Andrea Rojas",
      ageLabel: "Edad (+18)",
      agePlaceholder: "Ej. 30",
      procedureLabel: "Procedimiento de interés",
      procedurePlaceholder: "Ej. Armonización facial",
      privacyAccept:
        "Acepto la política de privacidad (Ley N° 29733) para recibir orientación médica.",
      privacyError: "Debes aceptar la política de privacidad para continuar.",
      submitBtn: "Continuar a WhatsApp",
      footnote:
        "Tus datos se emplean únicamente para coordinar tu valoración médica personalizada.",
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
          badgeTag: "Dr. Gabriela Delgado",
          badgeText: "Maxillofacial Surgeon · +18 years of experience",
          title:
            "Facial harmonization and aesthetic surgery that enhance your natural essence",
          cardDescription:
            "Over 18 years guiding patients with anatomical precision, international training, and warm care in Arequipa.",
          ctaLabel: "Book consultation",
          ctaTarget: "booking",
          portraitTitle: "Grey hero portrait or video placeholder (4:5)",
          portraitSubtitle: "Dr. Gabriela Delgado Silva · Personal Brand",
          isVideo: true,
        },
        {
          id: "hero-clinica",
          badgeTag: "Clínica Multiestética",
          badgeText: "Face, skin & aesthetic body surgery in Arequipa",
          title:
            "Medical excellence and compassionate care for safe, balanced transformations",
          cardDescription:
            "Led by Dr. Gabriela Delgado alongside accredited specialist physicians in Cayma, Arequipa.",
          ctaLabel: "Explore services",
          ctaTarget: "services",
          portraitTitle: "Grey editorial portrait placeholder (4:5)",
          portraitSubtitle: "Dr. Gabriela Delgado in personalized consultation",
        },
      ],
    },
    specialization: {
      pill: "Dr. Gabriela Delgado Silva",
      titleLead: "Specialized medical care in ",
      titleAccent: "facial harmonization and maxillofacial surgery",
      portraitTitle: "Grey editorial portrait (4:3): Dr. Gabriela Delgado Silva",
      portraitSubtitle: "Warmth, active listening, and facial anatomical precision",
      quote:
        "“My greatest satisfaction is not only seeing a physical transformation, but knowing that behind it is a person who smiles again, regains confidence, and feels happy with themselves.”",
      quoteAuthor: "Dr. Gabriela Delgado Silva",
      statNumber: "18+",
      statCaption: "Years of professional experience",
      trustHeading:
        "Leading specialist in facial harmonization and medical director of Clínica Multiestética",
      description:
        "For Dr. Gabriela Delgado, true beauty is never about looking like someone else, it is about feeling comfortable and confident in who you are. Every consultation combines maxillofacial expertise, certified products, and the multidisciplinary backing of Clínica Multiestética.",
      ctaLabel: "Book with Dr. Gabriela",
      tickerItems: [
        "Facial Harmonization",
        "Maxillofacial Surgery",
        "Jawline Contouring",
        "Blepharoplasty & Facelift",
        "Collagen Biostimulators",
        "Aesthetic Body Surgery",
      ],
    },
    servicesSection: {
      pill: "Services of Excellence",
      titleLead: "Procedures crafted with ",
      titleAccent: "precision and natural harmony",
      subtitle:
        "Explore treatments led by Dr. Gabriela Delgado and the specialist surgical unit at Clínica Multiestética.",
      filterFeatured: "Featured (8)",
      filterFacialSurgery: "Facial surgery (5)",
      filterHarmonization: "Harmonization & skin (6)",
      filterBodySurgery: "Body surgery (5)",
      filterAll: "All (16)",
      cardActionLabel: "Request consultation",
      prevLabel: "Previous services",
      nextLabel: "Next services",
      pageDotPrefix: "Service group",
      items: [
        {
          slug: "acido-hialuronico",
          category: "armonizacion-facial-piel",
          featured: true,
          iconKind: "harmony",
          title: "Hyaluronic acid fillers",
          summary:
            "Subtle, balanced structural support for lips, cheekbones, chin, and under-eye hollows.",
          specialistTag: "Dr. Gabriela Delgado",
          photoRevealLabel: "Grey photo · Hyaluronic",
        },
        {
          slug: "lipopapada-marcacion-mandibular",
          category: "cirugia-perfilamiento-facial",
          featured: true,
          iconKind: "maxillofacial",
          title: "Chin liposuction & jawline contouring",
          summary:
            "Refines submental fullness and defines a clean mandibular contour with maxillofacial precision.",
          specialistTag: "Dr. Gabriela Delgado",
          photoRevealLabel: "Grey photo · Jawline",
        },
        {
          slug: "toxina-botulinica",
          category: "armonizacion-facial-piel",
          featured: true,
          iconKind: "harmony",
          title: "Botulinum toxin",
          summary:
            "Softens dynamic expression lines while keeping your gaze rested, fresh, and expressive.",
          specialistTag: "Dr. Gabriela Delgado",
          photoRevealLabel: "Grey photo · Toxin",
        },
        {
          slug: "blefaroplastia",
          category: "cirugia-perfilamiento-facial",
          featured: true,
          iconKind: "maxillofacial",
          title: "Upper & lower blepharoplasty",
          summary:
            "Refreshes your eyes by addressing excess eyelid skin and under-eye bags safely.",
          specialistTag: "Dr. Gabriela Delgado",
          photoRevealLabel: "Grey photo · Eyelids",
        },
        {
          slug: "bioestimulador-colageno",
          category: "armonizacion-facial-piel",
          featured: true,
          iconKind: "collagen",
          title: "Collagen biostimulators",
          summary:
            "Stimulates your own collagen production to restore skin firmness, density, and glow.",
          specialistTag: "Dr. Gabriela Delgado",
          photoRevealLabel: "Grey photo · Collagen",
        },
        {
          slug: "lifting-facial",
          category: "cirugia-perfilamiento-facial",
          featured: true,
          iconKind: "maxillofacial",
          title: "Facelift surgery",
          summary:
            "Repositions deep facial and neck tissues for long-lasting, natural rejuvenation.",
          specialistTag: "Facial Unit",
          photoRevealLabel: "Grey photo · Facelift",
        },
        {
          slug: "bichectomia",
          category: "cirugia-perfilamiento-facial",
          featured: true,
          iconKind: "maxillofacial",
          title: "Buccal fat removal (Bichectomy)",
          summary:
            "Contours mid-face definition through responsible anatomical facial evaluation.",
          specialistTag: "Dr. Gabriela Delgado",
          photoRevealLabel: "Grey photo · Bichectomy",
        },
        {
          slug: "liposuccion-360",
          category: "cirugia-estetica-corporal",
          featured: true,
          iconKind: "body",
          title: "360 liposuction",
          summary:
            "Comprehensive waist, abdomen, and back sculpting performed by our specialist surgical team.",
          specialistTag: "Body Surgery Team",
          photoRevealLabel: "Grey photo · 360 Lipo",
        },
        {
          slug: "afinamiento-facial",
          category: "cirugia-perfilamiento-facial",
          featured: false,
          iconKind: "maxillofacial",
          title: "Facial slimming",
          summary:
            "Harmonizes mid and lower facial proportions tailored to your bone anatomy.",
          specialistTag: "Dr. Gabriela Delgado",
          photoRevealLabel: "Grey photo · Slimming",
        },
        {
          slug: "reduccion-con-enzimas",
          category: "armonizacion-facial-piel",
          featured: false,
          iconKind: "collagen",
          title: "Recombinant enzyme reduction",
          summary:
            "Targeted enzymatic protocols for localized fullness, mild laxity, and post-op fibrosis.",
          specialistTag: "Dr. Gabriela Delgado",
          photoRevealLabel: "Grey photo · Enzymes",
        },
        {
          slug: "tratamientos-de-piel",
          category: "armonizacion-facial-piel",
          featured: false,
          iconKind: "collagen",
          title: "Advanced skin treatments",
          summary:
            "Personalized medical protocols for deep hydration, even tone, and skin vitality.",
          specialistTag: "Dr. Gabriela Delgado",
          photoRevealLabel: "Grey photo · Skin",
        },
        {
          slug: "retiro-de-cicatrices",
          category: "armonizacion-facial-piel",
          featured: false,
          iconKind: "collagen",
          title: "Scar revision & removal",
          summary:
            "Progressive clinical improvement of facial or body scars using combined regenerative care.",
          specialistTag: "Regenerative Unit",
          photoRevealLabel: "Grey photo · Scars",
        },
        {
          slug: "lipotransferencia",
          category: "cirugia-estetica-corporal",
          featured: false,
          iconKind: "body",
          title: "Fat transfer (Lipotransfer)",
          summary:
            "Restores natural body contour and volume using purified autologous tissue.",
          specialistTag: "Body Surgery Team",
          photoRevealLabel: "Grey photo · Fat transfer",
        },
        {
          slug: "implantes-de-mamas",
          category: "cirugia-estetica-corporal",
          featured: false,
          iconKind: "body",
          title: "Breast augmentation implants",
          summary:
            "Customized breast enhancement planned around your frame, safety, and harmony.",
          specialistTag: "Body Surgery Team",
          photoRevealLabel: "Grey photo · Implants",
        },
        {
          slug: "ginecomastia",
          category: "cirugia-estetica-corporal",
          featured: false,
          iconKind: "body",
          title: "Gynecomastia surgery",
          summary:
            "Surgical refinement of the male chest contour with attentive recovery follow-up.",
          specialistTag: "Body Surgery Team",
          photoRevealLabel: "Grey photo · Chest",
        },
        {
          slug: "abdominoplastia",
          category: "cirugia-estetica-corporal",
          featured: false,
          iconKind: "body",
          title: "Abdominoplasty",
          summary:
            "Restores abdominal wall firmness and removes excess skin with specialist surgical care.",
          specialistTag: "Body Surgery Team",
          photoRevealLabel: "Grey photo · Abdomen",
        },
      ],
    },
    storySection: {
      pill: "+18 years · Surgeon · Specialist · Mother",
      titleLead: "Doctor ",
      titleAccent: "Gabriela Delgado Silva",
      openingMotto:
        "Born from a dream. Grown with courage. Dedicated to transforming lives.",
      paragraphs: [
        "I am Dr. Gabriela Delgado Silva, a maxillofacial surgeon and facial harmonization specialist with over 18 years of professional experience. Throughout my career I have combined continuous international training with a clear purpose: helping you feel confident, comfortable, and happy in your own skin.",
        "After navigating a season of major personal change, my three children inspired me to reinvent myself, keep advancing academically, and build Clínica Multiestética alongside specialist physicians who share this compassionate philosophy.",
      ],
      bulletsIntro: "Key pillars of my medical journey:",
      bullets: [
        "+18 years of professional experience in maxillofacial surgery and facial harmonization.",
        "Ongoing international training in safe, natural-looking aesthetic techniques.",
        "Honest, unhurried consultations centered on your unique anatomy and goals.",
        "Medical director of Clínica Multiestética working alongside accredited specialists.",
        "Close, empathetic follow-up before, during, and after every procedure in Arequipa.",
      ],
      personalQuote:
        "“Never let a difficult chapter define your future. You can always start again, prepare yourself, grow, and build something extraordinary.”",
      quoteSignature: "Dr. Gabriela Delgado Silva · Founder of Clínica Multiestética",
      ctaLabel: "Schedule a personal consultation",
      counters: [
        { value: "+18", label: "Years of professional experience" },
        { value: "16", label: "Specialized procedures" },
      ],
      portraitTitle: "Grey vertical portrait (3:4): Dr. Gabriela Delgado Silva",
      portraitSubtitle: "Authentic story of resilience, clinical rigor, and warmth",
      ribbonText:
        "Where beauty finds its purpose and every story deserves a fresh opportunity · Urb. León XIII K-8, Cayma, Arequipa",
    },
    whySection: {
      pill: "Why Dr. Gabriela Delgado?",
      titleLead: "More than aesthetics: ",
      titleAccent: "experience, natural harmony, and human warmth",
      items: [
        {
          id: "why-internacional",
          iconKind: "globe",
          title: "Continuous international training",
          description:
            "Over 18 years refining maxillofacial and facial harmonization protocols under modern clinical standards.",
        },
        {
          id: "why-naturalidad",
          iconKind: "harmony",
          title: "Natural results true to you",
          description:
            "Every treatment plan respects your facial proportions and expressions without artificial excess.",
        },
        {
          id: "why-empatia",
          iconKind: "heart",
          title: "Genuine warmth and empathy",
          description:
            "Unhurried, compassionate communication from your first visit through full recovery.",
        },
        {
          id: "why-respaldo",
          iconKind: "shield",
          title: "Backed by Clínica Multiestética",
          description:
            "Coordinated care with accredited specialist physicians across face, skin, and body procedures.",
        },
      ],
    },
    reviewsSection: {
      pill: "Patients",
      title: "What do our patients think?",
      subtitle:
        "Six dedicated slots prepared for verified real patient testimonials from Dr. Gabriela Delgado and Clínica Multiestética.",
      starAriaLabel: "5 out of 5 stars",
      reviews: [
        {
          id: "rev-1",
          patientLabel: "Verified review slot 1",
          procedureName: "Hyaluronic acid facial harmonization",
          quote:
            "Reserved space for a verified patient review highlighting Dr. Gabriela Delgado’s attentive listening, gentle technique, and natural facial balance.",
          avatarPlaceholder: "Avatar 1",
        },
        {
          id: "rev-2",
          patientLabel: "Verified review slot 2",
          procedureName: "Chin lipo & jawline contouring",
          quote:
            "Reserved space for a verified patient review describing precise mandibular definition and supportive post-procedure follow-up.",
          avatarPlaceholder: "Avatar 2",
        },
        {
          id: "rev-3",
          patientLabel: "Verified review slot 3",
          procedureName: "Upper & lower blepharoplasty",
          quote:
            "Reserved space for a verified patient review on achieving a rested gaze with transparent medical guidance at every step.",
          avatarPlaceholder: "Avatar 3",
        },
        {
          id: "rev-4",
          patientLabel: "Verified review slot 4",
          procedureName: "Collagen biostimulator & skin care",
          quote:
            "Reserved space for a verified patient review sharing progressive firmness and radiant skin quality while keeping natural expressions.",
          avatarPlaceholder: "Avatar 4",
        },
        {
          id: "rev-5",
          patientLabel: "Verified review slot 5",
          procedureName: "Bichectomy & facial slimming",
          quote:
            "Reserved space for a verified patient review praising the welcoming Cayma clinic environment and honest anatomical assessment.",
          avatarPlaceholder: "Avatar 5",
        },
        {
          id: "rev-6",
          patientLabel: "Verified review slot 6",
          procedureName: "Body contouring · Clínica Multiestética",
          quote:
            "Reserved space for a verified patient review on the surgical team’s safety protocols and attentive recovery care in Arequipa.",
          avatarPlaceholder: "Avatar 6",
        },
      ],
    },
    bookingSection: {
      pill: "Book your visit",
      titleLead: "Schedule your consultation ",
      titleAccent: "online with ease",
      subtitle:
        "Share your contact details and treatment of interest. Our team will coordinate your appointment time with Dr. Gabriela Delgado in Arequipa.",
      addressLabel: "Arequipa Clinic Address",
      addressValue: "Urb. León XIII K-8, Cayma, Arequipa, Peru",
      whatsappLabel: "Direct WhatsApp desk",
      modalityInfoLabel: "Languages & care",
      modalityInfoValue: "By appointment in Spanish & English",
      stepsTitle: "How your booking works",
      steps: [
        {
          title: "Submit your web request",
          detail: "Choose your procedure of interest and preferred tentative date.",
        },
        {
          title: "Personalized confirmation",
          detail: "Our team contacts you to confirm in-person or virtual availability.",
        },
        {
          title: "Assessment with Dr. Gabriela",
          detail: "Receive an honest medical evaluation and tailored care plan.",
        },
      ],
      formTitle: "Appointment booking form",
      formSubtitle:
        "Complete the fields below to request your personalized medical consultation.",
      modalityLegend: "Consultation modality",
      modalityInPerson: "In-person in Arequipa",
      modalityVirtual: "Initial virtual guidance",
      nameLabel: "Full name",
      namePlaceholder: "e.g. Valeria Paredes",
      phoneLabel: "WhatsApp or mobile phone",
      phonePlaceholder: "e.g. +51 958 000 000",
      emailLabel: "Email address",
      emailPlaceholder: "e.g. valeria@email.com",
      dateLabel: "Preferred date (optional)",
      procedureLabel: "Service or specialty of interest",
      procedurePlaceholder: "Select or type a procedure",
      notesLabel: "Briefly share your goals (optional)",
      notesPlaceholder: "e.g. Interested in natural facial harmonization",
      privacyLabel:
        "I accept the processing of my personal data under Peruvian Law N° 29733 to coordinate my medical appointment.",
      privacyError: "Please accept the data privacy policy (Law N° 29733) to submit.",
      submitBtn: "Book consultation appointment",
      successTitle: "Appointment request ready!",
      successBody:
        "We have prepared your consultation request for Dr. Gabriela Delgado. For immediate priority scheduling, you can also send it directly to our official WhatsApp now.",
      whatsappConfirmBtn: "Confirm via WhatsApp now",
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
      title: "Quick WhatsApp guidance",
      description:
        "Fill in these brief details and continue directly on WhatsApp with your message ready.",
      nameLabel: "Your name",
      namePlaceholder: "e.g. Andrea Rojas",
      ageLabel: "Age (+18)",
      agePlaceholder: "e.g. 30",
      procedureLabel: "Procedure of interest",
      procedurePlaceholder: "e.g. Facial harmonization",
      privacyAccept:
        "I accept the privacy policy (Law N° 29733) to receive personalized guidance.",
      privacyError: "Please accept the privacy policy to continue.",
      submitBtn: "Continue to WhatsApp",
      footnote:
        "Your information is used strictly to coordinate your medical consultation.",
    },
  },
};
