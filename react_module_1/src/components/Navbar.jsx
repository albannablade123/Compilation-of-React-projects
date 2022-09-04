import React from "react";
import "../App.css";
import reactLogo from "../assets/react.svg";

const Navbar = () => {
  return (
        <nav className="navbar">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                <h3 className="title-react">ReactFacts</h3>
                <h4 className="course-title">React Course - Project 1</h4>
        </nav>
  );
};

export default Navbar;
