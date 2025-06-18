import Link from "next/link";
import React from "react";
import { Col } from "react-bootstrap";

const SingleBlog = ({ blog = {} }) => {
  const { date, author, title, text } = blog;

  return (
    <Col lg={4}>
      <div className="blog-one__single">
        <div className="blog-one__single-inner-block">
          <div className="blog-one__date">{date}</div>
          <a href="blog-details.html" className="blog-one__author">
            By {author}
          </a>
          <h3 className="blog-one__title">
            <Link href="/blog-details">{title}</Link>
          </h3>
          <p className="blog-one__text">{text}</p>
          <Link href="/blog-details">
            <a className="blog-one__link">
              <i className="nonid-icon-left-arrow"></i>
            </a>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default SingleBlog;
