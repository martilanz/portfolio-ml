import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/About";
import FooterServer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="snapContainer">
      <section id="hero" className="snapSection">
        <Hero />
      </section>

      <section id="whatIDo" className="snapSection">
        <WhatIDo />
        <FooterServer />
        
      </section>
    </main>
  );
}