import React, { Component } from "react";
import { Row, Col } from "antd";

import { toggleFullScreenModal } from "../../actions/actionsCommon";
import { connect } from "react-redux";

var contentful = require("contentful");

class OurPersonal extends Component {
  // PersonalGallery
  constructor(props) {
    super(props);
    this.state = {};
    this.renderExperts = this.renderExperts.bind(this);
    this.openPersonalModal = this.openPersonalModal.bind(this);
  }
  openPersonalModal(expert) {
    if (expert.fields.description) {
      this.props.toggleFullScreenModal(expert);
    }
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
        content_type: "teamMember",
        order: "fields.order"
      })
      .then(function(entries) {
        console.log(entries);
        that.setState({ entries: entries.items });
      });
  }
  renderExperts() {
    var that = this;
    if (this.state.entries) {
      return this.state.entries.map(function(expert) {
        return (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            key={expert.fields.name}
            style={{ padding: "9px" }}
          >
            <div
              className="expert-photo"
              onClick={() => that.openPersonalModal(expert)}
              style={{
                backgroundImage:
                  "url(" +
                  expert.fields.headShot.fields.file.url +
                  "?w=600&h=600&fm=jpg&q=90&fit=fill&fl=progressive)"
              }}
            >
              <div className="button-container-outer">
                <div className="button-container-inner">
                  <div className="button-bottom">
                    <div>
                      <p className="cta">{expert.fields.title}</p>
                      <p className="link">{expert.fields.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        );
      });
    }
  }
  render() {
    return (
      <div className="experts-container">
        <div className="title-wrapper">
          <p className="sub-title">OUR TEAM</p>
          <p className="title">DEDICATED PROFESSIONALS</p>
          <p className="description">
            At MRC, we are more than a business; we are a committed team,
            working together to craft homes and client relationships that will
            last lifetimes.
          </p>
        </div>
        <Row gutter={16}>{this.renderExperts()}</Row>
      </div>
    );
  }
}

export default connect(
  null,
  {
    toggleFullScreenModal
  }
)(OurPersonal);
