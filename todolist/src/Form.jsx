import React from "react";

export default function Form(props) {
  function submit(e) {
    e.preventDefault();
    props.addTask(e.target.elements.task.value);
  }

  return (
    <form onSubmit={submit}>
      <label>
        New Task
        <input type="text" name="task" />
      </label>

      <button>Add task</button>
    </form>
  );
}
