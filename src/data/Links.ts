import { Link } from "../types/Link";

export const links: Array<Link> = [
  {
    displayName: "About",
    route: "about",
    isFirstItem: true,
    isLastItem: false,
  },
  {
    displayName: "Charity Partners",
    route: "charity-partners",
    isFirstItem: false,
    isLastItem: false,
  },
  {
    displayName: "Persevere 2022",
    route: "persevere-2022",
    isFirstItem: false,
    isLastItem: false,
  },
  {
    displayName: "Events (coming soon)",
    route: "events",
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
