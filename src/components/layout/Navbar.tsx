import React, { useState } from 'react';
import { siteConfig } from '../../config/site';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B1020]/90 backdrop-blur-md border-b border-[#27334A]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone top bar contract: Brand, Nav links, 1 CTA */}
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Clean typographic brand wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded-md py-1"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#38BDF8] flex items-center justify-center font-bold text-white shadow-sm group-hover:scale-105 transition-transform duration-200">
              O
            </div>
            <span className="text-xl font-bold tracking-tight text-[#F7F9FC] whitespace-nowrap">
              {siteConfig.name}
            </span>
          </a>

          {/* Zone 2: Single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A7B2C5]" aria-label="Main Navigation">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-white transition-colors duration-150 whitespace-nowrap py-1 focus-visible:outline-none focus-visible:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single primary action button */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#6366F1] hover:bg-[#5254e0] active:scale-[0.98] rounded-lg shadow-sm transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
            >
              Discuss a Project
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A7B2C5] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded-lg"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#11182A] border-b border-[#27334A] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 text-sm font-medium text-[#A7B2C5] hover:text-white hover:bg-[#151E32] rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#27334A]/60">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-[#6366F1] rounded-lg hover:bg-[#5254e0] transition-colors"
            >
              Discuss a Project
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};