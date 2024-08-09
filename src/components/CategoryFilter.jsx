import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CategoryFilter = ({
  selectedCategory,
  isSelectShow,
  handleSelectToggle,
  categories,
  handleCategoryChange,
}) => {
  return (
    <div className="custom-select">
      <div className="selected" onClick={handleSelectToggle}>
        {selectedCategory.label}
        {isSelectShow ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      <div className={`options ${isSelectShow ? "show" : ""}`}>
        {categories.map((cate) => (
          <div
            className="option"
            key={cate.value}
            onClick={() => handleCategoryChange(cate)}
          >
            {cate.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
