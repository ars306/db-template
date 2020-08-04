import React from "react";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";

const ListHome = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <ChromeReaderModeIcon />
        </ListItemIcon>
        <ListItemText primary="Main 4" />
      </ListItem>
    </div>
  );
};

export default ListHome;
