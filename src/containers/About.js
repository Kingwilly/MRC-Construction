import React, { Component } from "react";
import DocumentTitle from "react-document-title";
// Base Comps
import Hero from "../components/About/Hero";
import OurPersonal from "../components/About/PersonalGallery";
import Maintanence from "../components/About/Maintanence";
import OurTeam from "../components/About/OurTeam";
import MenAtWork from "../assets/images/About/menatwork.jpg";
import OurDifferance from "../components/Process/OurDifferance";
import ReactGA from "react-ga";

class About extends Component {
  // About Screen https://projects.invisionapp.com/d/main#/console/15461363/321299148/inspect

  render() {
    return (
      <DocumentTitle
        title={
          "About - Michael Robert Construction, Licensed NJ Remodeler, Certified Green Professional, Energy Star, General Contractor - Westfield, NJ"
        }
      >
        <div className="about-wrapper">
          <Hero />
          <OurPersonal />
          <Maintanence />
          <OurTeam />
          <OurDifferance />
          <div className="men-at-work">
            <img src={MenAtWork} alt="Men At Work" />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default About;
