import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MenuSection } from "@/components/MenuSection";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { LocationHours } from "@/components/LocationHours";
import { ReservationCTA } from "@/components/ReservationCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <MenuSection />
        <Experience />
        <Gallery />
        <Testimonials />
        <LocationHours />
        <ReservationCTA />
      </main>
      <Footer />
    </>
  );
}
