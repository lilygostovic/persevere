import {
  Footer,
  Nav,
} from '../components';
import { BlogView } from '../components/BlogView';
import { StyledDiv } from '../components/common';
import { EventDetails } from '../components/EventDetails';
import blogs from '../data/Blogs.json';

export const BlogPage = () => {
  return (
    <StyledDiv px="100px">
      <Nav active="blog" />
      <StyledDiv display="flex" justifyContent="space-between" mb="100px">
        <StyledDiv width="68%">
        <BlogView blogs={blogs} />
        </StyledDiv>
        <EventDetails />
      </StyledDiv>
      <Footer />
    </StyledDiv>
  );
};
