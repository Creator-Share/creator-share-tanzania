import Hero from "../components/sections/Hero";
import WaysToShare from "../components/sections/WaysToShare";
import About from "../components/sections/About";
import OurWork from "../components/sections/OurWork";
import Statistics from "../components/sections/Statistics";
import Sponsorship from "../components/sections/Sponsorship";
import DonorSection from "../components/DonorSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WaysToShare />
      <About />
      <OurWork />
      <Statistics />
      <Sponsorship />
      <DonorSection />
    </div>
  );
}
