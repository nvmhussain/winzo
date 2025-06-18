import React from "react";
import { Col } from "react-bootstrap";

const SinglePricing = ({ pricing = {} }) => {
  const { price, pack, note, features } = pricing;

  return (
    <Col lg={4}>
      <div className="pricing-one__single">
        <div className="pricing-one__top">
          <h3 className="pricing-one__title">${price}</h3>
          <p className="pricing-one__pack">{pack}</p>
        </div>
        <ul className="pricing-one__feature">
          {features?.map((feature, index) => (
            <li className="pricing-one__feature-item" key={index}>
              {feature}
            </li>
          ))}
        </ul>
        <a href="#" className="pricing-one__btn">
          Choose Plan
        </a>
        <p className="pricing-one__note">{note}</p>
      </div>
    </Col>
  );
};

export default SinglePricing;
