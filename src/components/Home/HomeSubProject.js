import React, { Component } from "react";
import { Col } from "antd";
import { Link } from "react-router-dom";

class HomeSubProject extends Component {
  render() {
    return (
      <Col xs={{ span: 24 }} sm={{ span: 12 }} style={{ padding: "9px" }}>
        <div
          className="sub-project-block"
          style={{ backgroundImage: "url(" + this.props.image + ")" }}
        >
          <div className="button-container-outer">
            <div className="button-container-inner">
              <div className="button-top">
                <Link to={this.props.link}>
                  <p>{this.props.mainCTA}</p>
                </Link>
              </div>
              <div className="button-bottom">
                <Link to={this.props.link}>
                  <p className="cta">{this.props.subCTA}</p>
                  <p className="link">{this.props.displayLink}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default HomeSubProject;
