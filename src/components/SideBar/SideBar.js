import React, { useState } from 'react';
import { SideBarData } from './SideBarData';
import { Link } from "react-router-dom";
import { Container, Dropdown, Navbar } from 'react-bootstrap';
import './SideBar.css';
function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
    <nav className="row sidebar-nav">
      <div   className="col-12 side-bar">
      <ul  className="sidebar-navmenu">
      <li><i className="fa fa-bars " onClick={showSidebar}></i></li>
    <li className="navbar-logo"> <span ><img src="./images/Group493/Group493.png" alt="logo" className="navbar-logo"></img></span></li>
     
      </ul>
      </div>
      </nav>


      <div className="row">
        <div className="col-12">
      <ul  className={!sidebar ? "side-menu" : "side-menu inactive" } >
  {SideBarData.map((item,index) => {
                    return (
                        <li href="#/action-1" key={index} className={item.cName}>
                            <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>

                        </li>
                    )
                })}
  </ul>
  </div>
      </div>
      </div>
   
  );
}

export default SideBar;