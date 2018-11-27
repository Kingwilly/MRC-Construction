import React, { Component } from "react";

import nbc_logo from "../../assets/images/Home/Video/nbc.svg";
import { Row, Col } from "antd";

import New_Kitchen from "../../assets/images/Video/A-New-Kitchen-For-The-Davis-Family.jpg";
import Montage from "../../assets/images/Video/George-to-the-Rescue-montage.jpg";
import Lederman from "../../assets/images/Video/Lederman-Family-Gets-A-Fresh-Start.jpg";
import Open_House from "../../assets/images/Video/Open-House-NYC-Ellie-Mroz-George-Oliphant.jpg";
import Shah_family from "../../assets/images/Video/Shah-Family.jpg";

class HomeVideoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageGallery: [
        {
          thumbImage: Shah_family,

          active: true,
          url: "https://www.youtube-nocookie.com/embed/lCcjrOgZc4I?controls=0"
        },
        {
          thumbImage: Montage,
          active: false,
          url: "https://www.youtube-nocookie.com/embed/LkyuGCtd1IM?controls=0"
        },
        {
          thumbImage: Open_House,

          active: false,
          url: "https://www.youtube-nocookie.com/embed/djEtq-Im4ew?controls=0"
        },
        // {
        //   thumbImage:
        //     "//images.ctfassets.net/490ezzr1f96l/Cu4Af1rxg4GQaa8SgguCc/e6cc3dfd104152dd45f20ac23f603d71/thumb-4.jpg?h=105&w=105&fm=jpg&q=90&fit=fill&fl=progressive",
        //   active: false,
        //   url: "https://player.vimeo.com/video/213932165"
        // },
        {
          thumbImage: New_Kitchen,
          active: false,
          externalLink: true,
          url:
            "https://www.nbcnewyork.com/blogs/open-house/george-to-the-rescue-davis-kitchen-331249082.html"
        },
        {
          thumbImage: Lederman,
          active: false,
          externalLink: true,
          url:
            "https://www.nbcnewyork.com/blogs/open-house/Lederman-Full-Episode-416844343.html"
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
      if (thumb.externalLink) {
        return (
          <a href={thumb.url} target="_blank">
            <img src={thumb.thumbImage} alt={thumb.url} key={thumb.url} />
          </a>
        );
      }
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
                  <a className="button-left" href="#">
                    <img src={nbc_logo} alt="NBC Logo" />
                    <p>HELPING FAMILIES ONE HOME AT A TIME</p>
                  </a>
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
