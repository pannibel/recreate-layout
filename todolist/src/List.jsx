import ListItem from "./ListItem";

export default function List(props) {
  return (
    <ul>
      {props.tasks.map((task) => (
        <ListItem
          task={task.task}
          id={task.id}
          key={task.id}
          deleteTask={props.deleteTask}
        />
      ))}
    </ul>
  );
}
