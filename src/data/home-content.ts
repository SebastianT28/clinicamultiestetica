import type { Locale, ServiceCategorySlug } from "@/config/site";

export interface FeaturedCaseItem {
  id: string;
  procedureTitle: string;
  techniqueLabel: string;
  beforePlaceholder: string;
  afterPlaceholder: string;
  summary: string;
}

export interface ShowcaseSlideItem {
  id: string;
  pill: string;
  title: string;
  subtitle: string;
  placeholderLabel: string;
  procedureQuery: string;
}

export interface DetailedProcedureCard {
  slug: string;
  category: ServiceCategorySlug;
  title: string;
  summary: string;
  specialistTag: string;
  placeholderLabel: string;
}

export interface MedicalStaffMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  focus: string;
  placeholderLabel: string;
}

export interface PatientReviewSlot {
  id: string;
  patientLabel: string;
  procedureName: string;
  quote: string;
  avatarPlaceholder: string;
}

export interface HomeFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface HomeDictionary {
  nav: {
    cases: string;
    procedures: string;
    clinic: string;
    reviews: string;
    faq: string;
    bookCta: string;
    menuLabel: string;
    closeMenuLabel: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    mediaTitle: string;
    mediaSubtitle: string;
    metrics: { value: string; label: string }[];
  };
  featuredCases: {
    title: string;
    subtitle: string;
    beforeBadge: string;
    afterBadge: string;
    tapHint: string;
    seeChangeBtn: string;
    seeBeforeBtn: string;
    wantThisBtn: string;
    whatsappFastNote: string;
    ethicalDisclaimer: string;
    items: FeaturedCaseItem[];
  };
  philosophyBanner: {
    title: string;
    subtitle: string;
    cta: string;
    mediaTitle: string;
    mediaSubtitle: string;
  };
  showcaseCarousel: {
    title: string;
    subtitle: string;
    prevLabel: string;
    nextLabel: string;
    slideLabelPrefix: string;
    slides: ShowcaseSlideItem[];
  };
  proceduresCatalog: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterFacialSurgery: string;
    filterHarmonization: string;
    filterBodySurgery: string;
    consultBtn: string;
    items: DetailedProcedureCard[];
  };
  aboutAndTeam: {
    title: string;
    subtitle: string;
    openingMotto: string;
    storyParagraphs: string[];
    founderQuote: string;
    founderSignature: string;
    founderPhotoTitle: string;
    founderPhotoSubtitle: string;
    differentialsTitle: string;
    differentials: { title: string; detail: string }[];
    staffTitle: string;
    staffSubtitle: string;
    staff: MedicalStaffMember[];
  };
  testimonialsAndVideo: {
    title: string;
    subtitle: string;
    reviews: PatientReviewSlot[];
    videoSectionTitle: string;
    videoSectionSubtitle: string;
    desktopVideoTitle: string;
    desktopVideoSubtitle: string;
    mobileVideoTitle: string;
    mobileVideoSubtitle: string;
  };
  faqSection: {
    title: string;
    subtitle: string;
    helperCardTitle: string;
    helperCardBody: string;
    helperCardCta: string;
    items: HomeFaqItem[];
  };
  locationSection: {
    title: string;
    subtitle: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    scheduleLabel: string;
    scheduleValue: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneInputLabel: string;
    phonePlaceholder: string;
    procedureLabel: string;
    procedurePlaceholder: string;
    privacyLabel: string;
    submitBtn: string;
    submittedNotice: string;
    mapTitle: string;
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
    submitBtn: string;
    footnote: string;
  };
}

