import React from "react";
import { MdClose } from "react-icons/md";

const SearchBar = React.forwardRef(
  ({ search, setSearch, handleSearchClose }, ref) => {
    return (
      <div className="search_container">
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Search for a todo"
          onChange={(e) => setSearch(e.target.value)}
          ref={ref}
        />
        {search && (
          <button className="search_btn" onClick={handleSearchClose}>
            <MdClose />
          </button>
        )}
      </div>
    );
  }
);

export default SearchBar;
