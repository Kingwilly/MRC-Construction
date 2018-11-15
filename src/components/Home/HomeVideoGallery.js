import React, { Component } from "react";
import Main_Video_Image from "../../assets/images/Home/Video/main_image.jpg";

import nbc_logo from "../../assets/images/Home/Video/nbc.svg";
import playbutton from "../../assets/images/Home/Video/playbutton.svg";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { getImage } from "../../helpers";

class HomeVideoGallery extends Component {
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
            <div
              className="main-video-image"
              style={{ backgroundImage: "url(" + Main_Video_Image + ")" }}
            >
              <div className="button-container-outer">
                <div className="button-container-inner">
                  <Link className="button-left" to={"/video"}>
                    <img src={nbc_logo} alt="NBC Logo" />
                    <p>HELPING FAMILIES ONE HOME AT A TIME</p>
                  </Link>
                  <Link className="button-right" to="/">
                    <div style={{ float: "left" }}>
                      <p className="cta">LATEST WORK</p>
                      <p className="link">GEORGE TO THE RESCUE</p>
                    </div>
                    <img src={playbutton} alt="Play Button" />
                  </Link>
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
            <div className="side-video-gallery">
              <img
                src={
                  "//images.ctfassets.net/490ezzr1f96l/3lGZq0e1hYqqGMMeQIS4oG/f9c204e9a4bee8e292e5fcd20f0d712f/thumb-5.jpg?h=105&w=105&fm=jpg&q=90&fit=fill&fl=progressive"
                }
                alt={"Thumbnail 1"}
              />
              <img
                src={
                  "//images.ctfassets.net/490ezzr1f96l/Cu4Af1rxg4GQaa8SgguCc/e6cc3dfd104152dd45f20ac23f603d71/thumb-4.jpg?h=105&w=105&fm=jpg&q=90&fit=fill&fl=progressive"
                }
                alt={"Thumbnail 1"}
              />
              <img
                src={
                  "//images.ctfassets.net/490ezzr1f96l/6CjVJAF1w4YGyKIACi4QwG/67691c9187897d179bd5c3aa9b3f981c/thumb-3.jpg?h=105&w=105&fm=jpg&q=90&fit=fill&fl=progressive"
                }
                alt={"Thumbnail 1"}
              />
              <img
                src={
                  "//images.ctfassets.net/490ezzr1f96l/5DlmwL6fn2oEYS0mywqE04/1e44f40930ab5f25dc53086181cc9079/thumb-2.jpg?h=105&w=105&fm=jpg&q=90&fit=fill&fl=progressive"
                }
                alt={"Thumbnail 1"}
              />
              <img
                src={
                  "//images.ctfassets.net/490ezzr1f96l/4HeZYgI5okQiUEo8044QUg/20311655c081b13c37973738362cfe50/thumb-1.jpg?h=105&w=105&fm=jpg&q=90&fit=fill&fl=progressive"
                }
                alt={"Thumbnail 1"}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomeVideoGallery;
