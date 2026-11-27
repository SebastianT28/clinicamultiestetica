"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { GreyPlaceholder } from "@/components/ui/grey-placeholder";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowRightIcon,
  BodyContourIcon,
  CalendarCheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CollagenDropIcon,
  FacialHarmonyIcon,
  GlobeTrainingIcon,
  HarmonyNodesWatermark,
  HeartCareIcon,
  MapPinIcon,
  MaxillofacialIcon,
  ShieldCheckIcon,
  StarSolidIcon,
  WhatsAppIcon,
} from "@/components/icons/clinic-icons";
import {
  buildWhatsAppUrl,
  SITE_CONFIG,
  type ServiceCategorySlug,
} from "@/config/site";
import {
  HOME_CONTENT,
  type ServiceIconKind,
  type WhyIconKind,
} from "@/data/home-content";
import { useAppInteraction } from "@/lib/i18n-context";

type ServiceFilter = "featured" | "all" | ServiceCategorySlug;
type BookingModality = "presencial" | "virtual";

function renderServiceIcon(kind: ServiceIconKind) {
  switch (kind) {
    case "harmony":
      return <FacialHarmonyIcon className="size-9" />;
    case "maxillofacial":
      return <MaxillofacialIcon className="size-9" />;
    case "collagen":
      return <CollagenDropIcon className="size-9" />;
    case "body":
      return <BodyContourIcon className="size-9" />;
  }
}

function renderWhyIcon(kind: WhyIconKind) {
  switch (kind) {
    case "globe":
      return <GlobeTrainingIcon className="size-7" />;
    case "harmony":
      return <FacialHarmonyIcon className="size-7" />;
    case "heart":
      return <HeartCareIcon className="size-7" />;
    case "shield":
      return <ShieldCheckIcon className="size-7" />;
  }
}

