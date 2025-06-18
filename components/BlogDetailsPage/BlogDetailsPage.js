import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogAuthor from "./BlogAuthor";
import BlogDetailsContent from "./BlogDetailsContent";
import CommentForm from "./CommentForm";
import Comments from "./Comments";
import Sidebar from "./Sidebar";

const BlogDetailsPage = () => {
  return (
    <section className="blog-details">
      <Container>
        <Row>
          <Col lg={8}>
            <BlogDetailsContent />
            <BlogAuthor />
            <Comments />
            <CommentForm />
          </Col>
          <Col lg={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetailsPage;
