import WorkCard from "../WorkCard";

const workItems = [
  {
    imageSrc: "/images/angels-gate.png",
    title: "Angels Gate Center For Street Involved Children",
    description: [
      "The children staying at Angels Gate once lived on the streets – some as young as six years old. There, they faced harsh conditions, exposure to drugs, stealing and the constant threat of physical and sexual abuse.",
      "At Angels Gate, they find safety, education, medical care, and a place in our unconventional but deeply loving family. Right next door, our Music and Art School offers a space to heal through creativity – whether through singing, DJing, painting, or simply telling their stories in their own way."
    ]
  },
  {
    imageSrc: "/images/feathers-tale.png",
    title: "Feathers Tale Children's Village",
    description: [
      "Featherstale is home to nearly 200 children, most of whom are born with special needs. Many of the invisible children have faced neglect, abuse, and deep hardship due to poverty and cultural stigma.",
      "At Featherstale, they receive medical care, education, therapy, and creative outlets – but most importantly, they become part of our family – rooted in love, faith, and hope. Whenever possible, we keep mother and child together – some children live at Featherstale with their single mothers, who also gain access to employment or education, helping them rebuild their lives with dignity."
    ]
  },
  {
    imageSrc: "/images/animal-rescue.png",
    title: "Kilimanjaro Animal Rescue",
    description: [
      "Our rescue shelter gives abandoned, abused, and injured stray pups a second chance at life. At Kilimanjaro Animal Rescue, every puppy receives veterinary care, food, and the nurturing love they deserve.",
      "Many of our children help care for the animals, creating a bond of mutual healing between rescued souls – both human and canine."
    ]
  }
];

export default function OurWork() {
  return (
    <section id="work" className="work-section w-full">
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
