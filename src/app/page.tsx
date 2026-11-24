import { SITE_CONFIG } from "@/config/site";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-start justify-center px-6 py-20">
      <p className="text-sm font-medium tracking-widest uppercase text-[var(--cm-gold-dark)]">
        {SITE_CONFIG.brandName} · {SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}
      </p>
      <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-[var(--cm-navy-deep)] sm:text-5xl">
        {SITE_CONFIG.founderName}
      </h1>
      <p className="mt-4 max-w-xl text-base text-[var(--cm-muted)]">
        Base del proyecto inicializada en Next.js 16 + React 19 + TypeScript + Tailwind CSS v4.
        Pendiente de aprobación del Plan UI/UX para iniciar la maquetación completa.
      </p>
    </main>
  );
}
