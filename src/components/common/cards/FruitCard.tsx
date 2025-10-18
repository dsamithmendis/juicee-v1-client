import Image from "next/image";
import React from "react";

interface FruitCardProps {
  img: string;
  name: string;
}

const FruitCard = ({ img, name }: FruitCardProps) => {
  return (
    <div className="bg-[#ffdbd2] rounded-2xl h-72 w-full flex flex-col items-center justify-center shadow-md hover:shadow-lg transition">
      <Image
        src={img}
        alt={name}
        width={100}
        height={100}
        className="rounded-full"
      />
    </div>
  );
};

export default FruitCard;
