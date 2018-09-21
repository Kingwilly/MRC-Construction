import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  // Home Screen https://projects.invisionapp.com/d/main#/console/15461363/321299146/inspect
  render() {
    return (
      <div className="home-wrapper">
        <h1>Home</h1>
        <Link to={"/about"}>
          <h3 className="portfolio-callout left">About</h3>
        </Link>
      </div>
    );
  }
}

export default Home;
