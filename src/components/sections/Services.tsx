import React, { useState } from "react";
import { Globe, BrainCircuit, Radar, Layers, Send, Server, Bot, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceModal } from "../modals/ServiceModal";
import { servicesData } from "../../config/services";
import type { ServiceId, ServiceItem } from "../../types";

const icons: Record<ServiceId, LucideIcon> = {
  "web-apps": Globe,
  "ai-automation": BrainCircuit,
  "search-visibility": Radar,
  blockchain: Layers,
  email: Send,
  "hosting-care": Server,
  bots: Bot,
};

export const Services: React.FC<{ onInquire: (service: string) => void }> = ({ onInquire }) => {
  const [active, setActive] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="What we build" title="What We Build" text="Seven ways we help you build, automate and grow." />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => {
            const Icon = icons[service.id];
            return (
              <button
                key={service.id}
                onClick={() => setActive(service)}
                className="card group flex flex-col p-6 text-left transition hover:-translate-y-0.5 hover:border-violet-400/50"
              >
                <span className="icon-chip">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold">{service.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{service.tagline}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-xs font-semibold text-violet-600 opacity-80 transition group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </button>
            );
          })}

          <div className="flex flex-col justify-between rounded-2xl bg-accent p-6 text-white shadow-glow">
            <div>
              <h3 className="text-lg font-semibold !text-white">Not sure what you need?</h3>
              <p className="mt-2 text-sm text-white/90">Tell us the goal. We'll suggest the path.</p>
            </div>
            <button onClick={() => onInquire("Other")} className="btn mt-6 self-start bg-white !py-2.5 text-ink hover:bg-white/90">
              Talk to us <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>

      <ServiceModal
        service={active}
        onClose={() => setActive(null)}
        onInquire={(s) => {
          setActive(null);
          onInquire(s.title);
        }}
      />
    </section>
  );
};
