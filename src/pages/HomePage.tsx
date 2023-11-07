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
        <StyledDiv width="68%">
          <StyledDiv height="500px" width="85%" bg="black" />
          <StyledText variant="caption">
            {t("homepage.imageCaption")}
          </StyledText>
        </StyledDiv>
        <EventDetails />
      </StyledDiv>
      <StyledDiv width="57px">
        <PageButton displayName="Blog" route="blog" isActive={false} />
      </StyledDiv>
      <BlogView blogs={recentBlogs} width="410px" />
      <Footer />
    </StyledDiv>
  );
};
