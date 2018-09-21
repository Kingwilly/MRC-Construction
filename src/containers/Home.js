import React, { Component } from "react";
// import { Link } from "react-router-dom";
import HeroGallery from "../components/Home/HeroGallery";

class Home extends Component {
  // Home Screen https://projects.invisionapp.com/d/main#/console/15461363/321299146/inspect
  render() {
    return (
      <div className="home-wrapper">
        <HeroGallery />
      </div>
    );
  }
}

export default Home;
