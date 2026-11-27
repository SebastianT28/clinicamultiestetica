import type { Metadata } from "next";
import { AboutView } from "@/components/about/about-view";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: "¿Quién soy? | Dra. Gabriela Delgado Silva",
  description:
    "Conoce la historia, formación internacional y filosofía médica de la Dra. Gabriela Delgado Silva (+18 años de experiencia), Cirujana Maxilofacial, Especialista en Armonización Facial y Directora Médica de Clínica Multiestética en Arequipa.",
  alternates: {
    canonical: "/quien-soy",
  },
  openGraph: {
    title: "¿Quién soy? | Dra. Gabriela Delgado Silva · Clínica Multiestética",
    description:
      "Más de 18 años dedicados a la armonización facial y cirugía maxilofacial con precisión anatómica, ética y calidez humana en Arequipa.",
    url: `${SITE_CONFIG.url}/quien-soy`,
    type: "profile",
  },
};

export default function QuienSoyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${SITE_CONFIG.url}/quien-soy#webpage`,
        url: `${SITE_CONFIG.url}/quien-soy`,
        name: "¿Quién soy? | Dra. Gabriela Delgado Silva",
        description:
          "Trayectoria, especialización y filosofía médica de la Dra. Gabriela Delgado Silva en Arequipa, Perú.",
        mainEntity: {
          "@type": "Physician",
          "@id": `${SITE_CONFIG.url}/#physician`,
          name: SITE_CONFIG.founderName,
          jobTitle: SITE_CONFIG.founderRoleEs,
          worksFor: {
            "@type": "MedicalClinic",
            name: SITE_CONFIG.secondaryBrandName,
            address: {
              "@type": "PostalAddress",
              streetAddress: SITE_CONFIG.address.street,
              addressLocality: SITE_CONFIG.address.district,
              addressRegion: SITE_CONFIG.address.region,
              addressCountry: SITE_CONFIG.address.countryCode,
            },
          },
        },
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
            name: "¿Quién soy?",
            item: `${SITE_CONFIG.url}/quien-soy`,
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
      <AboutView />
    </>
  );
}
