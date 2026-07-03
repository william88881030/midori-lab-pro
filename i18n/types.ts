export type Locale = "en" | "zh" | "ja";

export type NavKey =
  | "home"
  | "about"
  | "products"
  | "technology"
  | "supply"
  | "contact";

export interface WhyCardTranslation {
  title: string;
  description: string;
}

export interface ProductTranslation {
  title: string;
  description: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    logo: string;
    ariaLabel: string;
    items: Record<NavKey, string>;
  };
  hero: {
    ariaLabel: string;
    title: string;
    subtitle: string;
    tagline: string;
    explore: string;
    scroll: string;
  };
  about: {
    label: string;
    headingLine1: string;
    headingLine2: string;
    body1: string;
    body2: string;
    cta: string;
    imageAlt: string;
  };
  why: {
    label: string;
    heading: string;
    cards: WhyCardTranslation[];
  };
  products: {
    label: string;
    heading: string;
    subtitle: string;
    viewDetails: string;
    items: ProductTranslation[];
  };
  technology: {
    label: string;
    heading: string;
    subtitle: string;
  };
  supply: {
    label: string;
    heading: string;
    subtitle: string;
  };
  contact: {
    label: string;
    heading: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    links: {
      about: string;
      products: string;
      contact: string;
      privacy: string;
    };
  };
}

export type TranslationMap = Record<Locale, Translations>;
