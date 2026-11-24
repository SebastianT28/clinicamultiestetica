"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/layout/brand-logo";
import { SITE_CONFIG } from "@/config/site";
import { HOME_CONTENT } from "@/data/home-content";
import { useAppInteraction } from "@/lib/i18n-context";

export function SiteFooter() {
  const { locale, openWhatsAppModal } = useAppInteraction();
  const dict = HOME_CONTENT[locale];

  return (
    <footer className="cm-footer">
      <div className="cm-container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Columna 1: Marca, Slogan y Ubicación */}
          <div className="sm:col-span-2 lg:col-span-4">
            <BrandLogo variant="light" />
            <p className="mt-4 max-w-sm font-serif text-xl leading-snug text-[var(--cm-white)]">
              {dict.footer.tagline}
            </p>
            <div className="cm-gold-rule my-5" aria-hidden="true" />
            <div className="flex flex-col gap-1.5 text-sm">
              <p className="m-0">
                {SITE_CONFIG.address.street}, {SITE_CONFIG.address.district},{" "}
                {SITE_CONFIG.address.city}
              </p>
              <p className="m-0">{SITE_CONFIG.whatsappDisplay}</p>
              <p className="cm-footer-muted m-0">{dict.footer.schedule}</p>
            </div>
            <div className="mt-6">
              <Button
                type="button"
                onClick={() => openWhatsAppModal()}
                className="cm-btn-sapphire h-11 px-6 text-sm"
              >
                {dict.nav.bookCta}
              </Button>
            </div>
          </div>

          {/* Columna 2: Explora */}
          <div className="lg:col-span-2">
            <h2 className="cm-footer-heading">{dict.footer.exploreHeading}</h2>
            <ul className="flex flex-col list-none m-0 p-0">
              <li>
                <Link href="#casos-destacados" className="cm-footer-link">
                  {dict.nav.cases}
                </Link>
              </li>
              <li>
                <Link href="#procedimientos" className="cm-footer-link">
                  {dict.nav.procedures}
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="cm-footer-link">
                  {dict.nav.clinic}
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="cm-footer-link">
                  {dict.nav.reviews}
                </Link>
              </li>
              <li>
                <Link href="#preguntas" className="cm-footer-link">
                  {dict.nav.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Especialidades */}
          <div className="lg:col-span-3">
            <h2 className="cm-footer-heading">{dict.footer.specialtiesHeading}</h2>
            <ul className="flex flex-col list-none m-0 p-0">
              <li>
                <Link href="#procedimientos" className="cm-footer-link">
                  {locale === "es"
                    ? "Armonización con ácido hialurónico"
                    : "Hyaluronic acid harmonization"}
                </Link>
              </li>
              <li>
                <Link href="#procedimientos" className="cm-footer-link">
                  {locale === "es"
                    ? "Toxina botulínica y colágeno"
                    : "Botulinum toxin & collagen"}
                </Link>
              </li>
              <li>
                <Link href="#procedimientos" className="cm-footer-link">
                  {locale === "es"
                    ? "Lifting facial y blefaroplastia"
                    : "Facelift & blepharoplasty"}
                </Link>
              </li>
              <li>
                <Link href="#procedimientos" className="cm-footer-link">
                  {locale === "es"
                    ? "Lipopapada y marcación mandibular"
                    : "Chin lipo & jawline contouring"}
                </Link>
              </li>
              <li>
                <Link href="#procedimientos" className="cm-footer-link">
                  {locale === "es"
                    ? "Liposucción 360 y cirugía corporal"
                    : "360 liposuction & body surgery"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Atención al Paciente y Normativa Peruana */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h2 className="cm-footer-heading">{dict.footer.patientCareHeading}</h2>
            <ul className="flex flex-col list-none m-0 p-0">
              <li>
                <Link href="#ubicacion" className="cm-footer-link">
                  {dict.footer.claimsBook}
                </Link>
              </li>
              <li>
                <Link href="#ubicacion" className="cm-footer-link">
                  {dict.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="#ubicacion" className="cm-footer-link">
                  {dict.footer.termsConditions}
                </Link>
              </li>
              <li>
                <Link href="#preguntas" className="cm-footer-link">
                  {dict.footer.valuationTerms}
                </Link>
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href="#ubicacion" className="cm-footer-link cm-footer-muted">
                Instagram
              </Link>
              <Link href="#ubicacion" className="cm-footer-link cm-footer-muted">
                Facebook
              </Link>
              <Link href="#ubicacion" className="cm-footer-link cm-footer-muted">
                TikTok
              </Link>
              <Link href="#ubicacion" className="cm-footer-link cm-footer-muted">
                YouTube
              </Link>
            </div>
          </div>
        </div>

        <div className="cm-footer-divider mt-10 flex flex-col justify-between gap-3 pt-6 text-xs sm:flex-row sm:items-center">
          <p className="cm-footer-muted m-0">{dict.footer.copyright}</p>
          <p className="cm-footer-muted m-0">
            {SITE_CONFIG.address.district}, {SITE_CONFIG.address.city},{" "}
            {SITE_CONFIG.address.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
