import React, { useEffect } from "react";
import { MatchView } from "../components/index";
import { connect } from "react-redux";
import { selectCurrentMatchId, selectMatchData } from "../Selectors/index";
import {
  getCurrentMatchDetailsAction,
  updatedOverProgressDataAction,
  setUpdatedMatchDataAction,
} from "../Actions/index";

interface IConnectedMatchDashboardProps {
  getCurrentMatchDetailDispatch: () => void;
  currentMatchId: string;
  matchData: any;
  updatedOverProgressDataDispatch: (data: any) => void;
  history: object;
  setUpdateMatchDataDispatch: (data: any) => void;
}

const ConnectedMatchDashboard = ({
  getCurrentMatchDetailDispatch,
  currentMatchId,
  matchData,
  updatedOverProgressDataDispatch,
  history,
  setUpdateMatchDataDispatch,
}: IConnectedMatchDashboardProps) => {
  useEffect(() => {
    if (!currentMatchId) {
      getCurrentMatchDetailDispatch();
    }
  }, [currentMatchId, getCurrentMatchDetailDispatch]);

  function updatedOverProgressData(data: any) {
    updatedOverProgressDataDispatch(data);
  }
  function getMatchDetails(data: any) {
    setUpdateMatchDataDispatch(data);
  }

  return (
    <div>
      <MatchView
        matchData={matchData}
        updatedOverProgressData={updatedOverProgressData}
        history={history}
        getMatchDetails={getMatchDetails}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currentMatchId: selectCurrentMatchId(state),
    matchData: selectMatchData(state),
  };
};

const mapDispatchToProps = (dispatch: (payload: any) => void) => ({
  getCurrentMatchDetailDispatch: () => dispatch(getCurrentMatchDetailsAction()),
  updatedOverProgressDataDispatch: (payload: any) =>
    dispatch(updatedOverProgressDataAction(payload)),
  setUpdateMatchDataDispatch: (payload: any) =>
    dispatch(setUpdatedMatchDataAction(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedMatchDashboard);
