import brandOne from "@/data/brandOne";
import dynamic from "next/dynamic";
import React from "react";
import { Container, Image } from "react-bootstrap";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const { bannerIcons, brandImages } = brandOne;

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    500: {
      items: 2,
      gutter: 10,
    },
    768: {
      items: 3,
      gutter: 15,
    },
    992: {
      items: 4,
      gutter: 15,
    },
    1200: {
      items: 5,
      gutter: 20,
    },
  },
};

const BrandOne = () => {
  return (
    <section className="brand-style-one">
      {bannerIcons.map((banner, index) => (
        <Image
          key={index}
          src={require(`src/assets/images/${banner}`).default.src}
          alt="Awesome Image"
          className={`bubble-${index + 1}`}
        />
      ))}
      <Container>
        <div className="brand-carousel-one owl-theme owl-carousel">
          <TinySlider settings={settings}>
            {brandImages.map((image, index) => (
              <div
                className="item text-center"
                style={{ userSelect: "none" }}
                key={index}
              >
                <Image
                  src={require(`src/assets/images/${image}`).default.src}
                  alt="Awesome Image"
                />
              </div>
            ))}
          </TinySlider>
        </div>
        <hr className="style-one" />
      </Container>
    </section>
  );
};

export default BrandOne;
