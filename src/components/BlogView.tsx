import { Blog } from '../types/Blog';
import {
  BlogCover,
  StyledDiv,
} from './common';

type BlogViewProps = {
  blogs: Array<Blog>;
  width?: string;
  centred?: boolean;
};

export const BlogView = ({
  blogs,
  width = "370px",
  centred = false,
}: BlogViewProps) => {
  return (
    <StyledDiv
      display="flex"
      flexWrap="wrap"
      justifyContent={centred ? "space-around" : "left"}
    >
      {blogs.map((blog) => (
        <StyledDiv width={width}>
          <BlogCover id={blog.id} title={blog.title} date={blog.date} />
        </StyledDiv>
      ))}
    </StyledDiv>
  );
};
