import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <h2 style={{ textAlign: "center", margin: "1rem 0 0" }}>
        Muthu Aravindh
      </h2>
      <p>
        GitHub:
        <a
          href=" https://github.com/Aravindh2501/todo_task_new "
          style={{
            textDecoration: "underline",
            color: "#0D6EFD",
            marginLeft: "8px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/Aravindh2501/todo_task_new
        </a>
      </p>
    </div>
  );
};

export default Footer;
