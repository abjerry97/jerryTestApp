import React, { useState } from "react";
import {
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  Container,
  NavDropdown,
  Offcanvas,
  OverlayTrigger,
  Tooltip,
  Image,
} from "react-bootstrap";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import "./NavBar.css";
import { IconContext } from "react-icons/lib";
function NavBar() {

  const [clicked, setclicked] = useState(false);

  const handleClick = () => setclicked(!clicked)

  const [searchBar, setSearchBar] = useState(false);
  const showSearchBar = () => setSearchBar(!searchBar);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <IconContext.Provider
    value={{ color: 'black', size: '20px' }}
  >
    <nav className="NavbarItems  ">
{/* 
    <Button variant="primary" onClick={handleShow} className="me-2">
        top
      </Button> */}
      <Offcanvas show={show} onHide={handleClose} placement="top" name="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Search</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form  >
          <FormControl
            type="search"
            placeholder="&#xf002; Search"
            // className= {searchBar ?  "mr-2 search-box active" : "mr-2 search-box"}
            aria-label="Search"
            style={{fontFamily:"FontAwesome"}}
          />
          
        </Form>
        </Offcanvas.Body>
      </Offcanvas>
 <Form className="navbar-logo" >
          <FormControl
            type="search"
            placeholder="&#xf002; Search"
            className= {searchBar ?  "mr-2 search-box active" : "mr-2 search-box"}
            aria-label="Search"
            style={{fontFamily:"FontAwesome"}}
          />
          
        </Form><i className={searchBar ? "fas fa-times" : "fas fa-search" } onClick={handleShow}></i>
       
      {/* <div className="search-icon" onClick={handleClick}  >
        <i className={clicked ? "fas fa-times" : "fas fa-search" } ></i> 
      </div> */}

      <ul  className="nav-menu">
        <li className="nav-links">
          
            <IoIcons.IoMdSettings />{" "}
          
          
        </li>
        <li  className="nav-links">
            <AiIcons.AiOutlineMail />{" "}
          </li>
        <li className="nav-links">
            <MdIcons.MdNotificationsNone />
          </li>
        <li className="nav-links">
          {/* {" "}
            <Navbar.Brand href="#home">
            <img src="./images/Rectangle13\Rectangle13.png" alt="hero"></img>
          </Navbar.Brand> */}
          <OverlayTrigger
    placement="bottom"
    overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
  >
    {({ ref, ...triggerHandler }) => (
      <Navbar.Brand href="#home" {...triggerHandler}
        className=""
      >
        <Image
          ref={ref}
          roundedCircle
          src="./images/Rectangle13\Rectangle13.png" alt="hero"
        />
        
      </Navbar.Brand>
    )}
  </OverlayTrigger>,
          </li>
      </ul>
    </nav>
    </IconContext.Provider>
  );
}

export default NavBar;
