import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Time } from "@/shared/card/time/Time";
import React from "react";

export const Information = () => {
  return (
    <article>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-24 md:w-36">Date</TableHead>
            <TableHead className="w-[100px] hidden md:table-cell ">
              Status
            </TableHead>
            <TableHead className="overflow-x-hidden min-w-[200px]">
              Description
            </TableHead>
            <TableHead className="w-[150px] hidden  md:table-cell">
              Who
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-center max-w-md p-0 ">
              <Time from={new Date("2024, 10, 05")} />
            </TableCell>
            <TableCell className="hidden md:table-cell">Finished</TableCell>
            <TableCell>
              The horse go to german dsa dfsaf safa sfas fa f f asf asfasf sa
              fsafs afsf asfas fas fa fs fdfsadsds d sad sa das dsa d
              dasdfasffsdfsdfdsfdsfds Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Sequi repudiandae reprehenderit obcaecati eius
              quis dignissimos illo error ea cupiditate ullam. Distinctio,
              consectetur! Vitae saepe corrupti beatae asperiores hic nam iure.
            </TableCell>
            <TableCell className="hidden  md:table-cell">
              Adrianna Adamowicz
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium text-center p-0 px-1">
              <Time from={new Date("2024, 5, 17")} />
            </TableCell>
            <TableCell className="hidden md:table-cell">Pending</TableCell>

            <TableCell>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              id dolor quibusdam soluta? Dolores officia velit et aut magni
              dolorem quaerat facilis esse eius, asperiores reiciendis, nostrum
              ullam minima. Accusamus!
            </TableCell>
            <TableCell className="hidden md:table-cell">Ada</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </article>
  );
};
