import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      {/* props.children actually work like slot in Vue.js */}
      {props.children}
    </div>
  );
};

export default Card;
