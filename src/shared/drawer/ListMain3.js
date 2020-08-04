import React from "react";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
import CallSplitIcon from "@material-ui/icons/CallSplit";

const ListHome = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <CallSplitIcon />
        </ListItemIcon>
        <ListItemText primary="Main 3" />
      </ListItem>
    </div>
  );
};

export default ListHome;
