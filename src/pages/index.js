import BannerOne from "@/components/BannerOne/BannerOne";
import BlogOne from "@/components/BlogOne/BlogOne";
import BrandOne from "@/components/BrandOne/BrandOne";
import CtaOne from "@/components/CtaOne/CtaOne";
import CtaThree from "@/components/CtaThree/CtaThree";
import CtaTwo from "@/components/CtaTwo/CtaTwo";
import FunFactOne from "@/components/FunFactOne/FunFactOne";
import Layout from "@/components/Layout/Layout";
import PricingOne from "@/components/PricingOne/PricingOne";
import ServiceOne from "@/components/ServiceOne/ServiceOne";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import bannerOne from "@/data/bannerOne";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Home One">
      <BannerOne bannerData={bannerOne} />
      <ServiceOne />
      <CtaThree />
      <CtaTwo />
      <CtaOne />
      <PricingOne />
      <TestimonialOne />
      <BrandOne />
      <FunFactOne />
      <BlogOne />
    </Layout>
  );
};

export default Home;
