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
    openWhatsAppModal,
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
    { href: "#casos-destacados", label: dict.cases },
    { href: "#procedimientos", label: dict.procedures },
    { href: "#nosotros", label: dict.clinic },
    { href: "#testimonios", label: dict.reviews },
    { href: "#preguntas", label: dict.faq },
  ];

  return (
    <header
      id="site-header"
      data-scrolled={scrolled ? "true" : "false"}
      className="cm-header-wrap"
    >
      <div className="cm-container">
        <div className="cm-header-bar">
          <BrandLogo />

          <nav
            aria-label={locale === "es" ? "Navegación principal" : "Primary navigation"}
            className="hidden items-center gap-6 lg:flex"
          >
            <ul className="cm-nav-list flex items-center gap-5 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="cm-nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Button
              type="button"
              onClick={() => openWhatsAppModal()}
              className="cm-btn-sapphire h-11 px-6 text-sm"
            >
              {dict.bookCta}
            </Button>

            <div
              role="group"
              aria-label={locale === "es" ? "Selector de idioma" : "Language selector"}
              className="flex items-center border-l border-border pl-3"
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

          <div className="flex items-center gap-1 lg:hidden">
            <div
              role="group"
              aria-label={locale === "es" ? "Selector de idioma" : "Language selector"}
              className="flex items-center"
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
              className="cm-btn-outline-warm h-11 w-11"
            >
              {mobileMenuOpen ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuBarsIcon className="h-5 w-5" />
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
            <ul className="flex flex-col divide-y divide-border list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex min-h-12 items-center justify-between py-2 text-base font-medium text-foreground no-underline"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-2">
              <Button
                type="button"
                onClick={() => openWhatsAppModal()}
                className="cm-btn-sapphire h-12 w-full text-base"
              >
                {dict.bookCta}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
