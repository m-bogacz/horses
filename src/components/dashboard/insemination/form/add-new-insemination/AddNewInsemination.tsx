import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddNewInseminationForm } from "./add-new-insemination-form/AddNewInseminationForm";

export const AddNewInsemination = ({ name }: { name?: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add insemination</Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-md  md:h-4/6">
        <DialogHeader>
          <DialogTitle>Add insemination</DialogTitle>
          <DialogDescription>
            Here you can add a Mare and a Stallion for insemination. Click save
            when you are done.
          </DialogDescription>
        </DialogHeader>
        <AddNewInseminationForm name={name} />
      </DialogContent>
    </Dialog>
  );
};
