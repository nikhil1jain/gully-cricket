export function getBattingLineUp(playerList: any) {
  let battingLineUp = [];
  let sorted = playerList.sort((a: any, b: any) => {
    if (a.playerSkill === "Bowl" && b.playerSkill === "Bat") return 1;
    if (a.playerSkill === "Bat" && b.playerSkill === "Bat") return 0;
    if (a.playerSkill === "Bat" && b.playerSkill === "Bowl") return -1;
    return null;
  });
  for (var i = 0; i < sorted.length; i++) {
    const playerAttr = {
      strike: false,
      out: false,
      runs: 0,
      ballsPlayed: 0,
    };
    let updatedObj = { ...playerList[i], ...playerAttr };

    battingLineUp.push(updatedObj);
  }

  return battingLineUp;
}

export function getBowlingLineUp(playerList: any) {
  let bowlingLineUp = [];

  for (var i = 0; i < playerList.length; i++) {
    if (playerList[i].playerSkill === "Bowl") {
      const playerAttr = {
        overs: 0,
        runsConceded: 0,
        wickets: 0,
      };
      let updatedObj = { ...playerList[i], ...playerAttr };

      bowlingLineUp.push(updatedObj);
    }
  }
  return bowlingLineUp;
}

export function getBatsmanOnPitch(playerList: any) {
  let battingLineUp = [];
  let sorted = playerList.sort((a: any, b: any) => {
    if (a.playerSkill === "Bowl" && b.playerSkill === "Bat") return 1;
    if (a.playerSkill === "Bat" && b.playerSkill === "Bat") return 0;
    if (a.playerSkill === "Bat" && b.playerSkill === "Bowl") return -1;
    return null;
  });
  for (var i = 0; i < sorted.length; i++) {
    const playerAttr = {
      strike: false,
      out: false,
      runs: 0,
      ballsPlayed: 0,
      oversPlayed: 0,
    };
    let updatedObj = { ...playerList[i], ...playerAttr };

    battingLineUp.push(updatedObj);
  }

  return [{ ...battingLineUp[0], strike: true }, battingLineUp[1]];
}

export function getCurrentBowler(playerList: any) {
  let bowlingLineUp = [];

  for (var i = 0; i < playerList.length; i++) {
    if (playerList[i].playerSkill === "Bowl") {
      const playerAttr = {
        overs: 0,
        runsConceded: 0,
        wickets: 0,
        balls: 0,
      };
      let updatedObj = { ...playerList[i], ...playerAttr };

      bowlingLineUp.push(updatedObj);
    }
  }
  return bowlingLineUp[0];
}

function getUpdatedBatsmanOnPitch(
  batsmanOnPitchArr: any,
  balls: any,
  runs: any
) {
  let batsmanOnfieldArr = [];

  if (runs === "1" || runs === "3" || runs === "5") {
    let strike = batsmanOnPitchArr.find(
      (player: any) => player.strike === true
    );
    let nonStrike = batsmanOnPitchArr.find(
      (player: any) => player.strike === false
    );
    strike = {
      ...strike,
      strike: false,
      runs: +strike.runs + +runs,
      ballsPlayed: strike.ballsPlayed + 1,
    };
    batsmanOnfieldArr.push(strike);

    nonStrike = {
      ...nonStrike,
      strike: true,
    };
    batsmanOnfieldArr.push(nonStrike);
  } else if (runs === "0" || runs === "2" || runs === "4" || runs === "6") {
    let strike = batsmanOnPitchArr.find(
      (player: any) => player.strike === true
    );
    let nonStrike = batsmanOnPitchArr.find(
      (player: any) => player.strike === false
    );
    strike = {
      ...strike,
      runs: +strike.runs + +runs,
      ballsPlayed: strike.ballsPlayed + 1,
    };

    batsmanOnfieldArr.push(strike, nonStrike);
  } else if (runs === "Nb" || runs === "Wd") {
    let strike = batsmanOnPitchArr.find(
      (player: any) => player.strike === true
    );
    let nonStrike = batsmanOnPitchArr.find(
      (player: any) => player.strike === false
    );
    strike = {
      ...strike,
      runs: +strike.runs + 1,
    };

    batsmanOnfieldArr.push(strike, nonStrike);
  } else if (runs === "Wk") {
    let strike = batsmanOnPitchArr.find(
      (player: any) => player.strike === true
    );
    let nonStrike = batsmanOnPitchArr.find(
      (player: any) => player.strike === false
    );
    strike = {
      ...strike,
      out: true,
      strike: false,
    };
    batsmanOnfieldArr.push(strike, nonStrike);
  } else {
    batsmanOnfieldArr = batsmanOnPitchArr;
  }
  return batsmanOnfieldArr;
}

