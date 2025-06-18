import { sidebar } from "@/data/blogDetailsPage";
import React from "react";
import { Image } from "react-bootstrap";

const { posts, categories, tags } = sidebar;

const Sidebar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };

  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__search">
        <form onSubmit={handleSubmit} className="sidebar__search-form">
          <input type="text" name="search" placeholder="Search here..." />
        </form>
      </div>
      <div className="sidebar__single sidebar__post">
        <h3 className="sidebar__title">Latest Posts</h3>
        <div className="sidebar__post-wrap">
          {posts.map(({ id, title, image }) => (
            <div className="sidebar__post__single" key={id}>
              <div className="sidebar__post-image">
                <div className="inner-block">
                  <Image
                    src={require(`src/assets/images/${image}`).default.src}
                    alt="Awesome Image"
                  />
                </div>
              </div>
              <div className="sidebar__post-content">
                <h4 className="sidebar__post-title">
                  <a href="#">{title}</a>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sidebar__single sidebar__category">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__category-list">
          {categories.map((category, index) => (
            <li className="sidebar__category-list-item" key={index}>
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar__single sidebar__tags">
        <h3 className="sidebar__title">Tags</h3>
        <ul className="sidebar__tags-list">
          {tags.map((tag, index) => (
            <li className="sidebar__tags-list-item" key={index}>
              <a href="#" className="me-1">
                {tag},
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
