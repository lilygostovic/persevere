import { Link } from 'react-router-dom';

import { StyledDiv } from './StyledDiv';
import { StyledText } from './StyledText';

type BlogCoverProps = {
  id: string;
  title: string;
  date: string;
  isSmallWindow: boolean;
};

export const BlogCover = ({
  id,
  title,
  date,
  isSmallWindow,
}: BlogCoverProps) => (
  <StyledDiv my="10px" mr={isSmallWindow ? "0px" : "20px"}>
    <Link
      to={`/blog/${id}`}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <StyledDiv display="flex" flexDirection="column">
        <StyledDiv width="100%">
          <img
            src={require(`../../images/${id}.jpg`)}
            alt="cover"
            height="100%"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </StyledDiv>
        <StyledText variant="blogCoverTitle">{title}</StyledText>
        <StyledText variant="blogCoverDate">{date}</StyledText>
      </StyledDiv>
    </Link>
  </StyledDiv>
);
