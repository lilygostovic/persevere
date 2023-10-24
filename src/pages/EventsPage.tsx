import {
  Footer,
  Nav,
} from '../components';
import { StyledDiv } from '../components/common';

export const EventsPage = () => {
  return (
    <StyledDiv px="100px">
      <Nav active="events" />
      <Footer />
    </StyledDiv>
  );
};
