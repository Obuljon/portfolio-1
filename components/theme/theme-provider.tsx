"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

export type Theme = "light" | "dark" | "system";

const ThemeContext = createContext<Theme>("system");
let currentTheme: Theme | undefined;
const listeners = new Set<() => void>();

function readTheme(): Theme {
  if (typeof window === "undefined") return "system";
  if (currentTheme) return currentTheme;
  const saved = window.localStorage.getItem("portfolio-theme");
  currentTheme = saved === "light" || saved === "dark" || saved === "system" ? saved : "system";
  return currentTheme;
}

function resolvedTheme(theme: Theme) {
  return theme === "system"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    : theme;
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = resolvedTheme(theme);
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const handleSystemChange = () => {
    if (readTheme() === "system") applyTheme("system");
  };
  media.addEventListener("change", handleSystemChange);
  applyTheme(readTheme());
  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", handleSystemChange);
  };
}

function getServerSnapshot(): Theme {
  return "system";
}

function setTheme(theme: Theme) {
  currentTheme = theme;
  window.localStorage.setItem("portfolio-theme", theme);
  applyTheme(theme);
  listeners.forEach((listener) => listener());
}

export function ThemeProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const theme = useSyncExternalStore(subscribe, readTheme, getServerSnapshot);
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const theme = useContext(ThemeContext);
  return { theme, setTheme };
}
