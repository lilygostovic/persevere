import blogs from "../data/Blogs.json";
import { BlogCover, PageButton, StyledDiv } from "./common";

export const BlogPreview = () => {
  const recentBlogs = blogs.slice(Math.max(blogs.length - 3));

  return (
    <StyledDiv>
      <StyledDiv width="57px">
        <PageButton displayName="Blog" route="blog" isActive={false} />
      </StyledDiv>
      <StyledDiv display="flex">
        {recentBlogs.map((blog) => (
          <StyledDiv width="33%">
            <BlogCover id={blog.id} title={blog.title} date={blog.date} />
          </StyledDiv>
        ))}
      </StyledDiv>
    </StyledDiv>
  );
};
