import React, { Component } from "react";

import nbc_logo from "../../assets/images/Home/Video/nbc.svg";
import playbutton from "../../assets/images/Home/Video/playbutton.svg";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { getImage } from "../../helpers";

class HomeVideoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageGallery: [
        {
          thumbImage:
            "//images.ctfassets.net/490ezzr1f96l/3lGZq0e1hYqqGMMeQIS4oG/f9c204e9a4bee8e292e5fcd20f0d712f/thumb-5.jpg?h=105&w=105&fm=jpg&q=90&fit=fill&fl=progressive",
          mainImage:
            "//images.ctfassets.net/490ezzr1f96l/3lGZq0e1hYqqGMMeQIS4oG/f9c204e9a4bee8e292e5fcd20f0d712f/thumb-5.jpg?h=601&w=1054&fm=jpg&q=90&fit=fill&fl=progressive",
          active: true,
          url: "https://www.youtube-nocookie.com/embed/wh5GVdE5SAQ?controls=0"
        },
        {
          thumbImage:
            "//images.ctfassets.net/490ezzr1f96l/Cu4Af1rxg4GQaa8SgguCc/e6cc3dfd104152dd45f20ac23f603d71/thumb-4.jpg?h=105&w=105&fm=jpg&q=90&fit=fill&fl=progressive",
          mainImage:
            "//images.ctfassets.net/490ezzr1f96l/Cu4Af1rxg4GQaa8SgguCc/e6cc3dfd104152dd45f20ac23f603d71/thumb-4.jpg?h=601&w=1054&fm=jpg&q=90&fit=fill&fl=progressive",
          active: false,
          url: "https://www.youtube-nocookie.com/embed/djEtq-Im4ew?controls=0"
        },
        {
          thumbImage:
            "//images.ctfassets.net/490ezzr1f96l/6CjVJAF1w4YGyKIACi4QwG/67691c9187897d179bd5c3aa9b3f981c/thumb-3.jpg?h=105&w=105&fm=jpg&q=90&fit=fill&fl=progressive",
          mainImage:
            "//images.ctfassets.net/490ezzr1f96l/6CjVJAF1w4YGyKIACi4QwG/67691c9187897d179bd5c3aa9b3f981c/thumb-3.jpg?h=601&w=1054&fm=jpg&q=90&fit=fill&fl=progressive",
          active: false,
          url: "https://www.youtube.com/embed/lCcjrOgZc4I?controls=0"
        }
      ]
    };
  }
  makeThumbnailActive(url) {
    var newThumbs = this.state.imageGallery;
    newThumbs.map(function(thumb) {
      thumb.active = false;
      if (thumb.url === url) {
        thumb.active = true;
      }
    });
    this.setState({ imageGallery: newThumbs });
  }
  renderThumbNails() {
    var that = this;
    return this.state.imageGallery.map(function(thumb) {
      if (thumb.active) {
        return (
          <img
            onClick={() => that.makeThumbnailActive(thumb.url)}
            src={thumb.thumbImage}
            alt={thumb.url}
            key={thumb.url}
            className={"active"}
          />
        );
      } else {
        return (
          <img
            src={thumb.thumbImage}
            alt={thumb.url}
            key={thumb.url}
            onClick={() => that.makeThumbnailActive(thumb.url)}
          />
        );
      }
    });
  }
  getActiveThumg() {
    var activeThumb = null;
    this.state.imageGallery.map(function(thumb) {
      if (thumb.active) {
        activeThumb = thumb;
      }
    });
    return activeThumb;
  }
  render() {
    return (
      <div className="home-video-gallery-wrapper">
        <Row gutter={16}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 21 }}
            style={{ padding: "5px" }}
          >
            <div className="main-video-image">
              <iframe
                className={"youtube"}
                src={this.getActiveThumg().url}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <div className="button-container-outer">
                <div className="button-container-inner">
                  <Link className="button-left" to={"/video"}>
                    <img src={nbc_logo} alt="NBC Logo" />
                    <p>HELPING FAMILIES ONE HOME AT A TIME</p>
                  </Link>
                  <div className="button-right" style={{ cursor: "pointer" }}>
                    <div style={{ float: "left" }}>
                      <p className="cta">LATEST WORK</p>
                      <p className="link">GEORGE TO THE RESCUE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 0 }}
            md={{ span: 3 }}
            style={{ padding: "5px 0px" }}
          >
            <div className="side-video-gallery">{this.renderThumbNails()}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomeVideoGallery;
