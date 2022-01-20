import React from "react";

function Card({ img, title, term, value, irr, state }) {
  return (
    <div className="card">
      <div className="card__img">
        <div className="card__img--label">
          <span className={state === "Open for investment" ? "free" : "danger"}>
            {state}
          </span>
        </div>
        <img src={img} alt={title} />
      </div>
      <h3 className="card__title">{title}</h3>
      <span className="card__subtitle"> Private equiity </span>
      <div className="card__info">
        <div className="card__info--value">
          <h4>{value}</h4>
          <span>Invested Value</span>
        </div>
        <div className="card__info--value">
          <h4>{term}</h4>
          <span>Term</span>
        </div>
        <div className="card__info--value">
          <h4>{irr}</h4>
          <span>Expected IRR</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
