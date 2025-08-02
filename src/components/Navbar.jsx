import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleMenuToggle = () => setMenuOpen((open) => !open);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🩺 <span className="navbar-logo-text">MediCare</span>
        </Link>
        <button
          className="navbar-toggle"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
        </button>
        <div className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
          <Link
            to="/"
            className={isActive("/") ? "navbar-link-active" : "navbar-link"}
            onClick={() => setMenuOpen(false)}
          >
            🏠 <span className="navbar-link-text">Home</span>
          </Link>
          <Link
            to="/appointments"
            className={
              isActive("/appointments") ? "navbar-link-active" : "navbar-link"
            }
            onClick={() => setMenuOpen(false)}
          >
            📅 <span className="navbar-link-text">My Appointments</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
