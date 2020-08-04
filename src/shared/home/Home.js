import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import Route1 from "../../analytics/pages/Route1";
import Route2 from "../../analytics/pages/Route2";
import Route3 from "../../analytics/pages/Route3";
import LeftDrawer from "../drawer/LeftDrawer";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    padding: theme.spacing(2),
    paddingTop: theme.spacing(10),
  },
  appBarSpacer: theme.mixins.toolbar,
}));

const Landing = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerClick = () => {
    setOpen(!open);
    // console.log(open);
  };
  let routes;

  routes = (
    <Switch>
      <Route path="/" exact>
        <Route1 />
      </Route>
      <Route path="/grp1/itm1" exact>
        <Route2 />
      </Route>
      <Route path="/signup" exact>
        <Route3 />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Header onClick={handleDrawerClick} />
        {open && <LeftDrawer />}
        <main className={classes.content}>
          <Breadcrumb />
          {routes}
        </main>
      </div>
    </Router>
  );
};

export default Landing;
