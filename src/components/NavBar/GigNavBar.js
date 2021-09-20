import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./GigNavbar.css";
function GigNavBar() {
  return (
    <nav>
      <ul className="topnav" id="dropdownClick">
        <li>
          <Link to="/">
            <h2> Gigs</h2>
          </Link>
        </li>

        <li className="topnav-right">
          <Link
            to="/newgig"
            style={{
              background: "#2F417E",
              color: "#fff",
              border: "1px solid #F6F6F6",
              borderRadius: "10px",
            }}
          >
            New gig{" "}
            <Badge bg="none">
              <i className="fa fa-plus"> </i>
            </Badge>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default GigNavBar;
