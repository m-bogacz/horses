import Image from "next/image";

import { SelectItem } from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type SelectedHorseProps = {
  value: string;
  name: string;
  src: string;
};

export const SelecteHorseItem = ({ value, name, src }: SelectedHorseProps) => {
  return (
    <SelectItem value={value}>
      <article className="flex items-center gap-2">
        <Avatar>
          <AvatarImage asChild src={src}>
            <Image
              src={src}
              alt={`Avatar of ${name}`}
              width={140}
              height={140}
              className="object-cover "
            />
          </AvatarImage>
          <AvatarFallback>{name[0].toUpperCase()}</AvatarFallback>
        </Avatar>

        <p className="text-sm font-medium leading-none">{name}</p>
      </article>
    </SelectItem>
  );
};
