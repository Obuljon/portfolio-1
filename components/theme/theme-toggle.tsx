"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme, type Theme } from "./theme-provider";

const nextTheme: Record<Theme, Theme> = { light: "dark", dark: "system", system: "light" };

export function ThemeToggle() {
  const t = useTranslations("theme");
  const { theme, setTheme } = useTheme();
  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <button
      className="icon-button theme-toggle"
      onClick={() => setTheme(nextTheme[theme])}
      aria-label={t("toggle", { mode: t(theme) })}
      title={t(theme)}
    >
      <Icon size={18} aria-hidden="true" />
    </button>
  );
}
