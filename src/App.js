import React, { Component } from "react";
import Routes from "./routes";
import LoadingAnimationWrapper from "./components/Utils/LoadingAnimationWrapper";

class App extends Component {
  // Parent container that holds the routes, nav, and routes
  render() {
    return (
      <div className="global-app-wrapper">
        <LoadingAnimationWrapper>
          <Routes />
        </LoadingAnimationWrapper>
      </div>
    );
  }
}

export default App;
