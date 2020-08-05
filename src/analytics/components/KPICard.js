import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 240,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          KPI text for info
        </Typography>
        <Typography variant="h5" component="h2">
          100.24
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          millions
        </Typography>
        <Typography variant="body2" component="p">
          some basis for determining
          <br />
          the KPI values
        </Typography>
      </CardContent>
    </Card>
  );
}
