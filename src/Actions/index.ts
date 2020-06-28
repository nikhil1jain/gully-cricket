import {
  SET_MATCH_DATA,
  SET_MATCH_DATA_SUCCESS,
  SET_CURRENT_MATCH_ID,
  GET_CURRENT_MATCH_DETAILS,
  UPDATED_OVER_PROGRESS_DATA,
  SET_UPDATED_MATCH_DATA,
} from "../Constants/index";

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

export const setCurrentMatchIdAction = (payload: string) => {
  return {
    type: SET_CURRENT_MATCH_ID,
    payload,
  };
};
export const getCurrentMatchDetailsAction = () => {
  return {
    type: GET_CURRENT_MATCH_DETAILS,
  };
};

export const updatedOverProgressDataAction = (payload: object) => {
  return {
    type: UPDATED_OVER_PROGRESS_DATA,
    payload,
  };
};

export const setUpdatedMatchDataAction = (payload: object) => {
  return {
    type: SET_UPDATED_MATCH_DATA,
    payload,
  };
};
