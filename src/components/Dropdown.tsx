import React, { useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  InputBase,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

interface IDropdownProps {
  getPlayerSkill: (skill: string) => void;
}

const Dropdown = ({ getPlayerSkill }: IDropdownProps) => {
  const classes = useStyles();
  const [skill, setSkill] = React.useState("Bat");

  useEffect(() => {
    getPlayerSkill(skill);
  }, [getPlayerSkill, skill]);

  const onChangeHandler = (event: any) => {
    setSkill(event.target.value);
  };
  return (
    <React.Fragment>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label" shrink>
          Bat/Bowl
        </InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={skill}
          onChange={onChangeHandler}
        >
          <MenuItem value={"Bat"}>Bat</MenuItem>
          <MenuItem value={"Bowl"}>Bowl</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

export default Dropdown;
