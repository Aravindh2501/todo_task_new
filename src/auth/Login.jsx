import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import video from "../assets/videos/loginVideo.mp4";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const trimmedName = data.name.trim();
    const trimmedUsername = data.username
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "_");
    login(trimmedName, trimmedUsername);
    navigate("/");
  };

  return (
    <div className="login">
      <div className="login_left">
        <div className="login_video">
          <video src={video} autoPlay loop muted playsInline />
        </div>
      </div>
      <div className="login_right">
        <div className="login_card">
          <h2 className="login_heading">Task Management</h2>
          <form
            className="login_form"
            onSubmit={handleSubmit(onSubmit)}
            aria-label="Login Form"
          >
            <div className="form_group">
              <label className="form_label" htmlFor="name">
                Name:
              </label>
              <input
                className="form_input"
                type="text"
                id="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                aria-required="true"
                aria-label="Enter your name"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="error_message">{errors.name.message}</p>
              )}
            </div>
            <div className="form_group">
              <label className="form_label" htmlFor="username">
                Username:
              </label>
              <input
                className="form_input"
                type="text"
                id="username"
                {...register("username", {
                  required: "Username is required",
                  pattern: {
                    value: /^[A-Za-z0-9_]+$/,
                    message:
                      "Username must not contain special characters or spaces",
                  },
                })}
                aria-required="true"
                aria-label="Enter your username"
                placeholder="Enter your username"
              />
              {errors.username && (
                <p className="error_message">{errors.username.message}</p>
              )}
            </div>

            <button
              className="submit_button"
              type="submit"
              aria-label="Submit Login Form"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
