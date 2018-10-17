import React, { Component } from "react";
import DocumentTitle from "react-document-title";
import { Row, Col } from "antd";
import Arrow_Button from "../assets/images/Common/scroll_down_arrow.svg";
import { Link } from "react-router-dom";
var contentful = require("contentful");

class BlogPostPreview extends Component {
  render() {
    return (
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        <a
          href="#"
          style={{
            textDecoration: "none"
          }}
        >
          <div className="blog-post-preview-wrapper">
            <div className="header-image" />
            <div className="content">
              <p className="category">TIPS & TRICKS</p>
              <p className="title">LOREM IPSUM DOLOR SIT AMET</p>
              <p className="description">
                Maecenas faucibus mollis interdum. Sed posuere consectetur est
                at lobortis. Donec id elit non mi porta gravida at eget metus.
                Cras mattis consectetur purus sit amet fermentum. Vestibulum id
                ligula porta felis euismod semper.
              </p>
            </div>
          </div>
        </a>
      </Col>
    );
  }
}

class BlogHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: null
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
        console.log(entries.items);
        console.log(entries.items[0].sys.id);
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
                      <a className="article-title" href="#">
                        <p>DONEC ULLAMCORPER NULLA NON METUS AUCTOR FRIN</p>
                      </a>
                      <a className="article-title" href="#">
                        <p>DONEC ULLAMCORPER NULLA NON METUS AUCTOR FRIN</p>
                      </a>
                      <a className="article-title" href="#">
                        <p>DONEC ULLAMCORPER NULLA NON METUS AUCTOR FRIN</p>
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="blog-entries-wrapper">
              <Row gutter={16}>
                <BlogPostPreview />
                <BlogPostPreview />
                <BlogPostPreview />
                <BlogPostPreview />
                <BlogPostPreview />
                <BlogPostPreview />
                <BlogPostPreview />
                <BlogPostPreview />
                <BlogPostPreview />
              </Row>
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
