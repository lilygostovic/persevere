import { useState } from "react";

import { useTranslation } from "react-i18next";

import { Footer, Nav } from "../components";
import { StyledDiv, StyledText } from "../components/common";
import { EventDetails } from "../components/EventDetails";

export const AboutPage = () => {
  const { t } = useTranslation();

  const [isTinyWindow, setIsTinyWindow] = useState(window.innerWidth < 965);
  const [isSmallWindow, setIsSmallWindow] = useState(window.innerWidth < 1150);
  const checkIsSmallWindow = () => {
    setIsTinyWindow(window.innerWidth < 965);
    setIsSmallWindow(window.innerWidth < 1150);
  };
  window.onresize = checkIsSmallWindow;

  return (
    <StyledDiv
      px={isSmallWindow ? "10px" : "100px"}
      height="99vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <div>
        <Nav active="about" isTinyWindow={isTinyWindow} />
        <StyledDiv display="flex" justifyContent="space-between" mb="100px">
          <StyledDiv width={isTinyWindow ? "100%" : "60%"}>
            <StyledText variant="paragraphMedium">
              {t("about.paragraph1")}
            </StyledText>
            <br />
            <br />
            <StyledText variant="paragraphMedium">
              {t("about.paragraph2")}
            </StyledText>
          </StyledDiv>
          {!isTinyWindow && <EventDetails />}
        </StyledDiv>
      </div>
      <Footer />
    </StyledDiv>
  );
};
