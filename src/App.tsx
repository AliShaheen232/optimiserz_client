import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Solutions } from "./components/sections/Solutions";
import { Process } from "./components/sections/Process";
import { WhyOptimiserz } from "./components/sections/WhyOptimiserz";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { FinalCTA } from "./components/sections/FinalCTA";
import { Footer } from "./components/layout/Footer";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B1020] text-[#F7F9FC]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Solutions />
        <Process />
        <WhyOptimiserz />
        <About />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
