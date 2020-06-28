import {
  SET_MATCH_DATA_SUCCESS,
  SET_CURRENT_MATCH_ID,
  UPDATED_OVER_PROGRESS_DATA,
} from "../Constants/index";
import { getUpdatedValues } from "../Utils";

const initialState = {
  matchData: {},
  currentMatchId: null,
};

const matchDashboardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MATCH_DATA_SUCCESS:
      return {
        ...state,
        matchData: { ...action.payload },
      };
    case SET_CURRENT_MATCH_ID:
      return {
        ...state,
        currentMatchId: action.payload,
      };
    case UPDATED_OVER_PROGRESS_DATA:
      const updatedValues = getUpdatedValues(
        action.payload.randomOutcome,
        action.payload.ballCounter,
        state.matchData,
        action.payload.currentInning,
        action.payload.currentBowler
      );

      const tempObj = {
        ...state,
        matchData: {
          ...state.matchData,
          currentInning: action.payload.currentInning,
          [action.payload.currentInning]: {
            ...updatedValues,
          },
        },
      };
      return tempObj;
    default:
      return {
        ...state,
      };
  }
};

export default matchDashboardReducer;
