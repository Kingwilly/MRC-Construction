import React, { Component } from "react";
import { Row } from "antd";
import HomeMainProject from "./HomeMainProject";
import HomeSubProject from "./HomeSubProject";
import Outdoor_Seating_Image from "../../assets/images/Home/Projects/Ourdoor_Seatings.jpg";
import Kitchen_Image from "../../assets/images/Home/Projects/Kitchen.jpg";

var contentful = require("contentful");

class HomeProjects extends Component {
  constructor(props) {
    super(props);
    this.state = { project: null, post: null };
  }
  client = contentful.createClient({
    space: "490ezzr1f96l",
    accessToken:
      "8e9529f53ad5d25dfe6af8cf4541e10358877acb64a2945cc9898851b36696bb"
  });

  componentWillMount() {
    var that = this;
    this.client
      .getEntries({
        content_type: "portfolioItem",
        order: "-sys.createdAt"
      })
      .then(function(entries) {
        that.setState({
          project: entries.items[0].fields.mainImage.fields.file.url
        });
      });
    this.client
      .getEntries({
        content_type: "blogPost",
        order: "-fields.publishDate"
      })
      .then(function(entries) {
        that.setState({
          post: entries.items[0].fields.coverPhoto.fields.file.url
        });
      });
    console.log("----------");
  }
  render() {
    return (
      <div className="home-projects-block-wrapper">
        <HomeMainProject
          image={this.state.project + "?w=1520&q=70&fl=progressive"}
          mainCTA={
            <p>
              SEE OUR <br />
              LATEST PROJECTS
            </p>
          }
          subCTA={"LATEST WORK"}
          displayLink={"PORTFOLIO"}
          link={"/our-portfolio"}
        />
        <Row gutter={16}>
          <HomeSubProject
            image={
              this.state.post + "?w=1920&fm=jpg&q=90&fit=fill&fl=progressive"
            }
            mainCTA={"For all your renovation projects"}
            subCTA={"BLOG"}
            displayLink={"OUR JOURNAL"}
            link={"/our-journal"}
          />
          <HomeSubProject
            image={
              "//images.ctfassets.net/490ezzr1f96l/6Ns0AezGx2u4OmeA8c4M2K/00aea9dd4d01ca34d15218c465e912ec/DSC_3458.jpg?w=1920&fm=jpg&q=90&fit=fill&fl=progressive"
            }
            mainCTA={"A FAMILY BUSINESS SINCE 2005"}
            subCTA={"WHO WE ARE"}
            displayLink={"BUSINESS PROFILE"}
            link={"/about-mrc"}
          />
        </Row>
      </div>
    );
  }
}

export default HomeProjects;
