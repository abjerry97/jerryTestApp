import React, { useState } from 'react';
import { SideBarData } from './SideBarData';
import { Link } from "react-router-dom";
import './SideBar.css';
function SideBar() {
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="container-fluid" >
    <nav className="row sidebar-nav">
      <div   className="side-bar">
       <ul  className="sidebar-navmenu">
      <li><i className="fa fa-bars " onClick={showSidebar}></i></li>
    <li className="navbar-logo"> 
    <Link to="/">
    <span >
      
      <img src="./images/Group493/Group493.png" alt="logo" ></img>
      </span> </Link></li>
     
      </ul> 
      </div>
      </nav>


      <div className="row">
        <div className="col-sm-12">
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
