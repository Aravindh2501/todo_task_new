import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useTheme } from "./context/ThemeContext";
import useTodos from "./hooks/useTodos";
import SearchBar from "./components/SearchBar";
import { categories, filter } from "./Content/data";
import { FcFilledFilter } from "react-icons/fc";
import CategoryFilter from "./components/CategoryFilter";
import TodoItem from "./components/TodoItem";
import AddTodoForm from "./components/AddTodoForm";
import moon from "./assets/moon.png";
import sun from "./assets/contrast.png";

const App = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { todos, addTodo, deleteTodo, completeTodo } = useTodos();

  const [isSelectShow, setIsSelectShow] = useState(false);
  const [isFilterShow, setIsFilterShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [activeFilter, setActiveFilter] = useState(filter[0].value);
  const [search, setSearch] = useState("");

  const handleSelectToggle = useCallback(() => {
    setIsSelectShow((prev) => !prev);
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
    setIsSelectShow(false);
  }, []);

  const handleFilterToggle = useCallback(() => {
    setIsFilterShow((prev) => !prev);
  }, []);

  const handleFilterSelect = useCallback((filterValue) => {
    setActiveFilter(filterValue);
    setIsFilterShow(false);
  }, []);

  const handleSearch = useCallback(() => {
    setSearch("");
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "d") {
        toggleTheme();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleTheme]);

  const filteredResults = useMemo(() => {
    return todos.filter((todo) => {
      const isCategoryMatch =
        selectedCategory.value === "all" ||
        selectedCategory.value === todo.category;
      const isStatusMatch =
        activeFilter === "All" || todo.status === activeFilter;

      return (
        isCategoryMatch &&
        isStatusMatch &&
        todo.title.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [todos, selectedCategory, activeFilter, search]);

  return (
    <div className={`App ${isDarkMode ? "dark-theme" : ""}`}>
      <div className="container">
        <div className="todo">
          <div className="todo_top">
            <h2 className="text-gradient">Todo List</h2>
            <div
              className="toggle_container"
              onClick={toggleTheme}
              style={{
                background: isDarkMode ? "black" : "white",
              }}
            >
              <img
                src={moon}
                alt="Moon icon"
                className="moon"
                style={{ width: "16px", height: "16px" }}
              />
              <div
                className="ball"
                style={{
                  background: isDarkMode ? "white" : "black",
                  transform: isDarkMode ? "translateX(19px)" : "translateX(0)",
                }}
              ></div>
              <img
                src={sun}
                alt="Sun icon"
                className="sun"
                style={{ width: "16px", height: "16px" }}
              />
            </div>
          </div>
          <SearchBar
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
          <div className="filter_container">
            <div className="filter_select">
              <CategoryFilter
                selectedCategory={selectedCategory}
                isSelectShow={isSelectShow}
                handleSelectToggle={handleSelectToggle}
                categories={categories}
                handleCategoryChange={handleCategoryChange}
              />
            </div>
            <div className="filter_menu">
              <div className="filter_icon">
                <button className="filter_btn" onClick={handleFilterToggle}>
                  <FcFilledFilter />
                </button>
              </div>
              {isFilterShow && (
                <div className="filter_card">
                  <ul className="filter_list">
                    {filter.map((fill) => (
                      <li
                        key={fill.value}
                        className={activeFilter === fill.value ? "active" : ""}
                        onClick={() => handleFilterSelect(fill.value)}
                      >
                        {fill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <TodoItem
            todos={filteredResults}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
          <AddTodoForm handleAddTodo={addTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
