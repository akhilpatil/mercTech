export const locales = ['en', 'es', 'de', 'sv'] as const;
export type Locale = (typeof locales)[number];
export type PageKey = 'home' | 'products' | 'about' | 'contact' | 'careers';

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  sv: 'Svenska',
};

export const pageSlugs: Record<Locale, Record<PageKey, string>> = {
  en: { home: '', products: 'products', about: 'about', contact: 'contact', careers: 'careers' },
  es: { home: '', products: 'productos', about: 'acerca-de', contact: 'contacto', careers: 'carreras' },
  de: { home: '', products: 'produkte', about: 'ueber-uns', contact: 'kontakt', careers: 'karriere' },
  sv: { home: '', products: 'produkter', about: 'om-oss', contact: 'kontakt', careers: 'karriar' },
};

// Draft translations for initial launch. Final customer-facing copy should be reviewed by fluent speakers.
export function getLocalePath(locale: Locale, page: PageKey = 'home') {
  const slug = pageSlugs[locale][page];
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  return `${prefix}${slug ? `/${slug}` : '/'}`.replace(/\/$/, '/') || '/';
}

export function getPageKeyFromSlug(locale: Locale, slug?: string): PageKey | undefined {
  const normalized = slug ?? '';
  const entries = Object.entries(pageSlugs[locale]) as [PageKey, string][];
  return entries.find(([, pageSlug]) => pageSlug === normalized)?.[0];
}

