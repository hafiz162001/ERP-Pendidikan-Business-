import React from "react";

const Search = ({ label, placeholder, searchHandler }) => {
  return (
    <div className="mb-3 form">
      <form>
        {label ? (
          <label htmlFor="search" className="form-label">
            {label}
          </label>
        ) : (
          <></>
        )}
        <input
          type="text"
          id="search"
          placeholder={placeholder}
          name="search"
          onChange={searchHandler}
          className="form-control"
        />
      </form>
    </div>
  );
};

export default Search;
