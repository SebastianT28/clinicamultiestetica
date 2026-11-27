"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GreyPlaceholder } from "@/components/ui/grey-placeholder";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/icons/clinic-icons";
import { buildWhatsAppUrl } from "@/config/site";
import { BLOG_ARTICLES, BLOG_UI_CONTENT } from "@/data/blog-content";
import { useAppInteraction } from "@/lib/i18n-context";

export function BlogIndexView() {
  const { locale, openWhatsAppModal } = useAppInteraction();
  const ui = BLOG_UI_CONTENT[locale];
  const articles = BLOG_ARTICLES[locale];

  return (
    <main id="blog-top">
      {/* ─── SECCIÓN 1: ENCABEZADO EDITORIAL CENTRADO (REF: DIANA DUSSAN /BLOG/) ─── */}
      <section className="cm-blog-hero">
        <div className="cm-container">
          <nav
            aria-label={locale === "es" ? "Ruta de navegación" : "Breadcrumb"}
            className="text-xs text-muted-foreground sm:text-sm"
          >
            <ol className="m-0 flex list-none flex-wrap items-center gap-1.5 p-0">
              <li>
                <Link href="/" className="cm-breadcrumb-link">
                  {ui.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                {ui.breadcrumbBlog}
              </li>
            </ol>
          </nav>

          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center text-center sm:mt-10">
            <h1 className="m-0 text-3xl leading-tight tracking-tight text-foreground sm:text-5xl">
              {ui.indexHeroTitleLead}
              <span className="cm-accent-sapphire">
                {ui.indexHeroTitleAccent}
              </span>
            </h1>

            <p className="mt-4 mb-0 max-w-xl text-base leading-relaxed text-muted-foreground">
              {ui.indexHeroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 2: GRILLA LIMPIA DE 6 ARTÍCULOS (3 COLUMNAS ESCRITORIO / 1 MÓVIL) ─── */}
      <section
        aria-label={locale === "es" ? "Artículos del blog" : "Blog articles"}
        className="cm-section"
      >
        <div className="cm-container">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="cm-blog-card-link group"
              >
                <Card className="cm-blog-card">
                  <div className="relative overflow-hidden">
                    <GreyPlaceholder
                      sharp
                      aspectClassName="aspect-[6/5]"
                      title={article.coverPlaceholder}
                      className="border-0"
                    />
                    <span className="cm-blog-card-tag">{article.category}</span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="cm-blog-card-title m-0 text-xl leading-snug text-foreground">
                      {article.title}
                    </h2>

                    <p className="mt-2.5 mb-0 text-sm leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>

                    <div className="mt-auto pt-5">
                      <span className="cm-blog-read-more">
                        <span>{ui.readArticleCta}</span>
                        <ArrowRightIcon className="icon-cap cm-blog-read-arrow" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 3: CIERRE LIMPIO DE VALORACIÓN MÉDICA ─── */}
      <section className="cm-section cm-section-bordered">
        <div className="cm-container">
          <div className="cm-guidance-banner">
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
              <h2 className="m-0 text-2xl leading-tight tracking-tight text-foreground sm:text-4xl">
                {ui.indexClosingTitle}
              </h2>

              <p className="mt-3 mb-0 max-w-xl text-base leading-relaxed text-muted-foreground">
                {ui.indexClosingSubtitle}
              </p>

              <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                <Button
                  type="button"
                  onClick={() => openWhatsAppModal()}
                  className="cm-btn-gold h-12 w-full rounded-full px-7 text-sm sm:w-auto"
                >
                  <span>{ui.primaryConsultCta}</span>
                  <ArrowRightIcon className="icon-cap" />
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="cm-btn-outline-clean h-12 w-full rounded-full px-7 text-sm no-underline sm:w-auto"
                >
                  <a
                    href={buildWhatsAppUrl(
                      "Buen día, estuve leyendo el blog de la Dra. Gabriela Delgado y me gustaría recibir orientación."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="size-4" />
                    <span>{ui.whatsappCta}</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
