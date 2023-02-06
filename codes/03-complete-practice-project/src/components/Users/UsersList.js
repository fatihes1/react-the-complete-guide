import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.length > 0 ? (
          props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))
        ) : (
          <h3>There is no user here!</h3>
        )}
      </ul>
    </Card>
  );
};

export default UsersList;
