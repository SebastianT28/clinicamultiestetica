import type { Metadata } from "next";
import { ServicesView } from "@/components/services/services-view";
import { CLINIC_SERVICES, SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "Especialidades y Servicios Médicos en Arequipa",
  description:
    "Explora las 4 especialidades médicas y 16 procedimientos de la Dra. Gabriela Delgado Silva (+18 años de experiencia) y Clínica Multiestética en Arequipa: armonización facial, cirugía maxilofacial, piel y cirugía estética corporal.",
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Especialidades y Servicios | Dra. Gabriela Delgado · Clínica Multiestética",
    description:
      "Armonización facial, cirugía facial y maxilofacial, bioestimuladores de colágeno y cirugía estética corporal en Cayma, Arequipa.",
    url: `${SITE_CONFIG.url}/servicios`,
    images: [
      {
        url: "/brand/logo-og-dra-gabriela.jpg",
        width: 1200,
        height: 630,
        alt: "Especialidades Dra. Gabriela Delgado · Clínica Multiestética",
      },
    ],
  },
};

export default async function ServiciosPage() {
  "use cache";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${SITE_CONFIG.url}/servicios#webpage`,
        url: `${SITE_CONFIG.url}/servicios`,
        name: "Especialidades y Servicios Médicos | Dra. Gabriela Delgado",
        about: {
          "@id": `${SITE_CONFIG.url}/#doctora`,
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: CLINIC_SERVICES.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "MedicalProcedure",
              name: service.nameEs,
              url: `${SITE_CONFIG.url}/servicios#${service.slug}`,
            },
          })),
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicesView />
    </>
  );
}