export const HOME_CONTENT: Record<Locale, HomeDictionary> = {
  es: {
    nav: {
      cases: "Casos reales",
      procedures: "Procedimientos",
      clinic: "Nosotros",
      reviews: "Pacientes",
      faq: "Preguntas",
      bookCta: "Agendar valoración",
      menuLabel: "Abrir menú principal",
      closeMenuLabel: "Cerrar menú principal",
    },
    hero: {
      title: "Cirugía estética y armonización facial en Arequipa",
      subtitle:
        "La Dra. Gabriela Delgado Silva te acompaña con calidez hacia resultados armónicos y naturales.",
      primaryCta: "Agendar valoración",
      secondaryCta: "Ver procedimientos",
      mediaTitle: "Espacio para video o retrato principal (4:5)",
      mediaSubtitle: "Dra. Gabriela Delgado Silva en Clínica Multiestética",
      metrics: [
        { value: "+18 años", label: "Experiencia médica" },
        { value: "16", label: "Procedimientos" },
        { value: "COP / CMP", label: "Staff acreditado" },
      ],
    },
    featuredCases: {
      title: "Transformaciones destacadas",
      subtitle:
        "Toca cada recuadro para alternar entre el estado previo y el resultado clínico armónico.",
      beforeBadge: "Antes",
      afterBadge: "Después",
      tapHint: "Toca para ver el después",
      seeChangeBtn: "Ver el cambio",
      seeBeforeBtn: "Ver el antes",
      wantThisBtn: "Quiero este cambio",
      whatsappFastNote: "Atención directa por WhatsApp para tu valoración personalizada",
      ethicalDisclaimer:
        "Espacios reservados para fotografías clínicas autorizadas. Cada resultado depende de la anatomía y valoración médica individual.",
      items: [
        {
          id: "caso-armonizacion",
          procedureTitle: "Armonización facial integral",
          techniqueLabel: "Ácido hialurónico y bioestimuladores",
          beforePlaceholder: "Imagen gris (Antes): Armonización facial",
          afterPlaceholder: "Imagen gris (Después): Equilibrio de tercios faciales",
          summary: "Reposición sutil de soporte facial conservando tus gestos naturales.",
        },
        {
          id: "caso-mandibular",
          procedureTitle: "Lipopapada y marcación mandibular",
          techniqueLabel: "Perfilamiento cérvico-mandibular",
          beforePlaceholder: "Imagen gris (Antes): Contorno submentoniano",
          afterPlaceholder: "Imagen gris (Después): Definición de ángulo mandibular",
          summary: "Definición limpia del cuello y línea mandibular con recuperación guiada.",
        },
        {
          id: "caso-corporal",
          procedureTitle: "Liposucción 360 y contorno corporal",
          techniqueLabel: "Unidad de cirugía estética corporal",
          beforePlaceholder: "Imagen gris (Antes): Evaluación corporal integral",
          afterPlaceholder: "Imagen gris (Después): Armonía de silueta 360",
          summary: "Remodelación corporal armónica realizada por cirujanos especialistas.",
        },
      ],
    },
    philosophyBanner: {
      title: "Belleza que respeta tu propia esencia",
      subtitle:
        "No buscamos que te parezcas a alguien más, sino que te sientas segura, escuchada y cómoda con tu propia imagen.",
      cta: "Conocer nuestra historia",
      mediaTitle: "Banner panorámico en gris (Imagen o video ambiental)",
      mediaSubtitle: "Detalle de consulta médica y armonía facial natural",
    },
    showcaseCarousel: {
      title: "Unidades médicas especializadas",
      subtitle:
        "Ciencia, innovación tecnológica y acompañamiento humano en rostro, piel y contorno corporal.",
      prevLabel: "Unidad anterior",
      nextLabel: "Siguiente unidad",
      slideLabelPrefix: "Ir a la unidad",
      slides: [
        {
          id: "slide-armonizacion",
          pill: "Dra. Gabriela Delgado",
          title: "Armonización facial personalizada",
          subtitle: "Ácido hialurónico, toxina botulínica y proporción anatómica natural.",
          placeholderLabel: "Recuadro gris 16:9 / 4:5: Unidad de Armonización Facial",
          procedureQuery: "Armonización facial personalizada",
        },
        {
          id: "slide-maxilofacial",
          pill: "Cirugía facial",
          title: "Perfilamiento maxilofacial y mirada",
          subtitle: "Lifting facial, blefaroplastia, bichectomía y definición mandibular.",
          placeholderLabel: "Recuadro gris 16:9 / 4:5: Unidad de Cirugía y Perfilamiento Facial",
          procedureQuery: "Cirugía y perfilamiento facial",
        },
        {
          id: "slide-regenerativa",
          pill: "Calidad de piel",
          title: "Bioestimulación de colágeno y enzimas",
          subtitle: "Firmeza progresiva, reducción enzimática y manejo médico de cicatrices.",
          placeholderLabel: "Recuadro gris 16:9 / 4:5: Bioestimuladores y Calidad de Piel",
          procedureQuery: "Bioestimulador de colágeno y piel",
        },
        {
          id: "slide-corporal",
          pill: "Staff quirúrgico",
          title: "Cirugía estética corporal segura",
          subtitle: "Liposucción 360, lipotransferencia, implantes mamarios y abdominoplastia.",
          placeholderLabel: "Recuadro gris 16:9 / 4:5: Unidad de Cirugía Estética Corporal",
          procedureQuery: "Cirugía estética corporal",
        },
      ],
    },
    proceduresCatalog: {
      title: "Nuestros 16 procedimientos médicos",
      subtitle:
        "Selecciona un área para explorar cada tratamiento y solicitar orientación directa.",
      filterAll: "Todos (16)",
      filterFacialSurgery: "Cirugía facial (5)",
      filterHarmonization: "Armonización y piel (6)",
      filterBodySurgery: "Cirugía corporal (5)",
      consultBtn: "Consultar valoración",
      items: [
        {
          slug: "lifting-facial",
          category: "cirugia-perfilamiento-facial",
          title: "Lifting facial",
          summary: "Reposiciona tejidos profundos del rostro y cuello con apariencia fresca y descansada.",
          specialistTag: "Unidad Facial",
          placeholderLabel: "Imagen gris (16:10): Lifting facial",
        },
        {
          slug: "blefaroplastia",
          category: "cirugia-perfilamiento-facial",
          title: "Blefaroplastia superior e inferior",
          summary: "Rejuvenece tu mirada corrigiendo exceso de piel y bolsas palpebrales con precisión.",
          specialistTag: "Unidad Facial",
          placeholderLabel: "Imagen gris (16:10): Blefaroplastia",
        },
        {
          slug: "afinamiento-facial",
          category: "cirugia-perfilamiento-facial",
          title: "Afinamiento facial",
          summary: "Estiliza los contornos del tercio medio e inferior según tu estructura ósea.",
          specialistTag: "Dra. Gabriela Delgado",
          placeholderLabel: "Imagen gris (16:10): Afinamiento facial",
        },
        {
          slug: "lipopapada-marcacion-mandibular",
          category: "cirugia-perfilamiento-facial",
          title: "Liposucción de papada y marcación mandibular",
          summary: "Elimina grasa submentoniana y proyecta un borde mandibular limpio y armónico.",
          specialistTag: "Dra. Gabriela Delgado",
          placeholderLabel: "Imagen gris (16:10): Lipopapada y mandíbula",
        },
        {
          slug: "bichectomia",
          category: "cirugia-perfilamiento-facial",
          title: "Bichectomía",
          summary: "Resección selectiva de bolsas de Bichat mediante evaluación anatómica responsable.",
          specialistTag: "Dra. Gabriela Delgado",
          placeholderLabel: "Imagen gris (16:10): Bichectomía",
        },
        {
          slug: "toxina-botulinica",
          category: "armonizacion-facial-piel",
          title: "Toxina botulínica",
          summary: "Suaviza líneas dinámicas de expresión manteniendo la naturalidad de tu mirada.",
          specialistTag: "Dra. Gabriela Delgado",
          placeholderLabel: "Imagen gris (16:10): Toxina botulínica",
        },
        {
          slug: "acido-hialuronico",
          category: "armonizacion-facial-piel",
          title: "Ácido hialurónico",
          summary: "Armoniza labios, pómulos, mentón y ojeras con soporte sutil y proporcionado.",
          specialistTag: "Dra. Gabriela Delgado",
          placeholderLabel: "Imagen gris (16:10): Ácido hialurónico",
        },
        {
          slug: "bioestimulador-colageno",
          category: "armonizacion-facial-piel",
          title: "Bioestimulador de colágeno",
          summary: "Activa tu propio colágeno para recuperar firmeza, densidad y luminosidad dérmica.",
          specialistTag: "Dra. Gabriela Delgado",
          placeholderLabel: "Imagen gris (16:10): Bioestimulador de colágeno",
        },
        {
          slug: "reduccion-con-enzimas",
          category: "armonizacion-facial-piel",
          title: "Tratamientos de reducción con enzimas",
          summary: "Enzimas recombinantes específicas para grasa localizada, flacidez y fibrosis.",
          specialistTag: "Armonización Facial",
          placeholderLabel: "Imagen gris (16:10): Reducción con enzimas",
        },
        {
          slug: "tratamientos-de-piel",
          category: "armonizacion-facial-piel",
          title: "Tratamientos de piel",
          summary: "Protocolos médicos personalizados para hidratación profunda, textura y manchas.",
          specialistTag: "Cuidado Dérmico",
          placeholderLabel: "Imagen gris (16:10): Tratamientos de piel",
        },
        {
          slug: "retiro-de-cicatrices",
          category: "armonizacion-facial-piel",
          title: "Retiro de cicatrices",
          summary: "Mejora clínica progresiva de cicatrices faciales o corporales con técnicas combinadas.",
          specialistTag: "Unidad Regenerativa",
          placeholderLabel: "Imagen gris (16:10): Retiro de cicatrices",
        },
        {
          slug: "liposuccion-360",
          category: "cirugia-estetica-corporal",
          title: "Liposucción 360",
          summary: "Esculpido integral de cintura, abdomen y espalda con enfoque en proporciones reales.",
          specialistTag: "Cirugía Corporal",
          placeholderLabel: "Imagen gris (16:10): Liposucción 360",
        },
        {
          slug: "lipotransferencia",
          category: "cirugia-estetica-corporal",
          title: "Lipotransferencia",
          summary: "Aprovecha tejido graso propio purificado para restaurar volumen corporal con suavidad.",
          specialistTag: "Cirugía Corporal",
          placeholderLabel: "Imagen gris (16:10): Lipotransferencia",
        },
        {
          slug: "implantes-de-mamas",
          category: "cirugia-estetica-corporal",
          title: "Implantes de mamas",
          summary: "Aumento mamario planificado según tu complexión torácica, seguridad y armonía.",
          specialistTag: "Cirugía Corporal",
          placeholderLabel: "Imagen gris (16:10): Implantes de mamas",
        },
        {
          slug: "ginecomastia",
          category: "cirugia-estetica-corporal",
          title: "Ginecomastia",
          summary: "Corrección quirúrgica del contorno pectoral masculino con recuperación acompañada.",
          specialistTag: "Cirugía Corporal",
          placeholderLabel: "Imagen gris (16:10): Ginecomastia",
        },
        {
          slug: "abdominoplastia",
          category: "cirugia-estetica-corporal",
          title: "Abdominoplastias",
          summary: "Reconstruye la firmeza de la pared abdominal y retira el exceso de piel con seguridad.",
          specialistTag: "Cirugía Corporal",
          placeholderLabel: "Imagen gris (16:10): Abdominoplastia",
        },
      ],
    },
    aboutAndTeam: {
      title: "Una clínica nacida de la valentía y la vocación médica",
      subtitle:
        "Nacimos de un sueño. Crecimos con valentía. Existimos para transformar vidas en Arequipa y el sur del Perú.",
      openingMotto:
        "Donde la belleza encuentra su propósito y cada historia merece una nueva oportunidad.",
      storyParagraphs: [
        "La Dra. Gabriela Delgado Silva, cirujana maxilofacial y especialista en armonización facial con +18 años de experiencia profesional y constante preparación internacional, fundó Clínica Multiestética con la convicción de unir ciencia, naturalidad y sensibilidad humana.",
        "Después de atravesar una etapa de grandes cambios personales, sus tres hijos impulsaron su decisión de construir un espacio propio donde cada paciente se sienta escuchado, comprendido y seguro junto a un equipo de médicos especialistas.",
      ],
      founderQuote:
        "«Mi mayor satisfacción no es solamente ver una transformación física, sino saber que detrás de ella hay una persona que vuelve a sonreír, recupera su seguridad y se siente feliz consigo misma».",
      founderSignature: "Dra. Gabriela Delgado Silva, Fundadora y Directora Médica",
      founderPhotoTitle: "Retrato en gris (4:5): Dra. Gabriela Delgado Silva",
      founderPhotoSubtitle: "Fotografía editorial en consultorio de Clínica Multiestética",
      differentialsTitle: "Tres pilares que cuidan tu proceso:",
      differentials: [
        {
          title: "Compromiso real contigo",
          detail: "Valoración honesta y seguimiento personalizado antes, durante y después de tu procedimiento.",
        },
        {
          title: "Preparación internacional",
          detail: "+18 años de trayectoria continua aplicando técnicas médicas actualizadas y seguras.",
        },
        {
          title: "Calidez y empatía humana",
          detail: "Escuchamos tu historia sin prisas para diseñar cambios que fortalezcan tu confianza.",
        },
      ],
      staffTitle: "Dirección médica y equipo de especialistas",
      staffSubtitle:
        "Respaldo colegiado transparente para cada área facial, estética y quirúrgica corporal.",
      staff: [
        {
          id: "staff-gabriela",
          name: "Dra. Gabriela Delgado Silva",
          role: "Fundadora · Cirujana Maxilofacial y Armonización Facial",
          credentials: "COP / RNE · +18 años de experiencia",
          focus: "Perfilamiento mandibular, bichectomía, inyectables y armonía facial integral.",
          placeholderLabel: "Foto en gris (1:1): Dra. Gabriela Delgado Silva",
        },
        {
          id: "staff-corporal",
          name: "Staff de Cirugía Plástica Corporal",
          role: "Médico Especialista en Cirugía Plástica y Reconstructiva",
          credentials: "CMP / RNE acreditado (espacio para registro)",
          focus: "Liposucción 360, lipotransferencia, implantes mamarios, abdominoplastia y ginecomastia.",
          placeholderLabel: "Foto en gris (1:1): Cirujano Plástico Especialista",
        },
        {
          id: "staff-anestesia",
          name: "Unidad Médica y Seguridad Quirúrgica",
          role: "Evaluación Preoperatoria, Piel y Acompañamiento",
          credentials: "CMP / RNE acreditado (espacio para registro)",
          focus: "Seguridad en sala, control postoperatorio y tratamientos regenerativos de piel.",
          placeholderLabel: "Foto en gris (1:1): Especialista de Unidad Médica",
        },
      ],
    },
    testimonialsAndVideo: {
      title: "¿Qué valoran nuestros pacientes?",
      subtitle:
        "Espacios preparados para integrar reseñas verificadas de pacientes reales en Google Maps.",
      reviews: [
        {
          id: "rev-1",
          patientLabel: "Espacio reseña verificada 1",
          procedureName: "Armonización facial",
          quote:
            "Espacio reservado para testimonio real de paciente sobre la empatía en consulta, explicación detallada del tratamiento y naturalidad del resultado junto a la Dra. Gabriela Delgado.",
          avatarPlaceholder: "Avatar gris",
        },
        {
          id: "rev-2",
          patientLabel: "Espacio reseña verificada 2",
          procedureName: "Perfilamiento mandibular",
          quote:
            "Espacio reservado para testimonio real destacando la seguridad clínica, el acompañamiento cercano durante la recuperación y la calidez de todo el equipo en Arequipa.",
          avatarPlaceholder: "Avatar gris",
        },
        {
          id: "rev-3",
          patientLabel: "Espacio reseña verificada 3",
          procedureName: "Cirugía corporal",
          quote:
            "Espacio reservado para testimonio real de paciente sobre la valoración honesta con el staff quirúrgico y el seguimiento postoperatorio personalizado.",
          avatarPlaceholder: "Avatar gris",
        },
      ],
      videoSectionTitle: "Conoce la experiencia por dentro",
      videoSectionSubtitle:
        "Formato horizontal 16:9 en escritorio y formato vertical 9:16 adaptado automáticamente en celular.",
      desktopVideoTitle: "Video horizontal en gris (16:9) · Recorrido y entrevista médica",
      desktopVideoSubtitle: "Dra. Gabriela Delgado explicando su filosofía de armonía natural",
      mobileVideoTitle: "Video vertical en gris (9:16) · Reel para versión móvil",
      mobileVideoSubtitle: "Bienvenida cercana de la Dra. Gabriela Delgado (formato 390px)",
    },
    faqSection: {
      title: "Preguntas frecuentes antes de tu valoración",
      subtitle: "Resolvemos con claridad las dudas más habituales antes de agendar tu cita.",
      helperCardTitle: "¿Prefieres conversar directamente con nosotros?",
      helperCardBody:
        "Escríbenos por WhatsApp y nuestro equipo te orientará sobre disponibilidad de citas con la Dra. Gabriela Delgado y especialistas.",
      helperCardCta: "Hablar por WhatsApp",
      items: [
        {
          id: "faq-1",
          question: "¿Cómo es la primera cita de valoración médica?",
          answer:
            "Escuchamos tus expectativas, evaluamos tu anatomía facial o corporal de forma integral y te explicamos con honestidad qué procedimiento se adapta mejor a ti, tiempos de recuperación y presupuesto detallado.",
        },
        {
          id: "faq-2",
          question: "¿Quién realiza los procedimientos faciales y las cirugías corporales?",
          answer:
            "Los tratamientos de armonización facial y cirugía maxilofacial son liderados por la Dra. Gabriela Delgado Silva (+18 años de experiencia), mientras que las cirugías plásticas corporales están a cargo del staff de cirujanos plásticos especialistas acreditados de Clínica Multiestética.",
        },
        {
          id: "faq-3",
          question: "¿Los resultados de armonización facial se ven naturales?",
          answer:
            "Sí. Nuestra filosofía parte de respetar tu esencia y facciones propias, aplicando dosis precisas e insumos médicos certificados para lograr frescura y proporción sin excesos.",
        },
        {
          id: "faq-4",
          question: "¿Atienden a pacientes de otras ciudades del sur del Perú o del extranjero?",
          answer:
            "Sí. Coordinamos orientaciones previas y organizamos tu agenda de valoración y controles en Arequipa (en español o inglés) para pacientes de Cusco, Tacna, Puno, Moquegua y visitas internacionales.",
        },
        {
          id: "faq-5",
          question: "¿Dónde se encuentra ubicada Clínica Multiestética en Arequipa?",
          answer:
            "Te esperamos previa cita en Urb. León XIII K-8, distrito de Cayma, Arequipa, una zona tranquila, segura y de fácil acceso.",
        },
        {
          id: "faq-6",
          question: "¿Qué edad mínima se requiere para realizar un procedimiento?",
          answer:
            "Todos nuestros procedimientos estéticos y quirúrgicos están dirigidos a pacientes mayores de 18 años previa evaluación médica presencial.",
        },
      ],
    },
    locationSection: {
      title: "Tu valoración personalizada en Arequipa",
      subtitle:
        "Visítanos en nuestra sede de Cayma o déjanos tus datos para coordinar tu cita por WhatsApp.",
      addressLabel: "Dirección en Arequipa",
      addressValue: "Urb. León XIII K-8, Cayma, Arequipa, Perú",
      phoneLabel: "WhatsApp oficial",
      scheduleLabel: "Modalidad de atención",
      scheduleValue: "Atención personalizada previa cita (Español e Inglés)",
      formTitle: "Solicita tu cita de valoración",
      formSubtitle: "Completa estos tres campos y continúa con tu mensaje listo en WhatsApp.",
      nameLabel: "Tu nombre completo",
      namePlaceholder: "Ej. Valeria Paredes",
      phoneInputLabel: "Tu número de celular o WhatsApp",
      phonePlaceholder: "Ej. 958 000 000",
      procedureLabel: "Procedimiento de interés",
      procedurePlaceholder: "Ej. Armonización facial o Blefaroplastia",
      privacyLabel:
        "Acepto el tratamiento de mis datos personales conforme a la Ley N° 29733 para coordinar mi atención médica.",
      submitBtn: "Agendar cita por WhatsApp",
      submittedNotice: "Abriendo WhatsApp con tu solicitud personalizada lista.",
      mapTitle: "Mapa de ubicación de Clínica Multiestética en Urb. León XIII K-8, Cayma, Arequipa",
    },
    footer: {
      tagline: "Donde la belleza encuentra su propósito y cada historia merece una nueva oportunidad.",
      schedule: "Atención previa cita en Cayma, Arequipa",
      exploreHeading: "Explora",
      specialtiesHeading: "Especialidades",
      patientCareHeading: "Atención al paciente",
      claimsBook: "Libro de Reclamaciones Virtual",
      privacyPolicy: "Política de privacidad (Ley N° 29733)",
      termsConditions: "Términos y condiciones",
      valuationTerms: "Criterios de valoración médica",
      copyright:
        "© 2026 Clínica Multiestética y Dra. Gabriela Delgado Silva. Todos los derechos reservados.",
    },
    waModal: {
      fabAriaLabel: "Agendar valoración por WhatsApp",
      title: "Agenda por WhatsApp",
      description: "Déjanos tus datos y te llevamos a WhatsApp con el mensaje listo para atenderte.",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      ageLabel: "Edad (+18)",
      agePlaceholder: "Ej. 32",
      procedureLabel: "Procedimiento de interés",
      procedurePlaceholder: "Ej. Armonización facial",
      privacyAccept: "Acepto la política de privacidad (Ley N° 29733) para recibir orientación.",
      submitBtn: "Continuar a WhatsApp",
      footnote: "Tus datos se utilizan únicamente para brindarte orientación médica personalizada.",
    },
  },
  en: {
    nav: {
      cases: "Real cases",
      procedures: "Procedures",
      clinic: "About us",
      reviews: "Patients",
      faq: "FAQ",
      bookCta: "Book consultation",
      menuLabel: "Open main menu",
      closeMenuLabel: "Close main menu",
    },
    hero: {
      title: "Aesthetic surgery and facial harmonization in Arequipa",
      subtitle:
        "Dr. Gabriela Delgado Silva guides you with warmth toward balanced, natural results.",
      primaryCta: "Book consultation",
      secondaryCta: "Explore procedures",
      mediaTitle: "Grey media placeholder for hero video or portrait (4:5)",
      mediaSubtitle: "Dr. Gabriela Delgado Silva at Clínica Multiestética",
      metrics: [
        { value: "+18 yrs", label: "Medical experience" },
        { value: "16", label: "Procedures" },
        { value: "COP / CMP", label: "Accredited staff" },
      ],
    },
    featuredCases: {
      title: "Featured transformations",
      subtitle: "Tap each frame to toggle between the baseline state and the balanced clinical outcome.",
      beforeBadge: "Before",
      afterBadge: "After",
      tapHint: "Tap to view after",
      seeChangeBtn: "See the change",
      seeBeforeBtn: "See before",
      wantThisBtn: "Request this treatment",
      whatsappFastNote: "Direct WhatsApp assistance for your personalized consultation",
      ethicalDisclaimer:
        "Placeholder frames reserved for authorized clinical photography. Outcomes vary according to individual anatomy and medical evaluation.",
      items: [
        {
          id: "caso-armonizacion",
          procedureTitle: "Full facial harmonization",
          techniqueLabel: "Hyaluronic acid and biostimulators",
          beforePlaceholder: "Grey frame (Before): Facial harmonization",
          afterPlaceholder: "Grey frame (After): Balanced facial proportions",
          summary: "Subtle structural support preserving your natural expressions.",
        },
        {
          id: "caso-mandibular",
          procedureTitle: "Chin liposuction and jawline contouring",
          techniqueLabel: "Lower-face sculpting",
          beforePlaceholder: "Grey frame (Before): Submental contour",
          afterPlaceholder: "Grey frame (After): Defined jawline contour",
          summary: "Refined neck and mandibular contour with guided recovery.",
        },
        {
          id: "caso-corporal",
          procedureTitle: "360 liposuction and body contouring",
          techniqueLabel: "Body plastic surgery unit",
          beforePlaceholder: "Grey frame (Before): Full body assessment",
          afterPlaceholder: "Grey frame (After): Balanced 360 silhouette",
          summary: "Harmonious body sculpting performed by specialist plastic surgeons.",
        },
      ],
    },
    philosophyBanner: {
      title: "Beauty that honors who you truly are",
      subtitle:
        "We never aim to make you look like someone else, we help you feel confident, heard, and comfortable in your own skin.",
      cta: "Read our story",
      mediaTitle: "Grey panoramic banner placeholder (Ambient image or video)",
      mediaSubtitle: "Medical consultation and natural facial harmony",
    },
    showcaseCarousel: {
      title: "Specialized medical units",
      subtitle: "Clinical science, modern technology, and compassionate care for face, skin, and body.",
      prevLabel: "Previous unit",
      nextLabel: "Next unit",
      slideLabelPrefix: "Go to unit",
      slides: [
        {
          id: "slide-armonizacion",
          pill: "Dr. Gabriela Delgado",
          title: "Bespoke facial harmonization",
          subtitle: "Hyaluronic acid, botulinum toxin, and natural anatomical balance.",
          placeholderLabel: "Grey frame 16:9 / 4:5: Facial Harmonization Unit",
          procedureQuery: "Facial harmonization",
        },
        {
          id: "slide-maxilofacial",
          pill: "Facial surgery",
          title: "Maxillofacial and eye rejuvenation",
          subtitle: "Facelift, blepharoplasty, buccal fat removal, and jawline definition.",
          placeholderLabel: "Grey frame 16:9 / 4:5: Facial & Maxillofacial Surgery Unit",
          procedureQuery: "Facial surgery",
        },
        {
          id: "slide-regenerativa",
          pill: "Skin quality",
          title: "Collagen biostimulators and enzymes",
          subtitle: "Progressive firmness, recombinant enzymes, and clinical scar care.",
          placeholderLabel: "Grey frame 16:9 / 4:5: Biostimulators & Skin Quality",
          procedureQuery: "Collagen biostimulators",
        },
        {
          id: "slide-corporal",
          pill: "Surgical team",
          title: "Safe aesthetic body surgery",
          subtitle: "360 liposuction, fat transfer, breast implants, and abdominoplasty.",
          placeholderLabel: "Grey frame 16:9 / 4:5: Aesthetic Body Surgery Unit",
          procedureQuery: "Body contouring surgery",
        },
      ],
    },
    proceduresCatalog: {
      title: "Our 16 medical procedures",
      subtitle: "Filter by specialty area to explore each procedure and request guidance.",
      filterAll: "All (16)",
      filterFacialSurgery: "Facial surgery (5)",
      filterHarmonization: "Harmonization & skin (6)",
      filterBodySurgery: "Body surgery (5)",
      consultBtn: "Inquire now",
      items: [
        {
          slug: "lifting-facial",
          category: "cirugia-perfilamiento-facial",
          title: "Facelift surgery",
          summary: "Repositions deep facial and neck tissues for a rested, natural appearance.",
          specialistTag: "Facial Unit",
          placeholderLabel: "Grey image (16:10): Facelift surgery",
        },
        {
          slug: "blefaroplastia",
          category: "cirugia-perfilamiento-facial",
          title: "Upper and lower blepharoplasty",
          summary: "Refreshes your gaze by addressing excess eyelid skin and under-eye bags.",
          specialistTag: "Facial Unit",
          placeholderLabel: "Grey image (16:10): Blepharoplasty",
        },
        {
          slug: "afinamiento-facial",
          category: "cirugia-perfilamiento-facial",
          title: "Facial slimming",
          summary: "Refines mid and lower facial contours tailored to your bone structure.",
          specialistTag: "Dr. Gabriela Delgado",
          placeholderLabel: "Grey image (16:10): Facial slimming",
        },
        {
          slug: "lipopapada-marcacion-mandibular",
          category: "cirugia-perfilamiento-facial",
          title: "Chin liposuction and jawline contouring",
          summary: "Removes submental fullness and defines a clean, balanced jawline.",
          specialistTag: "Dr. Gabriela Delgado",
          placeholderLabel: "Grey image (16:10): Chin & jawline contouring",
        },
        {
          slug: "bichectomia",
          category: "cirugia-perfilamiento-facial",
          title: "Buccal fat removal (Bichectomy)",
          summary: "Selective buccal fat refinement guided by responsible anatomical assessment.",
          specialistTag: "Dr. Gabriela Delgado",
          placeholderLabel: "Grey image (16:10): Bichectomy",
        },
        {
          slug: "toxina-botulinica",
          category: "armonizacion-facial-piel",
          title: "Botulinum toxin",
          summary: "Softens dynamic expression lines while keeping natural facial movement.",
          specialistTag: "Dr. Gabriela Delgado",
          placeholderLabel: "Grey image (16:10): Botulinum toxin",
        },
        {
          slug: "acido-hialuronico",
          category: "armonizacion-facial-piel",
          title: "Hyaluronic acid fillers",
          summary: "Balances lips, cheekbones, chin, and tear troughs with subtle support.",
          specialistTag: "Dr. Gabriela Delgado",
          placeholderLabel: "Grey image (16:10): Hyaluronic acid",
        },
        {
          slug: "bioestimulador-colageno",
          category: "armonizacion-facial-piel",
          title: "Collagen biostimulators",
          summary: "Stimulates natural collagen production for firmer, radiant skin.",
          specialistTag: "Dr. Gabriela Delgado",
          placeholderLabel: "Grey image (16:10): Collagen biostimulators",
        },
        {
          slug: "reduccion-con-enzimas",
          category: "armonizacion-facial-piel",
          title: "Recombinant enzyme treatments",
          summary: "Targeted enzymatic protocols for localized fullness, laxity, and fibrosis.",
          specialistTag: "Facial Harmonization",
          placeholderLabel: "Grey image (16:10): Enzyme reduction",
        },
        {
          slug: "tratamientos-de-piel",
          category: "armonizacion-facial-piel",
          title: "Skin quality treatments",
          summary: "Customized medical protocols for deep hydration, texture, and tone.",
          specialistTag: "Dermal Care",
          placeholderLabel: "Grey image (16:10): Skin quality treatments",
        },
        {
          slug: "retiro-de-cicatrices",
          category: "armonizacion-facial-piel",
          title: "Scar revision and treatment",
          summary: "Progressive clinical improvement of facial or body scars.",
          specialistTag: "Regenerative Unit",
          placeholderLabel: "Grey image (16:10): Scar revision",
        },
        {
          slug: "liposuccion-360",
          category: "cirugia-estetica-corporal",
          title: "360 liposuction",
          summary: "Comprehensive waist, abdomen, and back sculpting focused on natural harmony.",
          specialistTag: "Body Surgery",
          placeholderLabel: "Grey image (16:10): 360 liposuction",
        },
        {
          slug: "lipotransferencia",
          category: "cirugia-estetica-corporal",
          title: "Fat transfer (Lipotransfer)",
          summary: "Uses purified autologous fat to restore natural body contour.",
          specialistTag: "Body Surgery",
          placeholderLabel: "Grey image (16:10): Fat transfer",
        },
        {
          slug: "implantes-de-mamas",
          category: "cirugia-estetica-corporal",
          title: "Breast augmentation implants",
          summary: "Breast enhancement planned around your chest proportions and safety.",
          specialistTag: "Body Surgery",
          placeholderLabel: "Grey image (16:10): Breast implants",
        },
        {
          slug: "ginecomastia",
          category: "cirugia-estetica-corporal",
          title: "Gynecomastia surgery",
          summary: "Surgical male chest contour refinement with attentive follow-up.",
          specialistTag: "Body Surgery",
          placeholderLabel: "Grey image (16:10): Gynecomastia",
        },
        {
          slug: "abdominoplastia",
          category: "cirugia-estetica-corporal",
          title: "Abdominoplasty (Tummy tuck)",
          summary: "Restores abdominal wall firmness and removes excess skin safely.",
          specialistTag: "Body Surgery",
          placeholderLabel: "Grey image (16:10): Abdominoplasty",
        },
      ],
    },
    aboutAndTeam: {
      title: "A clinic born from courage and medical vocation",
      subtitle:
        "Born from a dream. Grown with courage. Dedicated to transforming lives in Arequipa and southern Peru.",
      openingMotto:
        "Where beauty finds its purpose and every story deserves a new opportunity.",
      storyParagraphs: [
        "Dr. Gabriela Delgado Silva, maxillofacial surgeon and facial harmonization specialist with +18 years of professional experience and ongoing international training, founded Clínica Multiestética to unite medical rigor, natural balance, and human warmth.",
        "After navigating major life changes, her three children inspired her to build a welcoming space where every patient feels heard, understood, and safe alongside a team of specialist physicians.",
      ],
      founderQuote:
        "“My greatest satisfaction is not only seeing a physical transformation, it is knowing that behind it stands a person who smiles again, regains confidence, and feels happy in their own skin.”",
      founderSignature: "Dr. Gabriela Delgado Silva, Founder and Medical Director",
      founderPhotoTitle: "Grey portrait (4:5): Dr. Gabriela Delgado Silva",
      founderPhotoSubtitle: "Editorial portrait at Clínica Multiestética",
      differentialsTitle: "Three pillars guiding your care:",
      differentials: [
        {
          title: "Genuine personal commitment",
          detail: "Honest assessment and close follow-up before, during, and after your procedure.",
        },
        {
          title: "International training",
          detail: "+18 years of continuous clinical practice with modern, evidence-based protocols.",
        },
        {
          title: "Warmth and human empathy",
          detail: "We listen carefully to your story to plan subtle enhancements that strengthen confidence.",
        },
      ],
      staffTitle: "Medical leadership and specialist staff",
      staffSubtitle: "Transparent board credentials across facial, aesthetic, and body surgical units.",
      staff: [
        {
          id: "staff-gabriela",
          name: "Dr. Gabriela Delgado Silva",
          role: "Founder · Maxillofacial Surgeon & Facial Harmonization",
          credentials: "COP / RNE · +18 years experience",
          focus: "Jawline contouring, bichectomy, injectables, and comprehensive facial harmony.",
          placeholderLabel: "Grey photo (1:1): Dr. Gabriela Delgado Silva",
        },
        {
          id: "staff-corporal",
          name: "Body Plastic Surgery Staff",
          role: "Board-Certified Plastic and Reconstructive Surgeon",
          credentials: "Accredited CMP / RNE (license slot)",
          focus: "360 liposuction, fat transfer, breast implants, abdominoplasty, and gynecomastia.",
          placeholderLabel: "Grey photo (1:1): Specialist Plastic Surgeon",
        },
        {
          id: "staff-anestesia",
          name: "Surgical Safety & Skin Care Unit",
          role: "Pre-operative Evaluation, Skin Quality & Recovery",
          credentials: "Accredited CMP / RNE (license slot)",
          focus: "Operating room safety, post-procedure recovery, and regenerative skin protocols.",
          placeholderLabel: "Grey photo (1:1): Medical Unit Specialist",
        },
      ],
    },
    testimonialsAndVideo: {
      title: "What our patients value most",
      subtitle: "Dedicated slots ready for verified patient reviews from Google Maps.",
      reviews: [
        {
          id: "rev-1",
          patientLabel: "Verified review slot 1",
          procedureName: "Facial harmonization",
          quote:
            "Reserved space for a verified patient review highlighting empathetic consultation, clear clinical guidance, and natural-looking harmony with Dr. Gabriela Delgado.",
          avatarPlaceholder: "Grey avatar",
        },
        {
          id: "rev-2",
          patientLabel: "Verified review slot 2",
          procedureName: "Jawline contouring",
          quote:
            "Reserved space for a verified patient review highlighting medical safety, attentive recovery follow-up, and the warm atmosphere in Arequipa.",
          avatarPlaceholder: "Grey avatar",
        },
        {
          id: "rev-3",
          patientLabel: "Verified review slot 3",
          procedureName: "Body contouring",
          quote:
            "Reserved space for a verified patient review highlighting honest surgical assessment and personalized post-operative support.",
          avatarPlaceholder: "Grey avatar",
        },
      ],
      videoSectionTitle: "Inside the patient experience",
      videoSectionSubtitle:
        "16:9 widescreen player on desktop and automatic 9:16 vertical reel format on mobile.",
      desktopVideoTitle: "Grey widescreen video (16:9) · Clinic tour and medical interview",
      desktopVideoSubtitle: "Dr. Gabriela Delgado sharing her natural harmony philosophy",
      mobileVideoTitle: "Grey vertical video (9:16) · Mobile patient reel",
      mobileVideoSubtitle: "Warm welcome from Dr. Gabriela Delgado (390px mobile format)",
    },
    faqSection: {
      title: "Frequently asked questions",
      subtitle: "Clear answers to the most common questions before scheduling your consultation.",
      helperCardTitle: "Prefer to speak directly with our team?",
      helperCardBody:
        "Message us on WhatsApp and we will guide you on appointment availability with Dr. Gabriela Delgado and our specialists.",
      helperCardCta: "Chat on WhatsApp",
      items: [
        {
          id: "faq-1",
          question: "What happens during the initial medical consultation?",
          answer:
            "We listen to your goals, perform a comprehensive facial or body assessment, and explain honestly which treatment suits your anatomy, recovery timeline, and personalized plan.",
        },
        {
          id: "faq-2",
          question: "Who performs facial procedures versus body plastic surgeries?",
          answer:
            "Facial harmonization and maxillofacial procedures are led by Dr. Gabriela Delgado Silva (+18 years of experience), while body plastic surgeries are performed by our accredited plastic surgery specialists at Clínica Multiestética.",
        },
        {
          id: "faq-3",
          question: "Will facial harmonization look natural?",
          answer:
            "Yes. Our philosophy centers on respecting your natural features and expressions, using certified medical products and precise anatomical proportions.",
        },
        {
          id: "faq-4",
          question: "Do you welcome international and out-of-town patients in Arequipa?",
          answer:
            "Yes. We coordinate bilingual (Spanish and English) pre-arrival guidance and schedule consultations and follow-up visits efficiently in Cayma, Arequipa.",
        },
        {
          id: "faq-5",
          question: "Where is Clínica Multiestética located?",
          answer:
            "We see patients by appointment at Urb. León XIII K-8, Cayma district, Arequipa, Peru.",
        },
        {
          id: "faq-6",
          question: "What is the minimum age for aesthetic or surgical treatments?",
          answer:
            "All procedures are exclusively for adults aged 18 and older following an in-person medical evaluation.",
        },
      ],
    },
    locationSection: {
      title: "Your personalized consultation in Arequipa",
      subtitle:
        "Visit our clinic in Cayma or share your details to coordinate your appointment on WhatsApp.",
      addressLabel: "Clinic address",
      addressValue: "Urb. León XIII K-8, Cayma, Arequipa, Peru",
      phoneLabel: "Official WhatsApp",
      scheduleLabel: "Appointment care",
      scheduleValue: "Personalized care by appointment (Spanish & English)",
      formTitle: "Request your consultation",
      formSubtitle: "Complete these three fields to continue with your message ready on WhatsApp.",
      nameLabel: "Full name",
      namePlaceholder: "e.g. Sarah Jenkins",
      phoneInputLabel: "Phone or WhatsApp number",
      phonePlaceholder: "e.g. +1 555 000 0000",
      procedureLabel: "Procedure of interest",
      procedurePlaceholder: "e.g. Facial harmonization or Blepharoplasty",
      privacyLabel:
        "I accept the processing of my personal data under Peruvian Law No. 29733 to coordinate my medical care.",
      submitBtn: "Schedule via WhatsApp",
      submittedNotice: "Opening WhatsApp with your consultation request ready.",
      mapTitle: "Location map for Clínica Multiestética at Urb. León XIII K-8, Cayma, Arequipa",
    },
    footer: {
      tagline: "Where beauty finds its purpose and every story deserves a new opportunity.",
      schedule: "By appointment in Cayma, Arequipa, Peru",
      exploreHeading: "Explore",
      specialtiesHeading: "Specialties",
      patientCareHeading: "Patient care",
      claimsBook: "Virtual Claims Book (INDECOPI)",
      privacyPolicy: "Privacy policy (Law No. 29733)",
      termsConditions: "Terms and conditions",
      valuationTerms: "Medical consultation guidelines",
      copyright:
        "© 2026 Clínica Multiestética & Dr. Gabriela Delgado Silva. All rights reserved.",
    },
    waModal: {
      fabAriaLabel: "Schedule consultation via WhatsApp",
      title: "Book via WhatsApp",
      description: "Share your details and we will open WhatsApp with your consultation message ready.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      ageLabel: "Age (18+)",
      agePlaceholder: "e.g. 32",
      procedureLabel: "Procedure of interest",
      procedurePlaceholder: "e.g. Facial harmonization",
      privacyAccept: "I accept the privacy policy (Law No. 29733) to receive medical guidance.",
      submitBtn: "Continue to WhatsApp",
      footnote: "Your information is used solely to coordinate your personalized medical care.",
    },
  },
};
