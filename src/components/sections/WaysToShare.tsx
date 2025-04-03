import ShareCard from "../ShareCard";

const shareOptions = [
  {
    iconSrc: "/icons/fundraising.png",
    title: "Fundraising",
    description: "Share Tanzania is always looking for fresh new ideas and people for our fundraising efforts."
  },
  {
    iconSrc: "/icons/partner.png",
    title: "Partner With Us",
    description: "Share Tanzania is always looking for fresh new ideas and people for our fundraising efforts."
  },
  {
    iconSrc: "/icons/volunteer.png",
    title: "Volunteer",
    description: "Share Tanzania is always looking for fresh new ideas and people for our fundraising efforts."
  }
];

export default function WaysToShare() {
  return (
    <section id="share" className="ways-to-share bg-[#4169E1] py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-white text-center mb-12 text-4xl font-bold">Ways To Share</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
