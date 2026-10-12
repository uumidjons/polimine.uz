import { uz, type Dictionary } from './uz';
import { ru } from './ru';

export type Locale = 'uz' | 'ru';
export type { Dictionary };

export const LOCALES: Locale[] = ['uz', 'ru'];

const dictionaries: Record<Locale, Dictionary> = { uz, ru };

const localePaths: Record<Locale, string> = { uz: '/', ru: '/ru/' };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

// GitHub Pages'da sayt /repo-nomi/ ostida turishi mumkin, shuning uchun
// ichki havolalar har doim base bilan boshlanadi.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  return `${base}${path}`;
}

export function localePath(locale: Locale): string {
  return withBase(localePaths[locale]);
}
