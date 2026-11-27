"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { GreyPlaceholder } from "@/components/ui/grey-placeholder";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowRightIcon,
  SearchIcon,
  ShieldCheckIcon,
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

  // Buscador de lenguaje natural (Patrón Hero de clinicadianadussan.com/treatments/)
  const [searchInput, setSearchInput] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [activeGoalId, setActiveGoalId] = useState<string | null>(null);

  // Filtro del catálogo detallado de los 16 procedimientos
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
        `${ficha.title} ${ficha.summary} ${ficha.idealFor} ${ficha.keywords.join(" ")}`
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
    setActiveGoalId(null);
    setSubmittedQuery(searchInput);
  };

  const handleGoalClick = (goalId: string, query: string, label: string) => {
    if (activeGoalId === goalId) {
      setActiveGoalId(null);
      setSearchInput("");
      setSubmittedQuery("");
      return;
    }
    setActiveGoalId(goalId);
    setSearchInput(label);
    setSubmittedQuery(query);
  };

  const handleClearSearch = () => {
    setActiveGoalId(null);
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
      {/* ─── SECCIÓN 1: HERO EDITORIAL + BUSCADOR DE OBJETIVO CLÍNICO (REF: DIANA DUSSAN /TREATMENTS/) ─── */}
      <section className="cm-services-hero">
        <div className="cm-container">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="cm-pill-tag">
              <span className="cm-pill-dot" aria-hidden="true" />
              <span>{dict.hero.pill}</span>
            </span>

            <h1 className="mt-5 mb-0 text-3xl leading-tight tracking-tight text-foreground sm:text-5xl xl:text-[3.375rem]">
              {dict.hero.title}
            </h1>

            <p className="mt-4 mb-0 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {dict.hero.subtitle}
            </p>

            {/* Barra de búsqueda en píldora (comparte altura exacta entre Input y Button) */}
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
                className="cm-btn-sapphire h-11 shrink-0 rounded-full px-5 text-sm sm:px-6"
              >
                <SearchIcon className="size-4" />
                <span>{dict.hero.searchBtn}</span>
              </Button>
            </form>

            {/* Selección rápida visual de objetivos (Choice starter) */}
            <div className="mt-5 flex flex-col items-center gap-2.5">
              <span className="text-xs text-muted-foreground">
                {dict.hero.quickGoalsPrompt}
              </span>
              <div
                role="group"
                aria-label={dict.hero.quickGoalsPrompt}
                className="flex flex-wrap items-center justify-center gap-2"
              >
                {dict.hero.quickGoals.map((goal) => (
                  <Button
                    key={goal.id}
                    type="button"
                    variant="outline"
                    aria-pressed={activeGoalId === goal.id}
                    data-active={activeGoalId === goal.id ? "true" : "false"}
                    onClick={() =>
                      handleGoalClick(goal.id, goal.query, goal.label)
                    }
                    className="cm-goal-chip"
                  >
                    {goal.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Panel dinámico de orientación cuando el paciente realiza una búsqueda */}
            {submittedQuery.trim().length > 0 && (
              <div
                role="region"
                aria-live="polite"
                className="cm-search-results-box mt-8 text-left"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                  <h2 className="m-0 text-xl text-foreground sm:text-2xl">
                    {dict.hero.resultsTitlePrefix} ({searchMatches.length})
                  </h2>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleClearSearch}
                    className="cm-btn-outline-clean h-10 rounded-full px-4 text-xs"
                  >
                    {dict.hero.clearBtn}
                  </Button>
                </div>

                {searchMatches.length > 0 ? (
                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {searchMatches.map((match) => (
                      <article
                        key={`match-${match.slug}`}
                        className="flex flex-col justify-between rounded-2xl border border-border bg-background p-4"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="m-0 text-lg text-foreground">
                              {match.title}
                            </h3>
                            <span className="text-xs text-muted-foreground">
                              {match.specialistTag}
                            </span>
                          </div>
                          <p className="mt-2 mb-0 text-sm leading-relaxed text-muted-foreground">
                            {match.idealFor}
                          </p>
                        </div>
                        <div className="mt-4">
                          <Button
                            type="button"
                            onClick={() => openWhatsAppModal(match.title)}
                            className="cm-btn-sapphire h-11 rounded-full px-5 text-xs"
                          >
                            <span>{dict.catalogSection.consultBtn}</span>
                            <ArrowRightIcon className="icon-cap" />
                          </Button>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="m-0 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {dict.hero.noResultsText}
                    </p>
                    <Button
                      type="button"
                      onClick={() => openWhatsAppModal(submittedQuery)}
                      className="cm-btn-sapphire h-11 shrink-0 rounded-full px-6 text-sm"
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

      {/* ─── SECCIÓN 2: EXPLORA CADA ESPECIALIDAD (BLOQUES EDITORIALES ALTERNADOS DIANA DUSSAN) ─── */}
      <section id="especialidades" className="cm-section">
        <div className="cm-container">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="cm-pill-tag">
                <span className="cm-pill-dot" aria-hidden="true" />
                <span>{dict.specialtiesSection.pill}</span>
              </span>

              <h2 className="mt-4 mb-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl xl:text-[2.875rem]">
                {dict.specialtiesSection.titleLead}
                <span className="cm-accent-sapphire">
                  {dict.specialtiesSection.titleAccent}
                </span>
              </h2>
            </div>

            <p className="m-0 text-sm text-muted-foreground">
              {dict.specialtiesSection.countSummary}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-8 lg:gap-12">
            {dict.specialtiesSection.units.map((unit, index) => {
              const isReversedDesktop = index % 2 === 1;

              return (
                <article
                  key={unit.id}
                  id={unit.id}
                  className="cm-specialty-showcase scroll-mt-28"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div
                      className={
                        isReversedDesktop
                          ? "p-4 pb-0 sm:p-6 sm:pb-0 lg:order-2 lg:col-span-6 lg:p-6"
                          : "p-4 pb-0 sm:p-6 sm:pb-0 lg:col-span-6 lg:p-6"
                      }
                    >
                      <GreyPlaceholder
                        aspectClassName="aspect-[16/10] lg:h-full"
                        title={unit.placeholderTitle}
                        subtitle={unit.placeholderSubtitle}
                      />
                    </div>

                    <div
                      className={
                        isReversedDesktop
                          ? "cm-specialty-content lg:order-1 lg:col-span-6"
                          : "cm-specialty-content lg:col-span-6"
                      }
                    >
                      <div>
                        <span className="cm-treatment-mini-tag">
                          {unit.badge}
                        </span>
                      </div>

                      <h3 className="mt-4 mb-0 text-2xl leading-snug text-foreground sm:text-3xl">
                        {unit.title}
                      </h3>

                      <p className="mt-3 mb-0 text-base leading-relaxed text-muted-foreground">
                        {unit.description}
                      </p>

                      <p className="mt-4 mb-0 flex items-center gap-2 text-xs font-medium text-foreground">
                        <ShieldCheckIcon className="cm-accent-sapphire size-4 shrink-0" />
                        <span>{unit.specialistLead}</span>
                      </p>

                      <ul className="mt-5 m-0 flex list-none flex-wrap gap-2 p-0">
                        {unit.procedureNames.map((procName) => (
                          <li key={procName} className="cm-treatment-mini-tag">
                            {procName}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 flex flex-wrap items-center gap-3">
                        <Button
                          type="button"
                          onClick={() => jumpToSpecialtyCatalog(unit.id)}
                          className="cm-btn-cavadas"
                        >
                          <span>{unit.exploreCta}</span>
                          <span className="cm-btn-cavadas-box" aria-hidden="true">
                            <ArrowRightIcon className="cm-btn-cavadas-arrow" />
                          </span>
                        </Button>

                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => openWhatsAppModal(unit.title)}
                          className="cm-btn-outline-clean h-12 rounded-xl px-5 text-sm"
                        >
                          {unit.consultCta}
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 3: PORTAFOLIO DETALLADO DE LOS 16 PROCEDIMIENTOS ─── */}
      <section
        id="catalogo-tratamientos"
        className="cm-section cm-section-bordered"
      >
        <div className="cm-container">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="cm-pill-tag">
                <span className="cm-pill-dot" aria-hidden="true" />
                <span>{dict.catalogSection.pill}</span>
              </span>

              <h2 className="mt-4 mb-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
                {dict.catalogSection.titleLead}
                <span className="cm-accent-sapphire">
                  {dict.catalogSection.titleAccent}
                </span>
              </h2>

              <p className="mt-3 mb-0 text-base text-muted-foreground">
                {dict.catalogSection.subtitle}
              </p>
            </div>

            <p className="m-0 text-sm font-medium text-foreground">
              {dict.catalogSection.countTopPrefix} {filteredCatalog.length}{" "}
              {dict.catalogSection.countOfWord} {allFichas.length}
            </p>
          </div>

          {/* Filtros de especialidad */}
          <div
            role="group"
            aria-label={dict.catalogSection.pill}
            className="mt-7 flex flex-wrap gap-2"
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

          {/* Grilla espaciosa de fichas clínicas */}
          <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

                <div className="mt-5 flex flex-1 flex-col px-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="m-0 text-xl leading-snug text-foreground">
                      {ficha.title}
                    </h3>
                  </div>

                  <p className="mt-2.5 mb-0 text-sm leading-relaxed text-muted-foreground">
                    {ficha.summary}
                  </p>

                  <dl className="mt-4 flex flex-col gap-2 border-t border-border pt-4 text-xs">
                    <div>
                      <dt className="inline font-medium text-foreground">
                        {dict.catalogSection.idealForLabel}{" "}
                      </dt>
                      <dd className="m-0 inline text-muted-foreground">
                        {ficha.idealFor}
                      </dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-foreground">
                        {dict.catalogSection.modalityLabel}{" "}
                      </dt>
                      <dd className="m-0 inline text-muted-foreground">
                        {ficha.modality}
                      </dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-foreground">
                        {dict.catalogSection.recoveryLabel}{" "}
                      </dt>
                      <dd className="m-0 inline text-muted-foreground">
                        {ficha.recoveryNote}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-border pt-5">
                    <span className="text-xs text-muted-foreground">
                      {ficha.specialistTag}
                    </span>
                    <Button
                      type="button"
                      onClick={() => openWhatsAppModal(ficha.title)}
                      className="cm-btn-sapphire h-11 rounded-full px-5 text-xs"
                    >
                      {dict.catalogSection.consultBtn}
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-between gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
            <span>
              {dict.catalogSection.countTopPrefix} {filteredCatalog.length}{" "}
              {dict.catalogSection.countOfWord} {allFichas.length}
            </span>
            <span>{dict.catalogSection.countBottomNote}</span>
          </div>
        </div>
      </section>

      {/* ─── SECCIÓN 4: BANNER DE ORIENTACIÓN MÉDICA FINAL (REF: DIANA DUSSAN /TREATMENTS/) ─── */}
      <section id="orientacion-medica" className="cm-section pt-0">
        <div className="cm-container">
          <div className="cm-guidance-banner">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <span className="cm-pill-tag">
                <span className="cm-pill-dot" aria-hidden="true" />
                <span>{dict.guidanceBanner.pill}</span>
              </span>

              <h2 className="mt-4 mb-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
                {dict.guidanceBanner.title}
              </h2>

              <p className="mt-3 mb-0 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {dict.guidanceBanner.description}
              </p>

              <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
                <Button
                  type="button"
                  onClick={() => openWhatsAppModal()}
                  className="cm-btn-sapphire h-12 w-full rounded-full px-7 text-base sm:w-auto"
                >
                  <span>{dict.guidanceBanner.primaryCta}</span>
                  <ArrowRightIcon className="icon-cap" />
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="cm-btn-outline-clean h-12 w-full rounded-full px-7 text-base sm:w-auto"
                >
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="size-4" />
                    <span>{dict.guidanceBanner.secondaryCta}</span>
                  </a>
                </Button>
              </div>

              <p className="mt-6 mb-0 text-xs text-muted-foreground">
                {dict.guidanceBanner.eeatNote}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
