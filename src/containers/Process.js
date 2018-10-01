import React, { Component } from "react";
import DocumentTitle from "react-document-title";
// Base Comps
import Hero from "../components/Process/Hero";
import DesignBuild from "../components/Process/DesignBuild";

class Process extends Component {
  // About Screen https://projects.invisionapp.com/d/main#/console/15461363/321299148/inspect
  render() {
    return (
      <DocumentTitle title={"Our Process | MRC"}>
        <div className="process-wrapper">
          <Hero />
          <DesignBuild />
        </div>
      </DocumentTitle>
    );
  }
}

export default Process;
