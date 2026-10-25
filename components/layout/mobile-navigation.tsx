"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

const navTargets = ["home", "about", "skills", "projects", "contact"] as const;

export function MobileNavigation() {
  const t = useTranslations("navigation");
  const common = useTranslations("common");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <nav id="primary-navigation" className={open ? "mobile-nav open" : "mobile-nav"} aria-label={t("label")}>
        {navTargets.map((target) => (
          <a key={target} href={`#${target}`} onClick={() => setOpen(false)}>
            {t(`items.${target}`)}
          </a>
        ))}
      </nav>
      <button
        className="menu-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? common("close") : t("menu")}
        type="button"
      >
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>
    </>
  );
}
