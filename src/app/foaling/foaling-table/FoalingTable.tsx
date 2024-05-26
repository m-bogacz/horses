"use client";

import React from "react";
import { Foaling, columns } from "./columns";
import { DataTable } from "@/shared/data-table/DataTable";

const foalings: Foaling[] = [
  {
    id: "1",
    mare: "Kahla",
    mareAvatar: "/horse.jpg",
    status: "success",
    conceptionDate: new Date("2023-08-15"),
    dueDate: new Date("2024-06-15"),
    stallion: "Thunder",
    stallionAvatar: "/horse.jpg",
    foalingDate: new Date("2024-06-20"),
    foal: "Storm",
    foalAvatar: "/horse.jpg",
  },
  {
    id: "2",
    mare: "Chervisa",
    mareAvatar: "/horse.jpg",
    status: "pending",
    conceptionDate: new Date("2023-07-10"),
    dueDate: new Date("2024-05-10"),
    stallion: "Lightning",
    stallionAvatar: "/horse.jpg",
    foalingDate: null,
    foal: "",
    foalAvatar: "",
  },
  {
    id: "2",
    mare: "Luna",
    mareAvatar: "/horse.jpg",
    status: "pending",
    conceptionDate: new Date("2023-07-10"),
    dueDate: new Date("2024-05-10"),
    stallion: "Lightning",
    stallionAvatar: "/horse.jpg",
    foalingDate: null,
    foal: "",
    foalAvatar: "",
  },
];

export const FoalingTable = async () => {
  return <DataTable columns={columns} data={foalings} />;
};
