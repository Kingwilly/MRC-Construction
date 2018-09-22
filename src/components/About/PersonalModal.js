import React, { Component } from "react";
import Fade from 'react-fade-opacity'
import { connect } from "react-redux";
// Peronsl Modals Images
import Mike_With_Axe from "../../assets/images/About/Individuals/Mike-with-ax-pic-bio.jpg";


class PersonalModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalClasses: "modal-gone"
    };
   
  }
  componentWillReceiveProps(nextProps) {
    var that = this;
    if (nextProps.modalOpen) {
      setTimeout(function() {
       that.setState({modalClasses: "navigation-overlay-open"})
      }, 100);
      that.setState({modalClasses: ""})
    } else {
      setTimeout(function() {
        that.setState({modalClasses: "modal-gone"})
       }, 500);
       that.setState({modalClasses: ""})
    }
  }

  render() {
    return (

      <div
        className={"personal-modal-container " + this.state.modalClasses }
        style={{
          background:
            " linear-gradient(to left, rgba(51,51,51,0.8),   transparent), url(" +
            Mike_With_Axe +
            ")"
        }}
      >

      </div>
     
    );
  }
}


function mapStateToProps(state) {
  return {
    modalOpen: state.common.full_screen_modal_open
  };
}

export default connect(
  mapStateToProps,
  {
    
  }
)(PersonalModal);
