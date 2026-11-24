# 03 — Reglas Técnicas, Referencia UI/UX y Estándares SEO

---

## 1. Stack Tecnológico Oficial (Homologado con Diamante Azul)

* **Ruta del Proyecto:** `d:\Proyecto Doctora web marca personal\Code_project`
* **Repositorio GitHub:** `https://github.com/SebastianT28/clinicamultiestetica.git`
* **Core:** Next.js `16.4.6` (App Router, RSC + Client Islands interactivos) · React `19.3.0` · TypeScript `5` (`strict: true`).
* **Estilos:** Tailwind CSS `v4` (`@tailwindcss/turbopack`), tokens CSS OKLCH/Hex en `src/app/globals.css`, primitivas accesibles `shadcn` (`base-nova`) + `@base-ui/react`.
* **Imágenes y Rendimiento:** Formato `AVIF` / `WebP`, *lazy-loading* fuera del viewport, `preload` en recursos críticos del Hero para LCP `< 1.8s` y cero CLS.
* **Backend / Persistencia futura:** `mysql2` incluido en dependencias para futura integración de agenda/leads o panel administrativo en SiteGround Node.js + MySQL.

---

## 2. Referencia Maestra UI/UX: Clínica Diana Dussan (`clinicadianadussan.com`)

El diseño tomará como referencia estructural, editorial y de experiencia de usuario a **https://www.clinicadianadussan.com/**, adaptándola al 100% a la identidad, colores (azules y dorados cálidos) e historia de la **Dra. Gabriela Delgado Silva & Clínica Multiestética**:

* **Tipografía Editorial + Médica:**
  * **Display / Titulares (`--font-serif`):** `Cormorant Garamond` (exactamente la serifa de lujo editorial usada por *Clínica Diana Dussan* en sus titulares principales, transmitiendo elegancia femenina, arte facial y cercanía).
  * **Cuerpo e Interfaz (`--font-sans`):** `Plus Jakarta Sans` (alta legibilidad móvil, amigable y moderna para fichas médicas, botones y navegación).
* **Equilibrio Cromático (70 / 20 / 10) para lograr Calidez + Confianza:**
  * **70% Superficies Cálidas Luminosas:** Marfil Seda (`#FAF8F4`), Blanco Puro (`#FFFFFF`) y Crema Perla (`#F3EFE6`) — evitan la frialdad hospitalaria y hacen que el sitio luzca luminoso, acogedor y femenino.
  * **20% Azul Zafiro Real y Azul Noche (`#1B365D` / `#132238`):** En titulares, botones principales de autoridad, header/footer de contraste y credenciales médicas.
  * **10% Dorado Champagne Suave (`#C8A45D` / `#9A7836`):** En filetes delicados, insignias `+18 años`, estrellas de reseñas, detalles de marca e indicadores activos (nunca amarillo saturado).
* **Logotipo Provisional Tipográfico (Wordmark de Alta Costura Médica):**
  * Mientras la doctora entrega su logotipo vectorial definitivo, se implementará un componente `<BrandLogo />` tipográfico limpio en `Cormorant Garamond` + monograma sutil `CM | GD` en Azul Zafiro y Dorado Champagne, preparado para ser reemplazado en un solo archivo cuando llegue el SVG oficial.

---

## 3. Reglas de SEO Médico (YMYL), Bilingüismo y Cumplimiento Legal Peruano

1. **Bilingüismo Real Español / Inglés (`ES` / `EN`):**
   * Selector de idioma fluido en Header (Desktop y Móvil) orientado tanto al paciente local de Arequipa como al paciente extranjero de turismo médico estético.
2. **Schema.org Estructurado (JSON-LD):**
   * `MedicalClinic` + `LocalBusiness` con geolocalización en `Urb. León XIII K-8, Cayma, Arequipa, Perú` y teléfono `+51960928384`.
   * `Physician` para la Dra. Gabriela Delgado Silva (+18 años de experiencia, especialidad maxilofacial y armonización facial) y médicos especialistas asociados.
   * `MedicalProcedure` y `FAQPage` en las páginas de servicios y preguntas frecuentes.
3. **Ética Médica y Políticas de Anuncios (Google Ads / Meta Ads Safe):**
   * Evitar promesas de resultados garantizados al 100%; enfatizar *"valoración médica personalizada"*, *"resultados armónicos y naturales"* y *"acompañamiento profesional"*.
   * Galerías de casos reales (*Antes y Después*) con advertencia ética de que cada resultado depende de la anatomía y valoración individual del paciente.
4. **Cumplimiento Normativo en Perú:**
   * **Ley N° 29733 (Protección de Datos Personales):** Casilla de aceptación de Política de Privacidad en todos los formularios de contacto/agendamiento.
   * **INDECOPI:** Enlace y vista de **Libro de Reclamaciones Virtual** en el pie de página junto a Términos y Condiciones y Política de Privacidad.
