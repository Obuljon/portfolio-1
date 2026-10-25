import { ArrowUpRight, CodeXml, Link as LinkIcon, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/animations/reveal";
import { ContactForm } from "./contact-form";
import { SectionTitle } from "./section-title";

export function Contact() {
  const t = useTranslations("contact");
  const common = useTranslations("common");

  return (
    <section className="contact-section" id="contact">
      <Reveal as="header" className="contact-heading">
        <SectionTitle eyebrow={common("sections.hello")} title={t("together")} />
        <p><span className="status-dot" />{t("available")}</p>
      </Reveal>
      <div className="contact-grid">
        <Reveal className="contact-links">
          <a className="contact-card" href="mailto:rahimovabul2@gmail.com">
            <Mail size={17} aria-hidden="true" /><small>{common("emailLabel")}</small>
            <b>rahimovabul2@gmail.com</b><ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a className="contact-card" href="https://linkedin.com/in/obul-rakhim-3b293a26b" target="_blank" rel="noreferrer">
            <LinkIcon size={17} aria-hidden="true" /><small>{common("linkedinLabel")}</small>
            <b>obul-rakhim-3b293a26b</b><ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <a className="contact-card" href="https://github.com/Obuljon" target="_blank" rel="noreferrer">
            <CodeXml size={17} aria-hidden="true" /><small>{common("githubLabel")}</small>
            <b>Obuljon</b><ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <div className="contact-card location-card">
            <span className="status-dot" /><small>{common("locationLabel")}</small><b>{t("location")}</b>
          </div>
        </Reveal>
        <Reveal delay={0.08}><ContactForm /></Reveal>
      </div>
    </section>
  );
}
