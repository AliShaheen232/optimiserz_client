import React from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { steps } from "../../config/content";

export const Process: React.FC = () => (
  <section id="process" className="py-16 sm:py-20">
    <Container>
      <SectionHeading align="center" eyebrow="How it works" title={<>Four steps. <span className="text-gradient">No surprises.</span></>} />

      <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <span className="absolute left-0 right-0 top-[2.9rem] hidden h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent lg:block" />
        {steps.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className="card relative p-6">
            <div className="flex items-center justify-between">
              <span className="icon-chip">
                <Icon className="h-5 w-5" />
              </span>
              <span className="label text-ink-mute">Step 0{i + 1}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-ink-soft">{text}</p>
          </li>
        ))}
      </ol>
    </Container>
  </section>
);
