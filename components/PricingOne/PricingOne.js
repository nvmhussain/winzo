import pricingOne from "@/data/pricingOne";
import useActive from "@/hooks/useActive";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SinglePricing from "./SinglePricing";

const PricingOne = () => {
  const ref = useActive("#pricing");

  return (
    <section ref={ref} className="pricing-one" id="pricing">
      <Container>
        <div className="block-title text-center">
          <div className="block-title__text">
            <span>Choose pricing plans which</span> <br />{" "}
            <span>suits your needs</span>
          </div>
        </div>
        <Row>
          {pricingOne.map((pricing) => (
            <SinglePricing key={pricing.id} pricing={pricing} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PricingOne;
