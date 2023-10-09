import React from "react";
import classes from "./Center.module.css";

const Center = (props) => {
  return <div className={classes.center}>{props.children}</div>;
};

export default Center;
