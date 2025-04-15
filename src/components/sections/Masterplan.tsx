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
      <div className="max-w-7xl mx-auto px-8 mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-10 text-[#FFB700] text-center">Sharing can, and does, change lives</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <div className="text-5xl font-bold text-blue-700 mb-3">1000+</div>
              <div className="text-lg text-gray-700">Children’s Lives Transformed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-700 mb-3">200+</div>
              <div className="text-lg text-gray-700">Special Needs Children Living With Us</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-700 mb-3">250+</div>
              <div className="text-lg text-gray-700">Children In Our Care</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-700 mb-3">150+</div>
              <div className="text-lg text-gray-700">Rescue Puppies living with us</div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="relative w-full max-w-[500px] rounded-[2rem] overflow-hidden flex items-center justify-center">
            <Image
              src="/images/tanzania-map.png"
              alt="Tanzania map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}