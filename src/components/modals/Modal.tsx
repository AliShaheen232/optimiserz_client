import React, { useEffect } from "react";
import { X } from "lucide-react";

interface Props {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  subtitle?: string;
  wide?: boolean;
}

export const Modal: React.FC<Props> = ({ title, subtitle, open, onClose, children, footer, wide = false }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
        className={`max-h-[88vh] w-full overflow-y-auto rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8 ${wide ? "max-w-2xl" : "max-w-lg"}`}
      >
        <div className="flex items-start justify-between gap-4 border-b border-line pb-4">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            {subtitle && <p className="mt-1 text-sm font-medium text-violet-600">{subtitle}</p>}
          </div>
          <button onClick={onClose} className="rounded-lg p-1 text-ink-soft hover:bg-alt hover:text-ink" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-4 py-5 text-sm leading-relaxed text-ink-soft">{children}</div>
        {footer && <div className="flex justify-end gap-3 border-t border-line pt-4">{footer}</div>}
      </div>
    </div>
  );
};
