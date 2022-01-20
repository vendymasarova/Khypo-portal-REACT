import React, { useState } from "react";

function Sidebar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className={click ? "sidebar open" : "sidebar"}>
      <div className="sidebar__open" onClick={handleClick}>
        <img
          className="sidebar__open--img"
          src="images/icons/icon-arrow-left-2.svg"
          alt=""
        />
      </div>
      <div className="sidebar__user">
        <img src="images/vatar.jpg" alt="user1" />
      </div>
    </div>
  );
}

export default Sidebar;
