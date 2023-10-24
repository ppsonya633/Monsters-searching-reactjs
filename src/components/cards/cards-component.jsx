import React from "react";
import "./cards-styles.css";
export const Cards = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={"https://robohash.org/${props.monster.id}?set=set2&Size=180*180"}
    />
    <h1>{props.monster.name}</h1>
    <p>{props.monster.email}</p>
  </div>
);
