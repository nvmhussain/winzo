import { blogDetailsContent } from "@/data/blogDetailsPage";
import React from "react";
import { Image } from "react-bootstrap";

const { image, date, author, totalComments, title, texts } = blogDetailsContent;

const BlogDetailsContent = () => {
  return (
    <div className="blog-details__content">
      <div className="blog-details__image">
        <Image src={image.src} alt="Awesome Image" />
        <div className="blog-details__date">{date}</div>
      </div>
      <div className="blog-details__meta">
        <a href="#" className="blog-details__meta-link">
          By {author}
        </a>
        <span className="blog-details__meta-sep">.</span>
        <a href="#" className="blog-details__meta-link">
          {totalComments} Comments
        </a>
      </div>
      <h3 className="blog-details__title">{title}</h3>
      {texts.map((text, i) => (
        <p className="blog-details__text" key={i}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default BlogDetailsContent;
