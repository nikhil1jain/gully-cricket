import React, { useEffect } from "react";
import { connect } from "react-redux";
import { MatchResultView } from "../components/index";
import { selectMatchData, selectCurrentMatchId } from "../Selectors/index";
import { getCurrentMatchDetailsAction } from "../Actions/index";
import { IConnectedMatchResultProps } from "../Interfaces/index";

const ConnectedMatchResult = ({
  matchData,
  history,
  currentMatchId,
  getCurrentMatchDetailDispatch,
}: IConnectedMatchResultProps) => {
  useEffect(() => {
    if (!currentMatchId) {
      getCurrentMatchDetailDispatch();
    }
  }, [currentMatchId, getCurrentMatchDetailDispatch]);
  return (
    <div>
      <MatchResultView matchData={matchData} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    matchData: selectMatchData(state),
    currentMatchId: selectCurrentMatchId(state),
  };
};
const mapDispatchToProps = (dispatch: (payload: any) => void) => ({
  getCurrentMatchDetailDispatch: () => dispatch(getCurrentMatchDetailsAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedMatchResult);
