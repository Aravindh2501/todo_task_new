import React from "react";
import { GrPowerReset } from "react-icons/gr";

const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search_container">
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Search for a todo"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search_btn" onClick={handleSearch}>
        <GrPowerReset />
      </button>
    </div>
  );
};

export default SearchBar;
