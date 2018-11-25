import React, { Component } from "react";
import DocumentTitle from "react-document-title";
// Base Comps
import Gallery from "../components/About/Gallery";
import InfoBar from "../components/Contact/InfoBar";
import ContactForm from "../components/Contact/ContactForm";

class Contact extends Component {
  // About Screen https://projects.invisionapp.com/d/main#/console/15461363/321299148/inspect
  render() {
    return (
      <DocumentTitle title={"Find Us | MRC"}>
        <div className="about-wrapper contact-wrapper">
          <div className="hero-title-wrapper">
            <h2>FIND US</h2>
            <h1>CONTACT</h1>
          </div>
          <div className="gallery-wrapper">
            <Gallery />
            <InfoBar />
          </div>
          <ContactForm />
        </div>
      </DocumentTitle>
    );
  }
}

export default Contact;
