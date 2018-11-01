import React, { Component } from "react";
import { Row, Col } from "antd";

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
        className="panel"
      >
        <div style={{ width: "100%" }}>
          <p
            style={{
              color: this.props.textColor
            }}
          >
            {this.props.name}
          </p>
        </div>
        {this.props.costEstablished ? (
          <div className="cost-wrapper">
            <p>Cost Established</p>
          </div>
        ) : null}
      </Col>
    );
  }
}

class ChartThing extends Component {
  // Maintance Copy Section
  render() {
    return (
      <div className="chart-thing">
        <Row gutter={16} className="chart-thing-inner-wrapper">
          <ChartItem
            name="Traditional"
            color="#fff"
            span={2}
            textColor="#000"
          />
          <ChartItem
            name="Client Planning"
            color="#30657a"
            span={2}
            textColor="#fff"
          />
          <ChartItem
            name="Select Architect"
            color="#75853d"
            span={2}
            textColor="#fff"
          />
          <ChartItem
            name="Conceptual Drawings"
            color="#3e405c"
            span={2}
            textColor="#fff"
          />
          <ChartItem
            name="Find Drawings"
            color="#35696d"
            span={2}
            textColor="#fff"
          />
          <ChartItem
            name="Select Contractor"
            color="#af6530"
            span={2}
            textColor="#fff"
          />
          <ChartItem
            name="Permits"
            color="#6b8894"
            costEstablished={true}
            span={2}
            textColor="#fff"
          />
          <ChartItem
            name="Construction"
            color="#9a665f"
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
          />
          <ChartItem
            name="Client Planning"
            color="#30657a"
            span={2}
            textColor="#fff"
          />
          <ChartItem
            name="Select Design Build Firm"
            color="#7f2d2a"
            span={2}
            textColor="#fff"
          />
          <ChartItem
            name="Conceptual Drawings"
            color="#3e405c"
            span={2}
            textColor="#fff"
          />
          <ChartItem
            name="Find Drawings"
            color="#35696d"
            span={2}
            costEstablished={true}
            textColor="#fff"
          />
          <ChartItem name="Permits" color="#6b8894" span={2} textColor="#fff" />
          <ChartItem
            name="Construction"
            color="#9a665f"
            span={4}
            textColor="#fff"
          />
        </Row>
      </div>
    );
  }
}

export default ChartThing;
