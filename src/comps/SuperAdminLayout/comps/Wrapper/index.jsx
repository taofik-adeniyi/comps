import React from "react";
import "./index.css";

const Wrapper = (props) => {
  const { children } = props;
  return <div className="cmp-wrapper cmp-center">{children}</div>;
};

export default Wrapper;