function removeWicket(batsmanOnPitch: any, battingLineUp: any) {
  let arr = [];
  const batsmanOut = batsmanOnPitch.find((player: any) => player.out === true);
  const batsmanNotOut = batsmanOnPitch.find(
    (player: any) => player.out === false
  );

  let batsmanToBeAdded = battingLineUp.filter(
    (player: any) =>
      player.id !== batsmanOut.id && player.id !== batsmanNotOut.id
  );

  batsmanToBeAdded[0] = {
    ...batsmanToBeAdded[0],
    strike: true,
  };

  arr.push(batsmanNotOut, batsmanToBeAdded[0]);
  return arr;
}

function getNextBowler(currentBowler: any, bowlingLineUp: any) {
  let bowler = currentBowler;
  let indexValue = 0;
  const currentBowlerIndex = bowlingLineUp.findIndex(
    (player: any) => player.id === bowler.id
  );
  if (currentBowlerIndex !== bowlingLineUp.length - 1) {
    indexValue += 1;
  }
  bowler = bowlingLineUp[indexValue];

  return bowler;
}

function getUpdatedCurrentBowler(
  balls: any,
  bowlingLineUp: any,
  currentBowler: any,
  runs: any
) {
  let bowler: { id: any };
  if (runs === "Wd" || runs === "Nb") {
    bowler = {
      ...currentBowler,
      overs: balls === 6 ? currentBowler.overs + 1 : currentBowler.overs,
      runsConceded: +currentBowler.runsConceded + 1,
      wickets: currentBowler.wickets,
      balls: balls === 6 ? 0 : balls,
    };
  } else if (runs === "Wk") {
    bowler = {
      ...currentBowler,
      overs: balls === 6 ? currentBowler.overs + 1 : currentBowler.overs,
      runsConceded: currentBowler.runsConceded,
      wickets: +currentBowler.wickets + 1,
      balls: balls === 6 ? 0 : balls,
    };
  } else {
    bowler = {
      ...currentBowler,
      overs: balls === 6 ? currentBowler.overs + 1 : currentBowler.overs,
      runsConceded: +currentBowler.runsConceded + parseInt(runs),
      wickets: +currentBowler.wickets,
      balls: balls === 6 ? 0 : balls,
    };
  }

  return bowler;
}

