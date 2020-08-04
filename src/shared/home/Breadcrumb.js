import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Route, Link as RouterLink } from "react-router-dom";

const breadcrumbNameMap = {
  "/grp1": "Group 1",
  "/grp1/itm1": "Item 1",
};

const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

const SimpleBreadcrumbs = () => {
  return (
    <Route>
      {({ location }) => {
        const pathnames = location.pathname.split("/").filter((x) => x);

        return (
          <Breadcrumbs aria-label="breadcrumb">
            <LinkRouter color="inherit" to="/">
              Home
            </LinkRouter>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography color="textPrimary" key={to}>
                  {breadcrumbNameMap[to]}
                </Typography>
              ) : (
                <LinkRouter color="inherit" to={to} key={to}>
                  {breadcrumbNameMap[to]}
                </LinkRouter>
              );
            })}
          </Breadcrumbs>
        );
      }}
    </Route>
  );
};

export default SimpleBreadcrumbs;
