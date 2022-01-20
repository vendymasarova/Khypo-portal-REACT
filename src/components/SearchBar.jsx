import React from "react";

function SearchBar() {
  return (
    <div className="header__search-bar">
      <img src="images/icons/icon-search.svg" alt="" />
      <input type="text" placeholder="Search..." />
    </div>
  );
}

export default SearchBar;
