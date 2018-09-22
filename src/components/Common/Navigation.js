import React, { Component } from "react";
import { connect } from "react-redux";
import Logo_Square_Logo from "../../assets/images/Common/logo_square.png";
import Scroll_Down_Arrow from "../../assets/images/Common/scroll_down_arrow.svg";
import Close_Logo from "../../assets/images/Common/exit_x.svg";
import Logo from "../../assets/images/Common/logo_small.svg";
import { toggleFullScreenModal } from "../../actions/actionsCommon";
import { Link } from "react-router-dom";

class Navigation extends Component {
  // Global Navigation Compoennt
  constructor(props) {
    super(props);
    this.state = {
      modelOpen: false,
      modalClasses: ["modal-gone"]
    };
    this.toggleModalStatus = this.toggleModalStatus.bind(this);
  }
  scrollDown() {
    window.scroll({
      top: 850,
      left: 0,
      behavior: "smooth"
    });
  }
  toggleModalStatus() {
    var newClasses = this.state.modalClasses;

    if (this.state.modelOpen) {
      // Goes to Close Modal
      newClasses = [];
      this.setState({ modalClasses: newClasses });
      var that = this;
      setTimeout(function() {
        newClasses = that.state.modalClasses;
        newClasses.push("modal-gone");
        that.setState({ modalClasses: newClasses });
        console.log(that.state.modalClasses);
      }, 500);
    } else {
      // Going to Open Modal
      newClasses.splice(0, 1);
      this.setState({ modalClasses: newClasses });
      var that = this;
      setTimeout(function() {
        newClasses.push("navigation-overlay-open");
        that.setState({ modalClasses: newClasses });
        console.log(that.state.modalClasses);
      }, 50);
    }
    if (this.state.modelOpen) {
      this.setState({ modelOpen: false });
    } else {
      this.setState({ modelOpen: true });
    }
  }
  renderModalOverLayClasses() {
    var classString = "";

    this.state.modalClasses.forEach(function(classToBeAdded) {
      classString = classString + " ";
      classString = classString + classToBeAdded;
    });
    return classString;
  }
  render() {
    return (
      <div className="navigation-wrapper ">
        <div className="navigation-icon-wrapper">
          <div className="navigation-icon-inner-wrapper">
            <Link to="/">
              <img src={Logo_Square_Logo} alt="MRC Logo" />
            </Link>
            <div
              className="menu-block"
              onClick={() => this.toggleModalStatus()}
            >
              <p>MENU</p>
            </div>
          </div>
        </div>
        {this.props.modalOpen ? (
          <img
            src={Close_Logo}
            alt="Close Modal"
            onClick={() => this.props.toggleFullScreenModal()}
            className="scroll-down-arrow"
          />
        ) : (
          <img
            src={Scroll_Down_Arrow}
            alt="Scroll Down Arrow"
            onClick={() => this.scrollDown()}
            className="scroll-down-arrow"
          />
        )}
        <div
          onClick={() => this.toggleModalStatus()}
          className={"navigation-overlay " + this.renderModalOverLayClasses()}
        >
          <div
            className="navigation-overlay-panel"
            onClick={() => console.log("hi")}
          >
            <div className="navigation-overlay-inner-panel">
              <div className="main-logo-container">
                <Link to="/">
                  <img
                    src={Logo}
                    alt="Micheal Robert Contstruction. A Whole House Approach."
                    className="nav-logo"
                  />
                </Link>
              </div>
              <div className="sub-title-container">
                <p>THE WHOLE HOUSE APPROACH TO REMODELING</p>
              </div>
              <div className="link-container">
                <div className="link-row">
                  <div
                    className="link-item"
                    style={{
                      width: "23%",
                      borderRight: "2px solid #dddddd"
                    }}
                  >
                    <Link to="/about-mrc">
                      <p className="cta">ABOUT</p>
                      <p className="link">MRC</p>
                    </Link>
                  </div>
                  <div
                    className="link-item"
                    style={{
                      width: "43%",
                      borderRight: "2px solid #dddddd"
                    }}
                  >
                    <Link to="/">
                      <p className="cta">LATEST WORK</p>
                      <p className="link">PORTFOLIO</p>
                    </Link>
                  </div>
                  <div
                    className="link-item"
                    style={{
                      width: "33%"
                    }}
                  >
                    <Link to="/">
                      <p className="cta">BLOG</p>
                      <p className="link">JOURNAL</p>
                    </Link>
                  </div>
                </div>
                <div className="link-row">
                  <div
                    className="link-item"
                    style={{
                      width: "50%",
                      borderRight: "2px solid #dddddd"
                    }}
                  >
                    <Link to="/">
                      <p className="cta">PROCESS</p>
                      <p className="link">DESIGN / BUILD</p>
                    </Link>
                  </div>
                  <div
                    className="link-item"
                    style={{
                      width: "50%"
                    }}
                  >
                    <Link to="/">
                      <p className="cta">FIND US</p>
                      <p className="link">CONTACT</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  {
    toggleFullScreenModal
  }
)(Navigation);
