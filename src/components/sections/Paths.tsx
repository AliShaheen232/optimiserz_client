import React from "react";
import { ArrowRight, Check, Lightbulb, Gauge } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { paths } from "../../config/content";
import type { Intent } from "../../types";

const cards = [
  { key: "validate" as Intent, icon: Lightbulb, data: paths.validate },
  { key: "optimise" as Intent, icon: Gauge, data: paths.optimise },
];

export const Paths: React.FC<{ onChoose: (intent: Intent) => void }> = ({ onChoose }) => (
  <section id="paths" className="border-y border-line bg-alt py-16 sm:py-20">
    <Container>
      <SectionHeading align="center" eyebrow="Two ways we help" title="Where are you right now?" />

      <div className="grid gap-5 md:grid-cols-2">
        {cards.map(({ key, icon: Icon, data }, i) => (
          <article key={key} className="card flex flex-col p-8">
            <span className={i === 0 ? "flex h-11 w-11 items-center justify-center rounded-xl bg-spark/20 text-[#B86E00]" : "icon-chip"}>
              <Icon className="h-5 w-5" />
            </span>
            <p className="label mt-6 text-violet-600">{data.eyebrow}</p>
            <h3 className="mt-2 text-2xl font-semibold">{data.title}</h3>
            <ul className="mt-5 flex-1 space-y-3">
              {data.points.map((p) => (
                <li key={p} className="flex gap-3 text-ink-soft">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />
                  {p}
                </li>
              ))}
            </ul>
            <button onClick={() => onChoose(key)} className={`${i === 0 ? "btn-primary" : "btn-ghost"} mt-8 self-start`}>
              {data.cta} <ArrowRight className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
    </Container>
  </section>
);
