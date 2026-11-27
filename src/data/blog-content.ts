import type { Locale } from "@/config/site";

export interface BlogBulletItem {
  lead: string;
  body: string;
}

export interface BlogFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogArticleData {
  slug: string;
  relatedServiceSlug: string;
  relatedServiceName: string;
  topicShort: string;
  category: string;
  title: string;
  excerpt: string;
  standfirst: string;
  updatedLabel: string;
  readTimeLabel: string;
  coverPlaceholder: string;
  beforeCasePlaceholder: string;
  afterCasePlaceholder: string;
  intro: string;
  quickAnswerHeading: string;
  quickAnswerBullets: BlogBulletItem[];
  quickAnswerClosing: string;
  timelineHeading: string;
  timelineBullets: BlogBulletItem[];
  factorsHeading: string;
  factorsIntro: string;
  factorsBullets: BlogBulletItem[];
  careHeading: string;
  careParagraphs: string[];
  faqs: BlogFaqItem[];
}

export interface SpecialistEntityRow {
  label: string;
  value: string;
}

export interface BlogUiDictionary {
  breadcrumbHome: string;
  breadcrumbBlog: string;
  indexHeroTitle: string;
  indexHeroSubtitle: string;
  readArticleCta: string;
  indexClosingTitle: string;
  indexClosingSubtitle: string;
  primaryConsultCta: string;
  whatsappCta: string;
  bylinePrefix: string;
  inlineCalloutTitle: string;
  inlineCalloutBody: string;
  inlineCalloutBookLink: string;
  inlineCalloutOr: string;
  inlineCalloutWaLink: string;
  caseFigureCaption: string;
  caseFigureLinkLabel: string;
  beforePill: string;
  afterPill: string;
  serviceLinkPrefix: string;
  faqHeading: string;
  disclaimerText: string;
  specialistCard: {
    name: string;
    portraitPlaceholder: string;
    rows: SpecialistEntityRow[];
    ctaLabel: string;
  };
  articleClosingTitlePrefix: string;
  articleClosingSubtitle: string;
  continueReadingHeading: string;
}

export const BLOG_SLUGS = [
  "toxina-botulinica-cuanto-dura-cuando-hace-efecto",
  "lipopapada-y-marcacion-mandibular-como-definir-tu-perfil",
  "acido-hialuronico-resultados-naturales-sin-perder-tus-gestos",
  "blefaroplastia-cuando-rejuvenecer-tu-mirada",
  "bioestimuladores-de-colageno-y-enzimas-firmeza-en-tu-piel",
  "liposuccion-360-o-abdominoplastia-que-necesita-tu-silueta",
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];

export const BLOG_UI_CONTENT: Record<Locale, BlogUiDictionary> = {
  es: {
    breadcrumbHome: "Inicio",
    breadcrumbBlog: "Blog",
    indexHeroTitle: "Belleza natural, confianza que se nota",
    indexHeroSubtitle:
      "Guías médicas escritas desde la experiencia de la Dra. Gabriela Delgado y el equipo de Clínica Multiestética para ayudarte a decidir con calma, criterio y seguridad.",
    readArticleCta: "Leer artículo",
    indexClosingTitle: "¿Quieres saber qué tratamiento es ideal para ti?",
    indexClosingSubtitle:
      "Agenda tu valoración personalizada con la Dra. Gabriela Delgado en Arequipa y diseñemos juntos un plan armónico para tu caso.",
    primaryConsultCta: "Agendar valoración",
    whatsappCta: "Hablar por WhatsApp",
    bylinePrefix: "Por Dra. Gabriela Delgado Silva · Clínica Multiestética",
    inlineCalloutTitle: "¿Quieres saber qué opción es ideal para ti?",
    inlineCalloutBody:
      "Cada rostro y anatomía son únicos. En consulta evaluamos tus facciones sin prisas y te explicamos con honestidad qué procedimiento tiene sentido para tu objetivo.",
    inlineCalloutBookLink: "Agenda tu valoración",
    inlineCalloutOr: "o escríbenos por",
    inlineCalloutWaLink: "WhatsApp",
    caseFigureCaption:
      "Espacio reservado para caso clínico comparativo. Los resultados dependen de la evaluación anatómica individual.",
    caseFigureLinkLabel: "Ver galería de casos",
    beforePill: "Antes",
    afterPill: "Después",
    serviceLinkPrefix: "Conoce también el detalle clínico de este procedimiento en",
    faqHeading: "Preguntas frecuentes",
    disclaimerText:
      "Este artículo tiene fines informativos y educativos; no reemplaza una valoración médica presencial. La indicación de cualquier tratamiento se define tras evaluar tu historia clínica y anatomía en consulta.",
    specialistCard: {
      name: "Dra. Gabriela Delgado Silva",
      portraitPlaceholder: " Dra. GD ",
      rows: [
        {
          label: "Especialidad",
          value: "Cirujana Maxilofacial y Armonización Facial",
        },
        {
          label: "Cargo",
          value: "Fundadora y Directora Médica",
        },
        {
          label: "Clínica",
          value: "Clínica Multiestética",
        },
        {
          label: "Sede",
          value: "Cayma, Arequipa, Perú",
        },
        {
          label: "Trayectoria",
          value: "+18 años de experiencia profesional y formación internacional",
        },
        {
          label: "Enfoque clínico",
          value: "Armonización facial, cirugía maxilofacial y resultados naturales",
        },
        {
          label: "Filosofía",
          value:
            "«Donde la belleza encuentra su propósito y cada historia merece una nueva oportunidad.»",
        },
      ],
      ctaLabel: "Agendar mi valoración",
    },
    articleClosingTitlePrefix: "Agenda tu valoración sobre",
    articleClosingSubtitle:
      "La Dra. Gabriela Delgado y el equipo especialista de Clínica Multiestética evalúan tu caso en Arequipa para orientarte con transparencia y rigor médico.",
    continueReadingHeading: "Sigue leyendo",
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbBlog: "Blog",
    indexHeroTitle: "Natural harmony, confidence that shows",
    indexHeroSubtitle:
      "Medical guides written from the clinical experience of Dr. Gabriela Delgado and the Clínica Multiestética team to help you make informed, confident decisions.",
    readArticleCta: "Read article",
    indexClosingTitle: "Want to know which treatment is right for you?",
    indexClosingSubtitle:
      "Schedule your personalized consultation with Dr. Gabriela Delgado in Arequipa and discover a balanced medical plan tailored to you.",
    primaryConsultCta: "Book consultation",
    whatsappCta: "Chat on WhatsApp",
    bylinePrefix: "By Dr. Gabriela Delgado Silva · Clínica Multiestética",
    inlineCalloutTitle: "Want to know which option fits your case?",
    inlineCalloutBody:
      "Every facial structure is unique. During your consultation we assess your anatomy carefully and explain which procedure makes clinical sense for your goals.",
    inlineCalloutBookLink: "Book your consultation",
    inlineCalloutOr: "or message us on",
    inlineCalloutWaLink: "WhatsApp",
    caseFigureCaption:
      "Clinical comparison slot. Individual outcomes vary based on each patient's anatomy and clinical assessment.",
    caseFigureLinkLabel: "View case gallery",
    beforePill: "Before",
    afterPill: "After",
    serviceLinkPrefix: "Explore full clinical details for this procedure in",
    faqHeading: "Frequently asked questions",
    disclaimerText:
      "This article is for educational purposes and does not replace an in-person medical evaluation. Every treatment plan requires a direct clinical assessment of your anatomy and medical history.",
    specialistCard: {
      name: "Dr. Gabriela Delgado Silva",
      portraitPlaceholder: " Dr. GD ",
      rows: [
        {
          label: "Specialty",
          value: "Maxillofacial Surgeon & Facial Harmonization Specialist",
        },
        {
          label: "Role",
          value: "Founder & Medical Director",
        },
        {
          label: "Clinic",
          value: "Clínica Multiestética",
        },
        {
          label: "Location",
          value: "Cayma, Arequipa, Peru",
        },
        {
          label: "Experience",
          value: "+18 years of professional practice & international training",
        },
        {
          label: "Clinical focus",
          value: "Facial harmonization, maxillofacial surgery & natural results",
        },
        {
          label: "Philosophy",
          value:
            "“Where beauty finds its purpose and every story deserves a new opportunity.”",
        },
      ],
      ctaLabel: "Book my consultation",
    },
    articleClosingTitlePrefix: "Book your consultation for",
    articleClosingSubtitle:
      "Dr. Gabriela Delgado and the specialist medical team at Clínica Multiestética assess your case in Arequipa with clear, honest guidance.",
    continueReadingHeading: "Continue reading",
  },
};

