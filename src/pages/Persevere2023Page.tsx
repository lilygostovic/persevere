import { useState } from "react";

import { useTranslation } from "react-i18next";
import { styled } from "styled-components";

import { Footer, Nav, PageHeader } from "../components";
import { StyledDiv, StyledText } from "../components/common";
import { EventDetails } from "../components/EventDetails";
import artists from "../data/artists/2023.json";

const LineBreak = styled.div`
  height: 20px;
`;

export const Persevere2023Page = () => {
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
      <Nav active="persevere-2023" isTinyWindow={isTinyWindow} />
      {isTinyWindow && <PageHeader title={t("persevere2023.title")} />}
      <StyledDiv display="flex" justifyContent="space-between" mb="100px">
        <StyledDiv width={isTinyWindow ? "100%" : "63%"}>
          <StyledText variant="paragraphMedium">
            {t("persevere2022.readMore")}
          </StyledText>
          <LineBreak />
          {artists.map((artist) =>
            isTinyWindow ? (
              <StyledDiv py="20px" pb="40px">
                <a
                  href={artist.link}
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <StyledText variant="artistName">{artist.name}</StyledText>
                </a>
                <StyledDiv my="10px" display="flex" height="40vh" width="50%">
                  <img
                    src={require(`../images/artists/2023/${artist.img}.jpg`)}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt="artist headshot"
                  />
                </StyledDiv>
                <StyledText
                  variant="paragraphMedium"
                  textAlign="justify"
                  mt="10px"
                  pr="40px"
                >
                  {artist.description}
                </StyledText>
              </StyledDiv>
            ) : (
              <StyledDiv py="20px" pb="100px">
                <a
                  href={artist.link}
                  rel="noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <StyledText variant="artistName">{artist.name}</StyledText>
                </a>
                <StyledDiv height="10px" />
                <StyledDiv display="flex" width="100%">
                  <StyledText pr="40px" variant="paragraphMedium">
                    {artist.description}
                  </StyledText>
                  <StyledDiv
                    display="flex"
                    justifyContent="center"
                    height="300px"
                  >
                    <img
                      src={require(`../images/artists/2023/${artist.img}.jpg`)}
                      style={{ height: "100%", objectFit: "cover" }}
                      alt="artist headshot"
                    />
                  </StyledDiv>
                </StyledDiv>
              </StyledDiv>
            )
          )}
        </StyledDiv>
        {!isTinyWindow && <EventDetails />}
      </StyledDiv>
      <Footer />
    </StyledDiv>
  );
};
