import React from "react";

function SearchBar({ setQuery }) {
  return (
    <div>
      <input
        className="input"
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      ></input>
    </div>
  );
}

export default SearchBar;