export const BLOG_ARTICLES: Record<Locale, BlogArticleData[]> = {
  es: [
    {
      slug: "toxina-botulinica-cuanto-dura-cuando-hace-efecto",
      relatedServiceSlug: "toxina-botulinica",
      relatedServiceName: "Toxina botulínica",
      topicShort: "toxina botulínica",
      category: "Toxina botulínica",
      title:
        "Toxina botulínica: ¿en cuánto tiempo hace efecto y cuánto dura realmente?",
      excerpt:
        "La duda más frecuente antes de suavizar líneas de expresión: cuándo empezarás a notar el cambio y cuántos meses se mantiene con naturalidad.",
      standfirst:
        "La pregunta que más escuchamos en consulta antes de aplicar toxina botulínica es cuándo empieza a notarse y cuánto dura. Aquí tienes la línea de tiempo clínica real, sin exageraciones.",
      updatedLabel: "Actualizado nov 2026",
      readTimeLabel: "Lectura de 5 min",
      coverPlaceholder: "Portada editorial · Toxina botulínica en consulta",
      beforeCasePlaceholder: "Registro previo · Líneas dinámicas",
      afterCasePlaceholder: "Resultado clínico · Mirada descansada",
      intro:
        "Si estás evaluando aplicarte toxina botulínica para suavizar las líneas de la frente, el entrecejo o el contorno de ojos, es completamente normal querer saber en qué momento verás el cambio y cuánto tiempo permanecerá sin restarte expresividad.",
      quickAnswerHeading: "Respuesta rápida",
      quickAnswerBullets: [
        {
          lead: "El efecto no es inmediato:",
          body: "comienza a percibirse de forma progresiva entre el día 3 y el día 7 posteriores a la sesión.",
        },
        {
          lead: "El resultado estable:",
          body: "se aprecia con claridad entre los días 10 y 14, momento ideal para tu control médico.",
        },
        {
          lead: "Duración habitual:",
          body: "suele mantenerse entre 4 y 6 meses según la fuerza muscular, la zona tratada y tu metabolismo.",
        },
      ],
      quickAnswerClosing:
        "Son rangos clínicos orientativos: en tu valoración analizamos tu gesticulación para planificar la dosis exacta.",
      timelineHeading: "Línea de tiempo después de la aplicación",
      timelineBullets: [
        {
          lead: "Primeras horas:",
          body: "pueden observarse puntos leves en la piel que desaparecen en pocos minutos; retomas tu rutina con cuidados sencillos.",
        },
        {
          lead: "Días 1 a 2:",
          body: "aún no verás cambios visibles en las líneas porque el neuromodulador empieza a actuar gradualmente en la placa muscular.",
        },
        {
          lead: "Días 3 a 7:",
          body: "el músculo relaja su contracción excesiva y tu mirada comienza a lucir más descansada y serena.",
        },
        {
          lead: "Días 10 a 14:",
          body: "alcanzas el efecto completo y equilibrado; revisamos en control si algún punto requiere un ajuste fino.",
        },
        {
          lead: "Meses 4 a 6:",
          body: "la movilidad retorna de manera paulatina y natural, sin cambios bruscos en tu rostro.",
        },
      ],
      factorsHeading: "¿Por qué en algunas personas dura más que en otras?",
      factorsIntro:
        "Cada paciente metaboliza y gesticula de manera distinta. Los factores que más influyen son:",
      factorsBullets: [
        {
          lead: "Fuerza y hábito muscular:",
          body: "quienes fruncen el ceño con mucha intensidad o entrenan a alta exigencia física suelen recuperar movilidad un poco antes.",
        },
        {
          lead: "Precisión anatómica y dosis:",
          body: "una dosis personalizada suaviza sin congelar; respetar tus gestos naturales siempre es prioridad sobre sobrecorregir.",
        },
        {
          lead: "Constancia saludable:",
          body: "respetar los intervalos médicos evita que el músculo vuelva a marcar pliegues profundos en reposo.",
        },
      ],
      careHeading: "Cuidados esenciales y cada cuánto repetirla",
      careParagraphs: [
        "Durante las primeras 4 horas evita recostarte por completo o frotar la zona tratada, y pospón el ejercicio intenso, saunas o piscinas por 24 horas. Son medidas simples que ayudan a que el producto actúe exactamente en los puntos planificados.",
        "En la mayoría de pacientes recomendamos evaluar una nueva sesión cada 4 a 6 meses, evitando reaplicaciones prematuras. Lo más importante es acudir siempre a manos médicas certificadas que trabajen con insumos con registro sanitario vigente.",
      ],
      faqs: [
        {
          id: "faq-botox-1",
          question: "¿La toxina botulínica hace efecto el mismo día?",
          answer:
            "No. A diferencia del ácido hialurónico, la toxina botulínica actúa relajando progresivamente el músculo, por lo que empieza a notarse entre el tercer y séptimo día.",
        },
        {
          id: "faq-botox-2",
          question: "¿Voy a perder mi expresión natural?",
          answer:
            "Cuando se planifica con criterio anatómico, el objetivo no es inmovilizar tu rostro, sino suavizar los gestos de tensión para que luzcas descansada manteniendo tu esencia.",
        },
        {
          id: "faq-botox-3",
          question: "¿Puedo hacer ejercicio después de la sesión?",
          answer:
            "Te sugerimos esperar 24 horas antes de retomar entrenamientos intensos para asegurar una distribución óptima en los músculos tratados.",
        },
        {
          id: "faq-botox-4",
          question: "¿En qué se diferencia del ácido hialurónico?",
          answer:
            "La toxina botulínica relaja arrugas dinámicas causadas por el movimiento muscular, mientras que el ácido hialurónico repone soporte, hidratación o proyección en tejidos.",
        },
      ],
    },
    {
      slug: "lipopapada-y-marcacion-mandibular-como-definir-tu-perfil",
      relatedServiceSlug: "lipopapada-marcacion-mandibular",
      relatedServiceName: "Liposucción de papada y marcación mandibular",
      topicShort: "perfilamiento y papada",
      category: "Contorno facial",
      title:
        "Cómo definir tu perfil y reducir la papada con armonía maxilofacial",
      excerpt:
        "No toda plenitud bajo el mentón tiene la misma causa. Descubre cuándo conviene lipopapada, marcación mandibular o protocolos enzimáticos.",
      standfirst:
        "Definir el borde mandibular transforma la limpieza del perfil y el cuello, pero el primer paso es identificar si el origen es tejido adiposo, soporte óseo o laxitud cutánea.",
      updatedLabel: "Actualizado nov 2026",
      readTimeLabel: "Lectura de 5 min",
      coverPlaceholder: "Portada editorial · Perfilamiento mandibular",
      beforeCasePlaceholder: "Registro previo · Ángulo submentoniano",
      afterCasePlaceholder: "Resultado clínico · Contorno mandibular limpio",
      intro:
        "Muchas personas notan que en fotografías de perfil la transición entre el mentón y el cuello luce poco definida, incluso manteniendo un peso saludable. Desde la cirugía maxilofacial evaluamos la estructura completa del tercio inferior para elegir la solución más precisa.",
      quickAnswerHeading: "Respuesta rápida",
      quickAnswerBullets: [
        {
          lead: "Diagnóstico anatómico:",
          body: "evaluamos grasa submentoniana, tonicidad de la piel y proyección del mentón antes de indicar el procedimiento.",
        },
        {
          lead: "Procedimiento ambulatorio:",
          body: "la lipopapada se realiza con anestesia local e incisiones milimétricas ocultas bajo el mentón.",
        },
        {
          lead: "Definición progresiva:",
          body: "el cambio inicial se aprecia desde la primera semana y se asienta conforme cede la inflamación entre el primer y tercer mes.",
        },
      ],
      quickAnswerClosing:
        "Combinar lipopapada con marcación mandibular permite acompañar el nuevo ángulo cervical con soporte armónico.",
      timelineHeading: "Etapas de recuperación y evolución",
      timelineBullets: [
        {
          lead: "Día del procedimiento:",
          body: "intervención ambulatoria cómoda y retorno a casa el mismo día con mentonera de compresión suave.",
        },
        {
          lead: "Primeros 5 a 7 días:",
          body: "inflamación leve a moderada fácil de manejar; la mayoría retoma labores de oficina o estudio en pocos días.",
        },
        {
          lead: "Semanas 2 a 4:",
          body: "la piel se adhiere gradualmente al nuevo plano profundo con apoyo de controles postoperatorios personalizados.",
        },
        {
          lead: "Meses 2 a 3:",
          body: "el borde mandibular y el ángulo cervicomentoniano muestran su definición estable y natural.",
        },
      ],
      factorsHeading: "¿Qué opción médica funciona según tu tipo de papada?",
      factorsIntro:
        "No todas las papadas se tratan igual. En valoración distinguimos tres escenarios frecuentes:",
      factorsBullets: [
        {
          lead: "Acúmulo graso localizado con buena piel:",
          body: "la liposucción submentoniana ofrece un resultado directo, limpio y predecible en una sola intervención.",
        },
        {
          lead: "Falta de proyección en mentón o ángulo mandibular:",
          body: "complementar con marcación mandibular equilibra las proporciones del tercio inferior sin exagerar rasgos.",
        },
        {
          lead: "Volumen muy leve o incipiente:",
          body: "los protocolos con enzimas recombinantes pueden ser una alternativa no quirúrgica gradual en casos seleccionados.",
        },
      ],
      careHeading: "Acompañamiento post-procedimiento seguro",
      careParagraphs: [
        "El uso constante de la faja mentonera durante los primeros días y las sesiones de seguimiento indicadas en consulta favorecen una retracción uniforme de la piel y evitan fibrosis.",
        "Nuestro objetivo como equipo maxilofacial es lograr un contorno definido pero suave, coherente con las facciones de tu rostro tanto de frente como de perfil.",
      ],
      faqs: [
        {
          id: "faq-papada-1",
          question: "¿Quedan cicatrices visibles tras una lipopapada?",
          answer:
            "Se emplean accesos milimétricos ubicados estratégicamente en pliegues naturales ocultos, por lo que resultan prácticamente imperceptibles una vez cicatrizados.",
        },
        {
          id: "faq-papada-2",
          question: "¿La lipopapada requiere hospitalización?",
          answer:
            "En la gran mayoría de casos es un procedimiento ambulatorio bajo anestesia local controlada; regresas a casa el mismo día con indicaciones claras.",
        },
        {
          id: "faq-papada-3",
          question: "¿Cuándo conviene sumar marcación mandibular?",
          answer:
            "Cuando además de retirar volumen bajo el mentón buscamos proyectar suavemente la línea mandibular o el mentón para mejorar la proporción global del perfil.",
        },
        {
          id: "faq-papada-4",
          question: "¿Cuántos días debo usar la mentonera?",
          answer:
            "El protocolo exacto se ajusta a tu evolución, pero suele ser continuo los primeros días y luego de uso nocturno durante las semanas siguientes.",
        },
      ],
    },
    {
      slug: "acido-hialuronico-resultados-naturales-sin-perder-tus-gestos",
      relatedServiceSlug: "acido-hialuronico",
      relatedServiceName: "Ácido hialurónico",
      topicShort: "ácido hialurónico",
      category: "Armonización facial",
      title:
        "Ácido hialurónico: cómo lograr soporte y frescura sin perder tus gestos",
      excerpt:
        "Labios hidratados, ojeras descansadas y pómulos con soporte sutil: la clave está en elegir la densidad correcta y respetar tu anatomía.",
      standfirst:
        "El temor más común frente al ácido hialurónico es lucir un volumen artificial. Te explicamos cómo la armonización facial moderna devuelve estructura respetando tu identidad.",
      updatedLabel: "Actualizado nov 2026",
      readTimeLabel: "Lectura de 5 min",
      coverPlaceholder: "Portada editorial · Armonización con ácido hialurónico",
      beforeCasePlaceholder: "Registro previo · Pérdida leve de soporte",
      afterCasePlaceholder: "Resultado clínico · Armonía y frescura natural",
      intro:
        "Con el paso de los años, o por constitución anatómica, ciertos compartimentos del rostro pierden soporte profundo, haciendo que las ojeras se marquen más o que el tercio medio luzca cansado. El ácido hialurónico médico permite restaurar puntos clave sin cambiar quién eres.",
      quickAnswerHeading: "Respuesta rápida",
      quickAnswerBullets: [
        {
          lead: "Cambio visible al instante:",
          body: "notas la mejora de soporte desde el término de la sesión, asentándose por completo a las 2 semanas.",
        },
        {
          lead: "Biocompatible y reabsorbible:",
          body: "es una molécula presente de forma natural en la piel que el organismo integra y reabsorbe gradualmente.",
        },
        {
          lead: "Duración estimada:",
          body: "oscila entre 9 y 15 meses dependiendo de la zona tratada y la reticulación específica utilizada.",
        },
      ],
      quickAnswerClosing:
        "No todos los ácidos hialurónicos son iguales: cada zona del rostro exige una elasticidad y suavidad distinta.",
      timelineHeading: "Cómo evoluciona el resultado tras tu sesión",
      timelineBullets: [
        {
          lead: "En consulta (30 a 45 min):",
          body: "diseñamos el mapa anatómico facial y aplicamos con microcánula o aguja fina priorizando tu comodidad.",
        },
        {
          lead: "Primeras 48 a 72 horas:",
          body: "puede presentarse una leve inflamación, especialmente en zonas delicadas como los labios; es transitoria.",
        },
        {
          lead: "Día 14:",
          body: "el gel ya se ha integrado de forma homogénea con tus tejidos, mostrando un tacto y movimiento naturales.",
        },
        {
          lead: "Meses 9 a 15:",
          body: "la reabsorción ocurre lentamente manteniendo una mejora en la hidratación profunda de la zona.",
        },
      ],
      factorsHeading: "Zonas donde el ácido hialurónico aporta mayor equilibrio",
      factorsIntro:
        "En lugar de rellenar surcos aislados, hoy trabajamos por soporte estructural:",
      factorsBullets: [
        {
          lead: "Pómulos y tercio medio:",
          body: "devuelven sostén sutil al rostro y suavizan indirectamente el surco nasogeniano sin sobrecargar.",
        },
        {
          lead: "Valle lagrimal (ojeras hundidas):",
          body: "en pacientes candidatos disminuye la sombra de cansancio con geles de baja hidrofilia diseñados para el área periocular.",
        },
        {
          lead: "Labios y mentón:",
          body: "hidratan, perfilan contornos y equilibran las proporciones del perfil respetando la movilidad al hablar y sonreír.",
        },
      ],
      careHeading: "Criterio médico frente al exceso de volumen",
      careParagraphs: [
        "La armonización facial bien ejecutada no se nota como «relleno»; quienes te rodean perciben que luces más descansada y luminosa. Preferimos trabajar de menos a más, en etapas prudentes si tu caso lo amerita.",
        "Durante las primeras 24 horas posteriores evita calor intenso, maquillaje inmediato sobre los puntos de entrada y presión directa en la zona tratada.",
      ],
      faqs: [
        {
          id: "faq-ah-1",
          question: "¿Todas las ojeras se corrigen con ácido hialurónico?",
          answer:
            "Solo las ojeras con hundimiento anatómico y buen drenaje linfático son candidatas ideales. Si predomina pigmento oscuro o bolsas grasas, indicamos otro abordaje médico.",
        },
        {
          id: "faq-ah-2",
          question: "¿El procedimiento es doloroso?",
          answer:
            "Utilizamos anestesia tópica o local según el área, además de productos que incorporan lidocaína para que la sesión sea muy llevadera.",
        },
        {
          id: "faq-ah-3",
          question: "¿Qué pasa cuando pasa el efecto del ácido hialurónico?",
          answer:
            "Se reabsorbe de forma progresiva sin estirar ni empeorar tus tejidos; tu rostro regresa suavemente a su estado previo con mejor hidratación local.",
        },
        {
          id: "faq-ah-4",
          question: "¿Se puede combinar con toxina botulínica?",
          answer:
            "Sí, son tratamientos complementarios: la toxina relaja líneas de expresión superiores y el ácido hialurónico repone soporte estructural.",
        },
      ],
    },
    {
      slug: "blefaroplastia-cuando-rejuvenecer-tu-mirada",
      relatedServiceSlug: "blefaroplastia",
      relatedServiceName: "Blefaroplastia superior e inferior",
      topicShort: "blefaroplastia",
      category: "Mirada y cirugía facial",
      title:
        "Blefaroplastia superior e inferior: señales para rejuvenecer tu mirada",
      excerpt:
        "Cuando el exceso de piel en los párpados o las bolsas inferiores apagan tu expresión, una cirugía precisa devuelve amplitud y ligereza ocular.",
      standfirst:
        "Si sientes pesadez en los párpados superiores al final del día o notas bolsas permanentes pese a dormir bien, la blefaroplastia ofrece una solución duradera y armónica.",
      updatedLabel: "Actualizado nov 2026",
      readTimeLabel: "Lectura de 6 min",
      coverPlaceholder: "Portada editorial · Rejuvenecimiento de la mirada",
      beforeCasePlaceholder: "Registro previo · Exceso palpebral",
      afterCasePlaceholder: "Resultado clínico · Mirada despejada y natural",
      intro:
        "La piel de los párpados es la más fina del rostro y suele ser la primera en manifestar flacidez o herniación de bolsas grasas. Más allá de lo estético, en muchos pacientes el pliegue superior llega incluso a generar sensación de cansancio visual.",
      quickAnswerHeading: "Respuesta rápida",
      quickAnswerBullets: [
        {
          lead: "Objetivo quirúrgico:",
          body: "retirar con exactitud el exceso de piel superior y/o tratar las bolsas inferiores sin alterar la forma propia de tus ojos.",
        },
        {
          lead: "Intervención ambulatoria:",
          body: "se realiza en entorno quirúrgico seguro con recuperación domiciliaria cómoda desde el primer día.",
        },
        {
          lead: "Cicatriz discreta:",
          body: "queda alojada exactamente en el surco natural del párpado superior o por vía interna transconjuntival en casos inferiores seleccionados.",
        },
      ],
      quickAnswerClosing:
        "Una valoración presencial determina si necesitas tratar solo párpados superiores, inferiores o ambos.",
      timelineHeading: "Cómo transcurre la recuperación ocular",
      timelineBullets: [
        {
          lead: "Primeras 48 a 72 horas:",
          body: "aplicación de frío local intermitente y reposo relativo con cabecera ligeramente elevada para controlar la inflamación.",
        },
        {
          lead: "Días 5 a 7:",
          body: "retiro delicado de suturas finas y disminución notable de posibles pequeños hematomas.",
        },
        {
          lead: "Semanas 2 a 3:",
          body: "la mirada ya luce despejada para actividades sociales cotidianas protegiendo la zona con lentes de sol.",
        },
        {
          lead: "Meses 2 a 3:",
          body: "maduración fina de las líneas palpebrales y asentamiento definitivo del contorno ocular.",
        },
      ],
      factorsHeading: "¿Cómo saber si eres candidato a blefaroplastia?",
      factorsIntro:
        "En consulta evaluamos tres aspectos anatómicos esenciales alrededor de tu mirada:",
      factorsBullets: [
        {
          lead: "Pliegue cutáneo en párpado superior:",
          body: "cuando la piel descansa sobre las pestañas, dificulta el maquillaje o reduce la apertura luminosa del ojo.",
        },
        {
          lead: "Bolsas grasas inferiores persistentes:",
          body: "abultamientos que no cambian con el descanso ni mejoran con cremas o rellenos.",
        },
        {
          lead: "Posición de la ceja y soporte malar:",
          body: "revisamos la frente y el pómulo para asegurar un rejuvenecimiento equilibrado y nunca una mirada tensa.",
        },
      ],
      careHeading: "Protección solar y seguimiento personalizado",
      careParagraphs: [
        "Evitar esfuerzos físicos intensos durante las primeras dos semanas, mantener lubricación ocular según indicación médica y usar gafas con filtro UV al salir son claves para una cicatrización limpia.",
        "En Clínica Multiestética acompañamos de cerca cada control postoperatorio para que vivas tu recuperación con total tranquilidad.",
      ],
      faqs: [
        {
          id: "faq-blefa-1",
          question: "¿La blefaroplastia cambia la expresión o forma de mis ojos?",
          answer:
            "No debe cambiarla. Una técnica conservadora y precisa despeja el peso sobrante respetando íntegramente tu rasgo ocular natural.",
        },
        {
          id: "faq-blefa-2",
          question: "¿Elimina también las patas de gallo?",
          answer:
            "La blefaroplastia corrige piel sobrante y bolsas de los párpados; las líneas laterales de expresión suelen complementarse después con toxina botulínica.",
        },
        {
          id: "faq-blefa-3",
          question: "¿Cuándo puedo volver a trabajar frente a pantallas?",
          answer:
            "Muchos pacientes retoman trabajo remoto ligero entre los 5 y 7 días haciendo pausas visuales e hidratando los ojos según pauta médica.",
        },
        {
          id: "faq-blefa-4",
          question: "¿Los resultados son duraderos?",
          answer:
            "Sí, es uno de los procedimientos faciales con mayor estabilidad en el tiempo, acompañado de hábitos saludables y fotoprotección.",
        },
      ],
    },
    {
      slug: "bioestimuladores-de-colageno-y-enzimas-firmeza-en-tu-piel",
      relatedServiceSlug: "bioestimulador-colageno",
      relatedServiceName: "Bioestimulador de colágeno",
      topicShort: "bioestimuladores y calidad de piel",
      category: "Calidad de piel",
      title:
        "Bioestimuladores de colágeno y enzimas: cuándo elegir cada protocolo",
      excerpt:
        "Si notas pérdida de firmeza o pequeños acúmulos difíciles de tratar, conocer la diferencia entre bioestimular y perfilar con enzimas es clave.",
      standfirst:
        "Cuidar la calidad y densidad de la piel es el cimiento de cualquier resultado estético armónico. Te explicamos qué logra cada protocolo mínimamente invasivo.",
      updatedLabel: "Actualizado nov 2026",
      readTimeLabel: "Lectura de 5 min",
      coverPlaceholder: "Portada editorial · Bioestimulación y calidad de piel",
      beforeCasePlaceholder: "Registro previo · Laxitud cutánea leve",
      afterCasePlaceholder: "Resultado clínico · Piel firme y luminosa",
      intro:
        "A partir de los 25 a 30 años nuestra producción natural de colágeno disminuye cada año, traduciéndose en una piel más delgada o con menor sostén. A la vez, algunas zonas acumulan volumen localizado o fibrosis que restan definición.",
      quickAnswerHeading: "Respuesta rápida",
      quickAnswerBullets: [
        {
          lead: "Bioestimuladores de colágeno:",
          body: "activan tus propios fibroblastos para recuperar firmeza, grosor dérmico y efecto tensor gradual sin dar volumen excesivo.",
        },
        {
          lead: "Enzimas recombinantes:",
          body: "actúan de forma selectiva sobre grasa localizada leve, flacidez incipiente o tejido fibrótico.",
        },
        {
          lead: "Evolución progresiva:",
          body: "la síntesis de nuevo colágeno empieza alrededor de la cuarta semana y alcanza su punto óptimo entre los 2 y 3 meses.",
        },
      ],
      quickAnswerClosing:
        "Ambos tratamientos son ambulatorios y pueden integrarse en un plan secuencial según las necesidades de tu piel.",
      timelineHeading: "Cómo responde tu piel semana a semana",
      timelineBullets: [
        {
          lead: "Día de la aplicación:",
          body: "sesión en consultorio de aproximadamente 30 a 40 minutos con reincorporación inmediata a tus actividades.",
        },
        {
          lead: "Semanas 3 a 4:",
          body: "comienza la neocolagénesis interna; percibes mejor textura, hidratación y tonicidad al tacto.",
        },
        {
          lead: "Meses 2 a 3:",
          body: "el tensado dérmico se hace evidente de manera muy natural, mejorando el contorno mandibular y mejillas.",
        },
        {
          lead: "Mantenimiento anual:",
          body: "evaluamos en consulta una sesión de refuerzo anual para sostener la reserva de colágeno en el tiempo.",
        },
      ],
      factorsHeading: "¿En qué casos priorizamos cada tratamiento?",
      factorsIntro:
        "Durante el diagnóstico facial y corporal valoramos el estado real del tejido:",
      factorsBullets: [
        {
          lead: "Flacidez facial o de cuello sin exceso de peso:",
          body: "el bioestimulador de colágeno devuelve soporte dérmico firme conservando tus facciones intactas.",
        },
        {
          lead: "Pequeños bolsillos adiposos o fibrosis localizada:",
          body: "las combinaciones específicas de enzimas recombinantes ayudan a alisar y descompactar el tejido en sesiones programadas.",
        },
        {
          lead: "Textura irregular, poros dilatados o cicatrices:",
          body: "sumamos protocolos médicos de calidad de piel y manejo de cicatrices para uniformizar la superficie cutánea.",
        },
      ],
      careHeading: "Hábitos que potencian tu producción de colágeno",
      careParagraphs: [
        "El resultado de un bioestimulador también depende de la materia prima de tu organismo: una adecuada hidratación, buen aporte proteico, descanso reparador y protector solar diario multiplican la respuesta de tu piel.",
        "Evitar el tabaco y la exposición solar intensa sin protección protege las nuevas fibras de colágeno formadas tras el tratamiento.",
      ],
      faqs: [
        {
          id: "faq-piel-1",
          question: "¿Un bioestimulador hincha o rellena el rostro?",
          answer:
            "No cuando se indica para bioestimulación dérmica: su función principal es compactar y reafirmar tu propia piel sin ensanchar tus facciones.",
        },
        {
          id: "faq-piel-2",
          question: "¿Cuántas sesiones de enzimas recombinantes se requieren?",
          answer:
            "El número exacto depende del volumen y la zona a tratar; habitualmente se planifican entre 2 y 4 sesiones espaciadas según criterio médico.",
        },
        {
          id: "faq-piel-3",
          question: "¿Desde qué edad se recomienda bioestimular el colágeno?",
          answer:
            "Puede indicarse de forma preventiva desde los 30 años ante los primeros signos de laxitud, o de forma restaurativa en pieles más maduras.",
        },
        {
          id: "faq-piel-4",
          question: "¿Puedo maquillarme al día siguiente?",
          answer:
            "Sí, pasadas las primeras 24 horas puedes retomar tu rutina habitual de cuidado facial y maquillaje con manos e implementos limpios.",
        },
      ],
    },
    {
      slug: "liposuccion-360-o-abdominoplastia-que-necesita-tu-silueta",
      relatedServiceSlug: "liposuccion-360",
      relatedServiceName: "Liposucción 360",
      topicShort: "contorno corporal",
      category: "Cirugía corporal",
      title:
        "Liposucción 360 o abdominoplastia: cómo saber qué necesita tu silueta",
      excerpt:
        "Ambas cirugías remodelan el contorno corporal, pero responden a necesidades anatómicas distintas. Aprende a diferenciar qué evalúa el especialista.",
      standfirst:
        "Elegir entre una liposucción 360 y una abdominoplastia no depende de una moda, sino de la calidad de tu piel y la firmeza de tu pared muscular abdominal.",
      updatedLabel: "Actualizado nov 2026",
      readTimeLabel: "Lectura de 6 min",
      coverPlaceholder: "Portada editorial · Valoración de contorno corporal",
      beforeCasePlaceholder: "Registro previo · Evaluación de contorno",
      afterCasePlaceholder: "Resultado clínico · Silueta proporcionada",
      intro:
        "En Clínica Multiestética trabajamos junto a médicos especialistas en cirugía estética corporal bajo una premisa clara: indicarte únicamente la intervención que realmente dará un resultado armónico, seguro y estable según tu anatomía.",
      quickAnswerHeading: "Respuesta rápida",
      quickAnswerBullets: [
        {
          lead: "Liposucción 360:",
          body: "esculpe acúmulos grasos en abdomen, cintura y espalda cuando tu piel conserva buena capacidad de retracción.",
        },
        {
          lead: "Abdominoplastia:",
          body: "retira el exceso de piel abdominal y repara la separación muscular (diástasis), muy frecuente tras embarazos o cambios importantes de peso.",
        },
        {
          lead: "Seguridad preoperatoria:",
          body: "toda cirugía corporal exige exámenes prequirúrgicos completos, valoración especializada y acompañamiento postoperatorio estrecho.",
        },
      ],
      quickAnswerClosing:
        "Ninguna de las dos sustituye hábitos saludables ni es un método para bajar de peso; son cirugías de remodelación corporal.",
      timelineHeading: "Fases clave de preparación y recuperación",
      timelineBullets: [
        {
          lead: "Valoración y chequeo prequirúrgico:",
          body: "revisión médica integral, análisis clínicos y planificación detallada de las áreas de contorno.",
        },
        {
          lead: "Primera semana postoperatoria:",
          body: "deambulación temprana asistida, uso de prenda compresiva médica e inicio de controles y drenajes especializados.",
        },
        {
          lead: "Semanas 3 a 6:",
          body: "disminución progresiva del edema y retorno gradual a tus labores cotidianas evitando cargar peso según indicación.",
        },
        {
          lead: "Meses 3 a 6:",
          body: "definición consolidada de la silueta y seguimiento continuo de la evolución de tejidos y cicatrización.",
        },
      ],
      factorsHeading: "Tres criterios médicos que definen la elección",
      factorsIntro:
        "Durante la exploración física el cirujano especialista evalúa:",
      factorsBullets: [
        {
          lead: "Elasticidad y excedente de piel:",
          body: "si existe faldón cutáneo o estrías marcadas bajo el ombligo, aspirar solo grasa aumentaría la flacidez; allí está indicada la abdominoplastia.",
        },
        {
          lead: "Estado de los músculos rectos abdominales:",
          body: "cuando hay diástasis abdominal, reforzar la pared muscular devuelve firmeza interna al abdomen.",
        },
        {
          lead: "Armonía integral del contorno:",
          body: "en pacientes seleccionados puede complementarse el moldeamiento con lipotransferencia para equilibrar proporciones de forma natural.",
        },
      ],
      careHeading: "Respaldo multidisciplinario en cada etapa",
      careParagraphs: [
        "Tanto la preparación previa como el seguimiento postoperatorio representan la mitad del éxito de una cirugía corporal. Seguir al pie de la letra el uso de la faja quirúrgica, la hidratación y los controles médicos garantiza una evolución segura.",
        "En Clínica Multiestética te acompañamos con cercanía humana desde la primera consulta informativa hasta tu alta definitiva.",
      ],
      faqs: [
        {
          id: "faq-corp-1",
          question: "¿La liposucción 360 sirve para perder peso?",
          answer:
            "No. Su propósito es esculpir depósitos de grasa localizada resistentes a la dieta y el ejercicio en pacientes con un peso cercano al saludable.",
        },
        {
          id: "faq-corp-2",
          question: "¿Cuándo es indispensable una abdominoplastia?",
          answer:
            "Cuando existe exceso evidente de piel abdominal o separación de los músculos rectos que una liposucción por sí sola no puede tensar.",
        },
        {
          id: "faq-corp-3",
          question: "¿Quién realiza las cirugías corporales en la clínica?",
          answer:
            "Están a cargo del staff de cirujanos especialistas de Clínica Multiestética bajo estrictos protocolos quirúrgicos y acompañamiento integral.",
        },
        {
          id: "faq-corp-4",
          question: "¿Cuánto tiempo debo esperar después de un embarazo?",
          answer:
            "Se recomienda haber finalizado la lactancia y mantener un peso estable durante al menos 6 meses antes de planificar tu cirugía abdominal.",
        },
      ],
    },
  ],
  en: [
    {
      slug: "toxina-botulinica-cuanto-dura-cuando-hace-efecto",
      relatedServiceSlug: "toxina-botulinica",
      relatedServiceName: "Botulinum toxin",
      topicShort: "botulinum toxin",
      category: "Botulinum toxin",
      title:
        "Botulinum toxin: how soon does it take effect and how long does it last?",
      excerpt:
        "The most common question before softening expression lines: when you will start seeing changes and how many months the result stays natural.",
      standfirst:
        "Before receiving botulinum toxin, patients always want to know when it kicks in and how long it lasts. Here is the real clinical timeline without exaggerated promises.",
      updatedLabel: "Updated Nov 2026",
      readTimeLabel: "5 min read",
      coverPlaceholder: "Editorial cover · Botulinum toxin consultation",
      beforeCasePlaceholder: "Initial record · Dynamic expression lines",
      afterCasePlaceholder: "Clinical result · Rested natural gaze",
      intro:
        "If you are considering botulinum toxin to soften forehead, frown, or eye-contour lines, wanting clarity on onset and longevity is essential before making your decision.",
      quickAnswerHeading: "Quick answer",
      quickAnswerBullets: [
        {
          lead: "Not instantaneous:",
          body: "initial softening begins gradually between days 3 and 7 after treatment.",
        },
        {
          lead: "Full settled result:",
          body: "becomes clearly visible between days 10 and 14, when your follow-up check takes place.",
        },
        {
          lead: "Average duration:",
          body: "typically lasts 4 to 6 months depending on muscle strength, treated area, and metabolism.",
        },
      ],
      quickAnswerClosing:
        "These are clinical reference windows; your exact dosing is tailored after evaluating your facial expressions.",
      timelineHeading: "Post-treatment timeline",
      timelineBullets: [
        {
          lead: "First few hours:",
          body: "tiny pinpoint marks fade quickly and you resume daily life following simple posture precautions.",
        },
        {
          lead: "Days 1 to 2:",
          body: "no visible change yet while the neuromodulator begins binding at the neuromuscular junction.",
        },
        {
          lead: "Days 3 to 7:",
          body: "excessive muscle contraction relaxes progressively and your expression starts looking more rested.",
        },
        {
          lead: "Days 10 to 14:",
          body: "full balanced result is reached; we verify symmetry during your follow-up appointment.",
        },
        {
          lead: "Months 4 to 6:",
          body: "muscle movement returns gradually and naturally without abrupt changes.",
        },
      ],
      factorsHeading: "Why does it last longer for some patients?",
      factorsIntro:
        "Longevity varies from person to person depending on three clinical factors:",
      factorsBullets: [
        {
          lead: "Muscle strength and habits:",
          body: "strong frown muscles or high-intensity athletic metabolism may shorten the interval slightly.",
        },
        {
          lead: "Anatomical precision and dose:",
          body: "balanced dosing softens lines without freezing your identity; natural expression always comes first.",
        },
        {
          lead: "Consistent scheduling:",
          body: "maintaining healthy intervals prevents deep static creases from etching back into the skin.",
        },
      ],
      careHeading: "Essential aftercare and maintenance rhythm",
      careParagraphs: [
        "Avoid lying flat or rubbing treated areas for the first 4 hours, and skip strenuous workouts or saunas for 24 hours so the product settles precisely where placed.",
        "Most patients schedule maintenance every 4 to 6 months, always prioritizing certified medical hands and approved medical supplies.",
      ],
      faqs: [
        {
          id: "faq-botox-1",
          question: "Does botulinum toxin work on the same day?",
          answer:
            "No. Unlike dermal fillers, botulinum toxin gradually relaxes muscle tension, starting to show between days 3 and 7.",
        },
        {
          id: "faq-botox-2",
          question: "Will my face look frozen?",
          answer:
            "With precise anatomical dosing, our goal is never to freeze your face, but to soften tension lines while keeping authentic expressions.",
        },
        {
          id: "faq-botox-3",
          question: "Can I work out after my appointment?",
          answer:
            "Wait 24 hours before resuming intense exercise to ensure optimal localized action.",
        },
        {
          id: "faq-botox-4",
          question: "How does it differ from hyaluronic acid?",
          answer:
            "Botulinum toxin relaxes dynamic movement lines, whereas hyaluronic acid restores structural support, contour, or hydration.",
        },
      ],
    },
    {
      slug: "lipopapada-y-marcacion-mandibular-como-definir-tu-perfil",
      relatedServiceSlug: "lipopapada-marcacion-mandibular",
      relatedServiceName: "Chin liposuction & jawline contouring",
      topicShort: "chin & jawline contouring",
      category: "Facial contour",
      title:
        "How to define your profile and reduce a double chin with maxillofacial harmony",
      excerpt:
        "Submental fullness can stem from fat, bone structure, or skin laxity. Learn when chin liposuction, jawline contouring, or enzymes fit best.",
      standfirst:
        "Refining the jawline transforms neck and profile balance, starting with an accurate diagnosis of fat pads, bone projection, and skin elasticity.",
      updatedLabel: "Updated Nov 2026",
      readTimeLabel: "5 min read",
      coverPlaceholder: "Editorial cover · Jawline & profile contouring",
      beforeCasePlaceholder: "Initial record · Submental fullness",
      afterCasePlaceholder: "Clinical result · Clean mandibular contour",
      intro:
        "Many patients notice a soft transition between chin and neck in side-profile photos even at a healthy weight. A maxillofacial evaluation studies the entire lower third to select the right technique.",
      quickAnswerHeading: "Quick answer",
      quickAnswerBullets: [
        {
          lead: "Anatomical diagnosis:",
          body: "we assess submental fat, skin tone, and chin projection before recommending a procedure.",
        },
        {
          lead: "Outpatient comfort:",
          body: "chin liposuction is performed under local anesthesia through tiny concealed access points.",
        },
        {
          lead: "Progressive definition:",
          body: "early contour appears in week one and refines steadily through months 1 to 3.",
        },
      ],
      quickAnswerClosing:
        "Pairing submental refinement with jawline support creates balanced lower-face proportions.",
      timelineHeading: "Recovery and healing stages",
      timelineBullets: [
        {
          lead: "Procedure day:",
          body: "comfortable outpatient care returning home the same day with a soft compression garment.",
        },
        {
          lead: "Days 5 to 7:",
          body: "mild swelling subsides steadily; desk work usually resumes within a few days.",
        },
        {
          lead: "Weeks 2 to 4:",
          body: "skin adapts smoothly to the new contour supported by guided post-procedure checkups.",
        },
        {
          lead: "Months 2 to 3:",
          body: "the jawline and cervicomental angle display stable, natural definition.",
        },
      ],
      factorsHeading: "Which medical option fits your anatomy?",
      factorsIntro:
        "During your consultation we distinguish three common clinical scenarios:",
      factorsBullets: [
        {
          lead: "Localized fat with good skin elasticity:",
          body: "submental liposuction delivers clean, direct definition in a single session.",
        },
        {
          lead: "Recessed chin or soft mandibular angle:",
          body: "adding jawline contouring balances lower-third proportions harmoniously.",
        },
        {
          lead: "Very mild fullness:",
          body: "recombinant enzyme protocols can offer a gradual non-surgical option in selected cases.",
        },
      ],
      careHeading: "Guided post-procedure care",
      careParagraphs: [
        "Wearing the compression strap as instructed during the initial days and attending follow-up reviews help ensure smooth skin retraction without fibrosis.",
        "Our maxillofacial goal is a clean, refined contour that remains proportionate from both front and profile views.",
      ],
      faqs: [
        {
          id: "faq-papada-1",
          question: "Are scars visible after chin liposuction?",
          answer:
            "Tiny millimeter entry points are hidden beneath natural submental creases and become virtually imperceptible once healed.",
        },
        {
          id: "faq-papada-2",
          question: "Does chin liposuction require an overnight hospital stay?",
          answer:
            "In most cases it is an outpatient procedure under local anesthesia, allowing you to return home the same day.",
        },
        {
          id: "faq-papada-3",
          question: "When is jawline contouring combined with it?",
          answer:
            "Whenever subtle structural support along the chin or mandibular border enhances overall facial balance.",
        },
        {
          id: "faq-papada-4",
          question: "How long is the chin garment worn?",
          answer:
            "Typically continuously for the first few days and overnight during the following weeks according to your healing.",
        },
      ],
    },
    {
      slug: "acido-hialuronico-resultados-naturales-sin-perder-tus-gestos",
      relatedServiceSlug: "acido-hialuronico",
      relatedServiceName: "Hyaluronic acid fillers",
      topicShort: "hyaluronic acid",
      category: "Facial harmonization",
      title:
        "Hyaluronic acid: how to restore support and freshness while keeping your expressions",
      excerpt:
        "Hydrated lips, rested under-eyes, and subtle cheek support: natural outcomes come from anatomical precision and the right gel rheology.",
      standfirst:
        "The biggest concern around fillers is looking overdone. Here is how modern facial harmonization restores deep support while preserving your natural identity.",
      updatedLabel: "Updated Nov 2026",
      readTimeLabel: "5 min read",
      coverPlaceholder: "Editorial cover · Hyaluronic acid harmonization",
      beforeCasePlaceholder: "Initial record · Mild structural volume loss",
      afterCasePlaceholder: "Clinical result · Subtle natural harmony",
      intro:
        "Over time, or simply due to genetics, deep facial compartments lose support, making under-eye hollows or midface fatigue appear more pronounced. Medical-grade hyaluronic acid restores targeted structure gently.",
      quickAnswerHeading: "Quick answer",
      quickAnswerBullets: [
        {
          lead: "Immediate subtle lift:",
          body: "structural improvement is visible right away and settles completely within 2 weeks.",
        },
        {
          lead: "Biocompatible & reversible:",
          body: "hyaluronic acid naturally occurs in human skin and integrates smoothly into facial tissues.",
        },
        {
          lead: "Expected longevity:",
          body: "generally lasts 9 to 15 months depending on the anatomical zone and gel density.",
        },
      ],
      quickAnswerClosing:
        "Each facial region requires a specific elasticity so movement stays effortless when you smile or speak.",
      timelineHeading: "What to expect after your session",
      timelineBullets: [
        {
          lead: "In-office visit (30 to 45 min):",
          body: "anatomical mapping followed by gentle microcannula or fine-needle placement.",
        },
        {
          lead: "First 48 to 72 hours:",
          body: "mild swelling may appear, especially in delicate areas like the lips, resolving quickly.",
        },
        {
          lead: "Day 14:",
          body: "the gel integrates evenly with surrounding tissue for a natural look and feel.",
        },
        {
          lead: "Months 9 to 15:",
          body: "gradual resorption while leaving improved local skin hydration.",
        },
      ],
      factorsHeading: "Key areas where hyaluronic acid restores balance",
      factorsIntro:
        "Rather than chasing isolated lines, modern harmonization focuses on structural foundations:",
      factorsBullets: [
        {
          lead: "Cheeks and midface:",
          body: "restore subtle lift and indirectly soften nasolabial folds without heaviness.",
        },
        {
          lead: "Under-eye tear troughs:",
          body: "in properly selected candidates, low-hydrophilicity gels soften tired shadows.",
        },
        {
          lead: "Lips and chin:",
          body: "hydrate contours and harmonize profile proportions while preserving natural motion.",
        },
      ],
      careHeading: "Less-is-more clinical philosophy",
      careParagraphs: [
        "Well-planned facial harmonization never announces itself as filler; people simply notice you look rested and radiant. Whenever appropriate, we build results gradually across stages.",
        "For the first 24 hours avoid intense heat, direct pressure on treated zones, and immediate makeup over entry points.",
      ],
      faqs: [
        {
          id: "faq-ah-1",
          question: "Are all dark circles treated with hyaluronic acid?",
          answer:
            "Only true anatomical hollows with good lymphatic drainage qualify. Pigmentary circles or fat bags require different medical treatments.",
        },
        {
          id: "faq-ah-2",
          question: "Is the treatment painful?",
          answer:
            "Topical or local numbing plus lidocaine-formulated gels keep the session comfortable.",
        },
        {
          id: "faq-ah-3",
          question: "What happens once hyaluronic acid wears off?",
          answer:
            "It resorbs gradually without stretching tissues, returning gently to baseline with healthier local hydration.",
        },
        {
          id: "faq-ah-4",
          question: "Can it be combined with botulinum toxin?",
          answer:
            "Yes—botulinum toxin relaxes upper expression lines while hyaluronic acid restores structural support.",
        },
      ],
    },
    {
      slug: "blefaroplastia-cuando-rejuvenecer-tu-mirada",
      relatedServiceSlug: "blefaroplastia",
      relatedServiceName: "Upper & lower blepharoplasty",
      topicShort: "blepharoplasty",
      category: "Gaze & facial surgery",
      title:
        "Upper and lower blepharoplasty: signs it is time to refresh your gaze",
      excerpt:
        "When heavy upper eyelids or persistent under-eye bags dull your expression, precise eyelid surgery restores lightness and clarity.",
      standfirst:
        "If your upper eyelids feel heavy by evening or under-eye bags remain regardless of rest, blepharoplasty provides a lasting, natural surgical solution.",
      updatedLabel: "Updated Nov 2026",
      readTimeLabel: "6 min read",
      coverPlaceholder: "Editorial cover · Eyelid rejuvenation assessment",
      beforeCasePlaceholder: "Initial record · Upper eyelid hooding",
      afterCasePlaceholder: "Clinical result · Bright, rested gaze",
      intro:
        "Eyelid skin is the thinnest on the face and often shows laxity or fat-pad fullness earliest. Beyond aesthetics, excess upper skin can even create visual fatigue.",
      quickAnswerHeading: "Quick answer",
      quickAnswerBullets: [
        {
          lead: "Surgical goal:",
          body: "conservatively remove excess upper skin and/or address lower bags while preserving your natural eye shape.",
        },
        {
          lead: "Outpatient procedure:",
          body: "performed in a safe surgical setting with comfortable home recovery starting day one.",
        },
        {
          lead: "Concealed incisions:",
          body: "hidden within the natural upper eyelid crease or placed internally via a transconjunctival approach.",
        },
      ],
      quickAnswerClosing:
        "An in-person assessment determines whether upper lids, lower lids, or both should be addressed.",
      timelineHeading: "Ocular recovery milestones",
      timelineBullets: [
        {
          lead: "First 48 to 72 hours:",
          body: "intermittent cool compresses and head elevation keep swelling comfortable.",
        },
        {
          lead: "Days 5 to 7:",
          body: "delicate suture removal and noticeable clearing of mild bruising.",
        },
        {
          lead: "Weeks 2 to 3:",
          body: "comfortable return to everyday social activities using UV-protective sunglasses outdoors.",
        },
        {
          lead: "Months 2 to 3:",
          body: "incision lines mature finely and the eyelid contour settles completely.",
        },
      ],
      factorsHeading: "How to know if you are a candidate",
      factorsIntro:
        "During your surgical evaluation we examine three periocular elements:",
      factorsBullets: [
        {
          lead: "Upper skin fold:",
          body: "skin resting near the lash line that obscures the crease or weighs down your gaze.",
        },
        {
          lead: "Persistent lower fat bags:",
          body: "puffiness that does not fluctuate with sleep or respond to topical care.",
        },
        {
          lead: "Brow and cheek support:",
          body: "assessing surrounding structures ensures balanced, relaxed periorbital harmony.",
        },
      ],
      careHeading: "Sun protection and close medical follow-up",
      careParagraphs: [
        "Avoiding heavy exertion for two weeks, using prescribed lubricating drops, and wearing UV sunglasses outdoors support crisp, inconspicuous healing.",
        "At Clínica Multiestética we guide every post-operative visit personally so your recovery feels calm and reassuring.",
      ],
      faqs: [
        {
          id: "faq-blefa-1",
          question: "Will blepharoplasty change the shape of my eyes?",
          answer:
            "No. Conservative anatomical surgery removes excess weight while preserving the authentic shape of your eyes.",
        },
        {
          id: "faq-blefa-2",
          question: "Does it erase crow's feet on the sides?",
          answer:
            "Blepharoplasty treats eyelid skin and bags; lateral smile lines are typically complemented afterward with botulinum toxin.",
        },
        {
          id: "faq-blefa-3",
          question: "When can I return to computer work?",
          answer:
            "Many patients resume light screen work after 5 to 7 days with regular visual breaks and lubricating drops.",
        },
        {
          id: "faq-blefa-4",
          question: "Are blepharoplasty results long-lasting?",
          answer:
            "Yes, it is one of the longest-lasting facial procedures when paired with sun protection and healthy habits.",
        },
      ],
    },
    {
      slug: "bioestimuladores-de-colageno-y-enzimas-firmeza-en-tu-piel",
      relatedServiceSlug: "bioestimulador-colageno",
      relatedServiceName: "Collagen biostimulators",
      topicShort: "collagen & skin quality",
      category: "Skin quality",
      title:
        "Collagen biostimulators vs. enzymes: when to choose each protocol",
      excerpt:
        "If you notice mild skin laxity or stubborn localized fullness, understanding the role of collagen stimulation versus targeted enzymes is key.",
      standfirst:
        "Healthy dermal density is the foundation of every natural aesthetic outcome. Discover what each minimally invasive protocol achieves.",
      updatedLabel: "Updated Nov 2026",
      readTimeLabel: "5 min read",
      coverPlaceholder: "Editorial cover · Collagen biostimulation & skin care",
      beforeCasePlaceholder: "Initial record · Mild dermal laxity",
      afterCasePlaceholder: "Clinical result · Firmer, luminous skin",
      intro:
        "Starting in our late twenties, natural collagen synthesis declines each year, leading to thinner, less firm skin—while certain areas may simultaneously hold localized fullness or fibrosis.",
      quickAnswerHeading: "Quick answer",
      quickAnswerBullets: [
        {
          lead: "Collagen biostimulators:",
          body: "activate your own fibroblasts to rebuild dermal thickness and gradual firmness without adding puffiness.",
        },
        {
          lead: "Recombinant enzymes:",
          body: "target mild localized fat pads, early laxity, or fibrotic tissue selectively.",
        },
        {
          lead: "Gradual biological response:",
          body: "new collagen begins forming around week 4 and peaks naturally between months 2 and 3.",
        },
      ],
      quickAnswerClosing:
        "Both are quick office procedures that can be sequenced together in a personalized skin plan.",
      timelineHeading: "How your skin responds week by week",
      timelineBullets: [
        {
          lead: "Session day:",
          body: "30-to-40-minute office visit with immediate return to daily activities.",
        },
        {
          lead: "Weeks 3 to 4:",
          body: "internal neocollagenesis begins, improving skin texture and elasticity.",
        },
        {
          lead: "Months 2 to 3:",
          body: "progressive dermal tightening becomes visible along the cheeks and jawline.",
        },
        {
          lead: "Annual maintenance:",
          body: "a yearly booster session helps preserve your collagen reserve over time.",
        },
      ],
      factorsHeading: "When do we prioritize each treatment?",
      factorsIntro:
        "During your clinical skin assessment we match the protocol to tissue behavior:",
      factorsBullets: [
        {
          lead: "Facial or neck laxity without excess weight:",
          body: "collagen biostimulators restore firm dermal support while keeping facial proportions unchanged.",
        },
        {
          lead: "Small localized fat pockets or fibrosis:",
          body: "tailored recombinant enzyme blends smooth and refine tissue across scheduled sessions.",
        },
        {
          lead: "Uneven texture, pores, or scars:",
          body: "medical skin-quality and scar-revision protocols complement surface luminosity.",
        },
      ],
      careHeading: "Daily habits that support new collagen",
      careParagraphs: [
        "Your body builds new collagen best when supported by hydration, balanced protein intake, restorative sleep, and daily broad-spectrum sunscreen.",
        "Avoiding smoking and unprotected sun exposure preserves newly formed dermal fibers long-term.",
      ],
      faqs: [
        {
          id: "faq-piel-1",
          question: "Will a collagen biostimulator make my face look puffy?",
          answer:
            "No—when placed for dermal biostimulation, its role is to firm and thicken your own skin without widening facial contours.",
        },
        {
          id: "faq-piel-2",
          question: "How many recombinant enzyme sessions are needed?",
          answer:
            "Depending on the area and tissue thickness, 2 to 4 spaced sessions are typically planned.",
        },
        {
          id: "faq-piel-3",
          question: "At what age should collagen biostimulation start?",
          answer:
            "It can be used preventively from age 30 at the first signs of laxity or restoratively in mature skin.",
        },
        {
          id: "faq-piel-4",
          question: "Can I wear makeup the next day?",
          answer:
            "Yes, after 24 hours you may resume your regular skincare and clean makeup routine.",
        },
      ],
    },
    {
      slug: "liposuccion-360-o-abdominoplastia-que-necesita-tu-silueta",
      relatedServiceSlug: "liposuccion-360",
      relatedServiceName: "360 liposuction",
      topicShort: "body contouring",
      category: "Body surgery",
      title:
        "360 liposuction vs. abdominoplasty: how to know what your silhouette needs",
      excerpt:
        "Both procedures sculpt the torso, yet they address different anatomical factors. Learn how specialists evaluate skin elasticity and muscle tone.",
      standfirst:
        "Choosing between 360 liposuction and abdominoplasty depends on skin retraction capacity and abdominal wall integrity rather than trends.",
      updatedLabel: "Updated Nov 2026",
      readTimeLabel: "6 min read",
      coverPlaceholder: "Editorial cover · Body contouring evaluation",
      beforeCasePlaceholder: "Initial record · Torso contour assessment",
      afterCasePlaceholder: "Clinical result · Balanced body proportions",
      intro:
        "At Clínica Multiestética our specialist body surgery team follows one clear standard: recommending only the procedure that delivers safe, proportionate, and lasting harmony for your anatomy.",
      quickAnswerHeading: "Quick answer",
      quickAnswerBullets: [
        {
          lead: "360 liposuction:",
          body: "sculpts localized fat around the abdomen, waist, and back when skin retains good elasticity.",
        },
        {
          lead: "Abdominoplasty:",
          body: "removes excess abdominal skin and repairs muscle separation (diastasis), common after pregnancy or major weight shifts.",
        },
        {
          lead: "Surgical safety:",
          body: "every body procedure includes thorough preoperative testing, specialist surgical care, and structured post-op follow-up.",
        },
      ],
      quickAnswerClosing:
        "Neither procedure replaces healthy lifestyle habits or serves as weight-loss surgery; both are body-contouring interventions.",
      timelineHeading: "Preparation and recovery milestones",
      timelineBullets: [
        {
          lead: "Preoperative evaluation:",
          body: "comprehensive medical checkup, lab work, and individualized anatomical planning.",
        },
        {
          lead: "First post-op week:",
          body: "assisted early walking, medical compression garment use, and scheduled lymphatic follow-ups.",
        },
        {
          lead: "Weeks 3 to 6:",
          body: "steady reduction of swelling and gradual return to daily routines while avoiding heavy lifting.",
        },
        {
          lead: "Months 3 to 6:",
          body: "consolidated silhouette definition and ongoing scar-maturation monitoring.",
        },
      ],
      factorsHeading: "Three anatomical criteria that guide the decision",
      factorsIntro:
        "During your physical exam the specialist surgeon evaluates:",
      factorsBullets: [
        {
          lead: "Skin elasticity and excess:",
          body: "if loose skin or lower-abdominal folding is present, liposuction alone would worsen laxity—making abdominoplasty the right choice.",
        },
        {
          lead: "Rectus muscle tone:",
          body: "repairing abdominal diastasis restores internal core firmness and a flatter profile.",
        },
        {
          lead: "Overall torso harmony:",
          body: "in selected candidates, purified fat transfer (lipotransfer) can complement contour balance naturally.",
        },
      ],
      careHeading: "Close multidisciplinary support at every stage",
      careParagraphs: [
        "Thoughtful preparation and diligent post-operative care represent half the success of body surgery. Following compression garment guidelines, hydration, and checkups ensures safe healing.",
        "At Clínica Multiestética we accompany you warmly from your initial consultation through full recovery.",
      ],
      faqs: [
        {
          id: "faq-corp-1",
          question: "Is 360 liposuction a weight-loss procedure?",
          answer:
            "No. It sculpts stubborn localized fat deposits in patients who are already near a stable, healthy weight.",
        },
        {
          id: "faq-corp-2",
          question: "When is an abdominoplasty necessary instead?",
          answer:
            "Whenever excess abdominal skin or muscle separation is present that liposuction alone cannot tighten.",
        },
        {
          id: "faq-corp-3",
          question: "Who performs body surgeries at the clinic?",
          answer:
            "They are performed by Clínica Multiestética's specialist surgical staff under strict clinical safety protocols.",
        },
        {
          id: "faq-corp-4",
          question: "How long after pregnancy should I wait?",
          answer:
            "We recommend completing breastfeeding and maintaining a stable weight for at least 6 months before surgery.",
        },
      ],
    },
  ],
};

export function getBlogArticleBySlug(
  locale: Locale,
  slug: string
): BlogArticleData | undefined {
  return BLOG_ARTICLES[locale].find((article) => article.slug === slug);
}

export function getRelatedBlogArticles(
  locale: Locale,
  currentSlug: string,
  limit = 4
): BlogArticleData[] {
  return BLOG_ARTICLES[locale]
    .filter((article) => article.slug !== currentSlug)
    .slice(0, limit);
}
