import { useState } from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { links } from "../data/Links";
import { Pages } from "../types/Pages";
import { StyledDiv, StyledText } from "./common";

type NavProps = {
  active: Pages;
};

export const Nav = ({ active }: NavProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <StyledDiv mt="20px" mb="40px">
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <StyledText variant="title">{t("title")}</StyledText>
        </Link>
      </StyledDiv>
      <StyledDiv display="flex" flexDirection="row">
        {links.map((link) => (
          <NavItem
            key={link.route}
            displayName={link.displayName}
            route={link.route}
            isActive={link.route === active}
            isFirstItem={link.isFirstItem}
            isLastItem={link.isLastItem}
          />
        ))}
      </StyledDiv>
    </div>
  );
};

type NavItemProps = {
  displayName: string;
  route: string;
  isActive: boolean;
  isFirstItem?: boolean;
  isLastItem?: boolean;
};

const NavItem = ({
  displayName,
  route,
  isActive,
  isFirstItem = false,
  isLastItem = false,
}: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledDiv
      paddingLeft={isFirstItem ? "0px" : "12px"}
      paddingRight={isLastItem ? "0px" : "12px"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/${route}`}
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <StyledDiv
          height="2px"
          width="100%"
          bg={isHovered || isActive ? "black" : "white"}
        />
        <StyledText variant="navItem">{displayName}</StyledText>
        <StyledDiv height="2px" width="100%" bg="black" />
      </Link>
    </StyledDiv>
  );
};
