import { SET_MATCH_DATA, SET_MATCH_DATA_SUCCESS } from "../Constants/index";

export const setMatchDataAction = (payload: object) => {
  return {
    type: SET_MATCH_DATA,
    payload,
  };
};

export const setMatchDataSuccessAction = (payload: object) => {
  return {
    type: SET_MATCH_DATA_SUCCESS,
    payload,
  };
};
