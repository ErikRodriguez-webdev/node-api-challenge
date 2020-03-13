import React from "react";
import "../App.css";

const CardDisplay = (props) => {
  return (
    <div className="aCard">
      <p>{props.data.name}</p>
      <p>{props.data.description}</p>
    </div>
  );
};

export default CardDisplay;
