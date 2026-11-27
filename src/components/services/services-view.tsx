"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { GreyPlaceholder } from "@/components/ui/grey-placeholder";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowRightIcon,
  SearchIcon,
  WhatsAppIcon,
} from "@/components/icons/clinic-icons";
import { buildWhatsAppUrl } from "@/config/site";
import {
  SERVICES_FICHAS,
  SERVICES_PAGE_CONTENT,
  type DetailedServiceFicha,
  type SpecialtyUnitId,
} from "@/data/services-content";
import { useAppInteraction } from "@/lib/i18n-context";

type CatalogFilter = "all" | SpecialtyUnitId;

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function ServicesView() {
  const { locale, openWhatsAppModal } = useAppInteraction();
  const dict = SERVICES_PAGE_CONTENT[locale];
  const allFichas = SERVICES_FICHAS[locale];

  const [searchInput, setSearchInput] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [catalogFilter, setCatalogFilter] = useState<CatalogFilter>("all");

  const searchMatches = useMemo<DetailedServiceFicha[]>(() => {
    const clean = normalizeText(submittedQuery);
    if (!clean) return [];

    const tokens = clean
      .split(/\s+/)
      .map((t) => t.replace(/[^a-z0-9]/g, ""))
      .filter((t) => t.length >= 3);

    if (tokens.length === 0) return [];

    return allFichas.filter((ficha) => {
      const haystack = normalizeText(
        `${ficha.title} ${ficha.summary} ${ficha.keywords.join(" ")}`
      );
      return tokens.some((token) => haystack.includes(token));
    });
  }, [allFichas, submittedQuery]);

  const filteredCatalog = useMemo(() => {
    if (catalogFilter === "all") return allFichas;
    return allFichas.filter((item) => item.specialtyId === catalogFilter);
  }, [allFichas, catalogFilter]);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedQuery(searchInput);
  };

  const handleClearSearch = () => {
    setSearchInput("");
    setSubmittedQuery("");
  };

  const jumpToSpecialtyCatalog = (unitId: SpecialtyUnitId) => {
    setCatalogFilter(unitId);
    if (typeof document !== "undefined") {
      const target = document.getElementById("catalogo-tratamientos");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <main id="servicios-top">
      {/* ─── SECCIÓN 1: PORTADA MINIMALISTA + BUSCADOR (REF: DIANA DUSSAN /TREATMENTS/) ─── */}
      <section className="cm-services-hero">
        <div className="cm-container">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h1 className="m-0 text-3xl leading-tight tracking-tight text-foreground sm:text-5xl">
              {dict.hero.titleLead}
              <span className="cm-accent-sapphire">{dict.hero.titleAccent}</span>
            </h1>

            <p className="mt-4 mb-0 max-w-xl text-base leading-relaxed text-muted-foreground">
              {dict.hero.subtitle}
            </p>

            <form
              onSubmit={handleSearchSubmit}
              className="cm-search-pill-form mt-8"
            >
              <Label htmlFor="services-goal-input" className="sr-only">
                {dict.hero.searchLabel}
              </Label>
              <Input
                id="services-goal-input"
                type="text"
                required
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={dict.hero.searchPlaceholder}
                className="h-11 min-w-0 flex-1 border-0 bg-transparent px-1 text-sm text-foreground shadow-none focus-visible:ring-0 sm:text-base"
              />
              <Button
                type="submit"
                className="cm-btn-gold h-11 shrink-0 rounded-full px-6 text-sm"
              >
                <SearchIcon className="size-4" />
                <span>{dict.hero.searchBtn}</span>
              </Button>
            </form>

            {submittedQuery.trim().length > 0 && (
              <div
                role="region"
                aria-live="polite"
                className="cm-search-results-box mt-7 text-left"
              >
                <div className="flex items-center justify-between gap-3 border-b border-border pb-3.5">
                  <h2 className="m-0 text-lg text-foreground">
                    {dict.hero.resultsTitle}
                  </h2>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={handleClearSearch}
                    className="h-9 px-3 text-xs text-muted-foreground"
                  >
                    {dict.hero.clearBtn}
                  </Button>
                </div>

                {searchMatches.length > 0 ? (
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {searchMatches.map((match) => (
                      <article
                        key={`match-${match.slug}`}
                        className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background p-3.5"
                      >
                        <div className="min-w-0">
                          <h3 className="m-0 text-base text-foreground">
                            {match.title}
                          </h3>
                          <p className="mt-0.5 mb-0 text-xs text-muted-foreground">
                            {match.summary}
                          </p>
                        </div>
                        <Button
                          type="button"
                          size="sm"
                          onClick={() => openWhatsAppModal(match.title)}
                          className="cm-btn-gold h-9 shrink-0 rounded-full px-4 text-xs"
                        >
                          {dict.catalogSection.consultBtn}
                        </Button>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="m-0 text-sm text-muted-foreground">
                      {dict.hero.noResultsText}
                    </p>
                    <Button
                      type="button"
                      onClick={() => openWhatsAppModal(submittedQuery)}
                      className="cm-btn-gold h-10 shrink-0 rounded-full px-5 text-xs"
                    >
                      {dict.hero.noResultsCta}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 2: EXPLORA CADA ESPECIALIDAD (TARJETAS EDITORIALES SUPERPUESTAS — REF: DIANA DUSSAN) ─── */}
      <section id="especialidades" className="cm-section">
        <div className="cm-container">
          <h2 className="m-0 text-center text-3xl leading-tight tracking-tight text-foreground sm:text-5xl">
            {dict.specialtiesSection.titleLead}
            <span className="cm-accent-sapphire">
              {dict.specialtiesSection.titleAccent}
            </span>
          </h2>

          <div className="mt-12 flex flex-col gap-16 lg:mt-16 lg:gap-24">
            {dict.specialtiesSection.units.map((unit, index) => {
              const isReversedDesktop = index % 2 === 1;

              return (
                <article
                  key={unit.id}
                  id={unit.id}
                  data-reversed={isReversedDesktop ? "true" : "false"}
                  className="cm-specialty-editorial scroll-mt-28"
                >
                  <div className="cm-specialty-editorial-media">
                    <GreyPlaceholder
                      sharp
                      aspectClassName="aspect-[16/10]"
                      title={unit.placeholderTitle}
                    />
                  </div>

                  <div className="cm-specialty-editorial-card">
                    <span className="cm-specialty-order">
                      {unit.orderNumber}
                    </span>
                    <span className="cm-specialty-rule" aria-hidden="true" />

                    <h3 className="mt-5 mb-0 text-2xl leading-snug text-foreground sm:text-3xl">
                      {unit.title}
                    </h3>

                    <p className="mt-3.5 mb-0 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {unit.description}
                    </p>

                    <div className="mt-7">
                      <Button
                        type="button"
                        onClick={() => jumpToSpecialtyCatalog(unit.id)}
                        className="cm-btn-gold cm-specialty-card-btn"
                      >
                        {unit.exploreCta}
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 3: TRATAMIENTOS POR ESPECIALIDAD (GRILLA LIMPIA DE 16 SERVICIOS) ─── */}
      <section
        id="catalogo-tratamientos"
        className="cm-section cm-section-bordered"
      >
        <div className="cm-container">
          <div className="flex flex-col items-center text-center">
            <h2 className="m-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
              {dict.catalogSection.titleLead}
              <span className="cm-accent-sapphire">
                {dict.catalogSection.titleAccent}
              </span>
            </h2>

            <div
              role="group"
              aria-label={`${dict.catalogSection.titleLead}${dict.catalogSection.titleAccent}`}
              className="mt-7 flex flex-wrap items-center justify-center gap-2"
            >
              {(
                [
                  { id: "all", label: dict.catalogSection.filterAll },
                  {
                    id: "armonizacion-inyectables",
                    label: dict.catalogSection.filterHarmonization,
                  },
                  {
                    id: "cirugia-maxilofacial",
                    label: dict.catalogSection.filterMaxillofacial,
                  },
                  { id: "calidad-piel", label: dict.catalogSection.filterSkin },
                  {
                    id: "cirugia-corporal",
                    label: dict.catalogSection.filterBody,
                  },
                ] as const
              ).map((tab) => (
                <Button
                  key={tab.id}
                  type="button"
                  variant="outline"
                  aria-pressed={catalogFilter === tab.id}
                  data-active={catalogFilter === tab.id ? "true" : "false"}
                  onClick={() => setCatalogFilter(tab.id)}
                  className="cm-filter-pill"
                >
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCatalog.map((ficha) => (
              <article
                key={ficha.slug}
                id={ficha.slug}
                className="cm-procedure-detail-card scroll-mt-28"
              >
                <GreyPlaceholder
                  aspectClassName="aspect-[16/10]"
                  title={ficha.placeholderLabel}
                />

                <div className="mt-4 flex flex-1 flex-col px-1">
                  <h3 className="m-0 text-lg leading-snug text-foreground">
                    {ficha.title}
                  </h3>

                  <p className="mt-2 mb-0 text-sm leading-relaxed text-muted-foreground">
                    {ficha.summary}
                  </p>

                  <div className="mt-auto pt-5">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => openWhatsAppModal(ficha.title)}
                      className="cm-btn-outline-clean h-11 w-full rounded-full text-xs font-medium"
                    >
                      <span>{dict.catalogSection.consultBtn}</span>
                      <ArrowRightIcon className="icon-cap" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 4: CIERRE LIMPIO DE ORIENTACIÓN MÉDICA ─── */}
      <section id="orientacion-medica" className="cm-section pt-0">
        <div className="cm-container">
          <div className="cm-guidance-banner">
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
              <h2 className="m-0 text-2xl leading-tight tracking-tight text-foreground sm:text-4xl">
                {dict.guidanceBanner.title}
              </h2>

              <p className="mt-3 mb-0 max-w-xl text-base leading-relaxed text-muted-foreground">
                {dict.guidanceBanner.description}
              </p>

              <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                <Button
                  type="button"
                  onClick={() => openWhatsAppModal()}
                  className="cm-btn-gold h-12 w-full rounded-full px-7 text-sm sm:w-auto"
                >
                  <span>{dict.guidanceBanner.primaryCta}</span>
                  <ArrowRightIcon className="icon-cap" />
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="cm-btn-outline-clean h-12 w-full rounded-full px-7 text-sm no-underline sm:w-auto"
                >
                  <a
                    href={buildWhatsAppUrl(
                      "Buen día, me gustaría recibir orientación sobre los servicios de la Dra. Gabriela Delgado."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="size-4" />
                    <span>{dict.guidanceBanner.secondaryCta}</span>
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
