import React, { Component } from "react";
// Common + Utils
import LoadingAnimationWrapper from "./components/Utils/LoadingAnimationWrapper";
import Footer from "./components/Common/Footer";
import Routes from "./routes";
import store from "./store";

import { Provider } from "react-redux";

class App extends Component {
  // Parent container that holds the routes, nav, and routes
  render() {
    return (
      <div className="global-app-wrapper">
        <Provider store={store}>
          <LoadingAnimationWrapper>
            <Routes />
            <Footer />
          </LoadingAnimationWrapper>
        </Provider>
      </div>
    );
  }
}

export default App;
