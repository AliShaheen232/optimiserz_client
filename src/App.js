"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = require("react");
var Navbar_1 = require("./components/layout/Navbar");
var Hero_1 = require("./components/sections/Hero");
var Services_1 = require("./components/sections/Services");
var Solutions_1 = require("./components/sections/Solutions");
var Process_1 = require("./components/sections/Process");
var WhyOptimiserz_1 = require("./components/sections/WhyOptimiserz");
var About_1 = require("./components/sections/About");
var Contact_1 = require("./components/sections/Contact");
var FinalCTA_1 = require("./components/sections/FinalCTA");
var Footer_1 = require("./components/layout/Footer");
var App = function () {
    return (<div className="min-h-screen flex flex-col bg-[#0B1020] text-[#F7F9FC]">
      <Navbar_1.Navbar />
      <main className="flex-grow">
        <Hero_1.Hero />
        <Services_1.Services />
        <Solutions_1.Solutions />
        <Process_1.Process />
        <WhyOptimiserz_1.WhyOptimiserz />
        <About_1.About />
        <Contact_1.Contact />
        <FinalCTA_1.FinalCTA />
      </main>
      <Footer_1.Footer />
    </div>);
};
exports.App = App;
exports.default = exports.App;
