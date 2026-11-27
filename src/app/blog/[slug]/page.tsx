import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticleView } from "@/components/blog/blog-article-view";
import { SITE_CONFIG } from "@/config/site";
import {
  BLOG_SLUGS,
  getBlogArticleBySlug,
  type BlogSlug,
} from "@/data/blog-content";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug("es", slug);

  if (!article) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: article.title,
    description: article.standfirst,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Dra. Gabriela Delgado`,
      description: article.standfirst,
      url: `${SITE_CONFIG.url}/blog/${article.slug}`,
      type: "article",
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug("es", slug);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${SITE_CONFIG.url}/blog/${article.slug}#webpage`,
        url: `${SITE_CONFIG.url}/blog/${article.slug}`,
        name: article.title,
        description: article.standfirst,
        mainEntity: {
          "@type": "BlogPosting",
          headline: article.title,
          description: article.standfirst,
          author: {
            "@type": "Physician",
            name: SITE_CONFIG.founderName,
            jobTitle: SITE_CONFIG.founderRoleEs,
            url: SITE_CONFIG.url,
          },
          publisher: {
            "@type": "MedicalClinic",
            name: SITE_CONFIG.secondaryBrandName,
            url: SITE_CONFIG.url,
          },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
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
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: `${SITE_CONFIG.url}/blog/${article.slug}`,
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
      <BlogArticleView slug={article.slug as BlogSlug} />
    </>
  );
}
