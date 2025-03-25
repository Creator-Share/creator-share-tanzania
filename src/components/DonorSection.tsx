import Image from "next/image";

export default function DonorSection() {
  return (
    <section className="donor-section">
      <div className="max-w-7xl mx-auto px-8 py-16 text-center">
        <p className="text-primary-blue text-lg">Winner Of The Ebay/PayPal Giving Fund</p>
        <h2 className="text-4xl font-bold mt-4 mb-8">Top Small Charity Of The Year</h2>
        <div className="flex justify-center items-center">
          <Image
            src="/logos/giving-logos.png"
            alt="PayPal and eBay for Charity Logos"
            width={400}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
