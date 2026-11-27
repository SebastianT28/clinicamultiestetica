import type { Locale } from "@/config/site";

export type SpecialtyUnitId =
  | "armonizacion-inyectables"
  | "cirugia-maxilofacial"
  | "calidad-piel"
  | "cirugia-corporal";

export interface QuickGoalChip {
  id: string;
  label: string;
  query: string;
}

export interface SpecialtyUnitBlock {
  id: SpecialtyUnitId;
  badge: string;
  title: string;
  description: string;
  specialistLead: string;
  procedureNames: string[];
  placeholderTitle: string;
  placeholderSubtitle: string;
  exploreCta: string;
  consultCta: string;
}

export interface DetailedServiceFicha {
  slug: string;
  specialtyId: SpecialtyUnitId;
  title: string;
  summary: string;
  idealFor: string;
  modality: string;
  recoveryNote: string;
  specialistTag: string;
  placeholderLabel: string;
  keywords: string[];
}

export interface ServicesPageDictionary {
  hero: {
    pill: string;
    title: string;
    subtitle: string;
    searchLabel: string;
    searchPlaceholder: string;
    searchBtn: string;
    clearBtn: string;
    quickGoalsPrompt: string;
    quickGoals: QuickGoalChip[];
    resultsTitlePrefix: string;
    noResultsText: string;
    noResultsCta: string;
  };
  specialtiesSection: {
    pill: string;
    titleLead: string;
    titleAccent: string;
    countSummary: string;
    units: SpecialtyUnitBlock[];
  };
  catalogSection: {
    pill: string;
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    filterAll: string;
    filterHarmonization: string;
    filterMaxillofacial: string;
    filterSkin: string;
    filterBody: string;
    idealForLabel: string;
    modalityLabel: string;
    recoveryLabel: string;
    consultBtn: string;
    countTopPrefix: string;
    countOfWord: string;
    countBottomNote: string;
  };
  guidanceBanner: {
    pill: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    eeatNote: string;
  };
}

