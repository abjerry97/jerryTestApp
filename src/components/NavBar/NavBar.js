import React, { useState } from "react";
import {
  Form,
  FormControl,
  Navbar,
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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <IconContext.Provider value={{ color: "black", size: "20px" }}>
      <nav className="NavbarItems">
        <Offcanvas show={show} onHide={handleClose} placement="top" name="top">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Search</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form>
              <FormControl
                type="search"
                placeholder="&#xf002; Search"
                aria-label="Search"
                style={{ fontFamily: "FontAwesome" }}
              />
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
        <Form className="navbar-logo">
          <FormControl
            type="search"
            placeholder="&#xf002; Search"
            className="mr-2 search-box"
            aria-label="Search"
            style={{ fontFamily: "FontAwesome", marginLeft: "2rem" }}
          />
        </Form>
        <i className="fas fa-search" onClick={handleShow}></i>

        <ul className="nav-menu">
          <li className="nav-links">
            <IoIcons.IoMdSettings />{" "}
          </li>
          <li className="nav-links">
            <AiIcons.AiOutlineMail />{" "}
          </li>
          <li className="nav-links">
            <MdIcons.MdNotificationsNone />
          </li>
          <li className="nav-links">
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>
              }
            >
              {({ ref, ...triggerHandler }) => (
                <Navbar.Brand href="#home" {...triggerHandler} className="">
                  <Image
                    ref={ref}
                    roundedCircle
                    src="./images/Rectangle13\Rectangle13.png"
                    alt="hero"
                  />
                </Navbar.Brand>
              )}
            </OverlayTrigger>
            ,
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default NavBar;
