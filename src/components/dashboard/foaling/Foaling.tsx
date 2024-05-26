import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Foaling = ({ children }: { children?: ReactNode }) => {
  return (
    <Card className="rounded-xl border text-card-foreground shadow h-full col-span-5">
      <CardHeader className="flex flex-row items-baseline justify-between border-b mb-2 pb-5">
        <CardTitle className="font-semibold leading-none text-sm md:text-lg flex justify-between tracking-tight">
          Foaling
        </CardTitle>
        <time className="font-normal md:p-2 p-1 text-[12px]  md:text-sm border-2 rounded-md">
          2024
        </time>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 mt-5 mx-0 ">
        {children}
      </CardContent>
    </Card>
  );
};
