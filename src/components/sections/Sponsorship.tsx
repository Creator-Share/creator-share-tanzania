import Image from "next/image";

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
    label: "Rescued Dog",
    isActive: false
  }
];

export default function Sponsorship() {
  return (
    <section className="sponsorship-section">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="sponsorship-card max-w-2xl mx-auto lg:mx-0 w-full">
            <div className="sponsorship-icons">
              {sponsorshipIcons.map((icon, index) => (
                <div key={index} className={`icon-item ${icon.isActive ? 'active' : ''}`}>
                  <Image
                    src={icon.src}
                    alt={`${icon.label} Icon`}
                    width={24}
                    height={24}
                  />
                  <span>{icon.label}</span>
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-4">Share With A Special Needs Child</h3>
            <p className="text-gray-600 mb-6">
              Sharing your support helps us to provide for the children we have here first and foremost, without people reaching out we simply would not be able to afford the staff, food and medical bills the children require. Nor could 2 of us care for 22 children alone I might add!
            </p>
            <a href="#" className="learn-more-button">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
