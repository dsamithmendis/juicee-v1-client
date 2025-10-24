import Image from "next/image";
import React from "react";

interface FruitCardProps {
  img: string;
  name: string;
}

const FruitCard = ({ img, name }: FruitCardProps) => {
  return (
    <div className="group relative rounded-2xl p-2 h-[480px] md:h-80 lg:p-4 w-full flex flex-col items-center justify-center shadow-2xl hover:shadow-md transition bg-gradient-to-b from-[#f7ede6] to-[#f0c4a5] overflow-hidden">
      <Image
        src={img}
        alt={name}
        width={720}
        height={540}
        className="object-cover rounded-2xl"
      />
      <button className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition px-6 py-2 bg-[#FFBD43] text-white rounded-full shadow-lg">
        Sell
      </button>
    </div>
  );
};

export default FruitCard;
