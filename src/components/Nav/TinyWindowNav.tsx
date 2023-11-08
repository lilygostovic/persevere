import { useState } from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { links } from "../../data/Links";
import { Pages } from "../../types/Pages";
import { StyledDiv, StyledText } from "../common";

type TinyWindowNavProps = {
  active: Pages;
};

export const TinyWindowNav = ({ active }: TinyWindowNavProps) => {
  const { t } = useTranslation();

  const [showNav, setShowNav] = useState(false);

  const toggleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <StyledDiv
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        my="10px"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <StyledText variant="titleSmall">{t("title")}</StyledText>
        </Link>
        <Menu toggleShowNav={toggleShowNav} />
      </StyledDiv>
      <StyledDiv
        height="2px"
        width="100%"
        bg="black"
        mb={showNav ? "0px" : "30px"}
      />
      {showNav && (
        <StyledDiv width="100%" height="200px" mb="50px">
          {links.map((link) =>
            link.openInNewWindow ? (
              <>
                <a
                  href={`${link.route}`}
                  rel="noreferrer"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <>
                    <StyledText variant="navItem">
                      {link.displayName}
                    </StyledText>
                  </>
                </a>
                <StyledDiv height="2px" width="100%" bg="black" />
              </>
            ) : (
              <>
                <Link
                  to={`/${link.route}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <div>
                    <StyledText variant="navItem">
                      {link.displayName}
                    </StyledText>
                  </div>
                </Link>
                <StyledDiv height="2px" width="100%" bg="black" />
              </>
            )
          )}
        </StyledDiv>
      )}
    </>
  );
};

type MenuProps = {
  toggleShowNav: () => void;
};

const Menu = ({ toggleShowNav }: MenuProps) => (
  <StyledDiv
    display="flex"
    flexDirection="column"
    justifyContent="space-around"
    width="25px"
    height="25px"
    my="5px"
    onClick={toggleShowNav}
  >
    <StyledDiv height="2px" width="100%" bg="black" />
    <StyledDiv height="2px" width="100%" bg="black" />
    <StyledDiv height="2px" width="100%" bg="black" />
  </StyledDiv>
);
