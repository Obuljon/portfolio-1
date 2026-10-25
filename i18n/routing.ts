import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ru", "uz"],
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];

export function isLocale(locale: string): locale is Locale {
  return routing.locales.some((supportedLocale) => supportedLocale === locale);
}
