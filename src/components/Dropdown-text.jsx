import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function DropdownText({ title, img, categories }) {
  console.log(categories);
  return (
    <div className="header__users--dropdown">
      <Dropdown>
        <Dropdown.Toggle className="dropdown__btn" id="dropdown-basic">
          <img src={img} alt="" />
          {title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* {categories.map((category, index) => {
            return <div key={index}> {category}</div>;
          })} */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropdownText;
