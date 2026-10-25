import { useTranslations } from "next-intl";

export function Ticker() {
  const t = useTranslations("common");
  const items = t.raw("ticker") as string[];

  return (
    <div className="ticker" aria-hidden="true">
      <div>{items.map((item, i) => <span key={`${item}${i}`}>{item}<i>✳</i></span>)}</div>
    </div>
  );
}
