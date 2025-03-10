import {
  arSA,
  cs,
  sk,
  da,
  de,
  el,
  enUS,
  enGB,
  es,
  fi,
  fr,
  faIR,
  he,
  hi,
  id,
  it,
  ja,
  ko,
  lt,
  mn,
  ms,
  nb,
  nl,
  pl,
  pt,
  ptBR,
  ro,
  ru,
  sl,
  sv,
  ta,
  tr,
  uk,
  zhCN,
  zhTW,
  ca,
  hu,
  vi,
} from 'date-fns/locale';

export const languages = {
  'ar-SA': { label: 'العربية', dateLocale: arSA, dir: 'rtl' },
  'zh-CN': { label: '中文', dateLocale: zhCN },
  'zh-TW': { label: '中文(繁體)', dateLocale: zhTW },
  'ca-ES': { label: 'Català', dateLocale: ca },
  'cs-CZ': { label: 'Čeština', dateLocale: cs },
  'da-DK': { label: 'Dansk', dateLocale: da },
  'de-DE': { label: 'Deutsch', dateLocale: de },
  'en-US': { label: 'English (US)', dateLocale: enUS },
  'en-GB': { label: 'English (UK)', dateLocale: enGB },
  'es-MX': { label: 'Español', dateLocale: es },
  'fa-IR': { label: 'فارسی', dateLocale: faIR, dir: 'rtl' },
  'fo-FO': { label: 'Føroyskt' },
  'fr-FR': { label: 'Français', dateLocale: fr },
  'el-GR': { label: 'Ελληνικά', dateLocale: el },
  'he-IL': { label: 'עברית', dateLocale: he },
  'hi-IN': { label: 'हिन्दी', dateLocale: hi },
  'hu-HU': { label: 'Hungarian', dateLocale: hu },
  'it-IT': { label: 'Italiano', dateLocale: it },
  'id-ID': { label: 'Bahasa Indonesia', dateLocale: id },
  'ja-JP': { label: '日本語', dateLocale: ja },
  'ko-KR': { label: '한국어', dateLocale: ko },
  'lt-LT': { label: 'Lietuvių', dateLocale: lt },
  'ms-MY': { label: 'Malay', dateLocale: ms },
  'mn-MN': { label: 'Монгол', dateLocale: mn },
  'nl-NL': { label: 'Nederlands', dateLocale: nl },
  'nb-NO': { label: 'Norsk Bokmål', dateLocale: nb },
  'pl-PL': { label: 'Polski', dateLocale: pl },
  'pt-PT': { label: 'Português', dateLocale: pt },
  'pt-BR': { label: 'Português do Brasil', dateLocale: ptBR },
  'ru-RU': { label: 'Русский', dateLocale: ru },
  'ro-RO': { label: 'Română', dateLocale: ro },
  'sk-SK': { label: 'Slovenčina', dateLocale: sk },
  'sl-SI': { label: 'Slovenščina', dateLocale: sl },
  'fi-FI': { label: 'Suomi', dateLocale: fi },
  'sv-SE': { label: 'Svenska', dateLocale: sv },
  'ta-IN': { label: 'தமிழ்', dateLocale: ta },
  'tr-TR': { label: 'Türkçe', dateLocale: tr },
  'uk-UA': { label: 'українська', dateLocale: uk },
  'ur-PK': { label: 'Urdu (Pakistan)', dateLocale: uk, dir: 'rtl' },
  'vi-VN': { label: 'Tiếng Việt', dateLocale: vi },
};

export function getDateLocale(locale) {
  return languages[locale]?.dateLocale || zhCN;
}

export function getTextDirection(locale) {
  return languages[locale]?.dir || 'ltr';
}
