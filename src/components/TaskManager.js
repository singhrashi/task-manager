import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, editTask } from "../redux/action";
import "./TaskManager.css";

const TaskManager = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [taskName, setTaskName] = useState("");
  const [taskId, setTaskId] = useState(null);
  const [buttonLabel, setButtonLabel] = useState("Add Task");

  const handleAddTask = () => {
    if (taskName !== "") {
      if (taskId !== null) {
        dispatch(editTask({ id: taskId, text: taskName }));
        setTaskId(null);
        setButtonLabel("Add Task")
      } else {
        dispatch(addTask({ id: Date.now(), text: taskName }));
      }
      setTaskName("");
    }
  };
  const handleEditTask = (task) => {
    setTaskName(task.text);
    setTaskId(task.id);
    setButtonLabel("Edit Task")
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };
  return (
    <div>
      <h2>Task Manager</h2>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={handleAddTask}>{buttonLabel}</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
