import Image from "next/image";
import React from "react";

interface FruitCardProps {
  img: string;
  name: string;
}

const FruitCard = ({ img, name }: FruitCardProps) => {
  return (
    <div className="rounded-2xl p-2 h-[480px] md:h-80 lg:p-4 w-full flex flex-col items-center justify-center shadow-2xl hover:shadow-md transition bg-gradient-to-b from-[#f7ede6] to-[#f0c4a5] overflow-hidden">
      <Image
        src={img}
        alt={name}
        width={1200}
        height={1200}
        className="object-cover rounded-2xl"
      />
    </div>
  );
};

export default FruitCard;
