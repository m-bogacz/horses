"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { HorseProfile } from "@/shared/horse-profile/HorseProfile";
import Image from "next/image";
import { Calendar } from "@/components/ui/calendar";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { InseminationSchema } from "./utils/schema";
import { z } from "zod";
import { SelecteHorseItem } from "./select-horse-item/SelectHorseItem";

type InseminationFormSchema = z.infer<typeof InseminationSchema>;

export const AddNewInseminationForm = ({ name }: { name?: string }) => {
  const form = useForm<InseminationFormSchema>({
    resolver: zodResolver(InseminationSchema),
    defaultValues: {
      mare: name ? name : "",
    },
  });

  const onSubmit = (data: InseminationFormSchema) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="h-full space-y-6">
        <FormField
          control={form.control}
          name="inseminationDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of insemination</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal h-12",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date of insemination</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mare"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mare</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={name ? name : field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a mare" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelecteHorseItem
                      value="vincenta"
                      name="Vincenta"
                      src="/horse.jpg"
                    />
                    <SelecteHorseItem
                      value="Kahla"
                      name="Kahla"
                      src="/horse.jpg"
                    />
                    <SelecteHorseItem
                      value="isola"
                      name="Isola"
                      src="/horse.jpg"
                    />
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stallions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stallions</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a Stallions" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Sanvaro">Sanvaro</SelectItem>
                    <SelectItem value="Chervino">Chervino</SelectItem>
                    <SelectItem value="Charedo">Charedo</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Save changes</Button>
      </form>
    </Form>
  );
};
