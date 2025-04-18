import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-16 w-full">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div className="text-center lg:text-left">
        <h1>
          <span className="hero-title">Sharing Love, Hope and Safety:</span>
          <br />
          <span className="hero-subtitle">Creating the opportunity for invisible children to be visible again</span>
        </h1>
        <p className="hero-text mt-6 mb-8">
          Every child deserves a childhood. Together, we can end the suffering of special needs, homeless and child laboring children, living in crisis...
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="/donate" className="sponsor-button">Donate</a>
        </div>
      </div>
      <div className="relative max-w-xl mx-auto lg:mx-0">
        <Image
          src="/images/hero-main.png"
          alt="Children group photo"
          width={600}
          height={400}
          style={{
            borderRadius: "2rem",
            objectFit: "cover"
          }}
          priority
        />
      </div>
      </div>
    </section>
  );
}
