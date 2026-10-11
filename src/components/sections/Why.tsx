import React from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { reasons } from "../../config/content";

export const Why: React.FC = () => (
  <section id="why" className="border-y border-line bg-alt py-16 sm:py-20">
    <Container>
      <SectionHeading align="center" eyebrow="Why Optimiserz" title="Built for people who can't afford to guess" />

      <div className="grid gap-4 md:grid-cols-3">
        {reasons.map(({ icon: Icon, title, text }) => (
          <div key={title} className="card p-7 text-center">
            <span className="icon-chip mx-auto !rounded-full">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mx-auto mt-2 max-w-xs text-sm text-ink-soft">{text}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);
