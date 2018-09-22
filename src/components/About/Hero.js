import React, { Component } from "react";
import Exterior_Building_Image from "../../assets/images/About/exterior-section-1.jpg";

class Hero extends Component {
  // Hero Panel

  render() {
    return (
      <div
        className="hero-image"
        style={{ backgroundImage: "url(" + Exterior_Building_Image + ")" }}
      >
        <div className="hero-image-inner-wrapper">
          <div className="hero-title-wrapper">
            <h2>ABOUT</h2>
            <h1>MRC</h1>
          </div>
          <div className="content-wrapper-box">
            <div className="content-title">
              <p className="title">WHO WE ARE</p>
              <p className="sub-title">BUSINESS PROFILE</p>
            </div>
            <div className="content-description">
              <p>
                Michael Robert Construction is an award-winning, Westfield-based
                general contracting business specializing in high-end
                residential remodeling. As a design/build firm, our team focuses
                on working with our clients to develop a cohesive project
                through proper planning and architectural detailing.  We believe
                that remodeling should be seen as a whole house approach, where
                new design and construction is seamlessly integrated with the
                existing structure. Our work ranges from whole house renovations
                and design/build custom homes to additions and floor plan
                changes.
                <br />
                <br />
                We pride ourselves on a commitment to design and attention to
                detail, and have been rewarded with both local and national
                recognition; we have received “best of houzz” awards for almost
                ten consecutive years. We are devoted to Westfield and
                surrounding area through our work, community outreach and our
                own families. In fact, one way we show our community focus is
                through a partnership with NBC's nationally aired "George to the
                Rescue," helping improve the quality of life of local families
                through dramatic home renovations.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
