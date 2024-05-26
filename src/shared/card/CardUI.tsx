import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

type CardProps = React.ComponentProps<typeof Card> & {
  title: string;
  description: string;
  children?: ReactNode;
};

export function CardUI({
  className,
  title,
  description,
  children,
  ...props
}: CardProps) {
  return (
    <Card className={cn(className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children && children}</CardContent>
    </Card>
  );
}
