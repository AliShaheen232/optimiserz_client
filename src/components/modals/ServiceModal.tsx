import React from "react";
import { CheckCircle2, Info } from "lucide-react";
import { Modal } from "./Modal";
import type { ServiceItem } from "../../types";

interface Props {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (service: ServiceItem) => void;
}

export const ServiceModal: React.FC<Props> = ({ service, onClose, onInquire }) => {
  if (!service) return null;

  return (
    <Modal
      wide
      open
      title={service.title}
      subtitle={service.tagline}
      onClose={onClose}
      footer={
        <>
          <button onClick={onClose} className="btn !px-4 !py-2 text-ink-soft hover:text-ink">Close</button>
          <button onClick={() => onInquire(service)} className="btn-primary !px-4 !py-2">Ask about this</button>
        </>
      }
    >
      <p>{service.fullDescription}</p>

      <div>
        <p className="label mb-3 text-ink">Capabilities</p>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {service.capabilities.map((cap) => (
            <div key={cap} className="flex gap-2 text-xs">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-500" />
              {cap}
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="label mb-3 text-ink">Tech we use</p>
        <div className="flex flex-wrap gap-2">
          {service.techFocus.map((t) => (
            <span key={t} className="rounded-md border border-line bg-white px-2.5 py-1 font-mono text-xs text-ink">{t}</span>
          ))}
        </div>
      </div>

      <div className="flex gap-2.5 rounded-xl border border-line bg-alt/60 p-3.5 text-xs">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
        <span><span className="font-semibold text-ink">Honest note: </span>{service.honestNote}</span>
      </div>
    </Modal>
  );
};
