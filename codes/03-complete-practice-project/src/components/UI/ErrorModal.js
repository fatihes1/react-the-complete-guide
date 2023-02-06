import React from "react";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const clickHandler = () => {
    props.onConfirmError();
  };
  return (
    <>
      <div className={classes.backdrop} onClick={clickHandler} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={clickHandler}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
