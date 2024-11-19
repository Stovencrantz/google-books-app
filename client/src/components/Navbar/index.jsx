import {NavLink} from "react-router-dom";

export default function Navbar() {


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id='navbar'>
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
        <li>
          <NavLink exact to="/" className={( {isActive, isPending }) => 
            isPending ? "pending" : isActive ? "active" : ""
          }>
            Search
          </NavLink>
        </li>
        <br /> 
        <li>
          <NavLink exact to="/saved" className={( {isActive, isPending }) => 
          isPending ? "pending" : isActive ? "active" : ""
          }>
            Saved
          </NavLink>
        </li>
        </ul>
      </div>
    </nav>
  );
}
