

import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="bg-[#F8FAF8] w-full">

      {/* HEADER */}
      <Header />

      {/* CONTENT */}
      <Hero />
      <Stats />
      <Services />
      <CTA />
      <Contact/>
      
    </main>
  );
}