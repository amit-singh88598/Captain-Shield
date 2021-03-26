import React from "react";
import Head from "next/head";
import LogIn from "../Components/login";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    height: 760,
    display: "flex",
    justifyContent: "center",
    backgroundImage: 'url("/login.jpg")',
    backgroundSize: "1600px 800px",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      // height: 800,
      paddingTop: 80,
      backgroundImage: 'url("/login.jpg")',
      backgroundSize: "auto",
      backgroundRepeat: "no-repeat",
    },
  },
}));

function Login(props) {
  const classes = useStyle();
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>User Sign-in | Captain Shield</title>
      </Head>
      <div className={classes.root}>
        <LogIn role="user" />
      </div>
    </div>
  );
}

export default Login;
