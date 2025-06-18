import BlogDetailsPage from "@/components/BlogDetailsPage/BlogDetailsPage";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import Layout from "@/components/Layout/Layout";
import React from "react";

const BlogDetails = () => {
  return (
    <Layout pageTitle="Blog Page">
      <InnerBanner page="Blog" title="Blog Details" />
      <BlogDetailsPage />
    </Layout>
  );
};

export default BlogDetails;
