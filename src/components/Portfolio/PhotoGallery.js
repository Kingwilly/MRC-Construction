import React, { Component } from "react";
import { connect } from "react-redux";

import { clearTimeout } from "timers";
import Scroll_Down_Arrow from "../../assets/images/Common/scroll_down_arrow.svg";
import { Row, Col } from "antd";
import KeyHandler, { KEYDOWN } from "react-key-handler";

var infiniteLoop;

class PersonalModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalClasses: "modal-gone",
      imageGallery: []
    };
    this.goToNextActiveImage = this.goToNextActiveImage.bind(this);
    this.setActiveImage = this.setActiveImage.bind(this);
  }
  setImageGallery(portfolio_object, portfolio_photo_id) {
    console.log(portfolio_object);
    console.log(portfolio_photo_id);
    var imageGallery = [];

    portfolio_object.fields.rooms.map(function(room) {
      if (room.sys.id === portfolio_photo_id) {
        imageGallery.push({
          image:
            room.fields.image.fields.file.url +
            "?w=1920&fm=jpg&q=85&fit=fill&fl=progressive",
          active: true
        });
      } else {
        imageGallery.push({
          image:
            room.fields.image.fields.file.url +
            "?w=1920&fm=jpg&q=85&fit=fill&fl=progressive",
          active: false
        });
      }
    });
    this.setState({
      imageGallery: imageGallery
    });
  }

  componentWillReceiveProps(nextProps) {
    var that = this;
    if (nextProps.modalOpen) {
      // Initiate The Timer

      this.setImageGallery(
        nextProps.portfolio_object,
        nextProps.portfolio_photo_id
      );

      setTimeout(function() {
        that.setState({ modalClasses: "navigation-overlay-open" });
      }, 100);
      that.setState({ modalClasses: "" });
    } else {
      setTimeout(function() {
        that.setState({ modalClasses: "modal-gone" });
      }, 500);
      that.setState({ modalClasses: "" });
    }
  }

  setActiveImage(nextActive, manual) {
    // Manually set the next active image in the gallery
    if (manual) {
      clearTimeout(infiniteLoop);
    }
    if (nextActive === 0) {
      nextActive = 0;
    } else {
      nextActive -= 1;
    }

    var newImageArray = this.state.imageGallery;
    newImageArray.forEach(function(galleryObject) {
      galleryObject.active = false;
    });
    newImageArray[nextActive].active = true;

    this.setState({ imageGallery: newImageArray });
  }
  goToNextActiveImage(manual) {
    //   Looks through the gallery and detemines which image should be active next
    // Get the total length of the image Gallery Array
    if (manual) {
      clearTimeout(infiniteLoop);
    }

    var imageCount = this.state.imageGallery.length;
    //
    var currentActiveImage = null;
    // For each image in the gallery check which one is active
    this.state.imageGallery.forEach(function(galleryObject, index) {
      if (galleryObject.active) {
        // Add one to it
        currentActiveImage = index + 1;
      }
    });
    // Get the next active inext ie thatone plus one
    var nextActiveImageIndex = currentActiveImage + 1;

    // If it is bigger than the array itself, go back to 0
    if (nextActiveImageIndex > imageCount) {
      nextActiveImageIndex = 0;
    }
    // Set the active image
    this.setActiveImage(nextActiveImageIndex);
  }
  goToNextPreviousImage(manual) {
    //   Looks through the gallery and detemines which image should be active next
    // Get the total length of the image Gallery Array
    if (manual) {
      clearTimeout(infiniteLoop);
    }

    var imageCount = this.state.imageGallery.length;
    //
    var currentActiveImage = null;
    // For each image in the gallery check which one is active
    this.state.imageGallery.forEach(function(galleryObject, index) {
      if (galleryObject.active) {
        // Add one to it
        currentActiveImage = index + 1;
      }
    });
    // Get the next active inext ie thatone plus one
    var nextActiveImageIndex = currentActiveImage - 1;

    // If it is bigger than the array itself, go back to 0
    if (nextActiveImageIndex > imageCount) {
      nextActiveImageIndex = 0;
    }
    if (nextActiveImageIndex === -1) {
      nextActiveImageIndex = this.state.imageGallery.length - 1;
    }
    // Set the active image
    this.setActiveImage(nextActiveImageIndex);
  }
  setInfiniteLoop() {
    var that = this;
    setTimeout(function() {
      that.goToNextActiveImage();
      that.setInfiniteLoop();
    }, 6500);
  }

  renderGalleryImages() {
    return this.state.imageGallery.map(function(item, i) {
      let className = "gallery-image-closed";
      function renderClassName() {
        if (item.active) {
          className = "gallery-image-open";
        }
        return className;
      }

      return (
        <div
          className={renderClassName()}
          key={i}
          style={{
            background:
              " linear-gradient(to top, rgba(4, 0, 0, 0.2), transparent,  transparent, transparent), url(" +
              item.image +
              ")"
          }}
        />
      );
    });
  }

  render() {
    return (
      <div
        className={"porfolio-modal-container " + this.state.modalClasses}
        style={{
          background: "white"
        }}
      >
        <Row gutter={16}>
          <Col xs={{ span: 24 }} md={{ span: 24 }}>
            <div className="portfolio-main-image">
              <img
                onClick={() => this.goToNextPreviousImage()}
                src={Scroll_Down_Arrow}
                alt="Scroll Arrow"
                className="scroll-arrow-left"
              />
              <KeyHandler
                keyEventName={KEYDOWN}
                code={"ArrowLeft"}
                onKeyHandle={() => this.goToNextPreviousImage(true)}
              />
              <KeyHandler
                keyEventName={KEYDOWN}
                code={"ArrowRight"}
                onKeyHandle={() => this.goToNextActiveImage(true)}
              />
              {this.renderGalleryImages()}
              <img
                src={Scroll_Down_Arrow}
                alt="Scroll Arrow"
                onClick={() => this.goToNextActiveImage(true)}
                className="scroll-arrow-right"
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modalOpen: state.common.porfolio_modal_open,
    portfolio_object: state.common.portfolio_object,
    portfolio_photo_id: state.common.portfolio_photo_id
  };
}

export default connect(
  mapStateToProps,
  {}
)(PersonalModal);
