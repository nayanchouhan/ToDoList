import React from 'react'

const taskForm = ({handleSubmit,setTask,task,editId}) => {
  return (
    <form className="inputForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit">{editId ? "Edit" : "Go"}</button>
      </form>
  );
};

export default taskForm;
