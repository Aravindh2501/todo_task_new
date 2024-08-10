import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
    toast.success("Form is Added Successfully");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    toast.error("Form is Deleted Successfully");
  };

  const completeTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, status: "completed" } : todo
      )
    );
    toast("Good Job , Completed Successfully!", {
      icon: "👏",
    });
  };

  return { todos, addTodo, deleteTodo, completeTodo };
};

export default useTodos;
