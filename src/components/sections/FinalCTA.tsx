import React from "react";
import { ArrowRight } from "lucide-react";

export const FinalCTA: React.FC = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0B1020] to-[#11182A] border-t border-[#27334A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F9FC] tracking-tight">
          Let's Build Something Useful.
        </h2>
        <p className="text-base text-[#A7B2C5] max-w-xl mx-auto leading-relaxed">
          Have a project in mind or a problem worth solving? Let's start with a
          conversation.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#6366F1] hover:bg-[#5254e0] active:scale-[0.98] rounded-lg shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};
