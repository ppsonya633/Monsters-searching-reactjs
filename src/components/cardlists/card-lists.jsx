import React from "react";
import "./cardlist-styles.css";
import { Cards } from "../cards/cards-component";

export const Cardlist = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Cards key={monster.id} monster={monster}></Cards>
      ))}
    </div>
  );
};
