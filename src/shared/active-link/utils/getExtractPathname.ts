import { type Route } from "next";
import { type UrlObjectWithNextRoute } from "../types";

export const getExtractPathname = <T extends string>(
  href: Route<T> | UrlObjectWithNextRoute<T>
) => {
  if (typeof href === "string") {
    return href;
  }
  return href.pathname;
};
