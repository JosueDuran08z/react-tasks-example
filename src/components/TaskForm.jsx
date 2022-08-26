import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleChangeTitle = (e) => setTitle(e.target.value);

  const handleChangeDescription = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-900 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu Tarea</h1>
        <input
          type="text"
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          value={title}
          onChange={handleChangeTitle}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripcion de la tarea"
          value={description}
          onChange={handleChangeDescription}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
};

export default TaskForm;
