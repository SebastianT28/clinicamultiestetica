# Clínica Multiestética & Dra. Gabriela Delgado Silva

Sitio web institucional y de marca personal médica para **Clínica Multiestética**, liderada por la **Dra. Gabriela Delgado Silva** (Cirujana Maxilofacial y Especialista en Armonización Facial, `+18 años de experiencia profesional`) junto a su equipo de médicos especialistas en cirugía estética facial, corporal y medicina estética en **Arequipa, Perú**.

## Stack Tecnológico (Homologado con Proyecto Diamante Azul)

- **Framework:** Next.js `16.4.6` (App Router + Turbopack)
- **UI Library:** React `19.3.0` + TypeScript `5` (Strict Mode)
- **Estilos y Primitivas:** Tailwind CSS `v4` (`@tailwindcss/turbopack`), `shadcn` (`base-nova`), `@base-ui/react`, `class-variance-authority`
- **Iconografía:** `lucide-react` / componentes SVG optimizados
- **Base de Datos (Producción / Panel futuro):** `mysql2` compatible con SiteGround Node.js + MySQL

## Documentación del Negocio y Reglas del Proyecto

Toda la información oficial recopilada del briefing, catálogo de 16 procedimientos, staff médico y lineamientos SEO/UI/UX se encuentra documentada en la carpeta [`./rules/`](./rules/):

1. [`rules/01-negocio-y-brief-clinica-multiestetica.md`](./rules/01-negocio-y-brief-clinica-multiestetica.md) — Datos comerciales, historia, misión, visión, diferenciales y decisiones confirmadas.
2. [`rules/02-catalogo-servicios-y-staff-medico.md`](./rules/02-catalogo-servicios-y-staff-medico.md) — Los 16 procedimientos divididos en 3 silos SEO (bilingüe ES/EN) y estructura E-E-A-T de staff médico y colegiaturas.
3. [`rules/03-arquitectura-tecnica-seo-y-diseno.md`](./rules/03-arquitectura-tecnica-seo-y-diseno.md) — Referencia UI/UX (`clinicadianadussan.com`), sistema de color cálido en azules y dorados, SEO médico YMYL y normativa peruana.

## Comandos de Desarrollo

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
```
