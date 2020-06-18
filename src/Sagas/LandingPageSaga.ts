import { put } from "redux-saga/effects";
import { setMatchDataSuccessAction } from "../Actions/index";
import axios from "axios";

function* setMatchDataSaga(action: any) {
  yield console.log("setMatchDataSaga called", action);
  const baseURL: string =
    "https://gully-cricket-2f2fe.firebaseio.com/match.json";
  try {
    const response = yield axios.post(baseURL, action.payload);
    if (response.status === 200) {
      console.log("response", response);
      yield put(setMatchDataSuccessAction(action.payload));
    }
  } catch (error) {
    console.log("[Error]", error);
  }
}

export { setMatchDataSaga };
