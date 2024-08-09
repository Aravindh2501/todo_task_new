import React from "react";
import { category } from "../Content/data";
import { RiCloseLargeFill } from "react-icons/ri";

const Modal = ({ isOpen, onClose, handleSubmit, register, errors }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal_top">
          <h2>Add New Todo</h2>
          <button className="close-btn" onClick={onClose}>
            <RiCloseLargeFill />
          </button>
        </div>
        <div className="modal_content">
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                {...register("title", { required: "Title is required" })}
                placeholder="Enter the title"
              />
              {errors.title && (
                <span className="error">{errors.title.message}</span>
              )}
            </div>
            <div className="form_group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Enter the description"
              />
              {errors.description && (
                <span className="error">{errors.description.message}</span>
              )}
            </div>
            <div className="form_group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                {...register("date", { required: "Date is required" })}
              />
              {errors.date && (
                <span className="error">{errors.date.message}</span>
              )}
            </div>
            <div className="form_group">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                {...register("category", { required: "Category is required" })}
              >
                <option value="" disabled>
                  Select a category
                </option>
                {category.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
              {errors.category && (
                <span className="error">{errors.category.message}</span>
              )}
            </div>
            <button type="submit" className="submit-btn">
              Add Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
