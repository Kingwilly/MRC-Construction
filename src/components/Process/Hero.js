import React, { Component } from "react";
import Interior_Kitchen from "../../assets/images/Process/hero_3.jpg";

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
          <div className="content-wrapper-box">
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
                A design-build approach allows for our clients to have full
                control over their project as a unified process. We work with
                our clients from the start with architectural renderings and
                then seamlessly transition the design from concept to finished
                product. Our team is involved with every step of the process, so
                no details are lost through the development of the project, and
                our shared goal for the completed renovation is realized in an
                efficient, timely and organized manner. This process of syncing
                design and construction optimizes cost, scheduling,
                communication and constructability.
              </p>

              <p>
                We work closely with incredibly talented local architects, and
                our approach unifies the client / architect / builder team
                leading to extraordinary results. Established trade partnerships
                built on years of collaboration ensure that every project has a
                picture-perfect completion. Our background in building science,
                our understanding of design, and our processes for construction
                management separate us from every other contractor.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
