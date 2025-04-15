import Image from "next/image";
import { Button } from "@/components/ui/button"; // Import Button component

const sponsorshipIcons = [
  {
    src: "/icons/special-needs.png",
    label: "Special Needs",
    isActive: true
  },
  {
    src: "/icons/street-child.png",
    label: "Street Involved Child",
    isActive: false
  },
  {
    src: "/icons/child-laborer.png",
    label: "Child Laborer",
    isActive: false
  },
  {
    src: "/icons/rescued-dog.png",
    label: "Rescued Puppy",
    isActive: false
  }
];

export default function Sponsorship() {
  return (
    <section
      className="sponsorship-section relative py-8 bg-no-repeat bg-center bg-top"
      style={{
        backgroundImage: "url('/images/sponsorship-main.png')",
        backgroundSize: '100% auto',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex"> {/* Centered, responsive padding */}
        {/* Content Card */}
        <div className="sponsorship-card mt-32 md:mt-72 bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full"> {/* Responsive top margin */}
          <div className="sponsorship-icons flex flex-wrap justify-start gap-4 mb-6"> {/* Changed justify-between to justify-start */}
            {sponsorshipIcons.map((icon, index) => (
              <div key={index} className={`icon-item flex items-center gap-2 p-2 rounded ${icon.isActive ? 'bg-blue-100' : ''}`}>
                <Image
                  src={icon.src}
                  alt={`${icon.label} Icon`}
                  width={24}
                  height={24}
                />
                <span className="text-sm">{icon.label}</span>
              </div>
            ))}
          </div>
          <hr className="my-5" />
          <h3 className="text-2xl font-bold mb-4 text-[#1C3C8C]">Share With A Special Needs Child</h3>
          <p className="text-gray-700 mb-6">
            By sharing with a family in need, you bring hope to those facing deep struggles–whether it’s a single mother trying to support her children, an elderly grandparent caring for grandchildren alone, or a parent battling illness while still providing for loved ones. Your support helps create lasting change through education, small business opportunities, medical care, and other essential needs. Family sponsorship empowers stability, restores dignity and gifts hope.
          </p>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
}
