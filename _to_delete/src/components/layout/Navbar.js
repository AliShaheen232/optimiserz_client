"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var react_1 = require("react");
var site_1 = require("../../config/site");
var lucide_react_1 = require("lucide-react");
var Navbar = function () {
    var _a = (0, react_1.useState)(false), mobileMenuOpen = _a[0], setMobileMenuOpen = _a[1];
    var handleNavClick = function (e, href) {
        e.preventDefault();
        setMobileMenuOpen(false);
        var target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (<header className="sticky top-0 z-40 w-full bg-[#0B1020]/90 backdrop-blur-md border-b border-[#27334A]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant 3-zone top bar contract: Brand, Nav links, 1 CTA */}
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Clean typographic brand wordmark */}
          <a href="#hero" onClick={function (e) { return handleNavClick(e, '#hero'); }} className="flex items-center gap-2.5 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded-md py-1">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#38BDF8] flex items-center justify-center font-bold text-white shadow-sm group-hover:scale-105 transition-transform duration-200">
              O
            </div>
            <span className="text-xl font-bold tracking-tight text-[#F7F9FC] whitespace-nowrap">
              {site_1.siteConfig.name}
            </span>
          </a>

          {/* Zone 2: Single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A7B2C5]" aria-label="Main Navigation">
            {site_1.siteConfig.navigation.map(function (item) { return (<a key={item.label} href={item.href} onClick={function (e) { return handleNavClick(e, item.href); }} className="hover:text-white transition-colors duration-150 whitespace-nowrap py-1 focus-visible:outline-none focus-visible:text-white">
                {item.label}
              </a>); })}
          </nav>

          {/* Zone 3: Single primary action button */}
          <div className="hidden md:flex items-center shrink-0">
            <a href="#contact" onClick={function (e) { return handleNavClick(e, '#contact'); }} className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#6366F1] hover:bg-[#5254e0] active:scale-[0.98] rounded-lg shadow-sm transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]">
              Discuss a Project
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden">
            <button type="button" onClick={function () { return setMobileMenuOpen(!mobileMenuOpen); }} className="p-2 text-[#A7B2C5] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] rounded-lg" aria-expanded={mobileMenuOpen} aria-label="Toggle navigation menu">
              {mobileMenuOpen ? <lucide_react_1.X className="w-6 h-6"/> : <lucide_react_1.Menu className="w-6 h-6"/>}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible mobile drawer */}
      {mobileMenuOpen && (<div className="md:hidden bg-[#11182A] border-b border-[#27334A] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {site_1.siteConfig.navigation.map(function (item) { return (<a key={item.label} href={item.href} onClick={function (e) { return handleNavClick(e, item.href); }} className="px-3 py-2 text-sm font-medium text-[#A7B2C5] hover:text-white hover:bg-[#151E32] rounded-md transition-colors">
                {item.label}
              </a>); })}
          </nav>
          <div className="pt-3 border-t border-[#27334A]/60">
            <a href="#contact" onClick={function (e) { return handleNavClick(e, '#contact'); }} className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-[#6366F1] rounded-lg hover:bg-[#5254e0] transition-colors">
              Discuss a Project
              <lucide_react_1.ArrowUpRight className="w-4 h-4 ml-1.5"/>
            </a>
          </div>
        </div>)}
    </header>);
};
exports.Navbar = Navbar;
