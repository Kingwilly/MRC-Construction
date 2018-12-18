import React, { Component } from "react";

import { clearTimeout } from "timers";
import Scroll_Down_Arrow from "../../assets/images/Common/scroll_down_arrow.svg";
import Swipe from "react-easy-swipe";

// Gallery Images
import Image_002 from "../../assets/images/About/Gallery/171127-EM_Workspace_002.jpg";
import Image_004 from "../../assets/images/About/Gallery/171127-EM_Workspace_004.jpg";
import Image_007 from "../../assets/images/About/Gallery/171127-EM_Workspace_007.jpg";
import Image_012 from "../../assets/images/About/Gallery/171127-EM_Workspace_012.jpg";
import Image_013 from "../../assets/images/About/Gallery/171127-EM_Workspace_013.jpg";
import Image_014 from "../../assets/images/About/Gallery/171127-EM_Workspace_014.jpg";
import Image_020 from "../../assets/images/About/Gallery/171127-EM_Workspace_020.jpg";
import KeyHandler, { KEYDOWN } from "react-key-handler";

var infiniteLoop;

class Gallery extends Component {
  // Rotating Gallery Section
  constructor(props) {
    super(props);
    this.state = {
      imageGallery: [
        {
          image: Image_012,
          active: true
        },
        {
          image: Image_002,
          active: false
        },
        {
          image: Image_004,
          active: false
        },
        {
          image: Image_007,
          active: false
        },

        {
          image: Image_013,
          active: false
        },
        {
          image: Image_014,
          active: false
        },
        {
          image: Image_020,
          active: false
        }
      ]
    };
    this.goToNextActiveImage = this.goToNextActiveImage.bind(this);
    this.setActiveImage = this.setActiveImage.bind(this);
  }

  onSwipeStart(event) {
    console.log("Start swiping...", event);
  }

  onSwipeMove(position, event) {
    console.log(`Moved ${position.x} pixels horizontally`, event);
    console.log(`Moved ${position.y} pixels vertically`, event);
  }

  onSwipeEnd(position, event) {
    console.log(position);
    console.log("End swiping...", event);
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
  componentDidMount() {
    // Initiate The Timer
    infiniteLoop = this.setInfiniteLoop();
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
      <Swipe
        onSwipeLeft={() => this.goToNextActiveImage(true)}
        onSwipeRight={() => this.goToNextPreviousImage(true)}
      >
        <div className="gallery-secion">
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
      </Swipe>
    );
  }
}

export default Gallery;
