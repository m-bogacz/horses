"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { ActiveLink } from "@/shared/active-link/ActiveLink";
import { Baby, HomeIcon, InfoIcon } from "lucide-react";

const navList = [
  {
    href: "/",
    label: "Home",
    icon: (className = "h-6 w-6") => <HomeIcon className={className} />,
  },
  {
    href: "/insemination",
    label: "Insemination",
    icon: (className = "h-6 w-6") => <InfoIcon className={className} />,
  },
  {
    href: "/foaling",
    label: "Foaling",
    icon: (className = "h-6 w-6") => <Baby className={className} />,
  },
];

export const Navigation = () => {
  return (
    <>
      <NavigationMenu className="hidden items-center justify-center gap-6 text-sm font-medium lg:flex">
        {navList.map((navItem) => (
          <NavigationMenuItem
            key={navItem.href}
            className="list-none flex items-center  text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            <ActiveLink href={navItem.href} passHref>
              {navItem.label}
            </ActiveLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenu>
      <div className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-around bg-white py-3 shadow-t dark:bg-gray-950 lg:hidden">
        {navList.map((navItem) => (
          <ActiveLink
            key={navItem.href}
            className="flex flex-col items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href={navItem.href}
          >
            {navItem.icon()}
            {navItem.label}
          </ActiveLink>
        ))}
      </div>
    </>
  );
};
