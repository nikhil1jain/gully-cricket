import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem } from "@material-ui/core";
import { IPlayerListItemProps } from "../Interfaces/index";

const useStyles = makeStyles(() => ({
  list_item: {
    backgroundColor: "#aad0d0",
    "&:nth-child(odd)": {
      backgroundColor: "#8fafaf",
    },
  },
  player_type: {
    marginLeft: "auto",
  },
}));

const PlayerListItem = ({ playerName, playerSkill }: IPlayerListItemProps) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ListItem
        component="div"
        classes={{
          root: classes.list_item,
        }}
      >
        {playerName}
        <span className={classes.player_type}> {playerSkill}</span>
      </ListItem>
    </React.Fragment>
  );
};

export default PlayerListItem;
