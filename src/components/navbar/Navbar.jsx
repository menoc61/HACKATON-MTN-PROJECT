import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";
import logo from "../../assets/logo.jpeg";
import "./style.scss";

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    let currentTab = location.pathname.split("/")[1] || "home";
    if (currentTab !== "home" && currentTab.slice(-1) !== "s")
      currentTab += "s";

    const tabToSetActive = document.querySelector(`.link#${currentTab}`);
    if (tabToSetActive) tabToSetActive.classList.add("active");
  }, [location.pathname]);

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="left">
          <Link to="/" className="link">
            <img src={logo} alt="logo" className="logo_img"/>
            <h3 className="logo">NextGel</h3>
          </Link>
        </div>

        <div className="middle">
          <div className="nav-links">
            <Link to="/" className="link" id="home">
              <HomeOutlinedIcon className="icon" />
              <span>Home</span>
              <div className="navlink-border"></div>
            </Link>
            <Link to="/materials/all" className="link" id="materials">
              <LibraryBooksOutlinedIcon className="icon" />
              <span>Materials</span>
              <div className="navlink-border"></div>
            </Link>
            <Link to="/tasks/all" className="link" id="tasks">
              <AssignmentOutlinedIcon className="icon" />
              <span>Tasks</span>
              <div className="navlink-border"></div>
            </Link>
            <Link to="/doubts/all" className="link" id="doubts">
              <LiveHelpOutlinedIcon className="icon" />
              <span>Doubts</span>
              <div className="navlink-border"></div>
            </Link>
          </div>
        </div>

        <div className="right">
          <div className="profile">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjJflBWUNTLijUb_GMzU9o7aSyRbBLkip8A&usqp=CAU"
              alt="profileimg"
            />
            <div className="userDetails">
              <span>Jane Doe</span>
              <span>Student</span>
            </div>

            <ArrowDropDownIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
