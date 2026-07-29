import { ui, defaultLang, type Locale, type UIKey } from "./ui";

export const locales: Locale[] = ["en", "kn"];

/**
 * Locale is derived from the URL rather than passed down as a prop.
 *
 * Components like Hero and PressStrip sit several levels deep, and threading a
 * `locale` prop through every one of them would touch far more code than it
 * earns. The URL is already the single source of truth for language (there is
 * no cookie and no auto-detection), so reading it directly is both simpler and
 * impossible to get out of sync.
 */
export function getLocale(url: URL): Locale {
  const seg = url.pathname.split("/")[1];
  return locales.includes(seg as Locale) && seg !== defaultLang
    ? (seg as Locale)
    : defaultLang;
}

/**
 * Falls back to English when a key is missing from a translation rather than
 * rendering a raw key or an empty element, and warns at build time so the gap
 * is visible in CI output instead of only on the live page.
 */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    const value = ui[locale][key] ?? ui[defaultLang][key];
    if (import.meta.env.DEV && ui[locale][key] === undefined) {
      console.warn(`[i18n] missing "${key}" for locale "${locale}"`);
    }
    return value;
  };
}

/** Prefix an internal path for the given locale. English stays unprefixed. */
export function localizePath(path: string, locale: Locale): string {
  if (locale === defaultLang) return path;
  return path === "/" ? `/${locale}/` : `/${locale}${path}`;
}

/** Strip any locale prefix, yielding the canonical English path. */
export function stripLocale(pathname: string): string {
  const seg = pathname.split("/")[1];
  if (locales.includes(seg as Locale) && seg !== defaultLang) {
    const rest = pathname.slice(seg.length + 1);
    return rest === "" ? "/" : rest;
  }
  return pathname;
}

/**
 * The counterpart URL for the page currently being rendered — what the
 * language switcher links to, and what hreflang advertises.
 *
 * Built from the current path so switching language keeps you on the same
 * page. Dropping the user on the homepage is the classic bilingual-site bug.
 */
export function alternatePath(pathname: string, target: Locale): string {
  return localizePath(stripLocale(pathname), target);
}

/** Both locales' URLs for the current page, for hreflang alternates. */
export function alternates(pathname: string) {
  return locales.map((locale) => ({
    locale,
    path: alternatePath(pathname, locale),
  }));
}

/**
 * Pick the Kannada variant of a collection field when present, else English.
 *
 * Collection content is authored once in English; Kannada lives in optional
 * sibling fields (headline / headlineKn). An empty Kannada field must fall
 * back silently — a half-translated entry should look English, never broken.
 */
export function pickKn<T extends Record<string, any>>(
  data: T,
  field: string,
  locale: Locale,
): string {
  if (locale === defaultLang) return data[field];
  return data[`${field}Kn`] || data[field];
}
