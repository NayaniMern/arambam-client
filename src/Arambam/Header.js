import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="container-fluid px-0">
      <nav className="navbar navbar-expand-lg">
        <div className="container  px-5 px-lg-5">
          
        
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" style={{ width: "200px", height: "60px" }} />
          </NavLink>

          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        
          <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavId">
            <ul className="navbar-nav mx-auto gap-lg-5 text-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>

           
            <div className="d-flex justify-content-center mt-3 mt-lg-0">
              <NavLink className="btn login-btn" to="/writeforus">Write For Us!</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
