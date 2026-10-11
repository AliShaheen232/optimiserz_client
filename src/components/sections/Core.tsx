import React from "react";
import { Code2, Database, Cpu, Network, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { coreLayers } from "../../config/content";

const icons: Record<(typeof coreLayers)[number]["key"], LucideIcon> = {
  product: Code2,
  data: Database,
  agentic: Cpu,
  web3: Network,
  delivery: Mail,
};

const spots = [
  { box: "left-[3%] top-[8%]", x: 17, y: 17 },
  { box: "right-[3%] top-[8%]", x: 83, y: 17 },
  { box: "left-[3%] top-[62%]", x: 17, y: 71 },
  { box: "right-[3%] top-[62%]", x: 83, y: 71 },
  { box: "left-1/2 top-[78%] -translate-x-1/2", x: 50, y: 86 },
];

const Node: React.FC<{ layer: (typeof coreLayers)[number]; className?: string }> = ({ layer, className = "" }) => {
  const Icon = icons[layer.key];
  return (
    <div className={`glass w-full p-4 lg:w-[320px] ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-sm font-semibold text-ink">
          <Icon className="h-4 w-4 text-violet-500" />
          {layer.title}
        </span>
        <span className="label whitespace-nowrap text-cyan-600">{layer.tag}</span>
      </div>
      <p className="mt-1.5 text-xs text-ink-soft">{layer.stack}</p>
    </div>
  );
};

export const Core: React.FC = () => (
  <section id="core" className="py-16 sm:py-20">
    <Container>
      <SectionHeading align="center" eyebrow="Optimiserz Core" title="One core. Five layers." text="The stack we combine to fit your product." />

      <div className="relative hidden h-[480px] overflow-hidden rounded-[28px] border border-line bg-gradient-to-b from-surface to-alt/70 shadow-card lg:block">
        <div className="aurora absolute inset-0 opacity-60" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {spots.map((s, i) => (
            <line key={i} x1="50" y1="50" x2={s.x} y2={s.y} stroke="#7C7DF5" strokeOpacity="0.45" strokeWidth="1.2" strokeDasharray="4 5" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-400/30" />
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-400/20" />

        <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-accent text-white shadow-glow">
          <span className="font-display text-lg font-semibold">optimiserz</span>
          <span className="label text-white/85">core</span>
        </div>

        {coreLayers.map((layer, i) => (
          <Node key={layer.key} layer={layer} className={`absolute ${spots[i].box}`} />
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
        {coreLayers.map((layer) => (
          <Node key={layer.key} layer={layer} />
        ))}
      </div>
    </Container>
  </section>
);
