"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GreyPlaceholder } from "@/components/ui/grey-placeholder";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/icons/clinic-icons";
import { buildWhatsAppUrl } from "@/config/site";
import {
  BLOG_UI_CONTENT,
  getBlogArticleBySlug,
  getRelatedBlogArticles,
  type BlogSlug,
} from "@/data/blog-content";
import { useAppInteraction } from "@/lib/i18n-context";

interface BlogArticleViewProps {
  slug: BlogSlug;
}

export function BlogArticleView({ slug }: BlogArticleViewProps) {
  const { locale, openWhatsAppModal } = useAppInteraction();
  const ui = BLOG_UI_CONTENT[locale];
  const article =
    getBlogArticleBySlug(locale, slug) ?? getBlogArticleBySlug("es", slug)!;
  const relatedArticles = getRelatedBlogArticles(locale, slug, 4);

  return (
    <main id="articulo-top">
      {/* ─── SECCIÓN 1: ENCABEZADO DE ARTÍCULO ALINEADO A LA IZQUIERDA + PORTADA ANCHA ─── */}
      <section className="cm-article-hero">
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
              <li>
                <Link href="/blog" className="cm-breadcrumb-link">
                  {ui.breadcrumbBlog}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">
                {article.category}
              </li>
            </ol>
          </nav>

          <div className="mt-7 max-w-3xl">
            <h1 className="m-0 text-3xl leading-tight tracking-tight text-foreground sm:text-5xl">
              {article.title}
            </h1>

            <p className="mt-4 mb-0 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {article.standfirst}
            </p>

            <p className="mt-5 mb-0 text-xs text-muted-foreground sm:text-sm">
              {ui.bylinePrefix} · {article.updatedLabel} ·{" "}
              {article.readTimeLabel}
            </p>
          </div>

          <div className="mt-7">
            <GreyPlaceholder
              src={article.coverSrc}
              priority
              sizes="(max-width: 1280px) 100vw, 1240px"
              aspectClassName="aspect-[16/10] md:aspect-[2/1]"
              title={article.coverPlaceholder}
            />
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 2: CUERPO ASIMÉTRICO DE 2 COLUMNAS (LECTURA + FICHA MÉDICA) ─── */}
      <section className="cm-section">
        <div className="cm-container">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Columna izquierda: Contenido clínico del artículo */}
            <article className="cm-article-prose lg:col-span-7">
              <p className="m-0 text-base leading-relaxed text-foreground">
                {article.intro}
              </p>

              <h2 className="mt-10 mb-3.5 text-2xl leading-snug text-foreground sm:text-3xl">
                {article.quickAnswerHeading}
              </h2>

              <ul className="cm-article-list">
                {article.quickAnswerBullets.map((bullet) => (
                  <li key={bullet.lead}>
                    <strong className="font-medium text-foreground">
                      {bullet.lead}
                    </strong>{" "}
                    <span>{bullet.body}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 mb-0 text-base leading-relaxed text-muted-foreground">
                {article.quickAnswerClosing}
              </p>

              <h2 className="mt-10 mb-3.5 text-2xl leading-snug text-foreground sm:text-3xl">
                {article.timelineHeading}
              </h2>

              <ul className="cm-article-list">
                {article.timelineBullets.map((bullet) => (
                  <li key={bullet.lead}>
                    <strong className="font-medium text-foreground">
                      {bullet.lead}
                    </strong>{" "}
                    <span>{bullet.body}</span>
                  </li>
                ))}
              </ul>

              {/* Recuadro cálido de orientación en línea (Ref: Diana Dussan inline callout) */}
              <Card className="cm-article-callout my-9">
                <h3 className="m-0 text-xl leading-snug text-foreground">
                  {ui.inlineCalloutTitle}
                </h3>
                <p className="mt-2.5 mb-0 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {ui.inlineCalloutBody}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Button
                    type="button"
                    size="sm"
                    onClick={() =>
                      openWhatsAppModal(article.relatedServiceName)
                    }
                    className="cm-btn-gold h-10 rounded-full px-5 text-xs"
                  >
                    {ui.inlineCalloutBookLink}
                  </Button>
                  <span className="text-xs text-muted-foreground">
                    {ui.inlineCalloutOr}{" "}
                    <a
                      href={buildWhatsAppUrl(
                        `Buen día, leí el artículo sobre ${article.topicShort} y me gustaría recibir orientación.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cm-inline-link font-medium"
                    >
                      {ui.inlineCalloutWaLink}
                    </a>
                    .
                  </span>
                </div>
              </Card>

              <h2 className="mt-10 mb-3.5 text-2xl leading-snug text-foreground sm:text-3xl">
                {article.factorsHeading}
              </h2>

              <p className="m-0 mb-3.5 text-base leading-relaxed text-muted-foreground">
                {article.factorsIntro}
              </p>

              <ul className="cm-article-list">
                {article.factorsBullets.map((bullet) => (
                  <li key={bullet.lead}>
                    <strong className="font-medium text-foreground">
                      {bullet.lead}
                    </strong>{" "}
                    <span>{bullet.body}</span>
                  </li>
                ))}
              </ul>

              {/* Figura comparativa Antes / Después integrada en el artículo */}
              <figure className="my-9 mx-0">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative overflow-hidden rounded-xl">
                    <GreyPlaceholder
                      src={`/images/casos/${article.relatedServiceSlug}-antes.jpg`}
                      sizes="(max-width: 1024px) 48vw, 340px"
                      sharp
                      aspectClassName="aspect-[4/5]"
                      title={article.beforeCasePlaceholder}
                    />
                    <span className="cm-article-case-pill">
                      {ui.beforePill}
                    </span>
                  </div>
                  <div className="relative overflow-hidden rounded-xl">
                    <GreyPlaceholder
                      src={`/images/casos/${article.relatedServiceSlug}-despues.jpg`}
                      sizes="(max-width: 1024px) 48vw, 340px"
                      sharp
                      afterState
                      aspectClassName="aspect-[4/5]"
                      title={article.afterCasePlaceholder}
                    />
                    <span className="cm-article-case-pill cm-article-case-pill--after">
                      {ui.afterPill}
                    </span>
                  </div>
                </div>
                <figcaption className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                  {ui.caseFigureCaption}{" "}
                  <Link href="/testimonios" className="cm-inline-link">
                    {ui.caseFigureLinkLabel}
                  </Link>
                  .
                </figcaption>
              </figure>

              <h2 className="mt-10 mb-3.5 text-2xl leading-snug text-foreground sm:text-3xl">
                {article.careHeading}
              </h2>

              {article.careParagraphs.map((paragraph, idx) => (
                <p
                  key={`${article.slug}-care-${idx}`}
                  className="mt-0 mb-4 text-base leading-relaxed text-foreground"
                >
                  {paragraph}
                </p>
              ))}

              <p className="mt-2 mb-0 text-base leading-relaxed text-muted-foreground">
                {ui.serviceLinkPrefix}{" "}
                <Link
                  href={`/servicios#${article.relatedServiceSlug}`}
                  className="cm-inline-link font-medium"
                >
                  {article.relatedServiceName}
                </Link>
                .
              </p>

              {/* Acordeón de Preguntas Frecuentes (4 ítems) */}
              <h2 className="mt-11 mb-4 text-2xl leading-snug text-foreground sm:text-3xl">
                {ui.faqHeading}
              </h2>

              <Accordion className="flex flex-col gap-3">
                {article.faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="cm-faq-card"
                  >
                    <AccordionTrigger className="px-5 py-4 text-left font-heading text-base font-medium text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <p className="mt-6 mb-0 text-xs leading-relaxed text-muted-foreground">
                {ui.disclaimerText}
              </p>
            </article>

            {/* Columna derecha: Tarjeta de Entidad Médica — Dra. Gabriela Delgado */}
            <aside
              aria-label={ui.specialistCard.name}
              className="lg:col-span-5"
            >
              <Card className="cm-specialist-card">
                <div className="cm-specialist-header">
                  <div className="size-14 shrink-0">
                    <GreyPlaceholder
                      src="/images/doctora/dra-quien-soy.jpg"
                      sizes="56px"
                      imgClassName="object-top"
                      circle
                      aspectClassName="aspect-square"
                      title={ui.specialistCard.name}
                    />
                  </div>
                  <h2 className="m-0 text-xl leading-snug text-foreground sm:text-2xl">
                    {ui.specialistCard.name}
                  </h2>
                </div>

                <dl className="m-0 flex flex-col gap-2.5 p-5 sm:p-6">
                  {ui.specialistCard.rows.map((row, idx) => (
                    <div
                      key={row.label}
                      data-striped={idx % 2 === 0 ? "true" : "false"}
                      className="cm-specialist-row"
                    >
                      <dt className="cm-specialist-dt">{row.label}</dt>
                      <dd className="cm-specialist-dd">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <Button
                    type="button"
                    onClick={() =>
                      openWhatsAppModal(article.relatedServiceName)
                    }
                    className="cm-btn-gold h-11 w-full rounded-xl text-sm"
                  >
                    {ui.specialistCard.ctaLabel}
                  </Button>
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 3: BANNER CONTEXTUAL DE VALORACIÓN ─── */}
      <section className="cm-section pt-0">
        <div className="cm-container">
          <div className="cm-guidance-banner">
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
              <h2 className="m-0 text-2xl leading-tight tracking-tight text-foreground sm:text-4xl">
                {ui.articleClosingTitlePrefix} {article.topicShort}
              </h2>

              <p className="mt-3 mb-0 max-w-xl text-base leading-relaxed text-muted-foreground">
                {ui.articleClosingSubtitle}
              </p>

              <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                <Button
                  type="button"
                  onClick={() => openWhatsAppModal(article.relatedServiceName)}
                  className="cm-btn-gold h-12 w-full rounded-full px-7 text-sm sm:w-auto"
                >
                  <span>{ui.specialistCard.ctaLabel}</span>
                  <ArrowRightIcon className="icon-cap" />
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="cm-btn-outline-clean h-12 w-full rounded-full px-7 text-sm no-underline sm:w-auto"
                >
                  <a
                    href={buildWhatsAppUrl(
                      `Buen día, me gustaría recibir información sobre ${article.topicShort} con la Dra. Gabriela Delgado.`
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

      {/* ─── SECCIÓN 4: SIGUE LEYENDO (4 ARTÍCULOS COMPACTOS — REF: DIANA DUSSAN) ─── */}
      <section
        aria-labelledby="sigue-leyendo-heading"
        className="cm-section cm-section-bordered"
      >
        <div className="cm-container">
          <h2
            id="sigue-leyendo-heading"
            className="m-0 text-2xl leading-tight tracking-tight text-foreground sm:text-4xl"
          >
            {ui.continueReadingHeading}
          </h2>

          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="cm-blog-card-link group"
              >
                <Card className="cm-related-card">
                  <GreyPlaceholder
                    src={related.coverSrc}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    sharp
                    aspectClassName="aspect-[4/3]"
                    title={related.category}
                    className="border-0"
                  />
                  <div className="p-4">
                    <h3 className="cm-related-title m-0 text-sm leading-snug text-foreground">
                      {related.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
