import React, { Component } from "react";
import { Row, Col } from "antd";

import { toggleFullScreenModal } from "../../actions/actionsCommon";
import { connect } from "react-redux";
// Export Photos
import Alex_Soria from "../../assets/images/About/Individuals/Alex-Soria-intro.jpg";
import Ellie_Mroz from "../../assets/images/About/Individuals/Ellie-Mroz-intro.jpg";
import Jack_And_Liam from "../../assets/images/About/Individuals/Jack-Liam-into.jpg";
import Lisa_Spirn from "../../assets/images/About/Individuals/Lisa-Spirn-intro.jpg";
import Micheal_Mroz from "../../assets/images/About/Individuals/Michael-R-Mroz-intro.png";
import Steve_Krammer from "../../assets/images/About/Individuals/Steve-Kammerer-intro.jpg";

var contentful = require("contentful");

class OurPersonal extends Component {
  // PersonalGallery
  constructor(props) {
    super(props);
    this.state = {
      imageGallery: [
        {
          image: Micheal_Mroz,
          name: "MICHAEL R. MROZ",
          description: "PRESIDENT & CEO",
          url: "/",
          modal: true,
          modalDescription: [
            "Building and remodeling has always been my dream and it is something that I love to do.  I love creating spaces and  making people happy.  Seeing a client’s reaction to their finished space is one of my greatest satisfactions.",
            "My remodeling career began at a very young age, when I renovated my parents’ basement at the age 15.  It started as a hobby and has flourished over time into Michael Robert Construction.  Before starting my own company, I worked with several well-known companies in the construction industry, including Kara Homes, Anthony James Construction, and Gandalf Restorations.",
            "I strongly believe in the power of higher and continuing education.  I attended Valparaiso University for my undergraduate degree in Management, and have continued my education through several post-graduate programs.  I belong to a number of organizations that offer me both the experience and the knowledge that I believe sets me apart from other contractors in the industry.  Below are several national organizations where I have gained enough recognition to hold several certifications. In the case of the Building Performance Institute, MRC is one of only 50 contracting companies certified in NJ."
          ],
          modalBackground: null
        },
        {
          image: Ellie_Mroz,
          name: "ELLIE MROZ",
          description: "INTERIOR DESIGN",
          url: "/"
        },
        {
          image: Steve_Krammer,
          name: "STEVE KAMMERER",
          description: "GENERAL MANAGER",
          url: "/"
        },
        {
          image: null,
          name: "KERRY CLIFFORD",
          description: "DESIGN & PLANNING",
          url: "/"
        },
        {
          image: null,
          name: "PAT EARLEY",
          description: "PROJECT MANAGER",
          url: "/"
        },
        {
          image: Lisa_Spirn,
          name: "LISA SPIRN",
          description: "OFFICE MANAGER",
          url: "/"
        },
        {
          image: Alex_Soria,
          name: "ALEX SORIA",
          description: "LEAD CARPENTER",
          url: "/"
        },
        {
          image: Jack_And_Liam,
          name: "JACK & LIAM",
          description: "FUTURE CO-CEOS",
          url: "/"
        }
      ]
    };
    this.renderExperts = this.renderExperts.bind(this);
    this.openPersonalModal = this.openPersonalModal.bind(this);
  }
  openPersonalModal(expert) {
    if (expert.fields.description) {
      this.props.toggleFullScreenModal();
    }
  }
  client = contentful.createClient({
    space: "490ezzr1f96l",
    accessToken:
      "8e9529f53ad5d25dfe6af8cf4541e10358877acb64a2945cc9898851b36696bb"
  });
  componentWillMount() {
    var that = this;
    this.client
      .getEntries({
        content_type: "teamMember",
        order: "sys.createdAt"
      })
      .then(function(entries) {
        console.log(entries);
        that.setState({ entries: entries.items });
      });
  }
  renderExperts() {
    var that = this;
    if (this.state.entries) {
      return this.state.entries.map(function(expert) {
        return (
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            key={expert.fields.name}
            style={{ padding: "9px" }}
          >
            <div
              className="expert-photo"
              onClick={() => that.openPersonalModal(expert)}
              style={{
                backgroundImage:
                  "url(" +
                  expert.fields.headShot.fields.file.url +
                  "?w=286&h=286&fm=jpg&q=90&fit=fill&fl=progressive)"
              }}
            >
              <div className="button-container-outer">
                <div className="button-container-inner">
                  <div className="button-bottom">
                    <div>
                      <p className="cta">{expert.fields.title}</p>
                      <p className="link">{expert.fields.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        );
      });
    }
  }
  render() {
    return (
      <div className="experts-container">
        <div className="title-wrapper">
          <p className="sub-title">OUR TEAM</p>
          <p className="title">PASSIONATE EXPERTS</p>
          <p className="description">
            At MRC, we are more than a business; we are a committed team,
            working together to craft homes and client relationships that will
            last lifetimes.
          </p>
        </div>
        <Row gutter={16}>{this.renderExperts()}</Row>
      </div>
    );
  }
}

export default connect(
  null,
  {
    toggleFullScreenModal
  }
)(OurPersonal);
