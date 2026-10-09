"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivacyModal = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var PrivacyModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    if (!isOpen)
        return null;
    return (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm" role="dialog">
      <div className="relative w-full max-w-2xl bg-[#151E32] border border-[#27334A] rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-[#27334A]">
          <h3 className="text-lg font-bold text-[#F7F9FC]">Privacy Policy</h3>
          <button onClick={onClose} className="p-1 text-[#A7B2C5] hover:text-white" aria-label="Close">
            <lucide_react_1.X className="w-5 h-5"/>
          </button>
        </div>
        <div className="py-4 space-y-4 text-xs text-[#A7B2C5] leading-relaxed">
          <p>
            At Optimiserz (optimiserz.com), we respect the privacy of our
            visitors and clients. This initial starter privacy statement
            explains how information collected through project inquiry forms is
            handled.
          </p>
          <h4 className="font-semibold text-[#F7F9FC]">
            Information Collection
          </h4>
          <p>
            We collect the contact details you voluntarily submit via our
            inquiry form (name, email address, company name, and project
            specifications) solely to assess project feasibility and reply to
            your communication.
          </p>
          <h4 className="font-semibold text-[#F7F9FC]">
            Data Usage &amp; Sharing
          </h4>
          <p>
            We never sell, rent, or trade your contact information to third
            parties. We do not use your information for spam mailing lists.
          </p>
          <h4 className="font-semibold text-[#F7F9FC]">Contact</h4>
          <p>
            For privacy-related inquiries, reach us at contact@optimiserz.com.
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
exports.PrivacyModal = PrivacyModal;
