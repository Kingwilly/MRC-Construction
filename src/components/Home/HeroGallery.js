import React, { Component } from "react";
// Gallery Images
import House_Image from "../../assets/images/Home/Gallery/House.jpg";
import Kitchen_Image from "../../assets/images/Home/Gallery/Kitchen.jpg";
import Other_House_Image from "../../assets/images/Home/Gallery/Other_House.jpg";
import Other_Kitchen_Image from "../../assets/images/Home/Gallery/Other_Kitchen.jpg";
import Stairs_Image from "../../assets/images/Home/Gallery/Stairs.jpg";

class HeroGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageGallery: [
        {
          src: House_Image,
          id: "House_Image",
          active: false
        },
        {
          src: Kitchen_Image,
          id: "Kitchen_Image",
          active: false
        },
        {
          src: Other_House_Image,
          id: "Other_House_Image",
          active: false
        },
        {
          src: Other_Kitchen_Image,
          id: "Other_Kitchen_Image",
          active: true
        },
        {
          src: Stairs_Image,
          id: "Stairs_Image",
          active: false
        }
      ]
    };
  }
  determineNextActiveImage() {
    //   Looks through the gallery and detemines which image should be active next
  }
  componentDidMount() {
    // Initiate The Timer
    setTimeout(function() {
      that.setState({
        loadingStatus: "loading-screen-closed "
      });
    }, 3500);
  }
  componentDidUpdate() {}

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
      <div className="gallery-wrapper">
        <div className="headline">
          <h1>A Whole House</h1>
          <h1>Approach</h1>
        </div>
        {this.renderGalleryImages()}
      </div>
    );
  }
}

export default HeroGallery;
