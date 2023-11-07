import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { links } from '../../data/Links';
import { Pages } from '../../types/Pages';
import {
  PageButton,
  StyledDiv,
  StyledText,
} from '../common';

const SIDE_WIDTH = "33";

type FullNavProps = {
  active: Pages;
};

export const FullNav = ({active}: FullNavProps) => {
    const { t } = useTranslation()

    return (
      <StyledDiv mb="50px">
        <StyledDiv
          display="flex"
          justifyContent="space-between"
          mt="20px"
          mb="40px"
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <StyledText variant="title">{t("title")}</StyledText>
          </Link>

          <StyledDiv
            width={`${SIDE_WIDTH}%`}
            display="flex"
            justifyContent="space-between"
          >
            <StyledDiv display="flex" flexDirection="column">
              <StyledText variant="paragraphMedium">
                {t("address.line1")}
              </StyledText>
              <StyledText variant="paragraphMedium">
                {t("address.line2")}
              </StyledText>
              <StyledText variant="paragraphMedium">
                {t("address.line3")}
              </StyledText>
            </StyledDiv>
            <StyledDiv>
              <a
                href={t("instagram.link")}
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <StyledText
                  variant="paragraphMedium"
                  style={{ paddingRight: `15px` }}
                >
                  {t("instagram.label")}
                </StyledText>
              </a>
              <a
                href={t("email.link")}
                rel="noreferrer"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <StyledText variant="paragraphMedium">
                  {t("email.label")}
                </StyledText>
              </a>
            </StyledDiv>
          </StyledDiv>
        </StyledDiv>
        <StyledDiv display="flex" justifyContent="space-between">
          <StyledDiv display="flex" flexDirection="row">
            {links.map((link) => (
              <PageButton
                key={link.route}
                displayName={link.displayName}
                route={link.route}
                isActive={link.route === active}
                isFirstItem={link.isFirstItem}
                isLastItem={link.isLastItem}
                openInNewWindow={link.openInNewWindow}
              />
            ))}
          </StyledDiv>
          <StyledDiv width={`${SIDE_WIDTH}%`}>
            <StyledDiv height="2px" width="100%" bg="white" />
            <StyledText variant="navItem">{t("upcoming.label")}</StyledText>
            <StyledDiv height="2px" width="100%" bg="black" />
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    );
}