import ctaTwo from "@/data/ctaTwo";
import useActive from "@/hooks/useActive";
import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { bannerIcons, mocImage, description, features } = ctaTwo;

const CtaTwo = () => {
  const ref = useActive("#screens");

  return (
    <section ref={ref} className="cta-two" id="screens">
      {bannerIcons.map((banner, index) => (
        <Image
          key={index}
          src={require(`src/assets/images/${banner}`).default.src}
          alt="Awesome Image"
          className={`bubble-${index + 1}`}
        />
      ))}
      <Image
        src={mocImage.src}
        alt="Awesome Image"
        className="cta-two__moc"
        style={{ zIndex: -1 }}
      />
      <Container>
        <hr />
        <Row>
          <Col lg={6}>
            <div className="cta-two__content">
              <div className="block-title">
                <div className="block-title__text">
                  <span>Discover more new</span> <br /> <span>features</span>
                </div>
              </div>
              <div className="cta-two__feature">
                {features.map(({ id, icon, title }) => (
                  <div className="cta-two__feature-single" key={id}>
                    <i className={`${icon} cta-two__feature-icon`}></i>
                    <h3 className="cta-two__feature-title">
                      <a href="#">
                        {title.split("\n").map((t, i) => (
                          <Fragment key={i}>
                            <span>{t}</span> <br />
                          </Fragment>
                        ))}
                      </a>
                    </h3>
                  </div>
                ))}
              </div>
              <p className="cta-two__text">{description}</p>
              <a href="#" className="cta-two__btn">
                Learn More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaTwo;
