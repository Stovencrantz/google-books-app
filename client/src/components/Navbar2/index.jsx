import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
      <ul>
        <li>
          <NavLink to="/" className={( {isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/Saved" className={( {isActive, isPending }) => 
          isPending ? "pending" : isActive ? "active" : ""
          }>
            Saved
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
