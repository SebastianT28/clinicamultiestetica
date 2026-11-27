"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  TESTIMONIALS_PAGE_CONTENT,
  type PatientCaseItem,
} from "@/data/testimonials-content";
import { useAppInteraction } from "@/lib/i18n-context";

type CasePhase = "after" | "before";

interface BeforeAfterCaseCardProps {
  item: PatientCaseItem;
  index: number;
  isAutoMode: boolean;
  isViewportActive: boolean;
  prefersReducedMotion: boolean;
  afterBadge: string;
  beforeBadge: string;
  afterSlotPrefix: string;
  beforeSlotPrefix: string;
  ariaBefore: string;
  ariaAfter: string;
  registerNode: (id: string, node: HTMLElement | null) => void;
}

function BeforeAfterCaseCard({
  item,
  index,
  isAutoMode,
  isViewportActive,
  prefersReducedMotion,
  afterBadge,
  beforeBadge,
  afterSlotPrefix,
  beforeSlotPrefix,
  ariaBefore,
  ariaAfter,
  registerNode,
}: BeforeAfterCaseCardProps) {
  const [isPointerHovered, setIsPointerHovered] = useState(false);
  const [phase, setPhase] = useState<CasePhase>("after");

  const shouldLoop =
    !prefersReducedMotion &&
    (isAutoMode ? isViewportActive : isPointerHovered);

  useEffect(() => {
    if (!shouldLoop) {
      return;
    }

    // En escritorio inicia el cambio suave casi al instante de posar el puntero;
    // en celular escalona ligeramente columna par/impar para una lectura serena.
    const initialDelayMs = isAutoMode ? 450 + (index % 2) * 500 : 280;
    const cycleIntervalMs = 1850;

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const startTimerId = setTimeout(() => {
      setPhase("before");
      intervalId = setInterval(() => {
        setPhase((prev) => (prev === "after" ? "before" : "after"));
      }, cycleIntervalMs);
    }, initialDelayMs);

    return () => {
      clearTimeout(startTimerId);
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
      setPhase("after");
    };
  }, [shouldLoop, isAutoMode, index]);

  const handleManualToggle = () => {
    setPhase((prev) => (prev === "after" ? "before" : "after"));
  };

  const isBeforeVisible = phase === "before";

  return (
    <figure
      ref={(node) => registerNode(item.id, node)}
      data-case-id={item.id}
      className="cm-case-card m-0"
    >
      <Button
        type="button"
        variant="ghost"
        aria-pressed={isBeforeVisible}
        aria-label={`${item.tagLabel}: ${
          isBeforeVisible ? ariaAfter : ariaBefore
        }`}
        onClick={handleManualToggle}
        onPointerEnter={(event) => {
          if (event.pointerType !== "touch" && !isAutoMode) {
            setIsPointerHovered(true);
          }
        }}
        onPointerLeave={(event) => {
          if (event.pointerType !== "touch") {
            setIsPointerHovered(false);
          }
        }}
        className="cm-case-trigger"
      >
        {/* Capa base por defecto: DESPUÉS */}
        <span
          aria-hidden={isBeforeVisible}
          className="cm-case-layer cm-case-layer--after"
        >
          <span className="cm-case-slot-kicker">{afterSlotPrefix}</span>
          <span className="cm-case-slot-title">
            {item.afterPlaceholderTitle}
          </span>
        </span>

        {/* Capa superpuesta en transición suave: ANTES */}
        <span
          aria-hidden={!isBeforeVisible}
          data-visible={isBeforeVisible ? "true" : "false"}
          className="cm-case-layer cm-case-layer--before"
        >
          <span className="cm-case-slot-kicker">{beforeSlotPrefix}</span>
          <span className="cm-case-slot-title">
            {item.beforePlaceholderTitle}
          </span>
        </span>

        {/* Marca de agua sutil inferior central (como el isotipo DD en la referencia) */}
        <span aria-hidden="true" className="cm-case-watermark">
          <Image
            src="/brand/isotipo-dra-gabriela.png"
            alt=""
            width={36}
            height={36}
            className="cm-case-watermark-img"
          />
        </span>

        {/* Insignia inferior derecha: Después / Antes */}
        <span
          data-phase={phase}
          data-looping={shouldLoop ? "true" : "false"}
          className="cm-case-badge"
        >
          <span aria-hidden="true" className="cm-case-badge-dot" />
          <span>{isBeforeVisible ? beforeBadge : afterBadge}</span>
        </span>
      </Button>

      {/* Etiqueta flotante superior izquierda del tratamiento */}
      <figcaption className="cm-case-tags">
        <span className="cm-case-tag">{item.tagLabel}</span>
      </figcaption>
    </figure>
  );
}

