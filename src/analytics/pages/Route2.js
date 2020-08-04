import React, { useEffect, useState } from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import TransitionModal from "../../shared/components/TModal";
import LoadingSpinner from "../../shared/components/LoadingSpinner";
import ListTable from "../components/ListTable";
import { useHttpClient } from "../../shared/hooks/http-hook";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
  },
  appBarSpacer: theme.mixins.toolbar,
  fixedHeight: {
    height: 390,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  spinner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 390,
  },
}));

// // Generate Order Data
// const createData = (id, date, name, shipTo, paymentMethod, amount) => {
//   return { id, date, name, shipTo, paymentMethod, amount };
// };

// const rows = [
//   createData(
//     0,
//     "16 Mar, 2019",
//     "Elvis Presley",
//     "Tupelo, MS",
//     "VISA ⠀•••• 3719",
//     312.44
//   ),
//   createData(
//     1,
//     "16 Mar, 2019",
//     "Paul McCartney",
//     "London, UK",
//     "VISA ⠀•••• 2574",
//     866.99
//   ),
//   createData(
//     2,
//     "16 Mar, 2019",
//     "Tom Scholz",
//     "Boston, MA",
//     "MC ⠀•••• 1253",
//     100.81
//   ),
//   createData(
//     3,
//     "16 Mar, 2019",
//     "Michael Jackson",
//     "Gary, IN",
//     "AMEX ⠀•••• 2000",
//     654.39
//   ),
//   createData(
//     4,
//     "15 Mar, 2019",
//     "Bruce Springsteen",
//     "Long Branch, NJ",
//     "VISA ⠀•••• 5919",
//     212.79
//   ),
// ];

const Route1 = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedDatasources, setLoadedDatasources] = useState();
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  // console.log(process.env.REACT_APP_BACKEND_URL);
  // if you are using procees.env , dont forget to restart the project

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/ds"
        );
        setLoadedDatasources(responseData.datasources);
      } catch (err) {}
    };
    fetchData();
  }, [sendRequest]);

  // console.log(loadedDatasources);

  const schema = [
    { id: "name", text: "Name" },
    { id: "purpose", text: "Purpose" },
    { id: "inputpath", text: "Input Path" },
    { id: "outputpath", text: "Output Path" },
    // { id: "createdby", text: "Created By" },
    // { id: "amount", text: "Sale Amount", align: "right" },
  ];

  return (
    <React.Fragment>
      {error && <TransitionModal error={error} onClear={clearError} />}
      {isLoading && (
        <div className={classes.spinner}>
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedDatasources && (
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item lg={12}>
              <Paper className={fixedHeightPaper}>
                <ListTable
                  title="React Table"
                  rows={loadedDatasources}
                  schema={schema}
                  more={false}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Route1;
