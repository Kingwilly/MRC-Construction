import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import { Row, Col } from "antd";
import Arrow_Button from "../assets/images/Common/scroll_down_arrow.svg";
import { Link } from "react-router-dom";
var contentful = require("contentful");
var showdown = require("showdown");

class BlogPostPreview extends Component {
  converter = new showdown.Converter();
  render() {
    return (
      <Col xs={{ span: 24 }} md={{ span: 8 }} key={this.props.post.sys.id}>
        <Link
          href="#"
          style={{ textDecoration: "none" }}
          to={
            "/our-journal/" +
            this.props.post.sys.id +
            "/" +
            this.props.post.fields.slug
          }
        >
          <div className="blog-post-preview-wrapper">
            <div
              className="header-image"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(51,51,51,0.9),    rgba(51,51,51,0.1)), url(" +
                  this.props.post.fields.coverPhoto.fields.file.url +
                  "?w=1920&fm=jpg&q=90&fit=fill&fl=progressive)"
              }}
            />
            <div className="content">
              <p className="category">{this.props.post.fields.category}</p>
              <p className="title">{this.props.post.fields.title}</p>
              <p className="description">
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.converter.makeHtml(
                      this.props.post.fields.content.substring(0, 120) + "..."
                    )
                  }}
                />
              </p>
            </div>
          </div>
        </Link>
      </Col>
    );
  }
}

class BlogHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: null,
      edited: false
    };
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
        content_type: "blogPost",
        order: "fields.publishDate"
      })
      .then(function(entries) {
        that.setState({ entries: entries.items });
      });
  }
  renderEntries() {
    var posts = this.state.entries;
    posts.shift();
    this.setState({ edited: true });
    return posts;
  }
  renderPosts() {
    return this.state.entries.map(function(post) {
      console.log(post.sys.id);
      return <BlogPostPreview post={post} key={post.sys.id} />;
    });
  }
  render() {
    if (this.state.entries) {
      return (
        <DocumentTitle title={"Our Journal | MRC"}>
          <div className="blog-wrapper">
            <div
              className="header"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(51,51,51,0.9),    rgba(51,51,51,0.1)), url(" +
                  this.state.entries[0].fields.coverPhoto.fields.file.url +
                  "?w=1920&fm=jpg&q=90&fit=fill&fl=progressive)"
              }}
            >
              <div className="main-post">
                <Row gutter={16}>
                  <Col xs={{ span: 24 }} md={{ span: 18 }}>
                    <div className="title-content">
                      <h3>{this.state.entries[0].fields.category}</h3>
                      <h1>{this.state.entries[0].fields.title}</h1>
                    </div>
                    <Link
                      to={
                        "/our-journal/" +
                        this.state.entries[0].sys.id +
                        "/" +
                        this.state.entries[0].fields.slug
                      }
                    >
                      <div className="button-container-outer">
                        <div className="button-container-inner" href="#">
                          <div className="button-content">
                            <p>READ ARTICLE</p>
                            <img src={Arrow_Button} alt="Arrow Button" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 6 }}>
                    <div className="other-articles">
                      <Link
                        className="article-title"
                        to={
                          "/our-journal/" +
                          this.state.entries[1].sys.id +
                          "/" +
                          this.state.entries[1].fields.slug
                        }
                      >
                        <p>{this.state.entries[1].fields.title}</p>
                      </Link>
                      <Link
                        className="article-title"
                        to={
                          "/our-journal/" +
                          this.state.entries[2].sys.id +
                          "/" +
                          this.state.entries[2].fields.slug
                        }
                      >
                        <p>{this.state.entries[2].fields.title}</p>
                      </Link>
                      <Link
                        className="article-title"
                        to={
                          "/our-journal/" +
                          this.state.entries[3].sys.id +
                          "/" +
                          this.state.entries[3].fields.slug
                        }
                      >
                        <p>{this.state.entries[3].fields.title}</p>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="blog-entries-wrapper">
              <Row gutter={16}>{this.renderPosts()}</Row>
            </div>
          </div>
        </DocumentTitle>
      );
    } else {
      return (
        <DocumentTitle title={"Our Journal | MRC"}>
          <div
            className="about-wrapper portfolio-detail-wrapper"
            style={{ minHeight: "100vh" }}
          />
        </DocumentTitle>
      );
    }
  }
}

export default BlogHome;
