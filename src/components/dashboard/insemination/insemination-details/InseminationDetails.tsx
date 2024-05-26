import React from "react";
import { HorseProfile } from "@/shared/horse-profile/HorseProfile";
import Link from "next/link";

export const InseminationDetails = () => {
  return (
    <Link
      className="rounded-lg  hover:scale-[1.03] transition-all duration-200 "
      href="/dashboard/foaling-info/foaling-details/1"
    >
      <article className="grid md:grid-cols-4 gap-5 grid-cols-2 md:place-items-center p-2">
        <section>
          <HorseProfile imageSrc="/horse.jpg" name="Kahla" />
        </section>

        <section className="text-center">
          <p>+</p>
        </section>

        <section>
          <HorseProfile imageSrc="/horse.jpg" name="Sanvaro" />
        </section>

        <section className="text-center">
          <p>?</p>
        </section>
      </article>
    </Link>
  );
};
