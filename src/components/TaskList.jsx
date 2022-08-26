import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return tasks.length ? (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task, i) => (
        <TaskCard key={i} task={task} />
      ))}
    </div>
  ) : (
    <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>
  );
};

export default TaskList;
