import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";

import KPICard from "../components/KPICard";
import CompositeChart from "../components/CompositeChart";
import LineChart from "../components/LineChart";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    // marginLeft: "0.5rem",
  },
  appBarSpacer: theme.mixins.toolbar,
  fixedHeight: {
    height: 340,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

const Route1 = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item lg={3}>
            <Paper>
              <KPICard />
            </Paper>
          </Grid>
          <Grid item lg={3}>
            <Paper>
              <KPICard />
            </Paper>
          </Grid>
          <Grid item lg={3}>
            <Paper>
              <KPICard />
            </Paper>
          </Grid>
          <Grid item lg={3}>
            <Paper>
              <KPICard />
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <Paper className={fixedHeightPaper}>
              <CompositeChart />
            </Paper>
          </Grid>
          <Grid item lg={6}>
            <Paper className={fixedHeightPaper}>
              <LineChart />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Route1;
