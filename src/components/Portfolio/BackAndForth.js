import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import Arrow_Button from "../../assets/images/Common/scroll_down_arrow.svg";

class BackAndForth extends Component {
  componentWillReceiveProps() {
    console.log("-----------");
    console.log("-----------");
    console.log("-----------");
    console.log(this.props.project);
    console.log(this.props.allProjects);
  }
  renderPreviousPost() {
    var currentPostID = this.props.project.sys.id;
    var location = 0;
    var totalPosts = 0;
    var found = false;
    this.props.allProjects.map(function(post) {
      totalPosts += 1;
      if (post.sys.id == currentPostID) {
        found = true;
      }
      if (!found) {
        location += 1;
      }
      return location;
    });
    var previousPostLocation = location - 1;
    if (previousPostLocation < 0) {
      previousPostLocation = totalPosts - 1;
    }
    var previousPost = this.props.allProjects[previousPostLocation];
    return (
      <Link
        to={
          "/our-portfolio/" +
          previousPost.sys.id +
          "/" +
          previousPost.fields.detailTitle
        }
      >
        <div
          className="previous-article"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(51,51,51,0.55),    rgba(51,51,51,0.55)), url(" +
              previousPost.fields.mainImage.fields.file.url +
              "?w=592&fm=jpg&q=90&fit=fill&fl=progressive)"
          }}
        >
          <img src={Arrow_Button} alt="Arrow" />
          <div className="previous-content">
            <p className="previous-title">PREVIOUS PROJECT</p>
            <p className="previous-article-title">
              {previousPost.fields.detailTitle}
            </p>
          </div>
        </div>
      </Link>
    );
  }
  renderNextPost() {
    var currentPostID = this.props.project.sys.id;
    console.log(currentPostID);
    var location = 0;
    var totalPosts = 0;
    var found = false;
    this.props.allProjects.map(function(post) {
      totalPosts += 1;
      if (post.sys.id == currentPostID) {
        found = true;
      }
      if (!found) {
        location += 1;
      }
      return location;
    });
    console.log(location);
    var nextPostLocation = location + 1;
    if (nextPostLocation === totalPosts) {
      nextPostLocation = 0;
    }
    var previousPost = this.props.allProjects[nextPostLocation];
    console.log(previousPost);
    return (
      <Link
        to={
          "/our-portfolio/" +
          previousPost.sys.id +
          "/" +
          previousPost.fields.detailTitle
        }
      >
        <div
          className="next-article"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(51,51,51,0.55),    rgba(51,51,51,0.55)), url(" +
              previousPost.fields.mainImage.fields.file.url +
              "?w=592&fm=jpg&q=90&fit=fill&fl=progressive)"
          }}
        >
          <img src={Arrow_Button} alt="Arrow" />
          <div className="next-content">
            <p className="next-title">NEXT PROJECT</p>
            <p className="next-article-title">
              {previousPost.fields.detailTitle}
            </p>
          </div>
        </div>
      </Link>
    );
  }
  render() {
    if (!this.props.project || !this.props.allProjects) {
      return null;
    }
    return (
      <div className="blog-detail-wrapper ">
        <div className="next-prev-article">
          <Row gutter={16}>
            <Col
              md={{ span: 24 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              {this.renderPreviousPost()}
            </Col>
            <Col
              md={{ span: 24 }}
              lg={{ span: 12 }}
              sm={{ span: 24 }}
              xs={{ span: 24 }}
            >
              {this.renderNextPost()}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default BackAndForth;
