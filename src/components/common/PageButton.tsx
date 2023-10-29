import { useState } from 'react';

import { Link } from 'react-router-dom';

import { StyledDiv } from './StyledDiv';
import { StyledText } from './StyledText';

type PageButtonProps = {
  displayName: string;
  route: string;
  isActive: boolean;
  isFirstItem?: boolean;
  isLastItem?: boolean;
};

export const PageButton = ({
  displayName,
  route,
  isActive,
  isFirstItem = false,
  isLastItem = false,
}: PageButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledDiv
      paddingLeft={isFirstItem ? "0px" : "12px"}
      paddingRight={isLastItem ? "0px" : "12px"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/${route}`}
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <StyledDiv
          height="2px"
          width="100%"
          bg={isHovered || isActive ? "black" : "white"}
        />
        <StyledText variant="navItem">{displayName}</StyledText>
        <StyledDiv height="2px" width="100%" bg="black" />
      </Link>
    </StyledDiv>
  );
};
