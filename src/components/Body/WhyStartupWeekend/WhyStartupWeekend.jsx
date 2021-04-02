import React from "react";

import "./WhyStartupWeekend.css";

const WhyStartupWeekend = () => {
  return (
    <div className="why-startup-weekend-container">
      <h2>Why Startup Weekend</h2>
      <div className="why-startup-weekend-grid">
        <div className="grid-item">
          <h6>Connect with other creators</h6>
          <p>
            Startup Weekend is a great place to connect with passionate people
            driven to build something new. There is no better place to meet new
            friends, colleagues, mentors, cofounders, and investors.
          </p>
        </div>
        <div className="grid-item">
          <h6>Start something great</h6>
          <p>
            Knowing you’re not alone can make all the difference. Startup
            Weekend provides participants many opportunities to engage and
            connect with like-minded individuals — and truly start something
            amazing.
          </p>
        </div>
        <div className="grid-item">
          <h6>Learn from the best</h6>
          <p>
            Learn what it really takes to innovate, disrupt, and start a company
            from people who’ve been there. Startup Weekend features deep
            experiential learning guided by an experienced hand.
          </p>
        </div>
        <div className="grid-item">
          <h6>Improve your knowledge</h6>
          <p>
            Sometimes you really need more skills and knowledge to go to the
            next level. Startup Weekend also goes deep on specific topics or
            skill sets. Just what you need to progress quickly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyStartupWeekend;
