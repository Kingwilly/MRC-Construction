import React, { Component } from "react";
import { Row, Col } from "antd";

import PANEL_ONE_IMAGE from "../../assets/images/Process/triple/one.jpg";
import PANEL_TWO_IMAGE from "../../assets/images/Process/triple/two.jpg";
import PANEL_THREE_IMAGE from "../../assets/images/Process/triple/three.jpg";

import Arrow_Button from "../../assets/images/Common/button_arrow.svg";

class TriplePlay extends Component {
  // Maintance Copy Section
  render() {
    return (
      <div className="triple-play-section">
        <Row gutter={16} className="triple-play-inner-wrapper">
          <Col
            xs={{ span: 24 }}
            md={{ span: 8 }}
            style={{ padding: "9px" }}
            className="panel"
          >
            <h4>ONE</h4>
            <div className="single-panel">
              <div className="title-panel">
                <p>DEFINE</p>
              </div>
              <div className="content-panel">
                <p>
                  The MRC team works with our clients to define the needs,
                  priorities and characteristics of a project. Proper
                  preparation and detailing of the scope helps us build a
                  project to our client’s budget, not beyond.
                </p>
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 8 }}
            style={{ padding: "9px" }}
            className="panel"
          >
            <h4>TWO</h4>
            <div className="single-panel">
              <div className="title-panel">
                <p>TRANSFORM</p>
              </div>
              <div className="content-panel">
                <p>
                  Our design team transforms the project concept into a
                  buildable product. The renovations begin to take shape through
                  line drawings and architectural renderings. In this
                  collaborative process, we ensure that renovations complement
                  the existing attributes of your home.
                </p>
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 8 }}
            style={{ padding: "9px" }}
            className="panel"
          >
            <h4>THREE</h4>
            <div className="single-panel">
              <div className="title-panel">
                <p>CREATE</p>
              </div>
              <div className="content-panel">
                <p>
                  The renovations take shape as the design-build project become
                  a physical part of your home. Our production crew strives to
                  expertly marry the new construction with old, so the project
                  looks and feels a part of your home’s heritage.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TriplePlay;
