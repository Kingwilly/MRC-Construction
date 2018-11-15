import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import Desktop from "../../assets/images/Charts/desktop.svg";
import Mobile from "../../assets/images/Charts/mobile.svg";

class ChartThing extends Component {
  // Maintance Copy Section
  render() {
    return (
      <div className="chart-thing">
        <Row gutter={16} className="chart-thing-inner-wrapper">
          <img src={Desktop} alt="Time Saved" className="desktop-chart" />
          <img src={Mobile} alt="Time Saved" className="mobile-chart" />
        </Row>
      </div>
    );
  }
}

export default ChartThing;
