import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/animations/reveal";

export function Hero() {
  const t = useTranslations("hero");
  const common = useTranslations("common");

  return (
    <section className="hero" id="home">
      <Reveal className="hero-copy">
        <p className="eyebrow"><span className="status-dot" />{t("heroTag")}</p>
        <h1>{t("hero")}</h1>
        <p className="hero-intro">{t("intro")}</p>
        <div className="actions">
          <a className="button primary" href="#projects">{t("view")}<ArrowDown size={15} /></a>
          <a className="button secondary" href="/rahimov-obiljon-resume.pdf" download="Rahimov-Obiljon-Resume.pdf">
            {t("downloadResume")}<Download size={15} aria-hidden="true" />
          </a>
          <a className="button secondary" href="#contact">{t("contactMe")}<ArrowUpRight size={15} /></a>
        </div>
      </Reveal>
      <Reveal className="portrait" delay={0.12} role="img" aria-label={common("portrait")}>
        <Image
          className="portrait-photo"
          src="/photo_2023-12-01_01-04-19.jpg"
          alt=""
          fill
          sizes="(max-width: 600px) 72vw, 390px"
          preload
        />
      </Reveal>
    </section>
  );
}
