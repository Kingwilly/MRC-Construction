import React, { Component } from "react";
import { Col } from "antd";

class UnitWrapper extends Component {
  render() {
    if (this.props.item.fields.details) {
      return <a href="#">{this.props.children}</a>;
    } else {
      return <div>{this.props.children}</div>;
    }
  }
}

class SingleUnit extends Component {
  // Maintance Copy Section
  render() {
    return (
      <Col
        xs={{ span: 24 }}
        sm={{ span: 12 }}
        md={{ span: 8 }}
        key={this.props.item.fields.title}
      >
        <div className="single-project-outer">
          <UnitWrapper item={this.props.item}>
            <div
              className="single-project-inner"
              style={{
                background:
                  "url(" +
                  this.props.item.fields.mainImage.fields.file.url +
                  "?w=375&h=270&fm=jpg&q=90&fit=fill&fl=progressive)"
              }}
            >
              <div className="panel-cta-outer">
                <div className="panel-cta-inner">
                  <div className="text-content">
                    <p className="value">{this.props.item.fields.title}</p>
                    <p className="label">{this.props.item.fields.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </UnitWrapper>
        </div>
      </Col>
    );
  }
}

export default SingleUnit;
