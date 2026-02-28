import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { ITConsulting } from "@/components/sections/ITConsulting";
import { Media } from "@/components/sections/Media";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ITConsulting />
        <Media />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
