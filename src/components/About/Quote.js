import React, { Component } from "react";
import QuoteMark from "../../assets/images/Common/quote_start.svg";

class Quote extends Component {
  // Maintance Copy Section
  render() {
    return (
      <div className="quote-block">
        <div className="quote-icon start">
          <img src={QuoteMark} alt="Quote Start" />
        </div>
        <div className="quote-icon end">
          <img src={QuoteMark} alt="Quote End" />
        </div>
        <div className="quote-block-inner">
          <p className="quote">{this.props.quote}</p>
          <p className="speaker">{this.props.speaker}</p>
        </div>
      </div>
    );
  }
}

export default Quote;