export function getUpdatedValues(
  currentRuns: any,
  ballCount: any,
  matchData: any,
  currentInning: any,
  bowler: any
) {
  let val;

  const currentBatsman = getUpdatedBatsmanOnPitch(
    matchData[currentInning].batsmanOnPitch,
    ballCount,
    currentRuns
  );
  let currentBowler = getUpdatedCurrentBowler(
    ballCount,
    matchData[currentInning].bowlingLineUp,
    matchData[currentInning].currentBowler,
    currentRuns
  );

  if (ballCount === 0 && +matchData[currentInning].overs !== 0) {
    currentBowler = getNextBowler(
      matchData[currentInning].currentBowler,
      matchData[currentInning].bowlingLineUp
    );
  }

  let updateBowlingLineUp = matchData[currentInning].bowlingLineUp.filter(
    (player: any) => player.id !== currentBowler.id
  );
  updateBowlingLineUp.push(currentBowler);
  const oldRuns = matchData[currentInning].score;

  const updatedOvers =
    ballCount === 6
      ? matchData[currentInning].overs + 1
      : matchData[currentInning].overs;

  switch (currentRuns) {
    case "0":
      val = {
        ...matchData[currentInning],
        score: +oldRuns,
        balls: ballCount,
        overs: updatedOvers,
        currentBowler: currentBowler,
        batsmanOnPitch: currentBatsman,
        bowlingLineUp: updateBowlingLineUp,
        ballsRemaining: matchData[currentInning].ballsRemaining - 1,
      };
      break;
    case "1":
      val = {
        ...matchData[currentInning],
        score: +oldRuns + 1,
        balls: ballCount,
        overs: updatedOvers,
        currentBowler: currentBowler,
        batsmanOnPitch: currentBatsman,
        bowlingLineUp: updateBowlingLineUp,
        ballsRemaining: matchData[currentInning].ballsRemaining - 1,
      };
      break;
    case "2":
      val = {
        ...matchData[currentInning],
        score: +oldRuns + 2,
        balls: ballCount,
        overs: updatedOvers,
        currentBowler: currentBowler,
        batsmanOnPitch: currentBatsman,
        bowlingLineUp: updateBowlingLineUp,
        ballsRemaining: matchData[currentInning].ballsRemaining - 1,
      };

      break;
    case "3":
      val = {
        ...matchData[currentInning],
        score: +oldRuns + 3,
        balls: ballCount,
        overs: updatedOvers,
        currentBowler: currentBowler,
        batsmanOnPitch: currentBatsman,
        bowlingLineUp: updateBowlingLineUp,
        ballsRemaining: matchData[currentInning].ballsRemaining - 1,
      };
      break;
    case "4":
      val = {
        ...matchData[currentInning],
        score: +oldRuns + 4,
        balls: ballCount,
        overs: updatedOvers,
        currentBowler: currentBowler,
        batsmanOnPitch: currentBatsman,
        bowlingLineUp: updateBowlingLineUp,
        ballsRemaining: matchData[currentInning].ballsRemaining - 1,
      };
      break;
    case "5":
      val = {
        ...matchData[currentInning],
        score: +oldRuns + 5,
        balls: ballCount,
        overs: updatedOvers,
        currentBowler: currentBowler,
        batsmanOnPitch: currentBatsman,
        bowlingLineUp: updateBowlingLineUp,
        ballsRemaining: matchData[currentInning].ballsRemaining - 1,
      };
      break;
    case "6":
      val = {
        ...matchData[currentInning],
        score: +oldRuns + 6,
        balls: ballCount,
        overs: updatedOvers,
        currentBowler: currentBowler,
        batsmanOnPitch: currentBatsman,
        bowlingLineUp: updateBowlingLineUp,
        ballsRemaining: matchData[currentInning].ballsRemaining - 1,
      };
      break;
    case "Wk":
      const wicket = currentBatsman.find((player: any) => player.out === true);
      let updateBattingLineUp = matchData[currentInning].battingLineUp.filter(
        (player: any) => player.id !== wicket.id
      );
      updateBattingLineUp.push(wicket);

      val = {
        ...matchData[currentInning],
        score: +oldRuns,
        balls: ballCount,
        overs: updatedOvers,
        wickets: matchData[currentInning].wickets + 1,
        ballsRemaining: matchData[currentInning].ballsRemaining - 1,
        currentBowler: currentBowler,
        batsmanOnPitch: removeWicket(
          currentBatsman,
          matchData[currentInning].battingLineUp
        ),
        battingLineUp: updateBattingLineUp,
        bowlingLineUp: updateBowlingLineUp,
      };
      break;
    case "Wd":
      val = {
        ...matchData[currentInning],
        score: +oldRuns + 1,
        balls: ballCount,
        overs: updatedOvers,
        currentBowler: currentBowler,
        batsmanOnPitch: currentBatsman,
        bowlingLineUp: updateBowlingLineUp,
      };
      break;
    case "Nb":
      val = {
        ...matchData[currentInning],
        score: +oldRuns + 1,
        balls: ballCount,
        overs: updatedOvers,
        currentBowler: currentBowler,
        batsmanOnPitch: currentBatsman,
        bowlingLineUp: updateBowlingLineUp,
      };
      break;

    default:
      val = {
        ...matchData[currentInning],
      };
  }
  return val;
}
