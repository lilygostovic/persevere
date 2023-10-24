import {
  Footer,
  Nav,
} from '../components';
import { StyledDiv } from '../components/common';

export const HomePage = () => {
  return (
    <StyledDiv px="100px">
      <Nav active="home" />
      <Footer />
    </StyledDiv>
  );
};
