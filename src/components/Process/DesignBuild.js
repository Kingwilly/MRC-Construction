import React, { Component } from "react";
import { Row, Col } from "antd";

class DesignBuild extends Component {
  // Maintance Copy Section
  render() {
    return (
      <div className="our-team-section">
        <div className="title-section">
          <p className="sub-title">PROCESS</p>
          <p className="title">DESIGN / BUILD</p>
        </div>
        <Row gutter={16} className="text-section">
          <Col xs={{ span: 24 }} md={{ span: 12 }} style={{ padding: "9px" }}>
            <p>
              A design-build approach allows for our clients to have full
              control over their project as a unified process. We work with our
              clients from the start with architectural renderings and then
              seamlessly transition the design from concept to finished product.
              Our team is involved with every step of the process, so no details
              are lost through the development of the project, and our shared
              goal for the completed renovation is realized in an efficient,
              timely and organized manner. This process of syncing design and
              construction optimizes cost, scheduling, communication and
              constructability.
            </p>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} style={{ padding: "9px" }}>
            <p>
              We work closely with incredibly talented local architects, and our
              approach unifies the client / architect / builder team leading to
              extraordinary results. Established trade partnerships built on
              years of collaboration ensure that every project has a
              picture-perfect completion. Our background in building science,
              our understanding of design, and our processes for construction
              management separate us from every other contractor.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DesignBuild;
