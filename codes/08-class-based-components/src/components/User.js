import classes from './User.module.css';
import {Component} from "react";

class User extends Component {

  componentWillUnmount() {
    console.log('User will unmount!');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
export default User;


// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };
//
// export default User;
