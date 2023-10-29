import { Link } from 'react-router-dom';

import { StyledDiv } from './StyledDiv';
import { StyledText } from './StyledText';

type BlogCoverProps = {
  id: string;
  title: string;
  date: string;
};

export const BlogCover = ({ id, title, date }: BlogCoverProps) => (
  <StyledDiv m="10px">
    <Link
      to={`/blog/${id}`}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <StyledDiv display="flex" flexDirection="column">
        <StyledDiv width="100%" height="250px">
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
