import React, { Component } from "react";
import { Row, Col, Icon } from "antd";

class ChartItem extends Component {
  // Maintance Copy Section
  render() {
    return (
      <Col
        xs={{ span: 12, offset: 0 }}
        md={{ span: this.props.span, offset: this.props.offset }}
        style={{
          padding: "9px",
          backgroundColor: this.props.color,
          color: this.props.textColor
        }}
        className={"panel " + this.props.panelClass}
      >
        <div style={{ width: "100%" }}>
          <p
            style={{ color: this.props.textColor }}
            className={this.props.textClass}
          >
            {this.props.name}
          </p>
        </div>
        {this.props.costEstablished ? (
          <div className="cost-wrapper">
            <p>Cost Established</p>
          </div>
        ) : null}
        {this.props.arrow ? <Icon type="right" theme="outlined" /> : null}
      </Col>
    );
  }
}

class ChartThing extends Component {
  // Maintance Copy Section
  render() {
    return (
      <div className="chart-thing">
        <div className="title-wrapper">
          <h2>DESIGN / BUILD PATH & TRADITIONAL PATH</h2>
        </div>
        <Row gutter={16} className="chart-thing-inner-wrapper">
          <ChartItem
            name="Traditional"
            color="#fff"
            span={24}
            textColor="#000"
            textClass={"title"}
          />
          <ChartItem
            name="Client Planning"
            color="#fff"
            span={2}
            offset={3}
            arrow={true}
            panelClass={"first-panel"}
            textColor="#000"
          />
          <ChartItem
            name="Select Architect"
            color="#fff"
            span={2}
            arrow={true}
            textColor="#000"
          />
          <ChartItem
            name="Conceptual Drawings"
            color="#fff"
            span={2}
            arrow={true}
            textColor="#000"
          />
          <ChartItem
            name="Find Drawings"
            color="#fff"
            span={2}
            arrow={true}
            textColor="#000"
          />
          <ChartItem
            name="Select Contractor"
            color="#fff"
            span={2}
            arrow={true}
            textColor="#000"
          />
          <ChartItem
            name="Permits"
            color="#fff"
            costEstablished={true}
            span={2}
            arrow={true}
            textColor="#000"
          />
          <ChartItem
            name="Construction"
            color="#fff"
            span={4}
            textColor="#000"
          />
        </Row>

        <Row gutter={16} className="chart-thing-inner-wrapper">
          <ChartItem
            name="Design/Build"
            color="#fff"
            span={24}
            textColor="#000"
            textClass={"title"}
          />
          <ChartItem
            name="Client Planning"
            color="#fff"
            span={2}
            panelClass={"first-panel"}
            offset={3}
            arrow={true}
            textColor="#000"
          />
          <ChartItem
            name="Select Design Build Firm"
            color="#fff"
            span={2}
            arrow={true}
            textColor="#000"
          />
          <ChartItem
            name="Conceptual Drawings"
            color="#fff"
            span={2}
            arrow={true}
            textColor="#000"
          />
          <ChartItem
            name="Find Drawings"
            color="#fff"
            span={2}
            arrow={true}
            costEstablished={true}
            textColor="#000"
          />
          <ChartItem
            name="Permits"
            color="#fff"
            span={2}
            arrow={true}
            textColor="#000"
          />
          <ChartItem
            name="Construction"
            color="#fff"
            arrow={true}
            span={4}
            textColor="#000"
          />
          <ChartItem name="Time Saved" color="#fff" span={2} textColor="#000" />
        </Row>
      </div>
    );
  }
}

export default ChartThing;
