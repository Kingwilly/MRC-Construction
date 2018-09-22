import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "./components/Utils/AnimatedSwitch";
// Common Pages
import Home from "./containers/Home";
import About from "./containers/About";
import PersonalModal from "./components/About/PersonalModal";
// Navigation Compoent
import Navigation from "./components/Common/Navigation";

class Routes extends React.Component {
  state = {
    newKey: new Date()
  };

  render() {
    document.getElementById("body").onclick = function(e) {
      this.setState({ newKey: new Date() });
    }.bind(this);

    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Route
          render={({ location }) => (
            <div>
            <Navigation />
            <TransitionGroup component="div">
            <AnimatedSwitch key={location.key} location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-mrc" component={About} />
            </AnimatedSwitch>
            </TransitionGroup>
            <PersonalModal />
            </div>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default Routes;
