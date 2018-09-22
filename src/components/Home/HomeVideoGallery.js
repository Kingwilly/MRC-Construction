import React, { Component } from "react";
import Main_Video_Image from "../../assets/images/Home/Video/main_image.jpg";
import thumb_1_image from "../../assets/images/Home/Video/thumb-1.jpg";
import thumb_2_image from "../../assets/images/Home/Video/thumb-2.jpg";
import thumb_3_image from "../../assets/images/Home/Video/thumb-3.jpg";
import thumb_4_image from "../../assets/images/Home/Video/thumb-4.jpg";
import thumb_5_image from "../../assets/images/Home/Video/thumb-5.jpg";
import nbc_logo from "../../assets/images/Home/Video/nbc.svg";
import playbutton from "../../assets/images/Home/Video/playbutton.svg";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

class HomeVideoGallery extends Component {
  render() {
    return (
      <div className="home-video-gallery-wrapper">
        <Row gutter={16}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 22 }}
            style={{ padding: "5px" }}
          >
            <div
              className="main-video-image"
              style={{ backgroundImage: "url(" + Main_Video_Image + ")" }}
            >
              <div className="button-container-outer">
                <div className="button-container-inner">
                  <Link className="button-left" to={"/video"}>
                    <img src={nbc_logo} alt="NBC Logo"/>
                    <p>HELPING FAMILIES ONE HOME AT A TIME</p>
                  </Link>
                  <Link className="button-right" to="/">
                    <div
                      style={{
                        float: "left"
                      }}
                    >
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
            md={{ span: 2 }}
            style={{ padding: "5px" }}
          >
            <div className="side-video-gallery">
              <img src={thumb_1_image} alt={"Thumbnail 1"} />
              <img src={thumb_2_image} alt={"Thumbnail 2"} />
              <img src={thumb_3_image} alt={"Thumbnail 3"} />
              <img src={thumb_4_image} alt={"Thumbnail 4"} />
              <img src={thumb_5_image} alt={"Thumbnail 5"} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomeVideoGallery;
