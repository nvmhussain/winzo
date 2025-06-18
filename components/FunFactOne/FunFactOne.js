import funFactOne from "@/data/funFactOne";
import React from "react";
import { Container, Image } from "react-bootstrap";
import SingleFunFact from "./SingleFunFact";

const { bannerIcon, boxes } = funFactOne;

const FunFactOne = () => {
  return (
    <section className="fun-fact-one">
      {bannerIcon.map((icon, index) => (
        <Image
          key={index}
          src={require(`src/assets/images/${icon}`).default.src}
          alt="Awesome Image"
          className={`bubble-${index + 1}`}
        />
      ))}
      <Container>
        <div className="block-title text-center">
          <div className="block-title__text">
            <span>Over 2200 projects</span> <br /> <span>completed</span>
          </div>
        </div>
        <div className="fun-fact-one__box-wrapper">
          {boxes.map((box) => (
            <SingleFunFact singleFunFact={box} key={box.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FunFactOne;
