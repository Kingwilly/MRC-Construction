import React, { Component } from "react";
import DocumentTitle from "react-document-title";
// Base Comps
import Hero from "../components/About/Hero";
import OurPersonal from "../components/About/PersonalGallery";
import Maintanence from "../components/About/Maintanence";
import OurTeam from "../components/About/OurTeam";
import Gallery from "../components/About/Gallery";



class About extends Component {
  // About Screen https://projects.invisionapp.com/d/main#/console/15461363/321299148/inspect
  render() {
    return (
      <DocumentTitle title={"About Us | MRC"}>
      <div className="about-wrapper">

          <Hero />
          <OurPersonal />
          <Maintanence />
          <OurTeam />
          <Gallery />
        </div>
      </DocumentTitle>
    );
  }
}

export default About;
