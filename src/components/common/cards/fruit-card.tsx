import Image from "next/image";
import React from "react";

interface FruitCardProps {
  img: string;
  name: string;
}

const FruitCard = ({ img, name }: FruitCardProps) => {
  return (
    <div className="rounded-2xl p-2 lg:p-4 md:h-72 w-full flex flex-col items-center justify-center shadow-2xl hover:shadow-md transition">
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
