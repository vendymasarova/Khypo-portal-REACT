import React from "react";
import Card from "./Card";

function Cards({ cards }) {
  return (
    <div className="main__cards">
      {cards.map((card) => {
        return <Card key={card.id} {...card}></Card>;
      })}
    </div>
  );
}

export default Cards;
