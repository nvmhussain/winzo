import useActive from "@/hooks/useActive";
import React, { Fragment } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const BannerOne = ({ bannerData = {}, className = "" }) => {
  const { bannerIcons, bannerMoc, title, description } = bannerData;

  const ref = useActive("#home");

  return (
    <section ref={ref} className={`banner-one ${className}`} id="home">
      {bannerIcons?.map((banner, index) => (
        <Image
          key={index}
          src={require(`src/assets/images/${banner}`).default.src}
          alt="Awesome Image"
          className={`bubble-${index + 1}`}
        />
      ))}
      <Image
        src={bannerMoc.src}
        className="banner-one__moc"
        alt="Awesome Image"
      />
      <Container>
        <Row>
          <Col lg={6}>
            <div className="banner-one__content">
              <div className="block-title">
                <div className="block-title__text">
                  {title.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      <span>{t}</span> <br />
                    </Fragment>
                  ))}
                </div>
              </div>
              <p className="banner-one__text">
                {description.split("\n").map((t, i) => (
                  <span className="d-block" key={i}>
                    {t}
                  </span>
                ))}
              </p>
              <a href="#" className="banner-one__btn">
                Get Started
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerOne;
