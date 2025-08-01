import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-row">
          <Link to="/" className="navbar-logo">
            🩺 <span className="navbar-logo-text">MediCare</span>
          </Link>

          <div className="navbar-links">
            <Link
              to="/"
              className={path === "/" ? "navbar-link-active" : "navbar-link"}
            >
              🏠 <span className="navbar-link-text">Home</span>
            </Link>

            <Link
              to="/appointments"
              className={
                path === "/appointments" ? "navbar-link-active" : "navbar-link"
              }
            >
              📅 <span className="navbar-link-text">My Appointments</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
