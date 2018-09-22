import { combineReducers } from "redux";
import CommonReducer from "./reducerCommon";

const rootReducer = combineReducers({
  common: CommonReducer
});

export default rootReducer;
