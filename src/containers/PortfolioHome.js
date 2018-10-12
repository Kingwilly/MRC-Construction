import React, { Component } from "react";
import { Row, Col } from "antd";
import DocumentTitle from "react-document-title";
// Base Comps
import SingleUnit from "../components/Portfolio/SingleUnit";

class PortfolioHome extends Component {
  // About Screen https://projects.invisionapp.com/d/main#/console/15461363/321299148/inspect
  render() {
    return (
      <DocumentTitle title={"Our Portfolio | MRC"}>
        <div className="about-wrapper portfolio-home-wrapper">
          <div className="hero-title-wrapper">
            <h2>LATEST WORK</h2>
            <h1>PORTFOLIO</h1>
          </div>
          <div className="project-wrapper">
            <Row gutter={16}>
                <SingleUnit />
                <SingleUnit />
                <SingleUnit />
                <SingleUnit />
                <SingleUnit />
                <SingleUnit />
                <SingleUnit />
                <SingleUnit />
                <SingleUnit />
                <SingleUnit />
             
            </Row>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default PortfolioHome;
