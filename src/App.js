import "./App.scss";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownText from "./components/Dropdown-text";
import Cards from "./components/Cards";
import data from "./data";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import CardsStats from "./components/CardsStats";

const allCards = ["all", ...new Set(data.map((item) => item.state))];
console.log(allCards);

function App() {
  const [cards, setCards] = useState(data);
  const [categories, setCategories] = useState(allCards);
  console.log(categories);
  return (
    <div className="App">
      <div className="wrapper">
        <Nav />
        <div className="container main-content">
          <SearchBar />
          <DropdownText img="images/avatar.jpg" title="Jean Jimenez" />
          <div className="main__dropdowns">
            <div className="main__dropdowns--text">
              <DropdownText title="Status: all" />
              <DropdownText title="Type: all" />
              <DropdownText title="Catygory: all" categories={categories} />
            </div>
            <div className="main__dropdowns--icon">
              <DropdownText img="images/icons/icon-view.svg" />
            </div>
          </div>
          <CardsStats />
          <Cards cards={cards} />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
