export type Locale = "es" | "en";

export type ServiceCategorySlug =
  | "cirugia-perfilamiento-facial"
  | "armonizacion-facial-piel"
  | "cirugia-estetica-corporal";

export interface ClinicServiceItem {
  slug: string;
  category: ServiceCategorySlug;
  nameEs: string;
  nameEn: string;
  specialistRole: "maxilofacial-armonizacion" | "cirugia-plastica-corporal";
}

export const SITE_CONFIG = {
  brandName: "Dra. Gabriela Delgado",
  secondaryBrandName: "Clínica Multiestética",
  founderName: "Dra. Gabriela Delgado Silva",
  founderRoleEs: "Cirujana Maxilofacial y Especialista en Armonización Facial",
  founderRoleEn: "Maxillofacial Surgeon & Facial Harmonization Specialist",
  yearsExperience: "+18",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dragabydelgado.com",
  secondaryDomain: "https://clinicamultiestetica.pe",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "51960928384",
  whatsappDisplay: "+51 960 928 384",
  contactEmail: "gads1989.28@gmail.com",
  address: {
    street: "Urb. León XIII K-8",
    district: "Cayma",
    city: "Arequipa",
    region: "Arequipa",
    country: "Perú",
    countryCode: "PE",
  },
  locales: ["es", "en"] as const,
  defaultLocale: "es" as Locale,
  slogans: {
    openingEs: "Nacimos de un sueño. Crecimos con valentía. Existimos para transformar vidas.",
    closingEs: "Donde la belleza encuentra su propósito y cada historia merece una nueva oportunidad.",
    founderQuoteEs:
      "Mi mayor satisfacción no es solamente ver una transformación física, sino saber que detrás de ella hay una persona que vuelve a sonreír, recupera su seguridad y se siente feliz consigo misma.",
  },
} as const;

export const CLINIC_SERVICES: ClinicServiceItem[] = [
  // Silo 1: Cirugía y Perfilamiento Facial / Maxilofacial (5)
  {
    slug: "lifting-facial",
    category: "cirugia-perfilamiento-facial",
    nameEs: "Lifting facial",
    nameEn: "Facelift Surgery",
    specialistRole: "maxilofacial-armonizacion",
  },
  {
    slug: "blefaroplastia",
    category: "cirugia-perfilamiento-facial",
    nameEs: "Blefaroplastia superior e inferior",
    nameEn: "Upper & Lower Blepharoplasty",
    specialistRole: "maxilofacial-armonizacion",
  },
  {
    slug: "afinamiento-facial",
    category: "cirugia-perfilamiento-facial",
    nameEs: "Afinamiento facial",
    nameEn: "Facial Slimming & Contouring",
    specialistRole: "maxilofacial-armonizacion",
  },
  {
    slug: "lipopapada-marcacion-mandibular",
    category: "cirugia-perfilamiento-facial",
    nameEs: "Liposucción de papada y marcación mandibular",
    nameEn: "Chin Liposuction & Jawline Contouring",
    specialistRole: "maxilofacial-armonizacion",
  },
  {
    slug: "bichectomia",
    category: "cirugia-perfilamiento-facial",
    nameEs: "Bichectomía",
    nameEn: "Buccal Fat Removal (Bichectomy)",
    specialistRole: "maxilofacial-armonizacion",
  },

  // Silo 2: Armonización Facial, Inyectables y Piel (6)
  {
    slug: "toxina-botulinica",
    category: "armonizacion-facial-piel",
    nameEs: "Toxina botulínica",
    nameEn: "Botulinum Toxin",
    specialistRole: "maxilofacial-armonizacion",
  },
  {
    slug: "acido-hialuronico",
    category: "armonizacion-facial-piel",
    nameEs: "Ácido hialurónico",
    nameEn: "Hyaluronic Acid Fillers",
    specialistRole: "maxilofacial-armonizacion",
  },
  {
    slug: "bioestimulador-colageno",
    category: "armonizacion-facial-piel",
    nameEs: "Bioestimulador de colágeno",
    nameEn: "Collagen Biostimulators",
    specialistRole: "maxilofacial-armonizacion",
  },
  {
    slug: "reduccion-con-enzimas",
    category: "armonizacion-facial-piel",
    nameEs: "Tratamientos de reducción con enzimas",
    nameEn: "Recombinant Enzyme Reduction",
    specialistRole: "maxilofacial-armonizacion",
  },
  {
    slug: "tratamientos-de-piel",
    category: "armonizacion-facial-piel",
    nameEs: "Tratamientos de piel",
    nameEn: "Advanced Skin Quality Treatments",
    specialistRole: "maxilofacial-armonizacion",
  },
  {
    slug: "retiro-de-cicatrices",
    category: "armonizacion-facial-piel",
    nameEs: "Retiro de cicatrices",
    nameEn: "Scar Revision & Removal",
    specialistRole: "maxilofacial-armonizacion",
  },

  // Silo 3: Cirugía Estética Corporal (5)
  {
    slug: "liposuccion-360",
    category: "cirugia-estetica-corporal",
    nameEs: "Liposucción 360",
    nameEn: "360 Liposuction",
    specialistRole: "cirugia-plastica-corporal",
  },
  {
    slug: "lipotransferencia",
    category: "cirugia-estetica-corporal",
    nameEs: "Lipotransferencia",
    nameEn: "Fat Transfer (Lipotransfer)",
    specialistRole: "cirugia-plastica-corporal",
  },
  {
    slug: "implantes-de-mamas",
    category: "cirugia-estetica-corporal",
    nameEs: "Implantes de mamas",
    nameEn: "Breast Augmentation Implants",
    specialistRole: "cirugia-plastica-corporal",
  },
  {
    slug: "ginecomastia",
    category: "cirugia-estetica-corporal",
    nameEs: "Ginecomastia",
    nameEn: "Gynecomastia Surgery",
    specialistRole: "cirugia-plastica-corporal",
  },
  {
    slug: "abdominoplastia",
    category: "cirugia-estetica-corporal",
    nameEs: "Abdominoplastias",
    nameEn: "Abdominoplasty (Tummy Tuck)",
    specialistRole: "cirugia-plastica-corporal",
  },
];

export function buildWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    "Hola Dra. Gabriela y equipo de Clínica Multiestética, deseo recibir información y agendar una valoración médica.";
  const encoded = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
}
