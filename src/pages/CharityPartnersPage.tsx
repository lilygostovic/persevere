import {
  Footer,
  Nav,
} from '../components';
import { StyledDiv } from '../components/common';

export const CharityPartnersPage = () => {
  return (
    <StyledDiv px="100px">
      <Nav active="charity-partners" />
      <Footer />
    </StyledDiv>
  );
};
