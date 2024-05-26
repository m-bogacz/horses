import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { ArrowBigRight, BarChart3 } from "lucide-react";
import { CardListSlug } from "../../types";

type CardProps = {
  title: string;
  description: string;
  slug: CardListSlug;
};

export const StatisticsCard = ({ title, description, slug }: CardProps) => {
  return (
    <Card className={"rounded-xl border bg-card text-card-foreground shadow"}>
      <CardHeader>
        <CardTitle className="tracking-wide text-sm md:text-lg font-medium flex justify-between">
          {title}
          <BarChart3 size={20} strokeWidth={0.75} />
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild className="group p-2 rounded-lg">
          <Link href={`/horses/${slug}`}>
            show more{" "}
            <ArrowBigRight
              size={20}
              className="group-hover:translate-x-2 ease-in delay-100 transition-all"
            />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
