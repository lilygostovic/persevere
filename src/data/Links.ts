import { Link } from "../types/Link";

export const links: Array<Link> = [
  {
    displayName: "About",
    route: "about",
    isFirstItem: true,
    isLastItem: false,
    openInNewWindow: false,
  },
  {
    displayName: "Persevere 2022",
    route: "persevere-2022",
    isFirstItem: false,
    isLastItem: false,
    openInNewWindow: false,
  },
  {
    displayName: "Persevere 2023",
    route: "persevere-2023",
    isFirstItem: false,
    isLastItem: false,
    openInNewWindow: false,
  },
  {
    displayName: "Tickets",
    route:
      "https://www.zeffy.com/en-CA/ticketing/79b5c7db-54a2-413d-a3d2-10a6c1a3bab5",
    isFirstItem: false,
    isLastItem: false,
    openInNewWindow: true,
  },
  {
    displayName: "Blog",
    route: "blog",
    isFirstItem: false,
    isLastItem: true,
    openInNewWindow: false,
  },
];
