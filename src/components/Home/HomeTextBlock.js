import React, { Component } from "react";
import { Link } from "react-router-dom";
import Arrow_Button from "../../assets/images/Common/button_arrow.svg";

class HomeTextBlock extends Component {
  render() {
    return (
      <div className="home-text-block-wrapper">
        <p className="title">{this.props.title}</p>
        <p className="description">{this.props.description}</p>
        {this.props.link ? (
          <Link to={this.props.link.url}>
            <div className="link-button-container">
              <div className="link-button">
                <div className="text-content">
                  <p className="cta">{this.props.link.cta}</p>
                  <p className="link-name">{this.props.link.linkName}</p>
                </div>
                <div className="button-content">
                  <img src={Arrow_Button} alt="Arrow Button" />
                </div>
              </div>
            </div>
          </Link>
        ) : null}
      </div>
    );
  }
}

export default HomeTextBlock;
