import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { siteConfig } from "../../config/site";
import { Logo } from "../ui/Logo";

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
      <div className="glass mx-auto max-w-6xl !rounded-2xl">
        <div className="flex h-16 items-center justify-between px-5">
          <a href="#top" onClick={close} aria-label="Optimiserz home">
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex" aria-label="Main">
            {siteConfig.nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-primary hidden !py-2.5 md:inline-flex">
            Discuss a project <ArrowRight className="h-4 w-4" />
          </a>

          <button type="button" onClick={() => setOpen(!open)} className="rounded-lg p-2 text-ink md:hidden" aria-expanded={open} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="flex flex-col gap-1 border-t border-line px-3 py-3 md:hidden">
            {siteConfig.nav.map((item) => (
              <a key={item.href} href={item.href} onClick={close} className="rounded-lg px-3 py-2.5 font-medium text-ink-soft hover:bg-alt hover:text-ink">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={close} className="btn-primary mt-2">Discuss a project</a>
          </div>
        )}
      </div>
    </header>
  );
};
