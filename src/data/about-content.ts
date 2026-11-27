import type { Locale } from "@/config/site";
import type { SpecialtyUnitId } from "@/data/services-content";

export type BracketZone = "midface" | "jawline" | "skin" | "body";

export interface AboutSpecializationItem {
  id: SpecialtyUnitId;
  title: string;
  description: string;
  linkLabel: string;
  placeholderTitle: string;
  placeholderSubtitle: string;
  bracketZone: BracketZone;
}

export interface AboutMetricItem {
  value: string;
  label: string;
}

export interface AboutPillarItem {
  id: string;
  title: string;
  description: string;
}

export interface AboutPageDictionary {
  hero: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    portraitPlaceholder: string;
  };
  story: {
    motto: string;
    paragraphs: string[];
    quote: string;
    quoteAuthor: string;
    metrics: AboutMetricItem[];
  };
  specialization: {
    heading: string;
    exploreAllCta: string;
    items: AboutSpecializationItem[];
  };
  pillars: {
    items: AboutPillarItem[];
  };
  closing: {
    title: string;
    subtitle: string;
    primaryCta: string;
    whatsappCta: string;
  };
}

export const ABOUT_PAGE_CONTENT: Record<Locale, AboutPageDictionary> = {
  es: {
    hero: {
      title: "Dra. Gabriela Delgado Silva",
      subtitle:
        "Más de 18 años dedicados a la armonización facial y cirugía maxilofacial con precisión anatómica, ética médica y calidez humana.",
      ctaLabel: "Agendar cita",
      portraitPlaceholder: "Retrato principal · Dra. Gabriela Delgado Silva",
    },
    story: {
      motto:
        "«Nacimos de un sueño. Crecimos con valentía. Existimos para transformar vidas.»",
      paragraphs: [
        "Detrás de mi práctica médica y de Clínica Multiestética está la historia de una mujer que creyó en sí misma y convirtió los desafíos personales en el motor para volver a empezar. Impulsada por mis tres hijos, mi mayor inspiración diaria, dediqué cada etapa a seguir estudiando, perfeccionarme internacionalmente y ejercer con excelencia.",
        "Hoy lidero Clínica Multiestética en Arequipa junto a un equipo de médicos especialistas que comparten una misma convicción: escucharte sin prisas y cuidar cada detalle para que te sientas segura, tranquila y feliz con tu propia imagen.",
      ],
      quote:
        "«Mi mayor satisfacción no es solamente ver una transformación física, sino saber que detrás de ella hay una persona que vuelve a sonreír, recupera su seguridad y se siente feliz consigo misma.»",
      quoteAuthor: "Dra. Gabriela Delgado Silva",
      metrics: [
        {
          value: "+18",
          label: "Años de trayectoria profesional",
        },
        {
          value: "16",
          label: "Procedimientos especializados",
        },
        {
          value: "Arequipa",
          label: "Sede Cayma · Clínica Multiestética",
        },
      ],
    },
    specialization: {
      heading: "Mi Especialización",
      exploreAllCta: "Explorar servicios",
      items: [
        {
          id: "armonizacion-inyectables",
          title: "Armonización facial e inyectables",
          description:
            "Ácido hialurónico, toxina botulínica y soporte estructural sutil que respeta tus gestos naturales.",
          linkLabel: "Ver tratamientos",
          placeholderTitle: "Enfoque anatómico · Tercio medio y labios",
          placeholderSubtitle: "Armonización facial con proporción natural",
          bracketZone: "midface",
        },
        {
          id: "cirugia-maxilofacial",
          title: "Cirugía maxilofacial y perfilamiento",
          description:
            "Definición mandibular, lipopapada, bichectomía y blefaroplastia planificadas con precisión milimétrica.",
          linkLabel: "Ver tratamientos",
          placeholderTitle: "Enfoque anatómico · Contorno mandibular",
          placeholderSubtitle: "Cirugía facial y maxilofacial de precisión",
          bracketZone: "jawline",
        },
        {
          id: "calidad-piel",
          title: "Calidad de piel y bioestimulación",
          description:
            "Bioestimuladores de colágeno, enzimas recombinantes y manejo clínico de cicatrices para una piel firme.",
          linkLabel: "Ver tratamientos",
          placeholderTitle: "Enfoque dérmico · Firmeza y textura",
          placeholderSubtitle: "Protocolos de colágeno y calidad de piel",
          bracketZone: "skin",
        },
        {
          id: "cirugia-corporal",
          title: "Equipo Clínica Multiestética",
          description:
            "Cirugía estética corporal realizada junto a nuestro staff de cirujanos especialistas bajo rigor clínico integral.",
          linkLabel: "Ver tratamientos",
          placeholderTitle: "Respaldo quirúrgico · Contorno corporal",
          placeholderSubtitle: "Staff de médicos especialistas en Arequipa",
          bracketZone: "body",
        },
      ],
    },
    pillars: {
      items: [
        {
          id: "armonia-natural",
          title: "Armonía natural",
          description:
            "Resultados sutiles y equilibrados que realzan tus rasgos propios sin cambiar quién eres.",
        },
        {
          id: "formacion-internacional",
          title: "Formación internacional",
          description:
            "Actualización científica constante en técnicas seguras e insumos médicos con registro sanitario.",
        },
        {
          id: "respaldo-clinica",
          title: "Respaldo Clínica Multiestética",
          description:
            "Acompañamiento cercano antes, durante y después de tu procedimiento en nuestra sede de Cayma, Arequipa.",
        },
      ],
    },
    closing: {
      title: "¿Lista para conversar sobre tu caso?",
      subtitle:
        "Agenda una cita personalizada conmigo y diseñemos juntos el plan ideal para ti con calma y confianza.",
      primaryCta: "Agendar cita",
      whatsappCta: "Hablar por WhatsApp",
    },
  },
  en: {
    hero: {
      title: "Dr. Gabriela Delgado Silva",
      subtitle:
        "Over 18 years dedicated to facial harmonization and maxillofacial surgery with anatomical precision, medical ethics, and human warmth.",
      ctaLabel: "Book appointment",
      portraitPlaceholder: "Editorial portrait · Dr. Gabriela Delgado Silva",
    },
    story: {
      motto:
        "“Born from a dream. Grown with courage. Here to transform lives.”",
      paragraphs: [
        "Behind my practice and Clínica Multiestética lies the story of a woman who believed in herself and turned life's challenges into a new beginning. Inspired every day by my three children, I dedicated each chapter to continuous international training and clinical excellence.",
        "Today I lead Clínica Multiestética in Arequipa alongside a team of specialist physicians united by one philosophy: listening without rush and caring for every detail so you feel confident, safe, and happy in your own skin.",
      ],
      quote:
        "“My greatest satisfaction is not just seeing a physical change, but knowing that behind it is someone smiling again, regaining confidence, and feeling genuinely happy with themselves.”",
      quoteAuthor: "Dr. Gabriela Delgado Silva",
      metrics: [
        {
          value: "+18",
          label: "Years of clinical experience",
        },
        {
          value: "16",
          label: "Specialized procedures",
        },
        {
          value: "Arequipa",
          label: "Cayma clinic · Clínica Multiestética",
        },
      ],
    },
    specialization: {
      heading: "My Specialization",
      exploreAllCta: "Explore services",
      items: [
        {
          id: "armonizacion-inyectables",
          title: "Facial harmonization & injectables",
          description:
            "Hyaluronic acid, botulinum toxin, and subtle structural support that preserves your natural expressions.",
          linkLabel: "View treatments",
          placeholderTitle: "Anatomical focus · Midface & lips",
          placeholderSubtitle: "Balanced facial harmonization",
          bracketZone: "midface",
        },
        {
          id: "cirugia-maxilofacial",
          title: "Maxillofacial surgery & contouring",
          description:
            "Jawline definition, chin liposuction, bichectomy, and blepharoplasty planned with millimeter precision.",
          linkLabel: "View treatments",
          placeholderTitle: "Anatomical focus · Jawline contour",
          placeholderSubtitle: "Precision facial & maxillofacial surgery",
          bracketZone: "jawline",
        },
        {
          id: "calidad-piel",
          title: "Skin quality & biostimulation",
          description:
            "Collagen biostimulators, recombinant enzymes, and clinical scar care for firmer, radiant skin.",
          linkLabel: "View treatments",
          placeholderTitle: "Dermal focus · Firmness & texture",
          placeholderSubtitle: "Collagen & skin quality protocols",
          bracketZone: "skin",
        },
        {
          id: "cirugia-corporal",
          title: "Clínica Multiestética Team",
          description:
            "Aesthetic body surgery performed alongside our specialist surgical staff under strict clinical safety standards.",
          linkLabel: "View treatments",
          placeholderTitle: "Surgical support · Body contouring",
          placeholderSubtitle: "Specialist medical staff in Arequipa",
          bracketZone: "body",
        },
      ],
    },
    pillars: {
      items: [
        {
          id: "armonia-natural",
          title: "Natural harmony",
          description:
            "Subtle, balanced outcomes designed to enhance your authentic features without changing who you are.",
        },
        {
          id: "formacion-internacional",
          title: "International training",
          description:
            "Continuous clinical education in safe, precise techniques and certified medical-grade supplies.",
        },
        {
          id: "respaldo-clinica",
          title: "Clínica Multiestética care",
          description:
            "Warm, attentive guidance before, during, and after your procedure at our Cayma clinic in Arequipa.",
        },
      ],
    },
    closing: {
      title: "Ready to talk about your goals?",
      subtitle:
        "Schedule a personalized appointment with me and let us design the right plan for you with clarity and care.",
      primaryCta: "Book appointment",
      whatsappCta: "Chat on WhatsApp",
    },
  },
};
