"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/config/site";

interface AppInteractionContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  waModalOpen: boolean;
  setWaModalOpen: (open: boolean) => void;
  selectedProcedure: string;
  setSelectedProcedure: (proc: string) => void;
  openWhatsAppModal: (procedure?: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const AppInteractionContext = createContext<AppInteractionContextValue | null>(null);

export function AppInteractionProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [waModalOpen, setWaModalOpen] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof document !== "undefined") {
      document.documentElement.lang = next;
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const openWhatsAppModal = useCallback((procedure?: string) => {
    if (procedure) {
      setSelectedProcedure(procedure);
    }
    setMobileMenuOpen(false);
    setWaModalOpen(true);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      waModalOpen,
      setWaModalOpen,
      selectedProcedure,
      setSelectedProcedure,
      openWhatsAppModal,
      mobileMenuOpen,
      setMobileMenuOpen,
    }),
    [locale, setLocale, waModalOpen, selectedProcedure, openWhatsAppModal, mobileMenuOpen]
  );

  return (
    <AppInteractionContext.Provider value={value}>
      {children}
    </AppInteractionContext.Provider>
  );
}

export function useAppInteraction() {
  const ctx = useContext(AppInteractionContext);
  if (!ctx) {
    throw new Error("useAppInteraction must be used within AppInteractionProvider");
  }
  return ctx;
}
