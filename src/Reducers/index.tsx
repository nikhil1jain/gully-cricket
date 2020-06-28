import { combineReducers } from "redux";
import matchDashboardReducer from "./MatchDashboardReducers";

const rootReducer = combineReducers({
  match: matchDashboardReducer,
});

export default rootReducer;
