import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import CustomForm from "../components/CustomForm";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
  },
  appBarSpacer: theme.mixins.toolbar,
  fixedHeight: {
    height: 700,
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
  //   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item lg={12}>
            {/* <Paper className={fixedHeightPaper}> */}
            <CustomForm />
            {/* </Paper> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Route1;
