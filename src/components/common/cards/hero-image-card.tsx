import Image from "next/image";
import React from "react";

interface HeroImageCardProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const HeroImageCard = ({
  src,
  alt,
  width = 400,
  height = 400,
}: HeroImageCardProps) => {
  return (
    <div className="overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
      />
    </div>
  );
};

export default HeroImageCard;
