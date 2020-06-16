import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import { List } from "@material-ui/core";
import ButtonUI from "../components/ButtonUI";
import PlayerListItem from "./PlayerListItem";
import Dropdown from "./Dropdown";

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

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

interface ITeamDetailsViewProps {}

const TeamDetailsView = ({}: ITeamDetailsViewProps) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <h1 className={classes.heading}>Enter Team Details</h1>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={6} className={classes.image1}>
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Enter Team Name"
                  label="Enter Team Name"
                  type="Enter Team Name"
                  id="teamName"
                />
              </div>
              <div>
                <div>
                  <FormControl className={classes.margin}>
                    <InputLabel shrink htmlFor="demo-customized-textbox">
                      Enter Player Name
                    </InputLabel>
                    <BootstrapInput id="demo-customized-textbox" />
                  </FormControl>
                  <Dropdown />
                  <ButtonUI
                    variantValue="outlined"
                    styleName={classes.mgt_24}
                    displayName={"Add"}
                  />
                </div>
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
              <div>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="Enter Team Name"
                  label="Enter Team Name"
                  type="Enter Team Name"
                  id="teamName"
                />
              </div>
              <div>
                <div>
                  <FormControl className={classes.margin}>
                    <InputLabel shrink htmlFor="demo-customized-textbox">
                      Enter Player Name
                    </InputLabel>
                    <BootstrapInput id="demo-customized-textbox" />
                  </FormControl>
                  <Dropdown />
                  <ButtonUI
                    variantValue="outlined"
                    styleName={classes.mgt_24}
                    displayName={"Add"}
                  />
                </div>
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
