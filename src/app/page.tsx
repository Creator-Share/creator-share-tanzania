import "../styles/landing-page.css";
import Hero from "../components/sections/Hero";
import WaysToShare from "../components/sections/WaysToShare";
import About from "../components/sections/About";
import OurWork from "../components/sections/OurWork";
import Masterplan from "../components/sections/Masterplan";
// import Statistics from "../components/sections/Statistics";
import Sponsorship from "../components/sections/Sponsorship";
import DonorSection from "../components/DonorSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="landing-page">
      <div className="min-h-screen">
        <Hero />
        <WaysToShare />
        <About />
        <OurWork />
        <Masterplan />
        <Sponsorship />
        <div className="w-full mt-28 ">
          <Image
            src="/images/village.png"
            alt="Children's Village"
            width={1920}
            height={600}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            priority
          />
        </div>
        <DonorSection />
      </div>
    </div>
  );
}
