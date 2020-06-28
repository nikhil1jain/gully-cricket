import React, { useState } from "react";
import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core/styles";
import { IMatchResultViewProps } from "../Interfaces/index";

import {
  BattingScoreCard,
  BowlingScoreCard,
  ButtonUI,
} from "../components/index";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "0 auto",
    display: "block",
    padding: "10px",
    marginTop: "10px",
    marginBottom: "20px",
  },
  position: {
    display: "flex",
  },
}));
const MatchResultView = ({ matchData }: IMatchResultViewProps) => {
  const classes = useStyles();
  console.log("MatchResultView", matchData);
  const [isBattingScoreCard, setIsBattingScoreCard] = useState(false);
  const [isBowlingScoreCard, setIsBowlingScoreCard] = useState(false);

  const Container = styled.div`
    background-color: black;
    background-image: url("/cricketBackground.jpg");
    color: white;
    background-size: cover;
  `;

  function onBattingScoreCardClickHandler() {
    setIsBattingScoreCard(!isBattingScoreCard);
    setIsBowlingScoreCard(false);
  }
  function onBowlingScoreCardClickHandler() {
    setIsBowlingScoreCard(!isBowlingScoreCard);
    setIsBattingScoreCard(false);
  }

  function getMatchWinner() {
    let winner;

    if (
      (matchData.secondInning && matchData.secondInning.score) -
        (matchData.firstInning && matchData.firstInning.score) >
      0
    ) {
      winner = matchData.teams && matchData.teams.secondTeam.teamName;
    } else {
      winner = matchData.teams && matchData.teams.firstTeam.teamName;
    }

    return winner;
  }
  return (
    <Container>
      <h1>Match Won By... {matchData && getMatchWinner()}</h1>
      <div className={classes.position}>
        <ButtonUI
          styleName={classes.button}
          variantValue="contained"
          displayName={"Batting Score Card"}
          onButtonClick={onBattingScoreCardClickHandler}
        />
        <ButtonUI
          styleName={classes.button}
          variantValue="contained"
          displayName={"Bowling Score Card"}
          onButtonClick={onBowlingScoreCardClickHandler}
        />
      </div>

      {isBattingScoreCard ? <BattingScoreCard matchData={matchData} /> : null}
      {isBowlingScoreCard ? <BowlingScoreCard matchData={matchData} /> : null}
    </Container>
  );
};

export default MatchResultView;
