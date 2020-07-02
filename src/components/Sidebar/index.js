import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Sidebar() {
  return (
        <nav className ="col-md-3 d-none d-md-block bg-light sidebar">
            
            <div className ="sidebar-sticky">
                <ul className ="nav flex-column">
                <li className="nav-item active">
                <Link
                    to="/Project1"
                    className={
                        window.location.pathname === "/Project1" || window.location.pathname === "/Project1"
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    Project 1
                </Link>
                    </li>
                    <li className="nav-item">
                        <a className ="nav-link" href="/test">
                            Project 2
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className ="nav-link" href="/test">
                            Project 3
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className ="nav-link" href="/test">
                            Project 4
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className ="nav-link" href="/test">
                            Project 5
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className ="nav-link" href="/test">
                            Project 6
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
      );
}

export default Sidebar;
