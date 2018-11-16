import React, { Component } from "react";
import ContactIcon from "../../assets/images/Common/contact-icon.svg";

class InfoBar extends Component {
  render() {
    return (
      <div className="company-info-wrapper">
        <div className="info-row">
          <div
            className="info-item border-top"
            style={{ width: "30%", borderRight: "2px solid #dddddd" }}
          >
            <p className="label">STREET</p>
            <p className="value">400 WEST BROAD STREET </p>
          </div>
          <div
            className="info-item"
            style={{ width: "27%", borderRight: "2px solid #dddddd" }}
          >
            <p className="label">TOWN</p>
            <p className="value">WESTFIELD, NJ</p>
          </div>
          <div
            className="info-item"
            style={{ width: "23%", borderRight: "2px solid #dddddd" }}
          >
            <p className="label">PHONE</p>
            <a className="value" href="tel:9082320134">
              (908) 232 0134
            </a>
          </div>
          <div className="info-item border-bottom" style={{ width: "23%" }}>
            <p className="label">EMAIL</p>
            <a className="value" href="mailto:info@gmail.com">
              <img
                src={ContactIcon}
                alt="contact-icon"
                style={{ maxWidth: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoBar;
