import React, { Component } from "react";
import { Row, Col } from "antd";

class DesignBuild extends Component {
  // Maintance Copy Section
  render() {
    return (
      <div className="our-team-section">
        <div className="title-section">
          <p className="sub-title">PROCESS</p>
          <p className="title">COMMUNICATIONS</p>
        </div>
        <Row gutter={16} className="text-section">
          <Col xs={{ span: 24 }} md={{ span: 12 }} style={{ padding: "9px" }}>
            <p>
              Above all else, we value honesty and integrity. At the start of
              each project, we review a customized Homeowner’s Manual. We take
              the time to outline expectations, responsibilities and the
              inevitable “emotional rollercoaster” that come with remodeling.
              Our Project Mangers become an extension of our client’s family
              during renovations.
            </p>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} style={{ padding: "9px" }}>
            <p>
              {" "}
              Aside from being on site every day, they hold weekly meetings to
              review project status and schedule. It is their job to anticipate
              and prepare for unexpected building conditions, and ensure that
              changes are clearly communicated. For the MRC team, managing the
              building process is not just about a superior end result, but
              about maximizing client satisfaction.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DesignBuild;
