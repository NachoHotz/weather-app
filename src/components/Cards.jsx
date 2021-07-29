import React from "react";
import "./styles/Cards.css";
import Card from "./Card.jsx";

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
