import Image from "next/image";

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
    label: "Rescue Dogs living with us"
  }
];

export default function Statistics() {
  return (
    <section className="stats-section">
      <div className="max-w-7xl mx-auto px-8">
        <div className="stats-container">
          <div>
            <h2 className="stats-title">Sharing can, and does, change lives</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <Image
            src="/images/tanzania-map.png"
            alt="Tanzania Map"
            width={400}
            height={400}
            className="tanzania-map"
          />
        </div>
      </div>
    </section>
  );
}
