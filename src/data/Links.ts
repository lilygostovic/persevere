import { Link } from "../types/Link";

export const links: Array<Link> = [
  {
    displayName: "Blog",
    route: "blog",
    isFirstItem: true,
    isLastItem: false,
  },
  {
    displayName: "Artists",
    route: "artists",
    isFirstItem: false,
    isLastItem: false,
  },
  {
    displayName: "About",
    route: "about",
    isFirstItem: false,
    isLastItem: true,
  },
];
