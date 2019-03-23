import React, { Component } from "react";


const COCONSTRUCT_CSS = "https://www.co-construct.com/app/public/LeadIntake/LeadIntakeForm.css?289565009";
const COCONSTRUCT_JS = "https://www.co-construct.com/app/api/LeadsIntakeForm/GetLeadsIntakeFormSubmissionJs?AuthKey=ZkhY0jMzK2WXARK03VSJjyedpILK4zMoVUe937VuyLM%3d";


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

  addCoConstructScript = () => {
    const script = document.createElement("script");
    script.src = COCONSTRUCT_JS;
   // script.async = true;
    document.body.appendChild(script);
  }

  addCoConstructStylesheet = () => {
    const sheet = document.createElement('link');
    sheet.rel = 'stylesheet';
    sheet.href = COCONSTRUCT_CSS;
    sheet.type = 'text/css';
    document.head.appendChild(sheet);
  }

  runJqueryDependency = () => {
    // minified js taken directly from from COCONSTRUCT_JS
    var CoCon=window.CoCon||{};CoCon.Leads=window.CoCon.Leads||{},document.addEventListener("DOMContentLoaded",function(){CoCon.Leads.LeadIntakeFormSubmissionModel=function(){"use strict";var it="divCoCoConfirmation",r="divEmailErrorBanner",rt="divCoCoForm",u="divGenericErrorBanner",o="divNameErrorBanner",s="txtCoCoEmail",h="txtCoCoFirstName",ut="txtHPData",c="txtCoCoLastName",ft="txtCoCoMessage",et="txtCoCoPhone",ot="https://www.co-construct.com/app/api/LeadsIntakeForm/SaveLeadIntakeForm",l="spnEmailError",t="btnLeadIntakeSubmit",n,a=!1,v,y,i,p,w,b,k,d,f,g,nt,e,tt;y=function(){n("#"+t).off("click",f),n("#"+t).text("Submitting...")},i=function(){n("#"+t).on("click",f);n("#"+t).text("Submit")},p=function(){n("#"+u).show(),i()},w=function(){var i=!0,t,f=!1,u=!1;return n("#"+r).hide(),n("#"+o).hide(),t=n("#"+h).val(),t.trim().length===0?u=!0:(t=n("#"+c).val(),t.trim().length===0&&(u=!0)),u===!0&&(i=!1,n("#"+o).show()),t=n("#"+s).val(),t.trim().length===0?(i=!1,n("#"+l).text("Please enter your email address"),n("#"+r).show()):(f=tt(t),f===!1&&(i=!1,n("#"+l).text("Please enter a valid email address"),n("#"+r).show())),i},tt=function(n){var t,i=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return n=n.trim(),t=i.test(n)},b=function(){var t=window.jQuery!==undefined&&window.jQuery!==null;return t===!0&&(n=window.jQuery),t},k=function(t,i){var r=null;r=document.createElement("script"),r.type="text/javascript",r.readyState?r.onreadystatechange=function(){(r.readyState==="loaded"||r.readyState==="complete")&&(r.onreadystatechange=null,i!==null&&i!==undefined&&(n=window.jQuery,i()))}:r.onload=function(){i!==null&&i!==undefined&&(n=window.jQuery,i())},r.src=t,document.getElementsByTagName("head")[0].appendChild(r)},f=function(){var i=!1,t=null,r=null;n("#"+u).hide(),i=w(),i&&(y(),t={},t.FirstName=n("#"+h).val(),t.LastName=n("#"+c).val(),t.EmailAddress=n("#"+s).val(),t.PhoneNumber=n("#"+et).val(),t.Message=n("#"+ft).val(),t.AuthenticationKey="ZkhY0jMzK2WXARK03VSJjyedpILK4zMoVUe937VuyLM=",t.HPValue=n("#"+ut).val(),t.HPValue===undefined||t.HPValue===null?t.HPValue=="":t.HPValue.length===0&&(t.HPValue=t.AuthenticationKey),r=JSON.stringify(t),n.when(nt(ot,r,null)).then(function(n){d(n)},p))},d=function(t){t.ValidatationError===!0?n("#"+u).show():(n("#"+rt).hide(),n("#"+it).show()),i()},g=function(){function n(n,t){return window.getComputedStyle(n,null).getPropertyValue(t)}var i=document.getElementById("txtCoCoMessage"),t=document.getElementById("txtCoCoEmail");i.style["border-width"]=n(t,"border-bottom-width"),i.style["border-color"]=n(t,"border-bottom-color"),i.style.padding=n(t,"padding-top")+" "+n(t,"padding-left"),i.style["background-color"]=n(t,"background-color")},nt=function(t,i){var u,f;return u=n.ajax({type:"POST",url:t,data:i,xhrFields:{withCredentials:!1},contentType:"application/json; charset=utf-8",dataType:"json",success:function(n){return n},error:function(t){t.responseText!==undefined&&(t.responseText=n.parseJSON(t.responseText).Message)}})},e=function(){i()},v="https://code.jquery.com/jquery-3.3.1.min.js",a=b(),a===!1?k(v,e):e(),g()}()})

    window.document.dispatchEvent(new Event("DOMContentLoaded", {
      bubbles: true,
      cancelable: true
    }));
  }

  componentDidMount() {
    this.addCoConstructScript();
    this.addCoConstructStylesheet();
    this.runJqueryDependency();
  }

  render() {
    return (
        // <!-- COCONSTRUCT LEADS INTAKE FORM -->
        // <!-- Do not modify the code below. This form will automatically inherit the styling of your website. -->

        // <!-- CSS - This provides styling for the layout of the fields, validation and the confirmation message -->

        <div style={{padding: "15px"}}>
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
