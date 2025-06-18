import React from "react";

const Preloader = ({ loading }) => {
  return (
    <div
      style={{ opacity: loading ? 1 : 0, zIndex: loading ? 9999 : -1 }}
      className="preloader animated fadeOut"
    ></div>
  );
};

export default Preloader;
