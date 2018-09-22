import React, { Component } from "react";
import { Row, Col } from "antd";

// Normal Photos
import Interior_Shot from "../../assets/images/About/interior-section-3.jpg";
import QuoteMark from "../../assets/images/Common/quote_start.svg";

class Maintanence extends Component {
  // Maintance Copy Section
  render() {
    return (
      <div className="maintainence-section">
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 10 }} style={{ padding: "9px" }}>
            <img
              src={Interior_Shot}
              alt="Interior Of Office"
              className="interior-shot"
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 14 }} style={{ padding: "9px" }}>
            <div className="text-content-wrapper">
              <div className="top-block">
                <p className="sub-title">OUR TEAM</p>
                <p className="title">CONCIERGE & MAINTENANCE</p>
                <p className="content">
                  Once we complete a project, the relationship we have with our
                  client is far from over. We stand by our work, guaranteeing
                  craftsmanship for 3 years - triple the remodeling industry
                  standard. While our dedicated project managers are on site
                  everyday, the MRC office is also fully staffed to ensure that
                  communication lines remain open beyond the job site. We are
                  committed to going the extra mile to earn complete client
                  satisfaction. Our goal is to maintain relationships that long
                  outlive our warranty.
                </p>
              </div>
              <div className="quote-block">
                <div className="quote-icon start">
                  <img src={QuoteMark} alt="Quote Start" />
                </div>
                <div className="quote-icon end">
                  <img src={QuoteMark} alt="Quote End" />
                </div>
                <div className="quote-block-inner">
                  <p className="quote">
                    In short, they went above and beyond. Michael Roberts
                    Construction was the general contractor for my whole house
                    renovation. The project was done in two phases so we could
                    continue to live in the house throughout the project.
                  </p>
                  <p className="speaker">
                    MOLLY & PAUL CABRAL <br /> WESTFIELD, NJ
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Maintanence;
