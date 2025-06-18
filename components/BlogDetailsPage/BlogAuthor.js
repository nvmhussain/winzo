import { blogAuthor } from "@/data/blogDetailsPage";
import React from "react";
import { Image } from "react-bootstrap";

const { image, name, description } = blogAuthor;

const BlogAuthor = () => {
  return (
    <div className="blog-details__author">
      <div className="blog-details__author-image">
        <Image src={image.src} alt="Awesome Image" />
      </div>
      <div className="blog-details__author-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogAuthor;
