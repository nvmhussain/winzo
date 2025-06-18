import testimonial from "@/data/testimonial";
import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import SwiperCore, {
  Autoplay,
  Controller,
  EffectFade,
  Navigation,
} from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation, EffectFade, Controller]);

const mainSlideOptions = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
};

const { testIcon, testimonials } = testimonial;

const images = testimonials.map((test) => test.image);

const TestimonialOne = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <section className="testimonials-style-one">
      <Container>
        <Row>
          <Col lg={6} className="d-flex">
            <div className="my-auto">
              <div id="testimonials-slider-pager">
                <div className="testi-icon">
                  <Image src={testIcon.src} alt="Awesome Image" />
                </div>
                <Swiper
                  className="testimonials-slider-pager-one"
                  {...mainSlideOptions}
                  onSwiper={setFirstSwiper}
                  controller={{ control: secondSwiper }}
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <a
                        // className="pager-item active"
                        href="#"
                      >
                        <Image
                          src={
                            require(`src/assets/images/${image}`).default.src
                          }
                          alt="Awesome Image"
                        />
                      </a>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="block-title">
              <div className="block-title__text">
                <span>What our clients are</span> <br /> <span>saying</span>
              </div>
            </div>
            <Swiper
              className="testimonials-slider"
              {...mainSlideOptions}
              effect="slide"
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
            >
              <div className="swiper-wrapper">
                {testimonials.map(({ id, description, name }) => (
                  <SwiperSlide key={id}>
                    <div className="single-testi-one">
                      <p>{description}</p>
                      <h3>{name}</h3>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
              <div className="bx-controls-direction">
                <a id="main-slider__swiper-button-prev" className="bx-prev">
                  <i className="nonid-icon-left-arrow"></i>
                </a>
                <a id="main-slider__swiper-button-next" className="bx-next">
                  <i className="nonid-icon-left-arrow icon-revresed"></i>
                </a>
              </div>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialOne;
