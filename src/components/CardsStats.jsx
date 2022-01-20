import React from "react";
import cards from "../data";
function CardsStats() {
  const count = cards.length;
  return (
    <div className="main__num">
      <span>{count}: projects</span>
    </div>
  );
}

export default CardsStats;
