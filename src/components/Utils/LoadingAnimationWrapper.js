import React, { Component } from "react";
import Logo from "../../assets/images/Common/logo.svg";

class LoadingAnimationWrapper extends Component {
  // Used to load in the website via a nice logo and white background Transotopm
  constructor(props) {
    super(props);
    this.state = {
      loadingStatus: "loading-screen-open"
    };
  }
  componentDidMount() {
    // Start the timer to load out the animation screen
    var that = this;
    setTimeout(function() {
      that.setState({
        loadingStatus: "loading-screen-open loading-screen-closing "
      });
    }, 1500);
    setTimeout(function() {
      that.setState({
        loadingStatus: "loading-screen-closed "
      });
    }, 3500);
  }
  render() {
    return (
      <div className="loading-animation-wrapper">
        <div className={this.state.loadingStatus}>
          <img
            src={Logo}
            alt="Micheal Robert Contstruction. A Whole House Approach."
          />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default LoadingAnimationWrapper;
