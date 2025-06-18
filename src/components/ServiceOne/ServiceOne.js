import serviceOne from "@/data/serviceOne";
import useActive from "@/hooks/useActive";
import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleService from "./SingleService";

const ServiceOne = () => {
  const ref = useActive("#services");

  return (
    <section ref={ref} className="service-one" id="services">
      <Container>
        <div className="block-title text-center">
          <div className="block-title__text">
            <span>Nodin agency can boost</span> <br />{" "}
            <span>up your web traffic</span>
          </div>
        </div>
        <Row>
          {serviceOne.map((service) => (
            <SingleService key={service.id} service={service} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceOne;
