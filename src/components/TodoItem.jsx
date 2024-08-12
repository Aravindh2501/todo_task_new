import React, { useEffect } from "react";

const TodoItem = ({ todos, completeTodo, deleteTodo }) => {
  useEffect(() => {
    console.log(todos);
  });

  return (
    <div className="todo_items">
      {todos.map((todo) => (
        <div
          className={`item_card ${todo.status === "completed" ? "active" : ""}`}
          key={todo.id}
        >
          <div className="item_card_top">
            <h3 className="item_title">{todo.title}</h3>
            <p className={`status ${todo.status}`}>{todo.status}</p>
          </div>
          <div className="item_card_content">
            <p
              className="item_description"
              style={{
                opacity: todo.status === "completed" ? 0.5 : 1,
                textDecoration:
                  todo.status === "completed" ? "line-through" : "none",
              }}
            >
              {todo.description}
            </p>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "1rem 0",
              }}
            >
              <p
                className="item_description"
                style={{
                  opacity: todo.status === "completed" ? 0.5 : 1,
                  textDecoration:
                    todo.status === "completed" ? "line-through" : "none",
                }}
              >
                Due Date : <span>{todo.date}</span>
              </p>
              <p
                className="category"
                style={{
                  display: "inline-flex",
                  background:
                    todo.status === "completed" ? "#F57C00" : "#F57C00",
                  padding: "4px 14px",
                  color: todo.status === "completed" ? "#ccc" : "#fff",
                  borderRadius: "8px",
                  opacity: todo.status === "completed" ? 0.5 : 1,
                }}
              >
                {todo.category}
              </p>
            </div>
            <div
              className="item_buttons"
              style={{ display: "flex", justifyContent: "end" }}
            >
              <button
                className="btn_completed"
                onClick={() => completeTodo(todo.id)}
                disabled={todo.status === "completed"}
              >
                Mark as complete
              </button>
              <button
                className="btn_delete"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
