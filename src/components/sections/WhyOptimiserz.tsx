import React from "react";
import { Target, MessageSquare, Wrench, TrendingUp } from "lucide-react";

const principles = [
  {
    icon: <Target className="w-5 h-5 text-[#6366F1]" />,
    title: "Practical Thinking",
    description: "Focus on the actual problem before choosing a technology.",
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-[#38BDF8]" />,
    title: "Clear Communication",
    description: "Keep scope, decisions, and progress understandable.",
  },
  {
    icon: <Wrench className="w-5 h-5 text-indigo-400" />,
    title: "Thoughtful Engineering",
    description:
      "Build solutions with maintainability, security, and performance in mind.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-sky-400" />,
    title: "Room to Grow",
    description:
      "Design products with future improvements and changing requirements in mind.",
  },
];

export const WhyOptimiserz: React.FC = () => {
  return (
    <section className="py-20 border-t border-[#27334A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F9FC] tracking-tight">
            A Technology Partner, Not Just a Development Team.
          </h2>
          <p className="mt-3 text-base text-[#A7B2C5] leading-relaxed">
            Our company philosophy is guided by four principles that keep every
            project grounded in business reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#151E32] border border-[#27334A] rounded-xl p-6"
            >
              <div className="p-2.5 rounded-lg bg-[#0B1020] border border-[#27334A] w-fit mb-4">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-[#F7F9FC] mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-[#A7B2C5] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
