import { useState } from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { links } from "../data/Links";
import { StyledDiv, StyledText } from "./common";

export const Nav = () => {
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
          <StyledText variant="title">{t("Per/Severe")}</StyledText>
        </Link>
      </StyledDiv>
      <StyledDiv display="flex" flexDirection="row">
        {links.map((link) => (
          <NavItem
            key={link.route}
            displayName={link.displayName}
            route={link.route}
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
  isFirstItem?: boolean;
  isLastItem?: boolean;
};

const NavItem = ({
  displayName,
  route,
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
          bg={isHovered ? "black" : "white"}
        />
        <StyledText variant="navItem">{displayName}</StyledText>
        <StyledDiv height="2px" width="100%" bg="black" />
      </Link>
    </StyledDiv>
  );
};
