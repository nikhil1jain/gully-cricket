import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { List } from "@material-ui/core";
import ButtonUI from "../components/ButtonUI";
import PlayerListItem from "./PlayerListItem";
import TeamNameTextField from "./TeamNameTextField";
import AddPlayer from "./AddPlayer";

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
}

let firstTeamArray: any[] = [];
let secondTeamArray: any[] = [];

const TeamDetailsView = ({ getMatchDetails }: ITeamDetailsViewProps) => {
  const classes = useStyles();
  const [firstTeamName, setFirstTeamName] = useState("");
  const [secondTeamName, setSecondTeamName] = useState("");
  const [error, setError] = useState("");

  const [firstTeamPlayerList, setFirstTeamPlayerList] = useState({} as any);
  const [secondTeamPlayerList, setSecondTeamPlayerList] = useState({} as any);

  useEffect(() => {
    //do something
    console.log("useEffect");
  }, [firstTeamPlayerList, secondTeamPlayerList]);

  const getTeamName = (data: any) => {
    console.log("data", data);
    if (data.id === "firstTeam") {
      setFirstTeamName(data.teamName);
    }
    if (data.id === "secondTeam") {
      setSecondTeamName(data.teamName);
    }
  };

  function getPlayerDetails(data: any) {
    console.log("getPlayerDetails", data);
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
      console.log("secondTeamArray", secondTeamArray);
      console.log("secondTeamPlayerList", secondTeamPlayerList);
    }
  }

  const startMatchButtonHandler = () => {
    if (
      firstTeamArray.length === 11 &&
      secondTeamArray.length === 11 &&
      firstTeamName !== "" &&
      secondTeamName !== ""
    ) {
      const data = {
        [firstTeamName]: { firstTeamPlayerList },
        [secondTeamName]: { secondTeamPlayerList },
      };
      getMatchDetails(data);
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
        onButtonClick={startMatchButtonHandler}
      />
    </React.Fragment>
  );
};

export default TeamDetailsView;
