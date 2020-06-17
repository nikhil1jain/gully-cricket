import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
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

interface ITeamDetailsViewProps {}

const TeamDetailsView = ({}: ITeamDetailsViewProps) => {
  const classes = useStyles();
  const [teamNameA, setTeamNameA] = useState("");
  const [teamNameB, setTeamNameB] = useState("");
  const [playerListA, setPlayerListA] = useState([]);
  const [playerListB, setPlayerListB] = useState([]);

  const getTeamName = (data: any) => {
    console.log("data", data);
    if (data.id === "firstTeam") {
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
                <AddPlayer />
                <div>
                  <List component="div">
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
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
                <AddPlayer />
                <div>
                  <List component="div">
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
                    <PlayerListItem
                      playerName={"Virat Kohli"}
                      playerSkill={"Bat"}
                    />
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
      />
    </React.Fragment>
  );
};

export default TeamDetailsView;
