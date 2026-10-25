type SectionTitleProps = Readonly<{
  eyebrow: string;
  title: string;
}>;

export function SectionTitle({ eyebrow, title }: SectionTitleProps) {
  return (
    <div className="section-title">
      <span className="mono">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}
