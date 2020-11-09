import React, { useState } from "react";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("Search");

  function setActivePill(event) {
    event.preventDefault();
    console.log("evnt target: ", event.target.textContent)
    setActiveNav(event.target.textContent);
    console.log("Active pill: ", activeNav);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand">Google Books</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li
            className="nav-item"
            id="searchNavItem"
            active={activeNav === "Search" ? "true" : "undefined"}
            onClick={setActivePill}
          >
            <a className="nav-link" href="/">
              Search
            </a>
          </li>
          <li
            className="nav-item"
            id="savedNavItem"
            active={activeNav === "Saved" ? "true" : "undefined"}
            onClick={setActivePill}
          >
            <a className="nav-link" href="/saved">
              Saved
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
