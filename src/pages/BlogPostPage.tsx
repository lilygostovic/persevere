import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { Footer, Nav } from "../components";
import { StyledDiv, StyledText } from "../components/common";
import { EventDetails } from "../components/EventDetails";
import blogs from "../data/Blogs.json";

export const BlogPostPage = () => {
  const { t } = useTranslation();

  const { id } = useParams();
  const blogPost = blogs.find((blogPost) => blogPost.id === id);

  if (!blogPost) {
    return <div>Not Found...</div>;
  }

  return (
    <StyledDiv px="100px">
      <Nav active="blog" />
      <StyledDiv display="flex" justifyContent="space-between" mb="100px">
        <StyledDiv width="68%">
          <StyledText variant="blogPostTitle">{blogPost.title}</StyledText>
          <br />
          <img
            src={require(`../images/${id}.jpg`)}
            height="300px"
            width="100%"
            alt="blog post cover"
            style={{ objectFit: "cover", marginTop: "20px" }}
          />
          {blogPost.subtitle && (
            <StyledDiv>
              <br />
              <StyledText variant="blogPostSubtitle">
                {blogPost.subtitle}
              </StyledText>
            </StyledDiv>
          )}
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
        <EventDetails />
      </StyledDiv>
      <Footer />
    </StyledDiv>
  );
};
