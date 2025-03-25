import WorkCard from "../WorkCard";

const workItems = [
  {
    imageSrc: "/images/feathers-tale-new.png",
    title: "Feathers Tale Children's Village",
    description: [
      "At the core of Feathers Tale are children with special needs and disabilities. Due to the demands of poverty, work and no support, parents with special needs children often have no choice but to leave their children alone whilst they work, and for all neglect can occur intentionally, it also occurs unintentionally with it."
    ]
  },
  {
    imageSrc: "/images/angels-gate-new.png",
    title: "Angels Gate Center For Street Involved Children",
    description: [
      "Sadly many of the boys and girls have endured very difficult times living on the street, due to this the children living here need a little extra care and attention away from the other children.",
      "Aside from the hunger, and lonely nights sleeping on the street, sadly many of the children become..."
    ]
  },
  {
    imageSrc: "/images/animal-rescue-new.png",
    title: "Kilimanjaro Animal Rescue",
    description: [
      "We provide stray street dogs with a home, food and medical costs, if and when needed. We are searching for safe and loving homes for the rescue dogs. We teach about Animal Welfare. We include the Children living in Feathers Tale Children's Village in the care of the Animals. We offer Equine Therapy to special needs children."
    ]
  }
];

export default function OurWork() {
  return (
    <section className="work-section">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="section-title">Our Work</h2>
        <div className="work-grid">
          {workItems.map((item, index) => (
            <WorkCard
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
