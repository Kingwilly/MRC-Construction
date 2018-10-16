import React, { Component } from "react";
import { Row, Col } from "antd";
import DocumentTitle from "react-document-title";
var contentful = require("contentful");

// Base Comps
import SingleUnit from "../components/Portfolio/SingleUnit";

class PortfolioDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    };
  }
  client = contentful.createClient({
    space: "490ezzr1f96l",
    accessToken:
      "8e9529f53ad5d25dfe6af8cf4541e10358877acb64a2945cc9898851b36696bb"
  });
  componentWillMount() {
    var that = this;
    this.client
      .getEntries({
        content_type: "portfolioItem",
        "fields.map": this.props.title
      })
      .then(function(entries) {
        that.setState({ entries: entries.fields.items });
      });
    console.log(entries);
  }
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

export default PortfolioDetail;
