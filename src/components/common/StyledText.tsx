import styled, { css } from "styled-components";
/* eslint-disable @typescript-eslint/indent */
import {
  color,
  type ColorProps,
  flexbox,
  type FlexboxProps,
  layout,
  type LayoutProps,
  space,
  type SpaceProps,
  typography,
  type TypographyProps,
} from "styled-system";

export type TextVariant = "title" | "navItem" | "footer";

type StyledTextProps = {
  variant: TextVariant;
} & ColorProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  TypographyProps;

export const StyledText = styled.text<StyledTextProps>`
  ${({ variant }) => {
    switch (variant) {
      case "title":
        return css`
          font-family: Helvetica;
          font-size: 45px;
          font-weight: lighter;
          color: black;
        `;
      case "navItem":
        return css`
          font-family: Helvetica, sans-serif;
          font-size: 20px;
          line-height: 32px;
          color: black;
        `;
      case "footer":
        return css`
          font-family: Helvetica, sans-serif;
          font-size: 14px;
          color: black;
          line-height: 30px;
        `;
    }
  }}

  ${color}
  ${space}
  ${typography}
  ${flexbox}
  ${layout}
`;
