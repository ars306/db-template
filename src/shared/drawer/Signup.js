import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    paddingTop: theme.spacing(3),
  },
}));

const ListHome = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.content} />
      <ListItem button component={NavLink} to={"/signup"}>
        <ListItemIcon>
          <LockOpenIcon />
        </ListItemIcon>
        <ListItemText primary="Signup" />
      </ListItem>
    </div>
  );
};

export default ListHome;
