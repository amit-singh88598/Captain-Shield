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
      marginLeft: 5,
      fontSize: "1.6em",
      cursor: "pointer",
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Header() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            onClick={() => router.push("#")}
            alt="Remy Sharp"
            src="/logo.jpeg"
            className={classes.large}
          />
          <a
            onClick={() => router.push("#")}
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
