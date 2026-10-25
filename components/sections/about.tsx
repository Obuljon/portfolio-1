import { useTranslations } from "next-intl";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "./section-title";

type TimelineEntry = { title: string; organization: string; description: string };

export function About() {
  const t = useTranslations("about");
  const common = useTranslations("common");
  const education = t.raw("educationItems") as TimelineEntry[];
  const experience = t.raw("experienceItems") as TimelineEntry[];
  const stack = common.raw("codeStack") as string[];

  return (
    <section className="content-section about-section" id="about">
      <SectionTitle eyebrow={common("sections.profile")} title={t("about")} />
      <div className="about-grid">
        <Reveal>
          <p className="lead">{t("bio")}</p>
          <div className="code-card">
            <div className="code-head"><span /><span /><span /><small>{common("codeFile")}</small></div>
            <pre><b>const</b> dev = &#123; name: <em>&quot;{common("codeName")}&quot;</em>, role: <em>&quot;{common("codeRole")}&quot;</em>,<br /> stack: [{stack.map((item, i) => <span key={item}><em>&quot;{item}&quot;</em>{i < stack.length - 1 ? ", " : ""}</span>) }], location: <em>&quot;{common("codeLocation")}&quot;</em>,<br /> focus: <em>&quot;{common("codeFocus")}&quot;</em> &#125;;</pre>
          </div>
        </Reveal>
        <div className="timeline-column">
          <Reveal as="header"><h3>{t("educationHeading")}</h3></Reveal>
          {education.map((row, i) => (
            <Reveal key={row.title} as="article" className="timeline-row" delay={i * 0.06}>
              <div><h4>{row.title}</h4><span>{row.organization}</span></div>
              <p>{row.description}</p>
            </Reveal>
          ))}
          <Reveal as="header" className="experience-title"><h3>{t("experienceHeading")}</h3></Reveal>
          {experience.map((row, i) => (
            <Reveal key={row.title} as="article" className="timeline-row" delay={i * 0.06}>
              <div><h4>{row.title}</h4><span>{row.organization}</span></div>
              <p>{row.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
