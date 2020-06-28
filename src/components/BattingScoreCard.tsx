import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styled from "@emotion/styled";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface IBattingScoreCardProps {
  matchData: any;
}

const BattingScoreCard = ({ matchData }: IBattingScoreCardProps) => {
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
              <TableCell>PLAYER NAME</TableCell>
              <TableCell align="right">PLAYER SKILL</TableCell>
              <TableCell align="right">STATUS</TableCell>
              <TableCell align="right">RUNS SCORED</TableCell>
              <TableCell align="right">OVERS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matchData &&
              matchData.firstInning.battingLineUp.map((player: any) => (
                <TableRow key={player.playerName}>
                  <TableCell component="th" scope="row">
                    {player.playerName}
                  </TableCell>
                  <TableCell align="right">{player.playerSkill}</TableCell>
                  <TableCell align="right">
                    {player.out === true ? "OUT" : "NOT OUT"}
                  </TableCell>
                  <TableCell align="right">{player.runs}</TableCell>
                  <TableCell align="right">{player.ballsPlayed}</TableCell>
                  {/* <TableCell align="right">{player.protein}</TableCell> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <h1>Second Inning - {matchData.teams.secondTeam.teamName}</h1>
        <h2>Total Runs - {matchData.secondInning.score}</h2>
        <h2>Wickets - {matchData.secondInning.wickets}</h2>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
              <TableCell align="right">Player Skill</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Runs Scored</TableCell>
              <TableCell align="right">Balls Played</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matchData &&
              matchData.secondInning.battingLineUp.map((player: any) => (
                <TableRow key={player.playerName}>
                  <TableCell component="th" scope="row">
                    {player.playerName}
                  </TableCell>
                  <TableCell align="right">{player.playerSkill}</TableCell>
                  <TableCell align="right">
                    {player.out === true ? "OUT" : "NOT OUT"}
                  </TableCell>
                  <TableCell align="right">{player.runs}</TableCell>
                  <TableCell align="right">{player.ballsPlayed}</TableCell>
                  {/* <TableCell align="right">{player.protein}</TableCell> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default BattingScoreCard;
