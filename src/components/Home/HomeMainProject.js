import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeMainProject extends Component {
  render() {
    return (
      <div
        className="latest-projects-block"
        style={{ backgroundImage: "url(" + this.props.image + ")" }}
      >
        <div className="button-container-outer">
          <div className="button-container-inner">
            <Link className="button-left" to={this.props.link}>
              {this.props.mainCTA}
            </Link>
            <Link className="button-right" to="/">
              <p className="cta">{this.props.subCTA}</p>
              <p className="link">{this.props.displayLink}</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeMainProject;
