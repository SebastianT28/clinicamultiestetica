import { HomeView } from "@/components/home/home-view";
import { CLINIC_SERVICES, SITE_CONFIG } from "@/config/site";

export default async function HomePage() {
  "use cache";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `${SITE_CONFIG.url}/#doctora`,
        name: SITE_CONFIG.founderName,
        alternateName: SITE_CONFIG.brandName,
        url: SITE_CONFIG.url,
        image: `${SITE_CONFIG.url}/brand/logo-og-dra-gabriela.jpg`,
        jobTitle: SITE_CONFIG.founderRoleEs,
        telephone: SITE_CONFIG.whatsappDisplay,
        email: SITE_CONFIG.contactEmail,
        medicalSpecialty: ["Maxillofacial", "PlasticSurgery"],
        worksFor: {
          "@id": `${SITE_CONFIG.url}/#clinic`,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address.street,
          addressLocality: SITE_CONFIG.address.district,
          addressRegion: SITE_CONFIG.address.city,
          addressCountry: SITE_CONFIG.address.countryCode,
        },
      },
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_CONFIG.url}/#clinic`,
        name: SITE_CONFIG.secondaryBrandName,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/brand/logo-horizontal-dra-gabriela.png`,
        image: `${SITE_CONFIG.url}/brand/logo-og-dra-gabriela.jpg`,
        telephone: SITE_CONFIG.whatsappDisplay,
        email: SITE_CONFIG.contactEmail,
        founder: {
          "@id": `${SITE_CONFIG.url}/#doctora`,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address.street,
          addressLocality: SITE_CONFIG.address.district,
          addressRegion: SITE_CONFIG.address.city,
          addressCountry: SITE_CONFIG.address.countryCode,
        },
        availableService: CLINIC_SERVICES.map((svc) => ({
          "@type": "MedicalProcedure",
          name: svc.nameEs,
        })),
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
