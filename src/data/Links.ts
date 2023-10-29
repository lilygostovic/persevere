import { Link } from "../types/Link";

export const links: Array<Link> = [
  {
    displayName: "About",
    route: "about",
    isFirstItem: true,
    isLastItem: false,
  },
  {
    displayName: "Persevere 2022",
    route: "persevere-2022",
    isFirstItem: false,
    isLastItem: false,
  },
  {
    displayName: "Tickets",
    route: "tickets",
    isFirstItem: false,
    isLastItem: false,
  },
  {
    displayName: "Blog",
    route: "blog",
    isFirstItem: false,
    isLastItem: true,
  },
];
