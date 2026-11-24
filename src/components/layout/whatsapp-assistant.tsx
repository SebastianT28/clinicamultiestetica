"use client";

import { useState } from "react";
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
    openWhatsAppModal,
    mobileMenuOpen,
  } = useAppInteraction();

  const dict = HOME_CONTENT[locale].waModal;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!acceptedPrivacy) return;

    const cleanName = name.trim();
    const cleanAge = age.trim();
    const cleanProc = selectedProcedure.trim();

    const message =
      locale === "es"
        ? `Hola Dra. Gabriela y equipo de Clínica Multiestética. Soy ${cleanName || "paciente"} (${cleanAge ? `${cleanAge} años` : "mayor de 18 años"}) y deseo agendar una valoración médica para: ${cleanProc || "evaluación personalizada"}.`
        : `Hello Dr. Gabriela and Clínica Multiestética team. My name is ${cleanName || "a prospective patient"} (${cleanAge ? `age ${cleanAge}` : "18+"}) and I would like to book a consultation for: ${cleanProc || "a personalized assessment"}.`;

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
        <Button
          type="button"
          size="icon"
          aria-label={dict.fabAriaLabel}
          onClick={() => openWhatsAppModal()}
          className="cm-wa-fab"
        >
          <WhatsAppIcon className="h-7 w-7" />
          <span className="cm-wa-fab-badge" aria-hidden="true" />
        </Button>
      )}

      <Dialog open={waModalOpen} onOpenChange={setWaModalOpen}>
        <DialogContent className="max-w-md rounded-3xl border border-border bg-card p-6 sm:p-7">
          <DialogHeader className="text-left">
            <DialogTitle className="font-serif text-2xl font-semibold text-foreground">
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
                type="number"
                min={18}
                max={99}
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
                onCheckedChange={(val) => setAcceptedPrivacy(Boolean(val))}
              />
              <span>{dict.privacyAccept}</span>
            </Label>

            <Button
              type="submit"
              disabled={!acceptedPrivacy}
              className="cm-btn-whatsapp h-12 w-full rounded-xl text-base font-semibold"
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
