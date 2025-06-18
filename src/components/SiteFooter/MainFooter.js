import footerData from "@/data/footerData";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { logo, phone, email, address, navItems, links, services, socialIcons } =
  footerData;

const MainFooter = () => {
  return (
    <div className="site-footer__main-footer">
      <Container>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <div className="footer-widget footer-widget--about-widget">
              <Link href="/">
                <a className="footer-widget__footer-logo">
                  <Image src={logo.src} alt="Awesome Image" />
                </a>
              </Link>
              <p>{phone}</p>
              <p>{email}</p>
              <p>
                {address.split("\n").map((t, i) => (
                  <span className="d-block" key={i}>
                    {t}
                  </span>
                ))}
              </p>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <div className="footer-widget">
              <h3 className="footer-widget__title">Explore</h3>
              <ul className="footer-widget__link-list">
                {navItems.map(({ id, href, title }) => (
                  <li key={id}>
                    <a href={href}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="footer-widget">
              <h3 className="footer-widget__title">Services</h3>
              <ul className="footer-widget__link-list">
                {services.map(({ id, href, title }) => (
                  <li key={id}>
                    <a href={href}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12}>
            <div className="footer-widget">
              <h3 className="footer-widget__title">Links</h3>
              <ul className="footer-widget__link-list">
                {links.map(({ id, href, title }) => (
                  <li key={id}>
                    <a href={href}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={2} md={6} sm={12} className="d-flex">
            <div className="footer-widget my-auto">
              <div className="social-block">
                {socialIcons.map(({ id, href, icon }) => (
                  <a href={href} key={id}>
                    <i className={icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainFooter;
