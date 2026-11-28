import { HomeView } from "@/components/home/home-view";
import { CLINIC_SERVICES, SITE_CONFIG } from "@/config/site";
import { HOME_CONTENT } from "@/data/home-content";

export default async function HomePage() {
  "use cache";

  const facialProcedures = CLINIC_SERVICES.filter(
    (svc) => svc.specialistRole === "maxilofacial-armonizacion"
  ).map((svc) => svc.nameEs);

  const areaServedEntities = SITE_CONFIG.areasServed.map((place) => ({
    "@type": place === "Perú" ? "Country" : "City",
    name: place,
  }));

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `${SITE_CONFIG.url}/#doctora`,
        name: SITE_CONFIG.founderName,
        alternateName: [
          SITE_CONFIG.brandName,
          "Dra. Gabriela Delgado Cirujana Facial Arequipa",
        ],
        description:
          "Cirujana facial, maxilofacial y especialista en armonización facial en Cayma, Arequipa, con más de 18 años de experiencia profesional y preparación internacional.",
        url: SITE_CONFIG.url,
        image: `${SITE_CONFIG.url}/images/doctora/dra-hero-1.jpg`,
        jobTitle: SITE_CONFIG.founderRoleEs,
        telephone: SITE_CONFIG.whatsappDisplay,
        email: SITE_CONFIG.contactEmail,
        medicalSpecialty: ["Maxillofacial", "PlasticSurgery"],
        knowsAbout: facialProcedures,
        areaServed: areaServedEntities,
        worksFor: {
          "@id": `${SITE_CONFIG.url}/#clinic`,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address.street,
          addressLocality: SITE_CONFIG.address.district,
          addressRegion: SITE_CONFIG.address.city,
          postalCode: SITE_CONFIG.address.postalCode,
          addressCountry: SITE_CONFIG.address.countryCode,
        },
      },
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_CONFIG.url}/#clinic`,
        name: `${SITE_CONFIG.brandName} · ${SITE_CONFIG.secondaryBrandName}`,
        alternateName: SITE_CONFIG.secondaryBrandName,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/brand/logo-horizontal-dra-gabriela.png`,
        image: `${SITE_CONFIG.url}/images/doctora/dra-especializacion.jpg`,
        telephone: SITE_CONFIG.whatsappDisplay,
        email: SITE_CONFIG.contactEmail,
        hasMap: SITE_CONFIG.address.googleMapsUrl,
        founder: {
          "@id": `${SITE_CONFIG.url}/#doctora`,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE_CONFIG.address.street,
          addressLocality: SITE_CONFIG.address.district,
          addressRegion: SITE_CONFIG.address.city,
          postalCode: SITE_CONFIG.address.postalCode,
          addressCountry: SITE_CONFIG.address.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE_CONFIG.address.latitude,
          longitude: SITE_CONFIG.address.longitude,
        },
        areaServed: areaServedEntities,
        availableService: CLINIC_SERVICES.map((svc) => ({
          "@type": "MedicalProcedure",
          name: svc.nameEs,
          url: `${SITE_CONFIG.url}/servicios#${svc.slug}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_CONFIG.url}/#faq`,
        mainEntity: HOME_CONTENT.es.faqSection.items.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
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
