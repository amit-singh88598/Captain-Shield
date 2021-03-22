import React from "react";
import SearchBar from "../Components/searchBar";
import { AppBar, Avatar, makeStyles, Toolbar } from "@material-ui/core";
import Setting from "../Components/setting";
import Notification from "../Components/notification";
import { useRouter } from "next/router";

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
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

export default function Header() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Avatar alt="Remy Sharp" src="/logo.jpeg" className={classes.large} />
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
