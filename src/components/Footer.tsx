import { useTranslation } from "react-i18next";

import { StyledDiv, StyledText } from "./common";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <StyledDiv height="2px" width="100%" bg="black" mt="150px" />
      <StyledDiv display="flex" flexDirection="row">
        <FooterItem
          label={t("instagram.label")}
          link={t("instagram.link")}
          pr="30px"
        />
        <FooterItem label={t("email.label")} link={t("email.link")} />
      </StyledDiv>
    </div>
  );
};

type FooterItemProps = {
  label: string;
  link: string;
  pr?: string;
};

const FooterItem = ({ label, link, pr = "" }: FooterItemProps) => (
  <a
    href={link}
    rel="noreferrer"
    target="_blank"
    style={{ textDecoration: "none" }}
  >
    <StyledText variant="footer" style={{ paddingRight: `${pr}` }}>
      {label}
    </StyledText>
  </a>
);
