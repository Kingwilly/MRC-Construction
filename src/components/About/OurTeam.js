import React, { Component } from "react";
import { Row, Col } from "antd";

class OurTeam extends Component {
  // Maintance Copy Section
  render() {
    return (
      <div className="our-team-section">
        <div className="title-section">
          <p className="sub-title">OUR TEAM</p>
          <p className="title">THEN & NOW</p>
          <b>ORIGIN YEAR: 2005 </b>
        </div>
        <Row gutter={16} className="text-section">
          <Col xs={{ span: 24 }} md={{ span: 12 }} style={{ padding: "9px" }}>
            <p>
              Michael Robert Construction unofficially began more than several
              decades ago as Mike Mroz, owner, took it upon himself to make
              several “improvements” to his Westfield block and home. While some
              projects ended abruptly with Town “STOP” orders (apparently ten
              year olds aren’t qualified to build using high-grade dumpster
              materials), others have become longer-lasting upgrades (Mike’s
              self-taught basement and bathroom renovations to his parent’s home
              while in middle school still stand the test of time today!).
              Decades (and many home projects later), this evolved into the
              launch of Michael Robert.
            </p>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} style={{ padding: "9px" }}>
            <p>
              Construction in 1995, with the start-up first doing work for
              friends and family. As MRC's reputation for customer commitment,
              high-end design and full service spread, the company expanded.
              Currently, MRC has 3??? dedicated project managers with over 4
              decades of combined experience, a design and planning manager with
              over a decade of industry experience, and style and design
              guidance of MRC's sister interior design company (owned by Mike's
              wife, Ellie), Ellie Mroz Design. We are both locally and
              nationally recognized for both customer service and design.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default OurTeam;
