import { takeEvery } from "redux-saga/effects";
import {
  SET_MATCH_DATA,
  GET_CURRENT_MATCH_DETAILS,
  SET_UPDATED_MATCH_DATA,
} from "../Constants/index";
// import {  } from "./LandingPageSaga";
import {
  getCurrentMatchDetailSaga,
  setMatchDataSaga,
  setUpdatedMatchDataSaga,
} from "./MatchDashboardSaga";

export default function* rootSaga() {
  yield takeEvery(SET_MATCH_DATA, setMatchDataSaga);
  yield takeEvery(GET_CURRENT_MATCH_DETAILS, getCurrentMatchDetailSaga);
  yield takeEvery(SET_UPDATED_MATCH_DATA, setUpdatedMatchDataSaga);
}
