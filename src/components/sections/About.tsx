import React from "react";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-[#11182A]/40 border-t border-[#27334A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F9FC] tracking-tight mb-6">
            Built Around Better Solutions.
          </h2>

          <div className="space-y-4 text-base text-[#A7B2C5] leading-relaxed">
            <p>
              Optimiserz is a technology-focused software house working across
              software development, blockchain, artificial intelligence,
              automation, and email infrastructure.
            </p>
            <p>
              Our approach is simple: understand the problem, choose the right
              tools, and build something useful.
            </p>
            <p>
              Whether you're starting with an idea, improving an existing
              product, or exploring a new technology, we'd like to understand
              what you're working on.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#27334A]/80 text-xs text-[#A7B2C5] flex flex-wrap gap-4">
            <div>
              <span className="font-semibold text-[#F7F9FC]">Domain:</span>{" "}
              Optimiserz.com
            </div>
            <div>
              <span className="font-semibold text-[#F7F9FC]">Focus:</span>{" "}
              Software &amp; Infrastructure
            </div>
            <div>
              <span className="font-semibold text-[#F7F9FC]">Model:</span>{" "}
              Client-Partner Engineering
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
