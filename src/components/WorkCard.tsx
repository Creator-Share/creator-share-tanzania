import Image from "next/image";
import ReadMoreLink from "./ReadMoreLink";

interface WorkCardProps {
  imageSrc: string;
  title: string;
  description: string[];
}

export default function WorkCard({ imageSrc, title, description }: WorkCardProps) {
  return (
    <div className="work-card min-h-[500px] flex flex-col bg-white rounded-[1.5rem] shadow-md overflow-hidden">
      {/* Wrapper div for clipping */}
      <div className="relative w-full h-[250px] [clip-path:path('M_0_0_L_100%_0_L_100%_100%_Q_50%_85%_0_100%_Z')]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover" // Image fills the clipped container
        />
      </div>
      <div className="work-card-content p-6 flex flex-col flex-grow">
        <h3 className="work-card-title text-2xl font-bold mb-4 text-[#1C3C8C]">{title}</h3>
        {description.map((paragraph, index) => (
          <p key={index} className={`card-text text-gray-700 ${index > 0 ? 'mt-4' : ''}`}>
            {paragraph}
          </p>
        ))}
        <div className="mt-auto pt-4">
          <ReadMoreLink href="#" />
        </div>
      </div>
    </div>
  );
}
