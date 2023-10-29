import { useTranslation } from "react-i18next";

import { Footer, Nav } from "../components";
import { BlogView } from "../components/BlogView";
import { PageButton, StyledDiv, StyledText } from "../components/common";
import { EventDetails } from "../components/EventDetails";
import blogs from "../data/Blogs.json";

export const HomePage = () => {
  const { t } = useTranslation();
  const recentBlogs = blogs.slice(Math.max(blogs.length - 3));
  return (
    <StyledDiv px="100px">
      <Nav active="home" />
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
      <BlogView blogs={recentBlogs} />
      <Footer />
    </StyledDiv>
  );
};
