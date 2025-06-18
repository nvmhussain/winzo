import React from "react";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";

const SingleFunFact = ({ singleFunFact = {} }) => {
  const { count, title } = singleFunFact;

  return (
    <div className="fun-fact-one__single">
      <div className="inner-block">
        <h3 className="fun-fact-one__title counter">
          <VisibilityCountUp count={count} />
        </h3>
        <p className="fun-fact-one__text">{title}</p>
      </div>
    </div>
  );
};

export default SingleFunFact;
