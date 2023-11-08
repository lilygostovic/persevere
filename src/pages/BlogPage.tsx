import { useState } from 'react';

import { useTranslation } from 'react-i18next';

import {
  Footer,
  Nav,
  PageHeader,
} from '../components';
import { BlogView } from '../components/BlogView';
import { StyledDiv } from '../components/common';
import { EventDetails } from '../components/EventDetails';
import blogs from '../data/Blogs.json';

export const BlogPage = () => {
  const { t } = useTranslation();

  const [isTinyWindow, setIsTinyWindow] = useState(window.innerWidth < 965);
  const [isSmallWindow, setIsSmallWindow] = useState(window.innerWidth < 1270);
  const checkIsSmallWindow = () => {
    setIsTinyWindow(window.innerWidth < 965);
    setIsSmallWindow(window.innerWidth < 1270);
  };
  window.onresize = checkIsSmallWindow;

  return (
    <StyledDiv px={isSmallWindow ? "10px" : "100px"}>
      <Nav active="blog" isTinyWindow={isTinyWindow} />
      {isTinyWindow && <PageHeader title={t("blog")} />}
      <StyledDiv display="flex" justifyContent="space-between" mb="100px">
        <StyledDiv
          width={isSmallWindow ? (isTinyWindow ? "100%" : "60%") : "68%"}
        >
          <BlogView
            blogs={blogs}
            width={isSmallWindow ? "100%" : "48%"}
            isSmallWindow={isSmallWindow}
          />
        </StyledDiv>
        {!isTinyWindow && <EventDetails />}
      </StyledDiv>
      <Footer />
    </StyledDiv>
  );
};
