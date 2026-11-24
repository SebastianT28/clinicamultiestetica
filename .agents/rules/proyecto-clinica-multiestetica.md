# Reglas del Proyecto — Clínica Multiestética & Dra. Gabriela Delgado Silva

Lee siempre la documentación detallada en la carpeta `./rules/` antes de modificar arquitectura, textos clínicos, estilos o rutas:
- `rules/01-negocio-y-brief-clinica-multiestetica.md`
- `rules/02-catalogo-servicios-y-staff-medico.md`
- `rules/03-arquitectura-tecnica-seo-y-diseno.md`

## Reglas Críticas de Desarrollo

1. **Stack homologado con Diamante Azul:** Next.js `16.4.6` (App Router en `src/app`), React `19.3.0`, TypeScript estricto, Tailwind CSS `v4` (`@tailwindcss/turbopack`) y componentes accesibles en `src/components/ui`.
2. **Referencia UI/UX oficial:** `https://www.clinicadianadussan.com/` adaptada a la marca híbrida **Clínica Multiestética** + **Dra. Gabriela Delgado Silva** (`+18 años de experiencia profesional`) en Arequipa, Perú.
3. **Identidad visual:** Tema claro cálido únicamente (sin modo oscuro), combinando Marfil Seda (`#FAF8F4`), Azul Zafiro Real (`#1B365D` / `#132238`) y Dorado Champagne (`#C8A45D`), con tipografías `Cormorant Garamond` (titulares) y `Plus Jakarta Sans` (interfaz y lectura).
4. **Tono y ética médica:** Hablar siempre de **"Tú"** con calidez, empatía y rigor clínico. Mostrar siempre respaldo E-E-A-T (Dra. Gabriela Delgado Silva en área maxilofacial/armonización facial + Staff de Cirujanos Plásticos Especialistas en cirugías corporales con colegiatura COP/CMP/RNE). Nunca inventar testimonios falsos ni prometer resultados médicos garantizados.
5. **Conversión y Bilingüismo:** Mantener soporte Español/Inglés (`ES`/`EN`), botón directo a WhatsApp oficial (`+51 960 928 384`), agendamiento de valoración, formulario validado con Ley N° 29733 y Libro de Reclamaciones Virtual (INDECOPI).
6. **Verificación obligatoria antes de entregar cambios:** Ejecutar `npm run typecheck`, `npm run lint` y `npm run build` sin errores.
