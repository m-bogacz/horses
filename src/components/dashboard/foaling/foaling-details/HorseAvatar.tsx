import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";

export const HorseAvatar = ({
  imageSrc,
  name,
}: {
  imageSrc: string;
  name: string;
}) => {
  return (
    <Avatar>
      <AvatarImage asChild src={imageSrc}>
        <Image
          src={imageSrc}
          alt="logo"
          width={40}
          height={40}
          className="object-cover object-center  transition-transform hover:scale-105"
        />
      </AvatarImage>
      <AvatarFallback>{name[0].toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
