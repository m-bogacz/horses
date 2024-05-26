import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { HorseProfile } from "@/shared/horse-profile/HorseProfile";

export type Foaling = {
  id: string;
  mare: string;
  mareAvatar: string;
  status: "pending" | "success" | "failed";
  conceptionDate: Date;
  dueDate: Date;

  stallion: string;
  stallionAvatar: string;
  foalingDate: Date | null;
  foal: string;
  foalAvatar: string;
};

export const columns: ColumnDef<Foaling>[] = [
  {
    accessorKey: "mare",
    header: "Mare",
    cell: ({ row, cell }) => (
      <HorseProfile
        name={row.getValue("mare")}
        imageSrc={cell.row.original.mareAvatar}
      />
    ),
  },
  {
    accessorKey: "stallion",
    header: "Stallion",
    cell: ({ row, cell }) => (
      <HorseProfile
        name={row.getValue("stallion")}
        imageSrc={cell.row.original.stallionAvatar}
      />
    ),
  },
  {
    accessorKey: "conceptionDate",
    header: "Conception Date",
    cell: ({ row }) => (
      <span>{format(row.getValue("conceptionDate"), "LLL dd, y")}</span>
    ),
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: ({ row }) => (
      <span>{format(row.getValue("dueDate"), "LLL dd, y")}</span>
    ),
  },

  {
    accessorKey: "foalingDate",
    header: "Foaling Date",
    cell: ({ row }) => {
      "use client";
      const isFoaled = row.getValue("foalingDate");

      return (
        <span className="text-center">
          {isFoaled
            ? format(row.getValue("foalingDate"), "LLL dd, y")
            : "- - - "}
        </span>
      );
    },
  },

  {
    accessorKey: "foal",
    header: "Foal",
    cell: ({ cell }) => {
      const name = cell.row.original.foal;
      return (
        <HorseProfile
          name={name ? name : "No foal yet"}
          imageSrc={cell.row.original.foalAvatar}
        />
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
