import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      {/* Logo */}
      <div className="navbar-logo">
        Aditi Joshi
      </div>

      {/* Links */}
      <div className="navbar-links">
        <a href="#professional" className="active font-inconsolata font-bold">
          Professional
        </a>
        {/* <a href="#contact" className="font-inconsolata font-bold">Contact</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
