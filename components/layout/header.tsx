import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/language/language-switcher";
import { MobileNavigation } from "./mobile-navigation";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Header() {
  const t = useTranslations("common");
  const nav = useTranslations("navigation");

  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label={t("brandAria")}>
        {t("brand")}
        <span>_</span>
      </a>
      <div className="tools">
        <LanguageSwitcher />
        <ThemeToggle />
        <MobileNavigation />
      </div>
      <nav className="desktop-nav" aria-label={nav("label")}>
        {(["home", "about", "skills", "projects", "contact"] as const).map((target) => (
          <a key={target} href={`#${target}`}>{nav(`items.${target}`)}</a>
        ))}
      </nav>
    </header>
  );
}
