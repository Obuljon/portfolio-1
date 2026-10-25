import { useTranslations } from "next-intl";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "./section-title";

export function Skills() {
  const t = useTranslations("skills");
  const common = useTranslations("common");
  const items = t.raw("items") as string[][];
  const groups = t.raw("groups") as string[];

  return (
    <section className="content-section" id="skills">
      <SectionTitle eyebrow={common("sections.toolkit")} title={t("skills")} />
      <div className="skills-grid">
        {items.map((group, i) => (
          <Reveal key={group[0]} as="article" className="skill-card" delay={i * 0.04}>
            <h3><span>{String(i + 1).padStart(2, "0")}</span>{groups[i]}</h3>
            <div className="tag-list">{group.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
