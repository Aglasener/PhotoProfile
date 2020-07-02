import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function HeaderBar() {
  return (

    <nav className ="navbar navbar-light navbar-expand-lg fixed-top flex-md-nowrap header">
        <Link className="navbar-brand col-sm-3 col-md-2 mr-0" id = "Name" to="/">
            Ge Wang
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav navbar-nav ml-auto">
            
            <li className="nav-item active">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
            </li>
            
            <li className="nav-item">
                <a className="nav-link" href="/test">Portfolio</a>
            </li>
            
            <li className="nav-item">
                <a className="nav-link" href="/test" >Contact</a>
            </li>
            
        </ul>
        </div>
    </nav>

    );
}

export default HeaderBar;

