"use client";

import { useState } from "react";
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
import { buildWhatsAppUrl, SITE_CONFIG } from "@/config/site";
import {
  HOME_CONTENT,
  type ServiceIconKind,
  type WhyIconKind,
} from "@/data/home-content";
import { useAppInteraction } from "@/lib/i18n-context";

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

  // Apartado 1: Portada principal minimalista (2 diapositivas)
  const [heroIndex, setHeroIndex] = useState(0);
  const heroSlides = dict.hero.slides;
  const activeHero = heroSlides[heroIndex] ?? heroSlides[0];

  // Apartado 3: Servicios de Excelencia (carrusel limpio de 4 tarjetas)
  const [servicePage, setServicePage] = useState(0);
  const cardsPerPage = 4;
  const totalServicePages = Math.max(
    1,
    Math.ceil(dict.servicesSection.items.length / cardsPerPage)
  );
  const safeServicePage = Math.min(servicePage, totalServicePages - 1);
  const visibleServices = dict.servicesSection.items.slice(
    safeServicePage * cardsPerPage,
    safeServicePage * cardsPerPage + cardsPerPage
  );

  // Apartado 7: Formulario minimalista de reserva de citas web
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(true);
  const [privacyError, setPrivacyError] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const buildBookingWhatsAppMessage = () => {
    const cleanName = patientName.trim();
    const cleanPhone = patientPhone.trim();
    const cleanEmail = patientEmail.trim();
    const cleanProc = selectedProcedure.trim();

    if (locale === "es") {
      return `Hola Dra. Gabriela Delgado y Clínica Multiestética. Solicito reservar una cita desde dragabydelgado.com: Nombre: ${cleanName} · Teléfono: ${cleanPhone} · Correo: ${cleanEmail} · Servicio: ${cleanProc}.`;
    }

    return `Hello Dr. Gabriela Delgado and Clínica Multiestética. I would like to book an appointment via dragabydelgado.com: Name: ${cleanName} · Phone: ${cleanPhone} · Email: ${cleanEmail} · Service: ${cleanProc}.`;
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
      {/* ─── APARTADO 1: PORTADA PRINCIPAL MINIMALISTA ─── */}
      <section className="cm-hero-outer">
        <div className="cm-hero-stage">
          <div className="cm-container">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="flex flex-col items-start lg:col-span-6">
                <h1 className="m-0 text-3xl leading-tight tracking-tight text-foreground sm:text-5xl xl:text-[3.375rem] xl:leading-[1.12]">
                  {activeHero.title}
                </h1>

                <div className="mt-8 flex items-center gap-3">
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

              <div className="relative lg:col-span-6 lg:pb-6">
                <div className="lg:pr-8">
                  <GreyPlaceholder
                    isVideo={Boolean(activeHero.isVideo)}
                    aspectClassName="aspect-[4/5] sm:aspect-[16/11] lg:aspect-[5/4]"
                    title={activeHero.portraitTitle}
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
                          <Link href="/servicios">
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

      {/* ─── APARTADO 2: ESPECIALIZACIÓN Y MARCA PERSONAL ─── */}
      <section id="especializacion" className="cm-section">
        <div className="cm-container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
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
                  />
                </div>

                <div className="z-10 md:col-span-4 md:-ml-12 md:mb-4">
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

            <div className="flex flex-col items-start lg:col-span-5">
              <div className="flex flex-col">
                <span className="cm-giant-stat">
                  {dict.specialization.statNumber}
                </span>
                <span className="mt-2 font-heading text-base font-medium text-foreground">
                  {dict.specialization.statCaption}
                </span>
              </div>

              <p className="mt-6 mb-0 text-base leading-relaxed text-muted-foreground">
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

      {/* ─── APARTADO 3: SERVICIOS DE EXCELENCIA (CARRUSEL LIMPIO DE 4 TARJETAS) ─── */}
      <section id="servicios" className="cm-section cm-section-bordered">
        <div className="cm-container">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="m-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl xl:text-[2.875rem]">
              {dict.servicesSection.titleLead}
              <span className="cm-accent-sapphire">
                {dict.servicesSection.titleAccent}
              </span>
            </h2>

            <p className="mt-3 mb-0 text-base text-muted-foreground">
              {dict.servicesSection.subtitle}
            </p>
          </div>

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
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => scrollToBookingForm(service.title)}
                    className="cm-service-action"
                  >
                    <span>{dict.servicesSection.cardActionLabel}</span>
                    <ArrowRightIcon className="cm-service-action-arrow" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
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

            <Button
              asChild
              variant="outline"
              className="cm-btn-outline-clean h-11 rounded-full px-6 text-sm"
            >
              <Link href="/servicios">
                <span>{dict.servicesSection.viewAllLabel}</span>
                <ArrowRightIcon className="icon-cap" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── APARTADO 4: HISTORIA PERSONAL DE LA DRA. GABRIELA DELGADO ─── */}
      <section id="quien-soy" className="cm-section cm-section-bordered">
        <div className="cm-container">
          <div className="cm-story-shell">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="p-4 sm:p-6 lg:col-span-5 lg:p-0">
                <GreyPlaceholder
                  aspectClassName="aspect-[4/5] lg:h-full lg:aspect-auto"
                  className="lg:rounded-none lg:border-0"
                  title={dict.storySection.portraitTitle}
                />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-10 lg:col-span-7 lg:p-12">
                <div>
                  <h2 className="m-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl xl:text-[2.875rem]">
                    {dict.storySection.titleLead}
                    <span className="cm-accent-sapphire">
                      {dict.storySection.titleAccent}
                    </span>
                  </h2>

                  <p className="mt-3 mb-0 font-heading text-base font-medium text-foreground">
                    {dict.storySection.openingMotto}
                  </p>

                  <div className="mt-5 flex flex-col gap-3.5 text-base leading-relaxed text-muted-foreground">
                    {dict.storySection.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 24)} className="m-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <blockquote className="mt-7 mb-0 rounded-2xl bg-secondary p-5">
                    <p className="m-0 font-heading text-base font-medium leading-relaxed text-foreground">
                      {dict.storySection.personalQuote}
                    </p>
                    <footer className="mt-2 text-xs text-muted-foreground">
                      {dict.storySection.quoteSignature}
                    </footer>
                  </blockquote>
                </div>

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
                        <dt className="order-2 mt-1 text-xs text-muted-foreground">
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
          </div>
        </div>
      </section>

      {/* ─── APARTADO 5: ¿POR QUÉ LA DRA. GABRIELA DELGADO? ─── */}
      <section id="por-que-dra-gabriela" className="cm-section cm-section-bordered">
        <div className="cm-container">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-between lg:col-span-4 lg:min-h-72">
              <p className="m-0 font-heading text-base font-medium text-muted-foreground">
                {dict.whySection.sectionLabel}
              </p>

              <div className="mt-10 hidden lg:block">
                <HarmonyNodesWatermark className="cm-why-watermark size-44" />
              </div>
            </div>

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
                      <p className="mt-2 mb-0 text-sm leading-relaxed text-muted-foreground">
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

      {/* ─── APARTADO 6: ¿QUÉ PIENSAN NUESTROS PACIENTES? (6 RESEÑAS MOVIÉNDOSE A LA DERECHA) ─── */}
      <section id="testimonios" className="cm-section cm-section-bordered">
        <div className="cm-container">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="m-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl xl:text-[2.875rem]">
              {dict.reviewsSection.title}
            </h2>

            <p className="mt-3 mb-0 text-base text-muted-foreground">
              {dict.reviewsSection.subtitle}
            </p>
          </div>

          <div className="cm-reviews-marquee mt-10">
            <div className="cm-reviews-track">
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

      {/* ─── APARTADO 7: RESERVA DE CITAS WEB (MINIMALISTA Y LIMPIO) ─── */}
      <section id="reserva-cita" className="cm-section cm-section-bordered">
        <div className="cm-container">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <h2 className="m-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
                {dict.bookingSection.titleLead}
                <span className="cm-accent-sapphire">
                  {dict.bookingSection.titleAccent}
                </span>
              </h2>

              <p className="mt-3 mb-0 text-base leading-relaxed text-muted-foreground">
                {dict.bookingSection.subtitle}
              </p>

              <dl className="mt-8 flex flex-col gap-5">
                <div className="flex items-start gap-3.5">
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

                <div className="flex items-start gap-3.5">
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

                <div className="flex items-start gap-3.5">
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
            </div>

            <div className="lg:col-span-7">
              <div className="cm-booking-card">
                <h3 className="m-0 text-2xl text-foreground">
                  {dict.bookingSection.formTitle}
                </h3>

                <form
                  onSubmit={handleBookingSubmit}
                  className="mt-6 flex flex-col gap-4"
                >
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
                  </div>

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
