import type { Metadata } from "next";
import { BlogIndexView } from "@/components/blog/blog-index-view";
import { SITE_CONFIG } from "@/config/site";
import { BLOG_ARTICLES } from "@/data/blog-content";

export const metadata: Metadata = {
  title: "Blog Médico de Armonización Facial y Cirugía Estética",
  description:
    "Guías médicas escritas por la Dra. Gabriela Delgado Silva y el equipo de Clínica Multiestética en Arequipa sobre toxina botulínica, ácido hialurónico, blefaroplastia, lipopapada y contorno corporal.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog Médico | Dra. Gabriela Delgado · Clínica Multiestética",
    description:
      "Información clara, honesta y con respaldo médico sobre armonización facial, cirugía maxilofacial y estética corporal en Arequipa.",
    url: `${SITE_CONFIG.url}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
  const articles = BLOG_ARTICLES.es;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${SITE_CONFIG.url}/blog#blog`,
        url: `${SITE_CONFIG.url}/blog`,
        name: "Blog Médico | Dra. Gabriela Delgado",
        description:
          "Artículos educativos sobre armonización facial, cirugía maxilofacial, calidad de piel y cirugía estética corporal.",
        publisher: {
          "@type": "MedicalClinic",
          name: SITE_CONFIG.secondaryBrandName,
          url: SITE_CONFIG.url,
        },
        blogPost: articles.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url: `${SITE_CONFIG.url}/blog/${post.slug}`,
          author: {
            "@type": "Physician",
            name: SITE_CONFIG.founderName,
          },
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
            name: "Blog",
            item: `${SITE_CONFIG.url}/blog`,
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
      <BlogIndexView />
    </>
  );
}
