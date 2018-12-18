import React, { Component } from "react";
import { Row, Col } from "antd";
import DocumentTitle from "react-document-title";
import SingleUnit from "../components/Portfolio/SingleUnit";
import Quote from "../components/About/Quote";
var contentful = require("contentful");
// Base Comps

class PortfolioDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: null
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
        order: "sys.createdAt"
      })
      .then(function(entries) {
        that.setState({ entries: entries.items });
      });
  }
  renderPortfolioItems() {
    if (this.state.entries) {
      return this.state.entries.map(function(item) {
        return <SingleUnit key={item.fields.title} item={item} />;
      });
    }
  }
  render() {
    return (
      <DocumentTitle
        title={
          "Portfolio - Michael Robert Construction, General Contractor, Home Remodeling, Design Build, Home Renovations, Construction"
        }
      >
        <div className="about-wrapper portfolio-home-wrapper">
          <div className="hero-title-wrapper">
            <h2>LATEST WORK</h2>
            <h1>PORTFOLIO</h1>
          </div>
          <div className="project-wrapper">
            <Row gutter={16}>{this.renderPortfolioItems()}</Row>
          </div>
          <div className="quote-container">
            <Quote
              quote={
                "As a local Realtor in the area for 30 years, I have seen a lot of construction. If you are looking for top quality workmanship and service look no further."
              }
              speaker={"Frank, Westfield"}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default PortfolioDetail;
