"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(t("emailSubject", { name: String(data.get("name")) }));
    const body = encodeURIComponent(
      `${String(data.get("message"))}\n\n${String(data.get("name"))} · ${String(data.get("email"))}`,
    );
    window.location.href = `mailto:rahimovabul2@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={submitContact}>
      <label>{t("name")}<input name="name" autoComplete="name" required /></label>
      <label>{t("email")}<input name="email" type="email" autoComplete="email" required /></label>
      <label>{t("message")}<textarea name="message" rows={4} required /></label>
      <button className="button primary" type="submit">{t("send")}<ArrowUpRight size={15} /></button>
      {sent && <span className="form-note" role="status">{t("sent")}</span>}
    </form>
  );
}
