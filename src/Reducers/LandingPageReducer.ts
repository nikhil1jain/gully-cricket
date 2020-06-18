import { SET_MATCH_DATA_SUCCESS } from "../Constants/index";

const initialState = {
  matchData: {},
};

const landingPageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_MATCH_DATA_SUCCESS:
      state.matchData = { ...action.payload };
      break;
    default:
      return {
        ...state,
      };
  }
};

export default landingPageReducer;
