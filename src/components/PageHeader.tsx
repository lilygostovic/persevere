import {
  StyledDiv,
  StyledText,
} from './common';

type PageHeaderProps = {
  title: string;
};

export const PageHeader = ({ title }: PageHeaderProps) => (
  <>
    <StyledText variant="header">{title}</StyledText>
    <StyledDiv width="100%" bg="black" height="2px" mt="5px" mb="20px" />
  </>
);
