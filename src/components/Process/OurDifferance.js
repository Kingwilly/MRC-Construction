import React, { Component } from "react";
import { Row, Col } from "antd";

class OurDifferance extends Component {
  // Maintance Copy Section
  render() {
    return (
      <div
        style={{
          borderTop: "2px solid #DDDDDD",
          maxWidth: "1200px",
          margin: "auto"
        }}
      >
        <div className="our-differance">
          <Row gutter={16} className="text-section">
            <Col xs={{ span: 24 }} md={{ span: 16 }} style={{ padding: "9px" }}>
              <div className="title-section">
                <p className="title">THE MRC DIFFERENCE</p>
              </div>
              <p>
                MRC's roots in design and building run deep. In particular,
                Mike's study of classical architecture and design give him a
                solid foundation for respecting a home's integrity and natural
                balance - factors that continue to differentiate MRC from other
                builders. Although continuing education is not a state
                requirement for general contractors, MRC believes that it is
                essential to continued improvement. Our team regularly attends
                industry classes on all aspects of building, ranging from latest
                energy-efficiency techniques to updated safety standards.
              </p>
              <br />
              <p>
                With almost a decade committed to mastering the green energy
                approach, we are committed to building homes differently. We
                strive to eliminate inefficiencies with energy consumption in
                your home, whether it be a new custom construction project, an
                addition or a renovation. Improvements include, but are not
                limited to, focusing on proper insulation, air sealing and
                upgrading heating and cooling systems. Using quality products
                and proven methods, we aim for optimal energy efficiency.
              </p>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 8 }} style={{ padding: "9px" }}>
              <p className="bullet-point-title">MRC PRIDES ITSELF ON:</p>
              <ul>
                <li>• Award-Winning Design</li>
                <li>• Whole House Approach</li>
                <li>• Project Management </li>
                <li>• Client Satisifaction</li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default OurDifferance;
