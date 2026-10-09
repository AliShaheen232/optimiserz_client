import React, { useState } from "react";
import { servicesData } from "../../config/services";
import { ServiceItem } from "../../types";
import { ServiceModal } from "../modals/ServiceModal";
import {
  Globe,
  Layers,
  BrainCircuit,
  Bot,
  Send,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const serviceIcons: Record<string, React.ReactNode> = {
  "web-development": <Globe className="w-5 h-5 text-[#6366F1]" />,
  "blockchain-development": <Layers className="w-5 h-5 text-[#38BDF8]" />,
  "artificial-intelligence": (
    <BrainCircuit className="w-5 h-5 text-indigo-400" />
  ),
  "agentic-ai": <Bot className="w-5 h-5 text-[#6366F1]" />,
  "mailbox-bulk-email": <Send className="w-5 h-5 text-[#38BDF8]" />,
};

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  return (
    <section
      id="services"
      className="py-20 bg-[#11182A]/50 border-t border-b border-[#27334A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F9FC] tracking-tight">
            What We Build
          </h2>
          <p className="mt-3 text-base text-[#A7B2C5] leading-relaxed">
            Different challenges require different tools. We bring together
            software engineering, emerging technology, and practical
            problem-solving to build solutions around your goals.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const isMarquee = idx === 3; // Feature Agentic AI as a marquee card
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between bg-[#151E32] border border-[#27334A] rounded-xl p-6 transition-all duration-200 hover:border-[#6366F1]/60 hover:shadow-lg ${
                  isMarquee
                    ? "lg:col-span-2 bg-gradient-to-br from-[#151E32] to-[#17223b]"
                    : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-[#0B1020] border border-[#27334A]">
                      {serviceIcons[service.id]}
                    </div>
                    <span className="text-xs font-mono text-[#A7B2C5]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F7F9FC] tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#38BDF8] font-medium mt-1 mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-[#A7B2C5] leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2 mb-6">
                    {service.capabilities
                      .slice(0, isMarquee ? 4 : 3)
                      .map((cap, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-[#A7B2C5]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#6366F1] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </div>
                      ))}
                  </div>

                  {/* Agentic Workflow highlight in marquee card */}
                  {isMarquee && (
                    <div className="p-3 mb-6 bg-[#0B1020] border border-[#27334A] rounded-lg">
                      <div className="text-xs font-semibold text-[#F7F9FC] mb-1">
                        Illustrative Agent Workflow:
                      </div>
                      <div className="text-[11px] text-[#A7B2C5] font-mono">
                        Understand the task → Gather information → Use approved
                        tools → Complete the work → Request human approval
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#27334A]/80">
                  <button
                    type="button"
                    onClick={() => setActiveService(service)}
                    className="inline-flex items-center text-xs font-semibold text-white hover:text-[#38BDF8] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] rounded"
                  >
                    Learn More &amp; Capabilities
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accessible Detail Dialog */}
      <ServiceModal
        service={activeService}
        isOpen={!!activeService}
        onClose={() => setActiveService(null)}
      />
    </section>
  );
};
