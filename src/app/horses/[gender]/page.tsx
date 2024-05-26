import { CardImage } from "@/components/horses/card-image/CardImage";
import Link from "next/link";
import React from "react";

export default function HorsesPage({ params }: { params: { gender: string } }) {
  return (
    <article className="flex-1 space-y-1 p-2 pt-2 md:space-y-4 md:p-8 md:pt-6 lg:p-15 md:mx-40">
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {params.gender}
      </h1>

      <ul className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Link href={`/horses/${params.gender}/Kahla`} className="border-none">
          <CardImage name="Fado" age={10} place="Podągi" gender="gelding" />
        </Link>
        <Link href={`/horses/${params.gender}/name`}>
          <CardImage name="Karl" age={14} place="Podągi" gender="gelding" />
        </Link>
        <Link href={`/horses/${params.gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mare" />
        </Link>
        <Link href={`/horses/${params.gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mare" />
        </Link>
        <Link href={`/horses/${params.gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mare" />
        </Link>
        <Link href={`/horses/${params.gender}/name`}>
          <CardImage name="Trust me" age={21} place="Podągi" gender="mare" />
        </Link>
        <Link href={`/horses/${params.gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mare" />
        </Link>
        <Link href={`/horses/${params.gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mare" />
        </Link>
        <Link href={`/horses/${params.gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mare" />
        </Link>
        <Link href={`/horses/${params.gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mare" />
        </Link>
        <Link href={`/horses/${params.gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mare" />
        </Link>
        <Link href={`/horses/${params.gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mare" />
        </Link>
        <Link href={`/horses/${params.gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mare" />
        </Link>
        <Link href={`/horses/${params.gender}/name`}>
          <CardImage name="Fado" age={14} place="Podągi" gender="mare" />
        </Link>
      </ul>
    </article>
  );
}
