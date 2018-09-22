import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

var composeEnhancers;
// If ENV not in dev, do not allow REDUX Dev Tools
if (process.env.NODE_ENV === "development") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
