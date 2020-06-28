import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, CssBaseline, Grid } from "@material-ui/core";
import {
  ButtonUI,
  PlayerListItem,
  TeamNameTextField,
  AddPlayer,
} from "../components/index";
import {
  getBattingLineUp,
  getBowlingLineUp,
  getBatsmanOnPitch,
  getCurrentBowler,
} from "../Utils/index";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "0 auto",
    display: "block",
    padding: "10px",
    marginTop: "10px",
    marginBottom: "20px",
  },
  margin: {
    margin: theme.spacing(1),
  },
  mgt_24: {
    margin: theme.spacing(1),
    marginTop: "36px",
  },
  heading: {
    textAlign: "center",
  },
  root: {
    // height: "100vh",
  },
  image1: {
    backgroundColor: "#94b8b8",
  },
  image2: {
    backgroundColor: "#4e96bf",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface ITeamDetailsViewProps {
  getMatchDetails: (data: object) => void;
  history: any;
}

let firstTeamArray: any[] = [];
let secondTeamArray: any[] = [];

const TeamDetailsView = ({
  getMatchDetails,
  history,
}: ITeamDetailsViewProps) => {
  const classes = useStyles();
  const [firstTeamName, setFirstTeamName] = useState("");
  const [secondTeamName, setSecondTeamName] = useState("");
  const [error, setError] = useState("");

  const [firstTeamPlayerList, setFirstTeamPlayerList] = useState({} as any);
  const [secondTeamPlayerList, setSecondTeamPlayerList] = useState({} as any);

  const getTeamName = (data: any) => {
    if (data.id === "firstTeam") {
      setFirstTeamName(data.teamName);
    }
    if (data.id === "secondTeam") {
      setSecondTeamName(data.teamName);
    }
  };

  function getPlayerDetails(data: any) {
    const id = Date.now();
    if (data.id === "firstTeam") {
      let player = {
        id,
        playerName: data.playerName,
        playerSkill: data.playerSkill,
      };
      if (firstTeamArray.length < 11) {
        firstTeamArray.push(player);
        setFirstTeamPlayerList({
          firstTeamArray,
        });
      } else {
        setError("Error: Cannot add more players");
      }
    }
    if (data.id === "secondTeam") {
      const player = {
        id,
        playerName: data.playerName,
        playerSkill: data.playerSkill,
      };
      if (secondTeamArray.length < 11) {
        secondTeamArray.push(player);
        setSecondTeamPlayerList({
          secondTeamArray,
        });
      } else {
        setError("Error: Cannot add more players");
      }
    }
  }

  const onStartMatchButtonHandler = () => {
    if (
      firstTeamArray.length === 3 &&
      secondTeamArray.length === 3 &&
      firstTeamName !== "" &&
      secondTeamName !== ""
    ) {
      const teams: object = {
        firstTeam: {
          teamName: firstTeamName,
          playerList: firstTeamPlayerList.firstTeamArray,
        },
        secondTeam: {
          teamName: secondTeamName,
          playerList: secondTeamPlayerList.secondTeamArray,
        },
      };

      const firstInning = {
        score: 0,
        overs: 0.0, //10 overs
        balls: 0, //60 balls
        wickets: 0,
        netRunrate: 0,
        currentOver: 0,
        totalOver: 20,
        ballsRemaining: 120,
        currentBowler: getCurrentBowler(secondTeamPlayerList.secondTeamArray),
        batsmanOnPitch: getBatsmanOnPitch(firstTeamPlayerList.firstTeamArray),
        battingLineUp: getBattingLineUp(firstTeamPlayerList.firstTeamArray),
        bowlingLineUp: getBowlingLineUp(secondTeamPlayerList.secondTeamArray),
      };
      const secondInning = {
        score: 0,
        overs: 0.0, //10 overs
        balls: 0, //60 balls
        wickets: 0,
        netRunrate: 0,
        currentOver: 0,
        totalOver: 20,
        ballsRemaining: 120,
        currentBowler: getCurrentBowler(firstTeamPlayerList.firstTeamArray),
        batsmanOnPitch: getBatsmanOnPitch(secondTeamPlayerList.secondTeamArray),
        battingLineUp: getBattingLineUp(secondTeamPlayerList.secondTeamArray),
        bowlingLineUp: getBowlingLineUp(firstTeamPlayerList.firstTeamArray),
      };
      const data = {
        teams,
        firstInning,
        secondInning,
        currentInning: "firstInning",
      };

      getMatchDetails(data);
      history.push("/matchDashboard");
    }
  };

  return (
    <React.Fragment>
      <h1 className={classes.heading}>Enter Team Details</h1>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={6} className={classes.image1}>
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <TeamNameTextField id="firstTeam" getTeamName={getTeamName} />
              <div>
                {error ? error : null}
                <AddPlayer id="firstTeam" getPlayerDetails={getPlayerDetails} />
                <div>
                  <List component="div">
                    {firstTeamPlayerList &&
                      firstTeamPlayerList.firstTeamArray &&
                      Object.values(
                        firstTeamPlayerList.firstTeamArray
                      ).map((player: any) => (
                        <PlayerListItem
                          key={player.id}
                          playerName={player.playerName}
                          playerSkill={player.playerSkill}
                        />
                      ))}
                  </List>
                </div>
              </div>
            </form>
          </div>
        </Grid>

        <Grid item xs={6} className={classes.image2}>
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <TeamNameTextField id="secondTeam" getTeamName={getTeamName} />
              <div>
                <AddPlayer
                  id="secondTeam"
                  getPlayerDetails={getPlayerDetails}
                />
                <div>
                  <List component="div">
                    {secondTeamPlayerList &&
                      secondTeamPlayerList.secondTeamArray &&
                      Object.values(
                        secondTeamPlayerList.secondTeamArray
                      ).map((player: any) => (
                        <PlayerListItem
                          key={player.id}
                          playerName={player.playerName}
                          playerSkill={player.playerSkill}
                        />
                      ))}
                  </List>
                </div>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
      <ButtonUI
        variantValue="contained"
        styleName={classes.button}
        displayName={"Start Match"}
        onButtonClick={onStartMatchButtonHandler}
      />
    </React.Fragment>
  );
};

export default TeamDetailsView;
