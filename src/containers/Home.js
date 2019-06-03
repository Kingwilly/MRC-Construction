import React, { Component } from "react";
import HeroGallery from "../components/Home/HeroGallery";
import HomeTextBlock from "../components/Home/HomeTextBlock";
import HomeProjects from "../components/Home/HomeProjects";
import DocumentTitle from "react-document-title";
import Quote from "../components/About/Quote";
class Home extends Component {
  // Home Screen https://projects.invisionapp.com/d/main#/console/15461363/321299146/inspect

  render() {
    return (
      <DocumentTitle
        title={
          "Michael Robert Construction - Design Build, Major Renovations, Additions, High End Remodeling, General Contractor, Westfield, NJ"
        }
      >
        <div className="home-wrapper">
          <HeroGallery />
          <HomeTextBlock
            title="MICHAEL ROBERT CONSTRUCTION IS AN AWARD-WINNING, WESTFIELD-BASED GENERAL CONTRACTING BUSINESS SPECIALIZING IN HIGH-END RESIDENTIAL REMODELING AND CUSTOM NEW CONSTRUCTION HOMES."
            description={
              "As a design / build firm, our team focuses on working with our clients to develop a cohesive project through proper planning and architectural detailing. We believe that remodeling should be seen as a whole house approach, where new design and construction is seamlessly integrated with the existing structure. Our work ranges from whole house renovations and design / build custom homes to additions and floor plan changes. We pride ourselves on a commitment to design and attention to detail, and have been rewarded with both local and national recognition."
            }
            link={{
              cta: "LEARN MORE ABOUT",
              linkName: "OUR PROCESS",
              url: "/our-process"
            }}
          />
          <HomeProjects />
          <div className="quote-container">
            <Quote
              quote={
                " Not only is their team very organized and collaborative, but they are responsive, timely, clean and professional- not to mention they do an incredible job."
              }
              speaker={"Erica, Westfield"}
            />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
