import { type UrlObject } from "url";
import { type Route } from "next";

export interface UrlObjectWithNextRoute<T extends string> extends UrlObject {
  pathname: Route<T>;
}
