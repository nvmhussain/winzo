import React from "react";
import { Col, Row } from "react-bootstrap";

const inputs = ["name", "email", "message"];

const CommentForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    inputs.forEach((input) => {
      data[input] = formData.get(input);
    });
    console.log(data);
  };

  return (
    <>
      <h2 className="blog-details__content-title">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="reply-form">
        <Row>
          <Col lg={6}>
            <input
              type="text"
              placeholder="Your name"
              className="reply-form__field"
              name="name"
            />
          </Col>
          <Col lg={6}>
            <input
              type="text"
              placeholder="Enter email"
              className="reply-form__field"
              name="email"
            />
          </Col>
          <Col lg={12}>
            <textarea
              placeholder="Write message"
              className="reply-form__field"
              name="message"
            ></textarea>
            <button className="reply-form__btn" type="submit">
              Submit Comment
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
};

export default CommentForm;
