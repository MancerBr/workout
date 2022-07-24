import { ELanguage, EShortLanguage } from '../enums';

export const languages: Array<{ shortText: EShortLanguage; text: ELanguage }> = [
  {
    shortText: EShortLanguage.en,
    text: ELanguage.english,
  },
  {
    shortText: EShortLanguage.ru,
    text: ELanguage.russian,
  },
  {
    shortText: EShortLanguage.ua,
    text: ELanguage.ukrainian,
  },
];
