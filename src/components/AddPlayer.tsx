import React, { useState, useEffect } from "react";
import { ButtonUI, Dropdown } from "../components/index";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputAdornment,
  Input,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { IAddPlayerProps } from "../Interfaces/index";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  mgt_24: {
    margin: theme.spacing(1),
    marginTop: "36px",
  },
}));

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

  function onAddButtonHandler() {
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
        onButtonClick={onAddButtonHandler}
        isDisabled={isButtonDisabled}
      />
    </div>
  );
};

export default AddPlayer;
