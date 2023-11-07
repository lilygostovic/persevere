import { useState } from "react";

import { Footer, Nav } from "../components";
import { BlogView } from "../components/BlogView";
import { StyledDiv } from "../components/common";
import { EventDetails } from "../components/EventDetails";
import blogs from "../data/Blogs.json";

export const BlogPage = () => {
  const [isTinyWindow, setIsTinyWindow] = useState(window.innerWidth < 965);
  const [isSmallWindow, setIsSmallWindow] = useState(window.innerWidth < 1150);
  const checkIsSmallWindow = () => {
    setIsTinyWindow(window.innerWidth < 965);
    setIsSmallWindow(window.innerWidth < 1150);
  };
  window.onresize = checkIsSmallWindow;

  return (
    <StyledDiv px={isSmallWindow ? "10px" : "100px"}>
      <Nav active="blog" isTinyWindow={isTinyWindow} />
      <StyledDiv display="flex" justifyContent="space-between" mb="100px">
        <StyledDiv width={isTinyWindow ? "100%" : "60%"}>
          <BlogView blogs={blogs} centred={true} />
        </StyledDiv>
        {!isTinyWindow && <EventDetails />}
      </StyledDiv>
      <Footer />
    </StyledDiv>
  );
};
