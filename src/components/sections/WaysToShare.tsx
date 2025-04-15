import ShareCard from "../ShareCard";

const shareOptions = [
  {
    iconSrc: "/icons/fundraising.png",
    title: "Fundraising",
    description: "Share your time and expertise with the children living in our care."
  },
  {
    iconSrc: "/icons/partner.png",
    title: "Partner With Us",
    description: "Become our Partner and create a safe and loving environment for children in need."
  },
  {
    iconSrc: "/icons/volunteer.png",
    title: "Volunteer",
    description: "Host your own fundraiser and become a voice for the invisible children living in crisis."
  }
];

export default function WaysToShare() {
  return (
    <section id="share" className="ways-to-share bg-[#1C3C8C] py-16 w-full">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-white text-center mb-12 text-4xl font-bold">Ways To Share</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {shareOptions.map((option, index) => (
            <ShareCard
              key={index}
              iconSrc={option.iconSrc}
              title={option.title}
              description={option.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
