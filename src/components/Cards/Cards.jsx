import React from "react";
import "./Cards.css";
import Card from "../Card/Card";

export default function Cards({ cities, onClose }) {
  return (
    <div className="cards">
      {cities.map((c) => (
        <Card
          key={c.id}
          max={c.max}
          min={c.min}
          temp={c.temp}
          name={c.name}
          img={c.img}
          id={c.id}
          onClose={() => onClose(c.id)}
        />
      ))}
    </div>
  );
}
