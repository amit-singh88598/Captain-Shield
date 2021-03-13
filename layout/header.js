import React from "react";
import SearchBar from "../Components/searchBar";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { NotificationsActive, Settings } from "@material-ui/icons";

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
          <Typography className={classes.title} variant="h5" noWrap>
            Captain Shield
          </Typography>
          <SearchBar />
          <div>
            <NotificationsActive style={{ margin: 10 }} />
            <Settings style={{ margin: 10 }} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
