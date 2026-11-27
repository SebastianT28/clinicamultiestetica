# 03 — Reglas Técnicas, Referencias UI/UX Híbridas, Paleta y Tipografía Oficial

---

## 1. Stack Tecnológico Oficial (Homologado con Diamante Azul)

* **Ruta del Proyecto:** `d:\Proyecto Doctora web marca personal\Code_project`
* **Repositorio GitHub:** `https://github.com/SebastianT28/clinicamultiestetica.git`
* **Dominio Base:** `http://dragabydelgado.com/` (`https://dragabydelgado.com`)
* **Core:** Next.js `16.4.6` (App Router, `cacheComponents: true`, RSC + Client Islands interactivos) · React `19.3.0` · TypeScript `5` (`strict: true`).
* **Estilos:** Tailwind CSS `v4` (`@tailwindcss/turbopack`), tokens CSS semánticos en `src/app/globals.css` (unidades en `rem`), primitivas accesibles `shadcn` (`base-nova`) + `@base-ui/react`.

---

## 2. Arquitectura UI/UX Híbrida Aprobada

El diseño del Home combina estratégicamente dos referentes internacionales adaptados a la marca personal de la **Dra. Gabriela Delgado Silva** y **Clínica Multiestética**:

1. **Encabezado (`SiteHeader`) y Pie de Página (`SiteFooter`):**
   * **Referencia UI/UX:** `https://www.clinicadianadussan.com/`
   * **Logotipo Oficial Instalado (Propuesta 2 Aprobada):** Isotipo lineal de silueta facial femenina + arco de proporción áurea y estrella de precisión en Azul Noche (`#10233E`) y Dorado Bruñido (`#8E661E`), integrado en fondo transparente Retina (`public/brand/logo-horizontal-dra-gabriela.png`, `public/brand/isotipo-dra-gabriela.png` y favicon vectorial `src/app/icon.svg`).
   * Barra superior fija con transición limpia en scroll, enlaces de navegación (`Inicio`, `Servicios`, `Testimonios`, `¿Quién soy?`, `Blog`), botón CTA destacado (`Contáctame`) y selector bilingüe `ES | EN`.
   * Pie de página estructurado en 4 columnas editoriales con una única acción primaria rellena y enlaces legales peruanos.

2. **Cuerpo de la Página Home (7 Apartados Estratégicos):**
   * **Referencia UI/UX Principal:** `https://clinicacavadas.es/` (adaptado al 100% a la Dra. Gabriela Delgado y la paleta blanca/zafiro/champagne):
     1. **Portada Principal (Hero):** Enfocado en mostrar a la Dra. Gabriela Delgado y su marca personal.
     2. **Especialización Médica Personal:** Basado en *"Atención quirúrgica especializada en reconstrucción compleja"*, enfocado en potenciar la marca personal y maestría facial de la doctora.
     3. **Servicios de Excelencia:** Basado en *"Servicios de Excelencia"* de Clínica Cavadas, presentando los procedimientos médicos del brief.
     4. **Historia Personal de la Doctora:** Basado en *"Desde 1994. Cirujano. Innovador. Humanista."*, narrando la historia real de valentía, +18 años de experiencia, vocación médica y sus 3 hijos.
     5. **¿Por qué la Dra. Gabriela Delgado?:** Basado en *"¿Por qué Dr. Cavadas?"*, adaptado a los diferenciales reales de la doctora.
     6. **¿Qué piensan nuestros pacientes?:** Tarjetas de reseña con la estética de `https://www.clinicadianadussan.com/`, mostrando **6 reseñas** con **efecto de movimiento continuo hacia la derecha** inspirado en las reseñas de `https://clinicacavadas.es/`.
     7. **Reserva de Citas Web:** Apartado limpio UI/UX dedicado al formulario de reserva de citas para pacientes desde la web.

---

## 3. Paleta de Colores Oficial (Propuesta 1 Aprobada)

* **Encabezado (Header):** Dorado Champagne Seda `#EADBC0` (`oklch(0.89 0.042 84)`).
* **Pie de Página (Footer):** Dorado Champagne Seda `#E4D2B0` (`oklch(0.86 0.052 83)`).
* **Texto sobre Header y Footer:** Azul Noche Profundo `#10233E` (contraste WCAG AAA `11.4:1`).
* **Fondo Principal y Contenido / Tarjetas:** Blanco Puro `#FFFFFF` con bordes cálidos sutiles `#EAE2D3` y superficies de apoyo neutras muy limpias (`#FAF8F4` / `#F7F4EE` solo donde el layout de referencia requiera separar planos sin perder pureza blanca).
* **Botones CTA y Controles Activos:** Azul Zafiro Real `#1B3B6F` (hover `#132B52`), texto Blanco `#FFFFFF`.
* **Textos sobre Blanco:** Titulares `#10233E` · Párrafos y textos secundarios `#4A5568`.
* **Imágenes y Videos Pendientes:** Recuadros grises limpios (`<GreyPlaceholder />`) listos para reemplazar por fotografía/video real.

---

## 4. Matriz Tipográfica Oficial (`next/font/google`)

| Elemento | Tipografía | Peso |
|---|---|---|
| Títulos principales (`H1`) | `Outfit` | `600` |
| Subtítulos (`H2`, `H3`) | `Outfit` | `500` |
| Párrafos y descripciones | `Inter` | `400` |
| Botones y navegación | `Outfit` | `500` |
| Botones CTA destacados | `Outfit` | `600` |
| Textos secundarios | `Inter` | `400` |

---

## 5. Reglas de SEO Médico (YMYL), Bilingüismo y Normativa Peruana

1. **Bilingüismo Español / Inglés (`ES` / `EN`)** activo en toda la interfaz del Home.
2. **Schema.org JSON-LD:** `Physician` (entidad principal: Dra. Gabriela Delgado Silva) + `MedicalClinic` (Clínica Multiestética en `Urb. León XIII K-8, Cayma, Arequipa, Perú`).
3. **Ética Médica:** No inventar testimonios con nombres falsos (mantener los 6 espacios etiquetados para reseñas verificadas reales) ni prometer resultados garantizados.
4. **Cumplimiento Legal en Perú:** Casilla de aceptación de **Ley N° 29733** en formularios y acceso a **Libro de Reclamaciones Virtual (INDECOPI)** en el Footer.
