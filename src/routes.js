import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "./components/Utils/AnimatedSwitch";
// Common Pages
import Home from "./containers/Home";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Process from "./containers/Process";
import PortfolioHome from "./containers/PortfolioHome";
import PortfolioDetail from "./containers/PortfolioDetail";
import PersonalModal from "./components/About/PersonalModal";
import PhotoGallery from "./components/Portfolio/PhotoGallery";
import BlogHome from "./containers/BlogHome";
import BlogDetail from "./containers/BlogDetail";
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
                  <Route exact path="/our-process" component={Process} />
                  <Route exact path="/contact" component={Contact} />
                  <Route
                    exact
                    path="/our-portfolio"
                    component={PortfolioHome}
                  />
                  <Route exact path="/our-journal" component={BlogHome} />
                  <Route
                    path="/our-journal/:id/:title"
                    component={BlogDetail}
                  />
                  <Route
                    path="/our-portfolio/:id/:title"
                    component={PortfolioDetail}
                  />
                </AnimatedSwitch>
              </TransitionGroup>
              <PersonalModal />
              <PhotoGallery />
            </div>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default Routes;
