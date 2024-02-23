import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Navbar component for navigation
export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} justify-content-between`}
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            to="/"
          >
            {props.title}
          </Link>

          <Link
            to="/about"
            className={`text-${props.mode === "light" ? "dark" : "light"}`}
          >
            About
          </Link>
          {/* Dark Mode toggle */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>

          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

// PropTypes for Navbar component
Navbar.propTypes = {
  title: PropTypes.string, // Title of the Navbar
  mode: PropTypes.string, // Mode of the Navbar (light or dark)
  toggleMode: PropTypes.func, // Function to toggle mode
};

// Default props for Navbar component
Navbar.defaultProps = {
  title: "Enter Title", // Default title
};
