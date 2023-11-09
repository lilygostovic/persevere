import { useTranslation } from 'react-i18next';

import {
  StyledDiv,
  StyledText,
} from './common';

export const EventDetails = () => {
  const { t } = useTranslation();
  return (
    <StyledDiv display="flex" flexDirection="column" width="33%">
      <StyledText variant="upcoming">{t("upcoming.date")}</StyledText>
      <StyledText variant="upcoming">{t("upcoming.title")}</StyledText>
    </StyledDiv>
  );
};
