import React from "react";
import { TextField } from "@material-ui/core";

interface ITeamNameTextFieldProps {
  getTeamName: (data: object) => void;
  id: string;
}
const TeamNameTextField = ({ getTeamName, id }: ITeamNameTextFieldProps) => {
  const teamNameInputHandler = (e: any) => {
    const data = { id: id, teamName: e.target.value };

    getTeamName(data);
  };

  return (
    <div>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="Enter Team Name"
        label="Enter Team Name"
        type="Enter Team Name"
        id={id}
        onChange={teamNameInputHandler}
      />
    </div>
  );
};

export default TeamNameTextField;
