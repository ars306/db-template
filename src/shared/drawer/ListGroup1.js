import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
import AppsIcon from "@material-ui/icons/Apps";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,
}));

const ListCustomer = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Group 1" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            component={NavLink}
            to={"/grp1/itm1"}
            exact
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem
            button
            className={classes.nested}
            // component={NavLink}
            // to={"/grp1/itm2"}
            // exact
          >
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Item 3" />
          </ListItem>
        </List>
      </Collapse>
    </div>
  );
};

export default ListCustomer;
