import { CardImage } from "@/components/horses/card-image/CardImage";
import Link from "next/link";
import React from "react";

export const Children = () => {
  const gender = "mares";
  return (
    <div>
      <ul className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Link href={`/horses/${gender}/Kahla`} className="border-none">
          <CardImage name="Fado" age={10} place="Podągi" gender="mares" />
        </Link>
        <Link href={`/horses/${gender}/name`}>
          <CardImage name="Karl" age={14} place="Podągi" gender="mares" />
        </Link>
        <Link href={`/horses/${gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mares" />
        </Link>
        <Link href={`/horses/${gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mares" />
        </Link>
        <Link href={`/horses/${gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mares" />
        </Link>
        <Link href={`/horses/${gender}/name`}>
          <CardImage name="Trust me" age={21} place="Podągi" gender="mares" />
        </Link>
        <Link href={`/horses/${gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mares" />
        </Link>
        <Link href={`/horses/${gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mares" />
        </Link>
        <Link href={`/horses/${gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mares" />
        </Link>
        <Link href={`/horses/${gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mares" />
        </Link>
        <Link href={`/horses/${gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mares" />
        </Link>
        <Link href={`/horses/${gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mares" />
        </Link>
        <Link href={`/horses/${gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mares" />
        </Link>
        <Link href={`/horses/${gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mares" />
        </Link>
      </ul>
    </div>
  );
};
