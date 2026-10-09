import React from "react";
import { ServiceItem } from "../../types";
import { X, CheckCircle2, AlertCircle } from "lucide-react";

interface ServiceModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#151E32] border border-[#27334A] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#27334A]">
          <div>
            <h3 id="modal-title" className="text-xl font-bold text-[#F7F9FC]">
              {service.title}
            </h3>
            <p className="text-xs text-[#38BDF8] font-medium mt-1">
              {service.tagline}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#A7B2C5] hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-5 space-y-5">
          <p className="text-sm text-[#A7B2C5] leading-relaxed">
            {service.fullDescription}
          </p>

          <div>
            <h4 className="text-xs font-semibold text-[#F7F9FC] uppercase tracking-wider mb-3">
              Full Capabilities &amp; Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-xs text-[#A7B2C5]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6366F1] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#F7F9FC] uppercase tracking-wider mb-2">
              Primary Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.techFocus.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-mono bg-[#0B1020] border border-[#27334A] rounded text-[#F7F9FC]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Honest Note */}
          <div className="p-3.5 rounded-lg bg-[#0B1020] border border-[#27334A] text-xs text-[#A7B2C5] flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#F7F9FC]">
                Practical Expectation:{" "}
              </span>
              {service.honestNote}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#27334A] flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#A7B2C5] hover:text-white transition-colors"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#6366F1] hover:bg-[#5254e0] rounded-lg transition-colors"
          >
            Inquire About This Service
          </button>
        </div>
      </div>
    </div>
  );
};