export const SERVICES_PAGE_CONTENT: Record<Locale, ServicesPageDictionary> = {
  es: {
    hero: {
      pill: "Dra. Gabriela Delgado · Especialidades Médicas",
      title: "Nuestras Especialidades y Tratamientos",
      subtitle:
        "Cuéntanos qué te gustaría mejorar en tu rostro, mirada, piel o contorno corporal y te orientamos hacia el procedimiento ideal en Arequipa.",
      searchLabel: "¿Qué te gustaría mejorar?",
      searchPlaceholder:
        "Ej: tengo ojeras o papada, quiero definir mi mandíbula...",
      searchBtn: "Buscar",
      clearBtn: "Ver todo el portafolio",
      quickGoalsPrompt: "O elige un objetivo frecuente:",
      quickGoals: [
        {
          id: "goal-harmonization",
          label: "Labios, pómulos u ojeras",
          query: "ojeras labios pómulos ácido hialurónico",
        },
        {
          id: "goal-jawline",
          label: "Papada y mandíbula definida",
          query: "papada mandíbula bichectomía afinamiento",
        },
        {
          id: "goal-gaze",
          label: "Rejuvenecer mirada y rostro",
          query: "mirada párpados blefaroplastia lifting toxina",
        },
        {
          id: "goal-skin",
          label: "Firmeza, colágeno y cicatrices",
          query: "colágeno piel enzimas cicatrices flacidez",
        },
        {
          id: "goal-body",
          label: "Contorno corporal y silueta",
          query: "corporal liposucción abdomen mamas silueta",
        },
      ],
      resultsTitlePrefix: "Tratamientos recomendados para tu búsqueda",
      noResultsText:
        "Cada rostro y anatomía es única. Si no encuentras el término exacto, conversemos directamente para orientarte de forma personalizada.",
      noResultsCta: "Recibir orientación médica",
    },
    specialtiesSection: {
      pill: "Nuestros Servicios",
      titleLead: "Explora cada ",
      titleAccent: "especialidad médica",
      countSummary: "4 unidades clínicas especializadas · 16 procedimientos médicos",
      units: [
        {
          id: "armonizacion-inyectables",
          badge: "Dra. Gabriela Delgado · 3 tratamientos",
          title: "Armonización facial e inyectables",
          description:
            "Ácido hialurónico, toxina botulínica y bioestimuladores de colágeno aplicados con precisión anatómica para devolver soporte, frescura y firmeza conservando tus gestos naturales.",
          specialistLead:
            "Dirección directa: Dra. Gabriela Delgado Silva (+18 años de experiencia)",
          procedureNames: [
            "Ácido hialurónico",
            "Toxina botulínica",
            "Bioestimulador de colágeno",
          ],
          placeholderTitle: "Imagen editorial en gris (16:10): Armonización e inyectables",
          placeholderSubtitle: "Aplicación facial delicada con criterio anatómico",
          exploreCta: "Ver tratamientos",
          consultCta: "Solicitar valoración",
        },
        {
          id: "cirugia-maxilofacial",
          badge: "Cirugía Facial y Maxilofacial · 5 tratamientos",
          title: "Cirugía facial y perfilamiento maxilofacial",
          description:
            "Procedimientos quirúrgicos y de contorno facial diseñados para rejuvenecer tu mirada, estilizar el tercio medio e inferior y proyectar un perfil mandibular equilibrado.",
          specialistLead:
            "Dirección quirúrgica facial: Dra. Gabriela Delgado Silva y Unidad Facial",
          procedureNames: [
            "Lifting facial",
            "Blefaroplastia superior e inferior",
            "Liposucción de papada y marcación mandibular",
            "Bichectomía",
            "Afinamiento facial",
          ],
          placeholderTitle: "Imagen editorial en gris (16:10): Cirugía y perfilamiento facial",
          placeholderSubtitle: "Proporción armónica en mirada, rostro y mandíbula",
          exploreCta: "Ver tratamientos",
          consultCta: "Solicitar valoración",
        },
        {
          id: "calidad-piel",
          badge: "Medicina Estética y Regenerativa · 3 tratamientos",
          title: "Calidad de piel, enzimas y cicatrices",
          description:
            "Protocolos clínicos mínimamente invasivos orientados a revitalizar la textura cutánea, reducir grasa localizada o fibrosis con enzimas recombinantes y atenuar cicatrices.",
          specialistLead:
            "Evaluación personalizada: Dra. Gabriela Delgado y Unidad Regenerativa",
          procedureNames: [
            "Tratamientos de reducción con enzimas",
            "Tratamientos de piel",
            "Retiro de cicatrices",
          ],
          placeholderTitle: "Imagen editorial en gris (16:10): Calidad de piel y enzimas",
          placeholderSubtitle: "Luminosidad dérmica, firmeza y regeneración progresiva",
          exploreCta: "Ver tratamientos",
          consultCta: "Solicitar valoración",
        },
        {
          id: "cirugia-corporal",
          badge: "Clínica Multiestética · 5 cirugías corporales",
          title: "Cirugía estética corporal integral",
          description:
            "Remodelación corporal de contorno 360, lipotransferencia, cirugía mamaria y pared abdominal con estrictos estándares preoperatorios y seguimiento cercano en Arequipa.",
          specialistLead:
            "A cargo del Staff de Cirujanos Plásticos Especialistas · Clínica Multiestética",
          procedureNames: [
            "Liposucción 360",
            "Lipotransferencia",
            "Implantes de mamas",
            "Ginecomastia",
            "Abdominoplastias",
          ],
          placeholderTitle: "Imagen editorial en gris (16:10): Cirugía estética corporal",
          placeholderSubtitle: "Seguridad quirúrgica y acompañamiento postoperatorio",
          exploreCta: "Ver tratamientos",
          consultCta: "Solicitar valoración",
        },
      ],
    },
    catalogSection: {
      pill: "Portafolio Completo",
      titleLead: "Detalle de nuestros ",
      titleAccent: "16 procedimientos médicos",
      subtitle:
        "Filtra por especialidad para conocer en qué consiste cada tratamiento, para quién está indicado y cómo agendar tu valoración.",
      filterAll: "Todos (16)",
      filterHarmonization: "Armonización e inyectables (3)",
      filterMaxillofacial: "Cirugía facial (5)",
      filterSkin: "Piel y enzimas (3)",
      filterBody: "Cirugía corporal (5)",
      idealForLabel: "Ideal si buscas:",
      modalityLabel: "Modalidad:",
      recoveryLabel: "Recuperación:",
      consultBtn: "Agendar valoración",
      countTopPrefix: "Mostrando",
      countOfWord: "de",
      countBottomNote:
        "Cada indicación médica se confirma en consulta presencial o virtual según tu historia clínica y anatomía.",
    },
    guidanceBanner: {
      pill: "Orientación Médica",
      title: "¿No sabes cuál es el tratamiento indicado para ti?",
      description:
        "Agenda una valoración personalizada con la Dra. Gabriela Delgado y nuestro equipo médico en Cayma, Arequipa, para diseñar juntos el plan ideal para ti.",
      primaryCta: "Agendar valoración médica",
      secondaryCta: "Hablar por WhatsApp",
      eeatNote:
        "Atención para mayores de 18 años · Dirección médica: Dra. Gabriela Delgado Silva (+18 años de experiencia) y Clínica Multiestética.",
    },
  },
  en: {
    hero: {
      pill: "Dr. Gabriela Delgado · Medical Specialties",
      title: "Our Specialties & Medical Treatments",
      subtitle:
        "Tell us what you would like to enhance in your face, gaze, skin, or body contour and we will guide you toward the right procedure in Arequipa.",
      searchLabel: "What would you like to improve?",
      searchPlaceholder:
        "e.g. under-eye hollows, double chin, or jawline definition...",
      searchBtn: "Search",
      clearBtn: "View full portfolio",
      quickGoalsPrompt: "Or select a common aesthetic goal:",
      quickGoals: [
        {
          id: "goal-harmonization",
          label: "Lips, cheeks or under-eyes",
          query: "hollows lips cheeks hyaluronic acid",
        },
        {
          id: "goal-jawline",
          label: "Chin & defined jawline",
          query: "chin jawline bichectomy slimming",
        },
        {
          id: "goal-gaze",
          label: "Refresh eyes & face",
          query: "eyelids blepharoplasty facelift botulinum",
        },
        {
          id: "goal-skin",
          label: "Firmness, collagen & scars",
          query: "collagen skin enzymes scars laxity",
        },
        {
          id: "goal-body",
          label: "Body contour & silhouette",
          query: "body liposuction abdomen breast contour",
        },
      ],
      resultsTitlePrefix: "Recommended procedures for your goal",
      noResultsText:
        "Every face and anatomy is unique. Share your goal directly with our medical desk for tailored guidance.",
      noResultsCta: "Request medical guidance",
    },
    specialtiesSection: {
      pill: "Our Services",
      titleLead: "Explore each ",
      titleAccent: "clinical specialty",
      countSummary: "4 specialized clinical units · 16 certified medical procedures",
      units: [
        {
          id: "armonizacion-inyectables",
          badge: "Dr. Gabriela Delgado · 3 treatments",
          title: "Facial harmonization & injectables",
          description:
            "Hyaluronic acid, botulinum toxin, and collagen biostimulators placed with anatomical precision to restore support, freshness, and firmness while keeping natural expressions.",
          specialistLead:
            "Led directly by Dr. Gabriela Delgado Silva (+18 years of experience)",
          procedureNames: [
            "Hyaluronic acid fillers",
            "Botulinum toxin",
            "Collagen biostimulators",
          ],
          placeholderTitle: "Grey editorial image (16:10): Facial harmonization",
          placeholderSubtitle: "Delicate anatomical facial enhancement",
          exploreCta: "View treatments",
          consultCta: "Request consultation",
        },
        {
          id: "cirugia-maxilofacial",
          badge: "Facial & Maxillofacial Unit · 5 treatments",
          title: "Facial surgery & maxillofacial contouring",
          description:
            "Surgical and structural facial procedures crafted to refresh your gaze, refine mid-to-lower facial contours, and project a clean jawline.",
          specialistLead:
            "Facial surgical direction: Dr. Gabriela Delgado Silva & Facial Unit",
          procedureNames: [
            "Facelift surgery",
            "Upper & lower blepharoplasty",
            "Chin liposuction & jawline contouring",
            "Buccal fat removal (Bichectomy)",
            "Facial slimming",
          ],
          placeholderTitle: "Grey editorial image (16:10): Facial & maxillofacial surgery",
          placeholderSubtitle: "Balanced proportions across gaze, profile, and jawline",
          exploreCta: "View treatments",
          consultCta: "Request consultation",
        },
        {
          id: "calidad-piel",
          badge: "Aesthetic & Regenerative Skin · 3 treatments",
          title: "Skin quality, enzymes & scar care",
          description:
            "Minimally invasive medical protocols designed to revitalize skin texture, target localized fullness with recombinant enzymes, and improve scars.",
          specialistLead:
            "Personalized evaluation: Dr. Gabriela Delgado & Regenerative Unit",
          procedureNames: [
            "Recombinant enzyme reduction",
            "Advanced skin treatments",
            "Scar revision & removal",
          ],
          placeholderTitle: "Grey editorial image (16:10): Skin quality & enzymes",
          placeholderSubtitle: "Skin radiance, progressive firmness, and scar care",
          exploreCta: "View treatments",
          consultCta: "Request consultation",
        },
        {
          id: "cirugia-corporal",
          badge: "Clínica Multiestética · 5 body surgeries",
          title: "Comprehensive aesthetic body surgery",
          description:
            "360 body sculpting, autologous fat transfer, breast augmentation, and abdominal contouring with rigorous pre-op evaluation and attentive follow-up.",
          specialistLead:
            "Performed by Specialist Plastic Surgeons · Clínica Multiestética",
          procedureNames: [
            "360 liposuction",
            "Fat transfer (Lipotransfer)",
            "Breast augmentation implants",
            "Gynecomastia surgery",
            "Abdominoplasty",
          ],
          placeholderTitle: "Grey editorial image (16:10): Aesthetic body surgery",
          placeholderSubtitle: "Surgical safety and guided post-operative care",
          exploreCta: "View treatments",
          consultCta: "Request consultation",
        },
      ],
    },
    catalogSection: {
      pill: "Complete Portfolio",
      titleLead: "Explore all ",
      titleAccent: "16 medical procedures",
      subtitle:
        "Filter by clinical unit to learn how each treatment works, who it helps, and how to book your consultation.",
      filterAll: "All (16)",
      filterHarmonization: "Harmonization & injectables (3)",
      filterMaxillofacial: "Facial surgery (5)",
      filterSkin: "Skin & enzymes (3)",
      filterBody: "Body surgery (5)",
      idealForLabel: "Ideal if you seek:",
      modalityLabel: "Modality:",
      recoveryLabel: "Recovery:",
      consultBtn: "Book consultation",
      countTopPrefix: "Showing",
      countOfWord: "of",
      countBottomNote:
        "Every medical indication is confirmed during your consultation according to your clinical history and anatomy.",
    },
    guidanceBanner: {
      pill: "Medical Guidance",
      title: "Not sure which procedure is right for you?",
      description:
        "Schedule a personalized assessment with Dr. Gabriela Delgado and our specialist medical team in Cayma, Arequipa. Together we will design an honest, natural care plan.",
      primaryCta: "Book medical consultation",
      secondaryCta: "Chat on WhatsApp",
      eeatNote:
        "For patients 18+ · Medical direction: Dr. Gabriela Delgado Silva (+18 years of experience) & Accredited Specialists at Clínica Multiestética.",
    },
  },
};

