import Image from "next/image";

interface ShareCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export default function ShareCard({ iconSrc, title, description }: ShareCardProps) {
  return (
    <div className="bg-[#f6f9f8] rounded-[24px] p-8 shadow-md text-center min-h-[420px] flex flex-col justify-start">
      <Image
        src={iconSrc}
        alt={`${title} Icon`}
        width={180}
        height={180}
        className="mx-auto mb-6"
      />
      <h3 className="text-[#1e3a8a] text-2xl mb-4">{title}</h3>
      <p className="text-gray-700 text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
}
