import React, { Component } from "react";
import { Row, Col } from "antd";
import DocumentTitle from "react-document-title";
import { togglePortfolioModal } from "../actions/actionsCommon";
import { connect } from "react-redux";

var contentful = require("contentful");

function getSecondPart(props, str) {
  console.log(props.match.params);
  if (str) {
    var location = window.location.pathname.toString().substring(15);
    return location;
  }
}

class PortfolioDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null
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
      .getEntries({ "sys.id": this.props.match.params.id })
      .then(function(project) {
        that.setState({ project: project.items[0] });
        console.log(project.items[0]);
      });
  }
  renderRooms() {
    var that = this;
    return this.state.project.fields.rooms.map(function(room) {
      return (
        <Col
          xs={{ span: 24 }}
          sm={{ span: 12 }}
          style={{ padding: "9px" }}
          key={room.sys.id}
        >
          <div
            className="single-project-outer"
            onClick={() =>
              that.props.togglePortfolioModal(that.state.project, room.sys.id)
            }
          >
            <div
              className="single-project-inner"
              style={{
                background:
                  "url(" +
                  room.fields.image.fields.file.url +
                  "?w=590&h=412&fm=jpg&q=90&fit=fill&fl=progressive)"
              }}
            />
          </div>
        </Col>
      );
    });
  }

  render() {
    if (this.state.project) {
      return (
        <DocumentTitle title={this.state.project.fields.title + " | MRC"}>
          <div
            className="about-wrapper portfolio-detail-wrapper"
            style={{ minHeight: "100vh" }}
          >
            <div className="portfolio-header-content">
              <div className="portfolio-detail-header">
                <h1>{this.state.project.fields.detailTitle}</h1>
                <h3>
                  {this.state.project.fields.location} |{" "}
                  {this.state.project.fields.workType}{" "}
                </h3>
              </div>
              <div className="portfolio-detail-content">
                <p>{this.state.project.fields.details}</p>
              </div>
            </div>
            <div className="portfolio-detail-rooms-wrapper">
              <Row>{this.renderRooms()}</Row>
            </div>
          </div>
        </DocumentTitle>
      );
    } else {
      return (
        <DocumentTitle title={"Portfolio Detail | MRC"}>
          <div
            className="about-wrapper portfolio-detail-wrapper"
            style={{ minHeight: "100vh" }}
          />
        </DocumentTitle>
      );
    }
  }
}

export default connect(
  null,
  {
    togglePortfolioModal
  }
)(PortfolioDetail);
