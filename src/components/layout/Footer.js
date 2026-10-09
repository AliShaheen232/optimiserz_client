"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
var react_1 = require("react");
var site_1 = require("../../config/site");
var PrivacyModal_1 = require("../modals/PrivacyModal");
var TermsModal_1 = require("../modals/TermsModal");
var Footer = function () {
    var _a = (0, react_1.useState)(false), privacyOpen = _a[0], setPrivacyOpen = _a[1];
    var _b = (0, react_1.useState)(false), termsOpen = _b[0], setTermsOpen = _b[1];
    var currentYear = new Date().getFullYear();
    var handleNavClick = function (e, href) {
        var _a;
        e.preventDefault();
        (_a = document.querySelector(href)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    return (<footer className="bg-[#0B1020] border-t border-[#27334A] text-xs text-[#A7B2C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Summary */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#6366F1] flex items-center justify-center text-white font-bold text-xs">
                O
              </div>
              <span className="text-base font-bold text-[#F7F9FC]">
                {site_1.siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-[#A7B2C5] max-w-sm leading-relaxed">
              {site_1.siteConfig.footer.description}
            </p>
            <div className="text-xs text-slate-400 font-mono pt-1">
              {site_1.siteConfig.domain}
            </div>
          </div>

          {/* Core Services */}
          <div>
            <div className="font-semibold text-[#F7F9FC] mb-3">Services</div>
            <ul className="space-y-2">
              <li>
                <a href="#services" onClick={function (e) { return handleNavClick(e, "#services"); }} className="hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" onClick={function (e) { return handleNavClick(e, "#services"); }} className="hover:text-white transition-colors">
                  Blockchain Development
                </a>
              </li>
              <li>
                <a href="#services" onClick={function (e) { return handleNavClick(e, "#services"); }} className="hover:text-white transition-colors">
                  Artificial Intelligence
                </a>
              </li>
              <li>
                <a href="#services" onClick={function (e) { return handleNavClick(e, "#services"); }} className="hover:text-white transition-colors">
                  Agentic AI &amp; Automation
                </a>
              </li>
              <li>
                <a href="#services" onClick={function (e) { return handleNavClick(e, "#services"); }} className="hover:text-white transition-colors">
                  Mailbox &amp; Email Infrastructure
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links & Legal */}
          <div>
            <div className="font-semibold text-[#F7F9FC] mb-3">
              Company &amp; Legal
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#about" onClick={function (e) { return handleNavClick(e, "#about"); }} className="hover:text-white transition-colors">
                  About Optimiserz
                </a>
              </li>
              <li>
                <a href="#contact" onClick={function (e) { return handleNavClick(e, "#contact"); }} className="hover:text-white transition-colors">
                  Contact &amp; Inquiries
                </a>
              </li>
              <li>
                <button type="button" onClick={function () { return setPrivacyOpen(true); }} className="hover:text-white transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button type="button" onClick={function () { return setTermsOpen(true); }} className="hover:text-white transition-colors text-left">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-[#27334A]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {currentYear} {site_1.siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#A7B2C5]/70">
              Technology Solutions Provider
            </span>
          </div>
        </div>
      </div>

      <PrivacyModal_1.PrivacyModal isOpen={privacyOpen} onClose={function () { return setPrivacyOpen(false); }}/>
      <TermsModal_1.TermsModal isOpen={termsOpen} onClose={function () { return setTermsOpen(false); }}/>
    </footer>);
};
exports.Footer = Footer;
