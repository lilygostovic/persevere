import { useTranslation } from "react-i18next";

import { StyledDiv, StyledText } from "./common";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <StyledDiv height="2px" width="100%" bg="black" mt="100px" />
      <StyledDiv
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <StyledDiv>
          <FooterItem
            label={t("facebook.label")}
            link={t("facebook.link")}
            pr="20px"
          />
          <FooterItem label={t("instagram.label")} link={t("instagram.link")} />
        </StyledDiv>
        <FooterItem label={t("email.label")} link={t("email.link")} />
      </StyledDiv>
    </>
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
