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

export type TextVariant =
  | "title"
  | "subtitle"
  | "headerBig"
  | "header"
  | "paragraphMedium"
  | "paragraphMediumBold"
  | "paragraphSmall"
  | "paragraphSmallBold"
  | "paragraphSmallItalics"
  | "paragraphTiny"
  | "paragraphTinyBold"
  | "labelSmall"
  | "labelTiny"
  | "labelTinyRed"
  | "labelSuperTiny"
  | "labelSuperTinyBold"
  | "numberBig"
  | "numberMedium"
  | "numberSmall"
  | "numberTiny"
  | "number"
  | "headline"
  | "subheadline"
  | "copyBig"
  | "copy"
  | "copySmall"
  | "copySmallBold"
  | "copyVerySmall"
  | "copyVerySmallBold"
  | "badgeVerySmallBold"
  | "descriptionSubheadline"
  | "button"
  | "graphSmall";

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
          font-size: 66px;
          line-height: 88px;
          font-weight: lighter;
        `;
      case "subtitle":
        return css`
          font-size: 18px;
          line-height: 32px;
          color: darkgrey;
        `;
      case "headerBig":
        return css`
          font-size: 32px;
          line-height: 40px;
          font-weight: bold;
        `;
      case "header":
        return css`
          font-size: 22px;
          line-height: 32px;
          font-weight: bold;
        `;
      case "paragraphMedium":
        return css`
          font-size: 20px;
          line-height: 28px;
        `;
      case "paragraphMediumBold":
        return css`
          font-size: 20px;
          line-height: 28px;
          font-weight: bold;
        `;
      case "paragraphSmall":
        return css`
          font-size: 16px;
          line-height: 24px;
        `;
      case "paragraphSmallBold":
        return css`
          font-size: 16px;
          line-height: 24px;
          font-weight: bold;
        `;
      case "paragraphSmallItalics":
        return css`
          font-size: 16px;
          line-height: 24px;
          font-style: italic;
        `;
      case "paragraphTiny":
        return css`
          font-size: 14px;
          line-height: 22px;
        `;
      case "paragraphTinyBold":
        return css`
          font-size: 14px;
          line-height: 22px;
          font-weight: bold;
        `;
      case "labelSmall":
        return css`
          font-size: 16px;
          line-height: 24px;
          color: grey;
        `;
      case "labelTiny":
        return css`
          font-size: 12px;
          line-height: 22px;
          color: grey;
        `;
      case "labelTinyRed":
        return css`
          font-size: 10px;
          line-height: 17px;
          font-weight: bold;
          color: #bf0000;
        `;
      case "labelSuperTiny":
        return css`
          font-size: 12px;
          line-height: 17px;
          color: grey;
        `;
      case "labelSuperTinyBold":
        return css`
          font-size: 12px;
          line-height: 17px;
          font-weight: bold;
          color: grey;
        `;
      case "numberBig":
        return css`
          font-size: 32px;
          line-height: 40px;
          font-weight: bold;
        `;
      case "numberMedium":
        return css`
          font-size: 20px;
          line-height: 28px;
          font-weight: bold;
        `;
      case "numberSmall":
        return css`
          font-size: 16px;
          line-height: 24px;
          font-weight: bold;
        `;
      case "numberTiny":
        return css`
          font-size: 14px;
          line-height: 22px;
          font-weight: bold;
        `;
      case "number":
        return css`
          font-size: 20px;
          line-height: 28px;
          font-weight: bold;
        `;
      case "headline":
        return css`
          font-size: 32px;
          font-weight: bold;
        `;
      case "subheadline":
        return css`
          font-size: 20px;
          font-weight: bold;
        `;
      case "copyBig":
        return css`
          font-size: 20px;
        `;
      case "copySmall":
        return css`
          font-size: 14px;
          line-height: 24px;
        `;
      case "copySmallBold":
        return css`
          font-size: 14px;
          line-height: 24px;
          font-weight: bold;
        `;
      case "copyVerySmall":
        return css`
          font-size: 12px;
          line-height: 24px;
        `;
      case "copyVerySmallBold":
        return css`
          font-size: 12px;
          line-height: 24px;
          font-weight: bold;
        `;
      case "badgeVerySmallBold":
        return css`
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 2px;
          font-weight: bold;
        `;
      case "descriptionSubheadline":
        return css`
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 2px;
          font-weight: bold;
          text-transform: uppercase;
          color: grey;
        `;
      case "button":
        return css`
          font-size: 18px;
          line-height: 24px;
          font-weight: bold;
        `;
      case "graphSmall":
        return css`
          font-size: 12px;
          line-height: 22px;
        `;
      default:
        return css`
          font-size: 16px;
          line-height: 24px;
        `;
    }
  }}

  ${color}
  ${space}
  ${typography}
  ${flexbox}
  ${layout}
`;
