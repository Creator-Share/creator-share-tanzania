
import React from 'react';
import Image from 'next/image';

const stats = [
  {
    number: "1000+",
    label: "Children's Lives Transformed"
  },
  {
    number: "200+",
    label: "Special Needs Children Living With Us"
  },
  {
    number: "250+",
    label: "Children In Our Care"
  },
  {
    number: "150+",
    label: "Rescue Puppies living with us"
  }
];

export default function Statistics() {
  return (
    <section className="stats-section w-full bg-[#F5F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="stats-container">
          <div>
            <h2 className="stats-title font-bold text-[#FFB700] text-center w-full">Sharing can, and does, change lives</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="relative w-full max-w-[525px] h-[584px] aspect-[5/3] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/tanzania-map.png"
                alt="Tanzania map"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
