import React, { Component } from "react";

import { clearTimeout } from "timers";
import Scroll_Down_Arrow from "../../assets/images/Common/scroll_down_arrow.svg";

// Gallery Images
import Image_001 from "../../assets/images/About/Gallery/171127-EM_Workspace_001.jpg";
import Image_002 from "../../assets/images/About/Gallery/171127-EM_Workspace_002.jpg";
import Image_003 from "../../assets/images/About/Gallery/171127-EM_Workspace_003.jpg";
import Image_004 from "../../assets/images/About/Gallery/171127-EM_Workspace_004.jpg";
import Image_005 from "../../assets/images/About/Gallery/171127-EM_Workspace_005.jpg";
import Image_007 from "../../assets/images/About/Gallery/171127-EM_Workspace_007.jpg";
import Image_008 from "../../assets/images/About/Gallery/171127-EM_Workspace_008.jpg";
import Image_009 from "../../assets/images/About/Gallery/171127-EM_Workspace_009.jpg";
import Image_012 from "../../assets/images/About/Gallery/171127-EM_Workspace_012.jpg";
import Image_013 from "../../assets/images/About/Gallery/171127-EM_Workspace_013.jpg";
import Image_014 from "../../assets/images/About/Gallery/171127-EM_Workspace_014.jpg";
import Image_015 from "../../assets/images/About/Gallery/171127-EM_Workspace_015.jpg";
import Image_016 from "../../assets/images/About/Gallery/171127-EM_Workspace_016.jpg";
import Image_017 from "../../assets/images/About/Gallery/171127-EM_Workspace_017.jpg";
import Image_018 from "../../assets/images/About/Gallery/171127-EM_Workspace_018.jpg";
import Image_019 from "../../assets/images/About/Gallery/171127-EM_Workspace_019.jpg";
import Image_020 from "../../assets/images/About/Gallery/171127-EM_Workspace_020.jpg";

var infiniteLoop;

class Gallery extends Component {
  // Rotating Gallery Section
  constructor(props) {
    super(props);
    this.state = {
      imageGallery: [
        {
          image: Image_001,
          active: true
        },
        {
          image: Image_002,
          active: false
        },
        {
          image: Image_003,
          active: false
        },
        {
          image: Image_004,
          active: false
        },
        {
          image: Image_005,
          active: false
        },
        {
          image: Image_007,
          active: false
        },
        {
          image: Image_008,
          active: false
        },
        {
          image: Image_009,
          active: false
        },
        {
          image: Image_012,
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
          image: Image_015,
          active: false
        },
        {
          image: Image_016,
          active: false
        },
        {
          image: Image_017,
          active: false
        },
        {
          image: Image_018,
          active: false
        },
        {
          image: Image_019,
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
      <div className="gallery-secion">
        <img
          onClick={() => this.goToNextPreviousImage()}
          src={Scroll_Down_Arrow}
          alt="Scroll Arrow"
          className="scroll-arrow-left"
        />
        {this.renderGalleryImages()}
        <img
          src={Scroll_Down_Arrow}
          alt="Scroll Arrow"
          onClick={() => this.goToNextActiveImage(true)}
          className="scroll-arrow-right"
        />
      </div>
    );
  }
}

export default Gallery;
