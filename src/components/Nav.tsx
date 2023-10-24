import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { links } from "../data/Links";
import { StyledDiv } from "./common/StyledDiv";
import { StyledText } from "./common/StyledText";

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
          <Link
            key={link.route}
            to={`/${link.route}`}
            style={{
              margin: "0px 5px",
              padding: "0px 5px",
              textDecoration: "none",
              color: "black",
            }}
          >
            <StyledText variant="navItem">{link.displayName}</StyledText>
            <StyledDiv height="2px" width="100%" bg="black" />
          </Link>
        ))}
      </StyledDiv>
    </div>
  );
};
