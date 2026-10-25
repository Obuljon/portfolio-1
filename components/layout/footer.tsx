import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const contact = useTranslations("contact");
  const common = useTranslations("common");

  return (
    <footer className="footer">
      <span>{t("footer")}</span>
      <span>{contact("location")}</span>
      <a href="#home">{common("backToTop")} ↑</a>
    </footer>
  );
}
