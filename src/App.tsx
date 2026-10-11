import React, { useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Core } from "./components/sections/Core";
import { Paths } from "./components/sections/Paths";
import { Process } from "./components/sections/Process";
import { Why } from "./components/sections/Why";
import { Contact } from "./components/sections/Contact";
import { intentToService } from "./config/content";
import type { Intent } from "./types";

export const App: React.FC = () => {
  const [service, setService] = useState("");

  const goToContact = (next: string) => {
    setService(next);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const choose = (intent: Intent) => goToContact(intentToService[intent]);

  return (
    <div className="relative isolate flex min-h-screen flex-col">
      <div className="aurora pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px]" aria-hidden="true" />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services onInquire={goToContact} />
        <Core />
        <Paths onChoose={choose} />
        <Process />
        <Why />
        <Contact service={service} onServiceChange={setService} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
