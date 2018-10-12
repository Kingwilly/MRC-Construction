import React, { Component } from "react";
import { Col } from "antd";
import Stairs_Image from "../../assets/images/Home/Gallery/Stairs.jpg";

class SingleUnit extends Component {
  // Maintance Copy Section
  render() {
    return (
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
        <div className="single-project-outer">
          <div
            className="single-project-inner"
            style={{ background: "url(" + Stairs_Image + ")" }}
          >
            <a href="#" className="panel-cta-outer">
              <div className="panel-cta-inner">
                <div className="text-content">
                  <p className="label">EXPLORE</p>
                  <p className="value">CASESTUDY</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </Col>
    );
  }
}

export default SingleUnit;
