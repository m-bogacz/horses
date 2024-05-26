import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type CardImageProps = {
  name: string;
  place: string;
  age: number;
  gender: string;
};

export const CardImage = ({ name, place, age, gender }: CardImageProps) => {
  return (
    <Card className="border-none shadow-none">
      <div className="w-full overflow-hidden rounded-md border min-w-36">
        <Image
          alt="horse"
          className="aspect-[1.6] h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
          height="250"
          src="/horse.jpg"
          width="400"
        />
      </div>
      <CardHeader className="border-none flex-row justify-between p-3 pb-0">
        <CardTitle className="text-xl border-none">{name}</CardTitle>
        <CardDescription className="border-none">{place}</CardDescription>
      </CardHeader>
      <CardContent className="pb-1 flex p-3">
        <article>
          <span className="text-sm text-slate-500 dark:text-slate-400 border-none">
            {age} years old
          </span>
        </article>
        <article className="ml-auto text-sm text-slate-500 dark:text-slate-400 border-none">
          {gender}
        </article>
      </CardContent>
    </Card>
  );
};
