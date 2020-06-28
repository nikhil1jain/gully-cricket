import React from "react";
import { TeamDetailsView } from "../components/index";
import { connect } from "react-redux";
import { setMatchDataAction } from "../Actions/index";

interface IConnectedLandingPageProps {
  setMatchDataDispatch: (data: object) => void;
  history: object;
}

const ConnectedLandingPage = ({
  setMatchDataDispatch,
  history,
}: IConnectedLandingPageProps) => {
  function getMatchDetails(data: any) {
    setMatchDataDispatch(data);
  }

  return (
    <div>
      <TeamDetailsView getMatchDetails={getMatchDetails} history={history} />
    </div>
  );
};

const mapDispatchToProps = (dispatch: (payload: any) => void) => ({
  setMatchDataDispatch: (payload: object) =>
    dispatch(setMatchDataAction(payload)),
});

export default connect(null, mapDispatchToProps)(ConnectedLandingPage);
