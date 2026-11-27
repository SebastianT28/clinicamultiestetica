# Reglas del Proyecto — Dra. Gabriela Delgado & Clínica Multiestética

Lee siempre la documentación detallada en `./rules/` antes de modificar arquitectura, textos clínicos, estilos o rutas:
- `rules/01-negocio-y-brief-clinica-multiestetica.md`
- `rules/02-catalogo-servicios-y-staff-medico.md`
- `rules/03-arquitectura-tecnica-seo-y-diseno.md`

## Reglas Críticas de Desarrollo

1. **Stack homologado con Diamante Azul:** Next.js `16.4.6` (App Router en `src/app`, `cacheComponents: true`), React `19.3.0`, TypeScript estricto, Tailwind CSS `v4` (`@tailwindcss/turbopack`) y componentes Base UI en `src/components/ui`.
2. **Marca y Dominio Oficial:** Marca personal principal **Dra. Gabriela Delgado** (`Dra. Gabriela Delgado Silva`, `+18 años de experiencia profesional`) y marca secundaria **Clínica Multiestética**, bajo el dominio `http://dragabydelgado.com/` (`https://dragabydelgado.com`). Páginas del sitio: `Inicio`, `Servicios`, `Testimonios`, `¿Quién soy?`, `Blog` y `Contáctame` (sin Preguntas Frecuentes por ahora).
3. **Referencias UI/UX Híbridas:**
   - **Header y Footer:** `https://www.clinicadianadussan.com/`
   - **Secciones del Home:** `https://clinicacavadas.es/` (Portada, Especialización, Servicios de Excelencia, Historia personal, ¿Por qué la Dra. Gabriela?) + sección *¿Qué piensan nuestros pacientes?* con 6 tarjetas estilo *Diana Dussan* moviéndose hacia la derecha como en *Clínica Cavadas* + formulario limpio de reserva de citas web.
4. **Paleta y Tipografía Oficial:**
   - **Colores (Propuesta 1):** Header `#EADBC0` y Footer `#E4D2B0` (Champagne Seda con texto `#10233E`), fondo y contenido Blanco `#FFFFFF`, botones Azul Zafiro Real `#1B3B6F` (hover `#132B52`).
   - **Tipografías:** `Outfit` (`600` en H1 y CTAs destacados; `500` en H2, H3, botones y navegación) + `Inter` (`400` en párrafos, descripciones y textos secundarios).
5. **Ética médica y conversión:** Hablar de **"Tú"** con calidez y rigor clínico, mantener bilingüismo `ES`/`EN`, WhatsApp `+51 960 928 384`, recuadros grises para fotos/videos pendientes, Ley N° 29733 y Libro de Reclamaciones Virtual.
6. **Verificación obligatoria antes de entregar cambios:** Ejecutar `npm run typecheck`, `npm run lint` y `npm run build` sin errores.
