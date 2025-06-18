import React from "react";
import { Container } from "react-bootstrap";

const Subscribe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData.get("email"));
  };

  return (
    <div className="site-footer__subscribe">
      <Container>
        <div className="block-title text-center">
          <div className="block-title__text">
            <span>Subscribe our newsletter</span> <br />{" "}
            <span>to get new updates</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="site-footer__subscribe-form">
          <input type="text" name="email" placeholder="Enter your email" />
          <button type="submit">Get Started</button>
        </form>
      </Container>
    </div>
  );
};

export default Subscribe;
