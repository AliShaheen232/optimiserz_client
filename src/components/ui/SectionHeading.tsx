import React from "react";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "center" | "left";
}

export const SectionHeading: React.FC<Props> = ({ eyebrow, title, text, align = "left" }) => (
  <div className={`mb-10 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    <p className="label text-violet-600">{eyebrow}</p>
    <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
    {text && <p className="mt-3 text-base text-ink-soft">{text}</p>}
  </div>
);
