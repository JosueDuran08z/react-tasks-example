import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (taskTitle, taskDescription) =>
    setTasks([
      ...tasks,
      { title: taskTitle, id: tasks.length, description: taskDescription },
    ]);

  const deleteTask = (taskId) =>
    setTasks(tasks.filter((task) => task.id !== taskId));

  useEffect(() => setTasks(data), []);

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
