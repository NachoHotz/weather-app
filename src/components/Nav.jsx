import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import "./styles/Nav.css";
import "./styles/About.css";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">
          Weather App
        </span>

      <ul className="links">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </ul>

      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
