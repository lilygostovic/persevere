import { Pages } from "../../types/Pages";
import { FullNav } from "./FullNav";
import { TinyWindowNav } from "./TinyWindowNav";

type NavProps = {
  active: Pages;
  isTinyWindow: boolean;
};

export const Nav = ({ active, isTinyWindow }: NavProps) =>
  isTinyWindow ? (
    <TinyWindowNav active={active} />
  ) : (
    <FullNav active={active} />
  );
