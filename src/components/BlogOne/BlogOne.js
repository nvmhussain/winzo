import blogOne from "@/data/blogOne";
import useActive from "@/hooks/useActive";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleBlog from "./SingleBlog";

const BlogOne = () => {
  const ref = useActive("#blog");

  return (
    <section ref={ref} className="blog-one" id="blog">
      <Container>
        <div className="block-title text-center">
          <div className="block-title__text">
            <span>Check out our latest</span> <br />{" "}
            <span>news & articles</span>
          </div>
        </div>
        <Row>
          {blogOne.slice(0, 3).map((blog) => (
            <SingleBlog blog={blog} key={blog.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogOne;
