import React from "react";
import Image from "next/image";

export default function Masterplan() {
  return (
    <section id="masterplan" className="masterplan-section w-full py-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-full flex justify-center items-center mb-6">
            <div className="relative w-full max-w-[500px] aspect-[5/3] rounded-[2rem] overflow-hidden flex items-center justify-center bg-[#e9ecef]">
              <Image
                src="/images/masterplan-group.png"
                alt="Masterplan group photo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="section-title font-bold">Masterplan: Invisible Children</h2>
          <p className="mb-6 text-lg text-gray-700">
            We are building the largest children’s village in Tanzania – a blueprint designed especially for children with special needs, replicable in and around East Africa. With space for up to 500 children, this new village will provide safe homes, therapeutic care, inclusive education, and a sustainable food farm. It’s more than a village – it’s a vision to make the most invisible children seen, supported, and truly at home.
          </p>
          <a href="#" className="text-blue-700 font-semibold hover:underline flex items-center gap-1">
            Read More <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      {/* Combined Stats/Map Section */}
    </section>
  );
}