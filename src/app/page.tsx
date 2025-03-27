import Navigation from "../components/Navigation";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Statistics from "../components/sections/Statistics";
import OurWork from "../components/sections/OurWork";
import WaysToShare from "../components/sections/WaysToShare";
import Sponsorship from "../components/sections/Sponsorship";
import DonorSection from "../components/DonorSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Statistics />
      <OurWork />
      <WaysToShare />
      <Sponsorship />
      <DonorSection />
      <Footer />
    </div>
  );
}