export function HomeView() {
  const {
    locale,
    selectedProcedure,
    setSelectedProcedure,
    scrollToBookingForm,
  } = useAppInteraction();

  const dict = HOME_CONTENT[locale];

  // Apartado 1: Portada principal de 2 diapositivas (estilo Clínica Cavadas)
  const [heroIndex, setHeroIndex] = useState(0);
  const heroSlides = dict.hero.slides;
  const activeHero = heroSlides[heroIndex] ?? heroSlides[0];

  // Apartado 3: Servicios de Excelencia (carrusel de 4 tarjetas en Desktop / 1 en Móvil + filtro)
  const [serviceFilter, setServiceFilter] = useState<ServiceFilter>("featured");
  const [servicePage, setServicePage] = useState(0);

  // Apartado 7: Formulario limpio de reserva de citas web
  const [modality, setModality] = useState<BookingModality>("presencial");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [notes, setNotes] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(true);
  const [privacyError, setPrivacyError] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const filteredServices = dict.servicesSection.items.filter((item) => {
    if (serviceFilter === "featured") return item.featured;
    if (serviceFilter === "all") return true;
    return item.category === serviceFilter;
  });

  const cardsPerPage = 4;
  const totalServicePages = Math.max(
    1,
    Math.ceil(filteredServices.length / cardsPerPage)
  );
  const safeServicePage = Math.min(servicePage, totalServicePages - 1);
  const visibleServices = filteredServices.slice(
    safeServicePage * cardsPerPage,
    safeServicePage * cardsPerPage + cardsPerPage
  );

  const handleFilterChange = (nextFilter: ServiceFilter) => {
    setServiceFilter(nextFilter);
    setServicePage(0);
  };

  const buildBookingWhatsAppMessage = () => {
    const cleanName = patientName.trim();
    const cleanPhone = patientPhone.trim();
    const cleanEmail = patientEmail.trim();
    const cleanProc = selectedProcedure.trim();
    const cleanDate = preferredDate.trim();
    const cleanNotes = notes.trim();

    if (locale === "es") {
      const modalityText =
        modality === "presencial"
          ? "Presencial en Arequipa"
          : "Orientación virtual previa";
      return `Hola Dra. Gabriela Delgado y Clínica Multiestética. Solicito reservar una cita desde dragabydelgado.com: Nombre: ${cleanName} · Teléfono: ${cleanPhone} · Correo: ${cleanEmail} · Modalidad: ${modalityText} · Servicio: ${cleanProc}${cleanDate ? ` · Fecha tentativa: ${cleanDate}` : ""}${cleanNotes ? ` · Comentario: ${cleanNotes}` : ""}.`;
    }

    const modalityText =
      modality === "presencial"
        ? "In-person in Arequipa"
        : "Initial virtual guidance";
    return `Hello Dr. Gabriela Delgado and Clínica Multiestética. I would like to book an appointment via dragabydelgado.com: Name: ${cleanName} · Phone: ${cleanPhone} · Email: ${cleanEmail} · Modality: ${modalityText} · Service: ${cleanProc}${cleanDate ? ` · Preferred date: ${cleanDate}` : ""}${cleanNotes ? ` · Goal: ${cleanNotes}` : ""}.`;
  };

  const handleBookingSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!privacyAccepted) {
      setPrivacyError(true);
      return;
    }
    setPrivacyError(false);
    setBookingConfirmed(true);
  };

  return (
    <main id="inicio">
      {/* ─── APARTADO 1: PORTADA PRINCIPAL (HERO MARCA PERSONAL ESTILO CLÍNICA CAVADAS) ─── */}
      <section className="cm-hero-outer">
        <div className="cm-hero-stage">
          <div className="cm-container">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
              {/* Columna Izquierda: Insignia + H1 Outfit 600 + Controles de Diapositiva */}
              <div className="flex flex-col items-start lg:col-span-6">
                <div className="cm-hero-badge-bar">
                  <span className="cm-hero-badge-solid">{activeHero.badgeTag}</span>
                  <span className="cm-hero-badge-text">{activeHero.badgeText}</span>
                </div>

                <h1 className="mt-5 mb-0 text-3xl leading-tight tracking-tight text-foreground sm:text-5xl xl:text-[3.375rem] xl:leading-[1.12]">
                  {activeHero.title}
                </h1>

                <div className="mt-7 flex items-center gap-3">
                  <div
                    role="group"
                    aria-label={
                      locale === "es"
                        ? "Control de portada principal"
                        : "Hero slide controls"
                    }
                    className="cm-hero-controls-dock"
                  >
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label={dict.hero.prevSlideLabel}
                      onClick={() =>
                        setHeroIndex(
                          (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
                        )
                      }
                      className="cm-hero-arrow-btn"
                    >
                      <ChevronLeftIcon className="size-5" />
                    </Button>
                    <span className="px-2 font-heading text-sm font-medium text-foreground">
                      {heroIndex + 1} / {heroSlides.length}
                    </span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label={dict.hero.nextSlideLabel}
                      onClick={() =>
                        setHeroIndex((prev) => (prev + 1) % heroSlides.length)
                      }
                      className="cm-hero-arrow-btn"
                    >
                      <ChevronRightIcon className="size-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Retrato/Video de la Dra. Gabriela + Tarjeta Blanca Biselada (45°) */}
              <div className="relative lg:col-span-6 lg:pb-6">
                <div className="lg:pr-8">
                  <GreyPlaceholder
                    isVideo={Boolean(activeHero.isVideo)}
                    aspectClassName="aspect-[4/5] sm:aspect-[16/11] lg:aspect-[5/4]"
                    title={activeHero.portraitTitle}
                    subtitle={activeHero.portraitSubtitle}
                  />
                </div>

                <div className="mt-4 sm:max-w-sm lg:absolute lg:right-0 lg:bottom-0 lg:z-10 lg:mt-0">
                  <div className="cm-chamfer-card">
                    <p className="m-0 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {activeHero.cardDescription}
                    </p>
                    <div className="mt-5">
                      {activeHero.ctaTarget === "booking" ? (
                        <Button
                          type="button"
                          onClick={() => scrollToBookingForm()}
                          className="cm-btn-cavadas"
                        >
                          <span>{activeHero.ctaLabel}</span>
                          <span className="cm-btn-cavadas-box" aria-hidden="true">
                            <ArrowRightIcon className="cm-btn-cavadas-arrow" />
                          </span>
                        </Button>
                      ) : (
                        <Button asChild className="cm-btn-cavadas">
                          <Link href="#servicios">
                            <span>{activeHero.ctaLabel}</span>
                            <span className="cm-btn-cavadas-box" aria-hidden="true">
                              <ArrowRightIcon className="cm-btn-cavadas-arrow" />
                            </span>
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APARTADO 2: MARCA PERSONAL Y ESPECIALIZACIÓN (ESTILO "ATENCIÓN QUIRÚRGICA ESPECIALIZADA") ─── */}
      <section id="especializacion" className="cm-section">
        <div className="cm-container">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Columna Izquierda (~58%): Título en dos tonos + Retrato con Burbuja de Cita */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <span className="cm-pill-tag">
                  <span className="cm-pill-dot" aria-hidden="true" />
                  <span>{dict.specialization.pill}</span>
                </span>
              </div>

              <h2 className="m-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl xl:text-[2.875rem] xl:leading-[1.15]">
                {dict.specialization.titleLead}
                <span className="cm-accent-sapphire">
                  {dict.specialization.titleAccent}
                </span>
              </h2>

              <div className="cm-portrait-pocket-wrap mt-8 grid grid-cols-1 gap-4 md:grid-cols-12 md:items-end">
                <div className="md:col-span-8">
                  <GreyPlaceholder
                    aspectClassName="aspect-[4/3]"
                    title={dict.specialization.portraitTitle}
                    subtitle={dict.specialization.portraitSubtitle}
                  />
                </div>

                <div className="md:col-span-4 md:-ml-12 md:mb-4 z-10">
                  <blockquote className="cm-quote-bubble m-0">
                    <p className="m-0 text-sm leading-relaxed text-primary-foreground">
                      {dict.specialization.quote}
                    </p>
                    <footer className="mt-3 font-heading text-xs font-semibold text-primary-foreground">
                      {dict.specialization.quoteAuthor}
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Columna Derecha (~42%): Indicador Monumental 18+ + Avatares de Confianza + CTA */}
            <div className="flex flex-col items-start lg:col-span-5 lg:pt-8">
              <div className="flex flex-col">
                <span className="cm-giant-stat">{dict.specialization.statNumber}</span>
                <span className="mt-2 font-heading text-base font-medium text-foreground">
                  {dict.specialization.statCaption}
                </span>
              </div>

              <div className="mt-7 flex items-center gap-4">
                <div className="flex items-center" aria-hidden="true">
                  <span className="cm-avatar-circle bg-card p-1">
                    <Image
                      src="/brand/isotipo-dra-gabriela.png"
                      alt=""
                      width={64}
                      height={64}
                      className="size-9 object-contain"
                    />
                  </span>
                  <span className="cm-avatar-circle">CM</span>
                  <span className="cm-avatar-circle">COP</span>
                </div>
                <h3 className="m-0 text-sm leading-snug text-foreground sm:text-base">
                  {dict.specialization.trustHeading}
                </h3>
              </div>

              <p className="mt-5 mb-0 text-base leading-relaxed text-muted-foreground">
                {dict.specialization.description}
              </p>

              <div className="mt-7">
                <Button
                  type="button"
                  onClick={() => scrollToBookingForm()}
                  className="cm-btn-cavadas"
                >
                  <span>{dict.specialization.ctaLabel}</span>
                  <span className="cm-btn-cavadas-box" aria-hidden="true">
                    <ArrowRightIcon className="cm-btn-cavadas-arrow" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinta divisoria de especialidades estilo Clínica Cavadas */}
      <div className="cm-specialty-band" aria-hidden="true">
        <div className="cm-specialty-track">
          {[...dict.specialization.tickerItems, ...dict.specialization.tickerItems].map(
            (label, idx) => (
              <span key={`${label}-${idx}`} className="cm-specialty-item">
                <span>{label}</span>
                <span className="cm-specialty-sep" />
              </span>
            )
          )}
        </div>
      </div>

      {/* ─── APARTADO 3: SERVICIOS DE EXCELENCIA (CARRUSEL + TARJETA HOVER CLÍNICA CAVADAS) ─── */}
      <section id="servicios" className="cm-section">
        <div className="cm-container">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="cm-pill-tag">
              <span className="cm-pill-dot" aria-hidden="true" />
              <span>{dict.servicesSection.pill}</span>
            </span>

            <h2 className="mt-4 mb-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl xl:text-[2.875rem]">
              {dict.servicesSection.titleLead}
              <span className="cm-accent-sapphire">
                {dict.servicesSection.titleAccent}
              </span>
            </h2>

            <p className="mt-3 mb-0 max-w-2xl text-base text-muted-foreground">
              {dict.servicesSection.subtitle}
            </p>
          </div>

          {/* Filtros por unidad médica (los 16 servicios del brief organizados) */}
          <div
            role="group"
            aria-label={dict.servicesSection.pill}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {(
              [
                { id: "featured", label: dict.servicesSection.filterFeatured },
                {
                  id: "cirugia-perfilamiento-facial",
                  label: dict.servicesSection.filterFacialSurgery,
                },
                {
                  id: "armonizacion-facial-piel",
                  label: dict.servicesSection.filterHarmonization,
                },
                {
                  id: "cirugia-estetica-corporal",
                  label: dict.servicesSection.filterBodySurgery,
                },
                { id: "all", label: dict.servicesSection.filterAll },
              ] as const
            ).map((tab) => (
              <Button
                key={tab.id}
                type="button"
                variant="outline"
                aria-pressed={serviceFilter === tab.id}
                data-active={serviceFilter === tab.id ? "true" : "false"}
                onClick={() => handleFilterChange(tab.id)}
                className="cm-filter-pill"
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Carrusel de 4 tarjetas (como steps/85 y steps/97 de clinicacavadas.es) */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleServices.map((service) => (
              <article key={service.slug} className="cm-service-card">
                <div className="cm-service-media-row">
                  <span className="cm-service-icon-box">
                    {renderServiceIcon(service.iconKind)}
                  </span>
                  <span className="cm-service-photo-reveal" aria-hidden="true">
                    {service.photoRevealLabel}
                  </span>
                </div>

                <h3 className="cm-service-title">{service.title}</h3>

                <p className="mt-3 mb-0 text-sm leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>

                <div className="mt-auto pt-2">
                  <div className="cm-service-divider" />
                  <div className="flex items-center justify-between gap-2">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => scrollToBookingForm(service.title)}
                      className="cm-service-action"
                    >
                      <span>{dict.servicesSection.cardActionLabel}</span>
                      <ArrowRightIcon className="cm-service-action-arrow" />
                    </Button>
                    <span className="text-xs text-muted-foreground">
                      {service.specialistTag}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Controles circulares + puntos de paginación con indicador de posición */}
          {totalServicePages > 1 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                type="button"
                size="icon"
                aria-label={dict.servicesSection.prevLabel}
                onClick={() =>
                  setServicePage(
                    (prev) => (prev - 1 + totalServicePages) % totalServicePages
                  )
                }
                className="cm-carousel-circle-btn"
              >
                <ChevronLeftIcon className="size-5" />
              </Button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalServicePages }).map((_, idx) => (
                  <Button
                    key={`svc-dot-${idx}`}
                    type="button"
                    variant="ghost"
                    aria-current={safeServicePage === idx ? "true" : undefined}
                    aria-label={`${dict.servicesSection.pageDotPrefix} ${idx + 1} / ${totalServicePages}`}
                    data-active={safeServicePage === idx ? "true" : "false"}
                    onClick={() => setServicePage(idx)}
                    className="cm-dot-btn"
                  >
                    <span className="cm-dot-indicator" />
                  </Button>
                ))}
              </div>

              <Button
                type="button"
                size="icon"
                aria-label={dict.servicesSection.nextLabel}
                onClick={() =>
                  setServicePage((prev) => (prev + 1) % totalServicePages)
                }
                className="cm-carousel-circle-btn"
              >
                <ChevronRightIcon className="size-5" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ─── APARTADO 4: HISTORIA PERSONAL DE LA DOCTORA (ESTILO "DESDE 1994. CIRUJANO...") ─── */}
      <section id="quien-soy" className="cm-section cm-section-bordered">
        <div className="cm-container">
          <div className="cm-story-shell">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Columna Izquierda (~36%): Retrato vertical completo */}
              <div className="p-4 sm:p-6 lg:col-span-4 lg:p-0">
                <GreyPlaceholder
                  aspectClassName="aspect-[3/4] lg:h-full lg:aspect-auto"
                  className="lg:rounded-none lg:border-0"
                  title={dict.storySection.portraitTitle}
                  subtitle={dict.storySection.portraitSubtitle}
                />
              </div>

              {/* Columna Derecha (~64%): Biografía personal, viñetas, cita y contadores */}
              <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-8 lg:p-12">
                <div>
                  <span className="cm-pill-tag">
                    <span className="cm-pill-dot" aria-hidden="true" />
                    <span>{dict.storySection.pill}</span>
                  </span>

                  <h2 className="mt-4 mb-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl xl:text-[2.875rem]">
                    {dict.storySection.titleLead}
                    <span className="cm-accent-sapphire">
                      {dict.storySection.titleAccent}
                    </span>
                  </h2>

                  <p className="mt-3 mb-0 font-heading text-base font-medium text-foreground">
                    {dict.storySection.openingMotto}
                  </p>

                  <div className="mt-4 flex flex-col gap-3 text-base leading-relaxed text-muted-foreground">
                    {dict.storySection.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 24)} className="m-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <p className="mt-6 mb-2 font-heading text-base font-medium text-foreground">
                    {dict.storySection.bulletsIntro}
                  </p>
                  <ul className="m-0 flex list-disc flex-col gap-1.5 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {dict.storySection.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 24)}>{bullet}</li>
                    ))}
                  </ul>

                  <blockquote className="mt-6 mb-0 rounded-2xl bg-secondary p-5">
                    <p className="m-0 font-heading text-base font-medium leading-relaxed text-foreground sm:text-lg">
                      {dict.storySection.personalQuote}
                    </p>
                    <footer className="mt-2 text-xs text-muted-foreground">
                      {dict.storySection.quoteSignature}
                    </footer>
                  </blockquote>
                </div>

                {/* Fila Inferior: CTA + 2 Contadores de Autoridad */}
                <div className="mt-8 flex flex-col justify-between gap-6 border-t border-border pt-7 sm:flex-row sm:items-center">
                  <Button
                    type="button"
                    onClick={() => scrollToBookingForm()}
                    className="cm-btn-cavadas self-start"
                  >
                    <span>{dict.storySection.ctaLabel}</span>
                    <span className="cm-btn-cavadas-box" aria-hidden="true">
                      <ArrowRightIcon className="cm-btn-cavadas-arrow" />
                    </span>
                  </Button>

                  <dl className="m-0 flex flex-wrap items-center gap-8">
                    {dict.storySection.counters.map((counter) => (
                      <div key={counter.label} className="flex flex-col">
                        <dt className="order-2 mt-1 text-xs text-muted-foreground sm:text-sm">
                          {counter.label}
                        </dt>
                        <dd className="cm-story-counter order-1 m-0">
                          {counter.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            {/* Franja inferior Champagne Seda con el slogan de cierre del brief */}
            <div className="cm-story-ribbon text-center text-sm font-medium">
              {dict.storySection.ribbonText}
            </div>
          </div>
        </div>
      </section>

      {/* ─── APARTADO 5: ¿POR QUÉ LA DRA. GABRIELA DELGADO? (GRID 2X2 CLÍNICA CAVADAS) ─── */}
      <section id="por-que-dra-gabriela" className="cm-section cm-section-bordered">
        <div className="cm-container">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Columna Izquierda (~33%): Píldora + Marca de agua geométrica sutil */}
            <div className="flex flex-col justify-between lg:col-span-4 lg:min-h-80">
              <div>
                <span className="cm-pill-tag">
                  <span className="cm-pill-dot" aria-hidden="true" />
                  <span>{dict.whySection.pill}</span>
                </span>
              </div>

              <div className="mt-10 hidden lg:block">
                <HarmonyNodesWatermark className="cm-why-watermark size-48" />
              </div>
            </div>

            {/* Columna Derecha (~67%): H2 + Grid 2x2 sin bordes recargados */}
            <div className="lg:col-span-8">
              <h2 className="m-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl xl:text-[2.875rem]">
                {dict.whySection.titleLead}
                <span className="cm-accent-sapphire">
                  {dict.whySection.titleAccent}
                </span>
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
                {dict.whySection.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col items-start gap-4 sm:flex-row"
                  >
                    <span className="cm-why-icon-wrap">
                      {renderWhyIcon(item.iconKind)}
                    </span>
                    <div>
                      <h3 className="m-0 text-xl leading-snug text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 mb-0 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APARTADO 6: ¿QUÉ PIENSAN NUESTROS PACIENTES? (6 TARJETAS DIANA DUSSAN + MOVIMIENTO A LA DERECHA CAVADAS) ─── */}
      <section id="testimonios" className="cm-section cm-section-bordered">
        <div className="cm-container">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="cm-pill-tag">
              <span className="cm-pill-dot" aria-hidden="true" />
              <span>{dict.reviewsSection.pill}</span>
            </span>

            <h2 className="mt-4 mb-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl xl:text-[2.875rem]">
              {dict.reviewsSection.title}
            </h2>

            <p className="mt-3 mb-0 text-base text-muted-foreground">
              {dict.reviewsSection.subtitle}
            </p>
          </div>

          <div className="cm-reviews-marquee mt-10">
            <div className="cm-reviews-track">
              {/* Serie 1 (accesible para lectores de pantalla: 6 reseñas) */}
              {dict.reviewsSection.reviews.map((rev) => (
                <article key={rev.id} className="cm-review-card">
                  <div className="cm-review-avatar-wrap">
                    <GreyPlaceholder
                      circle
                      aspectClassName="aspect-square"
                      className="size-24 p-2"
                      title={rev.avatarPlaceholder}
                    />
                    <span className="cm-review-verified-badge" aria-hidden="true">
                      <StarSolidIcon className="size-3.5" />
                    </span>
                  </div>

                  <p className="mt-5 mb-0 text-sm leading-relaxed text-muted-foreground">
                    {rev.quote}
                  </p>

                  <div className="mt-auto pt-5">
                    <h3 className="m-0 text-base text-foreground">
                      {rev.patientLabel}
                    </h3>
                    <p className="mt-0.5 mb-2.5 text-xs text-muted-foreground">
                      {rev.procedureName}
                    </p>
                    <div
                      role="img"
                      aria-label={dict.reviewsSection.starAriaLabel}
                      className="flex items-center justify-center gap-1"
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarSolidIcon key={star} className="cm-gold-star size-4" />
                      ))}
                    </div>
                  </div>
                </article>
              ))}

              {/* Serie 2 duplicada para bucle continuo infinito hacia la derecha */}
              {dict.reviewsSection.reviews.map((rev) => (
                <article
                  key={`${rev.id}-clone`}
                  aria-hidden="true"
                  className="cm-review-card"
                >
                  <div className="cm-review-avatar-wrap">
                    <GreyPlaceholder
                      circle
                      aspectClassName="aspect-square"
                      className="size-24 p-2"
                      title={rev.avatarPlaceholder}
                    />
                    <span className="cm-review-verified-badge">
                      <StarSolidIcon className="size-3.5" />
                    </span>
                  </div>

                  <p className="mt-5 mb-0 text-sm leading-relaxed text-muted-foreground">
                    {rev.quote}
                  </p>

                  <div className="mt-auto pt-5">
                    <p className="m-0 font-heading text-base font-medium text-foreground">
                      {rev.patientLabel}
                    </p>
                    <p className="mt-0.5 mb-2.5 text-xs text-muted-foreground">
                      {rev.procedureName}
                    </p>
                    <div className="flex items-center justify-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <StarSolidIcon key={star} className="cm-gold-star size-4" />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── APARTADO 7: FORMULARIO LIMPIO UI/UX PARA RESERVA DE CITAS WEB ─── */}
      <section id="reserva-cita" className="cm-section cm-section-bordered">
        <div className="cm-container">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Columna Izquierda: Datos de Consultorio y Pasos Claros */}
            <div className="lg:col-span-5">
              <span className="cm-pill-tag">
                <span className="cm-pill-dot" aria-hidden="true" />
                <span>{dict.bookingSection.pill}</span>
              </span>

              <h2 className="mt-4 mb-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
                {dict.bookingSection.titleLead}
                <span className="cm-accent-sapphire">
                  {dict.bookingSection.titleAccent}
                </span>
              </h2>

              <p className="mt-3 mb-0 text-base leading-relaxed text-muted-foreground">
                {dict.bookingSection.subtitle}
              </p>

              <dl className="mt-7 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
                    <MapPinIcon className="size-5" />
                  </span>
                  <div>
                    <dt className="text-xs text-muted-foreground">
                      {dict.bookingSection.addressLabel}
                    </dt>
                    <dd className="m-0 mt-0.5 font-heading text-base font-medium text-foreground">
                      {dict.bookingSection.addressValue}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <div>
                    <dt className="text-xs text-muted-foreground">
                      {dict.bookingSection.whatsappLabel}
                    </dt>
                    <dd className="m-0 mt-0.5 font-heading text-base font-medium text-foreground">
                      {SITE_CONFIG.whatsappDisplay}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground">
                    <CalendarCheckIcon className="size-5" />
                  </span>
                  <div>
                    <dt className="text-xs text-muted-foreground">
                      {dict.bookingSection.modalityInfoLabel}
                    </dt>
                    <dd className="m-0 mt-0.5 font-heading text-base font-medium text-foreground">
                      {dict.bookingSection.modalityInfoValue}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 border-t border-border pt-6">
                <h3 className="m-0 text-lg text-foreground">
                  {dict.bookingSection.stepsTitle}
                </h3>
                <ol className="mt-4 m-0 flex list-none flex-col gap-3.5 p-0">
                  {dict.bookingSection.steps.map((step, index) => (
                    <li key={step.title} className="flex items-start gap-3">
                      <span className="cm-step-badge" aria-hidden="true">
                        {index + 1}
                      </span>
                      <div>
                        <p className="m-0 font-heading text-sm font-medium text-foreground">
                          {step.title}
                        </p>
                        <p className="m-0 mt-0.5 text-xs leading-relaxed text-muted-foreground">
                          {step.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Blanca Limpia de Reserva de Cita */}
            <div className="lg:col-span-7">
              <div className="cm-booking-card">
                <h3 className="m-0 text-2xl text-foreground">
                  {dict.bookingSection.formTitle}
                </h3>
                <p className="mt-1 mb-0 text-sm text-muted-foreground">
                  {dict.bookingSection.formSubtitle}
                </p>

                <form
                  onSubmit={handleBookingSubmit}
                  className="mt-6 flex flex-col gap-4"
                >
                  {/* Selector limpio de modalidad */}
                  <fieldset className="m-0 border-0 p-0">
                    <legend className="mb-2 text-xs font-medium text-foreground">
                      {dict.bookingSection.modalityLegend}
                    </legend>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      <Button
                        type="button"
                        variant="outline"
                        aria-pressed={modality === "presencial"}
                        data-active={modality === "presencial" ? "true" : "false"}
                        onClick={() => setModality("presencial")}
                        className="cm-filter-pill h-11 w-full rounded-xl"
                      >
                        {dict.bookingSection.modalityInPerson}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        aria-pressed={modality === "virtual"}
                        data-active={modality === "virtual" ? "true" : "false"}
                        onClick={() => setModality("virtual")}
                        className="cm-filter-pill h-11 w-full rounded-xl"
                      >
                        {dict.bookingSection.modalityVirtual}
                      </Button>
                    </div>
                  </fieldset>

                  {/* Fila 1: Nombre + WhatsApp */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="booking-name"
                        className="font-sans text-xs font-medium normal-case tracking-normal text-foreground"
                      >
                        {dict.bookingSection.nameLabel}
                      </Label>
                      <Input
                        id="booking-name"
                        type="text"
                        required
                        value={patientName}
                        onChange={(e) => {
                          setPatientName(e.target.value);
                          setBookingConfirmed(false);
                        }}
                        placeholder={dict.bookingSection.namePlaceholder}
                        className="h-11 rounded-xl border border-border bg-background"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="booking-phone"
                        className="font-sans text-xs font-medium normal-case tracking-normal text-foreground"
                      >
                        {dict.bookingSection.phoneLabel}
                      </Label>
                      <Input
                        id="booking-phone"
                        type="tel"
                        required
                        value={patientPhone}
                        onChange={(e) => {
                          setPatientPhone(e.target.value);
                          setBookingConfirmed(false);
                        }}
                        placeholder={dict.bookingSection.phonePlaceholder}
                        className="h-11 rounded-xl border border-border bg-background"
                      />
                    </div>
                  </div>

                  {/* Fila 2: Correo + Fecha tentativa */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="booking-email"
                        className="font-sans text-xs font-medium normal-case tracking-normal text-foreground"
                      >
                        {dict.bookingSection.emailLabel}
                      </Label>
                      <Input
                        id="booking-email"
                        type="email"
                        required
                        value={patientEmail}
                        onChange={(e) => {
                          setPatientEmail(e.target.value);
                          setBookingConfirmed(false);
                        }}
                        placeholder={dict.bookingSection.emailPlaceholder}
                        className="h-11 rounded-xl border border-border bg-background"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="booking-date"
                        className="font-sans text-xs font-medium normal-case tracking-normal text-foreground"
                      >
                        {dict.bookingSection.dateLabel}
                      </Label>
                      <Input
                        id="booking-date"
                        type="date"
                        value={preferredDate}
                        onChange={(e) => {
                          setPreferredDate(e.target.value);
                          setBookingConfirmed(false);
                        }}
                        className="h-11 rounded-xl border border-border bg-background"
                      />
                    </div>
                  </div>

                  {/* Fila 3: Procedimiento de interés (conectado con las tarjetas de Servicios) */}
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="booking-procedure"
                      className="font-sans text-xs font-medium normal-case tracking-normal text-foreground"
                    >
                      {dict.bookingSection.procedureLabel}
                    </Label>
                    <Input
                      id="booking-procedure"
                      type="text"
                      list="cm-procedures-datalist"
                      required
                      value={selectedProcedure}
                      onChange={(e) => {
                        setSelectedProcedure(e.target.value);
                        setBookingConfirmed(false);
                      }}
                      placeholder={dict.bookingSection.procedurePlaceholder}
                      className="h-11 rounded-xl border border-border bg-background"
                    />
                  </div>

                  {/* Fila 4: Comentario opcional */}
                  <div className="flex flex-col gap-1.5">
                    <Label
                      htmlFor="booking-notes"
                      className="font-sans text-xs font-medium normal-case tracking-normal text-foreground"
                    >
                      {dict.bookingSection.notesLabel}
                    </Label>
                    <Input
                      id="booking-notes"
                      type="text"
                      value={notes}
                      onChange={(e) => {
                        setNotes(e.target.value);
                        setBookingConfirmed(false);
                      }}
                      placeholder={dict.bookingSection.notesPlaceholder}
                      className="h-11 rounded-xl border border-border bg-background"
                    />
                  </div>

                  {/* Casilla de Privacidad Ley N° 29733 */}
                  <Label
                    htmlFor="booking-privacy"
                    className="flex min-h-11 cursor-pointer items-center gap-3 font-sans text-xs font-normal normal-case tracking-normal text-muted-foreground"
                  >
                    <Checkbox
                      id="booking-privacy"
                      checked={privacyAccepted}
                      onCheckedChange={(val) => {
                        const checked = Boolean(val);
                        setPrivacyAccepted(checked);
                        if (checked) setPrivacyError(false);
                      }}
                    />
                    <span>{dict.bookingSection.privacyLabel}</span>
                  </Label>

                  {privacyError && (
                    <p role="alert" className="m-0 text-xs text-destructive">
                      {dict.bookingSection.privacyError}
                    </p>
                  )}

                  <Button
                    type="submit"
                    className="cm-btn-sapphire h-12 w-full rounded-xl text-base"
                  >
                    <span>{dict.bookingSection.submitBtn}</span>
                    <ArrowRightIcon className="icon-cap" />
                  </Button>

                  {bookingConfirmed && (
                    <div role="status" className="cm-success-banner mt-1">
                      <p className="m-0 font-heading text-base font-medium text-foreground">
                        {dict.bookingSection.successTitle}
                      </p>
                      <p className="mt-1 mb-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {dict.bookingSection.successBody}
                      </p>
                      <Button
                        asChild
                        className="cm-btn-whatsapp h-11 rounded-xl px-5 text-sm"
                      >
                        <a
                          href={buildWhatsAppUrl(buildBookingWhatsAppMessage())}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <WhatsAppIcon className="size-4" />
                          <span>{dict.bookingSection.whatsappConfirmBtn}</span>
                        </a>
                      </Button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
