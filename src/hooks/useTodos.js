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
    toast.success("Todo added successfully!");
  };

  const deleteTodo = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (confirmDelete) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      toast.error("Todo deleted successfully!");
    }
  };

  const completeTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, status: "completed" } : todo
      )
    );
    toast.success("Good job, completed successfully!", {
      icon: "👏",
    });
  };

  return { todos, addTodo, deleteTodo, completeTodo };
};

export default useTodos;
