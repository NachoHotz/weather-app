import React from "react";
import "./Ciudad.css";

export default function Ciudad({ city }) {
  return (
      <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperature: {city.temp} ºC</div>
          <div>Weather: {city.weather}</div>
          <div>Wind: {city.wind} km/h</div>
          <div>Clouds: {city.clouds}</div>
          <div>Latitude: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
  );
}
