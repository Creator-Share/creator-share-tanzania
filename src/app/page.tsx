import Navigation from "../components/Navigation";
import Hero from "../components/sections/Hero";
import WaysToShare from "../components/sections/WaysToShare";
import About from "../components/sections/About";
import OurWork from "../components/sections/OurWork";
import Statistics from "../components/sections/Statistics";
import Sponsorship from "../components/sections/Sponsorship";
import DonorSection from "../components/DonorSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WaysToShare />
      <About />
      <OurWork />
      <Statistics />
      <Sponsorship />
      <DonorSection />
      <Footer />
    </div>
  );
}
