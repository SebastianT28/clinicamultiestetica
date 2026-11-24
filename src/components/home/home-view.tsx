"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { GreyPlaceholder } from "@/components/ui/grey-placeholder";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ContrastHalfIcon,
  MapPinIcon,
  ShieldCheckIcon,
  StarSolidIcon,
  WhatsAppIcon,
} from "@/components/icons/clinic-icons";
import {
  buildWhatsAppUrl,
  SITE_CONFIG,
  type ServiceCategorySlug,
} from "@/config/site";
import { HOME_CONTENT } from "@/data/home-content";
import { useAppInteraction } from "@/lib/i18n-context";

type ProcedureFilter = "all" | ServiceCategorySlug;

export function HomeView() {
  const { locale, openWhatsAppModal } = useAppInteraction();
  const dict = HOME_CONTENT[locale];

  // Estado de tarjetas interactivas Antes / Después (Patrón Clínica Diana Dussan)
  const [afterToggles, setAfterToggles] = useState<Record<string, boolean>>({});

  // Estado del carrusel editorial de unidades médicas (Patrón Apple TV+ de Diana Dussan)
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Estado del filtro de los 16 procedimientos del brief
  const [activeCategory, setActiveCategory] = useState<ProcedureFilter>("all");

  // Estado del formulario rápido de valoración en sección Ubicación
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadProcedure, setLeadProcedure] = useState("");
  const [leadPrivacy, setLeadPrivacy] = useState(true);
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const slidesCount = dict.showcaseCarousel.slides.length;

  useEffect(() => {
    if (carouselPaused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slidesCount);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [carouselPaused, slidesCount]);

  const toggleCaseState = (id: string) => {
    setAfterToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredProcedures =
    activeCategory === "all"
      ? dict.proceduresCatalog.items
      : dict.proceduresCatalog.items.filter((item) => item.category === activeCategory);

  const handleQuickLeadSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!leadPrivacy) return;

    const msg =
      locale === "es"
        ? `Hola Dra. Gabriela y Clínica Multiestética. Mi nombre es ${leadName.trim()} (${leadPhone.trim()}) y deseo agendar una cita de valoración en Arequipa para: ${leadProcedure.trim()}.`
        : `Hello Dr. Gabriela and Clínica Multiestética. My name is ${leadName.trim()} (${leadPhone.trim()}) and I would like to schedule a consultation in Arequipa for: ${leadProcedure.trim()}.`;

    setLeadSubmitted(true);
    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  const currentSlide = dict.showcaseCarousel.slides[activeSlide] ?? dict.showcaseCarousel.slides[0];

  return (
    <main id="inicio">
      {/* ─── SECCIÓN 1: HERO EDITORIAL CON MARCO ARQUITECTÓNICO ─── */}
      <section className="cm-hero-shell">
        <div className="cm-container">
          <div className="cm-hero-frame">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="flex flex-col items-start lg:col-span-7">
                <h1 className="m-0 font-serif text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl xl:text-6xl">
                  {dict.hero.title}
                </h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {dict.hero.subtitle}
                </p>

                <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                  <Button
                    type="button"
                    size="lg"
                    onClick={() => openWhatsAppModal()}
                    className="cm-btn-sapphire h-12 ps-7 pe-6 text-base"
                  >
                    <span>{dict.hero.primaryCta}</span>
                    <ArrowRightIcon className="cm-gold-arrow icon-cap" />
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="cm-btn-outline-warm h-12 px-7 text-base"
                  >
                    <Link href="#procedimientos">{dict.hero.secondaryCta}</Link>
                  </Button>
                </div>

                <dl className="mt-9 grid w-full grid-cols-3 gap-4 border-t border-border pt-6 sm:max-w-lg">
                  {dict.hero.metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col">
                      <dt className="order-2 mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
                        {metric.label}
                      </dt>
                      <dd className="order-1 m-0 font-serif text-2xl font-semibold leading-none text-foreground sm:text-3xl">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="lg:col-span-5">
                <GreyPlaceholder
                  isVideo
                  aspectClassName="aspect-[4/5]"
                  title={dict.hero.mediaTitle}
                  subtitle={dict.hero.mediaSubtitle}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 2: TRANSFORMACIONES DESTACADAS (ANTES / DESPUÉS AL TOQUE) ─── */}
      <section id="casos-destacados" className="cm-section cm-section--surface">
        <div className="cm-container">
          <div className="max-w-2xl">
            <h2 className="m-0 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              {dict.featuredCases.title}
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              {dict.featuredCases.subtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
            {dict.featuredCases.items.map((item) => {
              const isAfter = Boolean(afterToggles[item.id]);

              return (
                <article key={item.id} className="flex h-full flex-col">
                  <div className="relative">
                    <Button
                      type="button"
                      variant="ghost"
                      aria-pressed={isAfter}
                      onClick={() => toggleCaseState(item.id)}
                      className="h-auto w-full whitespace-normal rounded-2xl p-0 text-center shadow-none hover:bg-transparent"
                    >
                      <GreyPlaceholder
                        afterState={isAfter}
                        aspectClassName="aspect-[4/5]"
                        title={isAfter ? item.afterPlaceholder : item.beforePlaceholder}
                        subtitle={item.summary}
                      />
                    </Button>

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-3 top-3 flex items-center justify-between gap-2"
                    >
                      <span
                        className={
                          isAfter
                            ? "cm-pill-chip cm-pill-chip--dark"
                            : "cm-pill-chip"
                        }
                      >
                        {isAfter
                          ? dict.featuredCases.afterBadge
                          : dict.featuredCases.beforeBadge}
                      </span>
                      {!isAfter && (
                        <span className="cm-pill-chip cm-pill-chip--dark">
                          {dict.featuredCases.tapHint}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      aria-pressed={isAfter}
                      onClick={() => toggleCaseState(item.id)}
                      className={
                        isAfter
                          ? "cm-btn-sapphire h-11 ps-4 pe-5 text-sm"
                          : "cm-btn-outline-warm h-11 ps-4 pe-5 text-sm"
                      }
                    >
                      <ContrastHalfIcon
                        className={
                          isAfter ? "cm-gold-arrow h-4 w-4" : "h-4 w-4 text-foreground"
                        }
                      />
                      <span>
                        {isAfter
                          ? dict.featuredCases.seeBeforeBtn
                          : dict.featuredCases.seeChangeBtn}
                      </span>
                    </Button>

                    <span className="font-serif text-lg font-medium text-foreground">
                      {item.procedureTitle}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.techniqueLabel}
                  </p>

                  <div className="mt-auto pt-3">
                    <Button
                      type="button"
                      onClick={() => openWhatsAppModal(item.procedureTitle)}
                      className="cm-btn-sapphire h-12 w-full rounded-xl ps-6 pe-5 text-sm font-semibold"
                    >
                      <span>{dict.featuredCases.wantThisBtn}</span>
                      <ArrowRightIcon className="cm-gold-arrow icon-cap" />
                    </Button>

                    <div className="mt-2.5 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
                      <span className="cm-live-dot" aria-hidden="true" />
                      <span>{dict.featuredCases.whatsappFastNote}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            {dict.featuredCases.ethicalDisclaimer}
          </p>
        </div>
      </section>

      {/* ─── SECCIÓN 3: BANNER EDITORIAL DE FILOSOFÍA NATURAL ─── */}
      <section id="filosofia" className="cm-section cm-section--pearl">
        <div className="cm-container">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <GreyPlaceholder
                aspectClassName="aspect-[16/10]"
                title={dict.philosophyBanner.mediaTitle}
                subtitle={dict.philosophyBanner.mediaSubtitle}
              />
            </div>

            <div className="flex flex-col items-start lg:col-span-6">
              <h2 className="m-0 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
                {dict.philosophyBanner.title}
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                {dict.philosophyBanner.subtitle}
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="cm-btn-outline-warm h-12 ps-6 pe-5 text-base"
                >
                  <Link href="#nosotros">
                    <span>{dict.philosophyBanner.cta}</span>
                    <ArrowRightIcon className="icon-cap" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 4: CARRUSEL DE UNIDADES MÉDICAS + CATÁLOGO DE 16 PROCEDIMIENTOS ─── */}
      <section id="procedimientos" className="cm-section cm-section--surface">
        <div className="cm-container">
          {/* Parte A: Carrusel estilo Apple TV+ (Sección 5 de Diana Dussan) */}
          <div className="max-w-2xl">
            <h2 className="m-0 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              {dict.showcaseCarousel.title}
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              {dict.showcaseCarousel.subtitle}
            </p>
          </div>

          <div
            className="mt-8"
            onMouseEnter={() => setCarouselPaused(true)}
            onMouseLeave={() => setCarouselPaused(false)}
            onFocusCapture={() => setCarouselPaused(true)}
            onBlurCapture={() => setCarouselPaused(false)}
          >
            <div
              className="cm-showcase-stage p-4 sm:p-6"
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(e) => {
                if (touchStartX.current === null) return;
                const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
                const diff = touchStartX.current - endX;
                if (Math.abs(diff) > 40) {
                  setActiveSlide((prev) =>
                    diff > 0
                      ? (prev + 1) % slidesCount
                      : (prev - 1 + slidesCount) % slidesCount
                  );
                }
                touchStartX.current = null;
              }}
            >
              <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-7">
                  <GreyPlaceholder
                    aspectClassName="aspect-[4/5] sm:aspect-[16/9]"
                    title={currentSlide.placeholderLabel}
                    subtitle={currentSlide.pill}
                  />
                </div>

                <div className="flex flex-col items-start lg:col-span-5">
                  <Badge
                    variant="outline"
                    size="lg"
                    className="font-sans normal-case tracking-normal text-xs font-medium text-foreground"
                  >
                    {currentSlide.pill}
                  </Badge>
                  <h3 className="mt-3 font-serif text-2xl font-medium leading-snug text-foreground sm:text-3xl">
                    {currentSlide.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {currentSlide.subtitle}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Button
                      type="button"
                      onClick={() => openWhatsAppModal(currentSlide.procedureQuery)}
                      className="cm-btn-sapphire h-11 ps-6 pe-5 text-sm"
                    >
                      <span>{dict.proceduresCatalog.consultBtn}</span>
                      <ArrowRightIcon className="cm-gold-arrow icon-cap" />
                    </Button>

                    <div className="hidden items-center gap-2 md:flex">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        aria-label={dict.showcaseCarousel.prevLabel}
                        onClick={() =>
                          setActiveSlide((prev) => (prev - 1 + slidesCount) % slidesCount)
                        }
                        className="cm-btn-outline-warm h-11 w-11"
                      >
                        <ChevronLeftIcon className="h-5 w-5" />
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        aria-label={dict.showcaseCarousel.nextLabel}
                        onClick={() => setActiveSlide((prev) => (prev + 1) % slidesCount)}
                        className="cm-btn-outline-warm h-11 w-11"
                      >
                        <ChevronRightIcon className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              role="tablist"
              aria-label={dict.showcaseCarousel.title}
              className="mt-3 flex items-center justify-center gap-1"
            >
              {dict.showcaseCarousel.slides.map((slide, index) => (
                <Button
                  key={slide.id}
                  type="button"
                  role="tab"
                  variant="ghost"
                  aria-selected={activeSlide === index}
                  aria-label={`${dict.showcaseCarousel.slideLabelPrefix} ${index + 1}: ${slide.title}`}
                  data-active={activeSlide === index ? "true" : "false"}
                  onClick={() => setActiveSlide(index)}
                  className="cm-dot-btn"
                >
                  <span className="cm-dot-indicator" />
                </Button>
              ))}
            </div>
          </div>

          {/* Parte B: Catálogo filtrable de los 16 servicios del Brief */}
          <div className="mt-14 border-t border-border pt-12">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-xl">
                <h3 className="m-0 font-serif text-3xl font-medium leading-tight text-foreground">
                  {dict.proceduresCatalog.title}
                </h3>
                <p className="mt-2 text-base text-muted-foreground">
                  {dict.proceduresCatalog.subtitle}
                </p>
              </div>

              <div
                role="group"
                aria-label={dict.proceduresCatalog.title}
                className="flex flex-wrap gap-2"
              >
                {(
                  [
                    { id: "all", label: dict.proceduresCatalog.filterAll },
                    {
                      id: "cirugia-perfilamiento-facial",
                      label: dict.proceduresCatalog.filterFacialSurgery,
                    },
                    {
                      id: "armonizacion-facial-piel",
                      label: dict.proceduresCatalog.filterHarmonization,
                    },
                    {
                      id: "cirugia-estetica-corporal",
                      label: dict.proceduresCatalog.filterBodySurgery,
                    },
                  ] as const
                ).map((tab) => (
                  <Button
                    key={tab.id}
                    type="button"
                    variant="outline"
                    aria-pressed={activeCategory === tab.id}
                    data-active={activeCategory === tab.id ? "true" : "false"}
                    onClick={() => setActiveCategory(tab.id)}
                    className="cm-filter-tab"
                  >
                    {tab.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProcedures.map((proc) => (
                <Card
                  key={proc.slug}
                  className="cm-surface-card flex h-full flex-col overflow-hidden"
                >
                  <div className="p-3 pb-0">
                    <GreyPlaceholder
                      aspectClassName="aspect-[16/10]"
                      title={proc.placeholderLabel}
                    />
                  </div>

                  <CardHeader className="border-0 px-5 pt-4 pb-2">
                    <CardTitle className="font-serif text-xl font-semibold leading-snug text-foreground">
                      {proc.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-5 pt-0 pb-4">
                    <p className="m-0 text-sm leading-relaxed text-muted-foreground">
                      {proc.summary}
                    </p>
                  </CardContent>

                  <CardFooter className="mt-auto flex items-center justify-between gap-2 border-t border-border px-5 py-3.5">
                    <span className="text-xs font-medium text-muted-foreground">
                      {proc.specialistTag}
                    </span>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => openWhatsAppModal(proc.title)}
                      className="cm-btn-outline-warm h-11 px-4 text-xs font-semibold"
                    >
                      {dict.proceduresCatalog.consultBtn}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 5: HISTORIA DE LA DRA. GABRIELA DELGADO & STAFF MÉDICO (E-E-A-T) ─── */}
      <section id="nosotros" className="cm-section cm-section--pearl">
        <div className="cm-container">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <GreyPlaceholder
                aspectClassName="aspect-[4/5]"
                title={dict.aboutAndTeam.founderPhotoTitle}
                subtitle={dict.aboutAndTeam.founderPhotoSubtitle}
              />
            </div>

            <div className="lg:col-span-7">
              <h2 className="m-0 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
                {dict.aboutAndTeam.title}
              </h2>
              <p className="mt-3 text-base font-medium text-foreground/85">
                {dict.aboutAndTeam.subtitle}
              </p>

              <div className="mt-4 flex flex-col gap-3 text-base leading-relaxed text-muted-foreground">
                {dict.aboutAndTeam.storyParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="m-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              <Card className="cm-surface-card mt-6 p-6">
                <blockquote className="m-0 font-serif text-xl leading-relaxed text-foreground">
                  {dict.aboutAndTeam.founderQuote}
                </blockquote>
                <p className="cm-gold-text mt-3 mb-0 text-sm font-semibold">
                  {dict.aboutAndTeam.founderSignature}
                </p>
              </Card>

              <div className="mt-7">
                <p className="m-0 text-sm font-semibold text-foreground">
                  {dict.aboutAndTeam.differentialsTitle}
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3 list-none p-0 m-0">
                  {dict.aboutAndTeam.differentials.map((diff) => (
                    <li
                      key={diff.title}
                      className="cm-surface-card flex flex-col gap-1.5 p-4"
                    >
                      <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <ShieldCheckIcon className="cm-gold-text h-4 w-4 shrink-0" />
                        <span>{diff.title}</span>
                      </span>
                      <span className="text-xs leading-relaxed text-muted-foreground">
                        {diff.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Directorio de Dirección Médica y Especialistas con Colegiaturas */}
          <div className="mt-14 border-t border-border pt-12">
            <div className="max-w-2xl">
              <h3 className="m-0 font-serif text-3xl font-medium leading-tight text-foreground">
                {dict.aboutAndTeam.staffTitle}
              </h3>
              <p className="mt-2 text-base text-muted-foreground">
                {dict.aboutAndTeam.staffSubtitle}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {dict.aboutAndTeam.staff.map((member) => (
                <Card
                  key={member.id}
                  className="cm-surface-card flex h-full flex-col p-5"
                >
                  <GreyPlaceholder
                    aspectClassName="aspect-square"
                    title={member.placeholderLabel}
                  />
                  <div className="mt-4 flex flex-col gap-1">
                    <h4 className="m-0 font-serif text-2xl font-medium text-foreground">
                      {member.name}
                    </h4>
                    <p className="m-0 text-sm font-medium text-foreground/80">
                      {member.role}
                    </p>
                    <p className="cm-gold-text m-0 text-xs font-semibold">
                      {member.credentials}
                    </p>
                    <p className="mt-2 mb-0 text-sm leading-relaxed text-muted-foreground">
                      {member.focus}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 6: RESEÑAS DE PACIENTES + VIDEO SHOWCASE DUAL (16:9 DESKTOP / 9:16 MÓVIL) ─── */}
      <section id="testimonios" className="cm-section cm-section--surface">
        <div className="cm-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="m-0 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              {dict.testimonialsAndVideo.title}
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              {dict.testimonialsAndVideo.subtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {dict.testimonialsAndVideo.reviews.map((rev) => (
              <Card
                key={rev.id}
                className="cm-surface-card flex h-full flex-col items-center p-6 text-center"
              >
                <div className="w-24">
                  <GreyPlaceholder
                    aspectClassName="aspect-square"
                    className="rounded-full p-2"
                    title={rev.avatarPlaceholder}
                  />
                </div>

                <p className="mt-5 mb-0 text-sm leading-relaxed text-muted-foreground">
                  {rev.quote}
                </p>

                <div className="mt-auto pt-5">
                  <h3 className="m-0 font-sans text-base font-semibold text-foreground">
                    {rev.patientLabel}
                  </h3>
                  <p className="mt-0.5 mb-2 text-xs text-muted-foreground">
                    {rev.procedureName}
                  </p>
                  <div
                    role="img"
                    aria-label={
                      locale === "es" ? "Calificación de 5 estrellas" : "5 out of 5 stars"
                    }
                    className="flex items-center justify-center gap-1"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarSolidIcon key={star} className="cm-gold-star h-4 w-4" />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Video Dual (Sección 7 de Clínica Diana Dussan: 16:9 en Desktop / 9:16 en Mobile) */}
          <div className="mt-16 border-t border-border pt-12">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="m-0 font-serif text-3xl font-medium leading-tight text-foreground">
                {dict.testimonialsAndVideo.videoSectionTitle}
              </h3>
              <p className="mt-2 text-base text-muted-foreground">
                {dict.testimonialsAndVideo.videoSectionSubtitle}
              </p>
            </div>

            {/* Vista Horizontal 16:9 en Tablet/Desktop */}
            <div className="mx-auto mt-8 hidden max-w-3xl md:block">
              <GreyPlaceholder
                isVideo
                aspectClassName="aspect-[16/9]"
                title={dict.testimonialsAndVideo.desktopVideoTitle}
                subtitle={dict.testimonialsAndVideo.desktopVideoSubtitle}
              />
            </div>

            {/* Vista Vertical 9:16 tipo Reel en Celular */}
            <div className="mx-auto mt-8 max-w-sm md:hidden">
              <GreyPlaceholder
                isVideo
                aspectClassName="aspect-[9/16]"
                title={dict.testimonialsAndVideo.mobileVideoTitle}
                subtitle={dict.testimonialsAndVideo.mobileVideoSubtitle}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 7: PREGUNTAS FRECUENTES (ACORDEÓN ACCESIBLE) ─── */}
      <section id="preguntas" className="cm-section cm-section--pearl">
        <div className="cm-container">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="m-0 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
                {dict.faqSection.title}
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                {dict.faqSection.subtitle}
              </p>

              <Card className="cm-surface-card mt-6 p-6">
                <h3 className="m-0 font-serif text-2xl font-medium text-foreground">
                  {dict.faqSection.helperCardTitle}
                </h3>
                <p className="mt-2 mb-5 text-sm leading-relaxed text-muted-foreground">
                  {dict.faqSection.helperCardBody}
                </p>
                <Button
                  type="button"
                  onClick={() => openWhatsAppModal()}
                  className="cm-btn-whatsapp h-11 ps-5 pe-6 text-sm font-semibold"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>{dict.faqSection.helperCardCta}</span>
                </Button>
              </Card>
            </div>

            <div className="lg:col-span-7">
              <Card className="cm-surface-card px-6 py-2">
                <Accordion multiple={false} className="w-full">
                  {dict.faqSection.items.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="border-border last:border-b-0"
                    >
                      <AccordionTrigger className="min-h-12 py-4 text-left font-sans text-base font-medium text-foreground hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 8: UBICACIÓN EN AREQUIPA + AGENDA RÁPIDA + FRANJA GOOGLE MAPS 100% ─── */}
      <section id="ubicacion" className="cm-section cm-section--surface pb-0">
        <div className="cm-container pb-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="m-0 font-serif text-3xl font-medium leading-tight text-foreground sm:text-4xl">
                {dict.locationSection.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {dict.locationSection.subtitle}
              </p>

              <dl className="mt-7 flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold text-muted-foreground">
                      {dict.locationSection.addressLabel}
                    </dt>
                    <dd className="m-0 mt-0.5 text-base font-medium text-foreground">
                      {dict.locationSection.addressValue}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold text-muted-foreground">
                      {dict.locationSection.phoneLabel}
                    </dt>
                    <dd className="m-0 mt-0.5 text-base font-medium text-foreground">
                      {SITE_CONFIG.whatsappDisplay}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
                    <ShieldCheckIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold text-muted-foreground">
                      {dict.locationSection.scheduleLabel}
                    </dt>
                    <dd className="m-0 mt-0.5 text-base font-medium text-foreground">
                      {dict.locationSection.scheduleValue}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-7">
              <Card className="cm-surface-card p-6 sm:p-8">
                <h3 className="m-0 font-serif text-2xl font-medium text-foreground sm:text-3xl">
                  {dict.locationSection.formTitle}
                </h3>
                <p className="mt-1.5 mb-6 text-sm text-muted-foreground">
                  {dict.locationSection.formSubtitle}
                </p>

                <form onSubmit={handleQuickLeadSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="home-lead-name"
                        className="font-sans text-xs font-medium normal-case tracking-normal text-foreground"
                      >
                        {dict.locationSection.nameLabel}
                      </Label>
                      <Input
                        id="home-lead-name"
                        type="text"
                        required
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        placeholder={dict.locationSection.namePlaceholder}
                        className="h-11 rounded-xl border border-border bg-background"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="home-lead-phone"
                        className="font-sans text-xs font-medium normal-case tracking-normal text-foreground"
                      >
                        {dict.locationSection.phoneInputLabel}
                      </Label>
                      <Input
                        id="home-lead-phone"
                        type="tel"
                        required
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        placeholder={dict.locationSection.phonePlaceholder}
                        className="h-11 rounded-xl border border-border bg-background"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="home-lead-procedure"
                      className="font-sans text-xs font-medium normal-case tracking-normal text-foreground"
                    >
                      {dict.locationSection.procedureLabel}
                    </Label>
                    <Input
                      id="home-lead-procedure"
                      type="text"
                      list="cm-procedures-datalist"
                      required
                      value={leadProcedure}
                      onChange={(e) => setLeadProcedure(e.target.value)}
                      placeholder={dict.locationSection.procedurePlaceholder}
                      className="h-11 rounded-xl border border-border bg-background"
                    />
                  </div>

                  <Label
                    htmlFor="home-lead-privacy"
                    className="flex min-h-11 cursor-pointer items-center gap-3 font-sans text-xs font-normal normal-case tracking-normal text-muted-foreground"
                  >
                    <Checkbox
                      id="home-lead-privacy"
                      checked={leadPrivacy}
                      onCheckedChange={(val) => setLeadPrivacy(Boolean(val))}
                    />
                    <span>{dict.locationSection.privacyLabel}</span>
                  </Label>

                  <Button
                    type="submit"
                    disabled={!leadPrivacy}
                    className="cm-btn-sapphire h-12 w-full rounded-xl ps-6 pe-5 text-base font-semibold sm:w-auto sm:self-start"
                  >
                    <span>{dict.locationSection.submitBtn}</span>
                    <ArrowRightIcon className="cm-gold-arrow icon-cap" />
                  </Button>

                  {leadSubmitted && (
                    <p role="status" className="m-0 text-sm font-medium text-foreground">
                      {dict.locationSection.submittedNotice}
                    </p>
                  )}
                </form>
              </Card>
            </div>
          </div>
        </div>

        {/* Franja de Google Maps a ancho completo (Patrón Sección 4 de Clínica Diana Dussan) */}
        <div className="w-full border-t border-border">
          <iframe
            title={dict.locationSection.mapTitle}
            src="https://www.google.com/maps?q=Urbanizacion+Leon+XIII+Cayma+Arequipa+Peru&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-64 w-full border-0 sm:h-72"
          />
        </div>
      </section>
    </main>
  );
}
