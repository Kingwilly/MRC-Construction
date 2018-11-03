import React, { Component } from "react";
import { Row, Col, Icon } from "antd";

class ChartItem extends Component {
  // Maintance Copy Section
  render() {
    return (
      <Col
        xs={{ span: 12 }}
        md={{ span: this.props.span }}
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
            span={2}
            textColor="#000"
            textClass={"title"}
          />
          <ChartItem
            name="Client Planning"
            color="rgb(0, 0, 0, .9)"
            span={2}
            arrow={true}
            textColor="#fff"
          />
          <ChartItem
            name="Select Architect"
            color="rgb(0, 0, 0, .8)"
            span={2}
            arrow={true}
            textColor="#fff"
          />
          <ChartItem
            name="Conceptual Drawings"
            color="rgb(0, 0, 0, .6)"
            span={2}
            arrow={true}
            textColor="#fff"
          />
          <ChartItem
            name="Find Drawings"
            color="rgb(0, 0, 0, .5)"
            span={2}
            arrow={true}
            textColor="#fff"
          />
          <ChartItem
            name="Select Contractor"
            color="rgb(0, 0, 0, .4)"
            span={2}
            arrow={true}
            textColor="#fff"
          />
          <ChartItem
            name="Permits"
            color="rgb(0, 0, 0, .3)"
            costEstablished={true}
            span={2}
            arrow={true}
            textColor="#fff"
          />
          <ChartItem
            name="Construction"
            color="rgb(0, 0, 0, .2)"
            span={4}
            textColor="#fff"
          />
        </Row>

        <Row gutter={16} className="chart-thing-inner-wrapper">
          <ChartItem
            name="Design/Build"
            color="#fff"
            span={2}
            textColor="#000"
            textClass={"title"}
          />
          <ChartItem
            name="Client Planning"
            color="rgb(0, 0, 0, .9)"
            span={2}
            arrow={true}
            textColor="#fff"
          />
          <ChartItem
            name="Select Design Build Firm"
            color="rgb(0, 0, 0, .8)"
            span={2}
            arrow={true}
            textColor="#fff"
          />
          <ChartItem
            name="Conceptual Drawings"
            color="rgb(0, 0, 0, .6)"
            span={2}
            arrow={true}
            textColor="#fff"
          />
          <ChartItem
            name="Find Drawings"
            color="rgb(0, 0, 0, .5)"
            span={2}
            arrow={true}
            costEstablished={true}
            textColor="#fff"
          />
          <ChartItem
            name="Permits"
            color="rgb(0, 0, 0, .3)"
            span={2}
            arrow={true}
            textColor="#fff"
          />
          <ChartItem
            name="Construction"
            color="rgb(0, 0, 0, .2)"
            span={4}
            textColor="#fff"
          />
          <ChartItem
            name="Time Saved"
            color="rgb(0, 0, 0, .2)"
            span={2}
            textColor="#fff"
            panelClass={" stripe"}
          />
        </Row>
      </div>
    );
  }
}

export default ChartThing;
