import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../../shared/components/Title";

const preventDefault = (event) => {
  event.preventDefault();
};

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const ListTable = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{props.title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {props.schema.map((column, index) => (
              <TableCell
                key={index}
                align={column.align ? column.align : "left"}
              >
                {column.text}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.id}>
              {props.schema.map((column, i) => (
                <TableCell key={i} align={column.align ? column.align : "left"}>
                  {row[column.id]}{" "}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {props.more && (
        <div className={classes.seeMore}>
          <Link color="primary" href="#" onClick={preventDefault}>
            See more orders
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

export default ListTable;
