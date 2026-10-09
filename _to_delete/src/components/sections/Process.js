"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Process = void 0;
var react_1 = require("react");
var stages = [
    {
        step: "01",
        name: "Understand",
        description: "We start by understanding your goals, your users, and the problem you're trying to solve.",
    },
    {
        step: "02",
        name: "Plan",
        description: "We agree on the scope, priorities, technical direction, and what a successful outcome should look like.",
    },
    {
        step: "03",
        name: "Build",
        description: "We develop the solution in manageable stages, share progress, and gather feedback along the way.",
    },
    {
        step: "04",
        name: "Improve",
        description: "After delivery, we can help refine the product, address issues, and plan the next stage of development.",
    },
];
var Process = function () {
    return (<section id="approach" className="py-20 bg-[#11182A]/40 border-t border-[#27334A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F7F9FC] tracking-tight">
            From an Idea to Something That Works.
          </h2>
          <p className="mt-3 text-base text-[#A7B2C5] leading-relaxed">
            A straightforward, four-stage development process focused on
            clarity, practical outcomes, and steady progress.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map(function (stage) { return (<div key={stage.step} className="bg-[#151E32] border border-[#27334A] rounded-xl p-6 relative flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#6366F1] font-semibold">
                  STAGE {stage.step}
                </span>
                <h3 className="text-lg font-bold text-[#F7F9FC] mt-2 mb-3">
                  {stage.name}
                </h3>
                <p className="text-sm text-[#A7B2C5] leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>); })}
        </div>
      </div>
    </section>);
};
exports.Process = Process;
