import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import styled from "@emotion/styled";
import { IBowlingScoreCardProps } from "../Interfaces/index";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const BowlingScoreCard = ({ matchData }: IBowlingScoreCardProps) => {
  const classes = useStyles();
  const Position = styled.div`
    display: flex,
    justify-content: space-between;
  `;

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Position>
          <h1>First Inning - {matchData.teams.firstTeam.teamName}</h1>
          <h2>Total Runs - {matchData.firstInning.score}</h2>
          <h2>Wickets - {matchData.firstInning.wickets}</h2>
        </Position>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Player Name</TableCell>
              <TableCell align="right">Player Skill</TableCell>
              <TableCell align="right">Wickets</TableCell>
              <TableCell align="right">Runs Conceded</TableCell>
              <TableCell align="right">Balls</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matchData &&
              matchData.firstInning.bowlingLineUp.map((player: any) => (
                <TableRow key={player.name}>
                  <TableCell component="th" scope="row">
                    {player.playerName}
                  </TableCell>
                  <TableCell align="right">{player.playerSkill}</TableCell>
                  <TableCell align="right">{player.wickets}</TableCell>
                  <TableCell align="right">{player.runsConceded}</TableCell>
                  <TableCell align="right">{`${player.overs}.${player.balls}`}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Position>
          <h1>Second Inning - {matchData.teams.secondTeam.teamName}</h1>
          <h2>Total Runs - {matchData.secondInning.score}</h2>
          <h2>Wickets - {matchData.secondInning.wickets}</h2>
        </Position>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>PLAYER NAME</TableCell>
              <TableCell align="right">PLAYER SKILL</TableCell>
              <TableCell align="right">WICKETS</TableCell>
              <TableCell align="right">RUNS CONCEDED</TableCell>
              <TableCell align="right">OVERS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matchData &&
              matchData.secondInning.bowlingLineUp.map((player: any) => (
                <TableRow key={player.name}>
                  <TableCell component="th" scope="row">
                    {player.playerName}
                  </TableCell>
                  <TableCell align="right">{player.playerSkill}</TableCell>
                  <TableCell align="right">{player.wickets}</TableCell>
                  <TableCell align="right">{player.runsConceded}</TableCell>
                  <TableCell align="right">{`${player.overs}.${player.balls}`}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default BowlingScoreCard;
