import blogOne from "@/data/blogOne";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleBlog from "../BlogOne/SingleBlog";

const BlogPage = () => {
  return (
    <section className="blog-one blog-one__blog-page">
      <Container>
        <Row>
          {blogOne.map((blog) => (
            <SingleBlog blog={blog} key={blog.id} />
          ))}
        </Row>
        <div className="blog-post-pagination text-center">
          <a className="prev" href="#">
            <i className="fa fa-arrow-left"></i>
          </a>
          {Array.from(Array(5)).map((_, index) => {
            const number = index + 1 + "";
            return (
              <a className={index ? "" : "active"} href="#" key={index}>
                {number.length === 1 ? "0" + number : number}
              </a>
            );
          })}
          <a className="next" href="#">
            <i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default BlogPage;
