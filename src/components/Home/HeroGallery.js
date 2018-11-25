import React, { Component } from "react";
// Gallery Images
import House_Image from "../../assets/images/Home/Gallery/House.jpg";
import Kitchen_Image from "../../assets/images/Home/Gallery/Kitchen.jpg";
import Other_House_Image from "../../assets/images/Home/Gallery/Other_House.jpg";
import Other_Kitchen_Image from "../../assets/images/Home/Gallery/Other_Kitchen.jpg";
import Stairs_Image from "../../assets/images/Home/Gallery/Stairs.jpg";
import Patio from "../../assets/images/Home/Gallery/Patio.jpg";
import Swipe from "react-easy-swipe";
import { clearTimeout } from "timers";
var contentful = require("contentful");
var infiniteLoop;

class HeroGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageGallery: [
        { src: Patio, id: "Patio_Image", active: true },
        {
          src:
            "https://images.ctfassets.net/490ezzr1f96l/4TsBUNCmu4WCiq2OOc4sgY/3ee86d6401aca6c2ffc77bf710682765/House.jpg?w=1920&fm=jpg&q=90&fit=fill&fl=progressive",
          id: "House_Image",
          active: false
        },
        {
          src:
            "https://images.ctfassets.net/490ezzr1f96l/3BnpteykAUywAyuuq4uOKc/a8ce1b8584921a8d7c92986c9f4e231b/Kitchen.jpg?w=1920&fm=jpg&q=90&fit=fill&fl=progressive",
          id: "Kitchen_Image",
          active: false
        },
        {
          src:
            "https://images.ctfassets.net/490ezzr1f96l/B97PPc7QJwMQKmIki8mWS/3a24e1a521af27422347ee8f165dec93/Other_House.jpg?w=1920&fm=jpg&q=90&fit=fill&fl=progressive",
          id: "Other_House_Image",
          active: false
        },
        {
          src:
            "https://images.ctfassets.net/490ezzr1f96l/4mxf6zQDdCKk4gMweoAisG/ae178a045e61374e7684f39eea0ba404/Other_Kitchen.jpg?w=1920&fm=jpg&q=90&fit=fill&fl=progressive",
          id: "Other_Kitchen_Image",
          active: false
        },
        {
          src:
            "https://images.ctfassets.net/490ezzr1f96l/5cANpm9oD6wCsoa4wyOgkg/0d0c43667bd7b4b51faa7515568576de/Stairs.jpg?w=1920&fm=jpg&q=90&fit=fill&fl=progressive",
          id: "Stairs_Image",
          active: false
        }
      ]
    };
    this.goToNextActiveImage = this.goToNextActiveImage.bind(this);
    this.setActiveImage = this.setActiveImage.bind(this);
    this.renderTimers = this.renderTimers.bind(this);
  }
  client = contentful.createClient({
    space: "490ezzr1f96l",
    accessToken:
      "8e9529f53ad5d25dfe6af8cf4541e10358877acb64a2945cc9898851b36696bb"
  });
  componentWillMount() {
    this.client
      .getAsset("4mxf6zQDdCKk4gMweoAisG")
      .then(asset => console.log(asset.fields.file.url));
    this.client
      .getAsset("B97PPc7QJwMQKmIki8mWS")
      .then(asset => console.log(asset.fields.file.url));
    this.client
      .getAsset("3BnpteykAUywAyuuq4uOKc")
      .then(asset => console.log(asset.fields.file.url));
    this.client
      .getAsset("4TsBUNCmu4WCiq2OOc4sgY")
      .then(asset => console.log(asset.fields.file.url));
    this.client
      .getAsset("5cANpm9oD6wCsoa4wyOgkg")
      .then(asset => console.log(asset.fields.file.url));
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
  goToNextActiveImage() {
    //   Looks through the gallery and detemines which image should be active next
    // Get the total length of the image Gallery Array
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
  goToNextPreviousImage() {
    //   Looks through the gallery and detemines which image should be active next
    // Get the total length of the image Gallery Array
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
    if (nextActiveImageIndex <= 0) {
      nextActiveImageIndex = imageCount;
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
  renderTimers() {
    var that = this;
    return this.state.imageGallery.map(function(item, i) {
      var className = "timer";
      if (item.active) {
        className = "timer timer-active";
      }
      var progressClassName = "";
      if (item.active) {
        progressClassName = "progress__value";
      }
      var currentIndex = i + 1;

      return (
        <div
          className={className}
          key={item.id}
          onClick={() => that.setActiveImage(currentIndex, true)}
        >
          <svg
            className="progress"
            width="42"
            height="42"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="rgba(232, 232, 232, 0.61)"
              strokeWidth="6"
            />
            <circle
              className={progressClassName}
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#FFF"
              strokeWidth="6"
            />
          </svg>
        </div>
      );
    });
  }

  // Home Screen Hero Gallery
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
          key={item.id}
          style={{
            background:
              " linear-gradient(to top, rgba(4, 0, 0, 0.74), transparent,  transparent, transparent), url(" +
              item.src +
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
        <div className="gallery-wrapper">
          <div className="timer-wrapper">
            <div className="timer-row">{this.renderTimers()}</div>
          </div>
          <div className="headline-wrapper">
            <div className="headline">
              <h1>A Whole House Approach</h1>
            </div>
          </div>
          {this.renderGalleryImages()}
        </div>
      </Swipe>
    );
  }
}

export default HeroGallery;
