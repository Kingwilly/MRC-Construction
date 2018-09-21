import React, { Component } from "react";
// Common + Utils
import LoadingAnimationWrapper from "./components/Utils/LoadingAnimationWrapper";
import Footer from "./components/Common/Footer";
import Routes from "./routes";

class App extends Component {
  // Parent container that holds the routes, nav, and routes
  render() {
    return (
      <div className="global-app-wrapper">
        <LoadingAnimationWrapper>
          <Routes />
          <Footer />
        </LoadingAnimationWrapper>
      </div>
    );
  }
}

export default App;
