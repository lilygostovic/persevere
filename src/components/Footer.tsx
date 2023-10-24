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
            label={t("footer.facebook.label")}
            link={t("footer.facebook.link")}
            pr="20px"
          />
          <FooterItem
            label={t("footer.instagram.label")}
            link={t("footer.instagram.link")}
          />
        </StyledDiv>
        <FooterItem
          label={t("footer.email.label")}
          link={t("footer.email.link")}
        />
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
