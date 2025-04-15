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
    label: "Rescue Puppies living with us"
  }
];

export default function Statistics() {
  return (
    <section className="stats-section">
      <div className="max-w-7xl mx-auto px-8">
        <div className="stats-container">
          <div>
            <h2 className="stats-title text-yellow-500">Sharing can, and does, change lives</h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              width: 400,
              height: 300,
              background: "#e0e0e0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "2rem"
            }}
          >
            <span style={{ color: "#888", fontSize: "1.1rem", textAlign: "center" }}>
              [Tanzania map placeholder – to be replaced]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
