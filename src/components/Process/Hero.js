import React, { Component } from "react";
import Interior_Kitchen from "../../assets/images/Process/hero.jpg";

class Hero extends Component {
  // Hero Panel

  render() {
    return (
      <div
        className="hero-image"
        style={{ backgroundImage: "url(" + Interior_Kitchen + ")" }}
      >
        <div className="hero-title-wrapper">
          <h2>PROCESS</h2>
          <h1>DESIGN / BUILD</h1>
        </div>
        <div className="hero-image-inner-wrapper">
          <div className="content-wrapper-box" style={{ maxHeight: "341px" }}>
            <div className="content-title">
              <p className="title">SQUARE ONE</p>
              <p className="sub-title"> HOW DOES IT ALL BEGIN?</p>
            </div>
            <div
              className="content-description"
              style={{
                padding: "31px"
              }}
            >
              <p>1. Call to review project</p>

              <p>2. Introduction meeting in your home</p>

              <p>3. Review options, timing, budget, variances, priorities</p>

              <p>4.Estimate</p>
              <br />
            </div>
          </div>
          <div className="content-wrapper-box" style={{ maxHeight: "567px" }}>
            <div className="content-title">
              <p className="title">SERVICE & QUALITY</p>
              <p className="sub-title"> MANAGING THE PROCESS</p>
            </div>
            <div
              className="content-description"
              style={{
                padding: "31px"
              }}
            >
              <p>
                Above all else, we value honesty and integrity. At the start of
                each project, we review a customized Homeowner’s Manual. We take
                the time to outline expectations, responsibilities and the
                inevitable “emotional rollercoaster” that come with remodeling.
              </p>

              <p>
                Our Project Mangers become an extension of our client’s family
                during renovations. Aside from being on site every day, they
                hold weekly meetings to review project status and schedule. It
                is their job to anticipate and prepare for unexpected building
                conditions, and ensure that changes are clearly communicated.
                For the MRC team, managing the building process is not just
                about a superior end result, but about maximizing client
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
