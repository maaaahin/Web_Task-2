import React from "react";
import './style.css';

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => deleteTask(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
