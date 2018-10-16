import React, { Component } from "react";
import { connect } from "react-redux";

class AppWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        position: "relative"
      }
    };
  }

  renderClasses() {
    if (this.props.modalOpen) {
      return "global-app-wrapper no-scroll";
    } else {
      return "global-app-wrapper ";
    }
  }
  componentWillReceiveProps(nextProps) {
    var that = this;
    if (nextProps.modalOpen) {
      console.log("change");
      setTimeout(function() {
        that.setState({ style: { position: "fixed" } });
      }, 500);
    } else {
      that.setState({ style: { position: "relative" } });
    }
  }
  render() {
    return (
      <div
        className={this.renderClasses()}
        aria-hidden="true"
        style={this.state.style}
      >
        {this.props.children}
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
)(AppWrapper);
