import React from "react";
import { Container } from "../ui/Container";
import { heroChips } from "../../config/content";

export const Hero: React.FC = () => (
  <section id="top" className="pb-14 pt-16 text-center sm:pb-20 sm:pt-20">
    <Container>
      <p className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-1.5 text-xs font-semibold text-violet-600">
        <span className="h-1.5 w-1.5 rounded-full bg-spark" />
        For founders & growing businesses
      </p>

      <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.6rem]">
        Prove your idea. <span className="text-gradient">Grow your business.</span>
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
        We help you test ideas without overspending, and build smart software that saves your team time.
      </p>

      <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-semibold text-ink sm:gap-x-3">
        {heroChips.map((c, i) => (
          <li key={c} className="flex items-center gap-3">
            {i > 0 && <span className="hidden text-ink-mute sm:inline">·</span>}
            {c}
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
