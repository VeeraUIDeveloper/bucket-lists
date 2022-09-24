import React from "react";

import "./Shadow.css";

const Shadow = (props) => {
  const classes = "shadow " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Shadow;
