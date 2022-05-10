import React from "react";
import { Link } from "react-router-dom";
import navimg from "./../../images/nav.png";

import "./style.css";

export default function Navbar() {
  return (
    <>
      <navbar className="main_navbar fixed-top">
          <div className="brand-logo-name">
            <Link to={"/"} className="brand-logo">
              <img src={navimg} alt="img" />
            </Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#detail">Services</a>
              </li>
              <li>
                <a href="#detail">About</a>
              </li>
              <li>
                <a href="#detail">Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </navbar>
    </>
  );
}
