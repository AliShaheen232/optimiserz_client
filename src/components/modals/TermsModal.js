"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsModal = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var TermsModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    if (!isOpen)
        return null;
    return (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm" role="dialog">
      <div className="relative w-full max-w-2xl bg-[#151E32] border border-[#27334A] rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-[#27334A]">
          <h3 className="text-lg font-bold text-[#F7F9FC]">Terms of Service</h3>
          <button onClick={onClose} className="p-1 text-[#A7B2C5] hover:text-white" aria-label="Close">
            <lucide_react_1.X className="w-5 h-5"/>
          </button>
        </div>
        <div className="py-4 space-y-4 text-xs text-[#A7B2C5] leading-relaxed">
          <p>
            Welcome to Optimiserz. By visiting optimiserz.com, you agree to
            these standard website terms.
          </p>
          <h4 className="font-semibold text-[#F7F9FC]">
            Services and Proposals
          </h4>
          <p>
            Information displayed on this website describes technology solutions
            and development capabilities. Formal deliverables, schedules,
            warranties, and service agreements are governed exclusively by
            executed master services agreements (MSAs) or statements of work
            (SOWs).
          </p>
          <h4 className="font-semibold text-[#F7F9FC]">
            Limitation of Liability
          </h4>
          <p>
            Materials on this website are provided for informational purposes
            without express or implied guarantees.
          </p>
        </div>
        <div className="pt-3 border-t border-[#27334A] text-right">
          <button onClick={onClose} className="px-4 py-2 text-xs font-semibold text-white bg-[#6366F1] rounded-lg">
            Understood
          </button>
        </div>
      </div>
    </div>);
};
exports.TermsModal = TermsModal;
