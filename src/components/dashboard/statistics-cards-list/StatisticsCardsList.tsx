import React from "react";
import { StatisticsCard } from "./statistics-card/StatisticsCard";
import { dashboardCardList } from "../constant";

export const StatisticsCardsList = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {dashboardCardList.map((card) => {
        return (
          <StatisticsCard
            key={card.id}
            description={card.description}
            title={card.title}
            slug={card.slug}
          />
        );
      })}
    </div>
  );
};
