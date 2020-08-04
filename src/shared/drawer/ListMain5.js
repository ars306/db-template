import React from "react";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import InboxIcon from "@material-ui/icons/MoveToInbox";

const ListHome = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Main 5" />
      </ListItem>
    </div>
  );
};

export default ListHome;
