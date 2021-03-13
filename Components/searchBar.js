import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "auto",
    // justifyContent: "flexEnd",
    // justifyContent: "right",
    // float: "right",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    borderRadius: 50,
    backgroundColor: theme.palette.primary.grey,
    color: "#000000",
    "&:hover": {
      backgroundColor: theme.palette.primary.grey,
      color: "#000000",
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 100,
      width: "30%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

// Search Bar

function SearchBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Search />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
