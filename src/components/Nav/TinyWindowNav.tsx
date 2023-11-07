import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Pages } from '../../types/Pages';
import {
  StyledDiv,
  StyledText,
} from '../common';

type TinyWindowNavProps = {
  active: Pages;
};

export const TinyWindowNav = ({ active }: TinyWindowNavProps) => {
  const { t } = useTranslation();

  return (
    <>
      <StyledDiv
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        my="10px"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <StyledText variant="titleSmall">{t("title")}</StyledText>
        </Link>
        <Menu />
      </StyledDiv>
      <StyledDiv height="2px" width="100%" bg="black" mb="30px" />
    </>
  );
};

const Menu = () => (
  <StyledDiv
    display="flex"
    flexDirection="column"
    justifyContent="space-around"
    width="25px"
    height="25px"
    my="5px"
  >
    <StyledDiv height="3px" width="100%" bg="black" />
    <StyledDiv height="3px" width="100%" bg="black" />
    <StyledDiv height="3px" width="100%" bg="black" />
  </StyledDiv>
);
