import {
  Footer,
  Nav,
} from '../components';
import { StyledDiv } from '../components/common';

export const TicketsPage = () => {
  return (
    <StyledDiv px="100px">
      <Nav active="tickets" isTinyWindow={false} />
      <Footer />
    </StyledDiv>
  );
};
