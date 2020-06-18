import React from "react";
import TeamDetailsView from "../components/TeamDetailsView";
import { connect } from "react-redux";
import { setMatchDataAction } from "../Actions/index";
interface ILandingPageProps {
  setMatchDataDispatch: (data: object) => void;
}

const LandingPage = ({ setMatchDataDispatch }: ILandingPageProps) => {
  function getMatchDetails(data: any) {
    setMatchDataDispatch(data);
  }

  return (
    <div>
      <TeamDetailsView getMatchDetails={getMatchDetails} />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {};
// };

const mapDispatchToProps = (dispatch: (payload: any) => void) => ({
  setMatchDataDispatch: (payload: object) =>
    dispatch(setMatchDataAction(payload)),
});

export default connect(null, mapDispatchToProps)(LandingPage);
