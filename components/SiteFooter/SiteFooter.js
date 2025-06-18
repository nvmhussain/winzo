import footerData from "@/data/footerData";
import React from "react";
import { Container, Image } from "react-bootstrap";
import MainFooter from "./MainFooter";
import Subscribe from "./Subscribe";

const { bannerIcons, year, website } = footerData;

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      {bannerIcons.map((icon, index) => (
        <Image
          key={index}
          src={require(`src/assets/images/${icon}`).default.src}
          alt="Awesome Image"
          className={`bubble-${index + 1}`}
        />
      ))}
      <Subscribe />
      <MainFooter />
      <div className="site-footer__bottom-footer text-center">
        <Container>
          <p>
            &copy; copyright {year} by{" "}
            <a target="_blank" rel="noreferrer" href={`https://${website}`}>
              {website}
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default SiteFooter;
