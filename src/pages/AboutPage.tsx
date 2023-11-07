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

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <StyledDiv
      px="100px"
      height="99vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <div>
        <Nav active="about" />
        <StyledDiv display="flex" justifyContent="space-between" mb="100px">
          <StyledDiv width="60%">
            <StyledText variant="paragraphMedium">
              {t("about.paragraph1")}
            </StyledText>
            <br />
            <br />
            <StyledText variant="paragraphMedium">
              {t("about.paragraph2")}
            </StyledText>
          </StyledDiv>
          <EventDetails />
        </StyledDiv>
      </div>
      <Footer />
    </StyledDiv>
  );
};
