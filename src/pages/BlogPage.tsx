import {
  Footer,
  Nav,
} from '../components';
import { StyledDiv } from '../components/common';

export const BlogPage = () => {
  return (
    <StyledDiv px="100px">
      <Nav active="blog" />
      <Footer />
    </StyledDiv>
  );
};
