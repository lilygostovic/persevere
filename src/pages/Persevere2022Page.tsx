import { useState } from "react";

import { useTranslation } from "react-i18next";
import { styled } from "styled-components";

import { Footer, Nav, PageHeader } from "../components";
import { StyledDiv, StyledText } from "../components/common";
import { EventDetails } from "../components/EventDetails";
import artists from "../data/artists/2022.json";

const LineBreak = styled.div`
  height: 20px;
`;

export const Persevere2022Page = () => {
  const { t } = useTranslation();

  const [isTinyWindow, setIsTinyWindow] = useState(window.innerWidth < 965);
  const [isSmallWindow, setIsSmallWindow] = useState(window.innerWidth < 1150);
  const checkIsSmallWindow = () => {
    setIsTinyWindow(window.innerWidth < 965);
    setIsSmallWindow(window.innerWidth < 1150);
  };
  window.onresize = checkIsSmallWindow;

  return (
    <StyledDiv px={isSmallWindow ? "10px" : "100px"}>
      <Nav active="persevere-2022" isTinyWindow={isTinyWindow} />
      {isTinyWindow && <PageHeader title={t("persevere2022.title")} />}
      <StyledDiv display="flex" justifyContent="space-between" mb="100px">
        <StyledDiv width={isTinyWindow ? "100%" : "60%"}>
          <StyledText variant="paragraphMedium">
            {t("persevere2022.openingWords")}
          </StyledText>
          <StyledDiv width="100%">
            <img
              src={require("../images/persevere-2022.jpg")}
              height="100%"
              width="100%"
              style={{
                objectFit: "cover",
                marginTop: "30px",
                marginBottom: "50px",
              }}
              alt=""
            />
          </StyledDiv>
          <StyledText variant="paragraphMedium">
            {t("persevere2022.readMore")}
          </StyledText>
          <LineBreak />
          {artists.map((artist) => (
            <StyledDiv py="20px">
              {artist.link !== "" ? (
                <a
                  href={artist.link}
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <StyledText variant="artistName">{artist.name}</StyledText>
                </a>
              ) : (
                <StyledText variant="artistName">{artist.name}</StyledText>
              )}
              <StyledDiv height="10px" />
              <StyledText variant="paragraphMedium">
                {artist.description}
              </StyledText>
            </StyledDiv>
          ))}
        </StyledDiv>
        {!isTinyWindow && <EventDetails />}
      </StyledDiv>
      <Footer />
    </StyledDiv>
  );
};
