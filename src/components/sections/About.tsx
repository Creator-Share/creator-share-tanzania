import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about-section w-full py-16">
      <div className="max-w-7xl mx-auto px-8">
        <blockquote className="bg-[#F8F2E5] p-6 rounded-xl mb-12 text-lg text-gray-700 border-l-4 border-blue-400">
          <span>
            “Special needs children in Africa are among the most – if not the most – marginalized children in our human story today. In their isolation, suffering, and struggle, these children remain almost entirely invisible to the majority of humanity. Our mission is to bring them family, healing, hope, love, and safety – making these invisible children visible in the eyes of mankind.”
          </span>
          <br />
          <span className="font-bold text-blue-700">John St Julien, Founder</span>
        </blockquote>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-12 items-center">
          <div className="relative mx-auto md:mx-0 w-full max-w-[500px] h-[350px]">
            {/* Large center/top right image */}
            <Image
              src="/images/about/about-main.png"
              alt="About collage main"
              width={320}
              height={240}
              className="absolute top-4 right-8 z-10 shadow-lg"
              style={{ objectFit: "cover" }}
              priority
            />
            {/* Top left */}
            <Image
              src="/images/about/about-top-left.png"
              alt="About collage top left"
              width={90}
              height={90}
              className="absolute top-4 left-4 z-20 shadow-md"
              style={{ objectFit: "cover" }}
            />
            {/* Bottom left */}
            <Image
              src="/images/about/about-bottom-left.png"
              alt="About collage bottom left"
              width={100}
              height={100}
              className="absolute bottom-4 left-4 z-20 shadow-md"
              style={{ objectFit: "cover" }}
            />
            {/* Bottom right */}
            <Image
              src="/images/about/about-bottom-right.png"
              alt="About collage bottom right"
              width={100}
              height={100}
              className="absolute bottom-4 right-4 z-20 shadow-md"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#1C3C8C]">About The Creator Share Foundation</h2>
            <p className="about-text mb-6">
              The Creator Share Foundation is dedicated to bringing hope and support to special needs children in developing countries, often referred to as the &quot;invisible children.&quot; These children endure unimaginable suffering in environments devoid of basic necessities such as water, electricity, and adequate shelter. In addition to the hardships faced by loving families trying to care for them, many of these children experience severe neglect due to economic hardship or cultural beliefs. Tragically, some are confined in dark rooms or restrained, left isolated with no means to call for help. These children may endure such conditions for years, either passing away in their suffering or, by God&apos;s grace, being discovered by our team.
            </p>
            <p className="about-text">
              Founded by John St. Julien, The Creator Share Foundation is driven by a mission to rescue these vulnerable children and create innovative solutions and infrastructure in the form of our children&apos;s villages and homes. Our aim is to extend love, support, healing, and faith to the most marginalized members of our global community.
            </p>
            {/* <ReadMoreLink href="#" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
