import React from "react";
import { MonitorCheck, Workflow, ShieldCheck, MailCheck } from "lucide-react";

const solutions = [
  {
    icon: <MonitorCheck className="w-5 h-5 text-[#6366F1]" />,
    title: "Digital Products",
    summary:
      "Websites, customer portals, SaaS applications, and internal dashboards.",
    detail:
      "Custom platforms structured around user journeys, secure account authentication, responsive layouts, and performance optimization.",
  },
  {
    icon: <Workflow className="w-5 h-5 text-[#38BDF8]" />,
    title: "Connected Business Workflows",
    summary:
      "API integrations, workflow automation, and AI-assisted operations.",
    detail:
      "Connecting disparate systems, CRM pipelines, payment processors, and automated processing queues with error monitoring.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
    title: "Blockchain-Powered Platforms",
    summary: "Smart contracts, Web3 applications, and tokenization systems.",
    detail:
      "Practical EVM implementations for digital proof, on-chain ledger records, smart contracts, and decentralized payment interfaces.",
  },
  {
    icon: <MailCheck className="w-5 h-5 text-sky-400" />,
    title: "Business Communication Infrastructure",
    summary:
      "Mailbox configuration, email sending systems, and delivery monitoring.",
    detail:
      "Authenticated domain records (SPF, DKIM, DMARC), high-volume transactional dispatchers, and automated bounce handling.",
  },
];

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F9FC] tracking-tight">
            Technology Should Solve Real Problems.
          </h2>
          <p className="mt-3 text-base text-[#A7B2C5] leading-relaxed">
            Here are practical examples of what we can help design, engineer,
            and deploy for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-[#151E32] border border-[#27334A] rounded-xl p-7 hover:border-[#27334A]/80 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#0B1020] border border-[#27334A]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#F7F9FC]">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm font-medium text-[#38BDF8] mb-2">
                {item.summary}
              </p>
              <p className="text-sm text-[#A7B2C5] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
