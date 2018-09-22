import React, { Component } from "react";
import Fade from "react-fade-opacity";
import { connect } from "react-redux";
import { Row, Col } from "antd";
// Peronsl Modals Images
import Mike_With_Axe from "../../assets/images/About/Individuals/Mike-with-ax-pic-bio.jpg";

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

  render() {
    return (
      <div
        className={"personal-modal-container " + this.state.modalClasses}
        style={{
          background:
            " linear-gradient(to left, rgba(51,51,51,0.8),    rgba(51,51,51,0.2)), url(" +
            Mike_With_Axe +
            ")"
        }}
      >
        <div className="personal-modal-inner-wrapper">
          <Row gutter={16}>
            <Col
              xs={{ span: 24, offset: 0 }}
              md={{ span: 12, offset: 12 }}
              style={{ padding: "9px" }}
            >
              <div>
                <h2>PRESIDENT & CEO </h2>
                <h1>MICHAEL R. MROZ</h1>
                <p>
                  Building and remodeling has always been my dream and it is
                  something that I love to do. I love creating spaces and making
                  people happy. Seeing a client’s reaction to their finished
                  space is one of my greatest satisfactions.
                  <br />
                  <br />
                  My remodeling career began at a very young age, when I
                  renovated my parents’ basement at the age 15. It started as a
                  hobby and has flourished over time into Michael Robert
                  Construction. Before starting my own company, I worked with
                  several well-known companies in the construction industry,
                  including Kara Homes, Anthony James Construction, and Gandalf
                  Restorations.
                  <br />
                  <br />I strongly believe in the power of higher and continuing
                  education. I attended Valparaiso University for my
                  undergraduate degree in Management, and have continued my
                  education through several post-graduate programs. I belong to
                  a number of organizations that offer me both the experience
                  and the knowledge that I believe sets me apart from other
                  contractors in the industry. Below are several national
                  organizations where I have gained enough recognition to hold
                  several certifications. In the case of the Building
                  Performance Institute, MRC is one of only 50 contracting
                  companies certified in NJ.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modalOpen: state.common.full_screen_modal_open
  };
}

export default connect(
  mapStateToProps,
  {}
)(PersonalModal);
