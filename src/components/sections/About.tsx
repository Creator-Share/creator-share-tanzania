import Image from "next/image";
import ReadMoreLink from "../ReadMoreLink";

export default function About() {
  return (
    <section className="about-section">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="section-title">About The Creator Share Foundation</h2>
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image 
              src="/images/about-foundation.png" 
              alt="Children at Creator Share Foundation" 
              width={500} 
              height={600}
              className="rounded-[2rem] object-cover"
            />
          </div>
          <div>
            <p className="about-text mb-6">
              The Creator Share Foundation is dedicated to bringing hope and support to special needs children in developing countries, often referred to as the &quot;invisible children.&quot; These children endure unimaginable suffering in environments devoid of basic necessities such as water, electricity, and adequate shelter. In addition to the hardships faced by loving families trying to care for them, many of these children experience severe neglect due to economic hardship or cultural beliefs. Tragically, some are confined in dark rooms or restrained, left isolated with no means to call for help. These children may endure such conditions for years, either passing away in their suffering or, by God&apos;s grace, being discovered by our team.
            </p>
            <p className="about-text">
              Founded by John St. Julien, The Creator Share Foundation is driven by a mission to rescue these vulnerable children and create innovative solutions and infrastructure in the form of our children&apos;s villages and homes. Our aim is to extend love, support, healing, and faith to the most marginalized members of our global community.
            </p>
            <ReadMoreLink href="#" />
          </div>
        </div>
      </div>
    </section>
  );
}
