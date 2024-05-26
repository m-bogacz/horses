import React from "react";
import { Navigation } from "@/components/header/navigation/Navigation";
import { Search } from "@/components/header/search/Search";
import { Logo } from "./logo/Logo";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between  bg-white px-4 py-3 shadow-sm dark:bg-gray-950 sm:px-6 md:px-8 lg:px-10">
      <Logo />
      <Navigation />
      <Search />
    </header>
  );
};
