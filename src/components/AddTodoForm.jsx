import React, { useState } from "react";
import { HiOutlinePlusSm } from "react-icons/hi";
import Modal from "../Modal/Modal";
import { useForm } from "react-hook-form";

const AddTodoForm = ({ handleAddTodo, toast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleAddTodo({ ...data, id: Date.now(), status: "active" });
    reset();
    setIsOpen(false);
  };

  return (
    <div className="add_todo">
      <button className="add_todo_btn" onClick={() => setIsOpen(true)}>
        <HiOutlinePlusSm />
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default AddTodoForm;
