import React from "react";
import "./Booknow.css";
import logo from "../assets/logo.png";
import Aurora from "./Aurora";

function Booknow() {
  return (
    <div className="parent">
      {/* Background */}
      <Aurora
        className="aurora-bg"
        colorStops={["#3A29FF", "#FF3A75", "#1ED3A6"]}
      />

      {/* Content */}
      <div className="form-wrap">
        <div className="form-box">
          {/* Brand ABOVE Sign up, logo on the LEFT */}
          <div className="mainname">
            <img className="logobooknow" src={logo} alt="FlyBeyond logo" />
            <span className="sitename">FlyBeyond</span>
          </div>

          <h1 className="heading">Sign up</h1>

          {/* Your form fields */}
          <form className="form">
            <label>First name:</label>
            <input type="text" placeholder="First name" />

            <label>Last name:</label>
            <input type="text" placeholder="Last name" />

            <label>Email:</label>
            <input type="email" placeholder="@gmail.com" />

            <label>Password:</label>
            <input
              type="password"
              placeholder="8 letters, uppercase & special character"
            />

            <button type="submit">Create account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booknow;
