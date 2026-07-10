import { locales, localeLabels, t } from './translations.js';

export { locales, localeLabels, t };

export function useTranslations(locale) {
  const l = locales.includes(locale) ? locale : 'en';
  return {
    t: (key, replacements = {}) => t(l, key, replacements),
    locale: l,
    isDefault: l === 'en'
  };
}

export function getLocaleFromUrl(url) {
  const segments = url.pathname.split('/').filter(Boolean);
  const first = segments[0] || '';
  return locales.includes(first) ? first : 'en';
}

