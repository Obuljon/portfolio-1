"use client";

type InlineScriptProps = Readonly<{ html: string }>;

export function InlineScript({ html }: InlineScriptProps) {
  return (
    <script
      id="portfolio-theme-bootstrap"
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
