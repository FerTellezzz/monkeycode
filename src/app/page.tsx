import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechTicker from "@/components/TechTicker";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechTicker />
      <Services />
      <HowWeWork />
      <Contact />
      <Footer />
    </main>
  );
}
