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
interface IDropdownProps {
  getPlayerSkill: (skill: string) => void;
}

const Dropdown = ({ getPlayerSkill }: IDropdownProps) => {
  const classes = useStyles();
  const [skill, setSkill] = React.useState("Bat");

  useEffect(() => {
    getPlayerSkill(skill);
  }, [skill]);

  const handleChange = (event: any) => {
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
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={"Bat"}>Bat</MenuItem>
          <MenuItem value={"Bowl"}>Bowl</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

export default Dropdown;
