import React from "react";

function ListItem(props) {
  return (
    <li>
      <p>{props.task}</p>
      //? why does this need to be wrapped in an arrow function?
      <button onClick={() => props.deleteTask(props.id)}>Complete</button>
    </li>
  );
}

export default ListItem;
