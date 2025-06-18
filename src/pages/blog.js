import BlogPage from "@/components/BlogPage/BlogPage";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import Layout from "@/components/Layout/Layout";
import React from "react";

const Blog = () => {
  return (
    <Layout pageTitle="Blog Page">
      <InnerBanner page="Blog" title="Blog Listing" />
      <BlogPage />
    </Layout>
  );
};

export default Blog;
