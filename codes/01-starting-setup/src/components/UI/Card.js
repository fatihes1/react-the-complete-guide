import "./Card.css";

// resuable wrapper component
// the important things to note here are:
// props.children is a special prop that is available to all components
// and props.children came from the ExpenseItem component
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
