import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import Arrow_Button from "../../assets/images/Common/scroll_down_arrow.svg";

class BackAndForth extends Component {
  renderPreviousPost() {
    var currentPostID = this.props.post.sys.id;
    var location = 0;
    var totalPosts = 0;
    var found = false;
    this.props.entries.map(function(post) {
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
    var previousPost = this.props.entries[previousPostLocation];
    return (
      <Link
        to={
          "/our-journal/" + previousPost.sys.id + "/" + previousPost.fields.slug
        }
      >
        <div
          className="previous-article"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(51,51,51,0.9),    rgba(51,51,51,0.1)), url(" +
              previousPost.fields.coverPhoto.fields.file.url +
              "?w=592&fm=jpg&q=90&fit=fill&fl=progressive)"
          }}
        >
          <img src={Arrow_Button} alt="Arrow" />
          <div className="previous-content">
            <p className="previous-title">PREVIOUS POST</p>
            <p className="previous-article-title">
              {previousPost.fields.title}
            </p>
          </div>
        </div>
      </Link>
    );
  }
  renderNextPost() {
    var currentPostID = this.props.post.sys.id;
    var location = 0;
    var totalPosts = 0;
    var found = false;
    this.props.entries.map(function(post) {
      totalPosts += 1;
      if (post.sys.id == currentPostID) {
        found = true;
      }
      if (!found) {
        location += 1;
      }
      return location;
    });
    var nextPostLocation = location + 1;
    if (nextPostLocation === totalPosts) {
      nextPostLocation = 0;
    }
    var previousPost = this.props.entries[nextPostLocation];
    return (
      <Link
        to={
          "/our-journal/" + previousPost.sys.id + "/" + previousPost.fields.slug
        }
      >
        <div
          className="next-article"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(51,51,51,0.9),    rgba(51,51,51,0.1)), url(" +
              previousPost.fields.coverPhoto.fields.file.url +
              "?w=592&fm=jpg&q=90&fit=fill&fl=progressive)"
          }}
        >
          <img src={Arrow_Button} alt="Arrow" />
          <div className="next-content">
            <p className="next-title">NEXT POST</p>
            <p className="next-article-title">{previousPost.fields.title}</p>
          </div>
        </div>
      </Link>
    );
  }
  render() {
    if (!this.props.entries || !this.props.post) {
      return null;
    }
    return (
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
    );
  }
}

export default BackAndForth;
