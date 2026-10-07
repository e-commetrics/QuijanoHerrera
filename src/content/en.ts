// English copy. Same shape as es.ts (enforced by the Dict type).
//
// Legal terminology note: Mexican civil-law concepts have no exact common-law
// equivalent. Terms are translated for comprehension; the firm should review
// them before publication.

import { es, type Dict } from "./es";

export const en: Dict = {
  meta: {
    home: {
      title: "Civil Law Attorneys in Tijuana | Quijano Herrera Abogados",
      description:
        "Civil law attorneys in Tijuana with 15 years of practice: litigation, contracts, property, precautionary measures and mediation under Mexican law.",
    },
    civil: {
      title: "Civil Law in Tijuana | Quijano Herrera Abogados",
      description:
        "Civil litigation, contracts, property and possession, precautionary measures and property disputes. Legal strategy from Tijuana, Mexico.",
    },
    privacy: es.meta.privacy,
    ogAlt: "Quijano Herrera Abogados, civil law attorneys in Tijuana",
  },

  a11y: {
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    mobileNav: "Mobile menu",
    switchLanguage: "Switch to Spanish",
    backToTop: "Back to top",
  },

  lang: { current: "EN", other: "ES", otherName: "Español" },

  nav: {
    links: [
      { label: "Practice areas", anchor: "areas" },
      { label: "Approach", anchor: "enfoque" },
      { label: "Process", anchor: "proceso" },
      { label: "The firm", anchor: "despacho" },
      { label: "FAQ", anchor: "preguntas" },
    ],
    contact: "Contact",
    cta: "Book a consultation",
    dock: { whatsapp: "WhatsApp", call: "Call" },
  },

  hero: {
    eyebrow: "Civil law attorneys in Tijuana, Mexico",
    titleLead: "Legal strategy to",
    titleEmphasis: "protect what matters.",
    description:
      "Counsel, strategy and legal representation in civil matters under Mexican law. We protect your assets, prevent risks and resolve disputes with precision and timing.",
    ctaPrimary: "Book a consultation",
    ctaSecondary: "View practice areas",
    phoneHint: "Prefer to talk now?",
    imageAlt: "Bronze statuette of Lady Justice held by a lawyer in a dark suit",
    pillarsLabel: "How we work",
    pillars: ["Precision", "Strategy", "Execution"],
    credential: "15 years of practice",
  },

  trust: {
    statement:
      "Litigation, negotiation, precautionary measures and settlement agreements, before judicial and administrative authorities.",
    stats: [
      { value: 15, suffix: "", label: "years of legal practice in Tijuana" },
      { value: 5, suffix: "", label: "civil law practice areas" },
      { value: 2, suffix: "", label: "founding partners" },
    ],
  },

  approach: {
    eyebrow: "Our approach",
    title: "A legal matter doesn't begin in court.",
    intro:
      "It begins long before: with a decision, a contract, an obligation, a risk or a dispute that has to be handled correctly. That is why we start with a comprehensive analysis of the case, identifying risks, opportunities and possible scenarios before choosing the path forward.",
    pillars: [
      {
        n: "01",
        title: "Precision",
        text: "Rigorous legal analysis and document preparation. Every step rests on the available evidence and the applicable law.",
      },
      {
        n: "02",
        title: "Strategy",
        text: "A strategy defined from day one: negotiate, conciliate, formalize an agreement or litigate, whichever best serves your interests.",
      },
      {
        n: "03",
        title: "Execution",
        text: "Procedural experience and personal attention to carry out the strategy rigorously, through to compliance with the outcome.",
      },
    ],
    quote:
      "A good legal strategy is not just about reacting to a problem. It is about anticipating it, protecting our clients' interests and acting with precision when it matters most.",
  },

  services: {
    eyebrow: "Practice areas · Civil law",
    title: "Five fronts to protect your assets and resolve disputes.",
    lede: "Civil law governs contracts, obligations, property and relationships between private parties. Every matter calls for analysis, foresight and a well-executed strategy.",
    whyLabel: "Why it matters",
    resultLabel: "What we aim for",
    cta: "See full scope",
    allCta: "See all civil law",
    items: [
      {
        id: "litigio-civil",
        n: "01",
        title: "Civil Litigation",
        what: "Representation in disputes that call for a structured defense: breach of contract, civil liability, executory proceedings and debt collection.",
        why: "A poorly framed dispute is weakened before it ever reaches court.",
        result: "A case built on evidence, with a procedural strategy defined from the start.",
        image: "litigation",
        imageAlt: "Lawyer reviewing a case file with a statuette of Lady Justice in the foreground",
      },
      {
        id: "contratos-y-obligaciones",
        n: "02",
        title: "Contracts and Obligations",
        what: "Drafting, negotiation and review of civil contracts; analysis of risks and nullity, and agreements to perform and settle obligations.",
        why: "A well-structured contract protects interests, defines responsibilities and reduces future risk.",
        result: "Clear, enforceable instruments designed to protect your interests.",
        image: "contracts",
        imageAlt: "Two people signing a contract over a folder of documents",
      },
      {
        id: "propiedad-posesion-y-derechos-reales",
        n: "03",
        title: "Property, Possession and Real Rights",
        what: "Recovery and defense of possession, eviction, action for recovery of ownership, usucapion (adverse possession), regularization and deed formalization.",
        why: "Disputes over real estate and assets require particular precision.",
        result: "Legal certainty over your property and a clear strategy against any dispute.",
        image: "property",
        imageAlt: "Legal documents and a magnifying glass on a desk beside a statuette of Lady Justice",
      },
      {
        id: "medidas-cautelares-y-ejecucion",
        n: "04",
        title: "Precautionary Measures and Enforcement",
        what: "Attachments, preventive annotations, precautionary measures, filings before the Public Registry and enforcement of judgments.",
        why: "In certain matters, acting in time matters as much as winning the case.",
        result: "Assets protected, rights preserved and obligations that are actually fulfilled.",
        image: "precautionary",
        imageAlt: "Brass scales of justice on a navy blue desk",
      },
      {
        id: "conflictos-patrimoniales-y-soluciones-alternativas",
        n: "05",
        title: "Property Disputes and Alternative Solutions",
        what: "Negotiation, mediation and conciliation; judicial and out-of-court agreements; acknowledgment and settlement of obligations.",
        why: "Not every dispute has to become a prolonged lawsuit.",
        result: "The most convenient path: agreement when it is viable, litigation when it is necessary.",
        image: "negotiation",
        imageAlt: "Handshake in a law office",
      },
    ],
  },

  difference: {
    eyebrow: "Why Quijano Herrera",
    title: "We don't just interpret the law. We design the strategy.",
    reactiveLabel: "Reactive approach",
    ourLabel: "Our approach",
    rows: [
      ["Action is taken once the problem has escalated.", "Risks and scenarios are analyzed before choosing a path."],
      ["The rule is interpreted.", "A procedural strategy is built from day one."],
      ["Everything ends in litigation.", "We weigh whether to negotiate, conciliate, formalize an agreement or litigate."],
      ["The work ends with the judgment.", "The strategy includes the proper enforcement of the outcome."],
    ],
    closing:
      "When a viable solution exists, we work to build it. When litigation is necessary, we are ready to do it.",
  },

  process: {
    eyebrow: "Process",
    title: "From the first conversation to enforcement of the outcome.",
    lede: "A clear path, so you always know where your matter stands and what comes next.",
    steps: [
      {
        n: "01",
        title: "First contact",
        text: "Tell us your situation by WhatsApp, phone or the form. We identify the type of matter and which documents we need to review.",
      },
      {
        n: "02",
        title: "Comprehensive analysis",
        text: "We study the whole case: documents, risks, opportunities and possible scenarios.",
      },
      {
        n: "03",
        title: "Defined strategy",
        text: "We explain the recommended path (negotiate, conciliate, formalize an agreement or litigate) and what to expect from each.",
      },
      {
        n: "04",
        title: "Execution",
        text: "We act before the competent judicial and administrative authorities, with follow-up and clear communication.",
      },
      {
        n: "05",
        title: "Compliance",
        text: "We work to see that the ruling or agreement is carried out: enforcement of judgments, filings and registrations.",
      },
    ],
  },

  scenarios: {
    eyebrow: "Common situations",
    title: "The matters people come to us with.",
    lede: "Examples of civil situations and the path we typically analyze for each.",
    cols: { situation: "Situation", path: "Path we evaluate", protects: "What is protected" },
    items: [
      {
        situation: "A contract was breached and the other party isn't responding.",
        path: "Review of the instrument, formal demand and, where appropriate, a breach-of-contract lawsuit.",
        protects: "Performance of the obligation and your investment.",
      },
      {
        situation: "There is a documented debt that isn't being paid.",
        path: "Civil executory proceedings, with attachment of assets where available.",
        protects: "The claim and the real possibility of collecting it.",
      },
      {
        situation: "A property is occupied without any right.",
        path: "Recovery of possession or eviction proceedings, depending on the case.",
        protects: "Your property and its availability.",
      },
      {
        situation: "You hold a property but the deed isn't in your name.",
        path: "Regularization, deed formalization or usucapion.",
        protects: "Legal certainty over your assets.",
      },
      {
        situation: "You fear the debtor's assets will disappear before judgment.",
        path: "Precautionary measures, attachments and preventive annotations.",
        protects: "The ability to enforce the judgment.",
      },
      {
        situation: "You have a property dispute and would rather avoid a long lawsuit.",
        path: "Negotiation, mediation or a judicial settlement.",
        protects: "Time, relationships and cost.",
      },
    ],
    disclaimer:
      "Illustrative examples of civil matters. Each case is assessed individually; the outcome of a legal matter cannot be guaranteed.",
    imageAlt: "Hands signing a document with a fountain pen",
  },

  about: {
    eyebrow: "The firm",
    title: "A civil law firm with 15 years of practice in Tijuana.",
    paragraphs: [
      "From Tijuana, Baja California, we handle civil matters with experience in litigation, negotiation, precautionary measures, settlement agreements and proceedings before judicial and administrative authorities.",
      "We combine procedural experience, legal analysis, document preparation and personal attention to build clear strategies and carry them out rigorously.",
    ],
    foundersLabel: "Founding partners",
    founders: [
      { name: "José Manuel Herrera Islas", role: "Founding partner", initials: "JH" },
      { name: "Luis Quijano del Mar", role: "Founding partner", initials: "LQ" },
    ],
    methodLabel: "Method",
    method: ["Procedural experience", "Legal analysis", "Document preparation", "Personal attention"],
    cta: "Talk to the firm",
    imageAlt: "Facade of the Quijano Herrera Abogados office with the embossed logo",
  },

  testimonials: {
    eyebrow: "Clients",
    title: "What clients who trusted us say.",
    items: [],
  },

  faq: {
    eyebrow: "FAQ",
    title: "What's worth knowing before you take the first step.",
    items: [
      {
        q: "How does the first consultation work?",
        a: "We start by listening to your situation and reviewing the documents available: contracts, promissory notes, deeds, notices or messages. We then explain which paths exist, the risks of each and which we recommend. You can begin by WhatsApp, by phone or with the form on this page.",
      },
      {
        q: "Which documents should I gather?",
        a: "Anything that supports your case: contracts and agreements, promissory notes or credit instruments, deeds or title documents, proof of payment, correspondence and messages, and any court notice you have received. If you don't have everything, don't wait: we review what you have.",
      },
      {
        q: "Does it always have to go to court?",
        a: "No. We analyze each situation to determine whether it is best to negotiate, conciliate, formalize an agreement or bring a lawsuit. When a viable solution exists, we work to build it; when litigation is necessary, we are ready.",
      },
      {
        q: "How long does a civil matter take?",
        a: "It depends on the nature of the matter, the path chosen and the workload of the authorities. That is why we don't promise timelines: after analyzing your case we explain realistic scenarios and what to expect at each stage.",
      },
      {
        q: "Can assets be protected before the case ends?",
        a: "In certain cases, yes. Precautionary measures, attachments and preventive annotations can help preserve rights and secure performance of an obligation. Whether they apply depends on each matter and requires acting in time, so it is best to consult as soon as possible.",
      },
      {
        q: "Do you serve individuals and businesses?",
        a: "Yes. We handle civil matters from personal life (property, assets, contracts and obligations) and from business life (debt collection, breaches and disputes with other private parties).",
      },
      {
        q: "How are fees determined?",
        a: "They depend on the nature and complexity of the matter. After analyzing your case, we explain the scope of the service and the fees before we begin.",
      },
      {
        q: "Is my information confidential?",
        a: "Yes. What you share is handled with professional confidentiality and used only to assess and handle your matter, in accordance with our Privacy Notice.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Tell us your case. Let's define the strategy.",
    lede: "Write to us on WhatsApp, call us or leave your details. We'll get back to you to understand your situation and propose the next step.",
    whatsapp: {
      label: "Message on WhatsApp",
      hint: "The fastest way to start",
      message: "Hello, I would like to book a consultation about a civil matter.",
    },
    labels: { phone: "Phone", email: "Email", address: "Office", hours: "Hours" },
    hours: "Monday to Friday, 9:00 AM to 6:00 PM · Saturday, 9:00 AM to 1:00 PM",
    form: {
      title: "Or leave your details",
      name: "Name",
      phone: "Phone or WhatsApp",
      topic: "What do you need to resolve?",
      topicDefault: "Select an option",
      topics: [
        "Civil litigation",
        "Contracts and obligations",
        "Property, possession and real rights",
        "Precautionary measures and enforcement",
        "Property disputes and alternative solutions",
        "I'm not sure",
      ],
      message: "Briefly tell us your situation",
      consentPrefix: "I accept the",
      consentLink: "Privacy Notice",
      consentSuffix: "and to be contacted to follow up on my request.",
      submit: "Send via WhatsApp",
      emailInstead: "Or send by email",
      note: "WhatsApp will open with your message ready to send. We don't store your data on this site.",
      sent: "WhatsApp opened with your message. If it didn't, write to us directly at the number above.",
      errors: {
        name: "Please enter your name.",
        phone: "Please enter a valid phone number, at least 10 digits.",
        topic: "Please select the type of matter.",
        message: "Please briefly tell us your situation.",
        consent: "To continue, please accept the Privacy Notice.",
      },
      whatsappGreeting: "Hello, I'm",
      whatsappTopic: "I'd like to consult about",
      whatsappPhone: "My phone",
      emailSubject: "Civil law inquiry",
    },
  },

  footer: {
    tagline: "Legal strategy. Asset protection. Results.",
    navTitle: "Navigation",
    areasTitle: "Civil law",
    contactTitle: "Contact",
    legal: "Privacy Notice (Spanish)",
    disclaimer:
      "The information on this site is for general information only and is not legal advice, nor does it guarantee results. Each matter is assessed individually.",
    rights: "All rights reserved.",
    top: "Back to top",
    openMap: "Open the address in Google Maps",
    poweredBy: "Powered by",
  },

  civil: {
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Civil law",
    eyebrow: "Civil law · Tijuana, Mexico",
    title: "Civil law in Tijuana",
    standfirst: "Legal strategy to protect what matters.",
    intro: [
      "At **Quijano Herrera Abogados** we provide counsel, strategy and legal representation in civil matters, with a focus on **protecting assets, preventing risks and resolving disputes with precision and timing**.",
      "Civil law governs an essential part of personal and business life: contracts, obligations, property, assets and relationships between private parties. That is why every matter takes much more than an interpretation of the law: it takes **analysis, foresight and a well-executed legal strategy**.",
      "From Tijuana, Baja California, we handle civil matters under Mexican law with experience in **litigation, negotiation, precautionary measures, settlement agreements and proceedings before judicial and administrative authorities**.",
    ],
    indexLabel: "On this page",
    areaCta: "Ask about this topic",
    bulletsLabel: "We handle",
    areas: [
      {
        id: "litigio-civil",
        n: "01",
        title: "Civil Litigation",
        intro:
          "We represent clients in disputes that call for a structured, rigorous and results-oriented legal defense.",
        bullets: [
          "Breach of contracts and obligations",
          "Civil liability",
          "Civil executory proceedings",
          "Disputes over debts and payment obligations",
          "Property disputes between private parties",
          "Enforcement of rulings and judgments",
        ],
        closing:
          "We build each case on the available evidence, legal analysis and a procedural strategy defined from the start.",
        image: "litigation",
        imageAlt: "Lawyer reviewing a case file with a statuette of Lady Justice in the foreground",
      },
      {
        id: "contratos-y-obligaciones",
        n: "02",
        title: "Contracts and Obligations",
        intro:
          "A well-structured contract does more than record an agreement: **it protects interests, defines responsibilities and reduces future risk**.",
        bullets: [
          "Drafting and negotiation of civil contracts",
          "Legal review of existing contracts",
          "Identifying risks, breaches and possible contingencies",
          "Analysis of nullity, defects and contract conditions",
          "Agreements to perform, acknowledge and settle obligations",
        ],
        closing:
          "Our goal is for every legal instrument to be clear, enforceable and designed to protect our clients' interests.",
        image: "contracts",
        imageAlt: "Two people signing a contract over a folder of documents",
      },
      {
        id: "propiedad-posesion-y-derechos-reales",
        n: "03",
        title: "Property, Possession and Real Rights",
        intro:
          "Disputes involving real estate and assets require particular precision. We handle proceedings concerning possession, title and the legal protection of property.",
        bullets: [
          "Recovery and defense of possession",
          "Eviction proceedings",
          "Action for recovery of ownership",
          "Usucapion (adverse possession)",
          "Regularization of property",
          "Deed formalization and rights over real estate",
        ],
        closing:
          "We work to provide **legal certainty over your assets and a clear strategy against any dispute**.",
        image: "property",
        imageAlt: "Legal documents and a magnifying glass on a desk beside a statuette of Lady Justice",
      },
      {
        id: "medidas-cautelares-y-ejecucion",
        n: "04",
        title: "Precautionary Measures and Enforcement",
        intro:
          "In certain matters, acting in time can matter as much as winning a case. We design and drive strategies to **protect assets, preserve rights and secure performance of obligations**.",
        bullets: [
          "Attachments",
          "Registrations and preventive annotations",
          "Precautionary measures",
          "Filings before the Public Registry",
          "Enforcement of judgments and rulings",
        ],
        closing: "Legal strategy does not end with a ruling: it also covers its proper enforcement.",
        image: "precautionary",
        imageAlt: "Brass scales of justice on a navy blue desk",
      },
      {
        id: "conflictos-patrimoniales-y-soluciones-alternativas",
        n: "05",
        title: "Property Disputes and Alternative Solutions",
        intro:
          "Not every dispute has to become a prolonged lawsuit. We analyze each situation to determine whether the best strategy is to **negotiate, conciliate, formalize an agreement or bring a lawsuit**.",
        bullets: [
          "Negotiation and dispute resolution",
          "Mediation and conciliation",
          "Economic and property disputes",
          "Judicial and out-of-court agreements",
          "Acknowledgment and settlement of obligations",
        ],
        closing:
          "When a viable solution exists, we work to build it. When litigation is necessary, we are ready to do it.",
        image: "negotiation",
        imageAlt: "Handshake in a law office",
      },
    ],
    approach: {
      eyebrow: "Our approach",
      title: "Precision. Strategy. Execution.",
      paragraphs: [
        "At **Quijano Herrera Abogados** we understand that a legal matter doesn't begin when it reaches court. It begins long before: **with a decision, a contract, an obligation, a risk or a dispute that has to be handled correctly**.",
        "That is why our work starts with a comprehensive analysis of the case, identifying risks, opportunities and possible scenarios before choosing the path forward.",
        "We combine **procedural experience, legal analysis, document preparation and personal attention** to build clear strategies and carry them out rigorously.",
      ],
      closing:
        "Because a good legal strategy is not just about reacting to a problem. **It is about anticipating it, protecting our clients' interests and acting with precision when it matters most.**",
      signature: "Legal strategy. Asset protection. Results.",
    },
    cta: {
      title: "Have a civil matter to handle?",
      text: "Tell us your situation and we'll explain which paths exist and which we recommend.",
      button: "Book a consultation",
    },
  },

  // The privacy notice is a Spanish-language legal document; the English
  // switch on that page simply points to the English home page.
  privacy: es.privacy,

  notFound: {
    title: "This page doesn't exist",
    text: "The link may have changed. Go back home or tell us what you need.",
    home: "Go to home page",
    contact: "Contact the firm",
  },
};
