import ctaOne from "@/data/ctaOne";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { lists, description, images } = ctaOne;

const CtaOne = () => {
  return (
    <section className="cta-one">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="cta-one__image-wrap">
              <Row className="no-gutters">
                {images.map((image, index) => (
                  <Col
                    lg={6}
                    key={index}
                    className={index ? "d-flex flex-column-reverse" : ""}
                  >
                    <div className="cta-one__image">
                      <Image
                        src={require(`src/assets/images/${image}`).default.src}
                        alt="Awesome Image"
                      />
                    </div>
                    <div
                      className={`cta-one__color-box cta-one__color-box-${
                        index + 1
                      }`}
                    ></div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={6} className="d-flex">
            <div className="cta-one__content my-auto">
              <div className="block-title">
                <div className="block-title__text">
                  <span>Marketing experts are</span> <br />{" "}
                  <span>ready to help you</span>
                </div>
              </div>
              <p className="cta-one__text">{description}</p>
              <ul className="cta-one__list">
                {lists.map((item, index) => (
                  <li className="cta-one__list-item" key={index}>
                    <i className="fa fa-check"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="cta-one__btn">
                Get Started
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaOne;