export const siteContent = {
  en: {
    nav: { home: 'Home', products: 'Products', about: 'About', contact: 'Contact', careers: 'Careers' },
    language: 'Language',
    footer: {
      tagline: 'Precision Gauge Manufacturing',
      since: 'Since 2003',
      contact: 'Contact',
      quickLinks: 'Quick Links',
      rights: 'All rights reserved.',
    },
    common: {
      requestQuote: 'Request Quote',
      viewProducts: 'View Products',
      browseProducts: 'Browse Products',
      getInTouch: 'Get in Touch',
      learnMore: 'Learn More About Us',
    },
    home: {
      title: 'Home',
      description: 'Merc Technologies - Precision Gauge Manufacturing for Critical Tolerances',
      heroTitle: 'Precision You Can Trust',
      heroText: 'ISO-certified gauge solutions engineered for automotive, aerospace, and manufacturing industries. Custom and standard gauges built to exacting specifications.',
      footnote: 'ISO 9001:2015 Certified · 20+ Years Experience · Micron-Level Precision · Custom Solutions',
      sections: {
        what: 'What We Do',
        products: 'Product Overview',
        industries: 'Industries We Serve',
        custom: 'Custom Gauge Solutions',
        why: 'Why Merc Technologies',
        cta: 'Ready to Improve Your Quality Process?',
      },
      services: [
        ['Standard Gauges', 'Complete line of plug, ring, snap, and thread gauges manufactured to NABL standards.'],
        ['Custom Gauge Design', 'Engineering services for special-purpose gauges designed to your exact specifications and tolerances.'],
        ['Calibration Services', 'NABL-traceable calibration and certification for all gauge types with fast turnaround.'],
      ],
      products: ['Plain Gauges', 'Thread Gauges', 'Carbide Gauges', 'Ring Gauges', 'Special Gauges'],
      industries: ['Automotive Manufacturing', 'Aerospace & Defense', 'Medical Device Manufacturing', 'Oil & Gas Equipment', 'Precision Machining', 'Tool & Die'],
      customText: "When standard gauges don't meet your requirements, our engineering team designs and manufactures custom solutions. From concept to delivery, we work with your specifications to ensure perfect fit and function.",
      customList: ['In-house engineering and design', 'Reverse engineering capabilities', 'Prototype development', 'Production runs of any quantity', 'Full documentation and certification'],
      why: [
        ['Precision Manufacturing', 'State-of-the-art CNC grinding and lapping equipment ensures micron-level accuracy on every gauge.'],
        ['Quality Assurance', 'ISO 9001:2015 certified processes with 100% inspection and full traceability documentation.'],
        ['Fast Turnaround', 'Standard gauges ship in 5-7 days. Custom gauges typically delivered in 3-4 weeks.'],
        ['Technical Support', 'Expert application engineers available to help select the right gauge for your needs.'],
        ['Material Options', 'Gauge steel, carbide, chrome plated, and specialized materials for demanding applications.'],
        ['Competitive Pricing', 'Direct manufacturer pricing with volume discounts available for production quantities.'],
      ],
      ctaText: "Contact our engineering team to discuss your gauge requirements. We'll help you select or design the perfect solution.",
      discuss: 'Discuss Your Project',
    },
    about: {
      title: 'About',
      description: 'Learn about Merc Technologies - precision gauge manufacturing excellence',
      h1: 'About Merc Technologies',
      lead: "Since 2003, we've been manufacturing precision gauges for demanding industries. Built on technical expertise and unwavering commitment to quality.",
      storyTitle: 'Our Story',
      story: [
        'Merc Technologies was founded in 2003 by a team of precision manufacturing veterans who recognized a critical gap in the gauge industry: the need for a manufacturer that could deliver both standard and highly customized gauges with the same level of precision and service.',
        'Our growth has been driven by word-of-mouth recommendations from satisfied customers who appreciate our technical expertise, quick turnaround, and unwavering attention to detail.',
      ],
      capabilityTitle: 'Facility & Capabilities',
      capabilities: [
        ['Standard and custom gauges', 'Plain plug, plain ring, snap, thread, carbide, and special gauges manufactured for customer component requirements.'],
        ['Catalog-backed product ranges', "Gauge types and ranges are aligned with the company's catalog wherever published ranges are available."],
        ['NABL-focused quality support', 'Calibration and certification language is aligned with NABL requirements for customer documentation.'],
      ],
      philosophyTitle: 'Our Philosophy',
      philosophy: [
        ['Precision First', 'Quality is never compromised. Every gauge is manufactured to exacting standards and inspected before it leaves our facility.'],
        ['Customer Partnership', 'We work as an extension of your quality team for challenging applications and optimal solutions.'],
        ['Continuous Improvement', 'We continuously refine our processes to deliver reliable products and practical support.'],
      ],
      visionTitle: 'Our Vision',
      visionText: "We're building Merc Technologies to be the gauge manufacturer that quality professionals turn to first, whether they need a simple plug gauge or a special solution for a unique application.",
      vision: [
        ['Technical Leadership', 'Continuing to push what is possible in gauge manufacturing through practical expertise and careful execution.'],
        ['Industry Support', 'Sharing our expertise through application guidance and one-on-one consultation for manufacturing teams.'],
        ['Sustainable Growth', 'Expanding our capabilities and capacity while maintaining the attention to detail and customer service that built our reputation.'],
      ],
      certTitle: 'Certifications & Standards',
      certs: ['ISO 9001:2015 quality management system', 'NABL calibration and certification support', 'Standard plug, ring, snap, and thread gauges', 'Special gauges manufactured for customer components'],
      ctaTitle: 'Work With Us',
      ctaText: 'Contact our team to discuss your gauge requirements or schedule a facility conversation.',
    },
    products: {
      title: 'Products',
      description: 'Complete line of precision gauges - standard and custom solutions for dimensional inspection',
      h1: 'Precision Gauge Products',
      lead: 'From standard plug gauges to highly specialized custom solutions, Merc Technologies manufactures precision gauges for dimensional inspection across industries.',
      groups: [
        ['Standard Plain Gauges', 'Our standard plain gauge line covers the most common dimensional inspection needs. Available in catalog-backed plain plug, plain ring, and snap gauge configurations.', [
          ['Plain Plug Gauges', ['Reversible: 1mm - 8mm', 'Taper Shank design: 2mm - 40mm', 'Trilock design: Above 40mm']],
          ['Plain Ring Gauges', ['Go and No Go Ring Gauges', 'Master Setting Rings', 'Range: 3mm - 150mm']],
          ['Snap Gauges', ['Single ended: 3mm - 50mm', 'Double ended: 3mm - 50mm', 'Width Gauge']],
        ]],
        ['Thread Gauges', 'Thread plug and thread ring gauges for production inspection requirements.', [
          ['Thread Plug Gauges', ['Precision ground thread gauges for internal thread inspection.']],
          ['Thread Ring Gauges', ['Metric, British and Unified', 'Range: 5mm - 100mm']],
        ]],
        ['Carbide Gauges', 'Carbide plug, ring, and snap gauges available in catalog-backed types and ranges.', [
          ['Carbide Plug Gauges', ['Reversible: 1mm - 8mm', 'Taper Lock Design: 8mm - 40mm']],
          ['Carbide Ring Gauges', ['Range: 3mm - 40mm']],
          ['Carbide Snap Gauges', ['Single ended: 3mm - 50mm', 'Double ended: 3mm - 50mm', 'Width Gauge']],
        ]],
        ['Special Purpose Gauges', 'Special gauges manufactured as per customer component requirements.', [
          ['Special Plug Gauges', []],
          ['Taper Gauges', []],
          ['Concentric Gauges', []],
          ['Deep bore checking Gauges', []],
          ['Thread depth gauge', []],
          ['Thread squareness checking gauge', []],
          ['Thread runout gauge', []],
          ['Concentricity gauge', []],
          ['Flush pin gauge', []],
        ]],
      ],
      ctaTitle: 'Need Help Selecting the Right Gauge?',
      ctaText: 'Our application engineers are available to help choose the optimal gauge solution for your specific requirements.',
    },
    contact: {
      title: 'Contact',
      description: 'Contact Merc Technologies for precision gauge quotes, technical support, and custom gauge inquiries',
      h1: 'Contact Merc Technologies',
      lead: 'Our team is ready to help with gauge selection, custom solutions, quotes, and technical support.',
      formTitle: 'Send Us Your Requirement',
      formText: 'Share your gauge requirements. For custom gauges, include drawings or specifications where available.',
      formLabels: {
        name: 'Name *',
        company: 'Company *',
        email: 'Email *',
        phone: 'Phone',
        requirement: 'Requirement Details *',
        drawing: 'Upload Drawing/Specification (PDF, DWG, DXF)',
      },
      methods: {
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        hours: 'Hours',
        hoursValue: 'Mon-Sat: 9:00 AM - 10:00 PM\nSunday: Closed',
      },
      expectTitle: 'What to Expect',
      expect: [
        ['Quick Response', "We review all inquiries within 4 business hours. For standard gauges, you'll receive a quote same-day. Custom gauges typically quoted within 48 hours."],
        ['Technical Review', 'Our application engineers review your requirements and may reach out with questions or suggestions to ensure the optimal gauge solution.'],
        ['Detailed Quote', "You'll receive a comprehensive quote including specifications, lead time, pricing, and any technical recommendations for your application."],
      ],
      faqTitle: 'Common Questions',
      faq: [
        ['What information do you need for a custom gauge quote?', 'For the most accurate quote, please provide: part drawing or specification, material requirements, tolerance class needed, quantity required, and any special inspection or certification requirements. The more detail you provide, the better we can serve you.'],
        ['What are your typical lead times?', 'Standard gauges from our catalog ship in 5-7 business days. Custom gauges typically take 3-4 weeks depending on complexity. Rush services available for critical needs.'],
        ['Do you provide calibration services?', 'Yes, we offer NABL-traceable calibration services for all gauge types, including gauges manufactured by other companies. Calibration certificates included with all services. Contact us for calibration-only inquiries.'],
        ['Can you help with gauge selection?', "Absolutely. Our application engineers are available to discuss your inspection needs and recommend the best gauge solution. We'll consider factors like tolerance requirements, production volume, part material, and your quality system requirements."],
        ['What file formats do you accept for drawings?', "We accept PDF, DWG, DXF, STEP, and IGES formats. If you have a different format, contact us and we'll work with you to get the information we need."],
      ],
      serviceTitle: 'We Serve Customers Across the United States and India',
      serviceText: 'Our facility is located in Bangalore, and we ship precision gauges to customers across the United States and India.',
      serviceFeatures: [
        ['United States', 'Fast, insured shipping across the United States with tracking'],
        ['India', 'Service support across India states'],
        ['Local Pickup', 'Pickup available at our facility by appointment'],
      ],
    },
    careers: {
      title: 'Careers',
      description: 'Careers at Merc Technologies - join a precision gauge manufacturing team',
      h1: 'Build Precision With Us',
      lead: 'Merc Technologies is growing a practical, detail-focused manufacturing team for precision gauges and customer engineering support.',
      areasTitle: 'Work Areas',
      areas: [
        ['Manufacturing', 'CNC grinding, lapping, inspection, finishing, and production support for precision gauges.'],
        ['Quality', 'Inspection, documentation, calibration support, and quality system discipline.'],
        ['Customer Engineering', 'Application support, custom gauge review, and technical coordination with customers.'],
      ],
      cultureTitle: 'What We Value',
      values: ['Careful workmanship', 'Clear communication', 'Dependable delivery', 'Practical problem solving'],
      ctaTitle: 'Interested in Working With Merc Technologies?',
      ctaText: 'Send a short introduction with your background and the kind of role you are looking for. Our team will respond when there is a relevant fit.',
      cta: 'Contact About Careers',
    },
  },
} as const;

