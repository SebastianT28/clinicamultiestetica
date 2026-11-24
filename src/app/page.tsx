import { HomeView } from "@/components/home/home-view";
import { CLINIC_SERVICES, SITE_CONFIG } from "@/config/site";
import { HOME_CONTENT } from "@/data/home-content";

export default async function HomePage() {
  "use cache";
  const faqEntities = HOME_CONTENT.es.faqSection.items.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_CONFIG.url}/#clinic`,
        name: SITE_CONFIG.brandName,
        url: SITE_CONFIG.url,
        telephone: SITE_CONFIG.whatsappDisplay,
        email: SITE_CONFIG.contactEmail,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address.street,
          addressLocality: SITE_CONFIG.address.district,
          addressRegion: SITE_CONFIG.address.city,
          addressCountry: SITE_CONFIG.address.countryCode,
        },
        medicalSpecialty: ["PlasticSurgery", "Maxillofacial"],
        availableService: CLINIC_SERVICES.map((svc) => ({
          "@type": "MedicalProcedure",
          name: svc.nameEs,
        })),
        founder: {
          "@id": `${SITE_CONFIG.url}/#founder`,
        },
      },
      {
        "@type": "Physician",
        "@id": `${SITE_CONFIG.url}/#founder`,
        name: SITE_CONFIG.founderName,
        jobTitle: SITE_CONFIG.founderRoleEs,
        worksFor: {
          "@id": `${SITE_CONFIG.url}/#clinic`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_CONFIG.url}/#faq`,
        mainEntity: faqEntities,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeView />
    </>
  );
}
