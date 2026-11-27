"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WhatsAppIcon } from "@/components/icons/clinic-icons";
import { buildWhatsAppUrl, CLINIC_SERVICES } from "@/config/site";
import { HOME_CONTENT } from "@/data/home-content";
import { useAppInteraction } from "@/lib/i18n-context";

export function WhatsAppAssistant() {
  const {
    locale,
    waModalOpen,
    setWaModalOpen,
    selectedProcedure,
    setSelectedProcedure,
    mobileMenuOpen,
  } = useAppInteraction();

  const dict = HOME_CONTENT[locale].waModal;
  const directFabWaUrl = buildWhatsAppUrl(
    "Buen día, me gustaría recibir orientación sobre la consulta de la Dra. Gabriela Delgado."
  );
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(true);
  const [privacyError, setPrivacyError] = useState(false);
  const [showBubbleHint, setShowBubbleHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowBubbleHint(window.scrollY < 72);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!acceptedPrivacy) {
      setPrivacyError(true);
      return;
    }
    setPrivacyError(false);

    const cleanName = name.trim();
    const cleanAge = age.trim();
    const cleanProc = selectedProcedure.trim();

    const message =
      locale === "es"
        ? `Buen día, mi nombre es ${cleanName || "paciente"} (${cleanAge ? `${cleanAge} años` : "mayor de 18 años"}) y deseo agendar una cita con la Dra. Gabriela Delgado. Motivo o servicio de interés: ${cleanProc || "evaluación personalizada"}.`
        : `Buen día, mi nombre es ${cleanName || "paciente"} (${cleanAge ? `${cleanAge} años` : "mayor de 18 años"}) y deseo agendar una cita con la Dra. Gabriela Delgado. Motivo o servicio de interés: ${cleanProc || "evaluación personalizada"}.`;

    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
    setWaModalOpen(false);
  };

  return (
    <>
      <datalist id="cm-procedures-datalist">
        {CLINIC_SERVICES.map((svc) => (
          <option
            key={svc.slug}
            value={locale === "es" ? svc.nameEs : svc.nameEn}
          />
        ))}
      </datalist>

      {!mobileMenuOpen && !waModalOpen && (
        <div className="cm-wa-dock">
          <span
            aria-hidden="true"
            data-visible={showBubbleHint ? "true" : "false"}
            className="cm-wa-pill"
          >
            {locale === "es" ? "Estamos disponibles" : "We are available"}
          </span>

          <Button
            asChild
            size="icon"
            aria-label={dict.fabAriaLabel}
            className="cm-wa-fab no-underline"
          >
            <a
              href={directFabWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={dict.fabAriaLabel}
            >
              <span className="cm-wa-fab-core" aria-hidden="true">
                <WhatsAppIcon className="cm-wa-fab-icon" />
              </span>
              <span className="cm-wa-fab-badge" aria-hidden="true" />
            </a>
          </Button>
        </div>
      )}

      <Dialog open={waModalOpen} onOpenChange={setWaModalOpen}>
        <DialogContent className="max-w-md rounded-3xl border border-border bg-card p-6 sm:p-7">
          <DialogHeader className="text-left">
            <DialogTitle className="font-heading text-2xl font-medium text-foreground">
              {dict.title}
            </DialogTitle>
            <DialogDescription className="mt-1 text-sm text-muted-foreground">
              {dict.description}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="wa-modal-name"
                className="font-sans text-xs font-medium normal-case tracking-normal text-foreground"
              >
                {dict.nameLabel}
              </Label>
              <Input
                id="wa-modal-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={dict.namePlaceholder}
                className="h-11 rounded-xl border border-border bg-background"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="wa-modal-age"
                className="font-sans text-xs font-medium normal-case tracking-normal text-foreground"
              >
                {dict.ageLabel}
              </Label>
              <Input
                id="wa-modal-age"
                type="text"
                inputMode="numeric"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder={dict.agePlaceholder}
                className="h-11 rounded-xl border border-border bg-background"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="wa-modal-procedure"
                className="font-sans text-xs font-medium normal-case tracking-normal text-foreground"
              >
                {dict.procedureLabel}
              </Label>
              <Input
                id="wa-modal-procedure"
                type="text"
                list="cm-procedures-datalist"
                required
                value={selectedProcedure}
                onChange={(e) => setSelectedProcedure(e.target.value)}
                placeholder={dict.procedurePlaceholder}
                className="h-11 rounded-xl border border-border bg-background"
              />
            </div>

            <Label
              htmlFor="wa-modal-privacy"
              className="flex min-h-11 cursor-pointer items-center gap-3 font-sans text-xs font-normal normal-case tracking-normal text-muted-foreground"
            >
              <Checkbox
                id="wa-modal-privacy"
                checked={acceptedPrivacy}
                onCheckedChange={(val) => {
                  const checked = Boolean(val);
                  setAcceptedPrivacy(checked);
                  if (checked) setPrivacyError(false);
                }}
              />
              <span>{dict.privacyAccept}</span>
            </Label>

            {privacyError && (
              <p role="alert" className="m-0 text-xs text-destructive">
                {dict.privacyError}
              </p>
            )}

            <Button
              type="submit"
              className="cm-btn-gold h-12 w-full rounded-xl text-base"
            >
              {dict.submitBtn}
            </Button>

            <p className="m-0 text-xs leading-relaxed text-muted-foreground">
              {dict.footnote}
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
