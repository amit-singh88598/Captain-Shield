import React from "react";
import SearchBar from "../Components/searchBar";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { NotificationsActive } from "@material-ui/icons";
import Setting from "../Components/setting";
import Notification from "../Components/notification";
import { Router, useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      marginLeft: 20,
      fontSize: "1.8em",
      cursor: "pointer",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <a
            onClick={() => router.push("/vendor/dashboard")}
            className={classes.title}
            variant="h5"
          >
            Captain Shield
          </a>
          <SearchBar />
          <div style={{ display: "flex" }}>
            <Notification style={{ margin: 5 }} />
            <Setting />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
