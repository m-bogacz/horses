import React from "react";
import { StatisticsCardsList } from "./statistics-cards-list/StatisticsCardsList";
import { Insemination } from "./insemination/Insemination";
import { Foaling } from "./foaling/Foaling";

import { FoalingDetails } from "./foaling/foaling-details/FoalingDetails";
import { Separator } from "../ui/separator";

export const Dashboard = () => {
  return (
    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight md:ml-5 my-5">
        Dashboard
      </h2>
      <StatisticsCardsList />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8 h-fit">
        <Foaling>
          <FoalingDetails isChild={false} />
          <Separator className="my-1" />
          <FoalingDetails />
          <Separator className="my-1" />

          <FoalingDetails />
          <Separator className="my-1" />

          <FoalingDetails />
        </Foaling>
        <Insemination />
      </div>
    </div>
  );
};
