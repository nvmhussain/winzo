import { comments } from "@/data/blogDetailsPage";
import React from "react";
import SingleComment from "./SingleComment";

const Comments = () => {
  return (
    <>
      <h2 className="blog-details__content-title">
        {comments.length} Comments
      </h2>
      <div className="comment-one">
        {comments.map((comment) => (
          <SingleComment key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  );
};

export default Comments;