const translations: Partial<Record<Exclude<Locale, 'en'>, Partial<typeof siteContent.en>>> = {
  es: {
    nav: { home: 'Inicio', products: 'Productos', about: 'Acerca de', contact: 'Contacto', careers: 'Carreras' },
    language: 'Idioma',
    footer: { ...siteContent.en.footer, quickLinks: 'Enlaces rápidos', contact: 'Contacto', rights: 'Todos los derechos reservados.' },
    common: { requestQuote: 'Solicitar cotización', viewProducts: 'Ver productos', browseProducts: 'Explorar productos', getInTouch: 'Contactar', learnMore: 'Conozca más' },
    home: { ...siteContent.en.home, title: 'Inicio', heroTitle: 'Precisión en la que puede confiar', sections: { ...siteContent.en.home.sections, what: 'Qué hacemos', products: 'Resumen de productos', industries: 'Industrias que atendemos', custom: 'Soluciones de calibres a medida', why: 'Por qué Merc Technologies', cta: '¿Listo para mejorar su proceso de calidad?' }, discuss: 'Hablemos de su proyecto' },
    about: { ...siteContent.en.about, title: 'Acerca de', h1: 'Acerca de Merc Technologies', storyTitle: 'Nuestra historia', capabilityTitle: 'Instalaciones y capacidades', philosophyTitle: 'Nuestra filosofía', certTitle: 'Certificaciones y normas', ctaTitle: 'Trabaje con nosotros' },
    products: { ...siteContent.en.products, title: 'Productos', h1: 'Productos de calibres de precisión', ctaTitle: '¿Necesita ayuda para seleccionar el calibre correcto?' },
    contact: { ...siteContent.en.contact, title: 'Contacto', h1: 'Contacte a Merc Technologies', lead: 'Nuestro equipo está listo para ayudar con selección de calibres, soluciones a medida, cotizaciones y soporte técnico.', formTitle: 'Envíenos su requerimiento', formText: 'Comparta sus requisitos de calibre. Para calibres personalizados, incluya dibujos o especificaciones cuando estén disponibles.', formLabels: { name: 'Nombre *', company: 'Empresa *', email: 'Correo electrónico *', phone: 'Teléfono', requirement: 'Detalles del requerimiento *', drawing: 'Subir dibujo/especificación (PDF, DWG, DXF)' }, expectTitle: 'Qué esperar', serviceTitle: 'Atendemos clientes en Estados Unidos e India', serviceText: 'Nuestra planta está ubicada en Bangalore y enviamos calibres de precisión a clientes en Estados Unidos e India.', methods: { ...siteContent.en.contact.methods, phone: 'Teléfono', address: 'Dirección', hours: 'Horario' } },
    careers: { ...siteContent.en.careers, title: 'Carreras', h1: 'Construya precisión con nosotros', areasTitle: 'Áreas de trabajo', cultureTitle: 'Lo que valoramos', ctaTitle: '¿Le interesa trabajar con Merc Technologies?', cta: 'Contactar sobre carreras' },
  },
  de: {
    nav: { home: 'Start', products: 'Produkte', about: 'Über uns', contact: 'Kontakt', careers: 'Karriere' },
    language: 'Sprache',
    footer: { ...siteContent.en.footer, quickLinks: 'Schnellzugriff', contact: 'Kontakt', rights: 'Alle Rechte vorbehalten.' },
    common: { requestQuote: 'Angebot anfragen', viewProducts: 'Produkte ansehen', browseProducts: 'Produkte durchsuchen', getInTouch: 'Kontakt aufnehmen', learnMore: 'Mehr erfahren' },
    home: { ...siteContent.en.home, title: 'Start', heroTitle: 'Präzision, der Sie vertrauen können', sections: { ...siteContent.en.home.sections, what: 'Was wir tun', products: 'Produktübersicht', industries: 'Branchen', custom: 'Spezielle Messlösungen', why: 'Warum Merc Technologies', cta: 'Bereit, Ihren Qualitätsprozess zu verbessern?' }, discuss: 'Projekt besprechen' },
    about: { ...siteContent.en.about, title: 'Über uns', h1: 'Über Merc Technologies', storyTitle: 'Unsere Geschichte', capabilityTitle: 'Fertigung und Fähigkeiten', philosophyTitle: 'Unsere Philosophie', certTitle: 'Zertifizierungen und Standards', ctaTitle: 'Arbeiten Sie mit uns' },
    products: { ...siteContent.en.products, title: 'Produkte', h1: 'Präzisionsmessmittel', ctaTitle: 'Benötigen Sie Hilfe bei der Auswahl?' },
    contact: { ...siteContent.en.contact, title: 'Kontakt', h1: 'Kontakt zu Merc Technologies', lead: 'Unser Team hilft bei Messmittelauswahl, Sonderlösungen, Angeboten und technischem Support.', formTitle: 'Senden Sie uns Ihre Anforderung', formText: 'Teilen Sie uns Ihre Messmittelanforderungen mit. Für Sondermessmittel fügen Sie nach Möglichkeit Zeichnungen oder Spezifikationen bei.', formLabels: { name: 'Name *', company: 'Unternehmen *', email: 'E-Mail *', phone: 'Telefon', requirement: 'Anforderungsdetails *', drawing: 'Zeichnung/Spezifikation hochladen (PDF, DWG, DXF)' }, expectTitle: 'Was Sie erwartet', serviceTitle: 'Wir bedienen Kunden in den USA und Indien', serviceText: 'Unsere Fertigung befindet sich in Bangalore, und wir liefern Präzisionsmessmittel an Kunden in den USA und Indien.', methods: { ...siteContent.en.contact.methods, phone: 'Telefon', address: 'Adresse', hours: 'Öffnungszeiten' } },
    careers: { ...siteContent.en.careers, title: 'Karriere', h1: 'Bauen Sie Präzision mit uns', areasTitle: 'Arbeitsbereiche', cultureTitle: 'Was uns wichtig ist', ctaTitle: 'Interessiert an Merc Technologies?', cta: 'Kontakt wegen Karriere' },
  },
  sv: {
    nav: { home: 'Hem', products: 'Produkter', about: 'Om oss', contact: 'Kontakt', careers: 'Karriär' },
    language: 'Språk',
    footer: { ...siteContent.en.footer, quickLinks: 'Snabblänkar', contact: 'Kontakt', rights: 'Alla rättigheter förbehållna.' },
    common: { requestQuote: 'Begär offert', viewProducts: 'Visa produkter', browseProducts: 'Bläddra bland produkter', getInTouch: 'Kontakta oss', learnMore: 'Läs mer' },
    home: { ...siteContent.en.home, title: 'Hem', heroTitle: 'Precision du kan lita på', sections: { ...siteContent.en.home.sections, what: 'Vad vi gör', products: 'Produktöversikt', industries: 'Branscher vi betjänar', custom: 'Anpassade mätlösningar', why: 'Varför Merc Technologies', cta: 'Redo att förbättra kvalitetsprocessen?' }, discuss: 'Diskutera ditt projekt' },
    about: { ...siteContent.en.about, title: 'Om oss', h1: 'Om Merc Technologies', storyTitle: 'Vår historia', capabilityTitle: 'Anläggning och kapacitet', philosophyTitle: 'Vår filosofi', certTitle: 'Certifieringar och standarder', ctaTitle: 'Arbeta med oss' },
    products: { ...siteContent.en.products, title: 'Produkter', h1: 'Precisionsmätprodukter', ctaTitle: 'Behöver du hjälp att välja rätt mätverktyg?' },
    contact: { ...siteContent.en.contact, title: 'Kontakt', h1: 'Kontakta Merc Technologies', lead: 'Vårt team hjälper till med val av mätverktyg, anpassade lösningar, offerter och teknisk support.', formTitle: 'Skicka ditt behov', formText: 'Dela dina krav på mätverktyg. För specialmätverktyg, bifoga ritningar eller specifikationer när de finns.', formLabels: { name: 'Namn *', company: 'Företag *', email: 'E-post *', phone: 'Telefon', requirement: 'Detaljer om behovet *', drawing: 'Ladda upp ritning/specifikation (PDF, DWG, DXF)' }, expectTitle: 'Vad du kan förvänta dig', serviceTitle: 'Vi betjänar kunder i USA och Indien', serviceText: 'Vår anläggning ligger i Bangalore och vi skickar precisionsmätverktyg till kunder i USA och Indien.', methods: { ...siteContent.en.contact.methods, phone: 'Telefon', address: 'Adress', hours: 'Öppettider' } },
    careers: { ...siteContent.en.careers, title: 'Karriär', h1: 'Bygg precision med oss', areasTitle: 'Arbetsområden', cultureTitle: 'Det vi värdesätter', ctaTitle: 'Intresserad av Merc Technologies?', cta: 'Kontakta oss om karriär' },
  },
};

export function getContent(locale: Locale) {
  return { ...siteContent.en, ...(translations[locale] ?? {}) };
}