export const SERVICES_FICHAS: Record<Locale, DetailedServiceFicha[]> = {
  es: [
    // Unidad 1: Armonización e Inyectables (3)
    {
      slug: "acido-hialuronico",
      specialtyId: "armonizacion-inyectables",
      title: "Ácido hialurónico",
      summary:
        "Reposición anatómica de soporte y volumen sutil en labios, pómulos, mentón, fosa temporal y surcos con resultados naturales.",
      idealFor: "Atenuar ojeras hundidas, perfilar labios o proyectar pómulos y mentón.",
      modality: "Ambulatorio en consultorio (30 a 45 min)",
      recoveryNote: "Incorporación inmediata con cuidados simples",
      specialistTag: "Dra. Gabriela Delgado",
      placeholderLabel: "Imagen gris (16:10): Ácido hialurónico",
      keywords: [
        "acido",
        "hialuronico",
        "ojeras",
        "hundidas",
        "labios",
        "pomulos",
        "menton",
        "rinomodelacion",
        "surcos",
        "armonizacion",
        "volumen",
      ],
    },
    {
      slug: "toxina-botulinica",
      specialtyId: "armonizacion-inyectables",
      title: "Toxina botulínica",
      summary:
        "Relajación selectiva y precisa de líneas dinámicas en frente, entrecejo y contorno ocular preservando tu expresividad.",
      idealFor: "Suavizar líneas de expresión y prevenir arrugas marcadas con frescura.",
      modality: "Ambulatorio en consultorio (20 a 30 min)",
      recoveryNote: "Sin reposo médico; efecto progresivo en 4 a 10 días",
      specialistTag: "Dra. Gabriela Delgado",
      placeholderLabel: "Imagen gris (16:10): Toxina botulínica",
      keywords: [
        "toxina",
        "botulinica",
        "botox",
        "arrugas",
        "frente",
        "entrecejo",
        "patas de gallo",
        "lineas",
        "expresion",
        "mirada",
      ],
    },
    {
      slug: "bioestimulador-colageno",
      specialtyId: "armonizacion-inyectables",
      title: "Bioestimulador de colágeno",
      summary:
        "Activa la formación natural de colágeno propio para recuperar firmeza, tensión dérmica y calidad de piel de forma gradual.",
      idealFor: "Combatir flacidez facial leve a moderada sin añadir volumen excesivo.",
      modality: "Ambulatorio en consultorio (40 min)",
      recoveryNote: "Retorno inmediato a tus actividades cotidianas",
      specialistTag: "Dra. Gabriela Delgado",
      placeholderLabel: "Imagen gris (16:10): Bioestimulador de colágeno",
      keywords: [
        "bioestimulador",
        "colageno",
        "radiesse",
        "sculptra",
        "harmonyca",
        "flacidez",
        "firmeza",
        "piel",
        "tensado",
      ],
    },

    // Unidad 2: Cirugía Facial y Maxilofacial (5)
    {
      slug: "lifting-facial",
      specialtyId: "cirugia-maxilofacial",
      title: "Lifting facial",
      summary:
        "Reposicionamiento quirúrgico de planos profundos de rostro y cuello para restaurar contornos juveniles con apariencia descansada.",
      idealFor: "Corregir descolgamiento facial y cervical moderado o avanzado.",
      modality: "Quirúrgico especializado",
      recoveryNote: "Reposo guiado de 10 a 14 días con controles cercanos",
      specialistTag: "Dra. Gabriela Delgado · Unidad Facial",
      placeholderLabel: "Imagen gris (16:10): Lifting facial",
      keywords: [
        "lifting",
        "facial",
        "ritidectomia",
        "rejuvenecimiento",
        "flacidez",
        "cuello",
        "rostro",
        "descolgamiento",
      ],
    },
    {
      slug: "blefaroplastia",
      specialtyId: "cirugia-maxilofacial",
      title: "Blefaroplastia superior e inferior",
      summary:
        "Cirugía delicada de párpados que retira el exceso de piel y corrige bolsas palpebrales devolviendo amplitud y luz a tu mirada.",
      idealFor: "Mirada cansada, párpados caídos o bolsas debajo de los ojos.",
      modality: "Ambulatorio quirúrgico",
      recoveryNote: "Recuperación inicial de 5 a 7 días",
      specialistTag: "Dra. Gabriela Delgado",
      placeholderLabel: "Imagen gris (16:10): Blefaroplastia",
      keywords: [
        "blefaroplastia",
        "parpados",
        "caidos",
        "bolsas",
        "ojos",
        "mirada",
        "cansada",
        "ojeras",
      ],
    },
    {
      slug: "lipopapada-marcacion-mandibular",
      specialtyId: "cirugia-maxilofacial",
      title: "Liposucción de papada y marcación mandibular",
      summary:
        "Elimina el acúmulo graso submentoniano y define el borde mandibular logrando un perfil cérvico-facial limpio y estilizado.",
      idealFor: "Reducir papada y resaltar el ángulo entre cuello y mandíbula.",
      modality: "Ambulatorio mínimamente invasivo",
      recoveryNote: "Uso de mentonera y retorno rápido en 3 a 5 días",
      specialistTag: "Dra. Gabriela Delgado",
      placeholderLabel: "Imagen gris (16:10): Lipopapada y mandíbula",
      keywords: [
        "papada",
        "lipopapada",
        "mandibula",
        "mandibular",
        "marcacion",
        "cuello",
        "perfil",
        "menton",
      ],
    },
    {
      slug: "bichectomia",
      specialtyId: "cirugia-maxilofacial",
      title: "Bichectomía",
      summary:
        "Extracción intraoral selectiva de las bolsas grasas de Bichat previa evaluación maxilofacial sin cicatrices visibles.",
      idealFor: "Afinar mejillas redondeadas cuando tu estructura ósea lo permite.",
      modality: "Ambulatorio intraoral (40 min)",
      recoveryNote: "Cuidados blandos durante 3 a 5 días",
      specialistTag: "Dra. Gabriela Delgado",
      placeholderLabel: "Imagen gris (16:10): Bichectomía",
      keywords: [
        "bichectomia",
        "bolsas de bichat",
        "mejillas",
        "cachetes",
        "afinar",
        "rostro redondo",
      ],
    },
    {
      slug: "afinamiento-facial",
      specialtyId: "cirugia-maxilofacial",
      title: "Afinamiento facial",
      summary:
        "Protocolo integral personalizado que combina manejo muscular, contorneado del tercio inferior y soporte estructural armónico.",
      idealFor: "Estilizar rostros anchos o bruxismo estético con equilibrio natural.",
      modality: "Ambulatorio personalizado",
      recoveryNote: "Recuperación rápida según técnicas combinadas",
      specialistTag: "Dra. Gabriela Delgado",
      placeholderLabel: "Imagen gris (16:10): Afinamiento facial",
      keywords: [
        "afinamiento",
        "facial",
        "adelgazar rostro",
        "masetero",
        "bruxismo",
        "perfilamiento",
        "contorno",
      ],
    },

    // Unidad 3: Calidad de Piel, Enzimas y Cicatrices (3)
    {
      slug: "reduccion-con-enzimas",
      specialtyId: "calidad-piel",
      title: "Tratamientos de reducción con enzimas",
      summary:
        "Aplicación de enzimas recombinantes específicas (lipasa, colagenasa e hialuronidasa) para grasa localizada, flacidez y fibrosis.",
      idealFor: "Mejorar contornos localizados o irregularidades sin cirugía.",
      modality: "Ambulatorio por sesiones en consultorio",
      recoveryNote: "Inflamación leve transitoria de 24 a 48 horas",
      specialistTag: "Dra. Gabriela Delgado",
      placeholderLabel: "Imagen gris (16:10): Reducción con enzimas",
      keywords: [
        "enzimas",
        "recombinantes",
        "pbserum",
        "grasa localizada",
        "fibrosis",
        "papada sin cirugia",
        "flacidez",
      ],
    },
    {
      slug: "tratamientos-de-piel",
      specialtyId: "calidad-piel",
      title: "Tratamientos de piel",
      summary:
        "Protocolos médicos de hidratación profunda, revitalización celular, manejo de poros, manchas leves y luminosidad facial.",
      idealFor: "Devolver brillo saludable, suavidad y uniformidad a tu piel.",
      modality: "Ambulatorio en consultorio",
      recoveryNote: "Incorporación inmediata con fotoprotección",
      specialistTag: "Dra. Gabriela Delgado",
      placeholderLabel: "Imagen gris (16:10): Tratamientos de piel",
      keywords: [
        "piel",
        "manchas",
        "hidratacion",
        "poros",
        "luminosidad",
        "skinbooster",
        "peeling",
        "calidad de piel",
      ],
    },
    {
      slug: "retiro-de-cicatrices",
      specialtyId: "calidad-piel",
      title: "Retiro de cicatrices",
      summary:
        "Abordaje médico progresivo de cicatrices faciales, post-acné o quirúrgicas combinando remodelación de colágeno y revisión clínica.",
      idealFor: "Suavizar relieve, coloración y tensión de cicatrices previas.",
      modality: "Ambulatorio por sesiones o revisión local",
      recoveryNote: "Cuidados tópicos sencillos y seguimiento gradual",
      specialistTag: "Unidad Regenerativa",
      placeholderLabel: "Imagen gris (16:10): Retiro de cicatrices",
      keywords: [
        "cicatrices",
        "cicatriz",
        "acne",
        "marcas",
        "queloide",
        "revision",
        "piel",
      ],
    },

    // Unidad 4: Cirugía Estética Corporal (5)
    {
      slug: "liposuccion-360",
      specialtyId: "cirugia-corporal",
      title: "Liposucción 360",
      summary:
        "Esculpido circunferencial de abdomen, cintura, flancos y espalda para lograr transiciones armónicas desde todos los ángulos.",
      idealFor: "Definir cintura y eliminar depósitos grasos resistentes al ejercicio.",
      modality: "Quirúrgico especializado en clínica",
      recoveryNote: "Reposo relativo inicial de 7 a 10 días y drenajes guiados",
      specialistTag: "Staff Cirugía Corporal",
      placeholderLabel: "Imagen gris (16:10): Liposucción 360",
      keywords: [
        "liposuccion",
        "lipo",
        "360",
        "cintura",
        "abdomen",
        "espalda",
        "flancos",
        "corporal",
        "silueta",
      ],
    },
    {
      slug: "lipotransferencia",
      specialtyId: "cirugia-corporal",
      title: "Lipotransferencia",
      summary:
        "Purificación e injerto cuidadoso de tejido graso propio para armonizar volumen y proyección corporal con tacto natural.",
      idealFor: "Mejorar proyección glútea o contornos corporales con tejido autólogo.",
      modality: "Quirúrgico especializado",
      recoveryNote: "Seguimiento postoperatorio cercano durante 2 semanas",
      specialistTag: "Staff Cirugía Corporal",
      placeholderLabel: "Imagen gris (16:10): Lipotransferencia",
      keywords: [
        "lipotransferencia",
        "grasa propia",
        "gluteos",
        "cadera",
        "contorno corporal",
        "volumen",
      ],
    },
    {
      slug: "implantes-de-mamas",
      specialtyId: "cirugia-corporal",
      title: "Implantes de mamas",
      summary:
        "Aumento mamario personalizado seleccionando volumen, perfil e implantes certificados en proporción con tu tórax.",
      idealFor: "Realzar volumen y simetría mamaria con resultado armónico y seguro.",
      modality: "Quirúrgico especializado",
      recoveryNote: "Recuperación progresiva de 7 a 14 días con controles",
      specialistTag: "Staff Cirugía Corporal",
      placeholderLabel: "Imagen gris (16:10): Implantes de mamas",
      keywords: [
        "implantes",
        "mamas",
        "aumento mamario",
        "pecho",
        "bustos",
        "senos",
        "protesis",
      ],
    },
    {
      slug: "ginecomastia",
      specialtyId: "cirugia-corporal",
      title: "Ginecomastia",
      summary:
        "Corrección quirúrgica del exceso glandular o graso en la región pectoral masculina devolviendo firmeza y definición al tórax.",
      idealFor: "Hombres que buscan un contorno pectoral plano, firme y natural.",
      modality: "Quirúrgico especializado",
      recoveryNote: "Uso de chaleco compresivo y retorno en 5 a 7 días",
      specialistTag: "Staff Cirugía Corporal",
      placeholderLabel: "Imagen gris (16:10): Ginecomastia",
      keywords: [
        "ginecomastia",
        "pectoral",
        "hombre",
        "masculino",
        "torax",
        "pecho masculino",
      ],
    },
    {
      slug: "abdominoplastia",
      specialtyId: "cirugia-corporal",
      title: "Abdominoplastias",
      summary:
        "Restaura la firmeza muscular de la pared abdominal (diástasis) y retira el exceso de piel logrando un abdomen plano y proporcionado.",
      idealFor: "Flacidez abdominal tras embarazos o cambios importantes de peso.",
      modality: "Quirúrgico especializado",
      recoveryNote: "Recuperación acompañada de 2 a 3 semanas",
      specialistTag: "Staff Cirugía Corporal",
      placeholderLabel: "Imagen gris (16:10): Abdominoplastia",
      keywords: [
        "abdominoplastia",
        "abdomen",
        "piel sobrante",
        "embarazo",
        "diastasis",
        "flacidez abdominal",
        "cintura",
      ],
    },
  ],
  en: [
    {
      slug: "acido-hialuronico",
      specialtyId: "armonizacion-inyectables",
      title: "Hyaluronic acid fillers",
      summary:
        "Anatomical restoration of subtle support and contour across lips, cheeks, chin, temples, and under-eye hollows.",
      idealFor: "Softening under-eye hollows, defining lips, or balancing cheekbones and chin.",
      modality: "In-office outpatient (30 to 45 min)",
      recoveryNote: "Immediate return to daily routine",
      specialistTag: "Dr. Gabriela Delgado",
      placeholderLabel: "Grey image (16:10): Hyaluronic acid",
      keywords: ["hyaluronic", "hollows", "under-eye", "lips", "cheeks", "chin", "fillers"],
    },
    {
      slug: "toxina-botulinica",
      specialtyId: "armonizacion-inyectables",
      title: "Botulinum toxin",
      summary:
        "Precise relaxation of dynamic forehead, frown, and crow’s-feet lines while keeping natural facial expression.",
      idealFor: "Smoothing expression lines for a rested, refreshed look.",
      modality: "In-office outpatient (20 to 30 min)",
      recoveryNote: "Zero downtime; progressive effect in 4 to 10 days",
      specialistTag: "Dr. Gabriela Delgado",
      placeholderLabel: "Grey image (16:10): Botulinum toxin",
      keywords: ["botulinum", "botox", "wrinkles", "forehead", "frown", "gaze"],
    },
    {
      slug: "bioestimulador-colageno",
      specialtyId: "armonizacion-inyectables",
      title: "Collagen biostimulators",
      summary:
        "Stimulates your own collagen synthesis to gradually restore dermal firmness, elasticity, and skin density.",
      idealFor: "Addressing mild-to-moderate skin laxity without overfilling.",
      modality: "In-office outpatient (40 min)",
      recoveryNote: "Immediate return to daily activities",
      specialistTag: "Dr. Gabriela Delgado",
      placeholderLabel: "Grey image (16:10): Collagen biostimulators",
      keywords: ["collagen", "biostimulator", "laxity", "firmness", "skin"],
    },
    {
      slug: "lifting-facial",
      specialtyId: "cirugia-maxilofacial",
      title: "Facelift surgery",
      summary:
        "Deep-plane surgical repositioning of facial and neck tissues for harmonious, long-lasting rejuvenation.",
      idealFor: "Moderate-to-advanced facial and neck tissue laxity.",
      modality: "Specialized surgical procedure",
      recoveryNote: "Guided 10 to 14 day recovery with close follow-up",
      specialistTag: "Dr. Gabriela Delgado · Facial Unit",
      placeholderLabel: "Grey image (16:10): Facelift surgery",
      keywords: ["facelift", "lifting", "neck", "rejuvenation", "sagging"],
    },
    {
      slug: "blefaroplastia",
      specialtyId: "cirugia-maxilofacial",
      title: "Upper & lower blepharoplasty",
      summary:
        "Delicate eyelid surgery removing excess skin and under-eye bags to restore brightness and openness to your gaze.",
      idealFor: "Drooping eyelids, tired gaze, or prominent under-eye bags.",
      modality: "Outpatient surgical procedure",
      recoveryNote: "Initial recovery of 5 to 7 days",
      specialistTag: "Dr. Gabriela Delgado",
      placeholderLabel: "Grey image (16:10): Blepharoplasty",
      keywords: ["blepharoplasty", "eyelids", "bags", "eyes", "tired gaze", "hollows"],
    },
    {
      slug: "lipopapada-marcacion-mandibular",
      specialtyId: "cirugia-maxilofacial",
      title: "Chin liposuction & jawline contouring",
      summary:
        "Removes submental fullness and defines the mandibular border for a clean, sculpted neck and lower-face profile.",
      idealFor: "Reducing double chin and sharpening jawline definition.",
      modality: "Minimally invasive outpatient",
      recoveryNote: "Quick return in 3 to 5 days with support garment",
      specialistTag: "Dr. Gabriela Delgado",
      placeholderLabel: "Grey image (16:10): Chin & jawline contouring",
      keywords: ["chin", "double chin", "jawline", "neck", "profile"],
    },
    {
      slug: "bichectomia",
      specialtyId: "cirugia-maxilofacial",
      title: "Buccal fat removal (Bichectomy)",
      summary:
        "Intraoral removal of buccal fat pads following thorough maxillofacial anatomical assessment with no external scars.",
      idealFor: "Refining fuller lower cheeks when bone structure supports it.",
      modality: "Intraoral outpatient (40 min)",
      recoveryNote: "Soft diet care for 3 to 5 days",
      specialistTag: "Dr. Gabriela Delgado",
      placeholderLabel: "Grey image (16:10): Bichectomy",
      keywords: ["bichectomy", "buccal", "cheeks", "slimming"],
    },
    {
      slug: "afinamiento-facial",
      specialtyId: "cirugia-maxilofacial",
      title: "Facial slimming",
      summary:
        "Customized lower-face contouring combining muscular balance and structural harmony.",
      idealFor: "Softening a wide lower face or masseter prominence naturally.",
      modality: "Personalized outpatient care",
      recoveryNote: "Minimal downtime tailored to combined techniques",
      specialistTag: "Dr. Gabriela Delgado",
      placeholderLabel: "Grey image (16:10): Facial slimming",
      keywords: ["slimming", "contouring", "masseter", "jawline", "face"],
    },
    {
      slug: "reduccion-con-enzimas",
      specialtyId: "calidad-piel",
      title: "Recombinant enzyme reduction",
      summary:
        "Targeted lipase, collagenase, and hyaluronidase enzymes for localized fullness, mild laxity, and post-op fibrosis.",
      idealFor: "Non-surgical contour refinement and tissue smoothing.",
      modality: "In-office session protocol",
      recoveryNote: "Mild transient swelling for 24 to 48 hours",
      specialistTag: "Dr. Gabriela Delgado",
      placeholderLabel: "Grey image (16:10): Enzyme treatments",
      keywords: ["enzymes", "localized fat", "fibrosis", "laxity", "skin"],
    },
    {
      slug: "tratamientos-de-piel",
      specialtyId: "calidad-piel",
      title: "Advanced skin treatments",
      summary:
        "Medical skin-quality protocols focused on deep hydration, pore refinement, even tone, and healthy luminosity.",
      idealFor: "Restoring glow, smoothness, and dermal vitality.",
      modality: "In-office outpatient",
      recoveryNote: "Immediate routine with sun protection",
      specialistTag: "Dr. Gabriela Delgado",
      placeholderLabel: "Grey image (16:10): Skin quality treatments",
      keywords: ["skin", "glow", "hydration", "pores", "spots", "texture"],
    },
    {
      slug: "retiro-de-cicatrices",
      specialtyId: "calidad-piel",
      title: "Scar revision & removal",
      summary:
        "Progressive clinical management of facial, acne, or surgical scars through collagen remodeling and local revision.",
      idealFor: "Softening scar texture, relief, and discoloration.",
      modality: "In-office sessions or local revision",
      recoveryNote: "Guided topical care and gradual improvement",
      specialistTag: "Regenerative Unit",
      placeholderLabel: "Grey image (16:10): Scar revision",
      keywords: ["scars", "scar", "acne", "marks", "revision"],
    },
    {
      slug: "liposuccion-360",
      specialtyId: "cirugia-corporal",
      title: "360 liposuction",
      summary:
        "Circumferential sculpting of abdomen, waist, flanks, and back for balanced proportions from every angle.",
      idealFor: "Defining waistline and removing stubborn localized fat.",
      modality: "Specialized surgical procedure",
      recoveryNote: "7 to 10 days initial rest with guided lymphatic care",
      specialistTag: "Body Surgery Team",
      placeholderLabel: "Grey image (16:10): 360 liposuction",
      keywords: ["liposuction", "360", "waist", "abdomen", "flanks", "body", "contour"],
    },
    {
      slug: "lipotransferencia",
      specialtyId: "cirugia-corporal",
      title: "Fat transfer (Lipotransfer)",
      summary:
        "Purification and grafting of autologous fat tissue to restore natural body volume and contour.",
      idealFor: "Enhancing gluteal or body contour using your own tissue.",
      modality: "Specialized surgical procedure",
      recoveryNote: "Close post-operative follow-up over 2 weeks",
      specialistTag: "Body Surgery Team",
      placeholderLabel: "Grey image (16:10): Fat transfer",
      keywords: ["lipotransfer", "fat transfer", "gluteal", "hip", "body", "contour"],
    },
    {
      slug: "implantes-de-mamas",
      specialtyId: "cirugia-corporal",
      title: "Breast augmentation implants",
      summary:
        "Tailored breast enhancement selecting certified implant profile and volume proportional to your frame.",
      idealFor: "Restoring or enhancing breast fullness and symmetry safely.",
      modality: "Specialized surgical procedure",
      recoveryNote: "7 to 14 days progressive recovery",
      specialistTag: "Body Surgery Team",
      placeholderLabel: "Grey image (16:10): Breast implants",
      keywords: ["breast", "implants", "augmentation", "chest", "body"],
    },
    {
      slug: "ginecomastia",
      specialtyId: "cirugia-corporal",
      title: "Gynecomastia surgery",
      summary:
        "Surgical correction of excess male chest tissue to restore a firm, defined pectoral contour.",
      idealFor: "Men seeking a flatter, well-proportioned chest profile.",
      modality: "Specialized surgical procedure",
      recoveryNote: "Compression vest and return in 5 to 7 days",
      specialistTag: "Body Surgery Team",
      placeholderLabel: "Grey image (16:10): Gynecomastia",
      keywords: ["gynecomastia", "male chest", "pectoral", "men"],
    },
    {
      slug: "abdominoplastia",
      specialtyId: "cirugia-corporal",
      title: "Abdominoplasty",
      summary:
        "Repairs abdominal muscle separation and removes excess skin for a firmer, balanced midsection.",
      idealFor: "Abdominal skin laxity after pregnancy or weight changes.",
      modality: "Specialized surgical procedure",
      recoveryNote: "Guided 2 to 3 week recovery",
      specialistTag: "Body Surgery Team",
      placeholderLabel: "Grey image (16:10): Abdominoplasty",
      keywords: ["abdominoplasty", "tummy tuck", "abdomen", "pregnancy", "skin", "body"],
    },
  ],
};
