"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GreyPlaceholder } from "@/components/ui/grey-placeholder";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/icons/clinic-icons";
import { buildWhatsAppUrl } from "@/config/site";
import { ABOUT_PAGE_CONTENT } from "@/data/about-content";
import type { SpecialtyUnitId } from "@/data/services-content";
import { useAppInteraction } from "@/lib/i18n-context";

export function AboutView() {
  const { locale, openWhatsAppModal } = useAppInteraction();
  const dict = ABOUT_PAGE_CONTENT[locale];

  // Por defecto inicia en "Cirugía maxilofacial y perfilamiento" (tal como en el mockup aprobado)
  const [activeSpecialtyId, setActiveSpecialtyId] =
    useState<SpecialtyUnitId>("cirugia-maxilofacial");

  const activeItem =
    dict.specialization.items.find((item) => item.id === activeSpecialtyId) ??
    dict.specialization.items[1];

  return (
    <main id="quien-soy-top">
      {/* ─── BLOQUE 1: PORTADA EDITORIAL MINIMALISTA (REF: EVER/BODY ABOUT) ─── */}
      <section className="cm-about-hero">
        <div className="cm-container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <h1 className="m-0 text-3xl leading-tight tracking-tight text-foreground sm:text-5xl">
                {dict.hero.titleLead}
                <span className="cm-accent-sapphire">
                  {dict.hero.titleAccent}
                </span>
              </h1>

              <p className="mt-4 mb-0 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
                {dict.hero.subtitle}
              </p>

              <div className="mt-8">
                <Button
                  type="button"
                  onClick={() => openWhatsAppModal()}
                  className="cm-btn-gold h-12 rounded-full px-7 text-sm"
                >
                  <span>{dict.hero.ctaLabel}</span>
                  <ArrowRightIcon className="icon-cap" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="mx-auto max-w-md lg:mr-0">
                <GreyPlaceholder
                  src={dict.hero.imageSrc}
                  priority
                  sizes="(max-width: 1024px) 90vw, 448px"
                  imgClassName="object-top"
                  aspectClassName="aspect-[4/5]"
                  title={dict.hero.portraitPlaceholder}
                  className="rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOQUE 2: HISTORIA PERSONAL, PROPÓSITO Y 3 INDICADORES ─── */}
      <section
        aria-labelledby="historia-proposito-heading"
        className="cm-about-story-band"
      >
        <div className="cm-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="historia-proposito-heading"
              className="m-0 text-2xl leading-snug tracking-tight text-foreground sm:text-4xl"
            >
              {dict.story.motto}
            </h2>

            <div className="mx-auto mt-6 flex max-w-2xl flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              {dict.story.paragraphs.map((paragraph, index) => (
                <p key={`story-p-${index}`} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="mx-auto mt-7 mb-0 max-w-2xl">
              <p className="m-0 font-heading text-base font-medium leading-relaxed text-foreground sm:text-lg">
                {dict.story.quote}
              </p>
              <footer className="mt-2 text-xs text-muted-foreground sm:text-sm">
                {dict.story.quoteAuthor}
              </footer>
            </blockquote>

            <div className="cm-about-metrics-grid mt-10 pt-8">
              {dict.story.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col items-center">
                  <span className="cm-about-metric-value">{metric.value}</span>
                  <span className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOQUE 3: MI ESPECIALIZACIÓN (INTERACTIVO ESTILO PEACHY STUDIO) ─── */}
      <section
        id="mi-especializacion"
        aria-labelledby="mi-especializacion-heading"
        className="cm-section"
      >
        <div className="cm-container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Cuadro visual izquierdo con guías anatómicas [  ] dinámicas */}
            <div className="lg:col-span-6">
              <div className="cm-peachy-stage">
                <GreyPlaceholder
                  src={activeItem.imageSrc}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  sharp
                  aspectClassName="aspect-square"
                  title={activeItem.placeholderTitle}
                  subtitle={activeItem.placeholderSubtitle}
                  className="border-0"
                />

                <div
                  aria-hidden="true"
                  data-zone={activeItem.bracketZone}
                  className="cm-peachy-brackets"
                >
                  <svg
                    viewBox="0 0 28 88"
                    fill="none"
                    className="cm-peachy-bracket-svg"
                  >
                    <path
                      d="M22 4H12C7.58 4 4 7.58 4 12V76C4 80.42 7.58 84 12 84H22"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 28 88"
                    fill="none"
                    className="cm-peachy-bracket-svg"
                  >
                    <path
                      d="M6 4H16C20.42 4 24 7.58 24 12V76C24 80.42 20.42 84 16 84H6"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Riel vertical interactivo derecho estilo Peachy Studio */}
            <div className="lg:col-span-6">
              <h2
                id="mi-especializacion-heading"
                className="m-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
              >
                {dict.specialization.headingLead}
                <span className="cm-accent-sapphire">
                  {dict.specialization.headingAccent}
                </span>
              </h2>

              <div
                role="group"
                aria-label={`${dict.specialization.headingLead}${dict.specialization.headingAccent}`}
                className="mt-8 flex flex-col gap-3"
              >
                {dict.specialization.items.map((item) => {
                  const isActive = item.id === activeItem.id;

                  return (
                    <div
                      key={item.id}
                      data-active={isActive ? "true" : "false"}
                      className="cm-peachy-item"
                    >
                      <span
                        aria-hidden="true"
                        data-active={isActive ? "true" : "false"}
                        className="cm-peachy-rail-indicator"
                      />

                      <div className="min-w-0 flex-1 py-1">
                        <Button
                          type="button"
                          variant="ghost"
                          aria-pressed={isActive}
                          onClick={() => setActiveSpecialtyId(item.id)}
                          className="cm-peachy-trigger"
                        >
                          {item.title}
                        </Button>

                        {isActive && (
                          <div className="mt-2 pr-2 pb-1">
                            <p className="m-0 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                              {item.description}
                            </p>
                            <Link
                              href={`/servicios#${item.id}`}
                              className="cm-peachy-dotted-link mt-2.5 inline-flex items-center"
                            >
                              {item.linkLabel}
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  className="cm-btn-gold h-12 rounded-full px-7 text-sm no-underline"
                >
                  <Link href="/servicios">
                    <span>{dict.specialization.exploreAllCta}</span>
                    <ArrowRightIcon className="icon-cap" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOQUE 4: PILARES MINIMALISTAS DE CUIDADO (3 TARJETAS) ─── */}
      <section
        aria-label={
          locale === "es" ? "Pilares de atención médica" : "Clinical care pillars"
        }
        className="cm-section pt-0"
      >
        <div className="cm-container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {dict.pillars.items.map((pillar) => (
              <Card key={pillar.id} className="cm-about-pillar-card">
                <h3 className="m-0 text-xl leading-snug text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 mb-0 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BLOQUE 5: CIERRE LIMPIO DE VALORACIÓN ─── */}
      <section className="cm-section pt-0">
        <div className="cm-container">
          <div className="cm-guidance-banner">
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
              <h2 className="m-0 text-2xl leading-tight tracking-tight text-foreground sm:text-4xl">
                {dict.closing.title}
              </h2>

              <p className="mt-3 mb-0 max-w-xl text-base leading-relaxed text-muted-foreground">
                {dict.closing.subtitle}
              </p>

              <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                <Button
                  type="button"
                  onClick={() => openWhatsAppModal()}
                  className="cm-btn-gold h-12 w-full rounded-full px-7 text-sm sm:w-auto"
                >
                  <span>{dict.closing.primaryCta}</span>
                  <ArrowRightIcon className="icon-cap" />
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="cm-btn-outline-clean h-12 w-full rounded-full px-7 text-sm no-underline sm:w-auto"
                >
                  <a
                    href={buildWhatsAppUrl(
                      "Buen día, me gustaría recibir información para atenderme con la Dra. Gabriela Delgado."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="size-4" />
                    <span>{dict.closing.whatsappCta}</span>
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
