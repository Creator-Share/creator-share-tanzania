import Image from "next/image";
import ReadMoreLink from "./ReadMoreLink";

interface WorkCardProps {
  imageSrc: string;
  title: string;
  description: string[];
}

export default function WorkCard({ imageSrc, title, description }: WorkCardProps) {
  return (
    <div className="work-card">
      <Image
        src={imageSrc}
        alt={title}
        width={400}
        height={300}
        className="w-full h-[250px] object-cover"
      />
      <div className="work-card-content">
        <h3 className="work-card-title">{title}</h3>
        {description.map((paragraph, index) => (
          <p key={index} className={`card-text ${index > 0 ? 'mt-4' : ''}`}>
            {paragraph}
          </p>
        ))}
        <ReadMoreLink href="#" />
      </div>
    </div>
  );
}
