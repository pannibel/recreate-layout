import { useState } from "react";
import "./App.css";
import Form from "./Form";
import List from "./List";

function App() {
  const [tasks, setTasks] = useState([
    {task: "Feed Cat", id:1},
    {task: "Clean House", id:2}
  ]);

  function deleteTask(id) {

    console.log(`I will delete: ${id}`);
    setTasks(oldTasks => oldTasks.filter((task) => task.id !== id))
  }

  function addTask(task) {
    console.log(`I will add: ${task}`);
    const newTask = {
      id: Date.now(),
      task: task
    }
    setTasks(oldTasks => oldTasks.concat(newTask))
  }

  return (
    <div className="App">
      <main>
        <section className="form">
          <fieldset>
            <legend>Form</legend>
            <Form addTask={addTask}/>
          </fieldset>
        </section>

        <section className="list">
          <fieldset>
            <legend>List</legend>
            <List tasks={tasks} deleteTask={deleteTask}/>
          </fieldset>
        </section>
      </main>
    </div>
  );
}

export default App;
