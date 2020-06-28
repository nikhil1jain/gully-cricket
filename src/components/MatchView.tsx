import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "@emotion/styled";
import { ButtonUI } from "../components/index";
import { IMatchViewProps } from "../Interfaces/index";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "0 auto",
    display: "block",
    padding: "10px",
    marginTop: "10px",
    marginBottom: "20px",
  },
}));
let ballCounter = 0;
let interval: any;

const MatchView = ({
  matchData,
  updatedOverProgressData,
  history,
  getMatchDetails,
}: IMatchViewProps) => {
  const classes = useStyles();
  console.log("matchData", matchData);

  const Container = styled.div`
    background-color: black;
    background-image: url("/cricketBackground.jpg");
    color: white;
    background-size: cover;
  `;
  const Position = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    font-family: "Roboto Condensed", sans-serif;
    margin-right: 20px;
    margin-left: 20px;
}
  `;
  const NumberCircle = styled.div`
    border-radius: 50%;
    width: 36px;
    height: 36px;
    background: black;
    border: 2px solid white;
    color: green;
    text-align: center;
    font: 32px Arial, sans-serif;
    display: inline-block;
    margin-right: 15px;
    margin-top: 25px;
    padding: 10px;
  `;
  const StatContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const [currentBallOutcome, setCurrentBallOutcome] = useState([] as any);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false as boolean);
  const [currentInning, setCurrentInning] = useState("firstInning");
  const currentBowler =
    matchData &&
    matchData[currentInning] &&
    matchData[currentInning].currentBowler;

  useEffect(() => {
    if (ballCounter === 6) {
      console.log("Ball COunter", ballCounter);
      clearInterval(interval);
      setIsButtonDisabled(false);
    }

    if (
      matchData &&
      matchData.currentInning === "firstInning" &&
      (matchData[currentInning].battingLineUp.length - 1 ===
        matchData[currentInning].wickets ||
        matchData[currentInning].ballsRemaining === 0)
    ) {
      setCurrentInning("secondInning");
      clearInterval(interval);
      setIsButtonDisabled(false);
      getMatchDetails(matchData);
    } else if (
      matchData &&
      matchData.currentInning === "secondInning" &&
      (matchData[currentInning].battingLineUp.length - 1 ===
        matchData[currentInning].wickets ||
        matchData[currentInning].ballsRemaining === 0 ||
        matchData.secondInning.score - matchData.firstInning.score > 0)
    ) {
      clearInterval(interval);
      getMatchDetails(matchData);
      console.log("Match Won");
      history.push("/matchResult");
    }
  }, [currentInning, matchData, history, getMatchDetails]);

  function overProgress() {
    if (ballCounter < 6) {
      const possibleOutcomesArray = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "Wk",
        "Wd",
        "Nb",
      ];
      const randomOutcome =
        possibleOutcomesArray[
          Math.floor(Math.random() * possibleOutcomesArray.length)
        ];

      if (randomOutcome !== "Wd" && randomOutcome !== "Nb") {
        ballCounter = ballCounter + 1;
      }
      setCurrentBallOutcome((prevState: any) =>
        prevState.concat(randomOutcome)
      );

      updatedOverProgressData({
        randomOutcome,
        ballCounter,
        currentInning,
        currentBowler,
      });
    }
  }

  function getCurrentBallOutcomeUI(currentBall: string, index: number) {
    if (currentBall === "Wk") {
      return (
        <NumberCircle
          style={{ color: "white", backgroundColor: "red" }}
          key={index}
        >
          W
        </NumberCircle>
      );
    } else if (
      currentBall === "Wd" ||
      currentBall === "NoBall" ||
      currentBall === "0"
    ) {
      return (
        <NumberCircle
          style={{ color: "black", backgroundColor: "white" }}
          key={index}
        >
          {currentBall}
        </NumberCircle>
      );
    } else {
      return <NumberCircle key={index}>{currentBall}</NumberCircle>;
    }
  }

  function onStartOverButtonHandler() {
    // if (
    //     matchData[currentInning].wickets ===
    //     matchData[currentInning].battingLineUp.length - 1
    //   ) {
    //     getMatchDetails(matchData);
    //   } else if (ballCounter === 6) {
    //     console.log("Ball COunter", ballCounter);
    //     getMatchDetails(matchData);
    //   }
    if (ballCounter === 6) {
      getMatchDetails(matchData);
    }

    ballCounter = 0;
    setCurrentBallOutcome([]);
    setIsButtonDisabled(true);

    interval = setInterval(overProgress, 3000);
  }

  return (
    <Container>
      <Position
        style={
          matchData.currentInning === "firstInning"
            ? { color: "yellow" }
            : { color: "white" }
        }
      >
        <h3>
          {matchData && matchData.teams && matchData.teams.firstTeam.teamName}
        </h3>
        <p>
          {matchData && matchData.firstInning && matchData.firstInning.score}/
          {matchData && matchData.firstInning && matchData.firstInning.wickets}
        </p>
      </Position>
      <Position
        style={
          matchData.currentInning === "secondInning"
            ? { color: "yellow" }
            : { color: "white" }
        }
      >
        <h3>
          {matchData && matchData.teams && matchData.teams.secondTeam.teamName}
        </h3>
        <p>
          {matchData && matchData.secondInning && matchData.secondInning.score}/
          {matchData &&
            matchData.secondInning &&
            matchData.secondInning.wickets}
        </p>
      </Position>
      <div>
        <div>
          <h2 style={{ display: "inline" }}>
            Overs{" "}
            {matchData && matchData[currentInning]
              ? matchData[currentInning].balls === 6
                ? matchData[currentInning].overs
                : `${matchData[currentInning].overs}.${matchData[currentInning].balls} / ${matchData[currentInning].totalOver}`
              : null}
          </h2>
          <h3>
            Balls remaining{" "}
            {matchData &&
              matchData[currentInning] &&
              matchData[currentInning].ballsRemaining}
          </h3>
          {/* <h2>
            NRR:{" "}
            {matchData &&
              matchData[currentInning] &&
              matchData[currentInning].netRunrate}
          </h2> */}
        </div>
        {currentBallOutcome.map((ball: string, index: number) =>
          getCurrentBallOutcomeUI(ball, index)
        )}
      </div>
      <ButtonUI
        styleName={classes.button}
        variantValue="contained"
        displayName={"Start Over"}
        onButtonClick={onStartOverButtonHandler}
        isDisabled={isButtonDisabled}
      />

      <StatContainer>
        <Position style={{ display: "flex" }}>
          {matchData &&
            matchData[currentInning] &&
            matchData[currentInning].batsmanOnPitch.map((batsman: any) => (
              <div style={{ color: "yellow", margin: "30px" }} key={batsman.id}>
                <p>
                  <strong>{batsman && batsman.playerName}</strong>
                  {batsman && batsman.strike ? "*" : null}
                </p>
                <p>{batsman && batsman.runs}</p>
                <p>({batsman && batsman.ballsPlayed})</p>
              </div>
            ))}
        </Position>
        <Position style={{ display: "inline-table", margin: "30px" }}>
          {matchData &&
            matchData[currentInning] &&
            matchData[currentInning].currentBowler && (
              <React.Fragment>
                <p>
                  <strong>
                    {matchData[currentInning].currentBowler.playerName}
                  </strong>
                </p>
                <p>
                  {" "}
                  {matchData[currentInning].currentBowler.runsConceded}/
                  {matchData[currentInning].currentBowler.wickets}
                </p>
                <p>
                  ({matchData[currentInning].currentBowler.overs}.
                  {matchData[currentInning].currentBowler.balls})
                </p>
              </React.Fragment>
            )}
        </Position>
      </StatContainer>
    </Container>
  );
};

export default MatchView;