export function TestimonialsView() {
  const { locale } = useAppInteraction();
  const dict = TESTIMONIALS_PAGE_CONTENT[locale];

  const [isAutoMode, setIsAutoMode] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeViewportIds, setActiveViewportIds] = useState<Set<string>>(
    () => new Set()
  );

  const cardNodesRef = useRef<Map<string, HTMLElement>>(new Map());
  const intersectingIdsRef = useRef<Set<string>>(new Set());

  const registerNode = (id: string, node: HTMLElement | null) => {
    if (node) {
      cardNodesRef.current.set(id, node);
    } else {
      cardNodesRef.current.delete(id);
      intersectingIdsRef.current.delete(id);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const modeQuery = window.matchMedia(
      "(max-width: 767px), (hover: none), (pointer: coarse)"
    );
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncCapabilities = () => {
      setIsAutoMode(modeQuery.matches);
      setPrefersReducedMotion(motionQuery.matches);
    };

    syncCapabilities();

    modeQuery.addEventListener("change", syncCapabilities);
    motionQuery.addEventListener("change", syncCapabilities);

    return () => {
      modeQuery.removeEventListener("change", syncCapabilities);
      motionQuery.removeEventListener("change", syncCapabilities);
    };
  }, []);

  useEffect(() => {
    if (!isAutoMode || prefersReducedMotion || typeof window === "undefined") {
      return;
    }

    const cardNodes = cardNodesRef.current;
    const intersectingIds = intersectingIdsRef.current;
    let rafId: number | null = null;

    const pickFocalCards = () => {
      const viewportHeight = window.innerHeight || 1;
      const headerClearance = 72;
      const focalCenterY =
        headerClearance + (viewportHeight - headerClearance) * 0.46;

      const candidates: { id: string; top: number; distance: number }[] = [];

      for (const id of intersectingIds) {
        const node = cardNodes.get(id);
        if (!node) continue;

        const rect = node.getBoundingClientRect();
        if (rect.height <= 0) continue;

        const visibleTop = Math.max(rect.top, headerClearance);
        const visibleBottom = Math.min(rect.bottom, viewportHeight);
        const visibleRatio =
          Math.max(0, visibleBottom - visibleTop) / rect.height;

        if (visibleRatio < 0.65) {
          continue;
        }

        const cardCenterY = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenterY - focalCenterY);
        candidates.push({ id, top: rect.top, distance });
      }

      if (candidates.length === 0) {
        setActiveViewportIds((prev) => (prev.size === 0 ? prev : new Set()));
        return;
      }

      candidates.sort((a, b) => a.distance - b.distance);
      const bestRowTop = candidates[0].top;

      // Activa únicamente la fila que la persona está mirando en pantalla
      // (máximo 2 tarjetas en la grilla celular); las que salen se pausan y
      // vuelven por defecto a la imagen del Después.
      const nextIds = new Set<string>();
      for (const candidate of candidates) {
        if (Math.abs(candidate.top - bestRowTop) <= 24) {
          nextIds.add(candidate.id);
        }
      }

      setActiveViewportIds((prev) => {
        if (
          prev.size === nextIds.size &&
          [...prev].every((id) => nextIds.has(id))
        ) {
          return prev;
        }
        return nextIds;
      });
    };

    const scheduleEvaluation = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        pickFocalCards();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).dataset.caseId;
          if (!id) continue;
          if (entry.isIntersecting) {
            intersectingIds.add(id);
          } else {
            intersectingIds.delete(id);
          }
        }
        scheduleEvaluation();
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.25, 0.65, 0.95],
      }
    );

    for (const node of cardNodes.values()) {
      observer.observe(node);
    }

    scheduleEvaluation();

    window.addEventListener("scroll", scheduleEvaluation, { passive: true });
    window.addEventListener("resize", scheduleEvaluation, { passive: true });

    return () => {
      observer.disconnect();
      intersectingIds.clear();
      window.removeEventListener("scroll", scheduleEvaluation);
      window.removeEventListener("resize", scheduleEvaluation);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      setActiveViewportIds(new Set());
    };
  }, [isAutoMode, prefersReducedMotion, locale]);

  return (
    <main id="testimonios-top">
      <section
        aria-labelledby="testimonios-heading"
        className="cm-cases-section"
      >
        <div className="cm-container">
          <div className="max-w-2xl">
            <h1
              id="testimonios-heading"
              className="m-0 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl"
            >
              {dict.heading}
            </h1>

            <p className="mt-1.5 mb-0 hidden text-base leading-relaxed text-muted-foreground md:block">
              {dict.desktopHint}
            </p>
            <p className="mt-1.5 mb-0 text-sm leading-relaxed text-muted-foreground md:hidden">
              {dict.mobileHint}
            </p>
          </div>

          <div
            role="list"
            className="mt-6 grid grid-cols-2 gap-3 md:mt-7 md:grid-cols-3 md:gap-5"
          >
            {dict.cases.map((item, index) => (
              <div key={item.id} role="listitem">
                <BeforeAfterCaseCard
                  item={item}
                  index={index}
                  isAutoMode={isAutoMode}
                  isViewportActive={
                    isAutoMode && activeViewportIds.has(item.id)
                  }
                  prefersReducedMotion={prefersReducedMotion}
                  afterBadge={dict.afterBadge}
                  beforeBadge={dict.beforeBadge}
                  afterSlotPrefix={dict.afterSlotPrefix}
                  beforeSlotPrefix={dict.beforeSlotPrefix}
                  ariaBefore={dict.cardAriaActionBefore}
                  ariaAfter={dict.cardAriaActionAfter}
                  registerNode={registerNode}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
