import React from "react";
import findAnEvent from "../../../images/find-an-event.JPG";
import organiseAnEvent from "../../../images/organise-an-event.JPG";
import sponsorAnEvent from "../../../images/sponsor-an-event.JPG";
import "./JoinUs.css";

const JoinUs = () => {
  const joinUs = [
    {
      id: "findAnEvent",
      title: "Find an Event",
      description:
        "Techstars hosts and supports hundreds of events all over the world. Explore the full range of both in-person and online events.",
    },
    {
      id: "organiseAnEvent",
      title: "Organize an Event",
      description:
        "Planning an event is a great way to develop both your local startup community and your own personal network.",
    },
    {
      id: "sponsorAnEvent",
      title: "Sponsor an Event",
      description:
        "Techstars events are a powerful way for companies to connect with local innovators and entrepreneurs.",
    },
  ];
  return (
    <div className="joinus-section-container">
      <h2>Join Us</h2>
      {joinUs.map((obj) => {
        return (
          <div className="joinus-items-container">
            {obj.id == "findAnEvent" ? (
              <img className="join-us-image" src={findAnEvent} />
            ) : obj.id == "organiseAnEvent" ? (
              <img src={organiseAnEvent} />
            ) : obj.id == "sponsorAnEvent" ? (
              <img src={sponsorAnEvent} />
            ) : null}

            <div className="joinus-items-description">
              <h3>{obj.title}</h3>
              <p>{obj.description}</p>
              <span className="learn-more">Learn more</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JoinUs;
