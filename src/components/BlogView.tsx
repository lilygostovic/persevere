import { Blog } from "../types/Blog";
import { BlogCover, StyledDiv } from "./common";

type BlogViewProps = {
  blogs: Array<Blog>;
  width?: string;
};

export const BlogView = ({ blogs, width = "370px" }: BlogViewProps) => {
  return (
    <StyledDiv display="flex" flexWrap="wrap">
      {blogs.map((blog) => (
        <StyledDiv width={width}>
          <BlogCover id={blog.id} title={blog.title} date={blog.date} />
        </StyledDiv>
      ))}
    </StyledDiv>
  );
};
