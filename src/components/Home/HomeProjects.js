import React, { Component } from "react";
import { Row } from "antd";
import HomeMainProject from "./HomeMainProject";
import HomeSubProject from "./HomeSubProject";
import Outdoor_Seating_Image from "../../assets/images/Home/Projects/Ourdoor_Seatings.jpg";
import Planning_Image from "../../assets/images/Home/Projects/Planning.jpg";
import Kitchen_Image from "../../assets/images/Home/Projects/Kitchen.jpg";

class HomeProjects extends Component {
  render() {
    return (
      <div className="home-projects-block-wrapper">
        <HomeMainProject
          image={Kitchen_Image}
          mainCTA={
            <p>
              SEE OUR <br />
              LATEST PROJECTS
            </p>
          }
          subCTA={"LATEST WORK"}
          displayLink={"PORTFOLIO"}
          link={"/"}
        />
        <Row gutter={16}>
          <HomeSubProject
            image={Outdoor_Seating_Image}
            mainCTA={"For all your renovation projects"}
            subCTA={"BLOG"}
            displayLink={"OUR JOURNAL"}
            link={"/"}
          />
          <HomeSubProject
            image={Planning_Image}
            mainCTA={"A FAMILY BUISNESS SINCE 2005"}
            subCTA={"WHO WE ARE"}
            displayLink={"BUISNESS PROFILE"}
            link={"/about-mrc"}
          />
        </Row>
      </div>
    );
  }
}

export default HomeProjects;
