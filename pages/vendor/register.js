import React from "react";
import Head from "next/head";
import VendorRegister from "../../Components/register";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    height: 840,
    display: "flex",
    justifyContent: "center",
    backgroundImage: 'url("/login.jpg")',
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      height: 1030,
      backgroundImage: 'url("/login1.jpg")',
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
    },
  },
  // root: {
  //   height: 850,
  //   display: "flex",
  //   justifyContent: "center",
  //   backgroundImage: 'url("/login.jpg")',
  //   backgroundSize: "1600px 850px",
  //   backgroundRepeat: "no-repeat",
  //   [theme.breakpoints.down("sm")]: {
  //     height: 1030,
  //     backgroundImage: 'url("/login1.jpg")',
  //     backgroundSize: "414px 1030px",
  //     backgroundRepeat: "no-repeat",
  //   },
  // },
}));

function UserSignup(props) {
  const classes = useStyle();
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>User Sign-up | Captain Shield</title>
      </Head>
      <div className={classes.root}>
        <VendorRegister />
      </div>
    </div>
  );
}

export default UserSignup;
