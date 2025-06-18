import Link from "next/link";
import React from "react";

const InnerBanner = ({ page = "", title = "" }) => {
  return (
    <section className="inner-banner">
      <div className="container text-center">
        <ul className="thm-breadcrumb">
          <li className="thm-breadcrumb__item">
            <Link href="/">Home</Link>
          </li>
          <li className="thm-breadcrumb__item">
            <span>{page}</span>
          </li>
        </ul>
        <h2 className="inner-banner__title">
          <span>{title}</span>
        </h2>
      </div>
    </section>
  );
};

export default InnerBanner;
