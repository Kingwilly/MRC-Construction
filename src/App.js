import React, { Component } from "react";
// Common + Utils
import LoadingAnimationWrapper from "./components/Utils/LoadingAnimationWrapper";
import Footer from "./components/Common/Footer";
import Routes from "./routes";
import store from "./store";
import AppWrapper from "./containers/AppWrapper";
import { Provider } from "react-redux";

class App extends Component {
  // Parent container that holds the routes, nav, and routes

  render() {
    return (
      <Provider store={store}>
        <AppWrapper>
          <LoadingAnimationWrapper>
            <Routes />
            <Footer />
          </LoadingAnimationWrapper>
        </AppWrapper>
      </Provider>
    );
  }
}

export default App;
