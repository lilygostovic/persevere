import {
  Footer,
  Nav,
} from '../components';
import { StyledDiv } from '../components/common';

export const AboutPage = () => {
  return (
    <StyledDiv px="100px">
      <Nav active="about" />
      <Footer />
    </StyledDiv>
  );
};
