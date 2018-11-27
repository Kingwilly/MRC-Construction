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
        order: "-sys.createdAt"
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
      <DocumentTitle title={"Our Portfolio | MRC"}>
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
                "We are beyond thrilled with our new master bedroom extension by Michael Robert Construction. Michael and his team took our vision and made it into a stunning reality. Not only did we receive excellent craftsmanship, but also a team who was responsive, knowledgeable and experts in their fields."
              }
              speaker={"MOLLY & PAUL"}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default PortfolioDetail;
