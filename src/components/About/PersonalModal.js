import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
var showdown = require("showdown");

class PersonalModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalClasses: "modal-gone"
    };
  }
  componentWillReceiveProps(nextProps) {
    var that = this;
    if (nextProps.modalOpen) {
      setTimeout(function() {
        that.setState({ modalClasses: "navigation-overlay-open" });
      }, 100);
      that.setState({ modalClasses: "" });
    } else {
      setTimeout(function() {
        that.setState({ modalClasses: "modal-gone" });
      }, 500);
      that.setState({ modalClasses: "" });
    }
  }
  converter = new showdown.Converter();
  render() {
    return (
      <div>
        {this.props.expert ? (
          <div
            className={"personal-modal-container " + this.state.modalClasses}
            style={{
              background:
                "url(" +
                this.props.expert.fields.descriptionBackground.fields.file.url +
                "?w=1920&fm=jpg&q=90&fit=fill&fl=progressive)"
            }}
          >
            <div className="overlay-modal" />
            <div className="personal-modal-inner-wrapper">
              <Row gutter={16}>
                <Col
                  xs={{ span: 24, offset: 0 }}
                  md={{ span: 12, offset: 12 }}
                  style={{ padding: "9px" }}
                >
                  <div>
                    <h2>{this.props.expert.fields.title}</h2>
                    <h1>{this.props.expert.fields.name}</h1>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.converter.makeHtml(
                          this.props.expert.fields.description
                        )
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modalOpen: state.common.full_screen_modal_open,
    expert: state.common.expert
  };
}

export default connect(
  mapStateToProps,
  {}
)(PersonalModal);
