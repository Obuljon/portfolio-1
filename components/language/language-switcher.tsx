"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export function LanguageSwitcher({ onLocaleChange }: Readonly<{ onLocaleChange?: () => void }>) {
  const locale = useLocale();
  const t = useTranslations("language");
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="language" role="group" aria-label={t("ariaLanguage")}>
      {routing.locales.map((nextLocale: Locale) => (
        <button
          key={nextLocale}
          className={locale === nextLocale ? "active" : ""}
          onClick={() => {
            router.replace(`${pathname}${window.location.hash}`, { locale: nextLocale, scroll: false });
            onLocaleChange?.();
          }}
          aria-pressed={locale === nextLocale}
          lang={nextLocale}
        >
          {nextLocale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
