import React, { Component } from "react";
import { Row, Col } from "antd";
import Logo from "../../assets/images/Common/logo_small.svg";
import NBC from "../../assets/images/Social/nbc.svg";

class Footer extends Component {
  // Global Bottom Footer
  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-logo-row">
          <a href="/">
            <img
              src={Logo}
              alt="Micheal Robert Contstruction. A Whole House Approach."
              className="footer-logo"
            />
          </a>
        </div>
        <div className="footer-inner-wrapper">
          <Row gutter={16}>
            <Col xs={{ span: 24 }} sm={{ span: 8 }}>
              <div className="footer-block">
                <b className="footer-title">CALL TO START THE PROCESS</b>
                <div className="footer-inner-block">
                  <p>
                    Our office manager, Lisa, will be happy to talk to you about
                    your next project and getting started with the MRC team.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 8 }}>
              <div className="footer-block">
                <b className="footer-title">AREAS SERVED</b>
                <div className="footer-inner-block">
                  <p>
                    Westfield, Scotch Plains, Fanwood Cranford, Millburn, Short
                    Hills, and Mountainside.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 8 }}>
              <div className="footer-block">
                <b className="footer-title">FOLLOW US ON SOCIAL MEDIA & NBC</b>
                <div className="footer-inner-block inner-block-tight">
                  <Row>
                    <Col xs={{ span: 6 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                      <a
                        href="https://www.nbc.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={NBC}
                          alt="NBC"
                          className="social-media-icon"
                        />
                      </a>
                    </Col>
                    <Col xs={{ span: 6 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                      <a
                        href="https://www.nbc.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={NBC}
                          alt="NBC"
                          className="social-media-icon"
                        />
                      </a>
                    </Col>
                    <Col xs={{ span: 6 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                      <a
                        href="https://www.nbc.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={NBC}
                          alt="NBC"
                          className="social-media-icon"
                        />
                      </a>
                    </Col>
                    <Col xs={{ span: 6 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                      <a
                        href="https://www.nbc.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={NBC}
                          alt="NBC"
                          className="social-media-icon"
                        />
                      </a>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 24 }}>
              <div className="footer-row">
                <p className="address">400 WEST BROAD STREET, WESTFIELD, NJ</p>
                <a className="phone-number" href="tel:1-908-232-0134">
                  908 232 0134
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
