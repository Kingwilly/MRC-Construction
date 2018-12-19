import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import Arrow_Button from "../../assets/images/Common/scroll_down_arrow.svg";

function string_to_slug(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}
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
          string_to_slug(previousPost.fields.detailTitle)
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
          string_to_slug(previousPost.fields.detailTitle)
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
