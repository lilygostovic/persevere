import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import {
  Footer,
  Nav,
} from '../components';
import {
  StyledDiv,
  StyledText,
} from '../components/common';
import { EventDetails } from '../components/EventDetails';
import blogs from '../data/Blogs.json';

export const BlogPostPage = () => {
  const { t } = useTranslation();

  const [isTinyWindow, setIsTinyWindow] = useState(window.innerWidth < 965);
  const [isSmallWindow, setIsSmallWindow] = useState(window.innerWidth < 1150);
  const checkIsSmallWindow = () => {
    setIsTinyWindow(window.innerWidth < 965);
    setIsSmallWindow(window.innerWidth < 1150);
  };
  window.onresize = checkIsSmallWindow;

  window.scrollTo(0,0);

  const { id } = useParams();
  const blogPost = blogs.find((blogPost) => blogPost.id === id);

  if (!blogPost) {
    return <div>Not Found...</div>;
  }

  return (
    <StyledDiv px={isSmallWindow ? "10px" : "100px"}>
      <Nav active="blog" isTinyWindow={isTinyWindow} />
      <StyledDiv display="flex" justifyContent="space-between" mb="100px">
        <StyledDiv width={isTinyWindow ? "100%" : "60%"}>
          <StyledText variant="blogPostTitle">{blogPost.title}</StyledText>
          <br />
          <img
            src={require(`../images/${id}.jpg`)}
            height="300px"
            width="100%"
            alt="blog post cover"
            style={{ objectFit: "cover", marginTop: "20px" }}
          />
          <br />
          <StyledText variant="blogPostDetails">
            {t("blogPost.authorLabel")}
            {blogPost.author}
          </StyledText>
          <br />
          <StyledText variant="blogPostDetails">{blogPost.date}</StyledText>
          <br />
          {blogPost.body.map((paragraph) => (
            <>
              <br />
              <StyledText variant="blogPostBody">{paragraph}</StyledText>
              <br />
            </>
          ))}
        </StyledDiv>
        {!isTinyWindow && <EventDetails />}
      </StyledDiv>
      <Footer />
    </StyledDiv>
  );
};
