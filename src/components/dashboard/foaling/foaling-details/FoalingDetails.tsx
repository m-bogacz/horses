import React from "react";
import { HorseProfile } from "@/shared/horse-profile/HorseProfile";
import { Time } from "@/shared/card/time/Time";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import Link from "next/link";

export const FoalingDetails = ({ isChild = true }: { isChild?: boolean }) => {
  const foalingDate = new Date(2024, 5, 16);
  const date: DateRange = {
    from: foalingDate,
    to: addDays(foalingDate, 300),
  };

  const name = "No Name";
  const gender = "mare";

  return (
    <Link
      className="rounded-lg  hover:scale-[1.03]  transition-all duration-200 "
      href="/dashboard/foaling-info/foaling-details/1"
    >
      <article className="grid md:grid-cols-6 gap-5 grid-cols-2 md:place-items-center">
        <section>
          <HorseProfile imageSrc="/horse.jpg" name="Kahla" />
        </section>
        <section className="col-span-2 text-center">
          <Time date={date} />
        </section>
        <section>
          <HorseProfile imageSrc="/horse.jpg" name="Sanvaro" />
        </section>
        <section className="col-start-1 text-center md:col-start-5">
          <p>{"=>"}</p>
        </section>
        <section className="col-start-2 md:col-start-6">
          {isChild ? (
            <div className="flex flex-col items-end">
              <HorseProfile imageSrc="" name={`${name} `} />
              <span className="text-sm">({gender})</span>
            </div>
          ) : (
            <span className="flex justify-center">?</span>
          )}
        </section>
      </article>
    </Link>
  );
};
