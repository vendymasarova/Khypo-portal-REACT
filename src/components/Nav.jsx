import React, { useState } from "react";

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className={click ? "nav open" : "nav"}>
      <div className="nav__open" onClick={handleClick}>
        <img
          className="nav__open--img"
          src="images/icons/icon-arrow-left.svg"
          alt=""
        />
      </div>
      <div className="nav__logo">
        <img src="images/logo.png" alt="" />
      </div>
      <ul className="nav__links">
        <a href="#" className="nav__links--item">
          <li>
            <img src="images/icons/icon-dashboard.svg" alt="" />
            Dashboard
          </li>
        </a>
        <a href="#" className="nav__links--item">
          <li>
            <img src="images/icons/icon-case.svg" alt="" />
            My portfolio
          </li>
        </a>
        <a href="#" className="nav__links--item">
          <li className="active">
            <img src="images/icons/icon-graph.svg" alt="" />
            My new Opportunities
          </li>
        </a>
        <a href="#" className="nav__links--item">
          <li>
            <img src="images/icons/icon-flag.svg" alt="" />
            Past Investments
          </li>
        </a>
        <a href="#" className="nav__links--item">
          <li>
            <div className="notification"></div>
            <img src="images/icons/icon-download.svg" alt="" />
            Documents
          </li>
        </a>
        <a href="#" className="nav__links--item">
          <li>
            <div className="notification"></div>
            <img src="images/icons/icon-envelope.svg" alt="" />
            Messages
          </li>
        </a>
        <a href="#" className="nav__links--item">
          <li>
            <img src="images/icons/icon-book.svg" alt="" />
            News
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default Nav;
