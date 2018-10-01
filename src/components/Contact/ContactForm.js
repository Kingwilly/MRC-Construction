import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        subject: "",
        how_should_i_contact: "",
        message: ""
      }
    };
    this.updateFormState = this.updateFormState.bind(this);
  }
  updateFormState(field, value) {
    console.log(field, value);
  }
  render() {
    return (
      <div className="contact-form-wrapper">
        <div className="contact-form-inner-wrapper">
          <form action="GET">
            <div className="form-row">
              <div className="form-item">
                <input
                  type="text"
                  name="first_name"
                  placeholder="FIRST NAME *"
                  required={true}
                />
              </div>
              <div className="form-item">
                <input
                  type="text"
                  name="last_name"
                  placeholder="LAST NAME *"
                  required={true}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <input
                  type="email"
                  name="email"
                  placeholder="YOUR EMAIL *"
                  required={true}
                />
              </div>
              <div className="form-item">
                <input
                  type="text"
                  name="phone"
                  placeholder="YOUR PHONE *"
                  required={true}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <input
                  type="text"
                  name="subject"
                  placeholder="SUBJECT *"
                  required={true}
                />
              </div>
              <div className="form-item">
                <input
                  type="text"
                  name="how_should_we_contact_you"
                  placeholder="HOW SHOULD WE CONTACT YOU *"
                  required={true}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-item" style={{ width: "100%" }}>
                <textarea
                  cols="30"
                  name="message"
                  rows="5"
                  placeholder="MESSAGE"
                />
              </div>
            </div>
            <div>
              <button type="submit" className="submit-button">
                SEND MESSAGE →
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
