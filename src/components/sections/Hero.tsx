import React from "react";
import { ArrowRight, Code2, Cpu, Network, Mail } from "lucide-react";

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden tech-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#F7F9FC] tracking-tight leading-[1.12] text-balance">
              Technology That Moves Your Business Forward.
            </h1>

            <p className="text-base sm:text-lg text-[#A7B2C5] leading-relaxed max-w-2xl">
              From custom software and blockchain applications to AI agents and
              reliable email infrastructure, Optimiserz helps businesses turn
              complex ideas into practical digital solutions.
            </p>

            {/* Restrained CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3.5">
              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#6366F1] hover:bg-[#5254e0] active:scale-[0.98] rounded-lg shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#services")}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#F7F9FC] bg-[#151E32] hover:bg-[#1c2742] border border-[#27334A] active:scale-[0.98] rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
              >
                Explore Our Services
              </button>
            </div>

            {/* Concise unboxed service summary with typographic separators */}
            <div className="pt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#A7B2C5] font-medium">
              <span className="text-[#F7F9FC]">Web Development</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#F7F9FC]">Blockchain</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#F7F9FC]">AI &amp; Automation</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#F7F9FC]">Email Infrastructure</span>
            </div>
          </div>

          {/* Right Column: Interactive Technology Illustration (SVG & CSS Node Network) */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#11182A] border border-[#27334A] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-[#27334A]/80 text-xs text-[#A7B2C5]">
                <span className="font-mono text-slate-300">
                  SYSTEM ARCHITECTURE
                </span>
                <span className="text-[#38BDF8] font-mono">
                  OPTIMISERZ.CORE
                </span>
              </div>

              {/* Connected node visual */}
              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-[#151E32] border border-[#27334A]/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#6366F1]/10 text-[#6366F1]">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F7F9FC]">
                        Product Layer
                      </div>
                      <div className="text-[11px] text-[#A7B2C5]">
                        React · Next.js · TypeScript
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#38BDF8]">
                    WEB APPS
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-[#151E32] border border-[#27334A]/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-[#38BDF8]/10 text-[#38BDF8]">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F7F9FC]">
                        Agentic Orchestration
                      </div>
                      <div className="text-[11px] text-[#A7B2C5]">
                        LLM Tools · RAG · Workflows
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#6366F1]">
                    AUTOMATION
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-[#151E32] border border-[#27334A]/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-indigo-500/10 text-indigo-400">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F7F9FC]">
                        Decentralized Protocol
                      </div>
                      <div className="text-[11px] text-[#A7B2C5]">
                        Solidity · EVM · Smart Contracts
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-indigo-400">
                    WEB3
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-[#151E32] border border-[#27334A]/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded bg-sky-500/10 text-sky-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F7F9FC]">
                        Delivery Pipeline
                      </div>
                      <div className="text-[11px] text-[#A7B2C5]">
                        SPF · DKIM · DMARC · SMTP
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-sky-400">
                    EMAIL INFRA
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#27334A]/60 flex items-center justify-between text-[11px] text-[#A7B2C5]">
                <span>Designed for longevity &amp; scale</span>
                <span className="text-slate-400 font-mono">EST. MODERN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
