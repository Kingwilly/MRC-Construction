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
        town: "",

        message: ""
      }
    };
    this.updateFormState = this.updateFormState.bind(this);
  }
  updateFormState(field, value) {
    console.log(field, value);
  }

  // addCoConstructScript = () => {
  //   const script = document.createElement("script");
  //   script.src = "https://www.co-construct.com/app/api/LeadsIntakeForm/GetLeadsIntakeFormSubmissionJs?AuthKey=ZkhY0jMzK2WXARK03VSJjyedpILK4zMoVUe937VuyLM%3d";
  //   script.async = true;
  //   document.body.appendChild(script);
  // }
  //
  // addCoConstructStylesheet = () => {
  //   const sheet = document.createElement('link');
  //   sheet.rel = 'stylesheet';
  //   sheet.href = "https://www.co-construct.com/app/public/LeadIntake/LeadIntakeForm.css?289565009";
  //   sheet.type = 'text/css';
  //   document.head.appendChild(sheet);
  // }
  //
  // componentDidMount() {
  //   this.addCoConstructScript();
  //   this.addCoConstructStylesheet();
  // }

  render() {
    return (
        // <!-- COCONSTRUCT LEADS INTAKE FORM -->
        // <!-- Do not modify the code below. This form will automatically inherit the styling of your website. -->

        // <!-- CSS - This provides styling for the layout of the fields, validation and the confirmation message -->

        <div>
          <div id="divCoCoForm">
            <div className="coco-form-wrapper">
        
              {/* <!-- NAME FIELDS --> */}
              <div className="cocon-row">
                <div><label className="coco-label">Name</label></div>
                <div className="cocon-name-inputs">
                  <input id="txtCoCoFirstName" name="txtFirstName" type="text" className="coco-text-input" placeholder="First Name" /> 
                  <input id="txtCoCoLastName" name="txtLastName" type="text" className="coco-text-input" placeholder="Last Name" /> 
                </div>
                <div id="divNameErrorBanner" className="coco-error-banner" style={{display: 'none'}}><div>Please enter your name</div></div>
              </div>
              
              {/* <!-- EMAIL FIELD --> */}
              <div className="cocon-row">
                <div><label className="coco-label">Email</label></div>
                <div><input id="txtCoCoEmail" type="text" className="coco-text-input" /></div>
                <div id="divEmailErrorBanner" className="coco-error-banner" style={{display: 'none'}}><div id="spnEmailError"></div></div>
              </div>
              
              {/* <!-- PHONE FIELD --> */}
              <div className="cocon-row">
                <div><label className="coco-label">Phone</label></div>
                <div>
                  <input type="text" id="txtCoCoPhone" className="coco-text-input" />
                </div>
              </div>
              
              {/* <!-- MESSAGE FIELD --> */}
              <div className="cocon-row">
                <div><label className="coco-label">Message</label></div>
                <div>
                  <textarea id="txtCoCoMessage" type="text" className="coco-text-input" maxlength="1000"></textarea>
                </div>
              </div>
              
              {/* <!-- This input is used to prevent spam, however it is not visible in the form. Do not remove it. --> */}
              <div className="cocon-row">
                <input id="txtHPData" type="text" className="coco-h-p" autocomplete="off" />
              </div>
              
              {/* <!-- SUBMIT BUTTON --> */}
              <div className="cocon-row">
                <input type="button" id="btnLeadIntakeSubmit" className="cocon-button" value="Submit" />
                <div id="divGenericErrorBanner" className="coco-error-banner" style={{display: 'none'}}><span>This form can't be submitted. Try again later.</span></div>
              </div>
            
             </div>
            </div>
          
            {/* <!-- CONFIRMATION MESSAGE --> */}
            <div id="divCoCoConfirmation" style={{display: 'none'}}>
              <div className="coco-confirmation-icon">
                <svg width="132" height="132" xmlns="http://www.w3.org/2000/svg">
                  <path d="M66 132A66 66 0 1 1 66 0a66 66 0 0 1 0 132zm0-2A64 64 0 1 0 66 2a64 64 0 0 0 0 128zm-9.9-45.5l39-38.9 1.3 1.5-40.3 40.3-19.5-19.6 1.4-1.4L56 84.5z" fill="currentColor" fill-rule="nonzero" />
                </svg>
              </div>
              <span>Your message has been sent.</span>
          </div>
        </div>
        
    );
  }
}

export default ContactForm;
