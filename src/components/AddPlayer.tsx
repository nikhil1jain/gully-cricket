import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Dropdown from "./Dropdown";
import ButtonUI from "../components/ButtonUI";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { InputAdornment, Input } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  mgt_24: {
    margin: theme.spacing(1),
    marginTop: "36px",
  },
}));

interface IAddPlayerProps {
  getPlayerDetails: (data: object) => void;
  id: string;
}
const AddPlayer = ({ getPlayerDetails, id }: IAddPlayerProps) => {
  const classes = useStyles();
  const [playerName, setPlayerName] = useState("");
  const [playerSkill, setPlayerSkill] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (playerName === "") {
      setIsButtonDisabled(true);
    }
  }, [playerName]);

  const onChangeInputHandler = (e: any) => {
    setPlayerName(e.target.value);
    setIsButtonDisabled(false);
  };

  const getPlayerSkill = (skill: string) => {
    setPlayerSkill(skill);
  };

  function addButtonHandler() {
    const data = {
      id,
      playerName,
      playerSkill,
    };
    getPlayerDetails(data);
    setPlayerName("");
  }

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel shrink htmlFor="demo-customized-textbox">
          Enter Player Name
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          value={playerName}
          onChange={onChangeInputHandler}
        />
      </FormControl>
      <Dropdown getPlayerSkill={getPlayerSkill} />
      <ButtonUI
        variantValue="outlined"
        styleName={classes.mgt_24}
        displayName={"Add"}
        onButtonClick={addButtonHandler}
        isDisabled={isButtonDisabled}
      />
    </div>
  );
};

export default AddPlayer;
