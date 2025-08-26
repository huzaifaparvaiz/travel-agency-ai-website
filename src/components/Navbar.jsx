import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="websitename">
        <img className="logonav" src={logo} alt="logo" />
        <h1>FlyBeyond</h1>
      </div>
      <div className="navbar-items">
        <Link to="/" className="nav-link">
          <p>Home</p>
        </Link>
        <Link to="/destinations" className="nav-link">
          <p>Destinations</p>
        </Link>
        <Link to="/about" className="nav-link">
          <p>About Us</p>
        </Link>
        <Link to="/booknow" className="nav-link">
          <p>Book Now</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
