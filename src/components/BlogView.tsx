import { Blog } from '../types/Blog';
import {
  BlogCover,
  StyledDiv,
} from './common';

type BlogViewProps = {
  blogs: Array<Blog>;
};

export const BlogView = ({ blogs }: BlogViewProps) => {
  return (
    <StyledDiv display="flex" flexWrap="wrap">
      {blogs.map((blog) => (
        <StyledDiv width="410px">
          <BlogCover id={blog.id} title={blog.title} date={blog.date} />
        </StyledDiv>
      ))}
    </StyledDiv>
  );
};
