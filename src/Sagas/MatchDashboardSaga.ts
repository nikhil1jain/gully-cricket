import { put } from "redux-saga/effects";
import { postEndPoint, getEndPoint, putEndPoint } from "../Services/index";
import {
  setMatchDataSuccessAction,
  setCurrentMatchIdAction,
} from "../Actions/index";

function* setMatchDataSaga(action: any) {
  yield console.log("setMatchDataSaga called", action);
  try {
    const response = yield postEndPoint(action.payload);
    const matchId = response.name;
    yield localStorage.setItem("matchId", matchId);
    yield put(setMatchDataSuccessAction(action.payload));
    yield put(setCurrentMatchIdAction(response.name));
  } catch (error) {
    console.log("[Error]", error);
  }
}

function* getCurrentMatchDetailSaga() {
  try {
    const response = yield getEndPoint();
    var firstKey = Object.keys(response)[0];
    var cptyName = response[firstKey];
    yield put(setMatchDataSuccessAction(cptyName));
  } catch (error) {
    console.log("[Error]", error);
  }
}

function* setUpdatedMatchDataSaga(action: any) {
  const matchId = localStorage.getItem("matchId") as any;
  try {
    const response = yield putEndPoint({
      [matchId]: { ...action.payload },
    });
    console.log("response", response);
    if (response.status === 200) {
      yield put(setMatchDataSuccessAction(action.payload));
    }
  } catch (error) {
    console.log("[Error]", error);
  }
}

export { getCurrentMatchDetailSaga, setMatchDataSaga, setUpdatedMatchDataSaga };
