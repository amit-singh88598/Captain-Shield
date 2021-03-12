import React from "react";
import SearchBar from "../Components/searchBar";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      marginLeft: 20,
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Captain Shield
          </Typography>
          <SearchBar />
        </Toolbar>
      </AppBar>
    </div>
  );
}
