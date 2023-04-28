import React from "react";
import "./search-box.style.css";
const SearchBox = ({placeholder, onChangeHandler, className}) => {
  return (
    <input
      className={`search-box ${className}`}
      placeholder={placeholder}
      type="search"
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
