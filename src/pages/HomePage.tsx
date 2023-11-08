import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import {
  Footer,
  Nav,
} from '../components';
import { BlogView } from '../components/BlogView';
import {
  PageButton,
  StyledDiv,
  StyledText,
} from '../components/common';
import { EventDetails } from '../components/EventDetails';
import blogs from '../data/Blogs.json';

export const HomePage = () => {
  const { t } = useTranslation();

  const [isTinyWindow, setIsTinyWindow] = useState(window.innerWidth < 965);
  const [isSmallWindow, setIsSmallWindow] = useState(window.innerWidth < 1150);
  const checkIsSmallWindow = () => {
    setIsTinyWindow(window.innerWidth < 965);
    setIsSmallWindow(window.innerWidth < 1150);
  };
  window.onresize = checkIsSmallWindow;

  const recentBlogs = blogs.slice(0, 3);

  return (
    <StyledDiv px={isSmallWindow ? "10px" : "100px"}>
      <Nav active="home" isTinyWindow={isTinyWindow} />
      <StyledDiv display="flex" justifyContent="space-between" mb="100px">
        <StyledDiv width={isTinyWindow ? "100%" : "68%"}>
          <StyledDiv width={isTinyWindow ? "100%" : "80%"}>
            <img
              src={require(`../images/home-page-art.jpg`)}
              alt="Recent artwork by our collaborative artists"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </StyledDiv>
          <StyledText variant="caption">
            {t("homepage.imageCaption")}
          </StyledText>
        </StyledDiv>
        {!isTinyWindow && <EventDetails />}
      </StyledDiv>
      <StyledDiv width="45px">
        <PageButton
          displayName="Blog"
          route="blog"
          isActive={false}
          isFirstItem
        />
      </StyledDiv>
      <BlogView
        blogs={recentBlogs}
        width={isTinyWindow ? "100%" : "33%"}
        isSmallWindow={isTinyWindow}
      />
      <Footer />
    </StyledDiv>
  );
};
