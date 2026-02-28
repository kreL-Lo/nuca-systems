import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nuca Systems for OpenText ECM and YouTube media consulting. Offices in Frankfurt, Dublin, and Vilnius.",
  alternates: { canonical: "https://nucasystems.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
