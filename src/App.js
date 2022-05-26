import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const taskToEdit = tasks.find((tsk) => tsk.id === editId);
      const updateTasks = tasks.map((t) =>
        t.id === taskToEdit.id
          ? (t = { id: t.id, task })
          : { id: t.id, task: t.task }
      );
      setTasks(updateTasks);
      setEditId(0);
      setTask("");
      return;
    }

    if (task !== "") {
      setTasks([{ id: `${task}-${Date.now()}`, task }, ...tasks]);
      setTask("");
    }
  };

  const handleDelete = (id) => {
    const deleteTask = tasks.filter((tsk) => tsk.id !== id);
    setTasks([...deleteTask]);
  };

  const handleUpdate = (id) => {
    const updateTask = tasks.find((ts) => ts.id === id);
    setTask(updateTask.task);
    setEditId(id);
  };

  return (
    <div className="Main">
      <div className="Box">
        <h1>Todo List</h1>
        <TaskForm
          handleSubmit={handleSubmit}
          setTask={setTask}
          task={task}
          editId={editId}
        />
        <TaskList
          tasks={tasks}
          task={task}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default App;
