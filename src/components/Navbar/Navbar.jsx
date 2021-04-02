import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import NavigationItemDetail from "./NavigationItemDetail";
import logoDarkImage from "../../images/logo-dark.png";
import Sidebar from "./Sidebar";
import "./Navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navItemHovered: "", showSideMenu: false };
  }

  onMouseOverNavigationItem = (e) => {
    this.setState({ navItemHovered: e.target.id });
    document.getElementById("navigation-item-detail").style.display =
      "inline-block";
  };

  onMouseOutNavigationItem = () => {
    document.getElementById("navigation-item-detail").style.display = "none";
  };

  handleShowSideMenu = () => {
    this.setState({ showSideMenu: !this.state.showSideMenu });
  };

  render() {
    return (
      <>
        <div className="navbar-container">
          <div className="navbar-logo-container">
            <Link to="/">
              <img
                id="logoImage"
                src={logoDarkImage}
                alt="Techstars Logo"
              ></img>
            </Link>
          </div>
          <div className="navbar-links-container">
            <ul className="navbar-links-list">
              <li
                id="startups"
                className="navbar-link-item"
                onMouseOver={(e) => this.onMouseOverNavigationItem(e)}
                onMouseOut={(e) => this.onMouseOutNavigationItem(e)}
              >
                <Link className="nav-link" to="/">
                  <span>startups</span>
                </Link>
              </li>
              <li
                id="corporations"
                className="navbar-link-item"
                onMouseOver={(e) => this.onMouseOverNavigationItem(e)}
                onMouseOut={(e) => this.onMouseOutNavigationItem(e)}
              >
                <Link className="nav-link" to="/">
                  <span>corporations</span>
                </Link>
              </li>
              <li
                id="communities"
                className="navbar-link-item"
                onMouseOver={(e) => this.onMouseOverNavigationItem(e)}
                onMouseOut={(e) => this.onMouseOutNavigationItem(e)}
              >
                <Link className="nav-link" to="/">
                  <span>communities</span>
                </Link>
              </li>
              <li
                id="investors"
                className="navbar-link-item"
                onMouseOver={(e) => this.onMouseOverNavigationItem(e)}
                onMouseOut={(e) => this.onMouseOutNavigationItem(e)}
              >
                <Link className="nav-link" to="/">
                  <span>investors</span>
                </Link>
              </li>
              <li
                id="mission"
                className="navbar-link-item"
                onMouseOver={(e) => this.onMouseOverNavigationItem(e)}
                onMouseOut={(e) => this.onMouseOutNavigationItem(e)}
                className="navbar-link-item"
              >
                <Link className="nav-link" to="/">
                  <span>mission</span>
                </Link>
              </li>
            </ul>
          </div>
          <FontAwesomeIcon
            id="navbar-menu-icon"
            className="navbar-menu-icon"
            icon={this.state.showSideMenu ? faTimes : faBars}
            onClick={this.handleShowSideMenu}
          />
          {this.state.showSideMenu ? <Sidebar /> : null}
        </div>
        <div id="navigation-item-detail">
          <NavigationItemDetail navItemHovered={this.state.navItemHovered} />
        </div>
      </>
    );
  }
}

export default Navbar;
