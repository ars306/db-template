import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";

import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";

import ListProduct from "./ListGroup2";
import ListCustomer from "./ListGroup1";
import ListHome from "./ListHome";
import ListMain3 from "./ListMain3";
import ListMain4 from "./ListMain4";
import ListMain5 from "./ListMain5";
import Signup from "./Signup";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,
  spacer: { paddingTop: theme.spacing(5) },
}));

const LeftDrawer = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <div className={classes.spacer} />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader2"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader2">
              Analytics
            </ListSubheader>
          }
        >
          <ListHome />
          <ListCustomer />
          <ListProduct />
          <ListMain3 />
          <ListMain4 />
          <ListMain5 />
          <div className={classes.spacer} />
          <Divider />
          <Signup />
        </List>
      </div>
    </Drawer>
  );
};

export default LeftDrawer;
