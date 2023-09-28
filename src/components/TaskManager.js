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
  const [error, setError] = useState("");
  const [status, setStatus] = useState("Pending");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const handleAddTask = () => {
    if (taskName !== "") {
      if (taskId !== null) {
        dispatch(editTask({ id: taskId, text: taskName, status: status }));
        setTaskId(null);
        setButtonLabel("Add Task");
      } else {
        dispatch(addTask({ id: Date.now(), text: taskName, status: status }));
      }
      setTaskName("");
      setError("");
      setStatus("Pending");
    }
  };
  const handleEditTask = (task) => {
    setTaskName(task.text);
    setTaskId(task.id);
    setButtonLabel("Edit Task");
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const filterTasks = (props) => {
    setFilteredTasks([]);
    setError("");
    switch (props) {
      case "ALL":
        if (tasks.length) {
          setFilteredTasks([]);
        } else {
          setError("No tasks to filter");
        }
        break;
      case "Completed":
        let completedTasks = [];
        tasks.forEach((task) => {
          if (task.status === "Completed") {
            completedTasks.push(task);
          }
        });
        if (completedTasks.length) {
          setFilteredTasks(completedTasks);
        } else {
          setError("No completed tasks");
        }
        break;
      case "Pending":
        let pendingTasks = [];
        tasks.forEach((task) => {
          if (task.status === "Pending") {
            pendingTasks.push(task);
          }
        });
        if (pendingTasks.length) {
          setFilteredTasks(pendingTasks);
        } else {
          setError("No pending tasks");
        }
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <h2>Task Manager</h2>
      <div className="filter-buttons">
        <h3>Filter tasks</h3>
        <button onClick={() => filterTasks("ALL")}>All</button>
        <button onClick={() => filterTasks("Completed")}>Completed</button>
        <button onClick={() => filterTasks("Pending")}>Pending</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <select className="filters" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={handleAddTask}>{buttonLabel}</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              Name: {task.text}&nbsp;&nbsp; Status: {task.status}
            </div>
            <button onClick={() => handleEditTask(task)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {filteredTasks.length > 0 && (
        <ul>
          {filteredTasks.map((task) => (
            <li key={`filtered-${task.id}`}>
              <div>
                Name: {task.text}&nbsp;&nbsp; Status: {task.status}
              </div>
            </li>
          ))}
        </ul>
      )}
      {error}
    </div>
  );
};

export default TaskManager;
