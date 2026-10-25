import { ArrowUpRight, CodeXml } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/animations/reveal";
import { SectionTitle } from "./section-title";

type Project = { title: string; description: string };

export function Projects() {
  const t = useTranslations("projects");
  const common = useTranslations("common");
  const items = t.raw("items") as Project[];
  const tags = t.raw("tags") as string[][];

  return (
    <section className="content-section" id="projects">
      <SectionTitle eyebrow={common("sections.work")} title={t("projects")} />
      <div className="projects-grid">
        {items.map((project, i) => (
          <Reveal key={project.title} as="article" className="project-card" delay={(i % 2) * 0.07}>
            <div className="project-top"><span>{String(i + 1).padStart(2, "0")}</span><ArrowUpRight size={17} /></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-list">{tags[i].map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
          </Reveal>
        ))}
      </div>
      <a className="github-link" href="https://github.com/Obuljon" target="_blank" rel="noreferrer">
        <CodeXml size={17} />{t("more")}<ArrowUpRight size={15} />
      </a>
    </section>
  );
}
