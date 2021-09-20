import React from 'react';
import { Link } from 'react-router-dom';
import './GigNavbar.css';
function AddGigNavBar() {
  return (
      <nav>
      <ul className="topnav" id="dropdownClick">
        <li><Link to="/"><h2>  Gigs</h2></Link></li>
        
        
      </ul>
    </nav>

  );
}

export default AddGigNavBar;
