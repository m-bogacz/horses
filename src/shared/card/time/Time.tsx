import React from "react";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

type TimeProps =
  | {
      date: DateRange;
      from?: undefined;
      to?: undefined;
    }
  | {
      date?: undefined;
      from: DateRange["from"] | number;
      to?: DateRange["to"];
    };

export const Time = ({ from, to, date }: TimeProps) => {
  const dateFrom = date ? date.from : from;
  const dateTo = date ? date.to : to;

  return (
    <section className="font-normal md:p-2 p-1 text-[12px]  md:text-sm border-2 rounded-md">
      {dateFrom ? (
        dateTo ? (
          <>
            {format(dateFrom, "LLL dd, y")} - {format(dateTo, "LLL dd, y")}
          </>
        ) : (
          <>{format(dateFrom, "LLL dd, y")}</>
        )
      ) : (
        <span>-</span>
      )}
    </section>
  );
};
