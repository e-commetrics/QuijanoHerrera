// Spanish (primary) copy. English lives in en.ts and must keep the same shape:
// `Dict` is derived from this object, so a missing key in en.ts fails the build.
//
// Content rules for this file:
//   - No testimonials, case results, awards or credentials unless the firm has
//     supplied and can document them.
//   - No guarantees of outcome or of timing.

import type { PhotoName } from "@/lib/images";

// Typo-proof image references: a wrong name fails type-checking.
const img = (name: PhotoName): PhotoName => name;

export const es = {
  meta: {
    home: {
      title: "Abogados Civiles en Tijuana | Quijano Herrera Abogados",
      description:
        "Abogados civiles en Tijuana con 15 años de práctica: litigio civil, contratos, propiedad, medidas cautelares y soluciones alternativas. Agenda tu consulta.",
    },
    civil: {
      title: "Derecho Civil en Tijuana | Quijano Herrera Abogados",
      description:
        "Litigio civil, contratos, propiedad y posesión, medidas cautelares y conflictos patrimoniales. Estrategia jurídica desde Tijuana, B.C.",
    },
    privacy: {
      title: "Aviso de Privacidad | Quijano Herrera Abogados",
      description:
        "Aviso de privacidad de Quijano Herrera Abogados: qué datos personales recabamos, para qué los usamos y cómo ejercer tus derechos ARCO.",
    },
    ogAlt: "Quijano Herrera Abogados, abogados civiles en Tijuana",
  },

  a11y: {
    skip: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    mainNav: "Navegación principal",
    mobileNav: "Menú móvil",
    switchLanguage: "Cambiar a inglés",
    backToTop: "Volver arriba",
  },

  lang: { current: "ES", other: "EN", otherName: "English" },

  nav: {
    links: [
      { label: "Áreas de práctica", anchor: "areas" },
      { label: "Enfoque", anchor: "enfoque" },
      { label: "Proceso", anchor: "proceso" },
      { label: "El despacho", anchor: "despacho" },
      { label: "Preguntas", anchor: "preguntas" },
    ],
    contact: "Contacto",
    cta: "Agendar consulta",
    dock: { whatsapp: "WhatsApp", call: "Llamar" },
  },

  hero: {
    eyebrow: "Abogados civiles en Tijuana, B.C.",
    titleLead: "Estrategia jurídica para",
    titleEmphasis: "proteger lo que importa.",
    description:
      "Asesoría, estrategia y representación legal en materia civil. Protegemos tu patrimonio, prevenimos riesgos y resolvemos controversias con precisión y oportunidad.",
    ctaPrimary: "Agendar consulta",
    ctaSecondary: "Ver áreas de práctica",
    phoneHint: "¿Prefieres hablar ahora?",
    imageAlt:
      "Estatuilla de la Justicia en bronce sostenida por una abogada con traje oscuro",
    pillarsLabel: "Cómo trabajamos",
    pillars: ["Precisión", "Estrategia", "Ejecución"],
    credential: "15 años de práctica",
  },

  trust: {
    statement:
      "Litigio, negociación, medidas cautelares y convenios, ante autoridades judiciales y administrativas.",
    stats: [
      { value: 15, suffix: "", label: "años de práctica jurídica en Tijuana" },
      { value: 5, suffix: "", label: "áreas de práctica en derecho civil" },
      { value: 2, suffix: "", label: "socios fundadores" },
    ],
  },

  approach: {
    eyebrow: "Nuestro enfoque",
    title: "Un asunto legal no comienza en los tribunales.",
    intro:
      "Comienza mucho antes: con una decisión, un contrato, una obligación, un riesgo o una controversia que debe ser atendida correctamente. Por eso partimos de un análisis integral del caso, identificando riesgos, oportunidades y posibles escenarios antes de definir el camino a seguir.",
    pillars: [
      {
        n: "01",
        title: "Precisión",
        text: "Análisis jurídico y preparación documental rigurosos. Cada paso se apoya en la evidencia disponible y en la norma aplicable.",
      },
      {
        n: "02",
        title: "Estrategia",
        text: "Una estrategia definida desde el inicio: negociar, conciliar, formalizar un acuerdo o litigar, según lo que más convenga a tus intereses.",
      },
      {
        n: "03",
        title: "Ejecución",
        text: "Experiencia procesal y atención personalizada para ejecutar la estrategia con rigor, hasta el cumplimiento de la resolución.",
      },
    ],
    quote:
      "Una buena estrategia legal no consiste únicamente en reaccionar ante un problema. Consiste en anticiparlo, proteger los intereses de nuestros clientes y actuar con precisión cuando más importa.",
  },

  services: {
    eyebrow: "Áreas de práctica · Derecho civil",
    title: "Cinco frentes para proteger tu patrimonio y resolver controversias.",
    lede: "El derecho civil regula contratos, obligaciones, propiedad y las relaciones entre particulares. Cada asunto requiere análisis, anticipación y una estrategia bien ejecutada.",
    whyLabel: "Por qué importa",
    resultLabel: "Lo que buscamos",
    cta: "Ver alcance completo",
    allCta: "Ver todo el derecho civil",
    items: [
      {
        id: "litigio-civil",
        n: "01",
        title: "Litigio Civil",
        what: "Representación en controversias que exigen una defensa estructurada: incumplimiento de contratos, responsabilidad civil, juicios ejecutivos y cobro de deudas.",
        why: "Una controversia mal planteada se debilita antes de llegar a juicio.",
        result: "Un caso construido con evidencia y una estrategia procesal definida desde el inicio.",
        image: img("litigation"),
        imageAlt: "Abogado revisando un expediente con la estatuilla de la Justicia en primer plano",
      },
      {
        id: "contratos-y-obligaciones",
        n: "02",
        title: "Contratos y Obligaciones",
        what: "Elaboración, negociación y revisión de contratos civiles; análisis de riesgos, nulidades y convenios de cumplimiento y liquidación.",
        why: "Un contrato bien estructurado protege intereses, delimita responsabilidades y reduce riesgos futuros.",
        result: "Instrumentos claros y ejecutables, diseñados para proteger tus intereses.",
        image: img("contracts"),
        imageAlt: "Dos personas firmando un contrato sobre una carpeta de documentos",
      },
      {
        id: "propiedad-posesion-y-derechos-reales",
        n: "03",
        title: "Propiedad, Posesión y Derechos Reales",
        what: "Recuperación y defensa de la posesión, desalojo, acción reivindicatoria, usucapión, regularización y escrituración.",
        why: "Los conflictos sobre inmuebles y patrimonio requieren especial precisión.",
        result: "Certeza jurídica sobre tu patrimonio y una estrategia clara ante cualquier controversia.",
        image: img("property"),
        imageAlt: "Documentos legales y una lupa sobre un escritorio, junto a la estatuilla de la Justicia",
      },
      {
        id: "medidas-cautelares-y-ejecucion",
        n: "04",
        title: "Medidas Cautelares y Ejecución",
        what: "Embargos, anotaciones preventivas, medidas cautelares, actuaciones ante el Registro Público y ejecución de sentencias.",
        why: "En ciertos asuntos, actuar a tiempo es tan importante como ganar el juicio.",
        result: "Bienes protegidos, derechos preservados y obligaciones que efectivamente se cumplen.",
        image: img("precautionary"),
        imageAlt: "Balanza de la justicia en latón sobre un escritorio azul marino",
      },
      {
        id: "conflictos-patrimoniales-y-soluciones-alternativas",
        n: "05",
        title: "Conflictos Patrimoniales y Soluciones Alternativas",
        what: "Negociación, mediación y conciliación; convenios judiciales y extrajudiciales; reconocimiento y liquidación de obligaciones.",
        why: "No toda controversia debe convertirse en un litigio prolongado.",
        result: "La vía más conveniente: acuerdo cuando es viable, litigio cuando es necesario.",
        image: img("negotiation"),
        imageAlt: "Apretón de manos en un despacho legal",
      },
    ],
  },

  difference: {
    eyebrow: "Por qué Quijano Herrera",
    title: "No solo interpretamos la ley. Diseñamos la estrategia.",
    reactiveLabel: "Enfoque reactivo",
    ourLabel: "Nuestro enfoque",
    rows: [
      ["Se actúa cuando el problema ya escaló.", "Se analizan riesgos y escenarios antes de definir el camino."],
      ["Se interpreta la norma.", "Se construye una estrategia procesal desde el primer día."],
      ["Todo termina en litigio.", "Se evalúa si conviene negociar, conciliar, formalizar un acuerdo o litigar."],
      ["El trabajo termina con la sentencia.", "La estrategia contempla la correcta ejecución de la resolución."],
    ],
    closing:
      "Cuando existe una solución viable, buscamos construirla. Cuando es necesario litigar, estamos preparados para hacerlo.",
  },

  process: {
    eyebrow: "Proceso",
    title: "De la primera conversación a la ejecución de la resolución.",
    lede: "Un camino claro, para que siempre sepas en qué etapa está tu asunto y qué sigue.",
    steps: [
      {
        n: "01",
        title: "Primer contacto",
        text: "Cuéntanos tu situación por WhatsApp, llamada o formulario. Identificamos el tipo de asunto y qué documentos necesitamos revisar.",
      },
      {
        n: "02",
        title: "Análisis integral",
        text: "Estudiamos el caso completo: documentos, riesgos, oportunidades y posibles escenarios.",
      },
      {
        n: "03",
        title: "Estrategia definida",
        text: "Te explicamos la vía recomendada —negociar, conciliar, formalizar un acuerdo o litigar— y qué esperar de cada una.",
      },
      {
        n: "04",
        title: "Ejecución",
        text: "Actuamos ante las autoridades judiciales y administrativas competentes, con seguimiento y comunicación clara.",
      },
      {
        n: "05",
        title: "Cumplimiento",
        text: "Buscamos que la resolución o el acuerdo se cumpla: ejecución de sentencias, inscripciones y registros.",
      },
    ],
  },

  scenarios: {
    eyebrow: "Situaciones frecuentes",
    title: "Los asuntos por los que nos buscan.",
    lede: "Ejemplos de situaciones civiles y de la vía que normalmente analizamos para cada una.",
    cols: { situation: "Situación", path: "Vía que evaluamos", protects: "Qué se protege" },
    items: [
      {
        situation: "Un contrato se incumplió y la otra parte no responde.",
        path: "Análisis del instrumento, requerimiento y, en su caso, juicio por incumplimiento.",
        protects: "El cumplimiento de la obligación y tu inversión.",
      },
      {
        situation: "Existe una deuda documentada que no se paga.",
        path: "Juicio ejecutivo civil, con embargo de bienes cuando procede.",
        protects: "El crédito y la posibilidad real de cobrarlo.",
      },
      {
        situation: "Un inmueble está ocupado sin derecho.",
        path: "Recuperación de la posesión o juicio de desalojo, según el caso.",
        protects: "Tu propiedad y su disponibilidad.",
      },
      {
        situation: "Posees un inmueble pero no tienes escrituras a tu nombre.",
        path: "Regularización, escrituración o usucapión.",
        protects: "La certeza jurídica sobre tu patrimonio.",
      },
      {
        situation: "Temes que los bienes del deudor desaparezcan antes de la sentencia.",
        path: "Medidas cautelares, embargos y anotaciones preventivas.",
        protects: "La posibilidad de ejecutar la sentencia.",
      },
      {
        situation: "Tienes un conflicto patrimonial y prefieres evitar un juicio largo.",
        path: "Negociación, mediación o convenio judicial.",
        protects: "Tiempo, relación y costo.",
      },
    ],
    disclaimer:
      "Ejemplos ilustrativos de asuntos civiles. Cada caso se evalúa de forma individual; el resultado de un asunto jurídico no puede garantizarse.",
    imageAlt: "Manos firmando un documento con pluma estilográfica",
  },

  about: {
    eyebrow: "El despacho",
    title: "Un despacho civil con 15 años de práctica en Tijuana.",
    paragraphs: [
      "Desde Tijuana, Baja California, atendemos asuntos civiles con experiencia en litigio, negociación, medidas cautelares, convenios y procedimientos ante autoridades judiciales y administrativas.",
      "Combinamos experiencia procesal, análisis jurídico, preparación documental y atención personalizada para construir estrategias claras y ejecutarlas con rigor.",
    ],
    foundersLabel: "Socios fundadores",
    founders: [
      { name: "José ", role: "Socio fundador", initials: "JH" },
      { name: "Luis ", role: "Socio fundador", initials: "LQ" },
    ],
    methodLabel: "Método de trabajo",
    method: ["Experiencia procesal", "Análisis jurídico", "Preparación documental", "Atención personalizada"],
    cta: "Hablar con el despacho",
    imageAlt: "Fachada del despacho Quijano Herrera Abogados con el logotipo en relieve",
  },

  // Real client testimonials only. Leave empty until the firm provides quotes it
  // has permission to publish; the section does not render while empty.
  testimonials: {
    eyebrow: "Clientes",
    title: "Lo que dicen quienes confiaron en nosotros.",
    items: [] as { quote: string; name: string; detail: string }[],
  },

  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Lo que conviene saber antes de dar el primer paso.",
    items: [
      {
        q: "¿Cómo funciona la primera consulta?",
        a: "Empezamos escuchando tu situación y revisando los documentos disponibles: contratos, pagarés, escrituras, notificaciones o mensajes. Con eso te explicamos qué vías existen, qué riesgos tiene cada una y cuál recomendamos. Puedes iniciar por WhatsApp, por teléfono o con el formulario de esta página.",
      },
      {
        q: "¿Qué documentos conviene reunir?",
        a: "Todo lo que respalde tu caso: contratos y convenios, pagarés o títulos de crédito, escrituras o documentos de propiedad, comprobantes de pago, correspondencia y mensajes, y cualquier notificación judicial que hayas recibido. Si no tienes todo, no esperes: revisamos lo que haya.",
      },
      {
        q: "¿Siempre es necesario ir a juicio?",
        a: "No. Analizamos cada situación para determinar si conviene negociar, conciliar, formalizar un acuerdo o ejercer una acción judicial. Cuando existe una solución viable, buscamos construirla; cuando es necesario litigar, estamos preparados para hacerlo.",
      },
      {
        q: "¿Cuánto tarda un asunto civil?",
        a: "Depende de la naturaleza del asunto, de la vía elegida y de la carga de las autoridades. Por eso no prometemos plazos: después de analizar tu caso te explicamos escenarios realistas y qué esperar en cada etapa.",
      },
      {
        q: "¿Se pueden proteger bienes antes de que termine el juicio?",
        a: "En ciertos casos sí. Existen medidas cautelares, embargos y anotaciones preventivas que ayudan a preservar derechos y asegurar el cumplimiento de una obligación. Su procedencia depende de cada asunto y exige actuar a tiempo, por eso conviene consultarlo cuanto antes.",
      },
      {
        q: "¿Atienden a personas y a empresas?",
        a: "Sí. Atendemos asuntos civiles de la vida personal —propiedad, patrimonio, contratos y obligaciones— y de la vida empresarial —cobro de deudas, incumplimientos y conflictos con otros particulares—.",
      },
      {
        q: "¿Cómo se definen los honorarios?",
        a: "Dependen de la naturaleza y la complejidad del asunto. Después de analizar tu caso te explicamos el alcance del servicio y los honorarios antes de comenzar.",
      },
      {
        q: "¿Mi información es confidencial?",
        a: "Sí. Lo que compartas se maneja con confidencialidad profesional y se utiliza únicamente para evaluar y atender tu asunto, conforme a nuestro Aviso de Privacidad.",
      },
    ],
  },

  contact: {
    eyebrow: "Contacto",
    title: "Cuéntanos tu caso. Definamos la estrategia.",
    lede: "Escríbenos por WhatsApp, llámanos o déjanos tus datos. Te respondemos para entender tu situación y proponerte el siguiente paso.",
    whatsapp: {
      label: "Escribir por WhatsApp",
      hint: "La forma más rápida de empezar",
      message: "Hola, quiero agendar una consulta sobre un asunto civil.",
    },
    labels: { phone: "Teléfono", email: "Correo", address: "Oficina", hours: "Horario" },
    // Hours are a placeholder supplied by the developer, not confirmed by the firm.
    hours: "Lunes a viernes, 9:00 a 18:00 · Sábado, 9:00 a 13:00",
    form: {
      title: "O déjanos tus datos",
      name: "Nombre",
      phone: "Teléfono o WhatsApp",
      topic: "¿Qué necesitas resolver?",
      topicDefault: "Selecciona una opción",
      topics: [
        "Litigio civil",
        "Contratos y obligaciones",
        "Propiedad, posesión y derechos reales",
        "Medidas cautelares y ejecución",
        "Conflictos patrimoniales y soluciones alternativas",
        "No estoy seguro",
      ],
      message: "Cuéntanos brevemente tu situación",
      consentPrefix: "Acepto el",
      consentLink: "Aviso de Privacidad",
      consentSuffix: "y que se me contacte para dar seguimiento a mi solicitud.",
      submit: "Enviar por WhatsApp",
      emailInstead: "O enviar por correo",
      note: "Se abrirá WhatsApp con tu mensaje listo para enviar. No guardamos tus datos en este sitio.",
      sent: "Se abrió WhatsApp con tu mensaje. Si no se abrió, escríbenos directamente al número de arriba.",
      errors: {
        name: "Escribe tu nombre.",
        phone: "Escribe un teléfono válido, con al menos 10 dígitos.",
        topic: "Selecciona el tipo de asunto.",
        message: "Cuéntanos brevemente tu situación.",
        consent: "Para continuar, acepta el Aviso de Privacidad.",
      },
      whatsappGreeting: "Hola, soy",
      whatsappTopic: "Quiero consultar sobre",
      whatsappPhone: "Mi teléfono",
      emailSubject: "Consulta civil",
    },
  },

  footer: {
    tagline: "Estrategia jurídica. Protección patrimonial. Resultados.",
    navTitle: "Navegación",
    areasTitle: "Derecho civil",
    contactTitle: "Contacto",
    legal: "Aviso de Privacidad",
    disclaimer:
      "La información de este sitio es de carácter informativo y no constituye asesoría legal ni garantiza resultados. Cada asunto se evalúa de forma individual.",
    rights: "Todos los derechos reservados.",
    top: "Volver arriba",
    openMap: "Abrir la dirección en Google Maps",
    poweredBy: "Powered by",
  },

  civil: {
    breadcrumbHome: "Inicio",
    breadcrumbCurrent: "Derecho civil",
    eyebrow: "Derecho civil · Tijuana, B.C.",
    title: "Derecho civil en Tijuana",
    standfirst: "Estrategia jurídica para proteger lo que importa.",
    intro: [
      "En **Quijano Herrera Abogados** brindamos asesoría, estrategia y representación legal en materia civil, con un enfoque orientado a **proteger el patrimonio, prevenir riesgos y resolver controversias con precisión y oportunidad**.",
      "El derecho civil regula una parte esencial de la vida personal y empresarial: contratos, obligaciones, propiedad, patrimonio y relaciones entre particulares. Por ello, cada asunto requiere mucho más que una interpretación de la ley: requiere **análisis, anticipación y una estrategia jurídica bien ejecutada**.",
      "Desde Tijuana, Baja California, atendemos asuntos civiles con experiencia en **litigio, negociación, medidas cautelares, convenios y procedimientos ante autoridades judiciales y administrativas**.",
    ],
    indexLabel: "En esta página",
    areaCta: "Consultar este tema",
    bulletsLabel: "Atendemos",
    areas: [
      {
        id: "litigio-civil",
        n: "01",
        title: "Litigio Civil",
        intro:
          "Representamos a nuestros clientes en controversias que requieren una defensa jurídica estructurada, rigurosa y orientada a resultados.",
        bullets: [
          "Incumplimiento de contratos y obligaciones",
          "Responsabilidad civil",
          "Juicios ejecutivos civiles",
          "Controversias por deudas y obligaciones de pago",
          "Conflictos patrimoniales entre particulares",
          "Ejecución de resoluciones y sentencias",
        ],
        closing:
          "Construimos cada caso a partir de la evidencia disponible, el análisis jurídico y una estrategia procesal definida desde el inicio.",
        image: img("litigation"),
        imageAlt: "Abogado revisando un expediente con la estatuilla de la Justicia en primer plano",
      },
      {
        id: "contratos-y-obligaciones",
        n: "02",
        title: "Contratos y Obligaciones",
        intro:
          "Un contrato bien estructurado no solo documenta un acuerdo: **protege intereses, delimita responsabilidades y reduce riesgos futuros**.",
        bullets: [
          "Elaboración y negociación de contratos civiles",
          "Revisión jurídica de contratos existentes",
          "Identificación de riesgos, incumplimientos y posibles contingencias",
          "Análisis de nulidades, vicios y condiciones contractuales",
          "Convenios de cumplimiento, reconocimiento y liquidación de obligaciones",
        ],
        closing:
          "Nuestro objetivo es que cada instrumento jurídico sea claro, ejecutable y diseñado para proteger los intereses de nuestros clientes.",
        image: img("contracts"),
        imageAlt: "Dos personas firmando un contrato sobre una carpeta de documentos",
      },
      {
        id: "propiedad-posesion-y-derechos-reales",
        n: "03",
        title: "Propiedad, Posesión y Derechos Reales",
        intro:
          "Los conflictos relacionados con inmuebles y patrimonio requieren especial precisión. Atendemos procedimientos relacionados con la posesión, titularidad y protección jurídica de bienes.",
        bullets: [
          "Recuperación y defensa de la posesión",
          "Juicios de desalojo",
          "Acción reivindicatoria",
          "Usucapión o prescripción positiva",
          "Regularización de propiedad",
          "Escrituración y derechos sobre bienes inmuebles",
        ],
        closing:
          "Trabajamos para brindar **certeza jurídica sobre el patrimonio y una estrategia clara frente a cualquier controversia**.",
        image: img("property"),
        imageAlt: "Documentos legales y una lupa sobre un escritorio, junto a la estatuilla de la Justicia",
      },
      {
        id: "medidas-cautelares-y-ejecucion",
        n: "04",
        title: "Medidas Cautelares y Ejecución",
        intro:
          "En determinados asuntos, actuar a tiempo puede ser tan importante como ganar un juicio. Diseñamos e impulsamos estrategias para **proteger bienes, preservar derechos y asegurar el cumplimiento de obligaciones**.",
        bullets: [
          "Embargos",
          "Inscripciones y anotaciones preventivas",
          "Medidas cautelares",
          "Actuaciones ante el Registro Público",
          "Ejecución de sentencias y resoluciones",
        ],
        closing: "La estrategia jurídica no termina con una resolución: también contempla su correcta ejecución.",
        image: img("precautionary"),
        imageAlt: "Balanza de la justicia en latón sobre un escritorio azul marino",
      },
      {
        id: "conflictos-patrimoniales-y-soluciones-alternativas",
        n: "05",
        title: "Conflictos Patrimoniales y Soluciones Alternativas",
        intro:
          "No toda controversia debe convertirse en un litigio prolongado. Analizamos cada situación para determinar si la mejor estrategia es **negociar, conciliar, formalizar un acuerdo o ejercer una acción judicial**.",
        bullets: [
          "Negociación y solución de controversias",
          "Mediación y conciliación",
          "Conflictos económicos y patrimoniales",
          "Convenios judiciales y extrajudiciales",
          "Reconocimiento y liquidación de obligaciones",
        ],
        closing:
          "Cuando existe una solución viable, buscamos construirla. Cuando es necesario litigar, estamos preparados para hacerlo.",
        image: img("negotiation"),
        imageAlt: "Apretón de manos en un despacho legal",
      },
    ],
    approach: {
      eyebrow: "Nuestro enfoque",
      title: "Precisión. Estrategia. Ejecución.",
      paragraphs: [
        "En **Quijano Herrera Abogados** entendemos que un asunto legal no comienza cuando llega a los tribunales. Comienza mucho antes: **con una decisión, un contrato, una obligación, un riesgo o una controversia que debe ser atendida correctamente**.",
        "Por eso nuestro trabajo parte de un análisis integral del caso, identificando riesgos, oportunidades y posibles escenarios antes de definir el camino a seguir.",
        "Combinamos **experiencia procesal, análisis jurídico, preparación documental y atención personalizada** para construir estrategias claras y ejecutarlas con rigor.",
      ],
      closing:
        "Porque una buena estrategia legal no consiste únicamente en reaccionar ante un problema. **Consiste en anticiparlo, proteger los intereses de nuestros clientes y actuar con precisión cuando más importa.**",
      signature: "Estrategia jurídica. Protección patrimonial. Resultados.",
    },
    cta: {
      title: "¿Tienes un asunto civil que atender?",
      text: "Cuéntanos tu situación y te explicamos qué vías existen y cuál recomendamos.",
      button: "Agendar consulta",
    },
  },

  privacy: {
    breadcrumbCurrent: "Aviso de privacidad",
    eyebrow: "Legal",
    title: "Aviso de Privacidad",
    updated: "Última actualización: octubre de 2026",
    sections: [
      {
        title: "Responsable del tratamiento de tus datos personales",
        paragraphs: [
          "Quijano Herrera Abogados, con domicilio en Luis Cabrera 1509-406, Zona Urbana Río Tijuana, C.P. 22320, Tijuana, Baja California, México, es responsable del tratamiento de los datos personales que nos proporciones, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
        ],
      },
      {
        title: "Datos personales que recabamos",
        paragraphs: ["Cuando nos contactas por medio de este sitio, por teléfono, por WhatsApp o por correo electrónico, podemos recabar:"],
        bullets: [
          "Nombre.",
          "Teléfono o número de WhatsApp.",
          "Correo electrónico.",
          "La información sobre tu asunto que decidas compartir.",
        ],
      },
      {
        title: "Finalidades del tratamiento",
        paragraphs: ["Utilizamos tus datos personales únicamente para:"],
        bullets: [
          "Contactarte y dar respuesta a tu solicitud.",
          "Evaluar tu asunto y agendar una consulta.",
          "Dar seguimiento a la relación profesional que, en su caso, se establezca.",
        ],
      },
      {
        title: "Formulario de contacto, WhatsApp y correo",
        paragraphs: [
          "El formulario de este sitio no almacena tus datos en un servidor propio: al enviarlo, se abre WhatsApp o tu aplicación de correo con el mensaje listo para enviar. Al usar WhatsApp o correo electrónico, tus mensajes también son tratados por los proveedores de esos servicios conforme a sus propias políticas de privacidad.",
        ],
      },
      {
        title: "Transferencias",
        paragraphs: [
          "No vendemos ni compartimos tus datos personales con terceros, salvo que una autoridad competente lo requiera conforme a la ley.",
        ],
      },
      {
        title: "Cookies y tecnologías de rastreo",
        paragraphs: [
          "Este sitio no utiliza cookies de rastreo ni herramientas de publicidad. Si en el futuro se incorporan herramientas de medición, este aviso se actualizará.",
        ],
      },
      {
        title: "Derechos ARCO y revocación del consentimiento",
        paragraphs: [
          "Tienes derecho a acceder a tus datos personales, rectificarlos, cancelarlos u oponerte a su tratamiento (derechos ARCO), así como a revocar el consentimiento que nos hayas otorgado. Para ejercerlos, envía tu solicitud a despacho@quijanoherrera.com indicando tu nombre, el derecho que deseas ejercer y los datos a los que se refiere tu solicitud.",
        ],
      },
      {
        title: "Cambios al aviso de privacidad",
        paragraphs: [
          "Este aviso puede modificarse. Cualquier cambio se publicará en esta página, con su fecha de actualización.",
        ],
      },
    ] as { title: string; paragraphs: string[]; bullets?: string[] }[],
  },

  notFound: {
    title: "Esta página no existe",
    text: "Es posible que el enlace haya cambiado. Vuelve al inicio o cuéntanos qué necesitas.",
    home: "Ir al inicio",
    contact: "Contactar al despacho",
  },
};

export type Dict = typeof es;
