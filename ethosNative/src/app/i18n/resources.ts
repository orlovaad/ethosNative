import ar from './ar.json';
import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import ru from './ru.json';
import zh from './zh.json';

export const resources = {
  ar: {
    translation: ar,
  },
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
  fr: {
    translation: fr,
  },
  ru: {
    translation: ru,
  },
  zh: {
    translation: zh,
  },
} as const;

export const defaultLanguage = 'en';
