import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';

import {
  Footer,
  Nav,
} from '../components';
import {
  StyledDiv,
  StyledText,
} from '../components/common';
import { EventDetails } from '../components/EventDetails';
import artists from '../data/artists/2023.json';

const LineBreak = styled.div`
  height: 20px;
`;

export const Persevere2023Page = () => {
  const { t } = useTranslation();

  return (
    <StyledDiv px="100px">
      <Nav active="persevere-2022" />
      <StyledDiv display="flex" justifyContent="space-between" mb="100px">
        <StyledDiv width="60%">
          <StyledText variant="paragraphMedium">
            {t("persevere2022.readMore")}
          </StyledText>
          <LineBreak />
          {artists.map((artist) => (
            <StyledDiv py="20px">
              <StyledText variant="artistName">{artist.name}</StyledText>
              <StyledDiv height="10px" />
              <StyledText variant="paragraphMedium">
                {artist.description}
              </StyledText>
            </StyledDiv>
          ))}
        </StyledDiv>
        <EventDetails />
      </StyledDiv>
      <Footer />
    </StyledDiv>
  );
};
