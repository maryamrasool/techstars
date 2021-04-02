import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faLinkedin,
  faYoutube,
  faTwitterSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import NavigationItemDetail from "./NavigationItemDetail";

import "./Sidebar.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showSideMenuItemDetail: false, navItemClicked: "" };
  }

  handleShowSideMenuItemDetail = (e) => {
    this.setState({
      showSideMenuItemDetail: !this.state.showSideMenuItemDetail,
      navItemClicked: e.target.id,
    });
  };

  render() {
    let navItems = [
      "startups",
      "corporations",
      "communities",
      "investors",
      "mission",
    ];

    let startups = [
      {
        id: 0,
        heading: "overview",
        description: "Learn how Techstars can scale your vision",
      },
      {
        heading: "accelerators",
        description: "Find the right program for your goals",
      },
      {
        heading: "mentors",
        description: "Learn how Techstars can scale your vision",
      },
      {
        heading: "get in touch",
        description: "Connect with the Techstars team",
      },
      {
        heading: "inside techstars",
        description: "Learn more about the accelerator experience",
      },
    ];

    let corporations = [
      {
        heading: "overview",
        description: "Connecting corporations with promising startups",
      },
      {
        heading: "partnership",
        description: "Future proof your business with startups in your field",
      },
      {
        heading: "membership",
        description: "Source startups at the forefront of innovation",
      },
      {
        heading: "sponsorship",
        description: "Get access to this unrivaled network",
      },
    ];

    let communities = [
      {
        heading: "overview",
        description:
          "Learn how Techstars is helping entrepreneurs in your community",
      },
      {
        heading: "startup week",
        description: "Celeberate entrepreneurs in communities across the world",
      },
      {
        heading: "startup weekend",
        description: "Start building your future in just 54 hours",
      },
      {
        heading: "startup digest",
        description:
          "Explore the personalized insider newsletter for all things startup",
      },
      {
        heading: "ecosystem development",
        description:
          "Trasnform your startup community into a thriving ecosystem",
      },
    ];

    let investors = [
      {
        heading: "overview",
        description: "Learn how Techstars invests in the future",
      },
      {
        heading: "portfolio",
        description: "See Techstars alumni companies",
      },
    ];

    let mission = [
      {
        heading: "overview",
        description: "Learn more about the values that drive us",
      },
      {
        heading: "diversity & inclusion",
        description:
          "Our commitment to increase diversity, equality and inclusion",
      },
      {
        heading: "code of conduct",
        description: "Dive deeper into the standards we live by",
      },
      {
        heading: "techstars foundation",
        description: "Innovation accessible to anyone, anywhere",
      },
    ];
    
    return (
      <div className="sidebar-container">
        {this.state.showSideMenuItemDetail ? (
          <NavigationItemDetail
            showSideMenuItemDetail={this.state.showSideMenuItemDetail}
            handleShowSideMenuItemDetail={this.handleShowSideMenuItemDetail}
            navItemClicked={this.state.navItemClicked}
          />
        ) : (
          <div>
            <div className="sidebar-menu-items-container">
              {navItems.map((obj, i) => {
                return (
                  <div id={obj} key={i} className="sidebar-menu-item">
                    <p>{obj}</p>
                    <FontAwesomeIcon
                      id={obj}
                      icon={faChevronRight}
                      onClick={(e) => this.handleShowSideMenuItemDetail(e)}
                    />
                  </div>
                );
              })}
            </div>
            <div className="sidebar-footer-links">
              <span>contact</span>
              <span>careeers</span>
              <span>stories</span>
              <span>news</span>
            </div>
            <div className="sidebar-social-links">
              <FontAwesomeIcon
                className="social-icon"
                icon={faFacebookSquare}
              />
              <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
              <FontAwesomeIcon className="social-icon" icon={faYoutube} />
              <FontAwesomeIcon className="social-icon" icon={faTwitterSquare} />
              <FontAwesomeIcon className="social-icon" icon={faInstagram} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Sidebar;
