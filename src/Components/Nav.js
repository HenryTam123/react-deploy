import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-component">
      <nav className="nav-bar">
        <ul>
          <Link to="/" className="text-links">
            <li>Home</li>
          </Link>
          <Link to="/about" className="text-links">
            <li>About</li>
          </Link>
          <Link to="/project" className="text-links">
            <li>Projects</li>
          </Link>
          <Link to="/contact" className="text-links">
            <li>Contact Us</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
