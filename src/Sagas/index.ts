import { takeEvery } from "redux-saga/effects";
import { SET_MATCH_DATA } from "../Constants/index";
import { setMatchDataSaga } from "./LandingPageSaga";

export default function* rootSaga() {
  yield takeEvery(SET_MATCH_DATA, setMatchDataSaga);
}
