import { useTranslation } from 'react-i18next';

import {
  Footer,
  Nav,
} from '../components';
import {
  StyledDiv,
  StyledText,
} from '../components/common';
import { EventDetails } from '../components/EventDetails';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <StyledDiv px="100px">
      <Nav active="home" />
      <StyledDiv display="flex" justifyContent="space-between">
        <StyledDiv width="68%">
          <StyledDiv height="500px" width="85%" bg="black" />
          <StyledText variant="caption">
            {t("homepage.imageCaption")}
          </StyledText>
        </StyledDiv>
        <EventDetails />
      </StyledDiv>
      <Footer />
    </StyledDiv>
  );
};
