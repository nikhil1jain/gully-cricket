import { combineReducers } from "redux";
import landingPageReducer from "./LandingPageReducer";

const rootReducer = combineReducers({
  landingPage: landingPageReducer,
});

export default rootReducer;
