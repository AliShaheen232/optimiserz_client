import React from "react";

export const LogoMark: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="opt-ring" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#1BA8E0" />
        <stop offset="1" stopColor="#6466F0" />
      </linearGradient>
    </defs>
    <path d="M23.5 9.2A10 10 0 1 0 26 16" fill="none" stroke="url(#opt-ring)" strokeWidth="4.5" strokeLinecap="round" />
    <circle cx="25.4" cy="9.8" r="2.6" fill="#FFB547" />
  </svg>
);

export const Logo: React.FC = () => (
  <span className="inline-flex items-center gap-2">
    <LogoMark />
    <span className="font-display text-xl font-semibold tracking-tight text-ink">optimiserz</span>
  </span>
);
