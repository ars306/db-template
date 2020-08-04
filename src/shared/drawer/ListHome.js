import React from "react";
import { NavLink } from "react-router-dom";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
import HomeIcon from "@material-ui/icons/Home";

const ListHome = () => {
  return (
    <div>
      <ListItem button component={NavLink} to={"/"} exact>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </div>
  );
};

export default ListHome;
