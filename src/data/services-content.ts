import type { Locale } from "@/config/site";

export type SpecialtyUnitId =
  | "armonizacion-inyectables"
  | "cirugia-maxilofacial"
  | "calidad-piel"
  | "cirugia-corporal";

export interface SpecialtyUnitBlock {
  id: SpecialtyUnitId;
  orderNumber: string;
  title: string;
  description: string;
  placeholderTitle: string;
  exploreCta: string;
}

export interface DetailedServiceFicha {
  slug: string;
  specialtyId: SpecialtyUnitId;
  title: string;
  summary: string;
  placeholderLabel: string;
  keywords: string[];
}

export interface ServicesPageDictionary {
  hero: {
    titleLead: string;
    titleAccent: string;
    subtitle: string;
    searchLabel: string;
    searchPlaceholder: string;
    searchBtn: string;
    clearBtn: string;
    resultsTitle: string;
    noResultsText: string;
    noResultsCta: string;
  };
  specialtiesSection: {
    titleLead: string;
    titleAccent: string;
    units: SpecialtyUnitBlock[];
  };
  catalogSection: {
    titleLead: string;
    titleAccent: string;
    filterAll: string;
    filterHarmonization: string;
    filterMaxillofacial: string;
    filterSkin: string;
    filterBody: string;
    consultBtn: string;
  };
  guidanceBanner: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export const SERVICES_PAGE_CONTENT: Record<Locale, ServicesPageDictionary> = {
  es: {
    hero: {
      titleLead: "Nuestros ",
      titleAccent: "Servicios",
      subtitle:
        "Cuéntanos qué te gustaría mejorar y te orientamos hacia el tratamiento ideal dentro de nuestro portafolio.",
      searchLabel: "¿Qué te gustaría mejorar?",
      searchPlaceholder: "Ej: tengo ojeras hundidas, ¿qué me recomiendan?",
      searchBtn: "Buscar",
      clearBtn: "Limpiar",
      resultsTitle: "Recomendaciones para tu consulta",
      noResultsText:
        "Conversemos directamente para orientarte según tu caso de forma personalizada.",
      noResultsCta: "Agendar cita",
    },
    specialtiesSection: {
      titleLead: "Explora cada ",
      titleAccent: "especialidad",
      units: [
        {
          id: "armonizacion-inyectables",
          orderNumber: "01",
          title: "Armonización facial e inyectables",
          description:
            "Ácido hialurónico, toxina botulínica y bioestimuladores de colágeno para devolver soporte, firmeza y frescura, con resultados naturales.",
          placeholderTitle: "Espacio para imagen: Armonización facial",
          exploreCta: "Ver tratamientos",
        },
        {
          id: "cirugia-maxilofacial",
          orderNumber: "02",
          title: "Cirugía facial y perfilamiento",
          description:
            "Perfilamiento facial y maxilofacial para rejuvenecer tu mirada, definir el contorno mandibular y equilibrar tus rasgos, con precisión y proporción.",
          placeholderTitle: "Espacio para imagen: Cirugía facial",
          exploreCta: "Ver tratamientos",
        },
        {
          id: "calidad-piel",
          orderNumber: "03",
          title: "Calidad de piel y enzimas",
          description:
            "Protocolos médicos con enzimas recombinantes, hidratación profunda y manejo de cicatrices para una piel más uniforme, firme y luminosa.",
          placeholderTitle: "Espacio para imagen: Calidad de piel",
          exploreCta: "Ver tratamientos",
        },
        {
          id: "cirugia-corporal",
          orderNumber: "04",
          title: "Cirugía estética corporal",
          description:
            "Moldeamiento corporal 360, lipotransferencia y cirugía mamaria o abdominal de alta precisión, con el mismo rigor clínico.",
          placeholderTitle: "Espacio para imagen: Cirugía corporal",
          exploreCta: "Ver tratamientos",
        },
      ],
    },
    catalogSection: {
      titleLead: "Tratamientos por ",
      titleAccent: "especialidad",
      filterAll: "Todos",
      filterHarmonization: "Armonización facial",
      filterMaxillofacial: "Cirugía facial",
      filterSkin: "Piel y enzimas",
      filterBody: "Cirugía corporal",
      consultBtn: "Agendar cita",
    },
    guidanceBanner: {
      title: "¿No sabes cuál es el tratamiento indicado para ti?",
      description:
        "Agenda una cita con la Dra. Gabriela Delgado y diseñemos juntos el plan ideal para ti.",
      primaryCta: "Agendar cita",
      secondaryCta: "Hablar por WhatsApp",
    },
  },
  en: {
    hero: {
      titleLead: "Our ",
      titleAccent: "Services",
      subtitle:
        "Tell us what you would like to enhance and we will guide you toward the ideal treatment in our portfolio.",
      searchLabel: "What would you like to improve?",
      searchPlaceholder: "e.g. under-eye hollows, what do you recommend?",
      searchBtn: "Search",
      clearBtn: "Clear",
      resultsTitle: "Recommended treatments",
      noResultsText:
        "Let us guide you directly according to your specific goals.",
      noResultsCta: "Book appointment",
    },
    specialtiesSection: {
      titleLead: "Explore each ",
      titleAccent: "specialty",
      units: [
        {
          id: "armonizacion-inyectables",
          orderNumber: "01",
          title: "Facial harmonization & injectables",
          description:
            "Hyaluronic acid, botulinum toxin, and collagen biostimulators to restore support, firmness, and freshness, with natural results.",
          placeholderTitle: "Image placeholder: Facial harmonization",
          exploreCta: "View treatments",
        },
        {
          id: "cirugia-maxilofacial",
          orderNumber: "02",
          title: "Facial surgery & contouring",
          description:
            "Maxillofacial and facial contouring procedures to refresh your gaze, define your jawline, and balance your features with precision.",
          placeholderTitle: "Image placeholder: Facial surgery",
          exploreCta: "View treatments",
        },
        {
          id: "calidad-piel",
          orderNumber: "03",
          title: "Skin quality & enzymes",
          description:
            "Clinical protocols using recombinant enzymes, deep hydration, and scar care for firmer, smoother, and more radiant skin.",
          placeholderTitle: "Image placeholder: Skin quality",
          exploreCta: "View treatments",
        },
        {
          id: "cirugia-corporal",
          orderNumber: "04",
          title: "Aesthetic body surgery",
          description:
            "360 body contouring, fat transfer, breast implants, and abdominoplasty performed with strict surgical precision.",
          placeholderTitle: "Image placeholder: Body surgery",
          exploreCta: "View treatments",
        },
      ],
    },
    catalogSection: {
      titleLead: "Treatments by ",
      titleAccent: "specialty",
      filterAll: "All",
      filterHarmonization: "Facial harmonization",
      filterMaxillofacial: "Facial surgery",
      filterSkin: "Skin & enzymes",
      filterBody: "Body surgery",
      consultBtn: "Book appointment",
    },
    guidanceBanner: {
      title: "Not sure which treatment is right for you?",
      description:
        "Schedule an appointment with Dr. Gabriela Delgado and let us design the ideal plan for you.",
      primaryCta: "Book appointment",
      secondaryCta: "Chat on WhatsApp",
    },
  },
};

export const SERVICES_FICHAS: Record<Locale, DetailedServiceFicha[]> = {
  es: [
    {
      slug: "acido-hialuronico",
      specialtyId: "armonizacion-inyectables",
      title: "Ácido hialurónico",
      summary:
        "Soporte sutil en labios, pómulos, mentón y ojeras respetando tus gestos naturales.",
      placeholderLabel: "Ácido hialurónico",
      keywords: [
        "acido",
        "hialuronico",
        "ojeras",
        "hundidas",
        "labios",
        "pomulos",
        "menton",
        "surcos",
        "armonizacion",
      ],
    },
    {
      slug: "toxina-botulinica",
      specialtyId: "armonizacion-inyectables",
      title: "Toxina botulínica",
      summary:
        "Suaviza líneas de expresión en frente, entrecejo y contorno ocular manteniendo una mirada fresca.",
      placeholderLabel: "Toxina botulínica",
      keywords: [
        "toxina",
        "botulinica",
        "botox",
        "arrugas",
        "frente",
        "entrecejo",
        "lineas",
        "mirada",
      ],
    },
    {
      slug: "bioestimulador-colageno",
      specialtyId: "armonizacion-inyectables",
      title: "Bioestimulador de colágeno",
      summary:
        "Estimula tu propio colágeno para recuperar firmeza y densidad dérmica de forma gradual.",
      placeholderLabel: "Bioestimulador de colágeno",
      keywords: [
        "bioestimulador",
        "colageno",
        "flacidez",
        "firmeza",
        "piel",
        "tensado",
      ],
    },
    {
      slug: "lifting-facial",
      specialtyId: "cirugia-maxilofacial",
      title: "Lifting facial",
      summary:
        "Reposiciona tejidos profundos de rostro y cuello para un rejuvenecimiento armónico y descansado.",
      placeholderLabel: "Lifting facial",
      keywords: [
        "lifting",
        "facial",
        "rejuvenecimiento",
        "flacidez",
        "cuello",
        "rostro",
      ],
    },
    {
      slug: "blefaroplastia",
      specialtyId: "cirugia-maxilofacial",
      title: "Blefaroplastia superior e inferior",
      summary:
        "Corrige el exceso de piel y bolsas en los párpados devolviendo amplitud y luz a tu mirada.",
      placeholderLabel: "Blefaroplastia",
      keywords: [
        "blefaroplastia",
        "parpados",
        "caidos",
        "bolsas",
        "ojos",
        "mirada",
        "ojeras",
      ],
    },
    {
      slug: "lipopapada-marcacion-mandibular",
      specialtyId: "cirugia-maxilofacial",
      title: "Liposucción de papada y marcación mandibular",
      summary:
        "Elimina grasa submentoniana y define un borde mandibular limpio y proporcionado.",
      placeholderLabel: "Lipopapada y marcación mandibular",
      keywords: [
        "papada",
        "lipopapada",
        "mandibula",
        "mandibular",
        "marcacion",
        "cuello",
        "perfil",
      ],
    },
    {
      slug: "bichectomia",
      specialtyId: "cirugia-maxilofacial",
      title: "Bichectomía",
      summary:
        "Estiliza las mejillas mediante extracción intraoral selectiva previa valoración anatómica.",
      placeholderLabel: "Bichectomía",
      keywords: [
        "bichectomia",
        "bichat",
        "mejillas",
        "cachetes",
        "afinar",
      ],
    },
    {
      slug: "afinamiento-facial",
      specialtyId: "cirugia-maxilofacial",
      title: "Afinamiento facial",
      summary:
        "Armoniza el contorno del tercio medio e inferior según tu estructura facial.",
      placeholderLabel: "Afinamiento facial",
      keywords: [
        "afinamiento",
        "facial",
        "masetero",
        "perfilamiento",
        "contorno",
      ],
    },
    {
      slug: "reduccion-con-enzimas",
      specialtyId: "calidad-piel",
      title: "Tratamientos de reducción con enzimas",
      summary:
        "Enzimas recombinantes específicas para grasa localizada, flacidez leve y fibrosis.",
      placeholderLabel: "Reducción con enzimas",
      keywords: [
        "enzimas",
        "recombinantes",
        "grasa localizada",
        "fibrosis",
        "flacidez",
      ],
    },
    {
      slug: "tratamientos-de-piel",
      specialtyId: "calidad-piel",
      title: "Tratamientos de piel",
      summary:
        "Hidratación profunda, mejora de textura y luminosidad mediante protocolos clínicos personalizados.",
      placeholderLabel: "Tratamientos de piel",
      keywords: [
        "piel",
        "manchas",
        "hidratacion",
        "poros",
        "luminosidad",
      ],
    },
    {
      slug: "retiro-de-cicatrices",
      specialtyId: "calidad-piel",
      title: "Retiro de cicatrices",
      summary:
        "Mejora progresiva del relieve y aspecto de cicatrices faciales o corporales.",
      placeholderLabel: "Retiro de cicatrices",
      keywords: ["cicatrices", "cicatriz", "acne", "marcas", "piel"],
    },
    {
      slug: "liposuccion-360",
      specialtyId: "cirugia-corporal",
      title: "Liposucción 360",
      summary:
        "Remodelación integral de abdomen, cintura y espalda para una silueta proporcionada.",
      placeholderLabel: "Liposucción 360",
      keywords: [
        "liposuccion",
        "lipo",
        "360",
        "cintura",
        "abdomen",
        "espalda",
        "corporal",
      ],
    },
    {
      slug: "lipotransferencia",
      specialtyId: "cirugia-corporal",
      title: "Lipotransferencia",
      summary:
        "Restaura volumen y contorno corporal utilizando tejido graso propio purificado.",
      placeholderLabel: "Lipotransferencia",
      keywords: [
        "lipotransferencia",
        "gluteos",
        "cadera",
        "contorno",
        "volumen",
      ],
    },
    {
      slug: "implantes-de-mamas",
      specialtyId: "cirugia-corporal",
      title: "Implantes de mamas",
      summary:
        "Aumento mamario planificado en armonía con tu complexión torácica y bienestar.",
      placeholderLabel: "Implantes de mamas",
      keywords: ["implantes", "mamas", "pecho", "bustos", "senos"],
    },
    {
      slug: "ginecomastia",
      specialtyId: "cirugia-corporal",
      title: "Ginecomastia",
      summary:
        "Corrección quirúrgica del contorno pectoral masculino para un tórax firme y definido.",
      placeholderLabel: "Ginecomastia",
      keywords: ["ginecomastia", "pectoral", "hombre", "masculino", "torax"],
    },
    {
      slug: "abdominoplastia",
      specialtyId: "cirugia-corporal",
      title: "Abdominoplastias",
      summary:
        "Recupera la firmeza de la pared abdominal y retira el exceso de piel con seguridad.",
      placeholderLabel: "Abdominoplastias",
      keywords: [
        "abdominoplastia",
        "abdomen",
        "embarazo",
        "flacidez",
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
        "Subtle structural support for lips, cheeks, chin, and under-eye hollows.",
      placeholderLabel: "Hyaluronic acid",
      keywords: ["hyaluronic", "hollows", "under-eye", "lips", "cheeks", "chin"],
    },
    {
      slug: "toxina-botulinica",
      specialtyId: "armonizacion-inyectables",
      title: "Botulinum toxin",
      summary:
        "Softens dynamic forehead and eye expression lines while keeping natural movement.",
      placeholderLabel: "Botulinum toxin",
      keywords: ["botulinum", "botox", "wrinkles", "forehead", "gaze"],
    },
    {
      slug: "bioestimulador-colageno",
      specialtyId: "armonizacion-inyectables",
      title: "Collagen biostimulators",
      summary:
        "Stimulates natural collagen synthesis to gradually restore skin firmness.",
      placeholderLabel: "Collagen biostimulators",
      keywords: ["collagen", "biostimulator", "laxity", "firmness", "skin"],
    },
    {
      slug: "lifting-facial",
      specialtyId: "cirugia-maxilofacial",
      title: "Facelift surgery",
      summary:
        "Repositions deep facial and neck tissues for rested, harmonious rejuvenation.",
      placeholderLabel: "Facelift surgery",
      keywords: ["facelift", "lifting", "neck", "rejuvenation", "sagging"],
    },
    {
      slug: "blefaroplastia",
      specialtyId: "cirugia-maxilofacial",
      title: "Upper & lower blepharoplasty",
      summary:
        "Removes excess eyelid skin and under-eye bags to brighten your gaze.",
      placeholderLabel: "Blepharoplasty",
      keywords: ["blepharoplasty", "eyelids", "bags", "eyes", "hollows"],
    },
    {
      slug: "lipopapada-marcacion-mandibular",
      specialtyId: "cirugia-maxilofacial",
      title: "Chin liposuction & jawline contouring",
      summary:
        "Refines submental fullness and defines a clean, balanced mandibular contour.",
      placeholderLabel: "Chin & jawline contouring",
      keywords: ["chin", "double chin", "jawline", "neck", "profile"],
    },
    {
      slug: "bichectomia",
      specialtyId: "cirugia-maxilofacial",
      title: "Buccal fat removal (Bichectomy)",
      summary:
        "Refines cheek contour through selective intraoral assessment with no visible scars.",
      placeholderLabel: "Bichectomy",
      keywords: ["bichectomy", "buccal", "cheeks", "slimming"],
    },
    {
      slug: "afinamiento-facial",
      specialtyId: "cirugia-maxilofacial",
      title: "Facial slimming",
      summary:
        "Balances mid and lower facial contours tailored to your bone structure.",
      placeholderLabel: "Facial slimming",
      keywords: ["slimming", "contouring", "masseter", "jawline", "face"],
    },
    {
      slug: "reduccion-con-enzimas",
      specialtyId: "calidad-piel",
      title: "Recombinant enzyme reduction",
      summary:
        "Targeted enzymatic protocols for localized fullness, mild laxity, and fibrosis.",
      placeholderLabel: "Enzyme reduction",
      keywords: ["enzymes", "localized fat", "fibrosis", "laxity"],
    },
    {
      slug: "tratamientos-de-piel",
      specialtyId: "calidad-piel",
      title: "Advanced skin treatments",
      summary:
        "Deep hydration, smoother texture, and healthy glow through medical protocols.",
      placeholderLabel: "Skin treatments",
      keywords: ["skin", "glow", "hydration", "pores", "spots"],
    },
    {
      slug: "retiro-de-cicatrices",
      specialtyId: "calidad-piel",
      title: "Scar revision & removal",
      summary:
        "Progressive clinical improvement of facial or body scar texture and appearance.",
      placeholderLabel: "Scar revision",
      keywords: ["scars", "scar", "acne", "marks", "revision"],
    },
    {
      slug: "liposuccion-360",
      specialtyId: "cirugia-corporal",
      title: "360 liposuction",
      summary:
        "Comprehensive sculpting of abdomen, waist, and back for balanced proportions.",
      placeholderLabel: "360 liposuction",
      keywords: ["liposuction", "360", "waist", "abdomen", "body"],
    },
    {
      slug: "lipotransferencia",
      specialtyId: "cirugia-corporal",
      title: "Fat transfer (Lipotransfer)",
      summary:
        "Restores natural body contour and volume using purified autologous tissue.",
      placeholderLabel: "Fat transfer",
      keywords: ["lipotransfer", "fat transfer", "gluteal", "body"],
    },
    {
      slug: "implantes-de-mamas",
      specialtyId: "cirugia-corporal",
      title: "Breast augmentation implants",
      summary:
        "Customized breast enhancement planned around your frame and harmony.",
      placeholderLabel: "Breast implants",
      keywords: ["breast", "implants", "augmentation", "chest"],
    },
    {
      slug: "ginecomastia",
      specialtyId: "cirugia-corporal",
      title: "Gynecomastia surgery",
      summary:
        "Surgical refinement of the male chest contour for a firmer profile.",
      placeholderLabel: "Gynecomastia",
      keywords: ["gynecomastia", "male chest", "pectoral", "men"],
    },
    {
      slug: "abdominoplastia",
      specialtyId: "cirugia-corporal",
      title: "Abdominoplasty",
      summary:
        "Restores abdominal wall firmness and removes excess skin safely.",
      placeholderLabel: "Abdominoplasty",
      keywords: ["abdominoplasty", "tummy tuck", "abdomen", "body"],
    },
  ],
};
