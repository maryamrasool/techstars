import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import "./NavigationItemDetail.css";

const NavigationItemDetail = (props) => {
  const startups = [
    {
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

  const corporations = [
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

  const communities = [
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
      description: "Trasnform your startup community into a thriving ecosystem",
    },
  ];

  const investors = [
    {
      heading: "overview",
      description: "Learn how Techstars invests in the future",
    },
    {
      heading: "portfolio",
      description: "See Techstars alumni companies",
    },
  ];

  const mission = [
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

  let itemSelected = "";
  props.navItemHovered
    ? (itemSelected = props.navItemHovered)
    : (itemSelected = props.navItemClicked);

  return (
    <>
      <div className="navigation-item-detail-container">
        <div className="navigation-item-detail">
          {props.showSideMenuItemDetail ? (
            <div className="sidebar-detail-heading">
              <FontAwesomeIcon
                id="sidebar-chevron-left"
                icon={faChevronLeft}
                onClick={props.handleShowSideMenuItemDetail}
              />
              <p>{itemSelected}</p>
            </div>
          ) : null}
          <div className="navbar-subsection-container">
            {itemSelected == "startups"
              ? startups.map((obj, i) => {
                  return (
                    <div key={i} className="navigation-item-detail-subsection">
                      <span>
                        <h6>{obj.heading}</h6>
                        <p>{obj.description}</p>
                      </span>
                    </div>
                  );
                })
              : itemSelected == "corporations"
              ? corporations.map((obj, i) => {
                  return (
                    <div key={i} className="navigation-item-detail-subsection">
                      <span>
                        <h6>{obj.heading}</h6>
                        <p>{obj.description}</p>
                      </span>
                    </div>
                  );
                })
              : itemSelected == "communities"
              ? communities.map((obj, i) => {
                  return (
                    <div key={i} className="navigation-item-detail-subsection">
                      <span>
                        <h6>{obj.heading}</h6>
                        <p>{obj.description}</p>
                      </span>
                    </div>
                  );
                })
              : itemSelected == "investors"
              ? investors.map((obj, i) => {
                  return (
                    <div key={i} className="navigation-item-detail-subsection">
                      <span>
                        <h6>{obj.heading}</h6>
                        <p>{obj.description}</p>
                      </span>
                    </div>
                  );
                })
              : itemSelected == "mission"
              ? mission.map((obj, i) => {
                  return (
                    <div key={i} className="navigation-item-detail-subsection">
                      <span>
                        <h6>{obj.heading}</h6>
                        <p>{obj.description}</p>
                      </span>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationItemDetail;
