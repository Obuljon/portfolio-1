import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { locale as getRootLocale } from "next/root-params";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale: configuredLocale }) => {
  const locale = configuredLocale ?? await getRootLocale();
  if (!hasLocale(routing.locales, locale)) notFound();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
