import React from "react";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const HorseProfile = ({
  name,
  imageSrc,
}: {
  name: string;
  imageSrc: string;
}) => {
  return (
    <article className="grid grid-cols-[40px,1fr] gap-2 items-center">
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
      <section>
        <p className="md:text-sm text-[12px] font-medium leading-none">
          {name}
        </p>
      </section>
    </article>
  );
};
