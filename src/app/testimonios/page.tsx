import type { Metadata } from "next";
import { TestimonialsView } from "@/components/testimonials/testimonials-view";
import { CLINIC_SERVICES, SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Testimonios y Casos Clínicos | Antes y Después",
  description:
    "Explora los casos clínicos y resultados de antes y después en armonización facial, cirugía maxilofacial y cirugía estética corporal de la Dra. Gabriela Delgado y Clínica Multiestética en Arequipa.",
  alternates: {
    canonical: "/testimonios",
  },
  openGraph: {
    title: "Testimonios y Casos Clínicos | Dra. Gabriela Delgado",
    description:
      "Resultados naturales y armónicos de antes y después en nuestros 16 tratamientos médicos y quirúrgicos en Arequipa.",
    url: `${SITE_CONFIG.url}/testimonios`,
    type: "website",
  },
};

export default function TestimoniosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_CONFIG.url}/testimonios#webpage`,
        url: `${SITE_CONFIG.url}/testimonios`,
        name: "Testimonios y Casos Clínicos | Dra. Gabriela Delgado",
        description:
          "Galería clínica de resultados de antes y después por tratamiento realizada por la Dra. Gabriela Delgado Silva y el staff de Clínica Multiestética.",
        isPartOf: {
          "@id": `${SITE_CONFIG.url}/#website`,
        },
        about: CLINIC_SERVICES.map((service) => ({
          "@type": "MedicalProcedure",
          name: service.nameEs,
          url: `${SITE_CONFIG.url}/servicios#${service.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_CONFIG.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Testimonios",
            item: `${SITE_CONFIG.url}/testimonios`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TestimonialsView />
    </>
  );
}
