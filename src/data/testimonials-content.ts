import type { Locale } from "@/config/site";

export interface PatientCaseItem {
  id: string;
  serviceSlug: string;
  tagLabel: string;
  afterPlaceholderTitle: string;
  beforePlaceholderTitle: string;
}

export interface TestimonialsPageDictionary {
  heading: string;
  desktopHint: string;
  mobileHint: string;
  afterBadge: string;
  beforeBadge: string;
  afterSlotPrefix: string;
  beforeSlotPrefix: string;
  cardAriaActionBefore: string;
  cardAriaActionAfter: string;
  cases: PatientCaseItem[];
}

export const TESTIMONIALS_PAGE_CONTENT: Record<
  Locale,
  TestimonialsPageDictionary
> = {
  es: {
    heading: "Testimonios",
    desktopHint:
      "Casos clínicos de nuestros pacientes. Pasa el cursor sobre una foto para ver el antes y después.",
    mobileHint:
      "Casos clínicos de nuestros pacientes. Desplázate hacia cada foto para ver el antes y después.",
    afterBadge: "Después",
    beforeBadge: "Antes",
    afterSlotPrefix: "Resultado clínico · Después",
    beforeSlotPrefix: "Registro inicial · Antes",
    cardAriaActionBefore: "ver el antes",
    cardAriaActionAfter: "ver el después",
    cases: [
      {
        id: "caso-acido-hialuronico",
        serviceSlug: "acido-hialuronico",
        tagLabel: "Ácido hialurónico",
        afterPlaceholderTitle: "Armonización con ácido hialurónico",
        beforePlaceholderTitle: "Evaluación previa · Ácido hialurónico",
      },
      {
        id: "caso-toxina-botulinica",
        serviceSlug: "toxina-botulinica",
        tagLabel: "Toxina botulínica",
        afterPlaceholderTitle: "Aplicación de toxina botulínica",
        beforePlaceholderTitle: "Evaluación previa · Toxina botulínica",
      },
      {
        id: "caso-bioestimulador-colageno",
        serviceSlug: "bioestimulador-colageno",
        tagLabel: "Bioestimulador de colágeno",
        afterPlaceholderTitle: "Firmeza con bioestimulador de colágeno",
        beforePlaceholderTitle: "Evaluación previa · Bioestimulador",
      },
      {
        id: "caso-lipopapada-mandibular",
        serviceSlug: "lipopapada-marcacion-mandibular",
        tagLabel: "Lipopapada y marcación mandibular",
        afterPlaceholderTitle: "Definición submentoniana y mandibular",
        beforePlaceholderTitle: "Evaluación previa · Contorno mandibular",
      },
      {
        id: "caso-bichectomia",
        serviceSlug: "bichectomia",
        tagLabel: "Bichectomía",
        afterPlaceholderTitle: "Estilización de mejillas · Bichectomía",
        beforePlaceholderTitle: "Evaluación previa · Bichectomía",
      },
      {
        id: "caso-blefaroplastia",
        serviceSlug: "blefaroplastia",
        tagLabel: "Blefaroplastia",
        afterPlaceholderTitle: "Rejuvenecimiento ocular · Blefaroplastia",
        beforePlaceholderTitle: "Evaluación previa · Blefaroplastia",
      },
      {
        id: "caso-lifting-facial",
        serviceSlug: "lifting-facial",
        tagLabel: "Lifting facial",
        afterPlaceholderTitle: "Reposicionamiento facial · Lifting",
        beforePlaceholderTitle: "Evaluación previa · Lifting facial",
      },
      {
        id: "caso-afinamiento-facial",
        serviceSlug: "afinamiento-facial",
        tagLabel: "Afinamiento facial",
        afterPlaceholderTitle: "Proporción de tercio inferior · Afinamiento",
        beforePlaceholderTitle: "Evaluación previa · Afinamiento facial",
      },
      {
        id: "caso-reduccion-enzimas",
        serviceSlug: "reduccion-con-enzimas",
        tagLabel: "Reducción con enzimas",
        afterPlaceholderTitle: "Protocolo con enzimas recombinantes",
        beforePlaceholderTitle: "Evaluación previa · Enzimas recombinantes",
      },
      {
        id: "caso-tratamientos-piel",
        serviceSlug: "tratamientos-de-piel",
        tagLabel: "Tratamientos de piel",
        afterPlaceholderTitle: "Luminosidad y textura · Calidad de piel",
        beforePlaceholderTitle: "Evaluación previa · Calidad de piel",
      },
      {
        id: "caso-retiro-cicatrices",
        serviceSlug: "retiro-de-cicatrices",
        tagLabel: "Retiro de cicatrices",
        afterPlaceholderTitle: "Atenuación clínica de cicatrices",
        beforePlaceholderTitle: "Evaluación previa · Cicatrices",
      },
      {
        id: "caso-liposuccion-360",
        serviceSlug: "liposuccion-360",
        tagLabel: "Liposucción 360",
        afterPlaceholderTitle: "Contorno corporal · Liposucción 360",
        beforePlaceholderTitle: "Evaluación previa · Liposucción 360",
      },
      {
        id: "caso-lipotransferencia",
        serviceSlug: "lipotransferencia",
        tagLabel: "Lipotransferencia",
        afterPlaceholderTitle: "Armonización corporal · Lipotransferencia",
        beforePlaceholderTitle: "Evaluación previa · Lipotransferencia",
      },
      {
        id: "caso-implantes-mamas",
        serviceSlug: "implantes-de-mamas",
        tagLabel: "Implantes de mamas",
        afterPlaceholderTitle: "Proporción torácica · Implantes de mamas",
        beforePlaceholderTitle: "Evaluación previa · Implantes de mamas",
      },
      {
        id: "caso-ginecomastia",
        serviceSlug: "ginecomastia",
        tagLabel: "Ginecomastia",
        afterPlaceholderTitle: "Definición pectoral · Ginecomastia",
        beforePlaceholderTitle: "Evaluación previa · Ginecomastia",
      },
      {
        id: "caso-abdominoplastia",
        serviceSlug: "abdominoplastia",
        tagLabel: "Abdominoplastias",
        afterPlaceholderTitle: "Firmeza abdominal · Abdominoplastia",
        beforePlaceholderTitle: "Evaluación previa · Abdominoplastia",
      },
    ],
  },
  en: {
    heading: "Testimonials",
    desktopHint:
      "Real clinical cases from our patients. Hover over a photo to see before and after.",
    mobileHint:
      "Real clinical cases from our patients. Scroll onto each photo to see before and after.",
    afterBadge: "After",
    beforeBadge: "Before",
    afterSlotPrefix: "Clinical result · After",
    beforeSlotPrefix: "Initial record · Before",
    cardAriaActionBefore: "show before",
    cardAriaActionAfter: "show after",
    cases: [
      {
        id: "caso-acido-hialuronico",
        serviceSlug: "acido-hialuronico",
        tagLabel: "Hyaluronic acid",
        afterPlaceholderTitle: "Hyaluronic acid harmonization",
        beforePlaceholderTitle: "Initial assessment · Hyaluronic acid",
      },
      {
        id: "caso-toxina-botulinica",
        serviceSlug: "toxina-botulinica",
        tagLabel: "Botulinum toxin",
        afterPlaceholderTitle: "Botulinum toxin treatment",
        beforePlaceholderTitle: "Initial assessment · Botulinum toxin",
      },
      {
        id: "caso-bioestimulador-colageno",
        serviceSlug: "bioestimulador-colageno",
        tagLabel: "Collagen biostimulators",
        afterPlaceholderTitle: "Skin firmness · Collagen biostimulator",
        beforePlaceholderTitle: "Initial assessment · Biostimulator",
      },
      {
        id: "caso-lipopapada-mandibular",
        serviceSlug: "lipopapada-marcacion-mandibular",
        tagLabel: "Chin lipo & jawline",
        afterPlaceholderTitle: "Submental & jawline contouring",
        beforePlaceholderTitle: "Initial assessment · Jawline contour",
      },
      {
        id: "caso-bichectomia",
        serviceSlug: "bichectomia",
        tagLabel: "Bichectomy",
        afterPlaceholderTitle: "Cheek refinement · Bichectomy",
        beforePlaceholderTitle: "Initial assessment · Bichectomy",
      },
      {
        id: "caso-blefaroplastia",
        serviceSlug: "blefaroplastia",
        tagLabel: "Blepharoplasty",
        afterPlaceholderTitle: "Eyelid rejuvenation · Blepharoplasty",
        beforePlaceholderTitle: "Initial assessment · Blepharoplasty",
      },
      {
        id: "caso-lifting-facial",
        serviceSlug: "lifting-facial",
        tagLabel: "Facelift surgery",
        afterPlaceholderTitle: "Deep facial repositioning · Facelift",
        beforePlaceholderTitle: "Initial assessment · Facelift",
      },
      {
        id: "caso-afinamiento-facial",
        serviceSlug: "afinamiento-facial",
        tagLabel: "Facial slimming",
        afterPlaceholderTitle: "Lower-third balance · Facial slimming",
        beforePlaceholderTitle: "Initial assessment · Facial slimming",
      },
      {
        id: "caso-reduccion-enzimas",
        serviceSlug: "reduccion-con-enzimas",
        tagLabel: "Enzyme reduction",
        afterPlaceholderTitle: "Recombinant enzyme protocol",
        beforePlaceholderTitle: "Initial assessment · Enzymes",
      },
      {
        id: "caso-tratamientos-piel",
        serviceSlug: "tratamientos-de-piel",
        tagLabel: "Skin treatments",
        afterPlaceholderTitle: "Glow & texture · Skin quality",
        beforePlaceholderTitle: "Initial assessment · Skin quality",
      },
      {
        id: "caso-retiro-cicatrices",
        serviceSlug: "retiro-de-cicatrices",
        tagLabel: "Scar revision",
        afterPlaceholderTitle: "Progressive clinical scar care",
        beforePlaceholderTitle: "Initial assessment · Scar care",
      },
      {
        id: "caso-liposuccion-360",
        serviceSlug: "liposuccion-360",
        tagLabel: "360 liposuction",
        afterPlaceholderTitle: "Body sculpting · 360 liposuction",
        beforePlaceholderTitle: "Initial assessment · 360 liposuction",
      },
      {
        id: "caso-lipotransferencia",
        serviceSlug: "lipotransferencia",
        tagLabel: "Fat transfer",
        afterPlaceholderTitle: "Body contour · Fat transfer",
        beforePlaceholderTitle: "Initial assessment · Fat transfer",
      },
      {
        id: "caso-implantes-mamas",
        serviceSlug: "implantes-de-mamas",
        tagLabel: "Breast implants",
        afterPlaceholderTitle: "Balanced proportion · Breast implants",
        beforePlaceholderTitle: "Initial assessment · Breast implants",
      },
      {
        id: "caso-ginecomastia",
        serviceSlug: "ginecomastia",
        tagLabel: "Gynecomastia",
        afterPlaceholderTitle: "Chest definition · Gynecomastia",
        beforePlaceholderTitle: "Initial assessment · Gynecomastia",
      },
      {
        id: "caso-abdominoplastia",
        serviceSlug: "abdominoplastia",
        tagLabel: "Abdominoplasty",
        afterPlaceholderTitle: "Abdominal firmness · Abdominoplasty",
        beforePlaceholderTitle: "Initial assessment · Abdominoplasty",
      },
    ],
  },
};
