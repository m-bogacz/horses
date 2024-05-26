"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InseminationDetails } from "./insemination-details/InseminationDetails";
import { Separator } from "@/components/ui/separator";
import { DateRange } from "react-day-picker";
import { Time } from "@/shared/card/time/Time";

export const Insemination = () => {
  const date: DateRange = {
    from: new Date(2024, 0, 20),
  };

  return (
    <Card className="rounded-xl border text-card-foreground shadow lg:col-span-3 col-span-5">
      <CardHeader className="flex flex-row items-baseline justify-between border-b mb-2 pb-5">
        <CardTitle className="font-semibold  text-sm md:text-lg tracking-tight">
          Insemination
        </CardTitle>
        <section className="ml-auto">
          <Time date={date} />
        </section>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 mt-5">
        <InseminationDetails />
        <Separator className="my-1" />

        <InseminationDetails />
        <Separator className="my-1" />

        <InseminationDetails />
        <Separator className="my-1" />

        <InseminationDetails />
      </CardContent>
    </Card>
  );
};
