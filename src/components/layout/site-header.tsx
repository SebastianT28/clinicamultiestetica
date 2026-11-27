"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/layout/brand-logo";
import { CloseIcon, MenuBarsIcon } from "@/components/icons/clinic-icons";
import { HOME_CONTENT } from "@/data/home-content";
import { useAppInteraction } from "@/lib/i18n-context";

export function SiteHeader() {
  const {
    locale,
    setLocale,
    scrollToBookingForm,
    mobileMenuOpen,
    setMobileMenuOpen,
  } = useAppInteraction();
  const [scrolled, setScrolled] = useState(false);

  const dict = HOME_CONTENT[locale].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#inicio", label: dict.home },
    { href: "#servicios", label: dict.services },
    { href: "#testimonios", label: dict.reviews },
    { href: "#quien-soy", label: dict.about },
    { href: "#por-que-dra-gabriela", label: dict.blog },
  ];

  return (
    <header
      id="site-header"
      data-scrolled={scrolled ? "true" : "false"}
      className="cm-header-wrap"
    >
      <div className="cm-container">
        <div className="cm-header-bar">
          <BrandLogo priority className="min-w-0" />

          <nav
            aria-label={locale === "es" ? "Navegación principal" : "Primary navigation"}
            className="hidden items-center gap-5 lg:flex"
          >
            <ul className="cm-nav-list m-0 flex list-none items-center gap-4 p-0 xl:gap-5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="cm-nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Button
              type="button"
              onClick={() => scrollToBookingForm()}
              className="cm-btn-sapphire h-11 rounded-full px-6 text-sm"
            >
              {dict.contactCta}
            </Button>

            <div
              role="group"
              aria-label={locale === "es" ? "Selector de idioma" : "Language selector"}
              className="cm-header-divider flex items-center pl-3"
            >
              <Button
                type="button"
                variant="ghost"
                size="sm"
                data-active={locale === "es" ? "true" : "false"}
                onClick={() => setLocale("es")}
                aria-pressed={locale === "es"}
                aria-label="Español"
                className="cm-lang-btn rounded-lg shadow-none"
              >
                ES
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                data-active={locale === "en" ? "true" : "false"}
                onClick={() => setLocale("en")}
                aria-pressed={locale === "en"}
                aria-label="English"
                className="cm-lang-btn rounded-lg shadow-none"
              >
                EN
              </Button>
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
            <div
              role="group"
              aria-label={locale === "es" ? "Selector de idioma" : "Language selector"}
              className="hidden items-center sm:flex"
            >
              <Button
                type="button"
                variant="ghost"
                size="sm"
                data-active={locale === "es" ? "true" : "false"}
                onClick={() => setLocale("es")}
                aria-pressed={locale === "es"}
                aria-label="Español"
                className="cm-lang-btn rounded-lg shadow-none"
              >
                ES
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                data-active={locale === "en" ? "true" : "false"}
                onClick={() => setLocale("en")}
                aria-pressed={locale === "en"}
                aria-label="English"
                className="cm-lang-btn rounded-lg shadow-none"
              >
                EN
              </Button>
            </div>

            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-expanded={mobileMenuOpen}
              aria-controls="cm-mobile-nav-panel"
              aria-label={mobileMenuOpen ? dict.closeMenuLabel : dict.menuLabel}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="cm-btn-outline-clean size-11 rounded-full"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="size-5" />
              ) : (
                <MenuBarsIcon className="size-5" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            id="cm-mobile-nav-panel"
            aria-label={locale === "es" ? "Menú móvil" : "Mobile menu"}
            className="cm-mobile-dropdown lg:hidden"
          >
            <ul className="m-0 flex list-none flex-col gap-1 p-0">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="cm-mobile-nav-link"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div
              role="group"
              aria-label={locale === "es" ? "Selector de idioma" : "Language selector"}
              className="mt-3 flex items-center justify-between border-t border-border pt-3 sm:hidden"
            >
              <span className="text-xs text-muted-foreground">
                {locale === "es" ? "Idioma" : "Language"}
              </span>
              <div className="flex items-center gap-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  data-active={locale === "es" ? "true" : "false"}
                  onClick={() => setLocale("es")}
                  aria-pressed={locale === "es"}
                  aria-label="Español"
                  className="cm-lang-btn rounded-lg shadow-none"
                >
                  ES
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  data-active={locale === "en" ? "true" : "false"}
                  onClick={() => setLocale("en")}
                  aria-pressed={locale === "en"}
                  aria-label="English"
                  className="cm-lang-btn rounded-lg shadow-none"
                >
                  EN
                </Button>
              </div>
            </div>

            <div className="mt-4">
              <Button
                type="button"
                onClick={() => scrollToBookingForm()}
                className="cm-btn-sapphire h-12 w-full rounded-full text-base"
              >
                {dict.contactCta}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
