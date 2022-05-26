import React from 'react'

const TaskList = ({tasks,task,handleDelete,handleUpdate}) => {
  return (
    <ul className="tasks">
          {tasks.map((t) => (
            <li className="singleTask">
              <span className="taskText" key={t.id}>
                {t.task}
              </span>
              <button onClick={() => handleUpdate(t.id)}>Edit</button>
              <button onClick={() => handleDelete(t.id)}>Remove</button>
            </li>
          ))}
        </ul>
  );
};

export default TaskList;
